const { Triangle, Circle, Square } = require('./shape');


describe('Shapes', () => {
    // Test that the Triangle Class initializes correctly
    describe('Triangle', () => {
        // test that triangle is a triangle object
        it('Should return true if the triangle class is constructed properly', () => {
            const triangle = new Triangle('blue');
            expect(triangle).toBeInstanceOf(Triangle);
        })
        // test that the super class assigns the color correctly
        it('Should return with the same color that was sent to the traingle class', () => {
            let color = 'Green'
            const triangle = new Triangle(color)
            expect(triangle.color).toBe(color)
        })
        it('Should return the svg string formatted for the correct shape', () => {
            const triangle = new Triangle('blue')
            expect(triangle.render()).toBe('<polygon points="130, 0 230, 160 30, 160" fill="blue" />')
        })
    })
    // Test that the Circle Class initializes correctly
    describe('Circle', () => {
        // test that circle is a circle object
        it('Should return true if the circle class is constructed properly', () => {
            const circle = new Circle('blue')
            expect(circle).toBeInstanceOf(Circle)
        })
        // test that the super class assigns the color correctly 
        it('Should return with the same color that was sent to the circle class', () => {
            let color = 'Green'
            const circle = new Circle(color)
            expect(circle.color).toBe(color)
        })
        it('Should return the svg string formatted for the correct shape', () => {
            const circle = new Circle('blue')
            expect(circle.render()).toBe('<circle cx="130" cy="110" r="80" fill="blue" />')
        })
    })
    // Test that the Square Class initializes correctly
    describe('Square', () => {
        // test that square is a square object
        it('Should return true if the square class is constructed properly', () => {
            const square = new Square('blue')
            expect(square).toBeInstanceOf(Square)
        })
        // test that the super class assigns the color correctly 
        it('Should return with the same color that was sent to the square class', () => {
            let color = 'Green'
            const square = new Square(color)
            expect(square.color).toBe(color)
        })
        it('Should return the svg string formatted for the correct shape', () => {
            const square = new Square('blue')
            expect(square.render()).toBe('<rect x="40" y="30" width="170" height="170" fill="blue" />')
        })
    })
})