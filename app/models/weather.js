export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.faren = data.main.temp
    this.celcius = (data.main.temp - 32) * 5 / 9
    if (data.weather) {
      this.icon = data.weather[0].icon
    }
    this.f_c = false
  }




  get Template() {
    let template = /* html */ `
    <div class=" border border-rounded shadow-lg text-center text-white bg-weather">

    <h2> ${this.city}</h2>
    <h2 onclick="app.weatherController.changeF_C()"> ${this.f_c == false ? `${this.faren}°F` : `${this.celcius}°C`}</h2>
    <img src="http://openweathermap.org/img/w/` + `${this.icon}` + `.png">
    </div>`

    return template
  }

}