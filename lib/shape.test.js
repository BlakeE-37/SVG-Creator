const Triangle = require('./shape')

// Test that the Triangle Class initializes correctly
describe('Shapes', () => {
    describe('Triangle', () => {
        it('Should return true if the triangle class is constructed properly', () => {
            const triangle = new Triangle('blue');
            expect(triangle).toBeInstanceOf(Triangle);
        })
    })
})