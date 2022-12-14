const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.title = "Manager";
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

}

module.exports = Manager;