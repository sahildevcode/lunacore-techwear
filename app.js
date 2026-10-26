/**
 * LUNACORE™ // SS23 E-COMMERCE ENGINE
 * Avant-Garde Streetwear & Cybernetic Techwear
 * Currency: Indian Rupees (INR - ₹)
 * Primary Assets: Exact Crops from Supplied Reference Design
 */

// Helper for Indian Rupee Formatting
function formatINR(val) {
  return '₹' + Number(val).toLocaleString('en-IN');
}

// Master Products Database (Directly from Reference Image)
const PRODUCTS = [
  {
    id: 'anorak-stalker',
    name: 'ANORAK STALKER',
    category: 'men',
    price: 11999,
    oldPrice: 15499,
    rating: 4.9,
    reviewsCount: 142,
    salesCount: '1.2K+ sold',
    isBestSeller: true,
    image: 'assets/prod_anorak@3x.jpg',
    tag: '#1 BESTSELLER',
    desc: 'Weather-sealed 3-layer storm anorak with articulated storm hood, taped seams, and Fidlock® magnetic buckles.'
  },
  {
    id: 'kimono-liu-kang',
    name: 'KIMONO LIU KANG',
    category: 'men',
    price: 4999,
    oldPrice: 7999,
    rating: 5.0,
    reviewsCount: 310,
    salesCount: '2.4K+ sold',
    isBestSeller: true,
    image: 'assets/prod_kimono@3x.jpg',
    tag: 'SS23 SALE',
    desc: 'Japanese Noragi silhouette re-engineered with DWR Cordura canvas and Kanji vertical embroidery: 徒尔街头.'
  },
  {
    id: 'tactical-windbreaker',
    name: 'STORM WINDBREAKER',
    category: 'men',
    price: 8499,
    oldPrice: 11200,
    rating: 4.8,
    reviewsCount: 89,
    salesCount: '800+ sold',
    isBestSeller: false,
    image: 'assets/prod_windbreaker@3x.jpg',
    tag: 'WATERPROOF',
    desc: 'Ultralight ripstop storm jacket designed for extreme urban downpours and wind gusts up to 80 km/h.'
  },
  {
    id: 'shadow-longsleeve',
    name: 'SHADOW RUNNER TEE',
    category: 'men',
    price: 3499,
    oldPrice: 4999,
    rating: 4.7,
    reviewsCount: 65,
    salesCount: '650+ sold',
    isBestSeller: false,
    image: 'assets/prod_shadow@3x.jpg',
    tag: 'MINIMAL',
    desc: 'Ergonomic seamless compression base layer with thumb-loop cuffs and reflective circuit trace details.'
  },
  {
    id: 'tactical-cargo-gear',
    name: 'MODULAR CARGO APPAREL',
    category: 'accessories',
    price: 5999,
    oldPrice: 7999,
    rating: 4.9,
    reviewsCount: 220,
    salesCount: '1.8K+ sold',
    isBestSeller: true,
    image: 'assets/cat_accessories@3x.jpg',
    tag: 'TOP RATED',
    desc: 'Tactical modular sling pack and cordura utility gear designed for rapid urban transit.'
  },
  {
    id: 'cyber-femme-jacket',
    name: 'CYBER STREET RUNNER',
    category: 'women',
    price: 6799,
    oldPrice: 8999,
    rating: 4.9,
    reviewsCount: 94,
    salesCount: '730+ sold',
    isBestSeller: true,
    image: 'assets/cat_women@3x.jpg',
    tag: 'FEMME TECH',
    desc: 'High-collar structured avant-garde silhouette with extended articulated thumb sleeves and matte black hardware.'
  },
  {
    id: 'men-duo-streetwear',
    name: 'STEALTH DUAL OVERSIZED HOODIE',
    category: 'men',
    price: 7499,
    oldPrice: 9800,
    rating: 4.8,
    reviewsCount: 115,
    salesCount: '920+ sold',
    isBestSeller: false,
    image: 'assets/cat_men@3x.jpg',
    tag: 'BESTSELLER',
    desc: 'Raw dark heavyweight streetwear hoodie with articulated sleeve paneling and weather-repellent finish.'
  },
  {
    id: 'kimono-hero-edition',
    name: 'KIMONO LIU KANG [STEALTH DROP]',
    category: 'men',
    price: 4999,
    oldPrice: 7999,
    rating: 5.0,
    reviewsCount: 178,
    salesCount: '1.1K+ sold',
    isBestSeller: true,
    image: 'assets/hero_model@3x.jpg',
    tag: 'TRENDING',
    desc: 'Limited studio drop worn by lead model in SS23 lookbook. Built with Japanese high-density tech weave.'
  }
];

