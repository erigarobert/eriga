/* ==========================================================
   Eriga Robert: Portfolio scripts
   ========================================================== */

/* ---------------- SETTINGS: edit these ---------------- */
const CONFIG = {
  email: "erigarobert2@gmail.com",
  // Contact form delivery (free, no backend): https://formsubmit.co
  // The FIRST message triggers an activation email to your Gmail, click "Activate" once.
  formEndpoint: "https://formsubmit.co/ajax/erigarobert2@gmail.com",
  phoneDE: "+49 159 079 14616",
  phoneUG: "+256 765 499 689",
  whatsapp: "https://wa.me/4915907914616",
  linkedin: "https://www.linkedin.com/in/eriga-robert-9522b518a",
  facebook: "https://www.facebook.com/share/1FRfmfW5WH/",
  instagram: "https://www.instagram.com/erifusion_/",
  x: "https://x.com/EngErigaRobert",
  publicationUrl: "https://ieeexplore.ieee.org/document/10201780", // IEEE paper 1 (EV fast charging)
  publicationUrl2: "https://ieeexplore.ieee.org/document/10452171", // IEEE paper 2
};

/* ---------------- PROJECTS: edit / add here ----------------
   To show your OWN photos permanently for every visitor:
   1. copy the pictures into  images/projects/
   2. list them in  photos: ["images/projects/my-photo.jpg", ...]
   (The camera button on the site only saves photos in YOUR browser.) */
