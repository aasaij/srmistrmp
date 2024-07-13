// const person = {
//   firstName: "Lalitha",
//   lastName: "R",
//   salary: 500000,
//   address: {
//     street: "MG Road",
//     city: "Bangalore",
//   },
//   jobDescription: "Software Engineer",
// };

// document.write(person);
// const json = JSON.stringify(person);
// document.write("<br/>", json);

const employees =
  "[" +
  ' { "firstName" : "A", "lastName":"A", "salary" : 1 }, ' +
  '{"firstName" : "B", "lastName" : "B", "salary": 2 } ]';
document.write(employees);

const emps = JSON.parse(employees);

emps[0].firstName = "Aasaithambi";
emps[0].lastName = "Jay";
console.log(emps);
