import WeatherService from "../services/weather-service.js";
import store from "../store.js";
import weatherService from "../services/weather-service.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawWeather() {
  console.log("THE WEATHER MAN SAYS:", store.State.weather);


  document.getElementById("weather").innerHTML = store.State.weather.Template;
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
  }
  changeF_C() {
    weatherService.changeF_C()
    drawWeather()
  }
}