const PROJECTS = [
  {
    id: "sl50",
    cat: "grid pv",
    label: "Utility-scale PV · O&M",
    title: "50 MW Grid-Connected PV Portfolio, Sierra Leone",
    icon: "fa-solar-panel",
    ph: "linear-gradient(135deg,#f59e0b,#ea580c 55%,#0f766e)",
    summary: "O&M support, performance analysis and commissioning of added capacity across the 1,500 V DC, 33 kV and 161 kV chain.",
    details: [
      "35 MW in operation and 15 MW under implementation, feeding Sierra Leone's national grid via the 161 kV Bumbuna to Freetown corridor.",
      "Daily generation vs. expected yield analysis; inverter, transformer and feeder trend tracking to isolate losses and downtime.",
      "Troubleshooting of breakers, CTs, CVTs/VTs, surge arresters, protection relays and transformers using SCADA/PLC alarms.",
      "Pre-energisation checks, functional testing and commissioning records for new capacity.",
    ],
    impact: "Reliable renewable generation reaching the national transmission network.",
    tags: ["1,500 V DC", "33 kV", "161 kV", "SCADA", "Python", "Performance analytics"],
    photos: [
      "images/projects/sl50-14.jpg",
      "images/projects/sl50-1.jpg",
      "images/projects/sl50-2.jpg",
      "images/projects/sl50-3.jpg",
      "images/projects/sl50-4.jpg",
      "images/projects/sl50-5.jpg",
      "images/projects/sl50-6.jpg",
      "images/projects/sl50-7.jpg",
      "images/projects/sl50-8.jpg",
      "images/projects/sl50-9.jpg",
      "images/projects/sl50-10.jpg",
      "images/projects/sl50-11.jpg",
      "images/projects/sl50-12.jpg",
      "images/projects/sl50-13.jpg",
      "images/projects/sl50-15.jpg",
      "images/projects/sl50-16.jpg",
      "images/projects/sl50-17.jpg",
      "images/projects/sl50-18.jpg",
      "images/projects/sl50-19.jpg",
      "images/projects/sl50-20.jpg",
      "images/projects/sl50-21.jpg",
    ],
  },
  {
    id: "juba",
    cat: "grid pv",
    label: "Grid-connected Solar PV · EPC & Commissioning",
    title: "12 MW Solar Plant, Juba, South Sudan",
    icon: "fa-bolt",
    ph: "linear-gradient(135deg,#0ea5a0,#0369a1 60%,#1e1b4b)",
    summary: "Electrical engineering, testing and commissioning support for a 12 MW grid-connected plant near Juba and a mini-grid under the SLP project.",
    details: [
      "Supported electrical engineering for one of South Sudan's first utility-scale solar plants.",
      "Testing and commissioning support for the plant.",
      "Mini-grid engineering under the SLP project.",
    ],
    impact: "Added grid-connected solar capacity to South Sudan's power supply, reducing diesel dependence.",
    tags: ["Grid-connected PV", "12 MW", "Commissioning", "Mini-grid"],
    photos: [
      "images/projects/juba-4.jpg",
      "images/projects/juba-1.jpg",
      "images/projects/juba-2.jpg",
      "images/projects/juba-3.jpg",
      "images/projects/juba-5.jpg",
    ],
  },
  {
    id: "hosp",
    cat: "pv community",
    label: "Hybrid PV · Healthcare",
    title: "2.4 MW Hybrid PV for Seven Hospitals",
    icon: "fa-hospital",
    ph: "linear-gradient(135deg,#10b981,#0d9488 50%,#1e3a8a)",
    summary: "Sized and designed PV/battery/diesel systems with 100 kWh storage to match hospital loads, plus BMS upgrades for five government hospital laboratories.",
    details: [
      "Load assessment and PV/battery/inverter sizing for critical healthcare loads.",
      "Hybrid PV/battery/diesel architecture with Battery Management System (BMS).",
      "Battery bank + BMS upgrades in five government hospital laboratories.",
    ],
    impact: "Dependable electricity for theatres, maternity wards, vaccine fridges and labs.",
    tags: ["Hybrid PV", "100 kWh BESS", "BMS", "HOMER", "PVsyst"],
    photos: [
      "images/projects/hosp-1.jpg",
      "images/projects/hosp-2.jpg",
      "images/projects/hosp-3.jpg",
      "images/projects/hosp-4.jpg",
      "images/projects/hosp-5.jpg",
      "images/projects/hosp-6.jpg",
      "images/projects/hosp-7.jpg",
      "images/projects/hosp-8.jpg",
      "images/projects/hosp-9.jpg",
    ],
  },
  {
    id: "bids",
    cat: "pv community",
    label: "Tenders · Design",
    title: "Solar Project Bids, incl. UNDP Sierra Leone",
    icon: "fa-file-signature",
    ph: "linear-gradient(135deg,#8b5cf6,#6d28d9 50%,#0f172a)",
    summary: "Technical proposals, designs, BoQs and tender documents, presented to clients and stakeholders.",
    details: [
      "Wrote technical proposals and supporting documents for community and government-laboratory solar projects.",
      "Presented system designs to clients, translating energy needs into PV, battery and hybrid configurations.",
      "Contributed to winning several bids, including projects under UNDP in Sierra Leone.",
    ],
    impact: "Won funding that brought solar power to communities and public institutions.",
    tags: ["Tendering", "Proposals", "BoQ", "Client presentations", "UNDP"],
    photos: [
      "images/projects/bids-1.jpg",
      "images/projects/bids-2.jpg",
    ],
  },
  {
    id: "offgrid",
    cat: "pv community",
    label: "Off-grid · Communities",
    title: "Off-grid PV, Solar Water Pumping & Street Lighting",
    icon: "fa-droplet",
    ph: "linear-gradient(135deg,#06b6d4,#0284c7 55%,#14532d)",
    summary: "Design and support of off-grid PV, solar water pumping and street lighting for communities and institutions.",
    details: [
      "PV sizing and equipment selection for off-grid and pumping applications.",
      "Installation, testing, commissioning and maintenance.",
    ],
    impact: "Clean water closer to home, safer streets at night and power for schools and institutions.",
    tags: ["Off-grid", "Solar pumping", "Street lighting", "Communities"],
    photos: [
      "images/projects/offgrid-1.jpg",
      "images/projects/offgrid-2.jpg",
      "images/projects/offgrid-3.jpg",
    ],
  },
  {
    id: "tororo",
    cat: "grid",
    label: "Industrial power",
    title: "Industrial Power Systems, Tororo Cement (ABB)",
    icon: "fa-industry",
    ph: "linear-gradient(135deg,#f97316,#b45309 50%,#1e3a8a)",
    summary: "GIS and 20 MVA transformer installation; commissioning of 11 switchgear panels; protection coordination; 5,800 kW motor and drive (VRM Project II).",
    details: [
      "Commissioning of 11 switchgear panels and protection coordination for selective fault isolation.",
      "Installation, testing and commissioning of a 5,800 kW mill motor and drive.",
      "GIS and 20 MVA indoor transformer installation.",
    ],
    impact: "Stronger plant power distribution and dependable operation of a key production drive.",
    tags: ["GIS", "20 MVA", "Switchgear", "Protection", "Large drives"],
    photos: [
      "images/projects/tororo-1.jpg",
      "images/projects/tororo-2.jpg",
      "images/projects/tororo-3.jpg",
      "images/projects/tororo-4.jpg",
      "images/projects/tororo-5.jpg",
      "images/projects/tororo-6.jpg",
      "images/projects/tororo-7.jpg",
      "images/projects/tororo-8.jpg",
    ],
  },
  {
    id: "ml",
    cat: "ai",
    label: "AI / ML Research",
    title: "Machine-Learning Research for Energy Systems",
    icon: "fa-brain",
    ph: "linear-gradient(135deg,#a855f7,#6366f1 50%,#0ea5a0)",
    summary: "ML models for energy and power-electronics applications combining Simulink system models with Python data analysis, now applying LLMs to O&M.",
    details: [
      "Developed and simulated ML models for energy and power-electronics use cases.",
      "Combined MATLAB/Simulink system models with Python data pipelines.",
      "Currently exploring Large Language Models for O&M: fault diagnosis, alarm triage and automated reports.",
    ],
    impact: "A data-driven approach to system performance and control, documented in technical research reports.",
    tags: ["Python", "MATLAB", "Simulink", "Machine learning", "LLM"],
    photos: [
      "images/projects/ml-1.jpg",
      "images/projects/ml-2.jpg",
    ],
  },
  {
    id: "ev",
    cat: "ai",
    label: "IEEE Publication",
    title: "Solar-Powered EV DC Fast Charging (2 IEEE Papers)",
    icon: "fa-charging-station",
    ph: "linear-gradient(135deg,#22c55e,#0d9488 50%,#1d4ed8)",
    summary: "MPPT buck converter with a PSO-trained neural network and model predictive control feeding PV energy into an EV DC fast charger; published at IEEE APSIT 2023, with a follow-up ML buck-boost paper at IEEE ICEFEET 2023.",
    details: [
      "Converter modelling and control design in MATLAB/Simulink.",
      "Integration of PV generation with DC fast-charging requirements.",
    ],
    impact: "A pathway to charging electric vehicles directly from the sun.",
    tags: ["Power electronics", "EV charging", "MATLAB/Simulink", "IEEE"],
    photos: [
      "images/projects/ev-1.jpg",
      "images/projects/ev-2.jpg",
    ],
  },
  {
    id: "nexus",
    cat: "community",
    label: "Founder · Social impact",
    title: "Sustaina Nexus Foundation (in development)",
    icon: "fa-seedling",
    ph: "linear-gradient(135deg,#84cc16,#15803d 55%,#0f172a)",
    summary: "An energy-access and agriculture initiative for underserved rural communities in Uganda, built through community mobilisation and grant funding.",
    details: [
      "Designing solar-powered solutions for irrigation, agro-processing and household energy.",
      "Community mobilisation and grant-funding strategy.",
    ],
    impact: "Higher farm incomes, food security and energy access for rural families.",
    tags: ["Energy access", "Agri-PV", "Leadership", "Uganda"],
    photos: [],
  },
];

