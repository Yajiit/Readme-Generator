// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
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
    name: 'installation',
    message: 'Enter installation instructions:',
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
      console.log(`README file '${fileName}' has been created successfully!`);
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