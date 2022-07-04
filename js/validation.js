"use strict";

const elForm = document.querySelector(".form");
const elFormInput = document.querySelector(".form__input");
const elResult = document.querySelector(".result");

const elWeatherbtn = document.querySelector(".weather__btn");

const renderCountry = function (data) {
  const html = `
  <h2 class="weather__country">City: ${data.name}</h2>
  <h3 class="weather__country-short">Country: ${data.sys.country}</h3>
  <p class="weather__temperatura">Temperatura: ${data.main.temp} °C</p>
  <p class="weather__speed">Speed: ${data.wind.speed} m/s</p>
  `;
  elResult.innerHTML = null;
  elResult.insertAdjacentHTML("beforeend", html);
};

const getCountryWeather = function (location) {
  const request = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`
  )
    .then((ops) => ops.json())
    .then((data) => renderCountry(data));
};

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const inputValue = elFormInput.value;
  elFormInput.value = null;

  getCountryWeather(inputValue);
});
