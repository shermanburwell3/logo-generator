const shape = require("./shapes.js");

class Square extends shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor);
        this.shapeColor = shapeColor;
    }  
}

Square.prototype.render = function(text, textColor, shapeColor) {

    text = text.toUpperCase();
    textColor = textColor.toLowerCase();
    shapeColor = shapeColor.toLowerCase();

    return `<rect x="10" y="10" width="30" height="30" fill="${shapeColor}" stroke-width="5"/><text x="100" y="120"><tspan font-size="60" fill="${textColor}">${text}</text>`;
        
}

module.exports = Square;