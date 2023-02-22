const WeatherClient = require('./weatherClient');

describe('fetchWeatherData', () => {
  it('returns a JSON promise containing the weather data', () => {
    const weatherClient = new WeatherClient();
    // Expect needs to be in the then block due to being async
    weatherClient.fetchWeatherData('Leeds').then((response) => {
      expect(response.name).toEqual('Leeds');
    });
  });
});
