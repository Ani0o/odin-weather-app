import "./styles.css";
import getWeather from "./weather.js";

const form = document.querySelector("form");
const location = document.querySelector("#location");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getWeather(location.value).then((weather) => {
    console.log(weather);
  });
  location.value = "";
});
