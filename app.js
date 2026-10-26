/**
 * LUNACORE™ // SS23 E-COMMERCE ENGINE
 * Avant-Garde Streetwear & Cybernetic Techwear
 */

// Master Products Database (CLOTHES ONLY)
const PRODUCTS = [
  {
    id: 'anorak-stalker',
    name: 'ANORAK STALKER JACKET',
    category: 'men',
    price: 360,
    oldPrice: 450,
    image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80',
    tag: 'NEW ARRIVAL',
    desc: 'Weather-sealed 3-layer anorak with storm hood, integrated breathability vents, and quick-release magnetic Fidlock buckles.'
  },
  {
    id: 'kimono-liu-kang',
    name: 'KIMONO LIU KANG MOTO',
    category: 'men',
    price: 130,
    oldPrice: 200,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
    tag: 'SS23 SALE',
    desc: 'Japanese Noragi silhouette re-engineered with DWR Cordura canvas and Kanji typography embroidery: 徒尔街头.'
  },
  {
    id: 'tactical-windbreaker',
    name: 'TACTICAL WINDBREAKER HOODIE',
    category: 'men',
    price: 290,
    oldPrice: 380,
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=800&q=80',
    tag: 'WATERPROOF',
    desc: 'Ultralight ripstop storm jacket designed for extreme urban downpours and wind gusts up to 80 km/h.'
  },
  {
    id: 'shadow-longsleeve',
    name: 'SHADOW RUNNER LONG TEE',
    category: 'men',
    price: 180,
    oldPrice: 240,
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80',
    tag: 'MINIMAL',
    desc: 'Ergonomic seamless compression base layer with thumb-loop cuffs and reflective circuit trace details.'
  },
  {
    id: 'tactical-cargo-gear',
    name: 'MOLLE TACTICAL CARGO PANTS',
    category: 'accessories',
    price: 220,
    oldPrice: 280,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
    tag: 'MOLLE SYS',
    desc: 'Heavyweight reinforced ripstop trousers with detachable utility holster pockets and ankle cinches.'
  },
  {
    id: 'cyber-crop-femme',
    name: 'OVERSIZED TAILORED BLAZER',
    category: 'women',
    price: 210,
    oldPrice: 270,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
    tag: 'FEMME TECH',
    desc: 'High-collar structured silhouette with extended articulated thumb sleeves, magnetic zip pulls, and matte finish.'
  },
  {
    id: 'denim-tactical-jacket',
    name: 'DENIM MODULAR JACKET',
    category: 'men',
    price: 240,
    oldPrice: 310,
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80',
    tag: 'BESTSELLER',
    desc: 'Raw dark selvedge modular jacket with articulated sleeves and Teflon water-resistant finish.'
  },
  {
    id: 'femme-streetwear-coat',
    name: 'STEALTH RUNNER STREET COAT',
    category: 'women',
    price: 285,
    oldPrice: 350,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    tag: 'POPULAR',
    desc: 'Avant-garde street coat with asymmetric zipper closure, storm flap, and breathable membrane lining.'
  }
];

// Lookbook Collections (CLOTHES ONLY)
const COLLECTIONS = [
  {
    title: 'LUNACORE<br>PF23 COLLECTION',
    desc: 'Explore the boundaries of style with our Pre-Fall 2023. It\'s a world where fashion meets technology, modular utility, and stealth aesthetics.',
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=1600&q=80'
  },
  {
    title: 'NEO-SHIBUYA<br>WINTER SHELL 24',
    desc: 'Sub-zero thermal armor inspired by the nocturnal neon canyons of Neo-Tokyo. Hydrophobic coatings meet ergonomic articulation.',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1600&q=80'
  },
  {
    title: 'MONOLITH GEAR<br>MODULAR APPAREL',
    desc: 'Engineered outerwear and technical garments crafted for seamless transit across megacity transit lines.',
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1600&q=80'
  }
];

// App State
let cart = JSON.parse(localStorage.getItem('lunacore_cart')) || [];
let activeDiscount = 0;
let currentCollectionIndex = 0;
let isMobilePreview = false;

