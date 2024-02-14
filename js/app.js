const menu = document.querySelector(".icon-menu");
const nav = document.querySelector(".nav");
const title = document.querySelector(".header__title");


console.log(iconSocials);

menu.addEventListener("click", () => {
  nav.classList.toggle("hidden");
  title.classList.toggle("hidden");
});


