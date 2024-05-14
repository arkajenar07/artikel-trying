var scroll = document.getElementById("header");
var sticky = scroll.offsetTop;
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header li a");

// Sticky
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.onscroll = () => {
  myFunction();
};