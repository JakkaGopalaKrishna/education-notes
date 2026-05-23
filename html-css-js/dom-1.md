# Step 1 — DOM Basics

## 1️⃣ What is DOM?

> The **Document Object Model (DOM)** is a programming interface for HTML documents that represents the webpage as a tree of objects. It allows JavaScript to access, modify, and manipulate the structure, content, and styles of the webpage dynamically.

1. DOM allows **JavaScript to control HTML**.

2. Without DOM, JavaScript **cannot:**

   * Change text
   * Change styles
   * Add elements
   * Remove elements
   * Respond to user actions

---

# 2️⃣ How DOM is Created

When a browser loads a webpage:

1. Browser reads the **HTML file**
2. Converts HTML into **DOM objects**
3. Creates a **DOM Tree**
4. JavaScript can access those objects

---

### Example HTML

```html
<html>
  <body>
    <h1>Hello</h1>
    <p>Welcome</p>
  </body>
</html>
```

### DOM Tree

```
Document
   |
  html
   |
  body
  /   \
h1     p
```

Each element becomes a **Node (Object)**.

---

# 3️⃣ DOM Node Types

Common DOM nodes:

| Node Type | Example                |
| --------- | ---------------------- |
| Document  | entire webpage         |
| Element   | `<div>`, `<p>`, `<h1>` |
| Attribute | `id`, `class`          |
| Text      | text inside elements   |

Example:

```html
<h1 id="title">Hello</h1>
```

Nodes:

```
Element Node → h1
Attribute Node → id
Text Node → Hello
```

---

# 4️⃣ The `document` Object

The **document object** represents the **entire webpage**.

JavaScript uses `document` to access HTML elements.

Example:

```javascript
console.log(document);
```

### Output

Shows the **complete HTML structure** in the console.

Example:

```
#document
<html>
<head>
<body>
```

---

# 5️⃣ Important `document` Properties

```javascript

//Get Page Title
console.log(document.title);  // Output: My Website

//Change Page Title
document.title = "New Title"; // Browser tab title will change.

// Get Entire HTML
console.log(document.documentElement);  // Output: <html> ... </html>

// Get Head
console.log(document.head); // Output: <head>...</head>

// Get Body
console.log(document.body); // Output: <body>...</body>

// Accessing Page URL
console.log(document.URL) // Output: http://localhost:5500/index.html
```

---

# 6️⃣ Difference Between HTML & DOM
  
| Feature   | HTML (HyperText Markup Language) | DOM (Document Object Model) |
| --------- | -------------------------------- | --------------------------- |
| Nature    | Static text/source code.  | Live, object-oriented model in memory.|
| Persistence | Permanent until the file is edited. | Temporary; exists only while the page is loaded. |
| Interactivity | Cannot respond to user input on its own. | Can be updated in real-time via JavaScript. |
| Structure | Defined by tags (e.g., `<div>, <p>`). | Composed of a tree of **nodes**.|

---
---

| HTML      | Dom                    |
| --------- | ---------------------- |
| Static structure written by developer.  | Browser converts HTML into **objects**.   |
| `<h1>Hello</h1>`   | `{tagName: "H1",textContent: "Hello"}` |

* JavaScript interacts with **DOM objects**, not raw HTML.
---

# 7️⃣ Simple Example

### HTML

```html
<h1 id="title">Hello</h1>
```

### JavaScript

```javascript
let element = document.getElementById("title");

console.log(element); //Output: <h1 id="title">Hello</h1>
```
Now JavaScript can **modify it**.

---

# 8️⃣ DOM vs BOM

| Feature  | DOM                       | BOM                  |
| -------- | ------------------------- | -------------------- |
| Meaning  | Document Object Model     | Browser Object Model |
| Controls | HTML page                 | Browser window       |
| Example  | document.getElementById() | window.innerWidth    |

Example BOM:

```javascript
console.log(window.innerWidth);
```

---


# 9️⃣ Key Points to Remember

✔ DOM is created by the browser  
✔ DOM converts HTML into objects  
✔ JavaScript interacts with DOM objects  
✔ DOM structure is a **tree**

---
---

# Step 2 — Selecting Elements in DOM

Selecting elements is the **most important DOM skill**, because before modifying anything you must **access the element first**.

---

# 1️⃣ `getElementById()`

**Definition :**  Selects an element using its **id attribute**.

### Syntax

```javascript
document.getElementById("id_name")
```

### Example
```HTML
<!-- HTML -->
<h1 id="title">Hello DOM</h1>
<script>
   // JavaScript
   let element = document.getElementById("title");
   console.log(element);  // Output: <h1 id="title">Hello DOM</h1>

   //Access text
   console.log(element.textContent); // Output: Hello DOM
</script>
```

---

