let menu = document.querySelector(".nav__list");
let bar = document.querySelector(".nav__bar");

bar.addEventListener("click", () => {
  menu.classList.toggle("show");
});
