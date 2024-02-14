import data from '../articles.json';
import dataHead from '../articlesHead.json';

const listOfResourses = document.querySelector(".resourses-list");

console.log(listOfResourses);


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

dataHead.forEach((resource) => {
  listOfResourses.insertAdjacentHTML('beforeend', `
    <li class="resoursed-card insihts-and-resourses-card" data-article-id="${resource['data-article-id']}">
      <div class="resourses-img-block"></div>
      <div class="resourses-txt-block">
        <h3 class="resourses-txt-block-head">${resource['resourses-head']}</h3>
        <p class="resourses-txt-block-txt">${resource['resourses-txt']}</p>
        <div class="readMore-box resourses-readMore-box">
          <div class="readMore resourses-readMore">Read more</div>
          <svg class="service-arrow resourses-service-arrow" width="20px" height="20px">
            <use href="./images/icons.svg#icon-arrow-right"></use>
          </svg>
        </div>
      </div>
    </li>`);

  const imgBlock = listOfResourses.lastElementChild.querySelector(".resourses-img-block");
  imgBlock.style.backgroundImage = `linear-gradient(254deg, rgba(232, 197, 164, 0.40) 7.31%, rgba(14, 119, 128, 0.40) 88.36%), url(${resource['image']})`;
});