# 2️⃣ `getElementsByClassName()`

**Definition :** Selects elements using **class name**.

### Syntax

```javascript
document.getElementsByClassName("class_name"); //All elements
document.getElementsByClassName("class_name")[index]; //single element
```

### Example
```HTML
<!-- // HTML -->
<div class="box">Box1</div>
<div class="box">Box2</div>
<div class="box">Box3</div>

<script>
   // JavaScript
   let boxes = document.getElementsByClassName("box");
   console.log(boxes); //Output: HTMLCollection(3)

   // Access individual element
   console.log(boxes[0]);  //Output: <div class="box">Box1</div>
   console.log(boxes[1]);  //Output: <div class="box">Box2</div>
</script>
```

---

# 3️⃣ `getElementsByTagName()`

**Definition :** Selects elements using **HTML tag name**.

### Syntax

```javascript
document.getElementsByTagName("tag_name"); //All Tags
document.getElementsByTagName("tag_name")[index]; //single Tag
```

### Example
```HTML
<!-- HTML -->
<p>Paragraph 1</p>
<p>Paragraph 2</p>
<script>
   //JavaScript
   let paragraphs = document.getElementsByTagName("p");
   console.log(paragraphs); //Output: HTMLCollection(2)

   // Access individual element
   console.log(paragraphs[0]);  //Output: <p>Paragraph 1</p>
   console.log(paragraphs[1]);  //Output: <p>Paragraph 2</p>
</script>
```
---

# 4️⃣ `querySelector()`

**Definition :** Selects the **first matching element** using CSS selector.

### Syntax

```javascript
document.querySelector("css_selector");
```

### Example

```HTML
<!-- HTML -->
<div class="box">Box1</div>
<div class="box">Box2</div>
<script>
   // JavaScript
   let box = document.querySelector(".box");
   console.log(box); //Output :  <div class="box">Box1</div>

   // Other examples

   // Select ID
   document.querySelector("#title")
   //Select tag
   document.querySelector("p")
</script>
```

---

# 5️⃣ `querySelectorAll()`

**Definition :** Selects **all matching elements**.

### Syntax

```javascript
document.querySelectorAll("css_selector")
```

### Example
```HTML
<!-- // HTML -->
<li>Item1</li>
<li>Item2</li>
<li>Item3</li>

<script>
   // JavaScript
   let items = document.querySelectorAll("li");
   console.log(items); //Output :  NodeList(3)

   ---

   //Access element

   console.log(items[1]);  //Output: <li>Item2</li>
</script>
```

---

# 6️⃣ Loop Through Elements

Example

```javascript
let boxes = document.querySelectorAll(".box");

boxes.forEach(function(box){
    console.log(box.textContent);
});
```

Output

```
Box1
Box2
Box3
```

---

# 7️⃣ HTMLCollection vs NodeList

| Feature         | HTMLCollection         | NodeList         |
| --------------- | ---------------------- | ---------------- |
| Returned by     | getElementsByClassName | querySelectorAll |
| Contents | Only HTML Elements | All Nodes(elements, text, comments)|
| Liveness | Always Live (updates automatically)| Can be Live or Static |
| Access | By index, id, or name attribute | By index only |
| Methods | `item(), namedItem()` | `item(), forEach(), entries(), keys(), values()` |
| Live collection | Yes                    | No               |



**Example**
```javascript
let boxes = document.getElementsByClassName("box");
const nodeList = document.querySelectorAll('#parent p');
```

Live update happens automatically.

---

# 8️⃣ Selecting Nested Elements

Example HTML

```html
<div class="container">
   <p>Hello</p>
</div>
```

JavaScript

```javascript
let container = document.querySelector(".container");

let paragraph = container.querySelector("p");

console.log(paragraph); // Output: <p>Hello</p>
```
 

---

# 9️⃣ Selecting Multiple Classes

Example

```HTML
<div id="container">
    <div class="box red active">Box 1 (Red & Active)</div>
    <div class="box red">Box 2 (Red only)</div>
    <div class="box active">Box 3 (Active only)</div>
</div>
<script>
   // 1. AND Logic: Select elements that have BOTH "red" AND "active"
   const bothClasses = document.querySelectorAll(".red.active");

   // 2. OR Logic: Select elements that have EITHER "red" OR "active"
   const eitherClass = document.querySelectorAll(".red, .active");

   // 3. AND Logic: Using getElementsByClassName (Live HTMLCollection)
   const liveCollection = document.getElementsByClassName("red active");

   // Console Outputs
   console.log("Both (red AND active):", bothClasses.length); // 1
   console.log("Either (red OR active):", eitherClass.length); // 2
   console.log("Live Collection length:", liveCollection.length); // 1
</script>
```

Selects element with **both classes**.

---
---

# Step 3 — DOM Content Manipulation

