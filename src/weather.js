async function getWeather(location) {
  const rawResponse = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=C6G8JZHPZ9PZNSVU9BQYVACTM&contentType=json`,
  );
  const response = await rawResponse.json();
  const cleanedResponse = {
    address: response.resolvedAddress,
    icon: response.currentConditions.icon,
    temp: response.currentConditions.temp,
    tempUnit: "c",
    conditions: response.currentConditions.conditions,
    feelslike: response.currentConditions.feelslike,
    humidity: response.currentConditions.humidity,
    windspeed: response.currentConditions.windspeed,
    changeTempToCelsius() {
      this.temp = (this.temp - 32) / 1.8;
      this.feelslike = (this.feelslike - 32) / 1.8;
      this.tempUnit = "c";
    },
    changeTempToFahrenheit() {
      this.temp = this.temp * 1.8 + 32;
      this.feelslike = this.feelslike * 1.8 + 32;
      this.tempUnit = "f";
    },
  };
  return cleanedResponse;
}

export default getWeather;
