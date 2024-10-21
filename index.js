const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const body = document.querySelector(".body");
menu.addEventListener("click", () => {
  nav.classList.add("nav--visible");
  menu.classList.add("menu--hide");
  close.classList.add("close--open");
  body.classList.add("body--no-scroll");
  close.addEventListener("click", () => {
    close.classList.remove("close--open");
    menu.classList.remove("menu--hide");
    nav.classList.remove("nav--visible");
    body.classList.remove("body--no-scroll");
  });
});
