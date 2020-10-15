var fs = require("fs")
var inquirer = require("inquirer")

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt([
    {
      type: "input",
      message: "What is this app for?",
      name: "App use"
    },
    {
      type: "input",
      message: "How do you use your app?",
      name: "p"
    },
    {
      type: "password",
      message: "Re-enter password to confirm:",
      name: "confirm"
    }
  ]).then(function(response) {

    console.log(response)})
}

// function call to initialize program
init();
