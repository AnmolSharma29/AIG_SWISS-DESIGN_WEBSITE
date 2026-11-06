(function () {
  "use strict";

  const IMG = "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/";

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
    },
    {
      year: "1920s–1930s",
      title: "Expanding Production",
      text: "By 1923, Roamer reached a major milestone of one million watches produced. In 1932 the brand strengthened its craftsmanship further by launching its own in-house dial production line.",
      img: IMG + "dw6374beda/images/CLP/titan-roamer-clp/HeritageCard_3.jpg"
    },
    {
      year: "1945–1972",
      title: "Global Expansion & Innovation",
      text: "Roamer opened a representative office in New York City in 1945 and officially adopted the name “Roamer” in 1952. The patented Anfibio watertight case arrived in 1955, followed by the brand’s first quartz movement in 1972.",
      img: IMG + "dwfff724d9/images/CLP/titan-roamer-clp/HeritageCard_4.jpg"
    },
    {
      year: "2000s– Now",
      title: "Heritage Meets Innovation",
      text: "Roamer returned to mechanical watchmaking in 2000 and celebrated its 125th anniversary in 2013. In 2025 it introduced the HELIOS POWER collection, its first solar-powered Swiss Made chronograph movement in a full titanium case.",
      img: IMG + "dwe32792ea/images/CLP/titan-roamer-clp/HeritageCard_5.jpg"
    }
  ];

  const products = [
    {
      name: "Roamer Pro Diver 200 Quartz Analog",
      price: "₹39200",
      img: IMG + "dw8da3701d/images/CLP/titan-roamer-clp/RM969845417520W_1.webp"
    },
    {
      name: "Roamer Valais Gents",
      price: "₹36950",
      img: IMG + "dwd637ae7b/images/CLP/titan-roamer-clp/RM988833417505W_1.webp"
    },
    {
      name: "Roamer Men's R8 Quartz Analog",
      price: "₹39200",
      img: IMG + "dw347bc2b2/images/CLP/titan-roamer-clp/RM972980414520W_1.webp"
    },
    {
      name: "Roamer Scala Quartz Analog",
      price: "₹39200",
      img: IMG + "dw524578c9/images/CLP/titan-roamer-clp/RM976830492050W_1.webp"
    }
  ];

  const faqs = [
    ["Is Aigner a heritage watch brand?",
     "Yes. Aigner is a Swiss watch brand with roots going back to 1888, when Fritz Meyer founded the company in Solothurn, Switzerland. Over the decades it earned a reputation as a respected Swiss watchmaker known for precision engineering, durability and timeless design, and its long watchmaking history and role in Swiss mechanical watch production make it a true heritage brand."],
    ["Is Aigner Swiss made?",
     "Yes. Aigner watches are Swiss Made and are manufactured in Mendrisio, in the Lugano region of Switzerland."],
    ["How old is Aigner?",
     "Aigner was founded in 1888, which gives the brand 138 years of Swiss watchmaking history."],
    ["Does Aigner use an in-house movement?",
     "Aigner’s MST in-house movements are an important part of its history. Today’s collections are powered by proven Swiss calibres: Soprod automatic movements and Ronda quartz movements."],
    ["Is Aigner an accessible luxury brand?",
     "Yes. Aigner offers durable, carefully crafted Swiss Made watches at an approachable price, making genuine Swiss watchmaking accessible to more people."],
    ["Where are Aigner watches manufactured?",
     "Aigner watches are manufactured in Mendrisio, Switzerland."],
    ["Where can I buy original Roamer watches?",
     "In India, original Aigner watches are available through authorised Titan partners, including Helios, Helios Luxe and Titan World stores."],
    ["Does Aigner provide warranty?",
     "Yes. Every Roamer watch comes with a 2-year international warranty, which can be extended by a further 5 years, by registering your watch. <a href=\"#\">Register your watch here</a>."],
    ["What is covered in warranty?",
     "The international warranty covers manufacturing defects."],
    ["What are the conditions of Aigner’s 5 year international warranty?",
     "Register your watch within 90 days of purchase using the original invoice. For automatic watches, a Titan Care service every 3 years is required to keep the extended warranty valid."]
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
