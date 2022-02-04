const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const employee = require('./lib/employee')
const inquirer = require('inquirer');
const fs = require('fs');
const { start } = require('repl');
const generateManager = require('./lib/manager');

let team = []

/// to get the managers info
function aTeamLeader() {
    inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'what is the managers name ?',
            validate: function (answer) {
                if (answer !== '') {
                    return true;
                }
                return 'please enter at least one character'
            }

        },
        {
            type: 'input',
            name: 'id',
            message: 'what is the managers id ?',
            validate: function (answer) {
                if (answer !== '') {
                    return true;
                }
                return 'please enter at least one character'
            }

        },
        {
            type: 'input',
            name: 'email',
            message: 'what is the managers email ?',
            validate: function (answer) {
                if (answer !== '') {
                    return true;
                }
                return 'please enter at least one character'
            }

        },
        {
            type: 'input',
            name: 'phone',
            message: 'what is the managers phone number ?',
            validate: function (answer) {
                if (answer !== '') {
                    return true;
                }
                return 'please enter a valid phone number'
            }

        },
    ]
        .then(function (answers) {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.phone);
            team.push(manager)
            addEmployees()
        })
    )
};

// to get engineers info 

function engineers() {
    inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'what is the engineer name ?',
            validate: function (answer) {
                if (answer !== '') {
                    return true;
                }
                return 'please enter at least one character'
            }

        },
        {
            type: 'input',
            name: 'id',
            message: 'what is the engineer id ?',
            validate: function (answer) {
                if (answer !== '') {
                    return true;
                }
                return 'please enter at least one character'
            }

        },
        {
            type: 'input',
            name: 'email',
            message: 'what is the engineer email ?',
            validate: function (answer) {
                if (answer !== '') {
                    return true;
                }
                return 'please enter at least one character'
            }

        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'what is github username ?',
            validate: function (answer) {
                if (answer !== '') {
                    return true;
                }
                return 'please enter at least one character'
            }

        },

    ]
        .then(function (answers) {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
            team.push(intern);
            addEmployees()
        })
    )
};

/// ask intern

function intern() {
    inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'what is the interns name ?',
            validate: function (answer) {
                if (answer !== '') {
                    return true;
                }
                return 'please enter at least one character'
            }

        },
        {
            type: 'input',
            name: 'id',
            message: 'what is the intern id ?',
            validate: function (answer) {
                if (answer !== '') {
                    return true;
                }
                return 'please enter at least one character'
            }

        },
        {
            type: 'input',
            name: 'email',
            message: 'what is the intern email ?',
            validate: function (answer) {
                if (answer !== '') {
                    return true;
                }
                return 'please enter at least one character'
            }

        },


    ]
        .then(function (answers) {
            const intern = new Intern(answers.name, answers.id, answers.email,);
            team.push(intern);
            addEmployees()
        })
    )
};

/// add employees with a llist 
function addEmployees() {
    inquirer.prompt([{
        type: 'list',
        name: 'switch',
        choices: ['engineer', 'intern', 'done'],
        message: 'add employees'
    }]).then(function (answer) {
        switch (answer.switch) {
            case 'engineer':
                engineer()
                break;
            case 'intern':
                intern()
                break;
            default:
                saveEmployees();
        }
    })
}

const saveEmployees = () => {
    /////BULLSHIT I HAVENT WRITTEN YET 
    /// IS SO LOST HELP ME PAPA FRANSIS 
}

// create function to display on html form

function makeform(file, html) {
    // console.log(file);
    fs.write(file, html, (err) => {
        if (err) throw err;

    })
}

// write function initialize app;

function init() {
    inquirer
        .prompt(questions)
        .then(function (answer) {
            // console.log('answers ----------->', answers);
            const card = generateManager(answer);
            makeform('employees.html', card);
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

aTeamLeader()
init()