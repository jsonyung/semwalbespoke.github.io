// --- Function to load Header and Footer ---
document.addEventListener("DOMContentLoaded", function () {

  const headerPlaceholder = document.querySelector("#main-header");
  const footerPlaceholder = document.querySelector("#main-footer");

  // Base path for GitHub Pages
  const basePath = "/semwalbespoke.github.io/legal/";

  // Load Header
  if (headerPlaceholder) {
    fetch(basePath + "_header.html")
      .then(res => {
        if (!res.ok) throw new Error("Header file not found");
        return res.text();
      })
      .then(data => {
        headerPlaceholder.innerHTML = data;
      })
      .catch(err => console.error("Header load error:", err));
  }

  // Load Footer
  if (footerPlaceholder) {
    fetch(basePath + "_footer.html")
      .then(res => {
        if (!res.ok) throw new Error("Footer file not found");
        return res.text();
      })
      .then(data => {
        footerPlaceholder.innerHTML = data;
      })
      .catch(err => console.error("Footer load error:", err));
  }

});
