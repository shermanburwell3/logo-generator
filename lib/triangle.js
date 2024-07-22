const shape = require("./shapes.js");

class Triangle extends shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor);
        this.shapeColor = shapeColor;
    }  
}

Triangle.prototype.render = function(text, textColor, shapeColor) {

    text = text.toUpperCase();
    textColor = textColor.toLowerCase();
    shapeColor = shapeColor.toLowerCase();

    return `<polygon points="35 10 10 45 60 45" fill="${shapeColor}"/><text x="18" y="40"><tspan font-size="20" fill="${textColor}">${text}</text>`;
        
}

module.exports = Triangle;