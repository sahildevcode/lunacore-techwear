/**
 * MAISON AURELIA — LUXURY COUTURE E-COMMERCE ENGINE
 * Motion Architecture inspired by: Maison — Ivory Champagne.html
 * High-Definition Luxury Photography & Expanded Catalog
 * Currency: Indian Rupees (INR - ₹)
 */

function formatINR(val) {
  return '₹' + Number(val).toLocaleString('en-IN');
}

/* ================================================================= */
/* 1. SHOP BY OCCASION (8 High-Definition Arched Portal Cards)       */
/* ================================================================= */
const OCCASIONS = [
  {
    id: 'occ-evening',
    name: 'Evening Soirée',
    price: 12999,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=85',
    tag: 'Floor-Length',
    desc: 'Deep burgundy silk crepe gown with delicate backless detail and draped cowl.'
  },
  {
    id: 'occ-weddings',
    name: 'Weddings & Bridal',
    price: 16499,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=85',
    tag: 'Liquid Silk',
    desc: 'Champagne gold bias-cut liquid silk slip gown tailored for milestone celebrations.'
  },
  {
    id: 'occ-cocktail',
    name: 'Cocktail Parties',
    price: 14299,
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=85',
    tag: 'Velvet Suit',
    desc: 'Rich wine-toned velvet tuxedo blazer paired with tailored cigarette trousers.'
  },
  {
    id: 'occ-blacktie',
    name: 'Black Tie Gala',
    price: 21999,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=85',
    tag: 'Couture Sequin',
    desc: 'Hand-embroidered champagne micro-sequins on architectural column silhouette.'
  },
  {
    id: 'occ-datenight',
    name: 'Romantic Date Night',
    price: 9999,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=85',
    tag: 'Chantilly Lace',
    desc: 'French Chantilly lace draped over blush nude silk with scalloped hemline.'
  },
  {
    id: 'occ-redcarpet',
    name: 'Red Carpet Glamour',
    price: 28999,
    image: 'https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?auto=format&fit=crop&w=800&q=85',
    tag: 'Emerald Velvet',
    desc: 'Heavyweight emerald velvet column gown with structured corsetry and train.'
  },
  {
    id: 'occ-summer',
    name: 'Summer Soirée',
    price: 13499,
    image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=800&q=85',
    tag: 'Ivory Chiffon',
    desc: 'Airy pleated ivory chiffon gown with gold corded belt for rooftop sunsets.'
  },
  {
    id: 'occ-midnight',
    name: 'Midnight Reception',
    price: 24999,
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=85',
    tag: 'Midnight Navy',
    desc: 'Midnight navy liquid satin slip with crystal embellished halter strap.'
  }
];

/* ================================================================= */
/* 2. STYLING SUGGESTIONS (8 Expanded High-Definition Outfits)       */
/* ================================================================= */
const STYLING_LOOKS = [
  {
    id: 'style-dinner-look',
    name: 'Dinner Date',
    subtitle: 'Pleated Midi & Quilted Flap',
    price: 18499,
    image: 'assets_v2/style_dinner@3x.jpg',
    category: 'Evening',
    desc: 'Complete evening look: pleated midi dress in deep wine, quilted leather flap bag, velvet stilettos, and pearl studs.'
  },
  {
    id: 'style-office-look',
    name: 'Office Chic',
    subtitle: 'Tailored Blush Suit & Tote',
    price: 22999,
    image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=85',
    category: 'Workwear',
    desc: 'Complete executive look: Italian wool blush blazer, tapered cigarette pants, silk camisole, and structured leather tote.'
  },
  {
    id: 'style-brunch-look',
    name: 'Weekend Brunch',
    subtitle: 'Silk Blouse & Cream Palazzos',
    price: 15799,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=85',
    category: 'Daylight',
    desc: 'Complete daylight look: silk crepe blouse, flowing pleated cream palazzos, top-handle basket, and nude patent pumps.'
  },
  {
    id: 'style-gala-look',
    name: 'Gala Night',
    subtitle: 'Gold Sequin Column & Clutch',
    price: 29999,
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=85',
    category: 'Black Tie',
    desc: 'Complete black-tie look: shimmering gold sequin column gown, gold metallic minaudiere, and chandelier earrings.'
  },
  {
    id: 'style-cocktail-look',
    name: 'Cocktail Soirée',
    subtitle: 'Velvet Slip & Gold Choker',
    price: 24499,
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=85',
    category: 'Evening',
    desc: 'Complete cocktail look: deep wine velvet slip dress, 24k gold choker, strappy sandals, and mini satin pouch.'
  },
  {
    id: 'style-redcarpet-look',
    name: 'Red Carpet Glamour',
    subtitle: 'Emerald Velvet & Diamonds',
    price: 34999,
    image: 'https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?auto=format&fit=crop&w=800&q=85',
    category: 'Couture',
    desc: 'Couture gala statement: heavy draped emerald gown, diamond tear earrings, and satin pointed toe heels.'
  },
  {
    id: 'style-summer-look',
    name: 'Summer Garden Party',
    subtitle: 'Chiffon Wrap & Pearl Clutch',
    price: 17299,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=85',
    category: 'Daylight',
    desc: 'Airy outdoor ensemble: pastel rose silk chiffon dress, freshwater pearl drop earrings, and metallic ankle sandals.'
  },
  {
    id: 'style-power-look',
    name: 'Power Executive',
    subtitle: 'Double-Breasted Ivory Trench',
    price: 26499,
    image: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=800&q=85',
    category: 'Workwear',
    desc: 'Refined boardroom presence: ivory double-breasted suit trench, tailored trousers, and leather artisan portfolio.'
  }
];