After selecting elements, the next step is **changing or reading the content inside elements**.

The **three most important properties** are:

```javascript
innerHTML
innerText
textContent
```

These are **very common interview questions**.

---

# 1️⃣ `textContent`

**Definition :** `textContent` gets or sets the **text inside an element**, including hidden text.

### Syntax

```javascript
element.textContent
```

---

### Example
```html
<!-- HTML -->
<h1 id="title">Hello World</h1>
<script>
   // JavaScript
   let title = document.getElementById("title");
   console.log(title.textContent); // Output:Hello World
   ---

   // Change text
   title.textContent = "Learning DOM"; // Result: <h1 id="title">Learning DOM</h1>
</script>
```

---

# 2️⃣ `innerText`

**Definition :** Returns **only the visible text** inside an element.

### Syntax

```javascript
element.innerText
```

---

### Example
```html
<!-- HTML -->
<p id="demo">
Hello
<span style="display:none">Hidden</span>
</p>
<script>
   // JavaScript

   let demo = document.getElementById("demo");
   console.log(demo.innerText);  // Output:  Hello
</script>
```

Hidden text is **not included**.

---

# 3️⃣ `innerHTML`

**Definition :** Gets or sets **HTML content inside an element**.

### Syntax

```javascript
element.innerHTML
```

---

### Example
```js
// HTML
<div id="box"></div>

// JavaScript
let box = document.getElementById("box");
box.innerHTML = "<h2>Hello DOM</h2>";
// Result
// <div id="box">
//   <h2>Hello DOM</h2>
// </div>
```

The HTML **is parsed and rendered**.

---

# 4️⃣ Example Comparing All Three

HTML

```html
<div id="example">
Hello
<span style="display:none">Hidden</span>
</div>
```

JavaScript

```javascript
let element = document.getElementById("example");

console.log(element.innerText); //Output: Hello

console.log(element.textContent); //Output: Hello Hidden

console.log(element.innerHTML);

//Output: innerHTML
Hello
<span style="display:none">Hidden</span>
```

---

# 5️⃣ Quick Comparison Table

| Property    | Includes Hidden Text | Includes HTML | Use Case       |
| ----------- | -------------------- | ------------- | -------------- |
| innerText   | ❌ No                 | ❌ No          | visible text   |
| textContent | ✅ Yes                | ❌ No          | raw text       |
| innerHTML   | ✅ Yes                | ✅ Yes         | HTML structure |

---

# 6️⃣ Add Multiple Elements Using `innerHTML`

Example

```javascript
let list = document.getElementById("list");

list.innerHTML = `
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
`;
```

Result

```html
<ul id="list">
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
</ul>
```

---
---

# Step 4 — Changing Styles Using DOM

After selecting elements and changing content, the next step is **modifying CSS styles using JavaScript**.

This allows **dynamic styling** of elements.

---

# 1️⃣ `element.style`

## Definition

The `style` property allows JavaScript to **change CSS properties directly on an element**.

### Syntax

```javascript
element.style.property = "value"
```

Example:

```javascript
element.style.color = "red"
```

---

# 2️⃣ Basic Example

### HTML

```html
<h1 id="title">Hello DOM</h1>
```

### JavaScript

```javascript
let title = document.getElementById("title");

title.style.color = "blue";
title.style.fontSize = "40px";
title.style.backgroundColor = "yellow";
```

### Result

The `<h1>` will appear:

* Blue text
* Font size 40px
* Yellow background

---

# 3️⃣ CSS Property Naming Rule

CSS properties with **hyphens** become **camelCase in JavaScript**.

| CSS              | JavaScript      |
| ---------------- | --------------- |
| background-color | backgroundColor |
| font-size        | fontSize        |
| margin-top       | marginTop       |
| border-radius    | borderRadius    |

Example:

```javascript
element.style.backgroundColor = "red"
```

---

# 4️⃣ Multiple Styles Example

### HTML

```html
<div id="box">Box</div>
```

### JavaScript

```javascript
let box = document.getElementById("box");

box.style.width = "200px";
box.style.height = "200px";
box.style.backgroundColor = "green";
box.style.color = "white";
box.style.textAlign = "center";
box.style.lineHeight = "200px";
```

### Output

Creates a **green square box with centered text**.

---

# 5️⃣ Changing Styles with Button

### HTML

```html
<button id="btn">Change Color</button>

<div id="box">Color Box</div>
```

### JavaScript

```javascript
let btn = document.getElementById("btn");
let box = document.getElementById("box");

btn.addEventListener("click", function(){

    box.style.backgroundColor = "purple";

});
```

### Output

Click button → box color changes.

---

# 6️⃣ Toggle Style Example

### JavaScript

