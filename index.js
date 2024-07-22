const shapes = require("./lib/shapes.js");
const fs = require('fs');
const inq = require('inquirer');

function promptStart(){
    inq.prompt([
        {
            type: "input",
            message: "Please enter the name you would like to give this file WITHOUT the extension",
            name: "fileName",
        },
        {
            type: "input",
            message: "Please enter 3 letters that will display on the icon",
            name: "text",
        }
    ]).then((response) => {
        textCheck(response.text);
    });

}

function textCheck(text) {
    if (text.length < 3) {
        console.log("Error! Use THREE OR LESS letters for your text");
        promptStart();
    }
}

promptStart();

// Placeholder for text and textColor, remove after prompts are created
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
