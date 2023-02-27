const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

//Array of employees objects (used later to render html)
const employeesArray = []

//MAKE MANAGER
// First inquirer asks user for info about the manager class and creates a new manager object. 
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
    const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
    employeesArray.push(manager);
    nextEmployee() 
  })

//NEXT EMPLOYEE MENU
// asks user what type of employee to add and activates the respective function.
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

//MAKE ENGINEER
//builds engineer with user responses and pushes it into employees array
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
      const engineer = new Engineer(response.name, response.id, response.email, response.github)
      employeesArray.push(engineer);
      nextEmployee()
    })
}

//MAKE INTERN
//builds new intern with user responses and pushes it into employees array
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
      message: "Enter the intern's school:",
      name: 'school',
    },
  ])
    .then((response) => {
      const intern = new Intern(response.name, response.id, response.email, response.school,)
      employeesArray.push(intern);
      nextEmployee()
    })
}

//BUILD HTML
//This builds the html file using stored in employeesArray
const buildPage = () => {
  const html = render(employeesArray)
  fs.writeFile(outputPath, html, (err) => {
    if (err) throw err;
    console.log(`Generated team.html`);
  });
};