console.log("hello world");
var http = require("http");
http
  .createServer(function (req, res) {
    res.write("hello world");
    res.end();
  })
  .listen(8080);

var s = "strings".match(/gs/);
var a = /s/.test("string");

console.log(s);
console.log(a);
var k = 10;
function f() {
  // let k=20;
  console.log(k);
}
f();
const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit, index, arr) => {
  console.log(`${index}: ${fruit} in array ${arr}`);
});

// Output:
// 0: apple in array [ 'apple', 'banana', 'cherry' ]
// 1: banana
// 2: cherry

console.log(varVariable); // Output: undefined
var varVariable = "I am a var variable";

let letVariable1;
console.log(letVariable1); // Output: undefined

// console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization
let letVariable = "I am a let variable";

// console.log(constVariable); // ReferenceError: Cannot access 'constVariable' before initialization
const constVariable = "I am a const variable";

/**
 * New file - about the Destructuring
 */
// 1. Object Destructuring
const user = {
  userName: "Krishna",
  age: 22,
  city: "Bangalore",
};

const { userName, age } = user;

console.log(userName);
console.log(age);

// 2. Array Destructuring
const colors = ["red", "green", "blue"];

const [first, second] = colors;

console.log(first);
console.log(second);

// 3. Renaming Variables
const manager = {
  name: "Krishna",
  age: 52,
};

const { name: managerName, age: managerAge } = manager;

console.log(managerName);
console.log(managerAge);

// 4. Default Values
const employee = {
  employeeName: "Krishna",
};

const { employeeName, employeeAge = 30 } = employee;

console.log(employeeName);
console.log(employeeAge);

// 5. Nested Object Destructuring
const company = {
  name: "MountBlue",
  address: {
    city: "Bangalore",
    country: "India",
  },
};

const {
  address: { city },
} = company;

console.log(city);
