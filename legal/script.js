// --- Function to load Header and Footer ---
document.addEventListener("DOMContentLoaded", function() {
  
  // Find the header and footer placeholders
  const headerPlaceholder = document.querySelector("div#main-header");
  const footerPlaceholder = document.querySelector("div#main-footer");

  // Load Header
  if (headerPlaceholder) {
    // ✅ FIXED: Fetches the file directly from the current ('./') folder.
    fetch('./_header.html') 
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok for header');
        return response.text();
      })
      .then(data => {
        headerPlaceholder.innerHTML = data;
      })
      .catch(error => console.error('Error loading header:', error));
  }

  // Load Footer
  if (footerPlaceholder) {
    // ✅ FIXED: Fetches the file directly from the current ('./') folder.
    fetch('./_footer.html')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok for footer');
        return response.text();
      })
      .then(data => {
        footerPlaceholder.innerHTML = data;
      })
      .catch(error => console.error('Error loading footer:', error));
  }
});