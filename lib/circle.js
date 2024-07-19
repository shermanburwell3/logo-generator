const shape = require("./shapes.js");

class Circle extends shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor);
        this.shapeColor = shapeColor;
    }  
}

Circle.prototype.render = function(text, textColor, shapeColor) {

    text = text.toUpperCase();
    textColor = textColor.toLowerCase();
    shapeColor = shapeColor.toLowerCase();

    return `<circle cx="150" cy="100" r="80" fill="${shapeColor}"/><text x="100" y="120"><tspan font-size="60" fill="${textColor}">${text}</text>`;
        
}

module.exports = Circle;