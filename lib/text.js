class Text {
    constructor(text, color) {
        this.text = text
        this.color = color
    }
    render() {
        return (`<text x="130" y="130" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`)
    }
}

module.exports = Text;