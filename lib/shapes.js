class Shapes {
    constructor(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }
}

Shapes.prototype.render = function(text, textColor) {

    text = text.toUpperCase();
    textColor = textColor.toLowerCase();
    
    return `<tspan font-size="60" fill="${textColor}">${text}</text>`;
};

module.exports = Shapes;