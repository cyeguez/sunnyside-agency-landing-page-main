const menu = document.querySelector(".icon-menu");
const nav= document.querySelector(".nav");

menu.addEventListener("click", () =>{
  nav.classList.toggle("hidden");
});