/* ======================================================== */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

document.getElementById("year").textContent = new Date().getFullYear();

/* ---------------- Navbar ---------------- */
const nav = $("#nav"), burger = $("#burger"), navLinks = $("#navLinks"), toTop = $("#toTop");
burger.addEventListener("click", () => { burger.classList.toggle("open"); navLinks.classList.toggle("open"); });
$$("#navLinks a").forEach((a) => a.addEventListener("click", () => { burger.classList.remove("open"); navLinks.classList.remove("open"); }));
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
  toTop.classList.toggle("show", window.scrollY > 700);
  let current = "";
  $$("section[id]").forEach((s) => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
  $$("#navLinks a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
});
toTop.addEventListener("click", () => window.scrollTo({ top: 0 }));

/* ---------------- Typing effect ---------------- */
const roles = [
  "Electrical & Solar PV Engineer",
  "Energy Analyst & Modeller",
  "AI / ML for Energy Systems",
  "Sustainable Energy for Community Development",
  "Python · MATLAB · PowerFactory",
  "Clean Energy Access for Rural Communities 🌍",
];
(function type(i = 0, j = 0, del = false) {
  const el = $("#typed"), word = roles[i];
  el.textContent = word.slice(0, j);
  if (!del && j === word.length) return setTimeout(() => type(i, j, true), 1800);
  if (del && j === 0) return setTimeout(() => type((i + 1) % roles.length, 0, false), 300);
  setTimeout(() => type(i, j + (del ? -1 : 1), del), del ? 35 : 70);
})();

