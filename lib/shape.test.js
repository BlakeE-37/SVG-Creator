const { Triangle, Circle } = require('./shape');

// Test that the Triangle Class initializes correctly
describe('Shapes', () => {
    describe('Triangle', () => {
        it('Should return true if the triangle class is constructed properly', () => {
            const triangle = new Triangle('blue');
            expect(triangle).toBeInstanceOf(Triangle);
        })
        it('Should return with the same color that was sent to the traingle class', () => {
            let color = 'Green'
            const triangle = new Triangle(color)
            expect(triangle.color).toBe(color)
        })
    })
    describe('Circle', () => {
        it('Should return true if the circe class is constructed properly', () => {
            const circle = new Circle('blue')
            expect(circle).toBeInstanceOf(Circle)
        })
        it('Should return with the same color that was sent to the circle class', () => {
            let color = 'Green'
            const circle = new Circle(color)
            expect(circle.color).toBe(color)
        })
    })
})