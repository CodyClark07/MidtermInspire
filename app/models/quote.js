export default class Quote {

    constructor(data) {
        this.description = data.body
        this.author = data.author
    }

    get Template() {
        return /*html*/`
        <div>
    <h4 class="author-show">${this.description}
    <div class="author-hide">${this.author}</div>
    </h4>
    `
    }
}