// ===============================
// STRING SETUP
// ===============================
let str = "Hello World";
let str2 = "  JavaScript is Awesome  ";

console.log("Original string:", str);
console.log("Original string 2:", str2);

// ===============================
// LENGTH
// ===============================
console.log("\n--- length ---");
console.log(str.length); 
// Output: 11

// ===============================
// CASE CONVERSION
// ===============================
console.log("\n--- toUpperCase / toLowerCase ---");
console.log(str.toUpperCase()); 
// Output: HELLO WORLD

console.log(str.toLowerCase()); 
// Output: hello world

// ===============================
// CHARACTER ACCESS
// ===============================
console.log("\n--- charAt / index access ---");
console.log(str.charAt(1)); 
// Output: e

console.log(str[4]); 
// Output: o

// ===============================
// ASCII VALUES
// ===============================
console.log("\n--- charCodeAt (ASCII) ---");
console.log("A".charCodeAt(0)); 
// Output: 65

console.log("a".charCodeAt(0)); 
// Output: 97

console.log(String.fromCharCode(72)); 
// Output: H

// ===============================
// SEARCHING
// ===============================
console.log("\n--- indexOf / lastIndexOf ---");
console.log(str.indexOf("o")); 
// Output: 4

console.log(str.lastIndexOf("o")); 
// Output: 7

console.log(str.indexOf("x")); 
// Output: -1

// ===============================
// CHECKING EXISTENCE
// ===============================
console.log("\n--- includes / startsWith / endsWith ---");
console.log(str.includes("World")); 
// Output: true

console.log(str.startsWith("Hello")); 
// Output: true

console.log(str.endsWith("World")); 
// Output: true

// ===============================
// EXTRACTING PART OF STRING
// ===============================
console.log("\n--- slice / substring / substr ---");
console.log(str.slice(0, 5)); 
// Output: Hello

console.log(str.slice(-5)); 
// Output: World

console.log(str.substring(0, 5)); 
// Output: Hello

console.log(str.substr(6, 5)); 
// Output: World

// ===============================
// REPLACING
// ===============================
console.log("\n--- replace / replaceAll ---");
console.log(str.replace("World", "JS")); 
// Output: Hello JS

console.log("aaa".replaceAll("a", "b")); 
// Output: bbb

// ===============================
// TRIMMING
// ===============================
console.log("\n--- trim / trimStart / trimEnd ---");
console.log(str2.trim()); 
// Output: JavaScript is Awesome

console.log(str2.trimStart()); 
// Output: JavaScript is Awesome  

console.log(str2.trimEnd()); 
// Output:   JavaScript is Awesome

// ===============================
// SPLIT & JOIN
// ===============================
console.log("\n--- split / join ---");
let words = str.split(" ");
console.log(words); 
// Output: [ 'Hello', 'World' ]

console.log(words.join("-")); 
// Output: Hello-World

// ===============================
// REPEAT
// ===============================
console.log("\n--- repeat ---");
console.log("Hi ".repeat(3)); 
// Output: Hi Hi Hi 

// ===============================
// STRING COMPARISON
// ===============================
console.log("\n--- localeCompare ---");
console.log("a".localeCompare("b")); 
// Output: -1

console.log("b".localeCompare("a")); 
// Output: 1

console.log("a".localeCompare("a")); 
// Output: 0

// ===============================
// MATCHING (REGEX)
// ===============================
console.log("\n--- match (regex) ---");
console.log("abc123".match(/[0-9]/g)); 
// Output: [ '1', '2', '3' ]

// ===============================
// TEMPLATE LITERALS
// ===============================
console.log("\n--- template literals ---");
let name = "Krishna";
let age = 22;
console.log(`My name is ${name} and I am ${age} years old.`);
// Output: My name is Krishna and I am 22 years old.

// ===============================
// STRING IMMUTABILITY
// ===============================
console.log("\n--- immutability ---");
let test = "hello";
test[0] = "H";
console.log(test); 
// Output: hello (strings are immutable)

// ===============================
// ITERATING OVER STRING
// ===============================
console.log("\n--- iterate characters ---");
for (let ch of "JS") {
  console.log(ch);
}
// Output:
// J
// S
