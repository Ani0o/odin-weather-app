async function getWeather(location) {
  const rawResponse = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=C6G8JZHPZ9PZNSVU9BQYVACTM&contentType=json`,
  );
  const response = await rawResponse.json();
  const cleanedResponse = {
    address: response.resolvedAddress,
    icon: response.currentConditions.icon,
    temp: response.currentConditions.temp,
    conditions: response.currentConditions.conditions,
    feelslike: response.currentConditions.feelslike,
    humidity: response.currentConditions.humidity,
    windspeed: response.currentConditions.windspeed,
  };
  return cleanedResponse;
}

export default getWeather;
