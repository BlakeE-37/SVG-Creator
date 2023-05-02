class Text {
    constructor(text) {
        this.text = text
    }
    render() {
        return (`<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>`)
    }
}