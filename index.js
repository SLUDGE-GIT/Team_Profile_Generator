const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");



const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "myteam.html");

const render = require("./lib/RenderHtml");

const teamArray = [];

const initQuestions = [{
        type: 'input',
        name: 'name',
        message: "Please enter the Team Member\'s: name:",
    },

    {
        type: 'input',
        name: 'id',
        message: "Please enter the Team Member\'s: id:",
    },

    {
        type: 'input',
        name: 'email',
        message: "Please enter the Team Member\'s: email:",
    }
];
// Manager Questions
const managerQuestions = [
    ...initQuestions,
    {
        type: 'input',
        name: 'officeNum',
        message: "Please enter the office number:",
    },
];
// Intern Questions
const internQuestions = [
    ...initQuestions,
    {
        type: 'input',
        name: 'school',
        message: 'Please enter your last or current place for education:',
    },
];
// Engineer Questions
const engineerQuestions = [
    ...initQuestions,
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:',
    },
];
// Hiring a manager
inquirer.prompt(managerQuestions)
    .then((response) => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNum);
        teamArray.push(manager);
        determineEmployee();
    });
//Determine Employee to Hire
function determineEmployee() {
    const employeeQuestions = [{
        name: 'choice',
        type: 'list',
        message: 'What would you like to add:',
        choices: ['Intern', 'Engineer', 'Done'],
    }, ];
    inquirer.prompt(employeeQuestions)
        .then((answers) => {
            if (answers.choice === 'Intern') {
                internInfo();
            }
            if (answers.choice === 'Engineer') {
                engineerInfo();
            }
            if (answers.choice === 'Done') {
                createHTMLFile();
            }
        })
}
//Create Intern for Team
function internInfo() {
    inquirer.prompt(internQuestions)
        .then((response) => {
            const intern = new Intern(response.name, response.id, response.email, response.school);
            teamArray.push(intern);
            determineEmployee();
        })
}
//Create Engineer for Team
function engineerInfo() {
    inquirer.prompt(engineerQuestions)
        .then((response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            teamArray.push(engineer);
            determineEmployee();
        })
}

function createHTMLFile() {
  
    try {
        const html = render(teamArray);
      
        fs.writeFileSync(outputPath, html);
    } catch (error) {
        console.log(error);
    }
}

