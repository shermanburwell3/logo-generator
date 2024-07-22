const Triangle = require('../lib/triangle.js');

describe('triangle', function() {
    it('is a triangle', function() {
        
        const text = "ABC";
        const textColor = "green";
        const shapeColor = "BLUE";
        const newTriangle = new Triangle(text, textColor, shapeColor);
        

        expect(newTriangle.render(text, textColor, shapeColor)).toBe(`<polygon points="35 10 10 45 60 45" fill="blue"/><text x="18" y="40"><tspan font-size="20" fill="green">ABC</text>`);
    });

});