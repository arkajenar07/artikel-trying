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

// Automatic
const listbg = ["url(card1.jpg)", "url(card2.jpg)", "url(card3.png)"];

let mulaidari = 0;

const bgimg = document.getElementById("bgchange");

function gantibg() {
  bgimg.style.backgroundImage = listbg[mulaidari];

  mulaidari = (mulaidari + 1) % listbg.length;
}

gantibg();

setInterval(gantibg, 1500); // 1000 milidetik = 1 detik

// Show
const button = document.getElementById("button");
const content = document.getElementById("content-scroll");

content.addEventListener("scroll", function () {
  let posisi = content.scrollTop + content.offsetHeight;

  if (posisi >= content.scrollHeight) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

// On Click
const interior = document.getElementById("interior");
const eksterior = document.getElementById("eksterior");
// let isBuka = false; // Menyimpan status apakah konten sudah dibuka atau belum

interior.addEventListener("click", function () {
  interior.style.display = "none";
  eksterior.style.display = "block";
});

eksterior.addEventListener("click", function () {
  eksterior.style.display = "none";
  interior.style.display = "block";
});