/* ---------------- Reveal + counters + skill bars ---------------- */
$$(".bar").forEach((b) => { const f = document.createElement("i"); f.className = "fill"; b.appendChild(f); });
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add("visible");
    $$(".bar", e.target).forEach((b) => ($(".fill", b).style.width = b.dataset.w + "%"));
    io.unobserve(e.target);
  });
}, { threshold: 0.12 });
$$(".reveal").forEach((el) => io.observe(el));

const countIO = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target, target = +el.dataset.count, suf = el.dataset.suffix || "";
    let start = null;
    const step = (t) => {
      start ??= t;
      const p = Math.min((t - start) / 1600, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suf;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    countIO.unobserve(el);
  });
}, { threshold: 0.5 });
$$("[data-count]").forEach((el) => countIO.observe(el));

/* ---------------- Energy-grid background canvas ---------------- */
(function bg() {
  const c = $("#bg-canvas"), ctx = c.getContext("2d");
  let w, h, pts;
  const init = () => {
    w = c.width = innerWidth; h = c.height = innerHeight;
    const n = Math.min(70, Math.floor((w * h) / 22000));
    pts = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3 }));
  };
  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    pts.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 140) { ctx.strokeStyle = `rgba(25,211,182,${0.12 * (1 - d / 140)})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
      }
      ctx.fillStyle = i % 5 === 0 ? "rgba(251,191,36,.7)" : "rgba(25,211,182,.5)";
      ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2); ctx.fill();
    });
    requestAnimationFrame(draw);
  };
  addEventListener("resize", init);
  init();
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) draw();
})();

/* ---------------- Projects + photo attach ---------------- */
const store = {
  get(id) { try { return JSON.parse(localStorage.getItem("proj_" + id) || "[]"); } catch { return []; } },
  set(id, arr) {
    try { localStorage.setItem("proj_" + id, JSON.stringify(arr)); return true; }
    catch { alert("Browser storage is full. For many photos, put them in images/projects/ and list them in js/main.js."); return false; }
  },
};
// Upload buttons only show when previewing locally (not to website visitors)
const canUpload = location.protocol === "file:" || ["localhost", "127.0.0.1"].includes(location.hostname);
const allPhotos = (p) => [...p.photos, ...store.get(p.id)];

// Shrink uploaded photos so they fit in browser storage
function compress(file, max = 1280) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => {
      const img = new Image();
      img.onload = () => {
        const s = Math.min(1, max / Math.max(img.width, img.height));
        const cv = document.createElement("canvas");
        cv.width = img.width * s; cv.height = img.height * s;
        cv.getContext("2d").drawImage(img, 0, 0, cv.width, cv.height);
        res(cv.toDataURL("image/jpeg", 0.8));
      };
      img.onerror = rej; img.src = r.result;
    };
    r.onerror = rej; r.readAsDataURL(file);
  });
}
function pickPhotos(project) {
  const inp = document.createElement("input");
  inp.type = "file"; inp.accept = "image/*"; inp.multiple = true;
  inp.onchange = async () => {
    const added = [];
    for (const f of inp.files) { try { added.push(await compress(f)); } catch {} }
    if (added.length && store.set(project.id, [...store.get(project.id), ...added])) { renderProjects(); openModal(project.id); }
  };
  inp.click();
}

const placeholder = (p, big) =>
  `<div class="p-placeholder" style="--ph:${p.ph}"><div><i class="fa-solid ${p.icon}"></i><small>${big ? "No photos yet. Click “Add photos” to attach" : "Project photos coming soon"}</small></div></div>`;

function renderProjects() {
  $("#projectsGrid").innerHTML = PROJECTS.map((p) => {
    const ph = allPhotos(p);
    return `
    <article class="project reveal visible" data-cat="${p.cat}">
      <div class="p-media" data-open="${p.id}">
        ${ph.length ? `<img src="${ph[0]}" alt="${p.title}" loading="lazy" />` : placeholder(p)}
        ${ph.length > 1 ? `<span class="p-count"><i class="fa-solid fa-images"></i> ${ph.length}</span>` : ""}
        ${canUpload ? `<button class="p-upload" data-upload="${p.id}" title="Attach photos"><i class="fa-solid fa-camera"></i></button>` : ""}
      </div>
      <div class="p-body">
        <span class="p-cat">${p.label}</span>
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        <div class="p-impact"><i class="fa-solid fa-star"></i> ${p.impact}</div>
        <button class="p-more" data-open="${p.id}">View details <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </article>`;
  }).join("");
  applyFilter();
}
let filter = "all";
function applyFilter() { $$(".project").forEach((el) => el.classList.toggle("hide", filter !== "all" && !el.dataset.cat.split(" ").includes(filter))); }
$$("#filters .chip").forEach((b) => b.addEventListener("click", () => {
  $$("#filters .chip").forEach((x) => x.classList.remove("active"));
  b.classList.add("active"); filter = b.dataset.filter; applyFilter();
}));
$("#projectsGrid").addEventListener("click", (e) => {
  const up = e.target.closest("[data-upload]");
  if (up) { e.stopPropagation(); return pickPhotos(PROJECTS.find((p) => p.id === up.dataset.upload)); }
  const op = e.target.closest("[data-open]");
  if (op) openModal(op.dataset.open);
});

const modal = $("#projectModal");
function openModal(id) {
  const p = PROJECTS.find((x) => x.id === id);
  const local = store.get(p.id);
  const gallery = [
    ...p.photos.map((src) => `<div class="g-item"><img src="${src}" alt="${p.title} photo" loading="lazy" /></div>`),
    ...local.map((src, i) => `<div class="g-item"><img src="${src}" alt="${p.title} photo" /><button class="g-del" data-del="${i}" title="Remove"><i class="fa-solid fa-trash"></i></button></div>`),
  ];
  $("#modalGallery").innerHTML = gallery.length ? gallery.join("") : placeholder(p, true);
  $("#modalBody").innerHTML = `
    <span class="p-cat">${p.label}</span>
    <h3>${p.title}</h3>
    <p>${p.summary}</p>
    <ul style="margin:0 0 16px 18px;list-style:disc;color:var(--text-2)">${p.details.map((d) => `<li style="margin:6px 0">${d}</li>`).join("")}</ul>
    <div class="p-impact" style="margin-bottom:16px"><i class="fa-solid fa-star"></i> <strong>Impact:</strong> ${p.impact}</div>
    <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
    ${canUpload ? `<button class="btn btn-primary btn-sm" id="modalAdd"><i class="fa-solid fa-camera"></i> Add photos</button>` : ""}`;
  if (canUpload) $("#modalAdd").onclick = () => pickPhotos(p);
  $$("[data-del]", modal).forEach((b) => (b.onclick = () => {
    const arr = store.get(p.id); arr.splice(+b.dataset.del, 1); store.set(p.id, arr); renderProjects(); openModal(p.id);
  }));
  modal.classList.add("open"); modal.setAttribute("aria-hidden", "false");
}
/* Lightbox: click a gallery photo to see it full size; arrows / swipe to move */
const lb = document.createElement("div");
lb.className = "lightbox";
lb.innerHTML = '<button class="lb-btn lb-close" aria-label="Close">&times;</button><button class="lb-btn lb-prev" aria-label="Previous">&#8249;</button><img alt="" /><button class="lb-btn lb-next" aria-label="Next">&#8250;</button><span class="lb-count"></span>';
document.body.appendChild(lb);
let lbList = [], lbIdx = 0;
const lbShow = (i) => { lbIdx = (i + lbList.length) % lbList.length; $("img", lb).src = lbList[lbIdx]; $(".lb-count", lb).textContent = `${lbIdx + 1} / ${lbList.length}`; };
const lbClose = () => lb.classList.remove("open");
$("#modalGallery").addEventListener("click", (e) => {
  const img = e.target.closest(".g-item img");
  if (!img || e.target.closest("[data-del]")) return;
  lbList = $$("#modalGallery .g-item img").map((x) => x.src);
  lbShow(lbList.indexOf(img.src)); lb.classList.add("open");
});
$(".lb-prev", lb).onclick = (e) => { e.stopPropagation(); lbShow(lbIdx - 1); };
$(".lb-next", lb).onclick = (e) => { e.stopPropagation(); lbShow(lbIdx + 1); };
$(".lb-close", lb).onclick = lbClose;
lb.addEventListener("click", (e) => { if (e.target === lb) lbClose(); });
let lbX = null;
lb.addEventListener("touchstart", (e) => (lbX = e.touches[0].clientX), { passive: true });
lb.addEventListener("touchend", (e) => { if (lbX === null) return; const dx = e.changedTouches[0].clientX - lbX; if (Math.abs(dx) > 40) lbShow(lbIdx + (dx < 0 ? 1 : -1)); lbX = null; });
document.addEventListener("keydown", (e) => {
  if (!lb.classList.contains("open")) return;
  if (e.key === "ArrowRight") lbShow(lbIdx + 1);
  if (e.key === "ArrowLeft") lbShow(lbIdx - 1);
  if (e.key === "Escape") { e.stopImmediatePropagation(); lbClose(); }
}, true);
const closeModal = () => { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); };
$("#modalClose").onclick = closeModal;
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeModal(); toggleChat(false); } });
renderProjects();

/* ---------------- Contact form → Gmail (FormSubmit) ---------------- */
$("#contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target, btn = $("#sendBtn"), status = $("#formStatus");
  const data = Object.fromEntries(new FormData(form));
  if (data._honey) return; // spam bot
  data._replyto = data.email;
  btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending…';
  status.className = "form-status"; status.textContent = "";
  try {
    const r = await fetch(CONFIG.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) });
    const j = await r.json().catch(() => ({}));
    if (!r.ok || j.success === "false" || j.success === false) throw new Error(j.message || "Failed");
    status.className = "form-status ok"; status.textContent = "✅ Thank you! Your message was sent. I'll get back to you within 24 hours.";
    form.reset();
  } catch (err) {
    status.className = "form-status err";
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || "-"}\nReason: ${data.reason}\n\n${data.message}`);
    status.innerHTML = `Couldn't send automatically. <a href="mailto:${CONFIG.email}?subject=${encodeURIComponent("Portfolio message: " + data.reason)}&body=${body}" style="color:var(--sun);text-decoration:underline">Click here to send it by email instead</a>.`;
  } finally {
    btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
  }
});

