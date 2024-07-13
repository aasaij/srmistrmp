// function print(data) {
//   document.write(data, "<br/>");
// }
// const list = [1, 2, 3, "Siva", "Aasai", "Harsha", false];
// list.push("Guna");

// list.forEach(print);
// list.forEach((data) => print(data));
// list.forEach((data) => document.write(data, "<br/>"));
// document.write("Removed element : ", list.pop());
// document.write("<br/>Remaining elements : ", list);

// document.write("Removed element : ", list.shift());
// document.write("<br/>Remaining elements : ", list);
// list.unshift("Anika");
// document.write("<br/>Remaining elements : ", list);
// delete list[list.indexOf("Aasai")];
// document.write("<br/>Remaining elements : ", list);
// document.write("<br/>", list.includes("siva"));
// list.splice(1, 2);
// document.write("<br/>Remaining elements : ", list);
// list.splice(2, 1);
// const list1 = list.slice(1, 3);
// document.write("<br/>", list1);
// function square(data) {
//   return data * data; // return Math.pow(data, 2)
// }
// function isOdd(data) {
//   return data % 2 == 1;
// }
// const list1 = [1, 2, 3];
// const list2 = [5, 6, 7];
// const list3 = list1.concat(list2);
// console.log(list3);
// console.log(list1);
// const list4 = [...list1, 4, ...list2, 8, 9, 10];
// console.log(list4);

// const list5 = list4.map(square);
// const list5 = list4.map((data) => Math.pow(data, 2));
// console.log(list5);
// const list6 = list5.filter(isOdd); // [1, 4, 9,16,25] [true, false, true, false, true]
// console.log(list6);
// const list7 = list5.filter((data) => data % 2 == 0);
// console.log(list7);
// list7.reverse();
// console.log(list7);
// function comparatorAsc(x, y) {
//   return x - y;
// }
// function comparatorDesc(x, y) {
//   return y - x;
// }
function sum(x, y) {
  console.log(x, y);
  return x + y;
}

const nameList = ["Vikas", "Harsha", "Anika", "Priyanka", "Guna", "Siva"];
nameList.sort();
console.log(nameList);
const numList = [10, 44, 55, 22, 3, 5, 6, 7743, 123];
// numList.sort(comparatorAsc);
// console.log(numList);
// numList.sort(comparatorDesc);
// console.log(numList);
// numList.sort((x, y) => x - y);
// console.log(numList);
// console.log(numList.reduce(sum));

// console.log(numList.reduce((a, b) => a + b));
// console.log(numList.join(" - "));
// console.log(typeof numList);
// const s = {};
// console.log(typeof s);
// console.log(Array.isArray(numList));
// console.log(s instanceof Array);
// console.log(numList instanceof Array);

const empList = [
  {
    name: "Siva",
    salary: 2000000,
  },
  {
    name: "Anika",
    salary: 300000,
  },
  {
    name: "Guna",
    salary: 400000,
  },
];
empList.sort((emp1, emp2) => emp2.salary - emp1.salary);
console.log(empList);