```javascript
let box = document.getElementById("box");

function changeColor(){

    if(box.style.backgroundColor === "red"){
        box.style.backgroundColor = "blue";
    }else{
        box.style.backgroundColor = "red";
    }

}
```

This **switches between two colors**.

---

# 7️⃣ Getting Current Style

We can also **read styles**.

Example:

```javascript
let box = document.getElementById("box");

console.log(box.style.backgroundColor);
```

But this only works if style is set **inline**.

---

# 8️⃣ `getComputedStyle()`

Used to read **actual applied CSS styles**.

Example

```javascript
let box = document.getElementById("box");

let style = getComputedStyle(box);

console.log(style.backgroundColor);
```

Output

```
rgb(0, 128, 0)
```

---

# 9️⃣ Best Practice (Important)

Instead of changing many styles in JS, it is **better to change classes**.

Example:

CSS

```css
.active{
    background:red;
    color:white;
}
```

JavaScript

```javascript
box.classList.add("active");
```

This is **cleaner and scalable**.

---
# What You Learned

You can now change styles using:

```
element.style
getComputedStyle()
classList
```

---
---

# Step 5 — Class Manipulation in DOM

Instead of changing many styles using `element.style`, developers usually **add or remove CSS classes using JavaScript**.

This keeps code **clean and maintainable**.

JavaScript provides the **`classList` API** for this.

---

# 1️⃣ What is `classList`?

**Definition**

> `classList` is a DOM property that allows JavaScript to add, remove, toggle, and check CSS classes on an element.

### Syntax

```javascript
element.classList.method()
```

---

# 2️⃣ `classList.add()`

### Purpose

Adds a **CSS class** to an element.

### Syntax

```javascript
element.classList.add("className")
```

---

### Example

HTML

```html
<div id="box">Box</div>
```

CSS

```css
.active{
   background-color: green;
   color:white;
   padding:20px;
}
```

JavaScript

```javascript
let box = document.getElementById("box");

box.classList.add("active");
```

### Result

```html
<div id="box" class="active">Box</div>
```

---

# 3️⃣ `classList.remove()`

### Purpose

Removes a class from an element.

### Syntax

```javascript
element.classList.remove("className")
```

---

### Example

```javascript
box.classList.remove("active");
```

Result

```html
<div id="box">Box</div>
```

---

# 4️⃣ `classList.toggle()`

### Purpose

Adds class **if it doesn't exist**
Removes class **if it exists**

### Syntax

```javascript
element.classList.toggle("className")
```

---

### Example

HTML

```html
<button id="btn">Toggle</button>
<div id="box">Box</div>
```

JavaScript

```javascript
let btn = document.getElementById("btn");
let box = document.getElementById("box");

btn.addEventListener("click", () => {

box.classList.toggle("active");

});
```

### Behavior

Click 1 → class added
Click 2 → class removed
Click 3 → class added

---

# 5️⃣ `classList.contains()`

### Purpose

Checks if a class exists.

### Syntax

```javascript
element.classList.contains("className")
```

---

### Example

```javascript
if(box.classList.contains("active")){
console.log("Class exists");
}
```

Output

```
Class exists
```

---

# 6️⃣ `classList.replace()`

### Purpose

Replace one class with another.

### Syntax

```javascript
element.classList.replace("oldClass","newClass")
```

---

### Example

```javascript
box.classList.replace("active","inactive");
```

---

# 7️⃣ Adding Multiple Classes

```javascript
element.classList.add("box","card","shadow");
```

---

# 8️⃣ Removing Multiple Classes

```javascript
element.classList.remove("box","card");
```

---

# 9️⃣ Real Example (Dark Mode Toggle)

HTML

```html
<button id="themeBtn">Toggle Theme</button>

<div id="container">Content</div>
```

CSS

```css
.dark{
background:black;
color:white;
}
```

JavaScript

```javascript
let btn = document.getElementById("themeBtn");
let container = document.getElementById("container");

btn.addEventListener("click", () => {

container.classList.toggle("dark");

});
```

Click button → **dark mode activated**.

---

# 🔟 Difference: `className` vs `classList`

### className

```javascript
element.className = "box";
```

This **overwrites all classes**.

---

### classList

```javascript
element.classList.add("box");
```

This **adds class without removing existing ones**.

---

# 1️⃣1️⃣ Getting All Classes

```javascript
console.log(element.classList);
```

Output

```
DOMTokenList ["box", "active"]
```

---
---
# Step 6 — Creating & Removing Elements in DOM

Now we learn **dynamic DOM manipulation**, which means **creating, inserting, and deleting elements using JavaScript**.

This is used in:

* Todo apps
* Chat apps
* Comment systems
* Dynamic lists
* React/Vue internal operations

---

# 1️⃣ `document.createElement()`

## Definition

Creates a **new HTML element**.

