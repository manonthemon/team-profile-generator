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


// First inquirer asks for info about manager class

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
  .then((response) => { //Then it creates a new manager with user responses and pushes it into emoloyesArray
    const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
    employeesArray.push(manager);
    nextEmployee() //Calls the nextemployee function
  })

//next employee function asks user what type of employee to add and activates the respective function
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
      message: "Enter the intern's GitHub school:",
      name: 'school',
    },

  ])
    .then((response) => {
      const intern = new Intern(response.name, response.id, response.email, response.school,)
      employeesArray.push(intern);
      nextEmployee()
    })
}

//This builds the html file using stored in employeesArray
const buildPage = () => {
  const html = render(employeesArray)
  fs.writeFile(outputPath, html, (err) => {
    if (err) throw err;
    console.log(`Generated team.html`);
  });
};