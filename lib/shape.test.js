const { Triangle, Circle, Square } = require('./shape')

describe('Shapes', () => {
    describe('Triangle', () => {
        const triangle = new Triangle();
        expect(triangle).toBeInstanceOf(Triangle);
    })
})