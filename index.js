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
  .then((response) => { //Then it creates an manager object and pushes it into emoloyesArray
    const manager = {
      name: response.name,
      id: response.id,
      email: response.email,
      officeNumber: response.officeNumber,
      role: 'Manager',
    }
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

//build engineer object and pushes it into employees array
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

//build intern object and pushes it into employees array
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


//This builds the html file using info form user
const buildPage = () => {
  const html = render(employeesArray.map(employee => {
    if (employee.role === 'Manager') {
      return new Manager(employee.name, employee.id, employee.email, employee.officeNumber);
    } else if (employee.role === 'Engineer') {
      return new Engineer(employee.name, employee.id, employee.email, employee.github);
    } else if (employee.role === 'Intern') {
      return new Intern(employee.name, employee.id, employee.email, employee.school);
    }
  }));
  fs.writeFile(outputPath, html, (err) => {
    if (err) throw err;
    console.log(`Generated team.html`);
  });
};
