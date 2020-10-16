var fs = require("fs")
var path = require("path")
var inquirer = require("inquirer")
var generateMarkdown = require("./utils/generateMarkdown.js")

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(__dirname,fileName),data)
}

// function to initialize program
function init() {
    inquirer
    .prompt([
    {
      type: "input",
      message: "What is the title of your app?",
      name: "title",
    },
    {
      type: "input",
      message: "What is your app used for?",
      name: "usage",
    },
    {
      type: "input",
      message: "How do you test you app?",
      name: "test",
    },
    {
      type: "input",
      message: "How do you install your app?",
      name: "installer",
    },
    {
      type: "list",
      message: "What license do you have for your app?",
      name: "license",
      choices: ["Apache License 2.0","MIT License","The Unlicense","Mozilla Public License 2.0","N/A"]
    },
    {
      type: "input",
      message: "What is your github username?",
      name: "username",
    },
    {
      type: "input",
      message: "How do you report issues?",
      name: "reportIssues",
    },
    {
      type: "input",
      message: "How do you make contributions?",
      name: "contributions",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },

  ]).then(function(response) {
    var markdown = generateMarkdown(response)
    writeToFile("README2.md", markdown)
  })
}
// function call to initialize program
init()
