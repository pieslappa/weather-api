class Weather {
  constructor(clientName) {
    this.client = clientName;
    this.weatherData = null;
  }

  async load(city) {
    this.weatherData = await this.client.fetchWeatherData(city);
  }

  getWeatherData() {
    console.log(this.weatherData);
    return this.weatherData;
    // return {
    //   temperature: data.main.temp,
    //   feelsLike: data.main.feels_like,
    //   daily_min: data.main.temp_min,
    //   daily_max: data.main.temp_max,
    //   humidity: data.main.humidity,
    // };
  }
}

module.exports = Weather;
