import axios from "axios";
import moment from 'moment';

export default function getWeatherDetails(city) {
    try {
        if (city.length !== 0) {
            return axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',IN&units=metric&appid=bf3071b47798fad77f21538f64a4a4de')
                .then(function (response) {
                    return mapResponseToModel(response.data);

                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    } catch (e) {
        return 'error';
    }
}

function mapResponseToModel(data) {
    let response = [];
    let list = data.list;
    list.forEach(element => {
        let dateObj = element.dt_txt.split(" ");
        let object = {
            date: moment(dateObj[0]).format("ddd, MMM Do"),
            dateTime: moment(element.dt_txt).format("hh a"),
            temp_max: Math.ceil(element.main.temp_max),
            temp_min: Math.floor(element.main.temp_min),
            humidity: element.main.humidity,
            description: element.weather[0].description,
            icon: "http://openweathermap.org/img/w/" + element.weather[0].icon + ".png",
            wind: element.wind.speed
        }
        response.push(object);
    });
    return groupByDate(response);
}

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


