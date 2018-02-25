import * as Service from './WeatherCard.service';

const serviceResp = {
  cod: '200',
  message: 0.0061,
  cnt: 40,
  list: [
    {
      dt: 1519592400,
      main: {
        temp: 24.24,
        temp_min: 24.24,
        temp_max: 24.26,
        pressure: 1024.66,
        sea_level: 1025.35,
        grnd_level: 1024.66,
        humidity: 100,
        temp_kf: -0.02,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: { all: 0 },
      wind: { speed: 2.82, deg: 37.0032 },
      sys: { pod: 'n' },
      dt_txt: '2018-02-25 21:00:00',
    },
    {
      dt: 1519603200,
      main: {
        temp: 23.67,
        temp_min: 23.67,
        temp_max: 23.68,
        pressure: 1024.85,
        sea_level: 1025.5,
        grnd_level: 1024.85,
        humidity: 100,
        temp_kf: -0.01,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: { all: 0 },
      wind: { speed: 2.62, deg: 13.5007 },
      sys: { pod: 'n' },
      dt_txt: '2018-02-26 00:00:00',
    },
  ],
  city: {
    id: 1264527,
    name: 'Chennai',
    coord: { lat: 13.0878, lon: 80.2785 },
    country: 'IN',
    population: 4328063,
  },
};

const result = [
  [
    'Sun, Feb 25th',
    [
      {
        date: 'Sun, Feb 25th',
        dateTime: '09 pm',
        description: 'clear sky',
        dt: 1519592400,
        humidity: 100,
        icon: 'http://openweathermap.org/img/w/01n.png',
        temp_max: 25,
        temp_min: 24,
        wind: 2.82,
      },
    ],
  ],
  [
    'Mon, Feb 26th',
    [
      {
        date: 'Mon, Feb 26th',
        dateTime: '12 am',
        description: 'clear sky',
        dt: 1519603200,
        humidity: 100,
        icon: 'http://openweathermap.org/img/w/01n.png',
        temp_max: 24,
        temp_min: 23,
        wind: 2.62,
      },
    ],
  ],
];

it('Test service response mapping function', () => {
  const test = Service.mapResponseToModel(serviceResp);
  expect(test).toEqual(result);
});
