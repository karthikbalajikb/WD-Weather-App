import axios from 'axios';
import moment from 'moment';

function groupByDate(data) {
  const map = new Map();
  data.forEach((item) => {
    const key = item.date;
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return Array.from(map);
}

export function mapResponseToModel(data) {
  const response = [];
  const { list } = data;
  const base = 'http://openweathermap.org/img/w/';
  const ext = '.png';

  list.forEach((element) => {
    const dateObj = element.dt_txt.split(' ');
    const object = {
      dt: element.dt,
      date: moment(dateObj[0]).format('ddd, MMM Do'),
      dateTime: moment(element.dt_txt).format('hh a'),
      temp_max: Math.ceil(element.main.temp_max),
      temp_min: Math.floor(element.main.temp_min),
      humidity: element.main.humidity,
      description: element.weather[0].description,
      icon: base + element.weather[0].icon + ext,
      wind: element.wind.speed,
    };
    response.push(object);
  });
  return groupByDate(response);
}

export default function getWeatherDetails(city) {
  try {
    let data;
    if (city.length !== 0) {
      data = axios
        .get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},IN&units=metric&appid=bf3071b47798fad77f21538f64a4a4de`)
        .then(response => mapResponseToModel(response.data))
        .catch((error) => {
          console.log(error);
          return [];
        });
    }
    return data;
  } catch (e) {
    return 'error';
  }
}
