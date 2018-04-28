const catBefore = document.querySelector(".example__image--before");
const toggleSlider = document.querySelector(".toggle__slider");
const wrapImage = document.querySelector(".example__image-wrap");
const buttonCatBefore = document.querySelector(".toggle__label--before");
const buttonCatAfter = document.querySelector(".toggle__label--after");

//Проверяем, если расширение экрана - мобильное, и на данный момент худой кот видим, открываем толстого и скрываем худого.
buttonCatBefore.addEventListener("click", function () {
  toggle(true);
});

//Тут все наоборот.
buttonCatAfter.addEventListener("click", function () {
  toggle(false);
});

function toggle (bool) {
  const width = window.innerWidth;
  if (width < 768 && wrapImage.classList.contains("js-visible") === bool) {
    wrapImage.classList.toggle("js-visible");
    catBefore.classList.toggle("js-hidden");
    toggleSlider.classList.toggle("js-slide-right");
  }
}
//Еще нужно придумать, как удалять эти js-классы, если в одном сеансе перешли с мобильного на другое расширение экрана.