### Syntax

```javascript
document.createElement("tagName")
```

---

### Example

```javascript
let div = document.createElement("div");

console.log(div);
```

Output

```html
<div></div>
```

The element is created **in memory**, not yet in the page.

---

# 2️⃣ Adding Content to New Element

Example

```javascript
let div = document.createElement("div");

div.textContent = "Hello DOM";

console.log(div);
```

Output

```html
<div>Hello DOM</div>
```

---

# 3️⃣ `appendChild()`

## Definition

Adds an element **inside another element (as last child)**.

### Syntax

```javascript
parent.appendChild(child)
```

---

### Example

HTML

```html
<body>
</body>
```

JavaScript

```javascript
let div = document.createElement("div");

div.textContent = "New Element";

document.body.appendChild(div);
```

Output

```html
<body>
<div>New Element</div>
</body>
```

---

# 4️⃣ `append()`

## Definition

Adds elements or text inside a parent.

### Syntax

```javascript
parent.append(element)
```

---

### Example

```javascript
let div = document.createElement("div");

div.textContent = "Hello";

document.body.append(div);
```

---

# Difference

| Method      | Accepts      | Returns         |
| ----------- | ------------ | --------------- |
| appendChild | Node only    | returns node    |
| append      | Node or text | returns nothing |

---

# 5️⃣ `prepend()`

Adds element **at the beginning of parent**.

Example

```javascript
let div = document.createElement("div");

div.textContent = "First Element";

document.body.prepend(div);
```

Result

```html
<body>
<div>First Element</div>
</body>
```

---

# 6️⃣ `insertBefore()`

Insert element **before another element**.

### Syntax

```javascript
parent.insertBefore(newElement, referenceElement)
```

---

### Example

HTML

```html
<ul id="list">
<li>Item 2</li>
</ul>
```

JavaScript

```javascript
let list = document.getElementById("list");

let newItem = document.createElement("li");

newItem.textContent = "Item 1";

list.insertBefore(newItem, list.firstChild);
```

Output

```html
<ul>
<li>Item 1</li>
<li>Item 2</li>
</ul>
```

---

# 7️⃣ Removing Elements

## `remove()`

Removes an element directly.

### Syntax

```javascript
element.remove()
```

---

### Example

HTML

```html
<div id="box">Remove Me</div>
```

JavaScript

```javascript
let box = document.getElementById("box");

box.remove();
```

Result

Element disappears.

---

# 8️⃣ `removeChild()`

Removes child from parent.

### Syntax

```javascript
parent.removeChild(child)
```

---

### Example

HTML

```html
<ul id="list">
<li id="item1">Item1</li>
</ul>
```

JavaScript

```javascript
let list = document.getElementById("list");
let item = document.getElementById("item1");

list.removeChild(item);
```

---

# 9️⃣ Real Example — Add List Item

HTML

```html
<input id="task">
<button id="addBtn">Add</button>

<ul id="list"></ul>
```

JavaScript

```javascript
let btn = document.getElementById("addBtn");
let input = document.getElementById("task");
let list = document.getElementById("list");

btn.addEventListener("click", () => {

let li = document.createElement("li");

li.textContent = input.value;

list.appendChild(li);

});
```

Output

User types → item added to list.

---

# 🔟 Real Example — Remove Item

```javascript
li.addEventListener("click", () => {

li.remove();

});
```

Click item → it disappears.

---

# 1️⃣1️⃣ Creating Complex Elements

Example

```javascript
let card = document.createElement("div");

let title = document.createElement("h2");

title.textContent = "Product";

card.appendChild(title);

document.body.appendChild(card);
```

Output

```html
<div>
<h2>Product</h2>
</div>
```

---

# What You Learned

You can now:

```text
createElement()
append()
appendChild()
prepend()
insertBefore()
remove()
removeChild()
```

These are **core DOM manipulation methods**.

---
---

# Step 7 — DOM Traversal

**DOM Traversal** means **navigating through elements in the DOM tree**.

Using traversal we can move:

* **Up** → parent
* **Down** → children
* **Sideways** → siblings

---

# 1️⃣ `parentElement`

## Definition

Returns the **parent element of the current element**.

### Syntax

```javascript
element.parentElement
```

---

### Example

HTML

```html
<div id="container">
    <p id="text">Hello</p>
</div>
```

JavaScript

```javascript
let text = document.getElementById("text");

console.log(text.parentElement);
```

Output

```html
<div id="container">
   <p id="text">Hello</p>
</div>
```

It returns the **div container**.

---

# 2️⃣ `children`

## Definition

Returns all **child elements** of a parent.

### Syntax

```javascript
element.children
```

---

### Example

HTML

```html
<ul id="list">
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
</ul>
```

JavaScript

