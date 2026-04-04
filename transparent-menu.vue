<script>
(function () {
  const nav = document.getElementById("navigation");
  if (!nav) return;

  const THRESHOLD = 10; // dès qu'on commence à scroller

  function update() {
    nav.classList.toggle("is-scrolled", window.scrollY > THRESHOLD);
  }

  update();
  window.addEventListener("scroll", update, { passive: true });
})();
</script>
