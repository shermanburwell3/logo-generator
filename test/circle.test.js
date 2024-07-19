const Circle = require('../lib/circle.js');

describe('circle', function() {
    it('is a circle', function() {
        
        const text = "ABC";
        const textColor = "BLUE";
        const shapeColor = "Red";
        const newCircle = new Circle(text, textColor, shapeColor);
        

        expect(newCircle.render(text, textColor, shapeColor)).toBe(`<circle cx="150" cy="100" r="80" fill="red"/><text x="100" y="120"><tspan font-size="60" fill="blue">ABC</text>`);
    });

});