/* Scroll restoration & deep-link handling for /locator and anchor hashes */
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}

function handleInitialScroll() {
  const hash = window.location.hash;
  const path = window.location.pathname;
  if (hash === '#locator' || path.includes('/locator')) {
    const el = document.getElementById('locator');
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      return;
    }
  } else if (hash && hash !== '#top') {
    const el = document.querySelector(hash);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      return;
    }
  }
  window.scrollTo(0, 0);
}

window.addEventListener('load', handleInitialScroll);

/* ==========================================================================
   Bombay Kulfi — Landing page interactions
   1. Mobile nav toggle
   2. Product Showcase tabs
   3. Store Locator (search + zone filters)
   ========================================================================== */

/* ============ 1. Mobile nav ============ */
(function () {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');

  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  // Close the dropdown after choosing a section
  document.querySelectorAll('.nav-mobile a').forEach((link) => {
    link.addEventListener('click', () => header.classList.remove('menu-open'));
  });

  // "Gulabo's World" is coming soon — disable navigation everywhere
  document.querySelectorAll('.nav-gulabo').forEach((link) => {
    link.addEventListener('click', (e) => e.preventDefault());
  });
})();

/* ============ 2. Product Showcase tabs ============ */
/*
   Traditional Kulfi lists follow the design file verbatim.
   The remaining categories come from the BK product portfolio.
   Item shape: string, or { name, note } where note renders as a small italic
   label (e.g. "Sugar Free", "New!").
*/
const BK_MENU = [
  {
    tab: 'Traditional Kulfi',
    image: 'assets/Traditional-Kulfi.png',
    tagline: 'Slow-churned. Caramelised. Uncompromisingly Real.',
    columns: [
      {
        title: 'Sticks',
        items: ['Malai', 'Kesar Pista', 'Mango', 'Badam Pista', 'Pista', 'Chocolate',
          'Black Currant', 'Butterscotch', 'Strawberry', 'Paan Masala',
          'Mango Gulkand 2 in 1', 'Choco Strawberry 2 in 1', 'Rangeela 4 in 1',
          'High Protein Malai']
      },
      {
        title: 'Slice',
        items: ['Malai', { name: 'Malai', note: 'Sugar Free' }, 'Kesar Pista',
          { name: 'Kesar Pista', note: 'Sugar Free' }, 'Mango', 'Chilli Guava',
          { name: 'Chilli Guava', note: 'Sugar Free' }, 'Badam Pista', 'Gulkand', 'Chickoo']
      },
      {
        title: 'Matka',
        items: ['Malai', 'Rajasthani Rabdi', 'Kesar Pista']
      }
    ]
  },
  {
    tab: 'Natural Ice Creams',
    image: 'assets/Natural-Ice-Creams.png',
    tagline: '100% Natural. Zero Compromises.',
    columns: [
      {
        title: 'Double Scoops — Cup or Waffle Cone',
        items: [
          'Tender Coconut', { name: 'Tender Coconut', note: 'Sugar Free' },
          'Calcutta Paan', { name: 'Calcutta Paan', note: 'Sugar Free' },
          'Chocochip', { name: 'Chocochip', note: 'Sugar Free' },
          'Shahi Gulab', 'Anjeer', 'Oreo', 'Roasted Almond'
        ]
      },
      {
        title: '',
        items: [
          'Bubble Gum Jelly', 'Salted Caramel', 'Crunchy Caramel', 'Black Chocolate',
          'Blueberry Cheese Cake', 'Vietnamese Coffee', 'Lotus Biscoff',
          'Madagascar Vanilla', 'Curry Leaves'
        ]
      }
    ]
  },
  {
    tab: 'Seasonal Treats',
    image: 'assets/Seasonal-Treats.png',
    tagline: 'Fresh from the season. Gone before you know it.',
    columns: [
      {
        title: 'Seasonal Flavours',
        items: ['Alphonso Mango', 'Thandai', 'Jackfruit', 'Kala Jamun', 'Sitaphal',
          'Chickoo', 'Black Grapes', 'Litchi', 'Strawberry']
      }
    ]
  },
  {
    tab: 'Vegan Delights',
    image: 'assets/Vegan-Delights.png',
    tagline: 'Slow-churned. Caramelised. Uncompromisingly Real.',
    columns: [
      {
        title: 'Vegan',
        items: ['Chocolate', 'Kesar Pista', 'Calcutta Paan']
      }
    ]
  },
  {
    tab: 'Shakes & Faloodas',
    image: 'assets/Shakes-Falooda.png',
    tagline: 'Thick, cold and absolutely irresistible.',
    columns: [
      {
        title: 'Shakes',
        items: ['Kulfi Milkshake', 'Ice Cream Milkshake']
      },
      {
        title: 'Faloodas',
        items: ['Malai Kulfi', 'Mango Kulfi', 'Kesar Pista Kulfi',
          'Gulkand Kulfi', 'Shahi Gulab Ice Cream', 'Madagascar Vanilla Ice Cream']
      }
    ]
  },
  {
    tab: 'Fruit Sensations',
    image: 'assets/Fruit-Sensation.png',
    tagline: 'Real Dessert inside Real Fruit!',
    columns: [
      {
        title: 'Fruit Sensation',
        items: ['Orange', 'Guava', 'Apple']
      }
    ]
  },
  {
    tab: 'Sundaes',
    image: 'assets/Sundaes.png',
    tagline: 'Layered. Loaded. Totally over the top.',
    columns: [
      {
        title: 'Sundaes',
        items: ['Jelly Belly', 'Tiramisu', 'Cookie Monster', 'Death By Chocolate', 'Chocoland']
      }
    ]
  }
];


