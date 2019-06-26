var button = document.querySelector(".open-form-button");
var popup = document.querySelector(".hotel-search-form");
var form = popup.querySelector("form");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("hide-modal");
});

// form.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   console.log("Отправляем форму");
// });
