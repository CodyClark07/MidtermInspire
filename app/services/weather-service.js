import Weather from "../models/weather.js";
import store from "../store.js";

// @ts-ignore
const weatherApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
  timeout: 3000
});

class WeatherService {
  changeF_C() {

    let temp = store.State.weather.f_c;
    console.log(temp)
    temp == false ? (temp = true) :
      (temp = false)
    store.State.weather.f_c = temp
    store.commit("weather", store.State.weather)
    console.log(temp)
  }
  getWeather() {
    console.log("Calling the Weatherman");
    weatherApi.get().then(res => {
      res.data.main.temp = Math.floor((((res.data.main.temp - 273.15) * 1.8) + 32))
      store.commit("weather", new Weather(res.data));
      console.log(res.data)

    }).catch(err => console.error(err))
  }
}

const weatherService = new WeatherService();
export default weatherService;
