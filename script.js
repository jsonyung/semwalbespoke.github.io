// Smooth fade-in effect on scroll
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".fade-up");
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) el.classList.add("visible");
  });
});
