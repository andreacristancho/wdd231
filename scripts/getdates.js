document.addEventListener("DOMContentLoaded", function () {
  // Last modified information
  const lastModified = document.getElementById("lastModified");
  const lastModifiedDate = document.lastModified;
  lastModified.textContent = `Last Modified: ${lastModifiedDate}`;
});
