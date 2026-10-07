async function getWeather(location) {
  try {
    const rawResponse = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=C6G8JZHPZ9PZNSVU9BQYVACTM&contentType=json`,
    );
    const response = {
      ...(await rawResponse.json()),
      status: rawResponse.status,
    };
    const cleanedResponse = {
      status: response.status,
      address: response.resolvedAddress,
      icon: response.currentConditions.icon,
      temp: response.currentConditions.temp,
      tempUnit: "c",
      conditions: response.currentConditions.conditions,
      feelslike: response.currentConditions.feelslike,
      humidity: response.currentConditions.humidity,
      windspeed: response.currentConditions.windspeed,
      changeTempToCelsius() {
        this.temp = Math.round(((this.temp - 32) / 1.8) * 10) / 10;
        this.feelslike = Math.round(((this.feelslike - 32) / 1.8) * 10) / 10;
        this.tempUnit = "c";
      },
      changeTempToFahrenheit() {
        this.temp = Math.round((this.temp * 1.8 + 32) * 10) / 10;
        this.feelslike = Math.round((this.feelslike * 1.8 + 32) * 10) / 10;
        this.tempUnit = "f";
      },
    };
    return cleanedResponse;
  } catch (error) {
    console.log(error);
    return {};
  }
}

export default getWeather;