/* ================================================================= */
/* 3. BESTSELLERS (8 High-Definition Curated Pieces)                 */
/* ================================================================= */
const BESTSELLERS = [
  {
    id: 'best-1',
    name: 'Velvet Evening Gown',
    price: 14999,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=85',
    category: 'Dresses'
  },
  {
    id: 'best-2',
    name: 'Quilted Lambskin Bag',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=85',
    category: 'Handbags'
  },
  {
    id: 'best-3',
    name: 'Freshwater Pearl Drops',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=85',
    category: 'Jewelry'
  },
  {
    id: 'best-4',
    name: 'Rose Gold Diamond Watch',
    price: 12499,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=85',
    category: 'Watches'
  },
  {
    id: 'best-5',
    name: 'Pointed Nude Pumps',
    price: 6999,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=85',
    category: 'Footwear'
  },
  {
    id: 'best-6',
    name: 'Damascena Eau de Parfum',
    price: 4299,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=85',
    category: 'Fragrance'
  },
  {
    id: 'best-7',
    name: 'Champagne Silk Slip',
    price: 16499,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=85',
    category: 'Dresses'
  },
  {
    id: 'best-8',
    name: 'Tailored Blush Blazer',
    price: 11999,
    image: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=800&q=85',
    category: 'Tailoring'
  }
];

// Combine all for modal lookups
const ALL_PRODUCTS = [...OCCASIONS, ...STYLING_LOOKS, ...BESTSELLERS];

// Cart State
let cart = JSON.parse(localStorage.getItem('maison_aurelia_cart')) || [];

// Announcements List
const ANNOUNCEMENTS = [
  "AUTUMN / WINTER COUTURE COLLECTION NOW LIVE",
  "COMPLIMENTARY WHITE-GLOVE DELIVERY ON ORDERS OVER ₹9,999",
  "DISCOVER THE EVENINGWEAR RUNWAY COLLECTION",
  "MADE-TO-MEASURE PRIVATE APPOINTMENTS AVAILABLE IN MUMBAI & DELHI"
];

// Document Ready
document.addEventListener('DOMContentLoaded', () => {
  renderOccasions();
  renderStyling();
  renderBestsellers();
  updateCartUI();
  initAnnouncementRotator();
  initStickyNavScroll();
  initGSAPAnimations();
  lucide.createIcons();
});

/* ======================================================= */
/* RENDER FUNCTIONS FOR EXPANDED HIGH-RES CARDS            */
/* ======================================================= */

function renderOccasions() {
  const container = document.getElementById('occasions-grid');
  if (!container) return;

  container.innerHTML = OCCASIONS.map(item => `
    <div onclick="openProductModal('${item.id}')" class="arch-card group cursor-pointer">
      <div class="occasion-arch bg-luxe-creamDark h-72 sm:h-80 border border-luxe-borderLight shadow-sm overflow-hidden">
        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover zoom-img" loading="lazy">
      </div>
      <div class="text-center mt-3">
        <h4 class="text-xs sm:text-sm font-serif font-semibold text-luxe-wine group-hover:text-luxe-gold transition tracking-wide">
          ${item.name}
        </h4>
        <span class="text-[11px] text-luxe-textMuted font-mono">From ${formatINR(item.price)}</span>
      </div>
    </div>
  `).join('');
}

