import data from '../articles.json';

console.log(data);


function createArticleHTML(data) {
    const articleElement = document.createElement('li');
    articleElement.id = data.id;
    articleElement.className = data.class;
  
    const titleElement = document.createElement('h3');
    titleElement.className = data.content[0].class; 
    titleElement.textContent = data.title;
  
    articleElement.appendChild(titleElement);
  

    for (let i = 1; i < data.content.length; i++) {
      const contentItem = data.content[i];
      const contentElement = document.createElement('p');
      contentElement.className = contentItem.class;
      contentElement.textContent = contentItem.text;
  
      articleElement.appendChild(contentElement);
    }
  

    const linkElement = document.createElement('a');
    linkElement.href = "https://argo-advisory.com/insihts-and-resourses.html"; 
    const imgElement = document.createElement('img');
    imgElement.className = 'service-arrow resourses-service-arrow back-btn';
    imgElement.alt = 'arrow';
    const cloudinaryImageUrl ="https://res.cloudinary.com/drkjdderc/image/upload/v1707576249/left-arrow_vpjg8g.png"
    imgElement.src = cloudinaryImageUrl;

    linkElement.appendChild(imgElement);
    console.log('Cloudinary Image URL:', cloudinaryImageUrl);

    articleElement.appendChild(linkElement);

    return articleElement;
  }


function setupEventListeners() {
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

      const article = data.articles.find(article => article.id === `article-${articleId}`);

      if (article) {
        document.querySelector('.resourses-list').classList.add('visually-hidden');
        document.querySelector('.resourses-list-head').classList.add('visually-hidden');
      
        const articlesList = document.querySelector('.articles-list');
        const newArticle = createArticleHTML(article);
        articlesList.appendChild(newArticle);
      
        newArticle.classList.add('animate__animated', 'animate__fadeIn', 'animate__medium');
        newArticle.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', setupEventListeners);


const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('article');
const article = data.articles.find(article => article.id === `article-${articleId}`);
console.log(article);
if (article) {
  document.querySelector('.resourses-list').classList.add('visually-hidden');
  document.querySelector('.resourses-list-head').classList.add('visually-hidden');

  const articlesList = document.querySelector('.articles-list');
  const newArticle = createArticleHTML(article);
  articlesList.appendChild(newArticle);


  newArticle.classList.add('animate__animated', 'animate__fadeIn', 'animate__medium');
  newArticle.scrollIntoView({ behavior: 'smooth' });
}


