class manager extends employee {
    constructor(name, id, email, phone) {
        super(name, id, email);
        this.phone = phone;
    }
}

module.exports = manager;