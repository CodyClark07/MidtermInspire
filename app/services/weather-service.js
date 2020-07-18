import Weather from "../models/weather.js";
import store from "../store.js";

// @ts-ignore
const weatherApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
  timeout: 3000
});

class WeatherService {
  async getWeather() {
    console.log("Calling the Weatherman");
    await weatherApi.get().then(res => {
      res.data.main.temp = Math.floor((((res.data.main.temp - 273.15) * 1.8) + 32))
      store.commit("weather", new Weather(res.data));
      console.log(res.data)

    }).catch(err => console.error(err))
  }

}

const weatherService = new WeatherService();
export default weatherService;
