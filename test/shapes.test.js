const shapes = require('../lib/shapes.js');

describe('shapes', function () {
    it('should have no more than three letters', function() {
        const text = "ABC";
        const textColor = "White";
        const shape = new shapes(text, textColor);

        expect(shape.text.length).toBeLessThanOrEqual(3);
        
    });
    it('should have no more than three letters', function() {
        const text = "ABC";
        const textColor = "blue";
        const shape = new shapes(text, textColor);

        expect(shape.render(shape.text, shape.textColor)).toBe(`<text x="10" y="10"><tspan fill="blue">ABC</text>`);
    })
});