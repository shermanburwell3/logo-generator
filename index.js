const shapes = require("./lib/shapes.js");
const fs = require('fs');
const inquirer = require('inquirer');

function promptStart(){
    inquirer.prompt([
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
    }).then(function (response) {

        inquirer.prompt([
            {
                type: "list",
                message: "Please select the shape you wish to use",
                name: "shape",
                choices: ["circle", "square", "triangle"],
            },
            {
                type: "input",
                message: "Please type the color you wish to use for your text or give a hexidecimal value. If the color is not recognized, black will be used",
                name: "textColor",
            },
            {
                type: "input",
                message: "Now enter the color you would like the background shape to be, or give a hexidecimal value. If the color is not recognized, black will be used",
                name: "shapeColor",
            }
        ]).then(function(response) {
            writeSVGFile(response.fileName, response.shape, response.text, response.textColor, response.shapeColor);
        })
    });

}

function textCheck(text) {
    if (text.length > 3) {
        console.log("Error! Use THREE OR LESS letters for your text");
        promptStart();
    }
}

promptStart();

function writeSVGFile(fileName, shape, text, textColor, shapeColor) {
    // Placeholder for text and textColor, remove after prompts are created
    const text = "ABC";
    const textColor = "blue";

    // declare a new shape, change to switch case to decide the shape
    const shape = new shapes();

    // Set up the xml code for the svg file
    const logo = `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    ${shape.render(text, textColor, shapeColor)}
    `;

    //write the shape to a file
    fs.writeFile(`${fileName}.svg`, logo, function(error) {
        if (error) {
            console.log(error);
        }
        else {

        }
    });
}
