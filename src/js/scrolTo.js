function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  const journeyBtn = document.querySelector(".journey-btn");
  
  const onGetInTouchClick = () => {
    scrollToSection('getInTouch')
  }
  
  
  journeyBtn.addEventListener("click", onGetInTouchClick);
  
  