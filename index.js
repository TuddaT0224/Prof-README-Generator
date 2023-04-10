// TODO: Include packages needed for this application
const fs = require("fs");

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    // Questions for the title
    {
       type: "input",
       name: "title",
       message: "What is the title of your project?"
    },
    // Question for the project Description
    {
        type: "input",
        name: "description",
        message:"Please enter a description of your project.",
    },
    // Questions for Installation
    {
        type: "input",
        name: "installation",
        message: "Please enter a explanation of how to install the software",
    },
    // Question for Usage
    {
        type: "input",
        name: "usage",
        message: "Describe how we would use this project",
    },
    // Question for License
    {
        type: "list",
        name: "getLicense",
        message: "Choose a license",
        choices: ["MIT", "NONE", "Apache"],
    },
    // Questions for Contributing
    {
        type: "input",
        name: "contributing",
        message: " How users would contribut to your project",
    },
    // Questions for GitHub username
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub userName?",
    },
    // Questions for Email Address
    {
        type: "input",
        name: "userEmail",
        message: "What is your Email Address?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
}

// TODO: Create a function to initialize app
function init() {
    // inquirer prompt
    // then writeToFile 
}

// Function call to initialize app
init();
