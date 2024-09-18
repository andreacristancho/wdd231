document.addEventListener("DOMContentLoaded", function () {
  

const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;
  
  
  // Last modified information

  const lastModified = document.getElementById("lastModified");
  const lastModifiedDate = document.lastModified;
  lastModified.textContent = `Last Updated: ${lastModifiedDate}`;
});



const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});
