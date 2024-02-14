const menu = document.querySelector(".icon-menu");
const nav = document.querySelector(".nav");
const title = document.querySelector(".header__title");
const social = document.querySelector(".footer__social");
const iconSocials = social.querySelectorAll("svg");


menu.addEventListener("click", () => {
  nav.classList.toggle("hidden");
  title.classList.toggle("hidden");
});


