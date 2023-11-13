
import {transl} from './translation.js';




// gamburger

// document.getElementById("openNav").addEventListener("click", () => {
//     document.getElementById("mainSideNav").style.width = "100%";
//   })

//   document.getElementById("closeNav").addEventListener("click", () => {
//     document.getElementById("mainSideNav").style.width = "0";
//   })

//   document.getElementById("navbar-link-about").addEventListener("click", () => {
//     document.getElementById("mainSideNav").style.width = "0";
//   })

//   document.getElementById("navbar-link-services").addEventListener("click", () => {
//     document.getElementById("mainSideNav").style.width = "0";
//   })

//   document.getElementById("copyright").innerHTML = "&copy; " + new Date().getFullYear() + " Argo-Advisory";



 // observer 

 const serviceCards = document.querySelectorAll(".service-card");

const intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const card = entry.target;
      card.classList.add('animate__animated', 'animate__fadeInRight');
    }
  });
});

// Передайте каждый элемент с классом "service-card" в качестве целевых элементов IntersectionObserver
serviceCards.forEach((card) => {
  intersectionObserver.observe(card);
});

//langswitcher

const langSel = document.querySelector('select');
const allLang = ['en', 'de'];


langSel.addEventListener('change', onChangeUrlLanguage);

function onChangeUrlLanguage() {
  let lang = langSel.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  console.log(hash);
  if (!allLang.includes(hash)){
    location.href = window.location.pathname + '#en';
    location.reload();
  }
  langSel.value = hash;
  for (let key in transl){
    let elem = document.querySelector('.lng-' + key);
    if(elem) {
    elem.textContent = transl[key][hash]
  }
  }
}

changeLanguage ()

