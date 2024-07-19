class Shapes {
    constructor(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }
}

Shapes.prototype.render = function(text, textColor) {

    text = text.toUpperCase();
    textColor = textColor.toLowerCase();
    
    return `<circle cx="150" cy="100" r="80" fill="${shapeColor}"/>
    <text x="100" y="120"><tspan font-size="60" fill="${textColor}">${text}</text>`;
};

module.exports = Shapes;