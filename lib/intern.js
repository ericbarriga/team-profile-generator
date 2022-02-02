class intern extends employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.email = email;
    }
}

module.exports = intern;