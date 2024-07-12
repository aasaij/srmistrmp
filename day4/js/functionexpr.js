function createElement(user, message) {
  let parentElement = document.getElementsByTagName("div")[0];
  let childNode = document.createElement("h1");
  let textNode = document.createTextNode(`Good ${message} ${user}`);
  childNode.appendChild(textNode);
  parentElement.appendChild(childNode);
  return "Success!";
}
let user = "Testing";
//Function expression
let greet = function (user = "Aasaithambi", greetMessage = "Morning") {
  return createElement(user, greetMessage);
};

let greeting = greet;

// greet("Sivaprakasam", "Afternoon");
// document.write(greet());
greeting();
greet("Sivaprakasam");
