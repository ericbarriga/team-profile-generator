// class manager extends employee {
//     constructor(name, id, email, phone) {
//         super(name, id, email);
//         this.phone = phone;
//     }
//     getRole() { return 'manager' }

//     getPhone() { return this.phone }
// }

// module.exports = manager;



/// createe a function to display information on page as a card 
function generateManager(data) {
    return `
    
    <h1>name:</h1> ${data.name}

    
    
    `
}