/* ---------------- Chatbot (rule-based, no API key needed) ---------------- */
const KB = [
  { k: ["hi", "hello", "hey", "good morning", "good evening", "hallo", "guten"], a: "Hello! 👋 I'm Eriga's virtual assistant. Ask me about his experience, skills, projects, AI/ML work, availability or how to contact him." },
  { k: ["who", "about", "introduce", "yourself", "summary", "eriga"], a: "Eriga Robert is an <b>Electrical & Solar PV Engineer, Energy Analyst and AI/ML enthusiast</b> with 3+ years of field experience. He has supported <b>62 MW of solar PV</b> across Africa, from 1,500 V DC to 161 kV, and is now doing a Master's in Sustainable Energy and Development in Flensburg, Germany." },
  { k: ["experience", "work", "job", "career", "worked", "employ", "frontier", "aptech", "planet"], a: "💼 <b>Frontier Energy (Planet Solar Energy)</b> (Nov 2025 to Sep 2026, Sierra Leone): O&M & performance analytics for a 50 MW grid-connected PV portfolio at 33 kV / 161 kV.<br>💼 <b>Aptech Africa</b> (Aug 2023 to Oct 2025, Uganda/South Sudan/Sierra Leone): PV design, tenders (incl. UNDP), hybrid systems for 7 hospitals, 12 MW plant near Juba.<br>💼 <b>Tororo Cement (ABB project)</b>: GIS, 20 MVA transformer, 11 switchgear panels, 5,800 kW drive." },
  { k: ["skill", "tool", "software", "pvsyst", "homer", "powerfactory", "etap", "matlab", "simulink", "pscad", "autocad"], a: "🛠️ <b>Modelling:</b> MATLAB/Simulink, PVsyst, HOMER, DIgSILENT PowerFactory, ETAP, PSCAD<br>🐍 <b>Data/AI:</b> Python (pandas, NumPy), machine learning, LLMs, Excel<br>⚡ <b>Field:</b> PV design & commissioning, BESS/BMS, protection relays, SCADA/PLC, Siemens TIA, Bosch Rexroth, AutoCAD" },
  { k: ["python", "ai", "ml", "machine learning", "artificial", "llm", "data", "model", "predict", "forecast"], a: "🤖 Eriga combines Simulink system models with Python data analysis to build ML models for energy & power-electronics applications. He's now applying <b>LLMs to solar O&M</b>, faster fault diagnosis, alarm triage and automated reporting, and is interested in predictive maintenance and solar/load forecasting." },
  { k: ["publication", "paper", "ieee", "research", "publish", "mitacs", "guelph"], a: "📚 <b>IEEE publications:</b><br>• Solar-Powered EV DC Fast Charging Station based on MPPT-Buck Converter Design using PSO Trained NN Algorithm and MPC (APSIT 2023, first author)<br>• Solar Powered MPPT Buck-Boost Converter Using Adaptive ML Algorithm and Smart Controller For DC Fast Charging Application (ICEFEET 2023, co-author)<br>🔬 <b>Mitacs Globalink Research Intern</b>, University of Guelph, Canada (2022): micropower generation for smart devices.<br>🧠 Ongoing ML research for energy systems. See the <a href='#research'>Research section</a>." },
  { k: ["project", "portfolio", "hospital", "juba", "sierra", "50 mw", "solar plant"], a: "🔆 Highlights: 50 MW PV portfolio (Sierra Leone) · 12 MW plant (Juba) · 2.4 MW hybrid PV for 7 hospitals · UNDP solar bids · solar pumping & street lighting · Tororo Cement industrial power. <a href='#projects'>See all projects →</a>" },
  { k: ["impact", "lives", "change", "community", "world", "sdg", "help"], a: "🌍 His work keeps hospital theatres and vaccine fridges running, puts clean solar power on national grids in Sierra Leone and South Sudan, brings water and street lighting to communities, and cuts diesel use and CO₂ emissions. <a href='#impact'>Read more →</a>" },
  { k: ["education", "degree", "study", "university", "master", "gold", "cgpa", "flensburg", "b.tech"], a: "🎓 <b>M.Eng. Sustainable Energy and Development</b>, Europa-Universität Flensburg (Sep 2026, present)<br>🥇 <b>B.Tech. Electrical Engineering</b>, CV Raman Global University, India (2019 to 2023), <b>Gold Medal</b>, CGPA 8.31/10" },
  { k: ["hire", "available", "availability", "open", "opportunit", "relocat", "location", "remote", "working student", "werkstudent", "full-time", "full time"], a: "✅ <b>Yes, Eriga is available for hire!</b> Full-time, working-student, contract, consulting or remote roles. He's <b>open to work in any location</b> worldwide and is currently based in Flensburg, Germany. <a href='#contact'>Send him a message →</a>" },
  { k: ["visa", "canada", "canadian", "permit", "work permit"], a: "🍁 Eriga holds a <b>valid Canadian visa</b> and is open to relocating, to Canada, Europe, Africa or anywhere the right opportunity is." },
  { k: ["language", "german", "deutsch", "english", "speak"], a: "🗣️ English: professional · German: A2 (improving) · Madi: fluent." },
  { k: ["contact", "email", "mail", "phone", "call", "number", "reach", "whatsapp", "linkedin", "message", "facebook", "instagram", "twitter", "x.com", "social"], a: `📧 <a href="mailto:${CONFIG.email}">${CONFIG.email}</a><br>📞 <a href="tel:+4915907914616">${CONFIG.phoneDE}</a> (DE) · <a href="tel:+256765499689">${CONFIG.phoneUG}</a> (UG)<br>💬 <a href="${CONFIG.whatsapp}" target="_blank">WhatsApp</a> · <a href="${CONFIG.linkedin}" target="_blank">LinkedIn</a><br>🌐 <a href="${CONFIG.facebook}" target="_blank">Facebook</a> · <a href="${CONFIG.instagram}" target="_blank">Instagram</a> · <a href="${CONFIG.x}" target="_blank">X (@EngErigaRobert)</a><br>Or use the <a href="#contact">message form</a>. It goes straight to his inbox.` },
  { k: ["cv", "resume", "download"], a: "📄 Eriga shares his CV on request. <a href='#cv-request'>Request the CV here</a>; he reviews each request and emails the CV to you." },
  { k: ["salary", "rate", "price", "cost", "fee"], a: "💶 Compensation depends on the role and location. Please reach out via the <a href='#contact'>contact form</a> and Eriga will reply within 24 hours." },
  { k: ["interest", "hobby", "passion", "future", "goal"], a: "🔭 Current interests: AI & LLMs for solar O&M, battery storage & grid-forming inverters, energy-system modelling, agri-PV & solar irrigation, solar e-mobility, energy access in Africa, and green hydrogen." },
  { k: ["sustaina", "nexus", "foundation", "founder", "ngo"], a: "🌱 Eriga founded <b>Sustaina Nexus Foundation</b> (in development), an energy-access and agriculture initiative for underserved rural communities in Uganda, built through community mobilisation and grant funding." },
  { k: ["thank", "thanks", "danke", "great", "awesome", "cool"], a: "You're welcome! 😊 Anything else you'd like to know? You can also leave Eriga a message directly from the <a href='#contact'>contact form</a>." },
];
const QUICK = ["Is he available for hire?", "Experience", "AI & Python work", "Publications", "Projects", "Visa / relocation", "Contact"];

