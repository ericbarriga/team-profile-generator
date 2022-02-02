

class engineer extends employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;

    }
}

module.exports = engineer;