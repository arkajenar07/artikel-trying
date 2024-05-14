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

// Change value div
const buttonsatu = document.getElementById("a");
const buttondua = document.getElementById("b");
const buttontiga = document.getElementById("c");
const buttonempat = document.getElementById("d");
const buttonlima = document.getElementById("e");

const viewsatu = document.getElementById("satu");
const viewdua = document.getElementById("dua");
const viewtiga = document.getElementById("tiga");
const viewempat = document.getElementById("empat");
const viewlima = document.getElementById("lima");

buttonsatu.addEventListener("click", () => {
  viewsatu.style.display = "grid";
  viewdua.style.display = "none";
  viewtiga.style.display = "none";
  viewempat.style.display = "none";
  viewlima.style.display = "none";
});

buttondua.addEventListener("click", () => {
  viewsatu.style.display = "none";
  viewdua.style.display = "grid";
  viewtiga.style.display = "none";
  viewempat.style.display = "none";
  viewlima.style.display = "none";
});

buttontiga.addEventListener("click", () => {
  viewsatu.style.display = "none";
  viewdua.style.display = "none";
  viewtiga.style.display = "grid";
  viewempat.style.display = "none";
  viewlima.style.display = "none";
});

buttonempat.addEventListener("click", () => {
  viewsatu.style.display = "none";
  viewdua.style.display = "none";
  viewtiga.style.display = "none";
  viewempat.style.display = "grid";
  viewlima.style.display = "none";
});

buttonlima.addEventListener("click", () => {
  viewsatu.style.display = "none";
  viewdua.style.display = "none";
  viewtiga.style.display = "none";
  viewempat.style.display = "none";
  viewlima.style.display = "grid";
});

// Responsive
const aboutdown = document.getElementById("click-down");

const itemdown = document.getElementById("menu-click");

let isOpen = false; // Menyimpan status apakah konten sudah dibuka atau belum

aboutdown.addEventListener("click", function () {
  if (isOpen) {
    // Jika sudah terbuka, tutup
    itemdown.style.display = "none";
    isOpen = false;
  } else {
    // Jika belum terbuka, buka
    itemdown.style.display = "block";
    isOpen = true;
  }
});

