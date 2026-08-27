/* ==========================================================================
   Bombay Kulfi Ice Creams — Store Locator Sync Module
   --------------------------------------------------------------------------
   - Automatically synchronizes store presence from Google Sheets (read-only CSV).
   - Stale-While-Revalidate: Instant render from cache + non-blocking background sync.
   - Built-in geocoding & multi-store jittering to prevent pin overlap.
   ========================================================================== */

const BK_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/1ITOa7SWMK3JfHMn3n5tdF99SFrhBkqvZUaWt3hiVXzc/export?format=csv';
const BK_CACHE_KEY = 'bk_outlets_cache_v2';
const BK_CACHE_TIME_KEY = 'bk_outlets_last_sync';

// Known coordinates for Indian cities and International locations
const BK_CITY_COORDS = {
  'ahilyanagar': [19.09, 74.74],
  'ajmer': [26.45, 74.64],
  'amritsar': [31.63, 74.87],
  'anand': [22.56, 72.95],
  'bengaluru': [12.97, 77.59],
  'bangalore': [12.97, 77.59],
  'bhilai': [21.21, 81.38],
  'bhubaneswar': [20.30, 85.82],
  'bikaner': [28.02, 73.31],
  'chennai': [13.08, 80.27],
  'chhatrapati sambhajinagar': [19.88, 75.34],
  'aurangabad': [19.88, 75.34],
  'coimbatore': [11.02, 76.96],
  'cuttack': [20.46, 85.88],
  'danapur': [25.63, 85.05],
  'danapur, patna': [25.63, 85.05],
  'darbhanga': [26.15, 85.90],
  'deoghar': [24.48, 86.70],
  'dhanbad': [23.80, 86.43],
  'erode': [11.34, 77.72],
  'firozpur jhirka': [27.79, 76.95],
  'ghaziabad': [28.67, 77.45],
  'goa': [15.29, 73.98],
  'greater noida': [28.47, 77.50],
  'gurugram': [28.46, 77.03],
  'gurgaon': [28.46, 77.03],
  'hanumangarh': [29.58, 74.32],
  'haryana': [28.46, 77.03],
  'howrah': [22.59, 88.31],
  'hubballi': [15.36, 75.12],
  'hubli': [15.36, 75.12],
  'hyderabad': [17.38, 78.49],
  'jaipur': [26.91, 75.79],
  'jamnagar': [22.47, 70.06],
  'jodhpur': [26.28, 73.02],
  'kolkata': [22.57, 88.36],
  'madgaon': [15.27, 73.96],
  'margao': [15.27, 73.96],
  'mirzapur': [25.15, 82.57],
  'mumbai': [19.08, 72.88],
  'nagpur': [21.15, 79.09],
  'navi mumbai': [19.03, 73.02],
  'new delhi': [28.61, 77.21],
  'delhi': [28.61, 77.21],
  'noida': [28.57, 77.33],
  'pathankot': [32.27, 75.65],
  'patna': [25.61, 85.14],
  'pimpri-chinchwad': [18.63, 73.80],
  'ponda': [15.40, 74.02],
  'pune': [18.52, 73.86],
  'secunderabad': [17.44, 78.50],
  'solan': [30.91, 77.10],
  'solapur': [17.66, 75.91],
  'surat': [21.17, 72.83],
  'theni': [10.01, 77.48],
  'tiruppur': [11.11, 77.34],
  'uchakkada': [8.40, 77.01],
  'ujjain': [23.18, 75.78],
  'vapi': [20.37, 72.90],
  'vijayawada': [16.51, 80.65],
  'visakhapatnam': [17.68, 83.21],
  'guwahati': [26.14, 91.73],
  'jamshedpur': [22.80, 86.20],
  'ranchi': [23.34, 85.30],
  'mysuru': [12.29, 76.63],
  'mysore': [12.29, 76.63],
  'singapore': [1.352, 103.820],
  'kuala lumpur': [3.139, 101.686],
  'dubai': [25.204, 55.270],
  'doha': [25.285, 51.531]
};

// State to Zonal region mapping
const BK_STATE_ZONES = {
  'punjab': 'north', 'haryana': 'north', 'himachal pradesh': 'north',
  'uttar pradesh': 'north', 'rajasthan': 'north', 'delhi': 'north',
  'chandigarh': 'north', 'uttarakhand': 'north', 'jammu and kashmir': 'north',
  'bihar': 'east', 'jharkhand': 'east', 'west bengal': 'east',
  'chhattisgarh': 'east', 'odisha': 'east', 'assam': 'east',
  'maharashtra': 'west', 'gujarat': 'west', 'goa': 'west', 'madhya pradesh': 'west',
  'tamil nadu': 'south', 'karnataka': 'south', 'kerala': 'south',
  'telangana': 'south', 'andhra pradesh': 'south', 'puducherry': 'south',
  'singapore': 'int', 'malaysia': 'int', 'uae': 'int', 'qatar': 'int', 'international': 'int'
};

/**
 * Robust CSV parser that handles quotes, escaped quotes, commas, and newlines.
 */
function parseCSV(text) {
  const lines = [];
  let row = [''];
  let inQuotes = false;
  let i = 0;

  while (i < text.length) {
    const c = text[i];
    const next = text[i + 1];

    if (c === '"') {
      if (inQuotes && next === '"') {
        row[row.length - 1] += '"';
        i += 2;
        continue;
      }
      inQuotes = !inQuotes;
    } else if (c === ',' && !inQuotes) {
      row.push('');
    } else if ((c === '\r' || c === '\n') && !inQuotes) {
      if (c === '\r' && next === '\n') i++;
      lines.push(row);
      row = [''];
    } else {
      row[row.length - 1] += c;
    }
    i++;
  }
  if (row.length > 1 || (row.length === 1 && row[0].trim() !== '')) {
    lines.push(row);
  }
  return lines;
}

