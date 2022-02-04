const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, phone) {
        super(name, id, email);
        this.phone = phone;
        this.role = 'manager';
    }
    getRole() { return 'manager' }

    getPhone() { return this.phone }
}

module.exports = Manager;



/// createe a function to display information on page as a card 
function generateManager(data) {
    return `
    
    <h1>name:</h1> ${data.name}

    
    
    `
}