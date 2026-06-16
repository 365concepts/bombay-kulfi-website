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
          'Black Currant', 'Butterscotch', 'Strawberry', 'Mango Gulkand 2 in 1',
          'Choco Strawberry 2 in 1', 'Rangeela 4 in 1']
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
          'Tender Coconut',
          { name: 'Tender Coconut', note: 'Sugar Free' },
          'Calcutta Paan',
          { name: 'Calcutta Paan', note: 'Sugar Free' },
          'Chocochip',
          { name: 'Chocochip', note: 'Sugar Free' },
          'Shahi Gulab',
          'Anjeer',
          'Oreo',
          'Roasted Almond'
        ]
      },
      {
        title: '',
        items: [
          'Bubble Gum Jelly',
          'Salted Caramel',
          'Crunchy Caramel',
          'Black Chocolate',
          'Blueberry Cheese Cake',
          'Vietnamese Coffee',
          'Lotus Biscoff',
          'Madagascar Vanilla',
          'Curry Leaves'
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
    image: 'assets/Shakes-Faloodas.png',
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
        items: ['Jelly Belly', 'Tiramisu', 'Cookie Monster',
          'Death By Chocolate', 'Chocoland']
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

/* ============ 3. Store Locator (list + Leaflet map) ============ */
(function () {
  const searchInput = document.getElementById('locator-search');
  const listEl = document.getElementById('locator-list');
  const countEl = document.getElementById('locator-count');
  const chips = document.querySelectorAll('.chip');

  let activeZone = 'all';

  /* ----- Map setup ----- */
  const map = L.map('outlet-map', { scrollWheelZoom: true });
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // "Tiruppur, Tiruppur" → "Tiruppur" when branch name is just the city
  function outletLabel(o) {
    return o.name.toLowerCase() === o.city.toLowerCase() ? o.city : o.name + ', ' + o.city;
  }

  function pinIcon(comingSoon) {
    return L.divIcon({
      className: '',
      html: `<div class="bk-pin-dot${comingSoon ? ' bk-pin-dot-soon' : ''}"></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7],
      popupAnchor: [0, -10]
    });
  }

  function popupContent(o) {
    const box = document.createElement('div');
    box.className = 'bk-popup';

    const title = document.createElement('p');
    title.className = 'bk-popup-title';
    title.textContent = outletLabel(o);
    box.appendChild(title);

    if (o.status && o.status !== 'Open Now') {
      const badge = document.createElement('span');
      badge.className = 'badge-soon';
      badge.textContent = o.status;
      box.appendChild(badge);
    }

    const addr = document.createElement('p');
    addr.className = 'bk-popup-addr';
    addr.textContent = o.address;
    box.appendChild(addr);

    if (o.maps) {
      const link = document.createElement('a');
      link.className = 'bk-popup-link';
      link.href = o.maps;
      link.target = '_blank';
      link.rel = 'noopener';
      link.textContent = 'Get Directions ↗';
      box.appendChild(link);
    }
    return box;
  }

  // One marker per outlet, reused across filter changes
  const markers = BK_OUTLETS.map((o) => {
    const m = L.marker([o.lat, o.lng], { icon: pinIcon(o.status !== 'Open Now') });
    m.bindPopup(popupContent(o));
    return m;
  });

  /* ----- Filtering ----- */
  function matchesFilter(o) {
    const query = searchInput.value.trim().toLowerCase();
    const zoneOk = activeZone === 'all' || o.zone === activeZone;
    const textOk = !query ||
      o.name.toLowerCase().includes(query) ||
      o.city.toLowerCase().includes(query) ||
      o.state.toLowerCase().includes(query);
    return zoneOk && textOk;
  }

  function render() {
    const matched = [];
    BK_OUTLETS.forEach((o, i) => {
      if (matchesFilter(o)) {
        matched.push(i);
        if (!map.hasLayer(markers[i])) markers[i].addTo(map);
      } else if (map.hasLayer(markers[i])) {
        map.removeLayer(markers[i]);
      }
    });

    countEl.textContent = matched.length;
    listEl.innerHTML = '';

    if (!matched.length) {
      const li = document.createElement('li');
      li.className = 'no-results';
      li.textContent = 'No outlets found — Gulaabo is on her way!';
      listEl.appendChild(li);
      map.setView([21.5, 79], 4);
      return;
    }

    matched.forEach((i) => {
      const o = BK_OUTLETS[i];
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
        map.flyTo([o.lat, o.lng], 13, { duration: 0.8 });
        markers[i].openPopup();
      };
      li.addEventListener('click', focusOutlet);
      li.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); focusOutlet(); }
      });
      listEl.appendChild(li);
    });

    const bounds = L.latLngBounds(matched.map((i) => [BK_OUTLETS[i].lat, BK_OUTLETS[i].lng]));
    map.fitBounds(bounds, { padding: [45, 45], maxZoom: 12 });
  }

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      activeZone = chip.dataset.zone;
      render();
    });
  });

  searchInput.addEventListener('input', render);
  render();
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
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
      document.documentElement.style.setProperty('--header-h', '70px');
    } else {
      header.classList.remove('scrolled');
      document.documentElement.style.setProperty('--header-h', '152px');
    }
  }, { passive: true });
})();