const chat = $("#chat"), body = $("#chatBody");
function addMsg(html, who = "bot") { const m = document.createElement("div"); m.className = "msg " + who; m.innerHTML = html; body.appendChild(m); body.scrollTop = body.scrollHeight; }
function reply(text) {
  const q = text.toLowerCase();
  let best = null, score = 0;
  KB.forEach((item) => { const s = item.k.reduce((n, k) => n + (q.includes(k) ? k.length : 0), 0); if (s > score) { score = s; best = item; } });
  const t = document.createElement("div"); t.className = "msg bot typing"; t.innerHTML = "<i></i><i></i><i></i>"; body.appendChild(t); body.scrollTop = body.scrollHeight;
  setTimeout(() => {
    t.remove();
    addMsg(best ? best.a : `Good question! I don't have that answer yet, but Eriga would love to tell you himself. 👉 <a href="#contact">Leave a message</a> or email <a href="mailto:${CONFIG.email}">${CONFIG.email}</a>.`);
  }, 650);
}
function send(text) { if (!text.trim()) return; addMsg(text.replace(/</g, "&lt;"), "user"); reply(text); }
let greeted = false;
function toggleChat(force) {
  const open = force ?? !chat.classList.contains("open");
  chat.classList.toggle("open", open); chat.setAttribute("aria-hidden", String(!open));
  $("#chatFab").innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-robot"></i><span class="fab-dot"></span>';
  if (open && !greeted) { greeted = true; addMsg("Hi there! 👋 I'm Eriga's assistant. ⚡ Electrical & PV Engineer · 📊 Energy Analyst · 🤖 AI/ML, and <b>available for hire worldwide</b>. What would you like to know?"); }
  if (open) setTimeout(() => $("#chatText").focus(), 300);
}
$("#chatQuick").innerHTML = QUICK.map((q) => `<button type="button">${q}</button>`).join("");
$("#chatQuick").addEventListener("click", (e) => { if (e.target.tagName === "BUTTON") send(e.target.textContent); });
$("#chatFab").onclick = () => toggleChat();
$("#chatClose").onclick = () => toggleChat(false);
$("#chatForm").addEventListener("submit", (e) => { e.preventDefault(); const i = $("#chatText"); send(i.value); i.value = ""; });
body.addEventListener("click", (e) => { if (e.target.matches("a[href^='#']")) toggleChat(false); });

