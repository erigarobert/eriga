/* Header dropdowns (About, Experience), chat label and extra chatbot answers */
(function () {
  const drops = [...document.querySelectorAll(".nav-drop")];
  const closeAll = (except) => drops.forEach((d) => {
    if (d === except) return;
    d.classList.remove("open");
    const b = d.querySelector(".nav-drop-btn");
    if (b) b.setAttribute("aria-expanded", "false");
  });

  drops.forEach((drop) => {
    const btn = drop.querySelector(".nav-drop-btn");
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeAll(drop);
      const open = drop.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
    drop.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => closeAll()));
  });
  document.addEventListener("click", (e) => { if (!e.target.closest(".nav-drop")) closeAll(); });

  // Highlight the dropdown button while you are on one of its pages
  const mark = () => {
    let current = "";
    document.querySelectorAll("section[id]").forEach((s) => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
    drops.forEach((d) => d.classList.toggle("active", (d.dataset.group || "").split(",").includes(current)));
  };
  window.addEventListener("scroll", mark, { passive: true });
  mark();

  // "Chat with Eriga's Assistant" label opens the chat and hides while it is open
  const label = document.getElementById("chatLabel");
  const fab = document.getElementById("chatFab");
  const chat = document.getElementById("chat");
  if (label && fab && chat) {
    label.addEventListener("click", () => fab.click());
    new MutationObserver(() => label.classList.toggle("hidden", chat.classList.contains("open")))
      .observe(chat, { attributes: true, attributeFilter: ["class"] });
  }

  // Extra / updated chatbot answers
  if (typeof KB !== "undefined") {
    KB.push({
      k: ["leave", "left", "leaving", "reason", "quit", "why did", "resign", "contract"],
      a: "📌 <b>Frontier Energy (Nov 2025 – Sep 2026):</b> left to begin a full-time M.Eng. in Sustainable Energy and Development at Europa-Universität Flensburg.<br>📌 <b>Aptech Africa (Aug 2023 – Oct 2025):</b> contract concluded after the successful delivery of all assigned projects; with no immediate follow-on project, Eriga moved to a utility-scale PV role at Frontier Energy.",
    });
    const interests = KB.find((item) => item.k.includes("interest"));
    if (interests) {
      interests.k.push("wind", "hydro", "renewable", "grid stability", "reliability", "bess", "bms", "africa");
      interests.a = "🔭 <b>Current interests:</b><br>☀️ Renewable energy systems: solar PV, wind & hydropower<br>📐 Energy-system modelling & analysis<br>🤖 AI & machine learning for energy<br>🔋 Battery storage (BESS) & BMS<br>📊 Energy data analytics & sustainable development<br>⚡ Grid stability, reliability & availability<br>🌍 Energy access & electrification in Africa";
    }
  }
})();
