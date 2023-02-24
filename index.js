const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

//!THIS IS JUST TO TEST INQUIRER
inquirer
  .prompt([
    {
      type: 'input',
      message: "Enter the manager's name:",
      name: 'name',
    },
    {
      type: 'input',
      message: "Enter the manager's ID:",
      name: 'id',
    },
    {
      type: 'input',
      message: "Enter the manager's email address:",
      name: 'email',
    },
    {
      type: 'input',
      message: "Enter the manager's office number:",
      name: 'officeNumber',
    },
      {
        type: 'list',
        message: 'Wha type of team member do you want to add?',
        name: 'function',
        choices: ['Engineer', 'Intern', 'Finish building the team' ,]
      },
  ])
  .then((response) => {

//TODO FINISH THIS. Needs to create an array of objects with employees I think...
  // fs.writeFile("index.html", readme, (err) => 
  // err? console.error(err) : console.log("Readme created")
  // )
   });

 // !INQUIRER TEST ENDS HERE