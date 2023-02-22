const Weather = require('./weather');

const jestFetchMock = require('jest-fetch-mock');
jestFetchMock.enableMocks();

describe('Weather', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('Loads a city into the client', async () => {
    const mockClient = {
      fetchWeatherData: jest
        .fn()
        .mockResolvedValueOnce({
          name: 'Leeds',
          main: {
            temp: 10.0,
          },
        })
        .mockResolvedValueOnce({
          name: 'Berlin',
          main: {
            temp: 7.0,
          },
        }),
    };

    const weather = new Weather(mockClient);
    await weather.load('Leeds');
    expect(mockClient.fetchWeatherData).toHaveBeenCalledWith('Leeds');
    const weatherDataLeeds = weather.getWeatherData();
    expect(weatherDataLeeds.name).toEqual('Leeds');
    expect(weatherDataLeeds.main.temp).toEqual(10.0);

    await weather.load('Berlin');
    const weatherDataBerlin = weather.getWeatherData();
    expect(mockClient.fetchWeatherData).toHaveBeenCalledWith('Berlin');
    expect(weatherDataBerlin.name).toEqual('Berlin');
    expect(weatherDataBerlin.main.temp).toEqual(7.0);
  });
});
