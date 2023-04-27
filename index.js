const shape = require('./lib/shape')
const inquirer = require('inquirer')

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
            console.log(response.text)
            console.log(response.textColor)
            console.log(response.shape)
            console.log(response.shapeColor)
        })
}

// application start
init()