const { Triangle, Circle, Square } = require('./lib/shape');
const Text = require('./lib/text')
const inquirer = require('inquirer');
const fs = require('fs');

// function that uses file-system to creat the svg file
function wrtieToFile(text, shape) {
    // create the text formatted for the svg file 
    let data = `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
    ${shape}
    ${text}
</svg>
    `
    // write the data to a new file
    fs.writeFile('logo.svg', data, (err) => {
        err ? console.error(err) : console.log('Generated logo.svg')
    });
};

//initialize the application
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What text would you like on your logo?',
                name: 'text'
            },
            {
                type: 'input',
                message: 'What color should the text be?',
                name: 'textColor'
            },
            {
                type: 'list',
                message: 'What shape would you like for your logo?',
                choices: ['Triangle', 'Circle', 'Square'],
                name: 'shape'
            },
            {
                type: 'input',
                message: 'What color should the Shape be?',
                name: 'shapeColor'
            }
        ]).then((response) => {
            // get the correct shapes svg code
            switch (response.shape) {
                case 'Triangle': var shape = new Triangle(response.shapeColor);
                case 'Circle': var shape = new Circle(response.shapeColor);
                case 'Square': var shape = new Square(response.shapeColor);
            }

            // get the text svg code
            const logoText = new Text(response.text, response.textColor)


        })
}

// application start
init()