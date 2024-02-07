window.onscroll = function() {StickyNavbar()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function StickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}