const Employee = require("./Employee");
//Super
class Intern extends Employee {
    constructor(name, id, emailadd, school) {
        super(name, id, emailadd);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
//return Fn can be single or double quotes 
    getRole() {
        return "Intern";
    }
};

module.exports = Intern;