class intern extends employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.email = email;
    }
    getRole() { return 'intern' }

    getSchool() { return this.school }
}

module.exports = intern;