const shape = require("./shapes.js");

class Circle extends Shapes {
    constructor(shapeColor) {
        super(text, textColor);
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }  
}

Circle.prototype.render = function(text, textColor, shapeColor) {

    text = text.toUpperCase();
    textColor = textColor.toLowerCase();
    shapeColor.toLowerCase();

    return `<text x="150" y="150"><tspan fill="${textColor}">${text}</text>
    <circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
        
}