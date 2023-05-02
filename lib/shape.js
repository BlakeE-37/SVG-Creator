class Shape {
    constructor(color) { this.color = color };
};

class Triangle extends Shape {
    constructor(color) {
        super(color);
    };
    render() {
        return (`<polygon points="130, 0 230, 160 30, 160" fill="${this.color}" />`)
    }
};

class Circle extends Shape {
    constructor(color) {
        super(color);
    };
    render() {
        return (`<circle cx="130" cy="110" r="80" fill="${this.color}" />`)
    }
};

class Square extends Shape {
    constructor(color) {
        super(color);
    };
    render() {
        return (`<rect x="40" y="30" width="170" height="170" fill="${this.color}" />`)
    }
};

module.exports = { Triangle, Circle, Square };