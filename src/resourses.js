document.addEventListener('DOMContentLoaded', function () {
  const readMoreBoxes = document.querySelectorAll('.resourses-readMore-box');
  const backButtons = document.querySelectorAll('.back-btn-box');

  if (backButtons.length > 0) {
    backButtons.forEach(backButton => {
      backButton.addEventListener('click', function () {
        history.back();
      });
    });
  }

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

  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get('article');

  if (articleId) {
    const articleElement = document.querySelector(`#article-${articleId}`);
    if (articleElement) {
      articleElement.classList.remove('visually-hidden');
      articleElement.classList.add('animate__animated', 'animate__fadeIn', 'animate__medium');
      document.querySelector('.resourses-list').classList.add('visually-hidden');
      document.querySelector('.resourses-list-head').classList.add('visually-hidden');
      articleElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
});