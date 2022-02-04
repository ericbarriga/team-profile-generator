const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const fs = require('fs');
const { start } = require('repl');
const generateManager = require('./lib/manager');
const generatehtml = require('./lib/generateHtml')
// first step get info from user
// 2nd use info to make a array of employee objects;
//3rd when we have the array then we can use it to make a html string ;
// 4th when we have the string then we can make a html file ;
// using fs 
let team = []
const internQuestion = [
    {
        type: 'input',
        name: 'name',
        message: 'what is the intern name ?',
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
    {
        type: 'input',
        name: 'school',
        message: 'intern school ?',
        validate: function (answer) {
            if (answer !== '') {
                return true;
            }
            return 'please enter at least one character'
        }

    },
]

const next = [
    {
        type: 'list',
        name: 'action',
        message: 'what do you want to do ?',
        choices: ['Add Engineer', 'Add Intern', 'Finshed'],
    }
]
const managerQuestion = [

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
//engineer
const engineerQuestion = [
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
        message: 'what is the enginner id ?',
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
        message: 'what is the enginner email ?',
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
            return 'please enter a valid github'
        }
    }
]

/// to get the managers info
function aTeamLeader() {
    inquirer.prompt(managerQuestion)
        .then(function (answers) {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.phone);
            team.push(manager)
            // console.log('manger added ------------------------------>');
            // console.log(manager, team);
            addEmployees()
        })
};

// to get engineers info 

function addEngineer() {
    inquirer.prompt(engineerQuestion)
        .then(function (answers) {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
            team.push(engineer);
            // console.log('enginner added ------------------------------>');
            // console.log(engineer, team);
            addEmployees()
        })

};

/// ask intern

function addIntern() {
    inquirer.prompt(internQuestion)
        .then(function (answers) {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            team.push(intern);
            // console.log('intern added ------------------------------>');
            // console.log(intern, team);
            addEmployees()
        })

};

/// add employees with a llist 
function addEmployees() {

    inquirer.prompt(next).then(function (answer) {
        switch (answer.action) {
            case 'Add Engineer':
                addEngineer()
                break;
            case 'Add Intern':
                addIntern()
                break;
            default:
                saveEmployees();
        }
    })
}

function saveEmployees() {
    let htmlString = generatehtml(team)
    makeform('profile.html', htmlString)


    // console.log('team complete------------>');
    // console.log(team);
}

// create function to display on html form

function makeform(file, html) {
    // console.log(file);
    fs.writeFile(file, html, (err) => {
        if (err) throw err;
        console.log('file created ');
    })
}

// write function initialize app;

function init() {
    aTeamLeader()

}


init()