// const person = {
//   //properties
//   firstname: "Abinaya",
//   lastname: "A",
//   salary: 300000,
//   //Behaviours or methods
//   fullName: function () {
//     return this.firstname + " " + this.lastname;
//   },
// };

// const emp = {
//   "first name": "Anika",
//   lastName: "K",
//   salary: 400000,
// };

// delete emp.salary;
// emp["first name"] = emp["first name"].toUpperCase();

// console.log(person);
// console.log("lastName" in emp);

// console.log(person.firstname + " " + person.lastname);

// const p2 = person;
// const p2 = Object.assign({}, person); // clonning of person object
// p2.firstname = "Ayush";
// console.log(person.fullName());
// console.log(p2.fullName());

function Person(firstName, lastName, gender, salary) {
  this.firstName = firstName;
  this.lastname = lastName;
  this.gender = gender;
  this.salary = salary;
  this.fullName = function () {
    return this.firstName + " " + this.lastname;
  };
}

const p1 = new Person("Ayush", "Srivastawa", "Male", 500000);
const p2 = new Person("Bharath", "Lakshmanan", "Male", 600000);
const p3 = new Person("Jasmine", "Fathima", "Female", 700000);

console.log(p1);
console.log(p2);
console.log(p3);