(function () {
  const tabBar    = document.querySelector('.tabs');
  const artEl     = document.querySelector('.showcase-art');
  const menuEl    = document.querySelector('.showcase-menu');
  const taglineEl = document.querySelector('.showcase-tagline');

  let currentIdx = 0;

  function renderMenu(index) {
    const category = BK_MENU[index];

    artEl.innerHTML = '';
    const img = document.createElement('img');
    img.src = category.image;
    img.alt = category.tab;
    img.className = 'showcase-cat-img';
    artEl.appendChild(img);

    if (taglineEl) taglineEl.textContent = category.tagline || '';

    menuEl.innerHTML = '';
    menuEl.style.setProperty('--menu-cols', Math.min(category.columns.length, 3));

    category.columns.forEach((col) => {
      const colEl = document.createElement('div');
      colEl.className = 'menu-col';

      if (col.title) {
        const h3 = document.createElement('h3');
        h3.textContent = col.title;
        colEl.appendChild(h3);
      }
      if (col.subtitle) {
        const sub = document.createElement('p');
        sub.className = 'col-sub';
        sub.textContent = col.subtitle;
        colEl.appendChild(sub);
      }
      const ul = document.createElement('ul');
      col.items.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = typeof item === 'string' ? item : item.name;
        if (typeof item === 'object' && item.note) {
          const note = document.createElement('span');
          note.className = 'note';
          note.textContent = item.note;
          li.appendChild(note);
        }
        ul.appendChild(li);
      });
      colEl.appendChild(ul);
      menuEl.appendChild(colEl);
    });
  }

  function navigateTo(idx) {
    currentIdx = (idx + BK_MENU.length) % BK_MENU.length;
    tabBar.querySelectorAll('.tab').forEach((t, i) => {
      t.classList.toggle('is-active', i === currentIdx);
      t.setAttribute('aria-selected', String(i === currentIdx));
    });
    if (catLabel) catLabel.textContent = BK_MENU[currentIdx].tab;
    renderMenu(currentIdx);
  }

  // Build desktop tab buttons
  BK_MENU.forEach((category, i) => {
    const btn = document.createElement('button');
    btn.className = 'tab' + (i === 0 ? ' is-active' : '');
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', String(i === 0));
    btn.textContent = category.tab;
    btn.addEventListener('click', () => navigateTo(i));
    tabBar.appendChild(btn);
  });

  // Build mobile arrow nav
  const prevBtn = document.createElement('button');
  prevBtn.className = 'showcase-arrow showcase-arrow-prev';
  prevBtn.setAttribute('aria-label', 'Previous category');
  prevBtn.innerHTML = '&#8592;';

  const catLabel = document.createElement('span');
  catLabel.className = 'showcase-cat-label';
  catLabel.textContent = BK_MENU[0].tab;

  const nextBtn = document.createElement('button');
  nextBtn.className = 'showcase-arrow showcase-arrow-next';
  nextBtn.setAttribute('aria-label', 'Next category');
  nextBtn.innerHTML = '&#8594;';

  const mobileNav = document.createElement('div');
  mobileNav.className = 'showcase-mobile-nav';
  mobileNav.append(prevBtn, catLabel, nextBtn);
  tabBar.parentNode.insertBefore(mobileNav, tabBar);

  prevBtn.addEventListener('click', () => navigateTo(currentIdx - 1));
  nextBtn.addEventListener('click', () => navigateTo(currentIdx + 1));

  renderMenu(0);
})();

