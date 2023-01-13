const navLinks = document.getElementById("nav-links-id");

const toggleButton = document.getElementById("nav-menu-toggle");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
