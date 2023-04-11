// Const fs variable
const fs = require("fs");

// inquirer variable
const inquirer = require("inquirer");

//
const generateMarkdown = require("./generateMarkdown");

function getLicense(value) {
    if(value === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (value === "Apache 2.0") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }
}


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
        message: "Please enter a explanation of how to install the software:",
    },
    // Question for Usage
    {
        type: "input",
        name: "usage",
        message: "Describe how we would use this project.",
    },
    // Question for License
    {
        type: "list",
        name: "getLicense",
        message: "Choose a license",
        choices: ["MIT", "NONE", "Apache 2.0"],
    },
    // Questions for Contributing
    {
        type: "input",
        name: "contributing",
        message: " Who are the contributors of this project?",
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
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() { 
 inquirer.prompt(questions).then((data) => {
    console.log(JSON.stringify(data, null, " "));
    data.getLicense = getLicense(data.license);
    writeToFile("./Develop/example/README.md", data);
   });
}

// inquirer prompt
// then writeToFile 
// Function call to initialize app
init();
