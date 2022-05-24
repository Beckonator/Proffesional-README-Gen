// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter the project title to continue.";
      }
    },
  },
  {
    type: "input",
    name: "descritption",
    message: "What is the project description?",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Pease enter the project description to continue.";
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install the project?",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter steps of installation to continue";
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Instructions for how to use. Include screenshots as needed.",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter steps of installation to continue";
      }
    },
  },
  {
    type: "input",
    name: "credits",
    message:
      "List your collaborators, if any, with links to their GitHub profiles.",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please provide credit where credit is due.";
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a license for your project",
    choices: [
      "No License','GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Succes!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    writeToFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();
