// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
      this.name= name;
      this.id = id;
      this.email = email;
    }

getName() {
  return this.name;
}
getId() {
  return this.id;
}
getEmail() {
  return this.email;
}
getRole() {
  return "Employee"
}
  
  }

  // const emplo1 = new Employee(123, "kot@kot.com")

  // console.log(emplo1);
  
  module.exports = Employee;