function renderStyling() {
  const container = document.getElementById('styling-grid');
  if (!container) return;

  container.innerHTML = STYLING_LOOKS.map(look => `
    <div class="style-card bg-luxe-cardBg p-4 sm:p-5 rounded-2xl border border-luxe-borderLight shadow-sm hover:border-luxe-gold transition duration-300 flex flex-col justify-between group zoom-card">
      <div class="h-64 sm:h-72 rounded-xl overflow-hidden bg-white p-2 flex items-center justify-center">
        <img src="${look.image}" alt="${look.name}" class="w-full h-full object-cover rounded-lg zoom-img" loading="lazy">
      </div>
      
      <div class="text-center pt-4 border-t border-luxe-borderLight/60 mt-4 space-y-1">
        <div class="text-[10px] font-sans tracking-widest text-luxe-gold uppercase font-semibold">${look.category}</div>
        <h4 class="font-serif font-bold text-base text-luxe-wine">${look.name}</h4>
        <p class="text-xs text-luxe-textMuted">${look.subtitle}</p>
        <div class="text-xs font-mono font-bold text-luxe-wine pt-1">${formatINR(look.price)} Total Look</div>
        
        <button onclick="addToBagById('${look.id}')" class="mt-3 w-full py-2.5 rounded-lg text-xs font-sans tracking-widest uppercase bg-luxe-creamDark hover:bg-luxe-wine hover:text-white transition duration-200 font-semibold shadow-sm">
          SHOP THE LOOK
        </button>
      </div>
    </div>
  `).join('');
}

