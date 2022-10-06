const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
// Code end for navbar hamburger

// Code start for slideshow
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");
let slideIndex = 1;
let timeout;
let timeoutInterval = 4000;
showSlide(slideIndex);
function plusSlides(n) {
  clearTimeout(timeout);
  showSlide((slideIndex += n));
}
function currentSlide(n) {
  clearTimeout(timeout);
  showSlide((slideIndex = n));
}
function showSlide(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  timeout = setTimeout(() => showSlide((slideIndex += 1)), timeoutInterval);
}
