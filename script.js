const hamburgerMenu = document.querySelector(".hamburger-menu");
const sidebar = document.querySelector("#sidebar");

// Add click event listener to the hamburger menu
hamburgerMenu.addEventListener("click", function () {
  // Toggle the 'open' class on the sidebar
  sidebar.classList.toggle("open");
});
