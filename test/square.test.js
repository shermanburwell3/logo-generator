const Square = require('../lib/square.js');

describe('square', function() {
    it('is a square', function() {
        
        const text = "ABC";
        const textColor = "BLUE";
        const shapeColor = "green";
        const newSquare = new Square(text, textColor, shapeColor);
        

        expect(newSquare.render(text, textColor, shapeColor)).toBe(`<rect x="10" y="10" width="100" height="100" fill="green"/><text x="30" y="68"><tspan font-size="40" fill="blue">ABC</text>`);
    });

});