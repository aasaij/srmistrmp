// let user = "Admin"; //global variable

//Function declaration
// function greet() {
//   let user = "Saraswathi"; //local variable
//   user = "Saraswathi";
//   alert(`Good Morning ${user}!`);
// }
// function greet(user, greetMessage) {
//   //   greetMessage = greetMessage || "Morning";
//   //   greetMessage = greetMessage ?? "Morning"; // Coalecsing
//   if (greetMessage === null || greetMessage === undefined)
//     greetMessage = "Morning";

//   let elementString = `<h1> Good ${greetMessage} <span style='color:blue'>${user}</span></h1>`;
//   document.write(elementString);
// }
// function greet(user, greetMessage = "Morning") {
//   let elementString = `<h1> Good ${greetMessage} <span style='color:blue'>${user}</span></h1>`;
//   document.write(elementString);
// }
// function greet(user, greetMessage = "Morning") {
//   let parentElement = document.getElementById("d1");
//   let childNode = document.createElement("h1");
//   //   let childNode = document.createElement("input");
//   //   childNode.setAttribute("type", "text");
//   //   childNode.setAttribute("value", user);
//   let textNode = document.createTextNode(`Good Morning ${user}`);
//   childNode.appendChild(textNode);
//   parentElement.appendChild(childNode);
// }
function greet(user, greetMessage = "Morning") {
  let parentElement = document.getElementsByTagName("div")[0];
  let childNode = document.createElement("h1");
  let textNode = document.createTextNode(`Good ${greetMessage} ${user}`);
  childNode.appendChild(textNode);
  parentElement.appendChild(childNode);
}

//function calling
// greet();
const nameList = [
  "Anika",
  "Saraswathi",
  "Kaviya",
  "Priyanka",
  "Revanth",
  "Udhaya",
];

for (let name of nameList) greet(name, "Afternoon");
