// header nav
let hamburger = document.querySelector('i');
let nav = document.querySelector('.header__nav');

function menuDeroulant () {
  nav.classList.toggle('height-nav');
}

hamburger.addEventListener('click', menuDeroulant);

// swiper on
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        //   spaceBetween: 20,
        },
        420: {
          slidesPerView: 2,
        //   spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
        //   spaceBetween: 50,
        },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});