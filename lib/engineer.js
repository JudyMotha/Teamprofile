const Employee = require("./Employee");
//Note super //The super keyword in JavaScript is used in order to call the methods of the parent class
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
