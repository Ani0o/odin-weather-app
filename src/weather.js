async function getWeather(location) {
  const rawResponse = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=C6G8JZHPZ9PZNSVU9BQYVACTM&contentType=json`);
  const response = await rawResponse.json();
  console.log(response);
}

export default getWeather;
