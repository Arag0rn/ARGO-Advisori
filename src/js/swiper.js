

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  spaceBetween: 37,
  slidesPerView: 3.6,
  freeMode: true,
  loop: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    370: {
      slidesPerView: 1,
    },
    836: {
      slidesPerView: 2,
      spaceBetween: 37,
    },
    1444: {
      slidesPerView: 3.6,
      spaceBetween: 37,
    },
  },
  on: {
    slideChangeTransitionEnd: function () {
      const activeSlide = this.slides[this.activeIndex];
      const articleId = activeSlide.dataset.articleId;
      if (userClicked) {
        goToArticle(articleId);
      }
    },
  },
});

let userClicked = false;

function goToArticle(articleId) {
  if (articleId) {
    const url = `insihts-and-resourses.html?article=${articleId}`;
    window.location.href = url;
  }
}

document.querySelectorAll('.swiper-slide').forEach((slide) => {
  slide.addEventListener('click', () => {
    userClicked = true;
  });
});


swiper.on('slideChangeTransitionStart', function () {
  userClicked = false;
});