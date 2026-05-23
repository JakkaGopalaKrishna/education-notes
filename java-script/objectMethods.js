// ==================================================
// OBJECT SETUP
// ==================================================
const user = {
  name: "Krishna",
  age: 23,
  city: "Hyderabad",
  skills: ["JS", "React"],
  address: {
    country: "India",
    pincode: 500001
  }
};

console.log("Original Object:", user);

// ==================================================
// 1️⃣ Object.keys()
// ==================================================
// syntax: Object.keys(object)
// returns an array of keys

console.log("\nObject.keys()");
console.log(Object.keys(user));
// Output: ["name", "age", "city", "skills", "address"]

// ==================================================
// 2️⃣ Object.values()
// ==================================================
// syntax: Object.values(object)
// returns an array of values

console.log("\nObject.values()");
console.log(Object.values(user));
// Output: ["Krishna", 23, "Hyderabad", [...], {...}]

// ==================================================
// 3️⃣ Object.entries()
// ==================================================
// syntax: Object.entries(object)
// returns array of [key, value] pairs

console.log("\nObject.entries()");
console.log(Object.entries(user));
// Output: [["name","Krishna"], ["age",23], ...]

// ==================================================
// 4️⃣ Object.fromEntries()
// ==================================================
// syntax: Object.fromEntries(array)
// converts entries back to object

const entries = [["a", 1], ["b", 2]];
console.log("\nObject.fromEntries()");
console.log(Object.fromEntries(entries));
// Output: { a: 1, b: 2 }

// ==================================================
// 5️⃣ Object.assign() (SHALLOW COPY / MERGE)
// ==================================================
// syntax: Object.assign(target, source)

const copy1 = Object.assign({}, user);
copy1.name = "Ravi";

console.log("\nObject.assign()");
console.log(copy1.name);   // Ravi
console.log(user.name);    // Krishna

// ⚠️ shallow copy
copy1.address.pincode = 111111;
console.log(user.address.pincode);
// Output: 111111 ❌ (nested affected)

// ==================================================
// 6️⃣ Spread Operator {...object} (SHALLOW COPY)
// ==================================================
// syntax: let copy = {...object}

const copy2 = { ...user };
copy2.city = "Bangalore";

console.log("\nSpread operator copy");
console.log(copy2.city);  // Bangalore
console.log(user.city);   // Hyderabad

// ==================================================
// 7️⃣ Object.freeze()
// ==================================================
// syntax: Object.freeze(object)
// prevents add/update/delete

const frozenObj = Object.freeze({ a: 1 });
frozenObj.a = 10;
console.log("\nObject.freeze()");
console.log(frozenObj.a);
// Output: 1

// ==================================================
// 8️⃣ Object.isFrozen()
// ==================================================
// syntax: Object.isFrozen(object)

console.log("\nObject.isFrozen()");
console.log(Object.isFrozen(frozenObj));
// Output: true

// ==================================================
// 9️⃣ Object.seal()
// ==================================================
// syntax: Object.seal(object)
// allows update, prevents add/delete

const sealedObj = { a: 1 };
Object.seal(sealedObj);

sealedObj.a = 5;
sealedObj.b = 10;

console.log("\nObject.seal()");
console.log(sealedObj);
// Output: { a: 5 }

// ==================================================
// 🔟 Object.isSealed()
// ==================================================
// syntax: Object.isSealed(object)

console.log("\nObject.isSealed()");
console.log(Object.isSealed(sealedObj));
// Output: true

// ==================================================
// 1️⃣1️⃣ Object.hasOwn()
// ==================================================
// syntax: Object.hasOwn(object, key)

console.log("\nObject.hasOwn()");
console.log(Object.hasOwn(user, "name")); // true
console.log(Object.hasOwn(user, "salary")); // false

// ==================================================
// 1️⃣2️⃣ hasOwnProperty()
// ==================================================
// syntax: object.hasOwnProperty(key)

console.log("\nhasOwnProperty()");
console.log(user.hasOwnProperty("age")); // true

// ==================================================
// 1️⃣3️⃣ delete operator
// ==================================================
// syntax: delete object.key

const temp = { x: 1, y: 2 };
delete temp.x;

console.log("\ndelete operator");
console.log(temp);
// Output: { y: 2 }

// ==================================================
// 1️⃣4️⃣ for...in loop
// ==================================================
// syntax: for (let key in object)

console.log("\nfor...in loop");
for (let key in user) {
  console.log(key, ":", user[key]);
}

// ==================================================
// 1️⃣5️⃣ JSON.stringify()
// ==================================================
// syntax: JSON.stringify(object)
// converts object to string

const jsonString = JSON.stringify(user);
console.log("\nJSON.stringify()");
console.log(jsonString);
// Output: '{"name":"Krishna","age":23,...}'

// ==================================================
// 1️⃣6️⃣ JSON.parse()
// ==================================================
// syntax: JSON.parse(string)
// converts string to object

const parsedObj = JSON.parse(jsonString);
console.log("\nJSON.parse()");
console.log(parsedObj.name);
// Output: Krishna

// ==================================================
// 1️⃣7️⃣ structuredClone() (DEEP COPY)
// ==================================================
// syntax: structuredClone(object)

const deepCopy = structuredClone(user);
deepCopy.address.pincode = 999999;

console.log("\nstructuredClone()");
console.log(user.address.pincode);
// Output: 111111 (unchanged)

// ==================================================
// 1️⃣8️⃣ Object.getOwnPropertyNames()
// ==================================================
// syntax: Object.getOwnPropertyNames(object)

console.log("\nObject.getOwnPropertyNames()");
console.log(Object.getOwnPropertyNames(user));
// Output: array of keys

// ==================================================
// 1️⃣9️⃣ Object.getPrototypeOf()
// ==================================================
// syntax: Object.getPrototypeOf(object)

console.log("\nObject.getPrototypeOf()");
console.log(Object.getPrototypeOf(user));
// Output: Object prototype

// ==================================================
// 2️⃣0️⃣ Object.setPrototypeOf()
// ==================================================
// syntax: Object.setPrototypeOf(obj, prototype)

const animal = { eats: true };
const dog = { name: "Tommy" };

Object.setPrototypeOf(dog, animal);
console.log("\nObject.setPrototypeOf()");
console.log(dog.eats);
// Output: true
