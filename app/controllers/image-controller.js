
import imageService from "../services/image-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
function _getBackground() {
    let imgUrl = store.State.image.url
    document.body.style.backgroundImage = `url(${imgUrl})`

}
export default class ImageController {
    constructor() {
        imageService.getImage()
        store.subscribe("image", _getBackground)
    }

}





