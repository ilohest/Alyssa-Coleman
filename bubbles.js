(function () {
  const TARGETS = ["#soft-spot"]; // ou [".bubbles-embed"] si tu utilises un embed
  const COUNT = 20;

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }
  function rint(min, max) {
    return Math.floor(rand(min, max));
  }

  function inject(host) {
    if (!host || host.querySelector(":scope > .bubbles-layer")) return;

    // si host = #soft-spot, on veut que ça clippe
    host.style.overflow = "hidden";

    const layer = document.createElement("div");
    layer.className = "bubbles-layer";
    layer.setAttribute("aria-hidden", "true");
    layer.style.position = "absolute";
    layer.style.inset = "0";
    layer.style.pointerEvents = "none";
    layer.style.zIndex = "9999";

    for (let i = 0; i < COUNT; i++) {
      const wrap = document.createElement("div");
      wrap.className = "bubble-wrap";

      const bubble = document.createElement("div");
      bubble.className = "bubble";

      const size = rand(12, 34);
      wrap.style.left = rand(0, 100) + "%";
      wrap.style.width = size + "px";
      wrap.style.height = size + "px";

      // plus lent
      wrap.style.animationDuration = rand(6, 12) + "s";
      wrap.style.animationDelay = rand(0, 4) + "s";

      // morph lent + forme random initiale
      bubble.style.animationDuration = rand(3, 6) + "s";
      bubble.style.borderRadius =
        `${rint(35, 70)}% ${rint(35, 70)}% ${rint(35, 70)}% ${rint(35, 70)}% / ` +
        `${rint(35, 70)}% ${rint(35, 70)}% ${rint(35, 70)}% ${rint(35, 70)}%`;

      wrap.appendChild(bubble);
      layer.appendChild(wrap);
    }

    host.appendChild(layer);
  }

  function init() {
    TARGETS.forEach((sel) => inject(document.querySelector(sel)));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
