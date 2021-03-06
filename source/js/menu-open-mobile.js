var buttonMenu = document.querySelector(".main-nav__button");
var mainMenu = document.querySelector(".main-menu");

//Если JS работает, делаем кнопку-бургер видимой при мобильном расширении
buttonMenu.classList.add("burger-button");

//Если JS работает, скрываем мобильное меню при мобильном расширении
if (window.innerWidth < 768) {
  mainMenu.classList.add("js-hidden");
}

//удаляет js-классы, если в одном сеансе перешли с мобильного на другое расширение экрана.
window.addEventListener("resize", function () {
  var width = window.innerWidth;
  if (width < 768) {
    mainMenu.classList.add("js-hidden");
  }
  if (width > 767) {
    mainMenu.classList.remove("js-hidden");
    buttonMenu.classList.remove("js-button-close");
  }
})

//Добавляем "переключатель" к кнопке-бургеру. При открытом меню кнопка становится "крестиком" - кнопкой закрытием.
buttonMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  var width = window.innerWidth;
  if (width < 768) {
    buttonMenu.classList.toggle("js-button-close");
    mainMenu.classList.toggle("js-hidden");
  }
})