// Special Offer Flash Deals
const OFFER_PRODUCTS = [
  {
    id: 'flash-deal-1',
    name: 'STORM WINDBREAKER [PROTOTYPE]',
    category: 'men',
    price: 5999,
    oldPrice: 11200,
    discountPercent: '46% OFF',
    image: 'assets/prod_windbreaker@3x.jpg',
    tag: 'FLASH DEAL',
    desc: 'Laboratory prototype run with laser-cut ventilation and stormproof collar.'
  },
  {
    id: 'flash-deal-2',
    name: 'ANORAK STALKER [SAMPLE]',
    category: 'men',
    price: 7999,
    oldPrice: 15499,
    discountPercent: '48% OFF',
    image: 'assets/prod_anorak@3x.jpg',
    tag: 'FLASH DEAL',
    desc: 'Limited runway sample in matte charcoal with quick-release magnetic Fidlock buckles.'
  },
  {
    id: 'flash-deal-3',
    name: 'KIMONO NORAGI [EARLY ACCESS]',
    category: 'men',
    price: 3499,
    oldPrice: 7999,
    discountPercent: '56% OFF',
    image: 'assets/prod_kimono@3x.jpg',
    tag: 'FLASH DEAL',
    desc: 'Early access batch with raw selvedge canvas and kanji embroidery.'
  }
];

// Customer Testimonials (Authentic Fashion Tone)
const TESTIMONIALS = [
  {
    id: 1,
    name: 'Aarav M.',
    location: 'Mumbai, India',
    role: 'Editorial Stylist',
    rating: 5,
    productBought: 'KIMONO LIU KANG (₹4,999)',
    reviewText: 'The DWR Cordura finish and lapel embroidery are extraordinary. In monsoon rain, water literally beads right off.',
    stats: 'Monsoon Waterproof Tested'
  },
  {
    id: 2,
    name: 'Rhea S.',
    location: 'Bengaluru, India',
    role: 'Creative Director',
    rating: 5,
    productBought: 'ANORAK STALKER (₹11,999)',
    reviewText: 'Fidlock magnetic closures click with supreme precision. Silhouette feels genuine Tokyo Harajuku rather than fast fashion.',
    stats: 'Fidlock® Authenticated'
  },
  {
    id: 3,
    name: 'Vikram J.',
    location: 'Delhi NCR, India',
    role: 'Architect',
    rating: 5,
    productBought: 'STORM WINDBREAKER (₹8,499)',
    reviewText: 'Clean studio grey palette, zero gaudy logos, high technical utility. Exactly what high-end techwear should be.',
    stats: 'Ripstop Fabric Verified'
  },
  {
    id: 4,
    name: 'Zoya K.',
    location: 'Hyderabad, India',
    role: 'Fashion Designer',
    rating: 5,
    productBought: 'CYBER STREET RUNNER (₹6,799)',
    reviewText: 'The drape and articulated sleeves are sharp and flattering. Fast 24-hour dispatch to Hyderabad.',
    stats: 'Fast Dispatch Verified'
  }
];

// Lookbook Collections (Using Exact Reference Banners)
const COLLECTIONS = [
  {
    title: 'LUNACORE<br>PF23 COLLECTION',
    desc: 'Explore the boundaries of style with our Pre-Fall 2023. It\'s a world where fashion meets technology.',
    image: 'assets/coll_pf23@3x.jpg'
  },
  {
    title: 'NEO-SHIBUYA<br>STREET SERIES',
    desc: 'Atmospheric urban silhouettes engineered for nocturnal transit across megacity transit lines.',
    image: 'assets/cat_men@3x.jpg'
  },
  {
    title: 'AVANT-GARDE<br>FEMME TECH 23',
    desc: 'Cybernetic tailoring meets lightweight weather-sealed membranes in a new feminine form factor.',
    image: 'assets/cat_women@3x.jpg'
  }
];

