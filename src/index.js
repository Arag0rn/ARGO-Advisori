

 // observer and animation

 const journey = document.querySelectorAll(".journey-container");

 const journeyObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const focusElement = entry.target;
      focusElement.classList.add('animate__animated', 'animate__slideInLeft');
    }
  });
});

journey.forEach((focusElement) => {
  journeyObserver.observe(focusElement);
});

const fuel = document.querySelectorAll(".fuel-container");

const fuelObserver = new IntersectionObserver((entries) => {
 entries.forEach((entry) => {
   if (entry.isIntersecting) {
     const focusElement = entry.target;
     focusElement.classList.add('animate__animated', 'animate__slideInLeft');
   }
 });
});

fuel.forEach((focusElement) => {
  fuelObserver.observe(focusElement);
});

const resourses = document.querySelectorAll(".resourses-container");

const resoursesObserver = new IntersectionObserver((entries) => {
 entries.forEach((entry) => {
   if (entry.isIntersecting) {
     const focusElement = entry.target;
     focusElement.classList.add('animate__animated', 'animate__backInRight');
   }
 });
});

resourses.forEach((focusElement) => {
  resoursesObserver.observe(focusElement);
});
 

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


// send mail 

var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thank you for your message we will contact you soon!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)
