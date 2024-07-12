function changeColor() {
  var element = document.getElementById("d1");
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  element.style.backgroundColor = `rgb(${red},${green}, ${blue})`;
}

let parentElement = document.getElementById("parent");
let childElement = document.getElementById("child");
let x = 0,
  y = 0;

function changeBoxColor() {
  var element = document.getElementById("child");
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  element.style.backgroundColor = `rgb(${red},${green}, ${blue})`;
}

function moveLeft() {
  if (x != 0) {
    changeBoxColor();
    x -= 5;
    childElement.style.marginLeft = `${--x}px`;
  }
}
function moveRight() {
  if (x != 450) {
    changeBoxColor();
    x += 5;
    childElement.style.marginLeft = `${x}px`;
  }
}
function moveDown() {
  if (y != 450) {
    changeBoxColor();
    y += 5;
    childElement.style.marginTop = `${y}px`;
  }
}
function moveUp() {
  if (y != 0) {
    changeBoxColor();
    y -= 5;
    childElement.style.marginTop = `${y}px`;
  }
}
let timerId;
function start() {
  timerId = setInterval(move, 5);
}
function stop() {
  clearInterval(timerId);
}

function move() {
  x >= 0 && x < 450 && y == 0 && moveRight();
  x == 450 && y >= 0 && y < 450 && moveDown();
  y == 450 && x <= 450 && x > 0 && moveLeft();
  x == 0 && y <= 450 && y > 0 && moveUp();
}