// Audio context for slick micro-feedback
let audioCtx = null;
function playTechBeep(frequency = 800, duration = 0.05, type = 'sine') {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
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
  renderProducts('all');
  updateCartUI();
  lucide.createIcons();
});

// Render Products with reference design's aesthetic (Dark card, floating action pill on hover)
function renderProducts(filter = 'all') {
  const container = document.getElementById('product-grid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  container.innerHTML = filtered.map(item => `
    <div class="group relative rounded-2xl bg-brand-card border border-white/5 overflow-hidden flex flex-col justify-between glass-card-hover">
      
      <!-- Image Canvas -->
      <div class="relative h-96 w-full overflow-hidden bg-neutral-900 cursor-pointer" onclick="openProductModal('${item.id}')">
        <img 
          src="${item.image}" 
          alt="${item.name}" 
          class="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        
        <!-- Top Pill Tag -->
        <div class="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-neutral-300 font-semibold uppercase">
          ${item.tag}
        </div>

        <!-- Quick View Icon Button -->
        <button 
          onclick="event.stopPropagation(); openProductModal('${item.id}')"
          class="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-accent hover:border-brand-accent"
          title="Quick View"
        >
          <i data-lucide="expand" class="w-4 h-4"></i>
        </button>

        <!-- Floating Action Pill (Matches the exact hover UI in the reference image!) -->
        <div class="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-between gap-2 shadow-xl transform translate-y-1 group-hover:translate-y-0 transition-transform">
          <div class="overflow-hidden">
            <div class="text-[11px] font-bold text-white truncate">${item.name}</div>
            <div class="flex items-center gap-1.5 text-xs font-mono">
              <span class="text-white font-bold">$${item.price}</span>
              <span class="line-through text-neutral-500 text-[10px]">$${item.oldPrice}</span>
            </div>
          </div>

          <button 
            onclick="event.stopPropagation(); addToBagById('${item.id}')"
            class="px-3.5 py-1.5 rounded-lg bg-brand-accent hover:bg-brand-accentHover text-white font-bold font-mono text-[11px] uppercase tracking-wider transition whitespace-nowrap glow-orange flex items-center gap-1"
          >
            <span>ADD</span>
            <i data-lucide="plus" class="w-3 h-3"></i>
          </button>
        </div>
      </div>

    </div>
  `).join('');

  lucide.createIcons();
}

// Category Filter Handling
function filterCategory(cat) {
  playTechBeep(600, 0.04);
  document.querySelectorAll('.cat-filter-btn').forEach(btn => {
    btn.classList.remove('active', 'bg-white/10', 'text-white');
    btn.classList.add('text-neutral-400');
  });

  const activeBtn = Array.from(document.querySelectorAll('.cat-filter-btn'))
    .find(b => b.textContent.trim().toLowerCase() === (cat === 'accessories' ? 'gear' : cat));

  if (activeBtn) {
    activeBtn.classList.add('active', 'bg-white/10', 'text-white');
    activeBtn.classList.remove('text-neutral-400');
  }

  renderProducts(cat);
}

// Add To Bag Functions
function addToBagById(id) {
  const prod = PRODUCTS.find(p => p.id === id);
  if (prod) addToBag(prod);
}

function addToBag(product) {
  playTechBeep(1000, 0.08);
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
  
  localStorage.setItem('lunacore_cart', JSON.stringify(cart));
  updateCartUI();
  showToast(`ADDED: ${product.name}`);
}

function updateCartQuantity(id, change) {
  playTechBeep(700, 0.04);
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== id);
  }
  
  localStorage.setItem('lunacore_cart', JSON.stringify(cart));
  updateCartUI();
}

function removeCartItem(id) {
  playTechBeep(450, 0.06);
  cart = cart.filter(i => i.id !== id);
  localStorage.setItem('lunacore_cart', JSON.stringify(cart));
  updateCartUI();
  showToast("Item removed from bag");
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = subtotal * activeDiscount;
  const finalTotal = subtotal - discountAmount;

  // Header badges
  const headerCount = document.getElementById('header-cart-count');
  const topCartBadge = document.getElementById('top-cart-badge');
  const drawerCount = document.getElementById('drawer-item-count');
  
  if (headerCount) headerCount.textContent = totalCount;
  if (topCartBadge) topCartBadge.textContent = totalCount;
  if (drawerCount) drawerCount.textContent = totalCount;

  // Price labels
  const subtotalElem = document.getElementById('cart-subtotal');
  const discountElem = document.getElementById('cart-discount');
  const totalElem = document.getElementById('cart-total');
  const checkoutDisplay = document.getElementById('checkout-amount-display');

  if (subtotalElem) subtotalElem.textContent = `$${subtotal.toFixed(2)}`;
  if (discountElem) discountElem.textContent = `-$${discountAmount.toFixed(2)}`;
  if (totalElem) totalElem.textContent = `$${finalTotal.toFixed(2)}`;
  if (checkoutDisplay) checkoutDisplay.textContent = `$${finalTotal.toFixed(2)}`;

  // Cart Drawer Items Container
  const container = document.getElementById('cart-items-container');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16 text-neutral-500 space-y-3">
        <i data-lucide="shopping-bag" class="w-12 h-12 mx-auto stroke-[1.2] opacity-40"></i>
        <p class="text-sm">Your bag is currently empty</p>
        <button onclick="toggleCart(); document.getElementById('catalog').scrollIntoView({behavior:'smooth'})" class="px-5 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-mono">
          START BROWSING
        </button>
      </div>
    `;
  } else {
    container.innerHTML = cart.map(item => `
      <div class="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-xl object-cover">
        
        <div class="flex-1 min-w-0">
          <div class="text-xs font-bold text-white truncate">${item.name}</div>
          <div class="text-xs font-mono text-brand-accent font-semibold mt-0.5">$${item.price}</div>
          
          <div class="flex items-center gap-3 mt-2">
            <div class="flex items-center bg-black/50 border border-white/10 rounded-lg overflow-hidden text-xs font-mono">
              <button onclick="updateCartQuantity('${item.id}', -1)" class="px-2 py-0.5 hover:bg-white/10 text-neutral-300">-</button>
              <span class="px-2 py-0.5 text-white font-bold">${item.quantity}</span>
              <button onclick="updateCartQuantity('${item.id}', 1)" class="px-2 py-0.5 hover:bg-white/10 text-neutral-300">+</button>
            </div>
            
            <button onclick="removeCartItem('${item.id}')" class="text-neutral-500 hover:text-red-400 text-[11px] font-mono transition">
              Remove
            </button>
          </div>
        </div>

        <div class="text-xs font-mono font-bold text-white">
          $${(item.price * item.quantity).toFixed(2)}
        </div>
      </div>
    `).join('');
  }

  lucide.createIcons();
}

