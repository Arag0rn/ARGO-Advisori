

 // observer 

 const ourFocus = document.querySelectorAll(".our-focus-section-wrap");

 const ourFocusObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const focusElement = entry.target;
      focusElement.classList.add('animate__animated', 'animate__fadeIn');
    }
  });
});

ourFocus.forEach((focusElement) => {
  ourFocusObserver.observe(focusElement);
});
 
 const serviceCards = document.querySelectorAll(".service-card");

const intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const card = entry.target;
      card.classList.add('animate__animated', 'animate__fadeInRight');
    }
  });
});

serviceCards.forEach((card) => {
  intersectionObserver.observe(card);
});


const serviseCardTxt = document.querySelectorAll(".card-text");
const ReadMore = document.querySelectorAll(".readMore");

ReadMore.forEach((button, index) => {
  let isOpen = false;

  button.addEventListener("click", () => {
    if (isOpen) {
      serviseCardTxt[index].style.minHeight = "113px";
      button.textContent = "Read more";
    } else {

      serviseCardTxt[index].style.minHeight = "300px";
      button.textContent = "Read less";
    }

    isOpen = !isOpen;
  })
});

// swiper 


// init Swiper:
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  spaceBetween: 40,
  slidesPerView: 3.5,
  freeMode: true,
  loop: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev"
  }
});



