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
  }




  get Template() {
    let template = /* html */ `
    <div class=" border border-rounded shadow-lg text-center text-white bg-dark">

    <h2>City: ${this.city}</h2>
    <h2>Temp: ${this.faren}°F</h2>
    </div>`

    return template
  }

}