function renderBestsellers() {
  const container = document.getElementById('bestsellers-grid');
  if (!container) return;

  container.innerHTML = BESTSELLERS.map(item => `
    <div class="bestseller-item bg-white p-3 rounded-xl border border-luxe-borderLight hover:border-luxe-gold transition flex flex-col justify-between group shadow-sm">
      <div class="relative h-44 sm:h-48 rounded-lg overflow-hidden bg-luxe-cream flex items-center justify-center cursor-pointer" onclick="openProductModal('${item.id}')">
        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover zoom-img" loading="lazy">
        
        <!-- Wishlist Heart Icon -->
        <button onclick="event.stopPropagation(); showToast('SAVED TO WISHLIST')" class="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 text-luxe-textMuted hover:text-red-600 flex items-center justify-center shadow-sm transition">
          <i data-lucide="heart" class="w-3.5 h-3.5"></i>
        </button>
      </div>

      <div class="pt-3 space-y-1">
        <div class="text-[9px] font-sans tracking-widest text-luxe-gold uppercase font-semibold">${item.category}</div>
        <h5 class="font-serif font-semibold text-xs text-luxe-wine truncate">${item.name}</h5>
        <div class="flex items-center justify-between pt-1">
          <span class="text-xs font-serif font-bold text-luxe-wine">${formatINR(item.price)}</span>
          <button onclick="addToBagById('${item.id}')" class="text-[10px] font-sans tracking-wider uppercase text-luxe-gold hover:text-luxe-wine font-bold">
            + BAG
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

/* ======================================================= */
/* ANNOUNCEMENT ROTATOR (from Maison — Ivory Champagne)     */
/* ======================================================= */
function initAnnouncementRotator() {
  let ai = 0, paused = false, timer;
  const aText = document.getElementById("aText");
  if (!aText) return;

  function showA(dir = 1) {
    ai = (ai + dir + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length;
    gsap.to(aText, {
      y: -8 * dir,
      opacity: 0,
      duration: 0.28,
      onComplete: () => {
        aText.textContent = ANNOUNCEMENTS[ai];
        gsap.fromTo(aText, { y: 8 * dir, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35 });
      }
    });
  }

  aText.textContent = ANNOUNCEMENTS[0];
  const tick = () => {
    clearInterval(timer);
    timer = setInterval(() => {
      if (!paused && !document.hidden) showA(1);
    }, 4500);
  };
  tick();

  const nextBtn = document.getElementById("aNext");
  const prevBtn = document.getElementById("aPrev");
  if (nextBtn) nextBtn.onclick = () => { showA(1); tick(); };
  if (prevBtn) prevBtn.onclick = () => { showA(-1); tick(); };

  const annBar = document.querySelector(".ann");
  if (annBar) {
    annBar.addEventListener("mouseenter", () => paused = true);
    annBar.addEventListener("mouseleave", () => paused = false);
  }
}

/* ======================================================= */
/* STICKY NAV ON SCROLL                                    */
/* ======================================================= */
function initStickyNavScroll() {
  const nav = document.getElementById("mainNav");
  if (!nav) return;
  const onScroll = () => {
    nav.classList.toggle("solid", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ======================================================= */
/* GSAP & SCROLLTRIGGER ANIMATION SUITE                     */
/* ======================================================= */
function initGSAPAnimations() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || typeof gsap === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  // Hero Entrance
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.fromTo("#heroImgWrapper", 
    { clipPath: "inset(100% 0 0 0)" }, 
    { clipPath: "inset(0% 0 0 0)", duration: 1.4, ease: "power4.inOut" }
  )
  .from("#heroHeadline .line > span", {
    yPercent: 110,
    duration: 1,
    stagger: 0.12,
    ease: "power3.out"
  }, "-=0.9")
  .from(".hero-rv", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12
  }, "-=0.5")
  .from("#heroFloat1", {
    opacity: 0,
    y: 25,
    duration: 0.8
  }, "-=0.4");

  // Parallax scrub on floating hero accent
  gsap.to("#heroFloat1", {
    yPercent: -35,
    ease: "none",
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  // Section Headers Subtle Slide-Up
  gsap.utils.toArray(".section-head").forEach(h => {
    gsap.from(h, {
      y: 25,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: h,
        start: "top 92%"
      }
    });
  });

  // Arched cards stagger
  ScrollTrigger.batch(".arch-card", {
    start: "top 90%",
    once: true,
    onEnter: batch => gsap.fromTo(batch, 
      { y: 35, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.8, ease: "power3.out" }
    )
  });

  // Split Banners
  gsap.utils.toArray(".split-banner").forEach((el, i) => {
    gsap.from(el, {
      clipPath: i % 2 === 0 ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
      duration: 1.2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top 85%"
      }
    });
  });

  // Styling Suggestions Cards (Bulletproof fromTo with once: true)
  ScrollTrigger.batch(".style-card", {
    start: "top 92%",
    once: true,
    onEnter: batch => gsap.fromTo(batch, 
      { y: 35, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.75, ease: "power3.out" }
    )
  });

  // Testimonials
  ScrollTrigger.batch(".testimonial-card", {
    start: "top 92%",
    once: true,
    onEnter: batch => gsap.fromTo(batch, 
      { y: 25, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.7, ease: "power3.out" }
    )
  });
}

/* ======================================================= */
/* SHOPPING BAG LOGIC                                      */
/* ======================================================= */

function addToBagById(id) {
  const item = ALL_PRODUCTS.find(p => p.id === id);
  if (item) addToBag(item);
}

function addToBag(product) {
  const existing = cart.find(i => i.id === product.id);
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
  
  localStorage.setItem('maison_aurelia_cart', JSON.stringify(cart));
  updateCartUI();
  
  // Cart Badge "Bump" scale animation
  const countBadge = document.getElementById("header-cart-count");
  if (countBadge) {
    countBadge.classList.add("bump");
    setTimeout(() => countBadge.classList.remove("bump"), 300);
  }

  showToast(`ADDED TO BAG: ${product.name}`);
}

function updateCartQuantity(id, change) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== id);
  }
  
  localStorage.setItem('maison_aurelia_cart', JSON.stringify(cart));
  updateCartUI();
}

function removeCartItem(id) {
  cart = cart.filter(i => i.id !== id);
  localStorage.setItem('maison_aurelia_cart', JSON.stringify(cart));
  updateCartUI();
  showToast("Garment removed from bag");
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const headerCount = document.getElementById('header-cart-count');
  const drawerCount = document.getElementById('drawer-item-count');
  const subtotalElem = document.getElementById('cart-subtotal');
  const totalElem = document.getElementById('cart-total');
  const checkoutDisplay = document.getElementById('checkout-amount-display');

  if (headerCount) headerCount.textContent = totalCount;
  if (drawerCount) drawerCount.textContent = totalCount;
  if (subtotalElem) subtotalElem.textContent = formatINR(totalAmount);
  if (totalElem) totalElem.textContent = formatINR(totalAmount);
  if (checkoutDisplay) checkoutDisplay.textContent = formatINR(totalAmount);

  const container = document.getElementById('cart-items-container');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16 text-luxe-textMuted space-y-3 font-sans text-xs">
        <p class="font-serif text-sm">YOUR SHOPPING BAG IS CURRENTLY EMPTY</p>
        <button onclick="toggleCart(); document.getElementById('occasions').scrollIntoView({behavior:'smooth'})" class="px-5 py-2 rounded btn-gold text-[10px] uppercase font-bold">
          EXPLORE OCCASIONS
        </button>
      </div>
    `;
  } else {
    container.innerHTML = cart.map(item => `
      <div class="flex items-center gap-3 p-3 rounded-xl bg-luxe-cream border border-luxe-borderLight font-sans text-xs">
        <img src="${item.image}" alt="${item.name}" class="w-14 h-14 rounded-lg object-cover bg-white">
        
        <div class="flex-1 min-w-0">
          <div class="text-xs font-serif font-bold text-luxe-wine truncate">${item.name}</div>
          <div class="text-[11px] text-luxe-gold font-bold mt-0.5">${formatINR(item.price)}</div>
          
          <div class="flex items-center gap-3 mt-1.5">
            <div class="flex items-center bg-white border border-luxe-borderLight rounded text-[11px]">
              <button onclick="updateCartQuantity('${item.id}', -1)" class="px-2 py-0.5 hover:bg-luxe-creamDark">-</button>
              <span class="px-2 py-0.5 text-luxe-wine font-bold">${item.quantity}</span>
              <button onclick="updateCartQuantity('${item.id}', 1)" class="px-2 py-0.5 hover:bg-luxe-creamDark">+</button>
            </div>
            
            <button onclick="removeCartItem('${item.id}')" class="text-luxe-textMuted hover:text-red-600 text-[10px] uppercase font-bold">
              REMOVE
            </button>
          </div>
        </div>

        <div class="text-xs font-serif font-bold text-luxe-wine">
          ${formatINR(item.price * item.quantity)}
        </div>
      </div>
    `).join('');
  }

  lucide.createIcons();
}

