const address = document.querySelector(".address");
const img = document.querySelector(".temp-wrapper img");
const temp = document.querySelector(".temp");
const tempUnit = document.querySelector(".temp-unit");
const condition = document.querySelector(".condition");
const feelslike = document.querySelector(".feelslike");
const humidity = document.querySelector(".humidity");
const windspeed = document.querySelector(".windspeed");

function displayWeather(weather) {
  address.textContent = weather.address;
  import(`./icons/${weather.icon}.svg`).then((icon) => {
    img.src = icon.default;
  });
  temp.textContent = weather.temp;
  if (weather.tempUnit === "c") {
    tempUnit.innerHTML = "&deg;C";
  } else {
    tempUnit.innerHTML = "&deg;F";
  }
  condition.textContent = weather.conditions;
  feelslike.innerHTML = `Feels like: ${weather.feelslike} &deg;${weather.tempUnit === "c" ? "C" : "F"}`;
  humidity.textContent = `Humidity: ${weather.humidity}%`;
  windspeed.textContent = `Wind Speed: ${weather.windspeed} Km/Hr`;
}

export default displayWeather;
