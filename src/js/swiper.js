import dataHead from '/articlesHead.json';
const swiperWrapper = document.querySelector(".swiper-wrapper");

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

fetch('../../articlesHead.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching JSON:', error));


dataHead.forEach((resource) => {
  swiperWrapper.innerHTML += `
    <div class="swiper-slide">
      <div class="resoursed-card">
        <div class="resourses-img-block" style="background-image: linear-gradient(254deg, rgba(232, 197, 164, 0.40) 7.31%, rgba(14, 119, 128, 0.40) 88.36%), url(${resource.image})"></div>
        <div class="resourses-txt-block">
          <h3 class="resourses-txt-block-head">${resource['resourses-head']}</h3>
          <p class="resourses-txt-block-txt">${resource['resourses-txt']}</p>
          <a onclick="goToArticle(${resource.articleId})" data-article-id="${resource.articleId}" class="readMore-box resourses-readMore-box">
            <div class="readMore resourses-readMore">Read more</div>
            <svg class="resourses-service-arrow service-arrow" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
  <use href="#icon-arrow-right"></use>
  <symbol id="icon-arrow-right" viewBox="0 0 28 32">
    <path d="M24.401 17.015l-7.826 8.609c-0.245 0.27-0.577 0.421-0.924 0.421s-0.679-0.151-0.924-0.421c-0.245-0.27-0.383-0.635-0.383-1.016s0.138-0.747 0.383-1.016l5.599-6.156h-15.978c-0.346 0-0.678-0.151-0.922-0.42s-0.382-0.634-0.382-1.015c0-0.381 0.137-0.745 0.382-1.015s0.576-0.42 0.922-0.42h15.978l-5.597-6.16c-0.245-0.27-0.383-0.635-0.383-1.016s0.138-0.747 0.383-1.016c0.245-0.27 0.577-0.421 0.924-0.421s0.679 0.151 0.924 0.421l7.826 8.609c0.122 0.133 0.218 0.292 0.284 0.467s0.099 0.362 0.099 0.551c-0 0.189-0.034 0.376-0.1 0.551s-0.163 0.333-0.285 0.466z"></path>
  </symbol>
</svg>
          </a>
        </div>
      </div>
    </div>
  `;
});

