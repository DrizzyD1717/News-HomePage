let menu = document.querySelector(".menu-open");
let menuClose = document.querySelector(".menu-close");
let body = document.querySelector("body");

let mobileNav = document.querySelector(".gradient-bg");

menu.addEventListener("click", (e) => {
  mobileNav.classList.toggle("hide");
});

menuClose.addEventListener("click", (e) => {
  mobileNav.classList.toggle("hide");
});
