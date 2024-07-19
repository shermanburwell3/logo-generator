class Shapes {
    constructor(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }
}

Shapes.prototype.render = function(text, textColor) {

    text = text.toUpperCase();
    textColor = textColor.toLowerCase();
    
    return `<text x="10" y="10"><tspan fill="${textColor}">${text}</text>`;
};

module.exports = Shapes;