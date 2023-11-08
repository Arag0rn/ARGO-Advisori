// gamburger

document.getElementById("openNav").addEventListener("click", () => {
    document.getElementById("mainSideNav").style.width = "100%";
  })

  document.getElementById("closeNav").addEventListener("click", () => {
    document.getElementById("mainSideNav").style.width = "0";
  })

  document.getElementById("navbar-link-about").addEventListener("click", () => {
    document.getElementById("mainSideNav").style.width = "0";
  })

  document.getElementById("navbar-link-services").addEventListener("click", () => {
    document.getElementById("mainSideNav").style.width = "0";
  })

  document.getElementById("copyright").innerHTML = "&copy; " + new Date().getFullYear() + " Argo-Advisory";



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