const swiper = new Swiper('.swiper', {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    600: { slidesPerView: 2 },
    900: { slidesPerView: 3 },
    1200: { slidesPerView: 5 }
  }
});