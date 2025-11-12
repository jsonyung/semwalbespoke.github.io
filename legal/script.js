// --- Function to load Header and Footer ---
// This code runs when the page is loaded
document.addEventListener("DOMContentLoaded", function() {
  
  // Figure out the correct path prefix (./ for this folder, "" for root)
  const pathPrefix = document.body.dataset.pathPrefix || '';

  // Find the header and footer placeholders
  // ✅ FIXED: Now looks for <div> placeholders
  const headerPlaceholder = document.querySelector("div#main-header");
  const footerPlaceholder = document.querySelector("div#main-footer");

  // Load Header
  if (headerPlaceholder) {
    fetch(pathPrefix + '_header.html')
      .then(response => response.text())
      .then(data => {
        headerPlaceholder.innerHTML = data;
      });
  }

  // Load Footer
  if (footerPlaceholder) {
    fetch(pathPrefix + '_footer.html')
      .then(response => response.text())
      .then(data => {
        footerPlaceholder.innerHTML = data;
      });
  }
});