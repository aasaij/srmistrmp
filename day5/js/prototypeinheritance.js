// const person = {
//   firstName: "Dinesh",
//   lastName: "Raj",
//   toString() {
//     return this.firstName + " " + this.lastName;
//   },
// };
const person = {
  firstName: "Raghurama",
  lastName: "Sharma",
  set fullName(fullName) {
    [this.firstName, this.lastName] = fullName.split(" ");
  },
  toString() {
    return this.firstName + " " + this.lastName;
  },
};
// document.write(person);

const emp = {
  salary: 200000,
  __proto__: person,
};

// emp.firstName = "Testing";
emp.fullName = "Manoj S";
console.log(emp);
// console.log(emp.toString());
// emp.firstName = "XXX";
// emp.lastName = "XX";
// console.log(emp);
// document.write(emp);
// document.write(emp.salary);
// document.write("<br/>", person);
// console.log(person);
