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

    return `<rect x="10" y="10" width="100" height="100" fill="${shapeColor}"/><text x="30" y="68"><tspan font-size="40" fill="${textColor}">${text}</text>`;
        
}

module.exports = Square;