// App State
let cart = JSON.parse(localStorage.getItem('lunacore_cart_inr')) || [];
let activeDiscount = 0;
let currentCollectionIndex = 0;
let isMobilePreview = false;

// Web Audio API for tech feedback
let audioCtx = null;
function playTechBeep(frequency = 800, duration = 0.04, type = 'sine') {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Audio optional
  }
}

// Initializer
document.addEventListener('DOMContentLoaded', () => {
  renderBestSellers();
  renderOffers();
  renderTestimonials();
  updateCartUI();
  initOfferCountdown();
  lucide.createIcons();
});

// Render Best Selling Page Section
function renderBestSellers() {
  const container = document.getElementById('bestsellers-grid');
  if (!container) return;

  const bestSellers = PRODUCTS.filter(p => p.isBestSeller);

  container.innerHTML = bestSellers.map(item => `
    <div class="group relative rounded-2xl bg-brand-surfaceLight overflow-hidden editorial-card border border-white/[0.04] p-3 space-y-3 flex flex-col justify-between">
      <div class="relative h-64 rounded-xl overflow-hidden bg-brand-studioGrey cursor-pointer" onclick="openProductModal('${item.id}')">
        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
        <div class="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-white font-bold">
          ${item.tag}
        </div>
      </div>

      <div class="space-y-1">
        <div class="flex items-center justify-between text-xs font-mono">
          <span class="font-bold text-white text-xs font-display">${item.name}</span>
          <span class="text-neutral-400 text-[10px]">${item.salesCount}</span>
        </div>
        <p class="text-neutral-400 text-[11px] line-clamp-1 leading-relaxed">${item.desc}</p>
      </div>

      <div class="flex items-center justify-between pt-2 border-t border-white/5">
        <div class="font-mono">
          <div class="text-white font-bold text-xs">${formatINR(item.price)}</div>
          <div class="line-through text-neutral-500 text-[10px]">${formatINR(item.oldPrice)}</div>
        </div>
        <button 
          onclick="addToBagById('${item.id}')"
          class="px-3 py-1.5 rounded-lg bg-brand-accent hover:bg-brand-accentHover text-white font-mono font-bold text-[10px] uppercase tracking-wider transition"
        >
          ADD
        </button>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

// Render Offer Section
function renderOffers() {
  const container = document.getElementById('offers-grid');
  if (!container) return;

  container.innerHTML = OFFER_PRODUCTS.map(item => `
    <div class="relative rounded-2xl bg-brand-surface border border-white/10 p-4 overflow-hidden flex flex-col justify-between group hover:border-brand-accent/50 transition">
      <div class="absolute -right-7 top-4 bg-brand-accent text-white font-bold font-mono text-[9px] px-7 py-0.5 rotate-45 shadow">
        ${item.discountPercent}
      </div>

      <div class="space-y-3">
        <div class="relative h-48 rounded-xl overflow-hidden bg-brand-studioGrey">
          <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
        </div>
        <div>
          <h4 class="font-bold text-white text-xs font-display">${item.name}</h4>
          <p class="text-neutral-400 text-[11px] mt-1">${item.desc}</p>
        </div>
      </div>

      <div class="flex items-center justify-between pt-3 mt-3 border-t border-white/5">
        <div class="font-mono">
          <div class="text-white font-bold text-xs">${formatINR(item.price)}</div>
          <div class="line-through text-neutral-500 text-[10px]">${formatINR(item.oldPrice)}</div>
        </div>
        <button 
          onclick="addToBag({id: '${item.id}', name: '${item.name}', price: ${item.price}, image: '${item.image}'})"
          class="px-3 py-1.5 rounded-lg bg-brand-accent hover:bg-brand-accentHover text-white font-mono font-bold text-[10px] uppercase tracking-wider transition"
        >
          CLAIM DEAL
        </button>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

// Render Testimonials
function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;

  container.innerHTML = TESTIMONIALS.map(t => `
    <div class="p-5 rounded-2xl bg-brand-surfaceLight border border-white/[0.04] space-y-3 flex flex-col justify-between">
      <div class="space-y-1">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-white font-display">${t.name}</span>
          <span class="text-[10px] font-mono text-brand-accent">★★★★★</span>
        </div>
        <div class="text-[10px] font-mono text-neutral-500">${t.location} • ${t.role}</div>
      </div>

      <blockquote class="text-[11px] text-neutral-300 leading-relaxed font-sans italic">
        "${t.reviewText}"
      </blockquote>

      <div class="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-400">
        <span class="truncate max-w-[150px] text-neutral-300">${t.productBought}</span>
        <span class="text-emerald-400">Verified</span>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

// Live Countdown Timer
function initOfferCountdown() {
  const hoursElem = document.getElementById('offer-timer-hours');
  const minsElem = document.getElementById('offer-timer-mins');
  const secsElem = document.getElementById('offer-timer-secs');
  if (!hoursElem) return;

  let totalSeconds = 14 * 3600 + 32 * 60 + 45;

  setInterval(() => {
    if (totalSeconds > 0) totalSeconds--;
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    hoursElem.textContent = String(h).padStart(2, '0');
    minsElem.textContent = String(m).padStart(2, '0');
    secsElem.textContent = String(s).padStart(2, '0');
  }, 1000);
}

// Category Filter Handling
function filterCategory(cat) {
  playTechBeep(600, 0.04);
  document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
}

// Add To Bag Functions
function addToBagById(id) {
  const prod = PRODUCTS.find(p => p.id === id) || OFFER_PRODUCTS.find(p => p.id === id);
  if (prod) addToBag(prod);
}

function addToBag(product) {
  playTechBeep(900, 0.06);
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }
  
  localStorage.setItem('lunacore_cart_inr', JSON.stringify(cart));
  updateCartUI();
  showToast(`ADDED TO BAG: ${product.name}`);
}

function updateCartQuantity(id, change) {
  playTechBeep(700, 0.04);
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== id);
  }
  
  localStorage.setItem('lunacore_cart_inr', JSON.stringify(cart));
  updateCartUI();
}

function removeCartItem(id) {
  playTechBeep(450, 0.06);
  cart = cart.filter(i => i.id !== id);
  localStorage.setItem('lunacore_cart_inr', JSON.stringify(cart));
  updateCartUI();
  showToast("Item removed from bag");
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = subtotal * activeDiscount;
  const finalTotal = subtotal - discountAmount;

  const headerCount = document.getElementById('header-cart-count');
  const topCartBadge = document.getElementById('top-cart-badge');
  const drawerCount = document.getElementById('drawer-item-count');
  
  if (headerCount) headerCount.textContent = totalCount;
  if (topCartBadge) topCartBadge.textContent = totalCount;
  if (drawerCount) drawerCount.textContent = totalCount;

  const subtotalElem = document.getElementById('cart-subtotal');
  const discountElem = document.getElementById('cart-discount');
  const totalElem = document.getElementById('cart-total');
  const checkoutDisplay = document.getElementById('checkout-amount-display');

  if (subtotalElem) subtotalElem.textContent = formatINR(subtotal);
  if (discountElem) discountElem.textContent = '-' + formatINR(discountAmount);
  if (totalElem) totalElem.textContent = formatINR(finalTotal);
  if (checkoutDisplay) checkoutDisplay.textContent = formatINR(finalTotal);

  const container = document.getElementById('cart-items-container');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16 text-neutral-500 space-y-3 font-mono text-xs">
        <p>YOUR BAG IS CURRENTLY EMPTY</p>
        <button onclick="toggleCart(); document.getElementById('catalog').scrollIntoView({behavior:'smooth'})" class="px-4 py-1.5 rounded-full bg-white/10 text-white text-[11px]">
          EXPLORE CATALOG
        </button>
      </div>
    `;
  } else {
    container.innerHTML = cart.map(item => `
      <div class="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5 font-mono text-xs">
        <img src="${item.image}" alt="${item.name}" class="w-14 h-14 rounded-xl object-cover bg-neutral-800">
        
        <div class="flex-1 min-w-0">
          <div class="text-xs font-bold text-white truncate font-display">${item.name}</div>
          <div class="text-[11px] text-brand-accent font-semibold">${formatINR(item.price)}</div>
          
          <div class="flex items-center gap-3 mt-1.5">
            <div class="flex items-center bg-black/40 border border-white/10 rounded-md overflow-hidden text-[11px]">
              <button onclick="updateCartQuantity('${item.id}', -1)" class="px-2 py-0.5 hover:bg-white/10">-</button>
              <span class="px-2 py-0.5 text-white">${item.quantity}</span>
              <button onclick="updateCartQuantity('${item.id}', 1)" class="px-2 py-0.5 hover:bg-white/10">+</button>
            </div>
            
            <button onclick="removeCartItem('${item.id}')" class="text-neutral-500 hover:text-red-400 text-[10px]">
              REMOVE
            </button>
          </div>
        </div>

        <div class="text-xs font-bold text-white">
          ${formatINR(item.price * item.quantity)}
        </div>
      </div>
    `).join('');
  }

  lucide.createIcons();
}

function toggleCart() {
  playTechBeep(850, 0.04);
  const drawer = document.getElementById('cart-drawer');
  const panel = document.getElementById('cart-panel');
  const backdrop = document.getElementById('cart-backdrop');

  const isOpen = !drawer.classList.contains('pointer-events-none');

  if (isOpen) {
    panel.classList.add('translate-x-full');
    backdrop.classList.add('opacity-0');
    setTimeout(() => {
      drawer.classList.add('pointer-events-none');
    }, 300);
  } else {
    drawer.classList.remove('pointer-events-none');
    panel.classList.remove('translate-x-full');
    backdrop.classList.remove('opacity-0');
  }
}

function applyPromo() {
  const input = document.getElementById('promo-input');
  const status = document.getElementById('promo-status');
  if (!input || !status) return;

  const code = input.value.trim().toUpperCase();
  if (code === 'TECH20') {
    activeDiscount = 0.20;
    status.className = 'text-[11px] font-mono text-emerald-400 block';
    status.textContent = '✓ 20% DISCOUNT APPLIED';
    playTechBeep(1100, 0.08);
  } else if (code === '') {
    activeDiscount = 0;
    status.className = 'text-[11px] font-mono text-neutral-500 block';
    status.textContent = 'Code cleared';
  } else {
    status.className = 'text-[11px] font-mono text-red-400 block';
    status.textContent = '✗ INVALID CODE. USE: TECH20';
    playTechBeep(300, 0.12, 'sawtooth');
  }
  updateCartUI();
}

function copyCoupon(code) {
  navigator.clipboard.writeText(code).then(() => {
    showToast(`COUPON COPIED: ${code}`);
    const input = document.getElementById('promo-input');
    if (input) {
      input.value = code;
      applyPromo();
    }
  }).catch(() => {
    showToast(`CODE: ${code}`);
  });
}

function openProductModal(id) {
  playTechBeep(880, 0.04);
  const p = PRODUCTS.find(item => item.id === id) || OFFER_PRODUCTS.find(item => item.id === id);
  if (!p) return;

  document.getElementById('modal-product-img').src = p.image;
  document.getElementById('modal-product-name').textContent = p.name;
  document.getElementById('modal-product-price').textContent = formatINR(p.price);
  document.getElementById('modal-product-oldprice').textContent = formatINR(p.oldPrice);
  document.getElementById('modal-product-desc').textContent = p.desc;
  document.getElementById('modal-product-category').textContent = p.category.toUpperCase() + ' // SS23';

  document.getElementById('modal-add-to-bag').onclick = () => {
    addToBag(p);
    closeProductModal();
  };

  document.getElementById('product-modal').classList.remove('hidden');
}

function closeProductModal() {
  document.getElementById('product-modal').classList.add('hidden');
}

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('size-btn')) {
    document.querySelectorAll('.size-btn').forEach(btn => {
      btn.classList.remove('bg-brand-accent', 'text-white', 'active');
      btn.classList.add('bg-white/5', 'text-neutral-300');
    });
    e.target.classList.add('bg-brand-accent', 'text-white', 'active');
    e.target.classList.remove('bg-white/5', 'text-neutral-300');
    playTechBeep(750, 0.03);
  }
});

