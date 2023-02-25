const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const employeesArray = []


// TODO: Write Code to gather information about the development team members, and render the HTML file.

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

  ])
  .then((response) => {
    const manager = {
      name: response.name,
      id: response.id,
      email: response.email,
      officeNumber: response.officeNumber,
      role: 'Manager',
    }
    employeesArray.push(manager);
    nextEmployee()
  })

const nextEmployee = () => {
  inquirer.prompt([
    {
      type: 'list',
      message: 'Wha type of team member do you want to add?',
      name: 'function',
      choices: ['Engineer', 'Intern', 'Finish building the team',]
    },

  ]).then(response => {
    if (response.function === 'Engineer') {
      makeEngineer()
    } else if (response.function === 'Intern') {
      makeIntern()
    } else {
      buildPage()
    }
  })
}

const makeEngineer = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: "Enter the engineer's name:",
      name: 'name',
    },
    {
      type: 'input',
      message: "Enter the engineer's ID:",
      name: 'id',
    },
    {
      type: 'input',
      message: "Enter the engineer's email address:",
      name: 'email',
    },
    {
      type: 'input',
      message: "Enter the engineer's GitHub username:",
      name: 'github',
    },

  ])
  .then((response) => {
    const engineer = {
      name: response.name,
      id: response.id,
      email: response.email,
      github: response.github,
      role: 'Engineer',
    }
    employeesArray.push(engineer);
    nextEmployee()
  })
}


const makeIntern = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: "Enter the intern's name:",
      name: 'name',
    },
    {
      type: 'input',
      message: "Enter the intern's ID:",
      name: 'id',
    },
    {
      type: 'input',
      message: "Enter the intern's email address:",
      name: 'email',
    },
    {
      type: 'input',
      message: "Enter the intern's GitHub school:",
      name: 'school',
    },

  ])
  .then((response) => {
    const intern = {
      name: response.name,
      id: response.id,
      email: response.email,
      school: response.school,
      role: 'Intern',
    }
    employeesArray.push(intern);
    nextEmployee()
  })
}


const buildPage = () => {
  const myEmployees = []
  testArray.push(new  Manager)
  testArray.push(new Engineer)
  testArray.push(new Intern)
console.log(render(myEmployees))
}
