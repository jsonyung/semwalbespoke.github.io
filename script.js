// ✨ Fade-up animation on scroll
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".fade-up");
  const trigger = window.innerHeight * 0.85;
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add("visible");
  });
});

// Trigger on load
window.addEventListener("load", () => {
  document.dispatchEvent(new Event("scroll"));
});

// 🧭 Smooth scroll for navbar links
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth",
      });
    }
  });
});
