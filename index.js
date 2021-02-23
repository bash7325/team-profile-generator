const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const createTeam = () => {
const questions = [
    {
        type: 'list', 
        name: 'role', 
        message: 'What is your role?',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name', 
        message: 'What is your name?', 
    },
    {
        type: 'input',
        name: 'id', 
        message: 'What is your id?', 
    },
    {
        type: 'input',
        name: 'email', 
        message: 'What is your email?', 
    }, 
]

inquirer.prompt(questions).then(employee=>{
    if (employee.role === 'Manager'){ 
        createManager(employee); 
    } else if (employee.role === 'Engineer'){ 
        createEngineer(employee); 
    } else {
        createIntern(employee); 
    }
}); 
}