/**
 * Transforms raw CSV rows into structured, jittered outlet objects.
 */
function transformSheetData(csvText) {
  const rows = parseCSV(csvText);
  if (!rows || rows.length < 2) return null;

  const header = rows[0].map(h => h.trim().toLowerCase());
  const idxStatus = header.indexOf('status');
  const idxMaps = header.findIndex(h => h.includes('maps') || h.includes('link'));
  const idxName = header.findIndex(h => h.includes('name') || h.includes('business'));
  const idxAddress = header.indexOf('address');
  const idxCity = header.indexOf('city');
  const idxState = header.indexOf('state');

  if (idxCity === -1 || idxAddress === -1) {
    console.warn('[BK Sync] CSV missing required columns:', header);
    return null;
  }

  const cityCount = {};
  const outlets = [];

  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    if (!row || row.length <= 1) continue;

    let city = (row[idxCity] || '').trim();
    let state = (row[idxState] || '').trim();
    const rawName = (row[idxName] || '').trim();
    const address = (row[idxAddress] || '').trim();
    const maps = (row[idxMaps] || '').trim();
    const status = (row[idxStatus] || 'Open Now').trim();

    if (!city && !rawName && !address) continue;

    // Fix edge cases where city is set as Singapore or state is empty
    if (city.toLowerCase() === 'singapore' || rawName.toLowerCase().includes('singapore')) {
      city = 'Singapore';
      state = 'Singapore';
    }

    // Branch display name = business name without brand prefix
    let name = rawName.replace(/^Bombay\s+Kulfi(\s+Ice\s*Creams?)?\s*[-–—]?\s*/i, '').trim();
    if (!name) name = city || 'Bombay Kulfi';

    const cityKey = city.toLowerCase();
    const stateKey = state.toLowerCase();

    // Coordinate resolution
    let coords = BK_CITY_COORDS[cityKey];
    if (!coords) {
      // Try resolving by branch name or address
      for (const k in BK_CITY_COORDS) {
        if (address.toLowerCase().includes(k) || name.toLowerCase().includes(k)) {
          coords = BK_CITY_COORDS[k];
          break;
        }
      }
    }

    if (!coords) {
      console.warn('[BK Sync] No coordinates found for city:', city, rawName);
      coords = [20.5937, 78.9629]; // Default center of India fallback
    }

    // Zone determination
    let zone = BK_STATE_ZONES[stateKey] || 'south';
    if (cityKey === 'singapore' || stateKey === 'singapore') zone = 'int';

    // Jitter calculation for multiple outlets in same city
    const k = cityCount[cityKey] || 0;
    cityCount[cityKey] = k + 1;

    let lat = coords[0];
    let lng = coords[1];
    if (k > 0) {
      const angle = k * 2.399;
      const rOffset = 0.012 + 0.004 * k;
      lat = lat + rOffset * Math.cos(angle);
      lng = lng + rOffset * Math.sin(angle);
    }

    outlets.push({
      name: name,
      city: city,
      state: state,
      zone: zone,
      address: address,
      maps: maps,
      status: status,
      lat: Math.round(lat * 10000) / 10000,
      lng: Math.round(lng * 10000) / 10000
    });
  }

  return outlets.length > 0 ? outlets : null;
}

/**
 * Returns currently available outlets immediately from Cache or bundled BK_OUTLETS.
 */
function getInitialOutlets() {
  try {
    const cached = localStorage.getItem(BK_CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('[BK Sync] Could not read local cache:', e);
  }
  return typeof BK_OUTLETS !== 'undefined' ? BK_OUTLETS : [];
}

/**
 * Fetches the live Google Sheet in the background and calls onUpdated if fresh data arrives.
 */
async function syncOutletsFromSheet(onUpdated, forceRefresh = false) {
  try {
    const now = Date.now();
    const lastSync = parseInt(localStorage.getItem(BK_CACHE_TIME_KEY) || '0', 10);
    // Auto-sync if forceRefresh OR if last sync was > 5 minutes ago
    const shouldFetch = forceRefresh || (now - lastSync > 5 * 60 * 1000);

    const url = BK_SHEET_CSV_URL + (forceRefresh ? `&_t=${now}` : '');
    const response = await fetch(url, { cache: forceRefresh ? 'no-cache' : 'default' });
    if (!response.ok) {
      console.warn('[BK Sync] Sheet request returned HTTP', response.status);
      return;
    }

    const csvText = await response.text();
    const freshOutlets = transformSheetData(csvText);

    if (freshOutlets && freshOutlets.length > 0) {
      const oldCachedStr = localStorage.getItem(BK_CACHE_KEY);
      const newStr = JSON.stringify(freshOutlets);

      localStorage.setItem(BK_CACHE_KEY, newStr);
      localStorage.setItem(BK_CACHE_TIME_KEY, String(now));

      if (oldCachedStr !== newStr) {
        console.log(`[BK Sync] Loaded ${freshOutlets.length} updated outlets from Google Sheets.`);
        if (typeof onUpdated === 'function') {
          onUpdated(freshOutlets);
        }
      }
    }
  } catch (err) {
    console.warn('[BK Sync] Background sync failed, using cached/fallback data:', err);
  }
}
