// ===================================
// 1️⃣ CREATE A NEW OBJECT USING {}
// ===================================
// syntax: let obj = { key: value };

let person = {
  name: "Krishna",
  age: 22,
  isDeveloper: true
};

console.log(person);
// Output: { name: 'Krishna', age: 22, isDeveloper: true }

// ===================================
// 2️⃣ ADD NEW KEYS TO THE OBJECT
// ===================================
// syntax: object.newKey = value
// syntax: object["newKey"] = value

person.city = "Hyderabad";
person["country"] = "India";

console.log(person);

// ===================================
// 3️⃣ REMOVE KEYS FROM THE OBJECT
// ===================================
// syntax: delete object.key

delete person.isDeveloper;

console.log(person);

// ===================================
// 4️⃣ UPDATE VALUE OF A KEY
// ===================================
// syntax: object.key = newValue

person.age = 23;

console.log(person);

// ===================================
// 5️⃣ USING DOT NOTATION
// ===================================
// syntax: object.key

console.log(person.name); 
// Output: Krishna

console.log(person.age);  
// Output: 23

// ===================================
// 6️⃣ USING BRACKET NOTATION
// ===================================
// syntax: object["key"]

console.log(person["city"]); 
// Output: Hyderabad

let dynamicKey = "country";
console.log(person[dynamicKey]); 
// Output: India

// ===================================
// 7️⃣ NESTED OBJECTS
// ===================================
let user = {
  id: 1,
  profile: {
    username: "jgk",
    details: {
      email: "jgk@gmail.com",
      phone: "9999999999"
    }
  }
};

// accessing nested values
console.log(user.profile.username);
// Output: jgk

console.log(user.profile.details.email);
// Output: jgk@gmail.com

// ===================================
// 8️⃣ UPDATE VALUE IN NESTED OBJECT
// ===================================
user.profile.details.phone = "8888888888";

console.log(user.profile.details.phone);

// ===================================
// 9️⃣ ARRAYS INSIDE OBJECTS
// ===================================
let student = {
  name: "Krishna",
  skills: ["HTML", "CSS", "JavaScript"]
};

// access array inside object
console.log(student.skills[1]);
// Output: CSS

// add value to array inside object
student.skills.push("React");

console.log(student.skills);

// ===================================
// 🔟 OBJECTS INSIDE ARRAYS
// ===================================
let users = [
  { id: 1, name: "Krishna" },
  { id: 2, name: "Ravi" }
];

console.log(users[1].name);
// Output: Ravi

// ===================================
// 1️⃣1️⃣ ITERATE OVER OBJECT USING for..in
// ===================================
// syntax: for (let key in object)

for (let key in person) {
  console.log(key, ":", person[key]);
}

// ===================================
// 1️⃣2️⃣ HANDLE NESTED OBJECTS WITH LOOPS
// ===================================
for (let key in user.profile.details) {
  console.log(key, user.profile.details[key]);
}

// ===================================
// 1️⃣3️⃣ PASS OBJECT AS PARAMETER
// ===================================
function printUser(obj) {
  console.log(obj.name, obj.age);
}

printUser(person);
// Output: Krishna 23

// ===================================
// 1️⃣4️⃣ RETURN OBJECT FROM FUNCTION
// ===================================
function createCar(brand, year) {
  return {
    brand: brand,
    year: year
  };
}

console.log(createCar("Tesla", 2024));

// ===================================
// 1️⃣5️⃣ RETURN ONLY SELECT INFO FROM OBJECT
// ===================================
function getUserNameAndCity(obj) {
  return {
    name: obj.name,
    city: obj.city
  };
}

console.log(getUserNameAndCity(person));
// Output: { name: 'Krishna', city: 'Hyderabad' }

// ===================================
// 1️⃣6️⃣ CLONE OBJECT USING SPREAD (SHALLOW COPY)
// ===================================
// syntax: let copy = { ...object }

let originalObj = {
  a: 1,
  b: { c: 2 }
};

let shallowCopy = { ...originalObj };

shallowCopy.b.c = 99;

console.log(originalObj.b.c);
// Output: 99 ❌ (nested affected)

// ===================================
// 1️⃣7️⃣ DEEP COPY OF OBJECT
// ===================================

// JSON methodx
let deepCopy = JSON.parse(JSON.stringify(originalObj));
deepCopy.b.c = 100;

console.log(originalObj.b.c);
// Output: 99 ✅ (no change)

// Best modern method
let deepCopy2 = structuredClone(originalObj);

// ===================================
// 1️⃣8️⃣ CHECK IF KEY EXISTS
// ===================================
// syntax: "key" in object

console.log("name" in person);
// Output: true

console.log("salary" in person);
// Output: false