// Cart Drawer Visibility
function toggleCart() {
  playTechBeep(850, 0.05);
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

// Apply Promo Code
function applyPromo() {
  const input = document.getElementById('promo-input');
  const status = document.getElementById('promo-status');
  if (!input || !status) return;

  const code = input.value.trim().toUpperCase();
  if (code === 'TECH20') {
    activeDiscount = 0.20;
    status.className = 'text-[11px] font-mono text-emerald-400 block';
    status.textContent = '✓ 20% DISCOUNT CODE APPLIED!';
    playTechBeep(1200, 0.1);
  } else if (code === '') {
    activeDiscount = 0;
    status.className = 'text-[11px] font-mono text-neutral-500 block';
    status.textContent = 'Code cleared';
  } else {
    status.className = 'text-[11px] font-mono text-red-400 block';
    status.textContent = '✗ INVALID PROMO CODE. TRY: TECH20';
    playTechBeep(300, 0.15, 'sawtooth');
  }
  updateCartUI();
}

// Product Quick View Modal
let currentModalProductId = null;
function openProductModal(id) {
  playTechBeep(900, 0.05);
  const p = PRODUCTS.find(item => item.id === id);
  if (!p) return;

  currentModalProductId = id;
  document.getElementById('modal-product-img').src = p.image;
  document.getElementById('modal-product-name').textContent = p.name;
  document.getElementById('modal-product-price').textContent = `$${p.price}`;
  document.getElementById('modal-product-oldprice').textContent = `$${p.oldPrice}`;
  document.getElementById('modal-product-desc').textContent = p.desc;
  document.getElementById('modal-product-category').textContent = p.category.toUpperCase() + ' // TECH SPEC';
  document.getElementById('modal-product-tag').textContent = p.tag;

  document.getElementById('modal-add-to-bag').onclick = () => {
    addToBag(p);
    closeProductModal();
  };

  document.getElementById('product-modal').classList.remove('hidden');
}

function closeProductModal() {
  document.getElementById('product-modal').classList.add('hidden');
}

// Size Selection in Modal
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

// Checkout Modal
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast("Your cart is empty. Add items first!");
    return;
  }
  playTechBeep(950, 0.05);
  toggleCart();
  document.getElementById('checkout-modal').classList.remove('hidden');
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal').classList.add('hidden');
}