/* ============ 3. Store Locator (Google Maps + Live Sheet Sync) ============ */
(function () {
  const searchInput = document.getElementById('locator-search');
  const listEl = document.getElementById('locator-list');
  const countEl = document.getElementById('locator-count');
  const chips = document.querySelectorAll('.chip');

  let activeZone = 'all';
  let outlets = typeof getInitialOutlets === 'function' ? getInitialOutlets() : (typeof BK_OUTLETS !== 'undefined' ? BK_OUTLETS : []);
  let map = null;
  let markers = [];
  let infoWindow = null;

  // Retro-warm map styling matching Bombay Kulfi branding
  const BK_MAP_STYLES = [
    { elementType: "geometry", stylers: [{ color: "#fbf8ef" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#ffffff" }, { weight: 3 }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#222223" }] },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [{ color: "#c9c2af" }]
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#222223" }, { weight: 600 }]
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#6e6a60" }]
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#e3edd9" }]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }]
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#ebd9c3" }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#ffeed6" }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#f2cca0" }]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#cee4e4" }]
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#4f7575" }]
    }
  ];

  // SVG Pins: Orange for Open Now (#DC582A), Purple for Coming Soon (#7B2869)
  const PIN_SVG_OPEN = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
      <defs>
        <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.35"/>
        </filter>
      </defs>
      <path d="M14 1C6.82 1 1 6.82 1 14c0 9.2 13 21 13 21s13-11.8 13-21C27 6.82 21.18 1 14 1z" fill="#DC582A" stroke="#ffffff" stroke-width="1.8" filter="url(#s)"/>
      <circle cx="14" cy="13" r="5" fill="#FFFFFF"/>
      <circle cx="14" cy="13" r="2.5" fill="#DC582A"/>
    </svg>
  `);

  const PIN_SVG_SOON = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
      <defs>
        <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.35"/>
        </filter>
      </defs>
      <path d="M14 1C6.82 1 1 6.82 1 14c0 9.2 13 21 13 21s13-11.8 13-21C27 6.82 21.18 1 14 1z" fill="#7B2869" stroke="#ffffff" stroke-width="1.8" filter="url(#s)"/>
      <circle cx="14" cy="13" r="5" fill="#FFFFFF"/>
      <circle cx="14" cy="13" r="2.5" fill="#7B2869"/>
    </svg>
  `);

  function outletLabel(o) {
    return o.name.toLowerCase() === o.city.toLowerCase() ? o.city : o.name + ', ' + o.city;
  }

  function getPopupHtml(o) {
    const isSoon = o.status && o.status !== 'Open Now';
    const badgeHtml = isSoon ? `<span class="badge-soon">${o.status}</span>` : '';
    const mapsLink = o.maps ? `<a class="bk-popup-link" href="${o.maps}" target="_blank" rel="noopener">Get Directions ↗</a>` : '';

    return `
      <div class="bk-popup">
        <p class="bk-popup-title">${outletLabel(o)}${badgeHtml}</p>
        <p class="bk-popup-addr">${o.address || ''}</p>
        ${mapsLink}
      </div>
    `;
  }

  function createMarkers() {
    if (!map || !window.google || !google.maps) return;

    // Clear existing markers
    markers.forEach(m => m.setMap(null));
    markers = [];

    outlets.forEach((o, i) => {
      const isSoon = o.status && o.status !== 'Open Now';
      const marker = new google.maps.Marker({
        position: { lat: o.lat, lng: o.lng },
        map: map,
        title: outletLabel(o),
        icon: {
          url: isSoon ? PIN_SVG_SOON : PIN_SVG_OPEN,
          scaledSize: new google.maps.Size(26, 34),
          anchor: new google.maps.Point(13, 34)
        }
      });

      marker.addListener('click', () => {
        infoWindow.setContent(getPopupHtml(o));
        infoWindow.open(map, marker);
      });

      markers.push(marker);
    });
  }

  function matchesFilter(o) {
    const query = (searchInput ? searchInput.value : '').trim().toLowerCase();
    const zoneOk = activeZone === 'all' || o.zone === activeZone;
    const textOk = !query ||
      o.name.toLowerCase().includes(query) ||
      o.city.toLowerCase().includes(query) ||
      o.state.toLowerCase().includes(query) ||
      (o.address && o.address.toLowerCase().includes(query));
    return zoneOk && textOk;
  }

  function renderListAndMarkers() {
    if (!listEl || !countEl) return;

    const matched = [];
    const bounds = (window.google && google.maps) ? new google.maps.LatLngBounds() : null;

    outlets.forEach((o, i) => {
      const isMatch = matchesFilter(o);
      if (markers[i]) {
        if (isMatch) {
          markers[i].setMap(map);
          if (bounds) bounds.extend(markers[i].getPosition());
        } else {
          markers[i].setMap(null);
        }
      }
      if (isMatch) matched.push(i);
    });

    countEl.textContent = matched.length;
    listEl.innerHTML = '';

    if (!matched.length) {
      const li = document.createElement('li');
      li.className = 'no-results';
      li.textContent = 'No outlets found — Gulaabo is on her way!';
      listEl.appendChild(li);
      if (map) {
        map.setCenter({ lat: 21.5, lng: 79 });
        map.setZoom(4);
      }
      return;
    }

    matched.forEach((i) => {
      const o = outlets[i];
      const li = document.createElement('li');
      li.tabIndex = 0;
      li.setAttribute('role', 'button');

      const cityName = document.createElement('span');
      cityName.className = 'outlet-city';
      cityName.textContent = outletLabel(o);

      if (o.status && o.status !== 'Open Now') {
        const badge = document.createElement('span');
        badge.className = 'badge-soon';
        badge.textContent = o.status;
        cityName.appendChild(badge);
      }

      const addr = document.createElement('span');
      addr.className = 'outlet-addr';
      addr.textContent = o.address || '';

      li.append(cityName, addr);

      const focusOutlet = () => {
        if (!map || !markers[i]) return;
        map.panTo({ lat: o.lat, lng: o.lng });
        map.setZoom(14);
        if (infoWindow) {
          infoWindow.setContent(getPopupHtml(o));
          infoWindow.open(map, markers[i]);
        }
      };

      li.addEventListener('click', focusOutlet);
      li.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); focusOutlet(); }
      });
      listEl.appendChild(li);
    });

    if (map && bounds && !bounds.isEmpty()) {
      map.fitBounds(bounds, { top: 45, right: 45, bottom: 45, left: 45 });
      // Prevent zooming in too close when only 1 marker matches
      const listener = google.maps.event.addListener(map, 'idle', () => {
        if (map.getZoom() > 14) map.setZoom(14);
        google.maps.event.removeListener(listener);
      });
    }
  }

  // Google Maps Initialization Callback
  window.initBKMap = function () {
    function tryInit() {
      const mapContainer = document.getElementById('outlet-map');
      if (!mapContainer) {
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', tryInit);
        }
        return;
      }
      if (!window.google || !window.google.maps) return;
      if (map) return; // already initialized

      map = new google.maps.Map(mapContainer, {
        center: { lat: 21.5, lng: 79 },
        zoom: 5,
        styles: BK_MAP_STYLES,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
        scrollwheel: true
      });

      infoWindow = new google.maps.InfoWindow({
        maxWidth: 280
      });

      createMarkers();
      renderListAndMarkers();
    }
    tryInit();
  };

  // Fallback if Google Maps script loaded before main.js executed
  if (window.google && window.google.maps && !map) {
    window.initBKMap();
  } else {
    window.addEventListener('load', () => {
      if (window.google && window.google.maps && !map) {
        window.initBKMap();
      }
    });
  }

  // Setup UI event listeners
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      activeZone = chip.dataset.zone;
      renderListAndMarkers();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', renderListAndMarkers);
  }

  // Handle fresh outlets from background Google Sheets sync
  function onFreshOutlets(freshOutlets) {
    if (!Array.isArray(freshOutlets) || freshOutlets.length === 0) return;
    outlets = freshOutlets;
    createMarkers();
    renderListAndMarkers();
  }

  // Secret admin trigger by clicking count (forces live sheet sync)
  if (countEl) {
    countEl.style.cursor = 'pointer';
    countEl.title = 'Click to check latest stores from Google Sheets';
    countEl.addEventListener('click', () => {
      countEl.textContent = '...';
      if (typeof syncOutletsFromSheet === 'function') {
        syncOutletsFromSheet((fresh) => {
          onFreshOutlets(fresh);
        }, true);
      }
    });
  }

  // Check URL parameters for force refresh flag (?refresh=1 or ?sync=1)
  const urlParams = new URLSearchParams(window.location.search);
  const forceRefresh = urlParams.has('refresh') || urlParams.has('sync');

  // Launch background sync (non-blocking, 0ms delay to UI)
  if (typeof syncOutletsFromSheet === 'function') {
    syncOutletsFromSheet(onFreshOutlets, forceRefresh);
  }

  // Initial list rendering if Google Maps is still loading asynchronously
  renderListAndMarkers();
})();

