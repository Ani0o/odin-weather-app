import "./styles.css";
import getWeather from "./weather.js";
import displayWeather from "./display.js";

const form = document.querySelector("form");
const location = document.querySelector("#location");
const celsiusButton = document.querySelector(".celsius");
const fahrenheitButton = document.querySelector(".fahrenheit");
const overlay = document.querySelector(".main-content");
let weather;

overlay.classList.add("first-load");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  overlay.classList.remove("first-load");
  overlay.classList.add("weather-load");
  const capitalizedLocation = `${location.value.charAt(0).toUpperCase()}${location.value.slice(1)}`;
  getWeather(capitalizedLocation).then((response) => {
    weather = response;
    displayWeather(weather);
    overlay.classList.remove("weather-load");
  });
  location.value = "";
});

celsiusButton.addEventListener("click", (event) => {
  weather.changeTempToCelsius();
  displayWeather(weather);
});

fahrenheitButton.addEventListener("click", (event) => {
  weather.changeTempToFahrenheit();
  displayWeather(weather);
});
