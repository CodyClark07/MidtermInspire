export default class Quote {

    constructor(data) {
        this.description = data.body
        this.author = data.author
    }

    get Template() {
        return /*html*/`
        <div>
    <div class="author-show">${this.description}
    <div class="author-hide">${this.author}</div></div>
    `
    }
}