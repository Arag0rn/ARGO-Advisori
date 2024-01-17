const resoursesBtn = document.querySelector(".resourses-list-left-btn");

resoursesBtn.addEventListener("click", function(event) {
  event.preventDefault();

  const targetSectionId = "getInTouch";

  window.location.href = "./index.html#" + targetSectionId;
});

document.addEventListener('DOMContentLoaded', function () {
  const readMoreBoxes = document.querySelectorAll('.resourses-readMore-box');



  readMoreBoxes.forEach(box => {
      box.addEventListener('click', function () {
          const articleId = this.closest('.resoursed-card').dataset.articleId;

          const articleElement = document.querySelector(`#article-${articleId}`);

          if (articleElement) {
              document.querySelector('.resourses-list').classList.add('visually-hidden');
              document.querySelector('.resourses-list-head').classList.add('visually-hidden');

              articleElement.classList.remove('visually-hidden');
              articleElement.classList.add('animate__animated', 'animate__fadeIn', 'animate__medium');

              articleElement.scrollIntoView({ behavior: 'smooth' });
          }
      });
  });
});