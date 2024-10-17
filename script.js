const menuOpenOption = document.querySelector("#menu-open-button");
const menucloseOption = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
menuOpenOption.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

menucloseOption.addEventListener("click", () => menuOpenOption.click());
navLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenOption.click());
});

const swiper = new Swiper(".slider-wrapper", {
  // Optional parameters
  loop: true,
  spacebetween: 25,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