function openCheckoutModal() {
  if (cart.length === 0) {
    showToast("Your bag is empty. Add garments first.");
    return;
  }
  playTechBeep(900, 0.04);
  toggleCart();
  document.getElementById('checkout-modal').classList.remove('hidden');
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal').classList.add('hidden');
}

function completeCheckoutOrder() {
  playTechBeep(1200, 0.15);
  closeCheckoutModal();
  cart = [];
  localStorage.removeItem('lunacore_cart_inr');
  updateCartUI();
  showToast("DISPATCH CONFIRMED — ORDER #LC-IN-" + Math.floor(100000 + Math.random() * 900000));
}

function openSearchModal() {
  playTechBeep(780, 0.04);
  const modal = document.getElementById('search-modal');
  modal.classList.remove('hidden');
  const input = document.getElementById('search-input');
  input.value = '';
  input.focus();
  handleSearch('');
}

function closeSearchModal() {
  document.getElementById('search-modal').classList.add('hidden');
}

function handleSearch(query) {
  const resultsContainer = document.getElementById('search-results');
  const clean = query.trim().toLowerCase();

  if (!clean) {
    resultsContainer.innerHTML = '<div class="text-neutral-500 py-3 text-center">Type keywords to query catalog...</div>';
    return;
  }

  const allItems = [...PRODUCTS, ...OFFER_PRODUCTS];
  const matches = allItems.filter(p => 
    p.name.toLowerCase().includes(clean) || 
    p.desc.toLowerCase().includes(clean) ||
    p.category.toLowerCase().includes(clean)
  );

  if (matches.length === 0) {
    resultsContainer.innerHTML = '<div class="text-neutral-500 py-3 text-center">No garments match inquiry.</div>';
    return;
  }

  resultsContainer.innerHTML = matches.map(p => `
    <div onclick="closeSearchModal(); openProductModal('${p.id}')" class="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] cursor-pointer transition">
      <div class="flex items-center gap-3">
        <img src="${p.image}" class="w-9 h-9 rounded-lg object-cover bg-neutral-800">
        <div>
          <div class="text-white font-bold text-xs font-display">${p.name}</div>
          <div class="text-[10px] text-neutral-400">${p.category.toUpperCase()}</div>
        </div>
      </div>
      <div class="text-white font-bold text-xs font-mono">${formatINR(p.price)}</div>
    </div>
  `).join('');
}

