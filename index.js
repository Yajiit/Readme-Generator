// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter description:',
  },
  {
    type: 'input',
    name: 'github',
    message: "Enter Github username:",
  },
  {
    type: 'input',
    name: 'email',
    message: "Enter Email address:",
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'installation',
    message: "Enter installation instructions:",
  },
  {
    type: 'input',
    name: 'usage',
    message: "Enter usage info:",
  },
  {
    type: 'list',
    name: 'license',
    message: "Select license:",
    choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None']
  },
  {
    type: 'input',
    name: 'contributing',
    message: "Enter contributing guidelines:",
  },
  {
    type: 'input',
    name: 'tests',
    message: "Enter testing instructions:",
  },
  // {
  //   type: 'input',
  //   name: '',
  //   message: '',
  // },
 
  // question template for future development
];

// function to write README file
function writeToFile(fileName, answers) {
  const readmeContent = generateMarkdown(answers);
  fs.writeFile(fileName, readmeContent, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`README file '${fileName}' has been created successfully at ${path.resolve(__dirname, fileName)}!`);
      ;
    }
  });
}

// function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile('README.md', answers);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function call to initialize app
init();