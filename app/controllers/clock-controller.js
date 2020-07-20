import ClockService from "../services/clock-service.js";
import store from "../store.js";
import clockService from "../services/clock-service.js";


export default class ClockController {
    constructor() {
        this.getTime()

    }

    getTime() {
        clockService.getTime()
    }

}