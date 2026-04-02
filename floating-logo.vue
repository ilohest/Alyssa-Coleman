<div id="heroLogoTrigger"></div>

<style>
#heroLogoTrigger {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 100svh;
  pointer-events: none;
}

#bohFloatingLogo {
  position: fixed;
  left: 0;
  top: 0;
  width: 220px;
  height: 220px;
  pointer-events: none;
  z-index: 2147483647;
  will-change: transform, width, height;
  transform: translate3d(-50%, -50%, 0);
  transform-origin: center center;
  background: transparent;

  /* dans le hero : pas de blend */
  mix-blend-mode: normal;
}

#bohFloatingLogo.is-blended {
  mix-blend-mode: difference;
}

#bohFloatingLogo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: transparent;
  filter: none;
}

@media (max-width: 767px) {
  #bohFloatingLogo {
    width: 110px;
    height: 110px;
  }
}
</style>

<script>
(function () {
  const TRIGGER_ID = "heroLogoTrigger";
  const LOGO_ID = "bohFloatingLogo";
  const LOGO_SRC =
    "https://static.showit.co/file/Qiv1tUYwhWHeOQ99cxZmng/167310/logos-10.svg";

  function clamp(v, min, max) {
    return Math.min(Math.max(v, min), max);
  }

  function createLogo() {
    let logo = document.getElementById(LOGO_ID);
    if (logo) return logo;

    logo = document.createElement("div");
    logo.id = LOGO_ID;

    const img = document.createElement("img");
    img.src = LOGO_SRC;
    img.alt = "Logo";

    logo.appendChild(img);
    document.body.appendChild(logo);

    return logo;
  }

  function init() {
    const trigger = document.getElementById(TRIGGER_ID);
    if (!trigger) return;

    const logo = createLogo();

    function update() {
      const rect = trigger.getBoundingClientRect();
      const heroHeight = rect.height || window.innerHeight;

      const scrolled = clamp(-rect.top, 0, heroHeight);
      const progress = clamp(scrolled / (heroHeight * 0.9), 0, 1);

      const isMobile = window.innerWidth <= 767;

      /* centre réel de la section embed */
      const startX = rect.left + rect.width / 2;
      const startY = rect.top + rect.height / 2;

      const finalSize = isMobile ? 90 : 120;
      const sideMargin = isMobile ? 20 : 32;

      /* plus bas */
      const bottomMargin = isMobile ? 0 : 2;

      const endX = sideMargin + finalSize / 2;
      const endY = window.innerHeight - bottomMargin - finalSize / 2;

      const currentX = startX + (endX - startX) * progress;
      const currentY = startY + (endY - startY) * progress;

      const startSize = isMobile
        ? 140
        : Math.min(window.innerWidth * 0.28, 320);
      const currentSize = startSize + (finalSize - startSize) * progress;

      logo.style.width = currentSize + "px";
      logo.style.height = currentSize + "px";
      logo.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

      /* blend seulement après sortie du hero */
      if (progress >= 1) {
        logo.classList.add("is-blended");
      } else {
        logo.classList.remove("is-blended");
      }
    }

    let ticking = false;

    function requestUpdate() {
      if (!ticking) {
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    }

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("orientationchange", requestUpdate);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
</script>