function completeCheckoutOrder() {
  playTechBeep(1200, 0.2);
  closeCheckoutModal();
  cart = [];
  localStorage.removeItem('lunacore_cart');
  updateCartUI();
  showToast("ORDER CONFIRMED! INVOICE #LC-" + Math.floor(100000 + Math.random() * 900000));
}

// Search Modal
function openSearchModal() {
  playTechBeep(800, 0.05);
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
    resultsContainer.innerHTML = '<div class="text-neutral-500 py-4 text-center">Type keywords to query LUNACORE catalog...</div>';
    return;
  }

  const matches = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(clean) || 
    p.desc.toLowerCase().includes(clean) ||
    p.category.toLowerCase().includes(clean)
  );

  if (matches.length === 0) {
    resultsContainer.innerHTML = '<div class="text-neutral-500 py-4 text-center">No stealth gear matches your inquiry.</div>';
    return;
  }

  resultsContainer.innerHTML = matches.map(p => `
    <div onclick="closeSearchModal(); openProductModal('${p.id}')" class="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] cursor-pointer transition">
      <div class="flex items-center gap-3">
        <img src="${p.image}" class="w-10 h-10 rounded-lg object-cover">
        <div>
          <div class="text-white font-bold">${p.name}</div>
          <div class="text-[10px] text-neutral-400">${p.category.toUpperCase()}</div>
        </div>
      </div>
      <div class="text-brand-accent font-bold">$${p.price}</div>
    </div>
  `).join('');
}

// Lookbook Collection Carousel
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
      <span class="${idx === currentCollectionIndex ? 'w-6 bg-brand-accent' : 'w-2 bg-white/30'} h-1 rounded-full transition-all"></span>
    `).join('');
  }
}

function openLookbookModal() {
  showToast("EXPLORING LOOKBOOK VOLUME // " + (currentCollectionIndex + 1));
  document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
}

// Instagram Community Modal Preview
function showCommunityModal(index) {
  playTechBeep(700, 0.04);
  showToast("COMMUNITY POST // @lunacore.gear #" + (index + 1));
}

// Auth Modal simulation
function openAuthModal() {
  playTechBeep(900, 0.05);
  showToast("AUTHENTICATION PORTAL INITIALIZED");
}

// Toast notification helper
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
  }, 2800);
}

// Responsive Device View Simulator (Desktop / Mobile Preview)
// Just like depicted in the top right of the user's reference design!
function toggleDeviceView() {
  playTechBeep(1100, 0.06);
  isMobilePreview = !isMobilePreview;
  const frame = document.getElementById('main-frame');
  const label = document.getElementById('view-mode-label');

  if (isMobilePreview) {
    frame.classList.add('mobile-frame-wrapper');
    label.textContent = "Mobile Frame";
    showToast("SIMULATING MOBILE APP PREVIEW");
  } else {
    frame.classList.remove('mobile-frame-wrapper');
    label.textContent = "Desktop View";
    showToast("SWITCHED TO FULL DESKTOP VIEW");
  }
}
