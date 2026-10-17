const stage = document.querySelector(".intro-stage");
const header = document.querySelector("#hero-header");
let ticking = false;
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
function headerAnimation() {
  function updateReveal() {
    const rect = stage.getBoundingClientRect();
    const scrollDistance = Math.max(0, stage.offsetHeight - window.innerHeight);

    const scrolled = clamp(-rect.top, 0, scrollDistance);
    const horizontal = clamp(scrolled / window.innerHeight, 0, 1);

    const vertical = clamp(
      (scrolled - window.innerHeight) / (window.innerHeight * 0.3),
      0,
      1
    );

    header.style.setProperty("--x-reveal", horizontal.toFixed(4));
    header.style.setProperty("--y-reveal", vertical.toFixed(4));

    ticking = false;
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateReveal);
  }
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  updateReveal();
}

export {headerAnimation}