```javascript
let list = document.getElementById("list");

console.log(list.children);
```

Output

```text
HTMLCollection(3)
```

---

### Access specific child

```javascript
console.log(list.children[0]);
```

Output

```html
<li>Item 1</li>
```

---

# 3️⃣ `firstElementChild`

Returns the **first child element**.

### Syntax

```javascript
element.firstElementChild
```

---

Example

```javascript
let list = document.getElementById("list");

console.log(list.firstElementChild);
```

Output

```html
<li>Item 1</li>
```

---

# 4️⃣ `lastElementChild`

Returns the **last child element**.

### Syntax

```javascript
element.lastElementChild
```

---

Example

```javascript
console.log(list.lastElementChild);
```

Output

```html
<li>Item 3</li>
```

---

# 5️⃣ `nextElementSibling`

Returns the **next element at the same level**.

### Syntax

```javascript
element.nextElementSibling
```

---

Example

HTML

```html
<li id="item1">Item1</li>
<li id="item2">Item2</li>
```

JavaScript

```javascript
let item = document.getElementById("item1");

console.log(item.nextElementSibling);
```

Output

```html
<li id="item2">Item2</li>
```

---

# 6️⃣ `previousElementSibling`

Returns the **previous element at the same level**.

### Syntax

```javascript
element.previousElementSibling
```

---

Example

```javascript
let item = document.getElementById("item2");

console.log(item.previousElementSibling);
```

Output

```html
<li id="item1">Item1</li>
```

---

# 7️⃣ `childNodes` vs `children`

### `children`

Returns **only HTML elements**.

Example

```javascript
element.children
```

---

### `childNodes`

Returns **everything**:

* elements
* text
* comments
* spaces

Example

```javascript
element.childNodes
```

---

# Example

HTML

```html
<ul id="list">
<li>Item 1</li>
<li>Item 2</li>
</ul>
```

JavaScript

```javascript
let list = document.getElementById("list");

console.log(list.childNodes);
```

Output includes **text nodes**.

---

# 8️⃣ Real Example

HTML

```html
<ul id="menu">
<li>Home</li>
<li>About</li>
<li>Contact</li>
</ul>
```

JavaScript

```javascript
let menu = document.getElementById("menu");

console.log(menu.children);

console.log(menu.firstElementChild);

console.log(menu.lastElementChild);
```

Output

```text
<li>Home</li>
<li>Contact</li>
```

---

# 9️⃣ Traversal Example

```javascript
let item = document.querySelector("li");

console.log(item.parentElement);

console.log(item.nextElementSibling);

console.log(item.previousElementSibling);
```

---

# 🔟 Traversal Directions

```
Parent
 ↑
Element
 ↓
Children
 ← → 
Siblings
```
---

# What You Learned

DOM Traversal methods:

```
parentElement
children
firstElementChild
lastElementChild
nextElementSibling
previousElementSibling
childNodes
```

These allow **navigation inside DOM tree**.

---
---

# Step 8 — DOM Events

**DOM Events** allow JavaScript to **respond to user actions**.

Examples of user actions:

* Clicking a button
* Typing in input
* Submitting a form
* Moving mouse
* Scrolling page

These actions trigger **events**.

---

# 1️⃣ What is an Event?

**Definition**

> An event is an action that occurs in the browser which JavaScript can detect and respond to.

Examples:

| Event     | Action               |
| --------- | -------------------- |
| click     | user clicks          |
| input     | user types           |
| submit    | form submission      |
| mouseover | mouse enters element |
| keydown   | keyboard key pressed |

---

# 2️⃣ `addEventListener()`

This is the **most common and recommended way** to handle events.

### Syntax

```javascript
element.addEventListener("event", function)
```

or

```javascript
element.addEventListener("event", () => {})
```

---

# 3️⃣ Click Event Example

### HTML

```html
<button id="btn">Click Me</button>
```

### JavaScript

```javascript
let btn = document.getElementById("btn");

btn.addEventListener("click", function(){

console.log("Button clicked");

});
```

Output (Console)

```
Button clicked
```

---

# 4️⃣ Using Arrow Function

```javascript
btn.addEventListener("click", () => {

console.log("Clicked");

});
```

Both syntaxes work.

---

# 5️⃣ Changing Content with Event

### HTML

```html
<h1 id="title">Hello</h1>

<button id="btn">Change Text</button>
```

### JavaScript

```javascript
let btn = document.getElementById("btn");
let title = document.getElementById("title");

btn.addEventListener("click", () => {

title.textContent = "Text Changed";

});
```

Output

Click button → text changes.

---

# 6️⃣ Mouse Events

| Event     | Meaning      |
| --------- | ------------ |
| click     | mouse click  |
| dblclick  | double click |
| mouseover | mouse enters |
| mouseout  | mouse leaves |

