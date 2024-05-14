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


const click = document.getElementById("button-click");

const dropdown = document.getElementById("item-down");

const imagedown = document.getElementById("image-down");

let isBuka = false; // Menyimpan status apakah konten sudah dibuka atau belum

click.addEventListener("click", function () {
  if (isBuka) {
    // Jika sudah terbuka, tutup
    dropdown.style.display = "none";
    imagedown.style.display = "none";
    isBuka = false;
  } else {
    // Jika belum terbuka, buka
    dropdown.style.display = "block";
    imagedown.style.display = "block";

    isBuka = true;
  }
});

const listbg = [
  "url(card1.png)",
  "url(card2.jpg)",
  "url(card3.jpg)",
  "url(card4.jpg)",
];

let mulaidari = 0;

function gantibg() {
  imagedown.style.backgroundImage = listbg[mulaidari];

  mulaidari = (mulaidari + 1) % listbg.length;
}

gantibg();

setInterval(gantibg, 2000); // 1000 milidetik = 1 detik