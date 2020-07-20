import store from "../store.js";
// import Clock from "../models/clock.js";

class ClockService {

    constructor() {

    }

    getTime() {
        setInterval(this.getTime, 1000)
        let time = new Date();
        let h = (time.getHours() > 12) ? "0" + (time.getHours() - 12) : time.getHours();
        let m = (time.getMinutes() < 10) ? "0" + time.getMinutes() : time.getMinutes();
        let s = (time.getSeconds() < 10) ? "0" + time.getSeconds() : time.getSeconds();
        let t = (h < 12) ? "PM" : "AM"

        let timeString = h + ":" + m + ":" + s + t
        document.getElementById("clock").innerText = timeString
    }



}
















const clockService = new ClockService();
export default clockService;