Example

```javascript
let box = document.getElementById("box");

box.addEventListener("mouseover", () => {

console.log("Mouse entered");

});
```

---

# 7️⃣ Keyboard Events

| Event    | Meaning      |
| -------- | ------------ |
| keydown  | key pressed  |
| keyup    | key released |
| keypress | key typed    |

Example

```javascript
document.addEventListener("keydown", (event) => {

console.log(event.key);

});
```

Output

```
a
Enter
ArrowUp
```

---

# 8️⃣ Input Event

Triggered when user **types in input field**.

### HTML

```html
<input id="name">
```

### JavaScript

```javascript
let input = document.getElementById("name");

input.addEventListener("input", (event) => {

console.log(event.target.value);

});
```

Output

User types **"hello"**

```
h
he
hel
hell
hello
```

---

# 9️⃣ Form Submit Event

### HTML

```html
<form id="form">
<input id="username">
<button type="submit">Submit</button>
</form>
```

### JavaScript

```javascript
let form = document.getElementById("form");

form.addEventListener("submit", (event) => {

event.preventDefault();

console.log("Form submitted");

});
```

---

# 🔟 `event` Object

Every event handler receives an **event object**.

Example

```javascript
btn.addEventListener("click", (event) => {

console.log(event);

});
```

Important properties:

| Property      | Meaning                      |
| ------------- | ---------------------------- |
| event.target  | element that triggered event |
| event.type    | event name                   |
| event.clientX | mouse X position             |
| event.clientY | mouse Y position             |

Example

```javascript
btn.addEventListener("click", (event) => {

console.log(event.target);

});
```

---

# 1️⃣1️⃣ Multiple Events on Same Element

```javascript
btn.addEventListener("click", () => {

console.log("Clicked");

});

btn.addEventListener("mouseover", () => {

console.log("Mouse over");

});
```

---

# 1️⃣2️⃣ Removing Event Listener

```javascript
function handleClick(){

console.log("Clicked");

}

btn.addEventListener("click", handleClick);

btn.removeEventListener("click", handleClick);
```

---

# 1️⃣3️⃣ Real Example

### HTML

```html
<button id="btn">Change Color</button>

<div id="box">Box</div>
```

### JavaScript

```javascript
let btn = document.getElementById("btn");
let box = document.getElementById("box");

btn.addEventListener("click", () => {

box.style.backgroundColor = "red";

});
```

Output

Click button → box turns red.
---

# What You Learned

Important event concepts:

```
addEventListener
click
mouseover
keydown
input
submit
event object
preventDefault
```
---
---

# Step 9 — Event Bubbling & Capturing

This is a **very important DOM concept** and a **common JavaScript interview question**.

When an event occurs on an element, it doesn't only affect that element — it **travels through the DOM tree**.

This event flow has **two phases**:

```
Capturing Phase  ↓
Target Phase
Bubbling Phase  ↑
```

---

# 1️⃣ Event Bubbling

## Definition

> Event Bubbling is the process where an event starts from the **target element** and then **bubbles up to its parent elements**.

Meaning:

```
Child → Parent → Grandparent → Document
```

---

### Example

HTML

```html
<div id="parent">
  <button id="child">Click</button>
</div>
```

JavaScript

```javascript
let parent = document.getElementById("parent");
let child = document.getElementById("child");

parent.addEventListener("click", () => {
  console.log("Parent clicked");
});

child.addEventListener("click", () => {
  console.log("Child clicked");
});
```

---

### When Button is Clicked

Output

```
Child clicked
Parent clicked
```

Why?

Because the event **bubbles upward**.

---

# 2️⃣ Event Flow Visualization

```
document
   ↓
html
   ↓
body
   ↓
parent
   ↓
child   ← target element
   ↑
parent
   ↑
body
   ↑
html
   ↑
document
```

Event travels **down then up**.

---

# 3️⃣ Stop Event Bubbling

Sometimes we want the event to **stop at the child element**.

Use:

```
stopPropagation()
```

---

### Example

```javascript
child.addEventListener("click", (event) => {

  event.stopPropagation();

  console.log("Child clicked");

});
```

Now output:

```
Child clicked
```

Parent will **not execute**.

---

# 4️⃣ Event Capturing

Event capturing is the **opposite of bubbling**.

Instead of:

```
child → parent
```

It becomes:

```
parent → child
```

---

### Syntax

```
addEventListener(event, function, true)
```

`true` enables capturing.

---

### Example

```javascript
parent.addEventListener("click", () => {

console.log("Parent capturing");

}, true);
```

---

### Output

```
Parent capturing
Child clicked
```

Parent runs **before child**.

---

# 5️⃣ Event Bubbling vs Capturing

