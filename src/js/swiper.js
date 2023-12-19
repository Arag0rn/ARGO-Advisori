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
    }
  });