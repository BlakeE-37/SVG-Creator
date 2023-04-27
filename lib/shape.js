class Shape {
    constructor(color) { this.color = color }
}

class Triangle extends Shape {
    constructor(color) {
        super(color)
    }
}

module.exports = Triangle