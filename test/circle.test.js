const circle = require('../lib/circle.js');

describe('circle', function() {
    it('is a circle', function() {
        
        const nweCircle = new circle;
        expect(newCircle.render(text, textColor, shapeColor)).toBe(`<circle cx=150" cy="100" r"80" fill="red"/>`);
    });

});