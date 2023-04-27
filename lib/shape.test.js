const Triangle = require('./shape')

// Test that the Triangle Class initializes correctly
describe('Shapes', () => {
    describe('Triangle', () => {
        it('Should return true if the triangle class is constructed properly', () => {
            const triangle = new Triangle('blue');
            expect(triangle).toBeInstanceOf(Triangle);
        })
        it('Should return with the same color that was put into the traingle class', () => {
            let color = 'Green'
            const triangle = new Triangle(color)
            expect(triangle.color).toBe(color)
        })

    })
})