| Feature   | Bubbling                    | Capturing                         |
| --------- | --------------------------- | --------------------------------- |
| Direction | child → parent              | parent → child                    |
| Default   | Yes                         | No                                |
| Syntax    | addEventListener(event, fn) | addEventListener(event, fn, true) |

---

# 6️⃣ Real Example

HTML

```html
<div id="box">
  <button id="btn">Click</button>
</div>
```

JavaScript

```javascript
let box = document.getElementById("box");
let btn = document.getElementById("btn");

box.addEventListener("click", () => {

console.log("Box clicked");

});

btn.addEventListener("click", () => {

console.log("Button clicked");

});
```

Output

```
Button clicked
Box clicked
```

---

# 7️⃣ Real World Use Case

Event bubbling allows **Event Delegation**, which improves performance.

Example:

Instead of adding event listeners to **100 buttons**, you add **one listener to the parent**.

This is **important for dynamic lists**.

---
# 8️⃣ Example Showing Both

```javascript
parent.addEventListener("click", () => {
  console.log("Parent bubbling");
});

parent.addEventListener("click", () => {
  console.log("Parent capturing");
}, true);
```

Output

```
Parent capturing
Child clicked
Parent bubbling
```

---

# What You Learned

```
Event Bubbling
Event Capturing
stopPropagation()
Event Flow
```

---
---


# Step 10 — Event Delegation

**Event Delegation** is one of the **most powerful DOM concepts** and is asked very often in **JavaScript interviews**.

It is based on **Event Bubbling**.

---

# 1️⃣ What is Event Delegation?

### Definition

> Event Delegation is a technique where instead of attaching event listeners to multiple child elements, a single event listener is attached to their parent element to handle events for all children.

Because of **event bubbling**, the parent can detect events triggered by its children.

---

# 2️⃣ Why Event Delegation?

Suppose you have **100 buttons**.

Bad approach:

```javascript
button1.addEventListener(...)
button2.addEventListener(...)
button3.addEventListener(...)
...
button100.addEventListener(...)
```

This creates **100 event listeners**.

Better approach:

```javascript
parent.addEventListener(...)
```

Just **1 listener handles all children**.

---

# 3️⃣ Basic Example

### HTML

```html
<ul id="list">
  <li>Apple</li>
  <li>Mango</li>
  <li>Orange</li>
</ul>
```

---

### JavaScript

```javascript
let list = document.getElementById("list");

list.addEventListener("click", function(event){

console.log(event.target);

});
```

---

### Output

Click **Apple**

```html
<li>Apple</li>
```

`event.target` tells **which element triggered the event**.

---

# 4️⃣ Using Condition

Example:

```javascript
let list = document.getElementById("list");

list.addEventListener("click", function(event){

if(event.target.tagName === "LI"){

console.log("Item clicked:", event.target.textContent);

}

});
```

---

### Output

Click **Mango**

```text
Item clicked: Mango
```

---

# 5️⃣ Real Example — Delete Items

### HTML

```html
<ul id="list">
<li>Task 1 <button>Delete</button></li>
<li>Task 2 <button>Delete</button></li>
<li>Task 3 <button>Delete</button></li>
</ul>
```

---

### JavaScript

```javascript
let list = document.getElementById("list");

list.addEventListener("click", function(event){

if(event.target.tagName === "BUTTON"){

event.target.parentElement.remove();

}

});
```

---

### Output

Click **Delete**

That list item disappears.

---

# 6️⃣ Why Event Delegation is Powerful

### Problem

If new elements are added dynamically:

```javascript
let li = document.createElement("li");
```

Those elements **won't have event listeners**.

---

### Solution

Event delegation works **even for dynamically added elements**.

Because the **parent handles the event**.

---

# 7️⃣ Example with Dynamic Elements

### JavaScript

```javascript
let list = document.getElementById("list");
let btn = document.getElementById("add");

btn.addEventListener("click", () => {

let li = document.createElement("li");

li.textContent = "New Item";

list.appendChild(li);

});
```

Even new items will work with **delegated events**.

---

# 8️⃣ Event Delegation Flow

Example:

Click `li`

```text
li clicked
↓
event bubbles
↓
ul detects event
↓
JavaScript checks event.target
```

---


# 9️⃣ Performance Benefit

Without delegation

```text
100 elements = 100 event listeners
```

With delegation

```text
1 parent = 1 event listener
```

Better **memory usage** and **performance**.

---

# 🔟 Event Delegation vs Direct Event

| Feature          | Direct Event  | Delegation |
| ---------------- | ------------- | ---------- |
| Listeners        | many          | one        |
| Performance      | slower        | faster     |
| Dynamic elements | not supported | supported  |

---
# What You Learned

```text
Event Delegation
event.target
parent event handling
dynamic element handling
performance optimization
```

---
---

