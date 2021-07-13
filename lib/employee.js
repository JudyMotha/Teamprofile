class Employee {
    constructor(name, id, emailadd) {
        this.name = name;
        this.id = id;
        this.emailadd = emailadd;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.emailadd;
    }

//return Fn can be single or double quotes 
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;