/* ============ 4. Hero video — scrub on desktop, autoplay on mobile ============ */
(function () {
  const video = document.querySelector('.hero-video');
  if (!video) return;

  const isTouch = window.matchMedia('(hover: none)').matches;

  if (isTouch) {
    // Mobile: bounce (ping-pong) playback — forward then backward in loop
    video.removeAttribute('loop');   // handle looping manually
    video.setAttribute('autoplay', '');
    video.currentTime = 0;
    video.play().catch(() => {});

    const STEP = 1 / 30; // ~30fps reverse step size
    let reversing = false;

    function reverseFrame() {
      video.currentTime = Math.max(0, video.currentTime - STEP);
      if (video.currentTime <= 0.04) {
        reversing = false;
        video.play().catch(() => {}); // play forward again
      } else {
        requestAnimationFrame(reverseFrame);
      }
    }

    video.addEventListener('ended', () => {
      if (!reversing) {
        reversing = true;
        requestAnimationFrame(reverseFrame);
      }
    });
    return;
  }

  // Desktop: mouse-scrub
  const SENSITIVITY = 0.8;
  let prevX      = null;
  let targetTime = 0;
  let isSeeking  = false;

  function doSeek() {
    isSeeking = true;
    video.currentTime = targetTime;
  }

  video.addEventListener('seeked', () => {
    isSeeking = false;
    if (Math.abs(video.currentTime - targetTime) > 0.001) doSeek();
  });

  window.addEventListener('mousemove', (e) => {
    if (prevX === null) { prevX = e.clientX; return; }
    const dur = video.duration;
    if (!dur) { prevX = e.clientX; return; }
    const delta  = e.clientX - prevX;
    prevX = e.clientX;
    const offset = (delta / window.innerWidth) * SENSITIVITY * dur;
    targetTime   = Math.max(0, Math.min(dur, targetTime + offset));
    if (!isSeeking) doSeek();
  });
})();

