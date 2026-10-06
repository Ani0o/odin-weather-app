import "./styles.css";
import getWeather from "./weather.js";

getWeather("Tokyo").then((weather) => {
  console.log(weather);
});
