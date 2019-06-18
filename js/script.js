var button = document.querySelector(".open-form-button");
var popup = document.querySelector(".hotel-search-modal");
var form = popup.querySelector("form");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-hide");
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log("Отправляем форму");
});
