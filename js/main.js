const hamburger = document.querySelector(".header__hamburger");
const mobileMenu = document.querySelector(".header__mobile-menu");

hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
});
