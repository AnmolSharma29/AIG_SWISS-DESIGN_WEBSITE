(function () {
  "use strict";

  const IMG = "Images/watches/";

  /* ---------- DATA ---------- */
  const heritage = [
    {
      year: "1888",
      title: "The Beginning",
      text: "Founded in Solothurn, Switzerland, by watchmaker Fritz Meyer, Roamer started out with just six employees, producing cylinder escapements for mechanical watches.",
      img: IMG + "dwe924dc24/images/CLP/titan-roamer-clp/HeritageCard_1.jpg"
    },
    {
      year: "1890s–1910s",
      title: "Rapid Growth & First Watches",
      text: "By 1895 Roamer had grown to 60 employees, with watchmaker Johann Studeli joining forces with Fritz Meyer. The first watches followed in 1904, the in-house MST movement in 1906, and by 1910 the team had passed 250 people.",
      img: IMG + "dw05625dcc/images/CLP/titan-roamer-clp/HeritageCard_2.jpg"
    }
  ];

  const products = [
    {
      name: "HERMADA TRE",
      price: "₹XXXXX.XX",
      img: IMG + "AGW.320003.CA.jpg"
    },
    {
      name: "JOLANDA",
      price: "₹XXXXX.XX",
      img: IMG + "AGW.321004.CA.jpg"
    },
    {
      name: "MOLISE DUE",
      price: "₹XXXXX.XX",
      img: IMG + "AGW.317007.CA.jpg"
    },
    {
      name: "OLBIA",
      price: "₹XXXXX.XX",
      img: IMG + "AGW.319002.CA.jpg"
    },
    {
      name: "TORIN ONDA",
      price: "₹XXXXX.XX",
      img: IMG + "AGW.315002.CA.jpg"
    }
  ];

  
const faqs = [
  ["What is the heritage of AIGNER?",
   "Founded in Munich in 1965, AIGNER is a luxury brand celebrated for its distinctive combination of German precision, Italian inspiration, and timeless elegance. Recognised by its iconic horseshoe-shaped “A” logo, AIGNER creates refined accessories and timepieces that unite heritage with contemporary design."],

  ["Are AIGNER watches Swiss Made?",
   "AIGNER is a German luxury brand with a collection of timepieces that includes Swiss Made watches. The Swiss Made designation depends on the specifications and manufacturing standards of each individual model. Please refer to the product details for confirmation."],

  ["What movements are used in AIGNER watches?",
   "AIGNER offers timepieces with reliable quartz and mechanical movements, depending on the collection. Quartz movements provide convenient and precise timekeeping, while mechanical movements celebrate traditional watchmaking craftsmanship."],

  ["What materials are used in AIGNER watches?",
   "AIGNER timepieces are crafted with carefully selected materials. Depending on the model, these may include 316L stainless steel, sapphire crystal with anti-reflective coating, and premium leather straps. Every detail reflects the brand's commitment to design, comfort, and lasting quality."],

  ["Do AIGNER watches come with a warranty?",
   "Yes. Eligible AIGNER timepieces qualify for a <strong>5-Year Watch Warranty Extension</strong>, subject to successful registration and the applicable warranty conditions. To activate the extension, register your timepiece within 90 days of the original purchase date."],

  ["How do I activate my 5-year warranty?",
   "To activate your 5-year warranty extension:<br><br>1. Visit the official AIGNER Warranty Registration page.<br>2. Enter your personal details and watch reference number.<br>3. Provide the purchase date and retailer information.<br>4. Upload a copy of your original purchase receipt.<br>5. Submit your registration within 90 days of purchase.<br><br>Once your registration has been successfully processed, you will receive confirmation by email.<br><br><a href=\"https://form.jotform.com/242922420785357\" target=\"_blank\" rel=\"noopener noreferrer\">Register Your AIGNER Watch</a>."],

  ["Which AIGNER watches qualify for the 5-year warranty extension?",
   "The extension is available for eligible original AIGNER timepieces with qualifying reference numbers beginning with AGW or AGT. Registration must be completed within 90 days of the purchase date."],

  ["What does the AIGNER warranty cover?",
   "Warranty coverage is subject to the official terms and conditions applicable to your timepiece. Manufacturing defects may qualify for warranty service, while normal wear and tear, accidental damage, and improper handling may be excluded.<br><br>For clarification regarding your specific model, please contact AIGNER Customer Service."],

  ["Do I need to keep my purchase receipt?",
   "Yes. Your original purchase receipt is required for warranty registration and must be retained for future warranty claims. We recommend keeping a digital copy for your records."],

  ["Can I register my watch after 90 days?",
   "To qualify for the 5-year warranty extension, registration must be completed within 90 days of the original purchase date. Registrations submitted after this period may not qualify.<br><br>For assistance, please contact our Customer Service team."],

  ["Does the 5-year warranty also apply to AIGNER jewellery?",
   "The 5-year warranty extension described here applies to eligible AIGNER timepieces. Jewellery may be subject to separate warranty conditions depending on the product and market."],

  ["Are AIGNER watches water-resistant?",
   "Water resistance varies depending on the model. Please refer to the water-resistance rating shown in your watch specifications.<br><br>Water resistance is not a permanent condition and may decrease over time due to wear or impacts. Avoid operating the crown or pushers underwater and have water resistance checked after servicing or battery replacement."],

  ["How should I care for my AIGNER watch?",
   "To preserve the beauty and performance of your AIGNER timepiece, we recommend gently cleaning the case with a soft, dry cloth, avoiding exposure to harsh chemicals and extreme temperatures, and protecting the watch from strong impacts.<br><br>Leather straps should be kept away from excessive moisture, perfumes, and prolonged exposure to direct sunlight."],

  ["How often should I replace the battery?",
   "Battery life varies depending on the quartz movement and watch functions. If your watch stops or shows signs of a low battery, we recommend having it inspected by a qualified watch professional.<br><br>Prompt battery replacement helps prevent potential damage caused by battery leakage."],

  ["Can I replace the strap on my AIGNER watch?",
   "Many AIGNER watches allow strap or bracelet replacement. Compatibility depends on the case design and attachment system of the individual model.<br><br>For original replacement parts and professional fitting, please contact an authorised service partner."],

  ["Where can I have my AIGNER watch serviced or repaired?",
   "For warranty claims, repairs, or technical assistance, please contact our Customer Service team. Include your watch reference, a description of the issue, and proof of purchase where applicable.<br><br><strong>Customer Service</strong><br>Email: <a href=\"mailto:service@jdm-swiss-group.com\">service@jdm-swiss-group.com</a><br>Website: <a href=\"https://www.jdm-swiss-group.com/\" target=\"_blank\" rel=\"noopener noreferrer\">www.jdm-swiss-group.com</a>"],

  ["Where can I purchase an authentic AIGNER watch?",
   "AIGNER timepieces are available through selected authorised retailers and official AIGNER sales channels. Purchasing from an authorised source helps ensure product authenticity and access to the appropriate warranty support."],

  ["How can I identify an authentic AIGNER watch?",
   "Authentic AIGNER timepieces feature the brand's distinctive design identity and product markings. We recommend purchasing from authorised retailers and retaining your original purchase documentation.<br><br>If you are uncertain about the authenticity of a timepiece, contact Customer Service with its reference number and purchase details."],

  ["What are the delivery and return conditions?",
   "Delivery availability, shipping costs, and return conditions depend on the retailer and destination country.<br><br>Please consult the applicable terms provided during checkout or contact the retailer from whom the timepiece was purchased."]
];


  const chevronDown = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4l4 4 4-4"/></svg>';
  const chevronRight = '<svg viewBox="0 0 10 10" aria-hidden="true"><path d="M3 1.5L6.5 5 3 8.5"/></svg>';

  /* ---------- HERO: show the Swiss Made lockup only if the banner logo is the bare wordmark ---------- */
  const heroLogo = document.getElementById("heroLogo");
  const heroSwiss = document.getElementById("heroSwiss");
  // function checkHeroLogo() {
  //   if (!heroLogo.naturalWidth) return;
  //   const ratio = heroLogo.naturalWidth / heroLogo.naturalHeight;
  //   heroSwiss.hidden = ratio < 3; // a tall logo already contains "Swiss Made since 1888"
  // }
  // if (heroLogo.complete) checkHeroLogo(); else heroLogo.addEventListener("load", checkHeroLogo);

  
  function checkHeroLogo() {
    if (!heroLogo || !heroSwiss || !heroLogo.naturalWidth) {
      return;
    }

    const ratio = heroLogo.naturalWidth / heroLogo.naturalHeight;
    heroSwiss.hidden = ratio < 3;
  }

  if (heroLogo && heroSwiss) {
    if (heroLogo.complete) {
      checkHeroLogo();
    } else {
      heroLogo.addEventListener("load", checkHeroLogo);
    }
  }

  /* ---------- Generic infinite slider ---------- */
  function makeLoopSlider({ track, items, renderItem, getMetrics, interval, onChange }) {
    const n = items.length;
    // three copies: [clone set][real set][clone set]
    const all = items.concat(items, items);
    track.innerHTML = all.map(renderItem).join("");
    let index = n;
    let timer = null;
    let busy = false;

    function place(animate) {
      const { step, offset } = getMetrics();
      track.style.transition = animate ? "" : "none";
      track.style.transform = `translate3d(${offset - index * step}px,0,0)`;
      if (!animate) { void track.offsetWidth; track.style.transition = ""; }
      onChange && onChange(((index % n) + n) % n);
    }
    function go(to) {
      if (busy) return;
      busy = true;
      index = to;
      place(true);
      setTimeout(() => { if (busy) track.dispatchEvent(new Event("transitionend")); }, 1200);
    }
    track.addEventListener("transitionend", (e) => {
      if (e.target !== track || !busy) return;
      busy = false;
      if (index >= 2 * n) { index -= n; place(false); }
      else if (index < n) { index += n; place(false); }
    });
    function start() { if (interval) { stop(); timer = setInterval(() => go(index + 1), interval); } }
    function stop() { clearInterval(timer); }

    // swipe / drag
    let startX = null;
    track.addEventListener("pointerdown", (e) => { startX = e.clientX; stop(); });
    window.addEventListener("pointerup", (e) => {
      if (startX === null) return;
      const dx = e.clientX - startX;
      startX = null;
      if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
      start();
    });
    track.addEventListener("dragstart", (e) => e.preventDefault());

    window.addEventListener("resize", () => place(false));
    place(false);
    start();

    return {
      next: () => { go(index + 1); start(); },
      prev: () => { go(index - 1); start(); },
      goTo: (i) => { go(n + i); start(); },
      stop, start
    };
  }

  /* ---------- HERITAGE SLIDER ---------- */
  const hTrack = document.getElementById("heritageTrack");
  const hDots = document.getElementById("heritageDots");
  hDots.innerHTML = heritage.map((_, i) => `<button aria-label="Go to slide ${i + 1}"></button>`).join("");
  const dotEls = [...hDots.children];

  const heritageSlider = makeLoopSlider({
    track: hTrack,
    items: heritage,
    interval: 3500,
    renderItem: (c) => `
      <article class="heritage__card" style="background-image:url('${c.img}')">
        <div class="heritage__body">
          <p class="heritage__year">${c.year}</p>
          <h3 class="heritage__title">${c.title}</h3>
          <p class="heritage__text">${c.text}</p>
        </div>
      </article>`,
    getMetrics: () => {
      const card = hTrack.firstElementChild;
      const gap = parseFloat(getComputedStyle(hTrack).columnGap) || 20;
      const w = window.innerWidth;
      const offset = w <= 767 ? 16 : w <= 1024 ? w * 0.06 : w * 0.121;
      return { step: card.getBoundingClientRect().width + gap, offset };
    },
    onChange: (i) => dotEls.forEach((d, k) => d.classList.toggle("is-active", k === i))
  });
  dotEls.forEach((d, i) => d.addEventListener("click", () => heritageSlider.goTo(i)));

  /* ---------- PRODUCT SLIDER ---------- */
  const pTrack = document.getElementById("productTrack");
  const pViewport = pTrack.parentElement;

  function sizeProducts() {
    const vw = pViewport.clientWidth;
    const w = window.innerWidth;
    const visible = w >= 1100 ? 4 : w >= 820 ? 3 : w >= 520 ? 2 : 1.25;
    const gap = w >= 1100 ? 41 : w >= 520 ? 24 : 16;
    const cardW = (vw - gap * (Math.ceil(visible) - 1)) / visible;
    pTrack.style.setProperty("--pw", cardW + "px");
    pTrack.style.setProperty("--pgap", gap + "px");
    return { step: cardW + gap, offset: 0 };
  }

  const productSlider = makeLoopSlider({
    track: pTrack,
    items: products,
    interval: 0,
    renderItem: (p) => `
      <article class="product">
        <span class="product__tag">NEW ARRIVAL</span>
        <a href="#" class="product__img"><img src="${p.img}" alt="${p.name}" loading="lazy" /></a>
        <h4 class="product__name">${p.name}</h4>
        <p class="product__price">${p.price}</p>
        <a href="#" class="product__btn">SHOP NOW ${chevronRight}</a>
      </article>`,
    getMetrics: sizeProducts
  });
  document.getElementById("prodNext").addEventListener("click", productSlider.next);
  document.getElementById("prodPrev").addEventListener("click", productSlider.prev);

  /* ---------- FAQ ACCORDION ---------- */
  const faqList = document.getElementById("faqList");
  faqList.innerHTML = faqs.map(([q, a], i) => `
    <div class="faq__item${i === 0 ? " is-open" : ""}">
      <button class="faq__q" aria-expanded="${i === 0}">
        <span>${q}</span>${chevronDown}
      </button>
      <div class="faq__a"><p>${a}</p></div>
    </div>`).join("");

  const faqItems = [...faqList.querySelectorAll(".faq__item")];
  function setOpen(item, open) {
    const panel = item.querySelector(".faq__a");
    item.classList.toggle("is-open", open);
    item.querySelector(".faq__q").setAttribute("aria-expanded", open);
    panel.style.maxHeight = open ? panel.scrollHeight + "px" : "0px";
  }
  faqItems.forEach((item) => {
    if (item.classList.contains("is-open")) setOpen(item, true);
    item.querySelector(".faq__q").addEventListener("click", () => {
      const willOpen = !item.classList.contains("is-open");
      faqItems.forEach((other) => setOpen(other, false));
      if (willOpen) setOpen(item, true);
    });
  });
  window.addEventListener("resize", () => faqItems.forEach((i) => i.classList.contains("is-open") && setOpen(i, true)));

  /* ---------- NEWSLETTER FORM ---------- */
  const form = document.getElementById("newsletterForm");
  const msg = document.getElementById("formMsg");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { name, email, phone } = form.elements;
    const checks = [
      [name, name.value.trim().length >= 2],
      [email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())],
      [phone, /^[6-9]\d{9}$/.test(phone.value.trim())]
    ];
    let ok = true;
    checks.forEach(([el, valid]) => { el.classList.toggle("is-error", !valid); if (!valid) ok = false; });
    msg.className = "newsletter__msg " + (ok ? "ok" : "err");
    msg.textContent = ok
      ? "Thank you! You're now subscribed to Roamer updates."
      : "Please enter a valid name, email and 10-digit phone number.";
    if (ok) form.reset();
  });
  form.elements.phone.addEventListener("input", (e) => { e.target.value = e.target.value.replace(/\D/g, ""); });

  /* ---------- Pause off-screen videos (performance) ---------- */
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        const v = en.target;
        if (en.isIntersecting) { const p = v.play(); p && p.catch(() => {}); }
        else v.pause();
      });
    }, { threshold: 0.15 });
    document.querySelectorAll("video[autoplay]").forEach((v) => io.observe(v));
  }
})();
