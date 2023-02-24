// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber) {
       
        this.officeNumber = officeNumber

        super(id, email);
        this.id = id;
        this.email = email;
    }

    getId() {}
    getEmail() {}
    getRole() {}//—returns 'Manager'//

}

module.exports = Manager;
