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

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter your project title:',
      name: 'title',
    },
    

    // Generating the readme file using the generate Markdown function and fs.writeFile
  ])
  .then((response) => {

//   const readme = generateMarkdown(response)

fs.writeFile("READMEexample.md", readme, (err) => 
err? console.error(err) : console.log("Readme created")
)
 });