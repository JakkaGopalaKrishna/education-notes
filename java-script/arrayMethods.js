// ===============================
// ARRAY SETUP
// ===============================
let arr = [10, 20, 30, 40, 50];
let arr2 = [1, 2, 3];

console.log("Original array:", arr);

// ===============================
// LENGTH
// ===============================
// syntax: array.length
console.log("\n--- length ---");
console.log(arr.length);
// Output: 5

// ===============================
// ACCESS ELEMENTS
// ===============================
// syntax: array[index]
console.log("\n--- access elements ---");
console.log(arr[0]); 
// Output: 10

console.log(arr[arr.length - 1]); 
// Output: 50

// ===============================
// PUSH (add at end)
// ===============================
// syntax: array.push(element)
console.log("\n--- push ---");
arr.push(60);
console.log(arr);
// Output: [10, 20, 30, 40, 50, 60]

// ===============================
// POP (remove from end)
// ===============================
// syntax: array.pop()
arr.pop();
console.log(arr);
// Output: [10, 20, 30, 40, 50]

// ===============================
// UNSHIFT (add at start)
// ===============================
// syntax: array.unshift(element)
arr.unshift(5);
console.log(arr);
// Output: [5, 10, 20, 30, 40, 50]

// ===============================
// SHIFT (remove from start)
// ===============================
// syntax: array.shift()
arr.shift();
console.log(arr);
// Output: [10, 20, 30, 40, 50]

// ===============================
// CONCAT (merge arrays)
// ===============================
// syntax: array.concat(otherArray)
console.log("\n--- concat ---");
let merged = arr.concat(arr2);
console.log(merged);
// Output: [10, 20, 30, 40, 50, 1, 2, 3]

// ===============================
// SLICE (non-destructive)
// ===============================
// syntax: array.slice(start, end)
console.log("\n--- slice ---");
console.log(arr.slice(1, 4));
// Output: [20, 30, 40]

console.log(arr);
// Output: [10, 20, 30, 40, 50]

// ===============================
// SPLICE (destructive)
// ===============================
// syntax: array.splice(start, deleteCount, item1, item2)
console.log("\n--- splice ---");
arr.splice(2, 1, 99);
console.log(arr);
// Output: [10, 20, 99, 40, 50]

// ===============================
// INDEXOF / LASTINDEXOF
// ===============================
// syntax: array.indexOf(value)
console.log("\n--- indexOf ---");
console.log(arr.indexOf(99));
// Output: 2

console.log(arr.indexOf(100));
// Output: -1

// ===============================
// INCLUDES
// ===============================
// syntax: array.includes(value)
console.log("\n--- includes ---");
console.log(arr.includes(40));
// Output: true

console.log(arr.includes(100));
// Output: false

// ===============================
// JOIN
// ===============================
// syntax: array.join(separator)
console.log("\n--- join ---");
console.log(arr.join("-"));
// Output: 10-20-99-40-50

// ===============================
// REVERSE
// ===============================
// syntax: array.reverse()
console.log("\n--- reverse ---");
arr.reverse();
console.log(arr);
// Output: [50, 40, 99, 20, 10]

// ===============================
// SORT
// ===============================
// syntax: array.sort()
console.log("\n--- sort ---");
let nums = [10, 5, 100, 1];
nums.sort((a, b) => a - b);
console.log(nums);
// Output: [1, 5, 10, 100]
nums.sort((a, b) => b - a);
console.log(nums);
// Output: [100, 10, 5, 1]

// ===============================
// FOREACH
// ===============================
// syntax: array.forEach(callback)
console.log("\n--- forEach ---");
arr.forEach(el => console.log(el));
// Output: each element printed

// ===============================
// MAP
// ===============================
// syntax: array.map(callback)
console.log("\n--- map ---");
let doubled = arr.map(x => x * 2);
console.log(doubled);
// Output: [100, 80, 198, 40, 20]

// ===============================
// FILTER
// ===============================
// syntax: array.filter(callback)
console.log("\n--- filter ---");
let greaterThan30 = arr.filter(x => x > 30);
console.log(greaterThan30);
// Output: [50, 40, 99]

// ===============================
// REDUCE
// ===============================
// syntax: array.reduce((acc, curr) => acc + curr, initialValue)
console.log("\n--- reduce ---");
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
// Output: 219

// ===============================
// FIND
// ===============================
// syntax: array.find(callback)
console.log("\n--- find ---");
console.log(arr.find(x => x > 30));
// Output: 50

// ===============================
// FINDINDEX
// ===============================
// syntax: array.findIndex(callback)
console.log("\n--- findIndex ---");
console.log(arr.findIndex(x => x === 99));
// Output: 2

// ===============================
// SOME
// ===============================
// syntax: array.some(callback)
console.log("\n--- some ---");
console.log(arr.some(x => x > 100));
// Output: false

// ===============================
// EVERY
// ===============================
// syntax: array.every(callback)
console.log("\n--- every ---");
console.log(arr.every(x => x > 0));
// Output: true

// ===============================
// FLAT
// ===============================
// syntax: array.flat(depth)
console.log("\n--- flat ---");
let nested = [1, [2, [3, 4]]];
console.log(nested.flat(2));
// Output: [1, 2, 3, 4]

// ===============================
// ARRAY DESTRUCTURING
// ===============================
// syntax: const [a, b] = array
console.log("\n--- destructuring ---");
const [first, second] = arr;
console.log(first, second);
// Output: 50 40

// ===============================
// SPREAD OPERATOR
// ===============================
// syntax: [...array]
console.log("\n--- spread ---");
let copy = [...arr];
console.log(copy);
// Output: copy of arr

// ===============================
// ARRAY ISARRAY
// ===============================
// syntax: Array.isArray(value)
console.log("\n--- Array.isArray ---");
console.log(Array.isArray(arr));
// Output: true

console.log(Array.isArray("abc"));
// Output: false
