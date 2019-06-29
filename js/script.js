var button = document.querySelector(".open-form-button");
var form = document.querySelector(".hotel-search-form");
var filterForm = document.querySelector(".filter");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("display-form");
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log("Отправляем форму");
});

filterForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log("Отправляем форму фильтра");
});

