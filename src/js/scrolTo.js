function scrollToSection(event) {
  event.preventDefault();
  const targetHref = event.target.getAttribute('href'); // Получаем значение атрибута href
  const targetElement = document.querySelector(targetHref);

  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }
}

const journeyBtn = document.querySelector(".journey-btn");

journeyBtn.addEventListener("click", scrollToSection);

const links = document.querySelectorAll('.header-link');

links.forEach(link => {
  link.addEventListener('click', scrollToSection);
});