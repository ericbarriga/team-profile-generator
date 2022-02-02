const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const inquirer = require('inquirer');
const fs = require('fs');

team = []

function aTeamLeader() {
    inquirer.prompt(
        [
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
            .then(function (answer) {
                const manager = new Manager(answer.name, answer.id, answer.email, answer.phone);
                team.push(aTeamLeader);
                addEmployees()
            })
    )
}