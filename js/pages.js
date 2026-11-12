/* Page dots: one dot per section ("page"), highlights the page you are on */
(function pageDots() {
  const sections = [...document.querySelectorAll("section.section[id]")];
  const pages = [{ id: "home", name: "Home" }].concat(
    sections.map((s, i) => {
      const label = s.querySelector(".eyebrow");
      return { id: s.id, name: String(i + 1).padStart(2, "0") + " · " + (label ? label.textContent : s.id) };
    })
  );
  const nav = document.createElement("nav");
  nav.className = "page-dots";
  nav.setAttribute("aria-label", "Pages");
  nav.innerHTML = pages.map((p) => `<a href="#${p.id}" data-id="${p.id}"><span>${p.name}</span></a>`).join("");
  document.body.appendChild(nav);

  const update = () => {
    let current = "home";
    pages.forEach((p) => {
      const el = document.getElementById(p.id);
      if (el && window.scrollY >= el.offsetTop - window.innerHeight / 2) current = p.id;
    });
    nav.querySelectorAll("a").forEach((a) => a.classList.toggle("active", a.dataset.id === current));
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
})();
