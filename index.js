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
    </svg>`

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
                    break
                case 'Circle': var shape = new Circle(response.shapeColor);
                    break
                case 'Square': var shape = new Square(response.shapeColor);
                    break
            }

            // ensure that the text is less than 3 character long and if so acquire the text svg code
            if (response.text.length > 3) {
                console.log('Text must be 3 characters or less')
            } else {
                // create the text object
                const text = new Text(response.text, response.textColor)

                // use the text and shape render methods to acquire the svg code as a string
                let logoShape = shape.render();
                let logoText = text.render()
                wrtieToFile(logoText, logoShape)
            }



        })
}

// application start
init()