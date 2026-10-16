const mobileMenuicon = document.querySelector(".mobile-menu-icon");
const mobileMenuiconClose = document.querySelector(".mobile-menu-icon-close");
const mobileMenu = document.querySelector(".mobile-menu");

mobileMenuicon.addEventListener("click", () => {
  mobileMenu.style.display = "block";
  mobileMenuicon.style.display = "none";
  mobileMenuiconClose.style.display = "flex";
});

mobileMenuiconClose.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  mobileMenuicon.style.display = "flex";
  mobileMenuiconClose.style.display = "none";
});