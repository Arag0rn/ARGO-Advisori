const resoursesBtn = document.querySelector(".resourses-list-left-btn");

resoursesBtn.addEventListener("click", function(event) {
  event.preventDefault();

  // Получаем id целевой секции
  const targetSectionId = "getInTouch"; 

  window.location.href = "./index.html#" + targetSectionId;
});