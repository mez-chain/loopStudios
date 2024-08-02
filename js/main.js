const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", navTaggle);

function navTaggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

window.addEventListener("resize", function () {
  if (this.innerWidth > 768) {
    menu.classList.add("hidden");
    btn.classList.remove("open");
    menu.classList.remove("flex");
  }
});
