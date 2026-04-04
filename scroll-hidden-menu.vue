<script>
document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const nav = document.querySelector("#navigation"); // adapte si besoin

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // scroll vers le bas → cacher
      nav.style.transform = "translateY(-100%)";
    } else {
      // scroll vers le haut → montrer
      nav.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});
</script>