function toggleCart() {
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

function openProductModal(id) {
  const p = ALL_PRODUCTS.find(item => item.id === id);
  if (!p) return;

  document.getElementById('modal-product-img').src = p.image;
  document.getElementById('modal-product-name').textContent = p.name;
  document.getElementById('modal-product-price').textContent = formatINR(p.price);
  document.getElementById('modal-product-desc').textContent = p.desc || 'Tailored in Parisian atelier from imported mulberry silk and Italian corded lace. Finished with mother-of-pearl closures.';
  document.getElementById('modal-product-category').textContent = (p.category || 'COUTURE').toUpperCase() + ' // HAUTE COUTURE';

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
      btn.classList.remove('bg-luxe-wine', 'text-white', 'active');
      btn.classList.add('border-luxe-borderLight', 'text-luxe-textDark');
    });
    e.target.classList.add('bg-luxe-wine', 'text-white', 'active');
    e.target.classList.remove('border-luxe-borderLight', 'text-luxe-textDark');
  }
});

function openCheckoutModal() {
  if (cart.length === 0) {
    showToast("Your shopping bag is empty. Please select a piece.");
    return;
  }
  toggleCart();
  document.getElementById('checkout-modal').classList.remove('hidden');
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal').classList.add('hidden');
}

function completeCheckoutOrder() {
  closeCheckoutModal();
  cart = [];
  localStorage.removeItem('maison_aurelia_cart');
  updateCartUI();
  showToast("ORDER CONFIRMED — INVOICE #MA-COUTURE-" + Math.floor(100000 + Math.random() * 900000));
}

function openSearchModal() {
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
    resultsContainer.innerHTML = '<div class="text-luxe-textMuted py-3 text-center">Type keywords to search boutique archives...</div>';
    return;
  }

  const matches = ALL_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(clean) || 
    (p.desc && p.desc.toLowerCase().includes(clean)) ||
    (p.category && p.category.toLowerCase().includes(clean))
  );

  if (matches.length === 0) {
    resultsContainer.innerHTML = '<div class="text-luxe-textMuted py-3 text-center">No couture pieces found.</div>';
    return;
  }

  resultsContainer.innerHTML = matches.map(p => `
    <div onclick="closeSearchModal(); openProductModal('${p.id}')" class="flex items-center justify-between p-2.5 rounded-xl bg-luxe-cream hover:bg-luxe-creamDark cursor-pointer transition">
      <div class="flex items-center gap-3">
        <img src="${p.image}" class="w-10 h-10 rounded-lg object-cover bg-white">
        <div>
          <div class="text-luxe-wine font-serif font-bold text-xs">${p.name}</div>
          <div class="text-[10px] text-luxe-gold uppercase font-semibold">${p.category || 'COUTURE'}</div>
        </div>
      </div>
      <div class="text-luxe-wine font-serif font-bold text-xs">${formatINR(p.price)}</div>
    </div>
  `).join('');
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
  }, 2800);
}
