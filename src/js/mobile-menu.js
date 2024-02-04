const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelectorAll('.js-open-menu');
const closeMenuBtn = document.querySelectorAll('.js-close-menu');
console.log(openMenuBtn);


const toggleMenu = (btn) => {
  console.log(btn);

  const isMenuOpen =
  btn.getAttribute('aria-expanded') === 'true' || false;
  btn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');

  if (isMenuOpen) {
    document.body.style.overflow = 'auto';
  } else {

    document.body.style.overflow = 'hidden';
  }
};

// const scrollToSection = (sectionId) => {
//   const section = document.querySelector(sectionId);
//   if (section) {
//     section.scrollIntoView({ behavior: 'smooth' });
//     toggleMenu();
//   }
// };


openMenuBtn.forEach((btn) => {
btn.addEventListener('click', ()=> toggleMenu(btn));
})



closeMenuBtn.forEach(btn => {
  btn.addEventListener('click', ()=> toggleMenu(btn));
})



document.querySelectorAll('.toggleMenu-item a').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const sectionId = link.getAttribute('href');
    scrollToSection(sectionId);
  });
});

window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => {
  if (!e.matches) return;
  mobileMenu.classList.remove('is-open');
  openMenuBtn.setAttribute('aria-expanded', false);
  document.body.style.overflow = 'auto'; // Enable body scroll
});