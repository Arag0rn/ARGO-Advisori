const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    spaceBetween: 37,
    slidesPerView: 3.6,
    freeMode: true,
    loop: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev"
    },
    breakpoints: {
      836: {
        slidesPerView: 2,
        spaceBetween: 37
      },
      1444: {
        slidesPerView: 3.6,
        spaceBetween: 37
      },

    }
  });