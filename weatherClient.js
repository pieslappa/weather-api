const weatherApiKey = require('./.env/weatherApiKey');

class WeatherClient {
  constructor() {}

  async fetchWeatherData(city) {
    const apiKey = weatherApiKey;
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    let weatherData = await response.json();
    return weatherData;
  }
}

module.exports = WeatherClient;