/* ---------------- CV request (approval by email) ---------------- */
const cvModal = $("#cvModal");
const openCv = () => { cvModal.classList.add("open"); cvModal.setAttribute("aria-hidden", "false"); };
const closeCv = () => { cvModal.classList.remove("open"); cvModal.setAttribute("aria-hidden", "true"); };
$("#cvRequestBtn").addEventListener("click", openCv);
$("#cvClose").onclick = closeCv;
cvModal.addEventListener("click", (e) => { if (e.target === cvModal) closeCv(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeCv(); });
document.addEventListener("click", (e) => { const a = e.target.closest("a[href='#cv-request']"); if (a) { e.preventDefault(); openCv(); } });
$("#cvForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target, btn = $("#cvSend"), status = $("#cvStatus");
  const data = Object.fromEntries(new FormData(form));
  if (data._honey) return;
  data._replyto = data.email;
  btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending…';
  status.className = "form-status"; status.textContent = "";
  try {
    const r = await fetch(CONFIG.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) });
    const j = await r.json().catch(() => ({}));
    if (!r.ok || j.success === "false" || j.success === false) throw new Error(j.message || "Failed");
    status.className = "form-status ok"; status.textContent = "✅ Request sent! I'll review it and email you my CV.";
    form.reset();
  } catch (err) {
    status.className = "form-status err";
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\n\n${data.message}`);
    status.innerHTML = `Couldn't send automatically. <a href="mailto:${CONFIG.email}?subject=${encodeURIComponent("CV request")}&body=${body}" style="color:var(--sun);text-decoration:underline">Click here to send the request by email</a>.`;
  } finally {
    btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send request';
  }
});

/* ---------------- Photo protection (discourage saving) ---------------- */
document.addEventListener("contextmenu", (e) => { if (e.target.tagName === "IMG") e.preventDefault(); });
document.addEventListener("dragstart", (e) => { if (e.target.tagName === "IMG") e.preventDefault(); });
