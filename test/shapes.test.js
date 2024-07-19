const shapes = require('../lib/shapes.js');

describe('shapes', function () {
    it('should have no more than three letters', function() {
        const shape = new shapes(text, textColor, shapeColor);

        expect(shape.text).toBeLessThanOrEqual(3);
    })
});