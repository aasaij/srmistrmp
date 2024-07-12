// function add(a, b) {
//   return a + b;
// }

// let <function_name> = (<parameter_list>) => {
//     <statements_to_be_executed>
// }
// let add = (x, y) => {
//   return x + y;
// };
// let add = (x, y) => x + y;

// let print = () => alert("Thank you ");

// let greet = (userName) => alert(`Good afternoon ${userName}`);
// let greet = userName => alert(`Good afternoon ${userName}`);
// let greet = (userName) => {
//   if (!(userName === undefined || userName === null || userName === ""))
//     alert(`Good afternoon ${userName}`);
// };

// console.log(add(1000, 200));
// print();
// greet("Abhinaya");
// greet("Vikas");

let greet = (userName) => userName && alert(`Good Afternoon ${userName}`);

greet("Sivaprakasam");

// Polyfills & Transpilers ==> Babel

// nullish coalescing operator =>  ??
