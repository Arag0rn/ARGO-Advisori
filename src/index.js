

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
  for (var i = 0; i < form.elements.length; i++) {
          var field = form.elements[i];
  if (field.value.trim() === '') {
              field.setAttribute('required', 'required');
              status.innerHTML = 'Oops! There was a problem submitting your form. Please fill in all required fields.';
              return false;
          } else {
              field.removeAttribute('required');
          }
        }
  // validateForm();
  
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

document.addEventListener("DOMContentLoaded", function() {
  var textarea = document.getElementById("message");

  textarea.addEventListener("click", function() {
    this.setSelectionRange(0, 0);
  });
});

// validation

// function validateForm() {
//   let myForm = document.getElementById('my-form');
//   let myFormStatus = document.getElementById('formStatus');
//   myForm.innerHTML = '';

//   // Проход по всем полям и установка атрибута required
//   for (var i = 0; i < myForm.elements.length; i++) {
//       var field = myForm.elements[i];

//       if (field.value.trim() === '') {
//           field.setAttribute('required', 'required');
//           myFormStatus.innerHTML = 'Oops! There was a problem submitting your form. Please fill in all required fields.';
//           return false;
//       } else {
//           field.removeAttribute('required');
//       }

//       if (field.hasAttribute('minlength') && field.value.length < parseInt(field.getAttribute('minlength'))) {
//         myFormStatus.innerHTML = 'Oops! There was a problem submitting your form. ' + field.name + ' should contain at least ' + field.getAttribute('minlength') + ' characters.';
//           return false;
//       }

//       if (field.hasAttribute('maxlength') && field.value.length > parseInt(field.getAttribute('maxlength'))) {
//         myFormStatus.innerHTML = 'Oops! There was a problem submitting your form. ' + field.name + ' should contain no more than ' + field.getAttribute('maxlength') + ' characters.';
//           return false;
//       }

//       // Устанавливаем placeholder в сообщение об ошибке
//       field.setAttribute('placeholder', 'Oops! There was a problem submitting your form. ' + field.name + ' should contain at least ' + field.getAttribute('minlength') + ' characters.');
//   }

//   // Если все валидации прошли успешно, форма будет отправлена
//   myForm.innerHTML = 'Your form has been submitted successfully!';
//   return true;
// }