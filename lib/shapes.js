class Shapes {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

Shapes.prototype.render = function(text) {
    return ``;
};

module.exports = Shapes;