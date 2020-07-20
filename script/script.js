const menuToggle = document.querySelector(".menu-toggle input");
const navUl = document.querySelector("nav ul");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  navUl.classList.toggle("slide");
});
window.onscroll = function () {
  myFunction();
};
var sticky = nav.offsetTop - 50;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
// make love click
const love = document.querySelector(".love img");
love.addEventListener("click", () => {
  love.classList.toggle("active");
  document.querySelector(".picProfile").classList.toggle("active");
});
console.log(sticky);
