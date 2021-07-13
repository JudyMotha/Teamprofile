const Employee = require("./Employee");
//Note super
class Engineer extends Employee {
    constructor(name, id, emailadd, github) {
        super(name, id, emailadd);
        this.github = github;
    }

    getGitHub() {
        return this.github;
    }
//return Fn can be single or double quotes 
    getRole() {
        return "Engineer";
    }
};

module.exports = Engineer;