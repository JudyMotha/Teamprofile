const Employee = require("./Employee");

//Create Manager class that extends the Employee class -Note super being used
class Manager extends Employee {
    constructor(name, id, emailadd, officeNumber) {
        super(name, id, emailadd);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    };
//return Fn can be single or double quotes 
    getOfficeNumber() {
        return this.officeNumber;
    }
};

module.exports = Manager;
