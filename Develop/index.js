const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');



// A array of questions for user input
inquirer.prompt([
  {
    type: 'input',
    message: 'What is your name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is the name of your project?',
    name: 'projectTitle',
  },
  {
    type: 'input',
    message: 'Please give a description of your project.',
    name: 'projectDesc'
  },
  {
    type: 'input',
    message: 'Installation Instruction?',
    name: 'installInstrutions'
  },
  {
    type: 'list',
    message: 'Which licence shall you be using?',
    name: 'licenseSelection',
    choices: ['Apache', 'Boost', 'BSD', 'MIT', 'No License']
  },
  {
    type: 'input',
    message: 'Can you give a quick description of the common usage?',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'Any credits you would like to mention?',
    name: 'credits'
  },
  {
    type: 'input',
    message: 'Name any contributors you would like to mention',
    name: 'contributors'
  },
  {
    type: 'input',
    message: 'Please insert your Github name.',
    name: 'github'
  },
  {
    type: 'confirm',
    message: 'Have there been test run?',
    name: 'tests'
  },
  {
    type: 'input',
    message: 'Please enter your email.',
    name: 'email'
  }
])

  .then(data => {
    console.log(data)
    fs.writeFile('readme.md', generateMarkdown(data), (err) => {})
  });



// A function to initialize app
function init() {}

init();
