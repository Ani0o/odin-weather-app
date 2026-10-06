import "./styles.css";
import getWeather from "./weather.js";
import displayWeather from "./display.js";

const form = document.querySelector("form");
const location = document.querySelector("#location");
let weather;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getWeather(location.value).then((response) => {
    weather = response;
    displayWeather(weather);
  });
  location.value = "";
});
