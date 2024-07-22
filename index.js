const shapes = require("./lib/shapes.js");
const fs = require('fs');

// Placeholder for text and textColor
const text = "ABC";
const textColor = "blue";

// declare a new shape
const shape = new shapes();

// Set up the xml code for the svg file
const logo = `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
${shape.render(text, textColor)}
`;

//write the shape to a file
fs.writeFile("test-write.svg", logo, function(error) {
    if (error) {
        console.log(error);
    }
    else {

    }
});
