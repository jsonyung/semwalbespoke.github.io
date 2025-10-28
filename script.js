// Smooth fade-in effect on scroll
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".fade-up");
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
});

// Trigger initial animation for visible elements on load
window.addEventListener("load", () => {
  const event = new Event("scroll");
  document.dispatchEvent(event);
});
