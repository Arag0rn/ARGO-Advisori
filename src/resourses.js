const resoursesBtn = document.querySelector(".resourses-list-left-btn");

resoursesBtn.addEventListener("click", function(event) {
  event.preventDefault();

  const targetSectionId = "getInTouch"; 

  window.location.href = "./index.html#" + targetSectionId;
});



document.addEventListener('DOMContentLoaded', function () {
  const readMoreBoxes = document.querySelectorAll('.resourses-readMore-box');
  const articlesList = document.querySelector('.articles-list');


  readMoreBoxes.forEach(box => {
      box.addEventListener('click', function () {
          const articleId = this.closest('.resoursed-card').dataset.articleId;

          const articleElement = articlesList.querySelector(`#article-${articleId}`);

          if (articleElement) {
              document.querySelector('.resourses-list').classList.add('visually-hidden', 'animate__animated', 'animate__slideInLeft', 'animate__medium');
              document.querySelector('.resourses-list-head').classList.add('visually-hidden', 'animate__animated', 'animate__slideInLeft', 'animate__medium');

              articlesList.classList.remove('visually-hidden', 'animate__animated', 'animate__slideInLeft', 'animate__medium');

              articleElement.scrollIntoView({ behavior: 'smooth' });
          }
      });
  });
});