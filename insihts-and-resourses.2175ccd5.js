document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".resourses-readMore-box"),s=document.querySelectorAll(".back-btn-box");s.length>0&&s.forEach((e=>{e.addEventListener("click",(function(){history.back()}))})),e.forEach((e=>{e.addEventListener("click",(function(){const e=this.closest(".resoursed-card").dataset.articleId,s=document.querySelector(`#article-${e}`);s&&(document.querySelector(".resourses-list").classList.add("visually-hidden"),document.querySelector(".resourses-list-head").classList.add("visually-hidden"),s.classList.remove("visually-hidden"),s.classList.add("animate__animated","animate__fadeIn","animate__medium"),s.scrollIntoView({behavior:"smooth"}))}))}));const t=new URLSearchParams(window.location.search).get("article");if(t){const e=document.querySelector(`#article-${t}`);e&&(e.classList.remove("visually-hidden"),e.classList.add("animate__animated","animate__fadeIn","animate__medium"),document.querySelector(".resourses-list").classList.add("visually-hidden"),document.querySelector(".resourses-list-head").classList.add("visually-hidden"),e.scrollIntoView({behavior:"smooth"}))}}));
//# sourceMappingURL=insihts-and-resourses.2175ccd5.js.map
