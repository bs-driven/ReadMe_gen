// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
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
  // .then((response) =>{console.log(response)
  //   fs.writeFile("index.html", generateHTML(response), (err) => {
  //     err ? console.error(err): console.log("Success")
  // })
  .then(data => {
    console.log(data)
    fs.writeFile('readme.md', generateMarkdown(data), (err) => {})
  });

  //}
    // response.confirm === response.password
    //   ? console.log('Success!')
    //   : console.log('You forgot your password already?!')
//);

// TODO: Create a function to write README file
// function writeToFile(fileName, data) => {}




// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
