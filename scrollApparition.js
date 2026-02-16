(function () {
  function initReveal() {
    const selector = "section, h1, h2, h3, h4, p, img, .btn, .sb-ps, .sc";
    const elements = document.querySelectorAll(selector);

    elements.forEach((el) => el.classList.add("reveal"));

    const revealEls = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      console.warn(
        "[reveal] IntersectionObserver NOT supported -> fallback all visible",
      );
      revealEls.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealEls.forEach((el) => observer.observe(el));

    // sanity check CSS: est-ce que l'opacité change ?
    setTimeout(() => {
      const sample = revealEls[0];
      if (!sample) return;
      const cs = window.getComputedStyle(sample);
    }, 500);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initReveal);
  } else {
    initReveal();
  }
})();
