document.addEventListener("DOMContentLoaded", () => {

  // ALWAYS correct absolute base path for GitHub Pages
  const BASE = "/semwalbespoke.github.io/legal";

  const headerPlaceholder = document.querySelector("#main-header");
  const footerPlaceholder = document.querySelector("#main-footer");

  if (headerPlaceholder) {
    fetch(`${BASE}/_header.html`)
      .then(res => res.text())
      .then(html => headerPlaceholder.innerHTML = html)
      .catch(err => console.error("HEADER LOAD ERROR:", err));
  }

  if (footerPlaceholder) {
    fetch(`${BASE}/_footer.html`)
      .then(res => res.text())
      .then(html => footerPlaceholder.innerHTML = html)
      .catch(err => console.error("FOOTER LOAD ERROR:", err));
  }

});
