const apiKey = require('./.env/weatherApiKey');
const city = 'Leeds';
const countryCode = 'GBR';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city},${countryCode}&appid=${apiKey}`;

let weatherData = null;

fetch(apiUrl)
  .then((response) => response.json())
  .then((weatherData) => {
    console.log(weatherData);
  });

console.log('Requesting weather data');