/* ============ 5. Founder photo — random quote bubble on click ============ */
(function () {
  const wrap  = document.querySelector('.founder-photo-wrap');
  const photo = wrap && wrap.querySelector('.founder-photo');
  if (!photo) return;

  const QUOTES = Array.from({ length: 9 }, (_, i) => `assets/Q${i + 1}.png`);

  const bubble = document.createElement('img');
  bubble.className = 'quote-bubble';
  bubble.alt = '';
  bubble.setAttribute('aria-hidden', 'true');
  wrap.appendChild(bubble);

  // Preload so first click is instant
  QUOTES.forEach((src) => { const img = new Image(); img.src = src; });

  let outTimer = null;
  let lastIdx  = -1;

  photo.addEventListener('click', () => {
    clearTimeout(outTimer);

    // Pick a different random quote each click
    let idx;
    do { idx = Math.floor(Math.random() * QUOTES.length); }
    while (idx === lastIdx && QUOTES.length > 1);
    lastIdx = idx;

    // Reset animation state, swap image, then trigger pop-in
    bubble.classList.remove('pop-in', 'pop-out');
    bubble.src = QUOTES[idx];
    void bubble.offsetWidth; // force reflow so animation restarts
    bubble.classList.add('pop-in');

    // After 5 s start pop-out (finishes at ~6 s)
    outTimer = setTimeout(() => {
      bubble.classList.replace('pop-in', 'pop-out');
      setTimeout(() => bubble.classList.remove('pop-out'), 1000);
    }, 5000);
  });
})();

/* ============ 5. Scroll-shrink nav ============ */
(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    const w = window.innerWidth;
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
      let h = '85px';
      if (w <= 480) h = '60px';
      else if (w <= 640) h = '70px';
      else if (w <= 1024) h = '70px';
      document.documentElement.style.setProperty('--header-h', h);
    } else {
      header.classList.remove('scrolled');
      let h = '152px';
      if (w <= 480) h = '86px';
      else if (w <= 640) h = '96px';
      else if (w <= 1024) h = '110px';
      document.documentElement.style.setProperty('--header-h', h);
    }
  }, { passive: true });
})();