function nextCollection() {
  currentCollectionIndex = (currentCollectionIndex + 1) % COLLECTIONS.length;
  updateCollectionUI();
}

function prevCollection() {
  currentCollectionIndex = (currentCollectionIndex - 1 + COLLECTIONS.length) % COLLECTIONS.length;
  updateCollectionUI();
}

function updateCollectionUI() {
  playTechBeep(650, 0.04);
  const c = COLLECTIONS[currentCollectionIndex];
  const title = document.getElementById('collection-title');
  const desc = document.getElementById('collection-desc');
  const bg = document.getElementById('collection-bg');
  const indicators = document.getElementById('collection-indicators');

  if (title) title.innerHTML = c.title;
  if (desc) desc.textContent = c.desc;
  if (bg) {
    bg.style.opacity = '0.3';
    setTimeout(() => {
      bg.src = c.image;
      bg.style.opacity = '1';
    }, 200);
  }

  if (indicators) {
    indicators.innerHTML = COLLECTIONS.map((_, idx) => `
      <span class="${idx === currentCollectionIndex ? 'w-5 bg-brand-accent' : 'w-1.5 bg-white/40'} h-1 rounded-full transition-all"></span>
    `).join('');
  }
}

function openLookbookModal() {
  showToast("OPENING LOOKBOOK // VOLUME 04");
  document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
}

function showCommunityModal(index) {
  playTechBeep(700, 0.04);
  showToast("INSTAGRAM POST // @lunacore.official #" + (index + 1));
}

function openAuthModal() {
  playTechBeep(850, 0.04);
  showToast("MEMBER PORTAL INITIALIZED");
}

let toastTimeout = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 2600);
}

// Simulated Device Preview (from Reference Image top-right)
function toggleDeviceView() {
  playTechBeep(1000, 0.05);
  isMobilePreview = !isMobilePreview;
  const viewport = document.getElementById('main-viewport');
  const label = document.getElementById('view-mode-label');

  if (isMobilePreview) {
    viewport.classList.add('simulated-mobile-frame');
    label.textContent = "Mobile Frame Active";
    showToast("SWITCHED TO MOBILE FRAME PREVIEW");
  } else {
    viewport.classList.remove('simulated-mobile-frame');
    label.textContent = "Desktop / Mobile";
    showToast("FULL DESKTOP VIEW ACTIVE");
  }
}
