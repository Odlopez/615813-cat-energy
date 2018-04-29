const buttonMenu = document.querySelector(".burger-button");
const mainMenu = document.querySelector(".main-menu");

buttonMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  const width = window.innerWidth;
  if (width < 768) {
    buttonMenu.classList.toggle("js-button-open");
    mainMenu.classList.toggle("js-menu-open");
  }
})
