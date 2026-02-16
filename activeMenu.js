(function () {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  const map = [
    { cls: ".nav-home", match: /^\/$/ },
    { cls: ".nav-about", match: /^\/about(\/|$)/i },
    { cls: ".nav-boh", match: /^\/(boh|back-of-house)(\/|$)/i },
    { cls: ".nav-resources", match: /^\/resources(\/|$)/i },
    { cls: ".nav-blog", match: /^\/blog(\/|$)/i },
    { cls: ".nav-contact", match: /^\/contact(\/|$)/i },
  ];

  const matched = map.find((item) => item.match.test(path));
  if (!matched) return;

  const el = document.querySelector(matched.cls);
  if (el) el.classList.add("is-active");
})();
