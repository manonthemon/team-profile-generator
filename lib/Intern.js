// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.


const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school) {
       
        this.school = school

        super(id, email);
        this.id = id;
        this.email = email;
    }

    getId() {}
    getEmail() {}
    getRole() {}//—returns 'Intern'//
    getSchool() {}

}

module.exports = Intern;
