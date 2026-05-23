 /*

DOM COMPLETE REFERENCE FILE
Covers 10 Core DOM Topics
=========================

Topics Covered:

1. DOM Basics
2. Selecting Elements
3. Content Manipulation
4. Styling Elements
5. Class Manipulation
6. Creating & Removing Elements
7. DOM Traversal
8. DOM Events
9. Event Bubbling & Capturing
10. Event Delegation

===========================================================
*/

 /*

1. DOM BASICS
   ===========================================================

DOM = Document Object Model

Browser converts HTML into a tree of objects.

Example HTML:

<html>
  <body>
    <h1>Hello</h1>
  </body>
</html>

DOM Tree

Document
|
html
|
body
|
h1
*/

console.log(document);
/*
Output:
Shows entire HTML document structure
*/

console.log(document.title);
/*
Output:
Page title
*/

console.log(document.body);
/*
Output:

<body>...</body>
*/

console.log(document.URL);
/*
Output:
Current page URL
*/

 /*

2. SELECTING ELEMENTS
   ===========================================================
   */

// getElementById

let title = document.getElementById("title");

console.log(title);

/*
HTML

<h1 id="title">Hello</h1>

Output

<h1 id="title">Hello</h1>
*/

// getElementsByClassName

let boxes = document.getElementsByClassName("box");

console.log(boxes);

/*
HTML

<div class="box"></div>
<div class="box"></div>

Output
HTMLCollection(2)
*/

// getElementsByTagName

let paragraphs = document.getElementsByTagName("p");

console.log(paragraphs);

/*
Output
HTMLCollection
*/

// querySelector

let firstBox = document.querySelector(".box");

console.log(firstBox);

/*
Returns first matching element
*/

// querySelectorAll

let allBoxes = document.querySelectorAll(".box");

console.log(allBoxes);

/*
Output
NodeList(2)
*/

 /*

3. CONTENT MANIPULATION
   ===========================================================
   */

let heading = document.getElementById("heading");

// textContent

heading.textContent = "New Title";

/*
Before

<h1 id="heading">Old Title</h1>

After

<h1 id="heading">New Title</h1>
*/

// innerText

console.log(heading.innerText);
/*
Output
Visible text only
*/

// innerHTML

heading.innerHTML = "<span>Updated</span>";

/*
Output

<h1><span>Updated</span></h1>
*/

 /*

4. STYLE MANIPULATION
   ===========================================================
   */

let box = document.getElementById("box");

box.style.backgroundColor = "blue";
box.style.color = "white";
box.style.padding = "20px";

/*
Result
Element background becomes blue
*/

// getComputedStyle

let styles = getComputedStyle(box);

console.log(styles.backgroundColor);
/*
Output
rgb(0, 0, 255)
*/

 /*

5. CLASS MANIPULATION
   ===========================================================
   */

let card = document.querySelector(".card");

card.classList.add("active");
/*
Adds class "active"
*/

card.classList.remove("active");
/*
Removes class
*/

card.classList.toggle("active");
/*
Adds if not exists
Removes if exists
*/

console.log(card.classList.contains("active"));
/*
Output
true / false
*/

card.classList.replace("active","inactive");
/*
Replaces class
*/

 /*

6. CREATING & REMOVING ELEMENTS
   ===========================================================
   */

// createElement

let div = document.createElement("div");

div.textContent = "New Element";

console.log(div);

/*
Output

<div>New Element</div>
*/

// appendChild

document.body.appendChild(div);

/*
Element added to body
*/

// append

document.body.append("Text Node");

// prepend

document.body.prepend(div);

// insertBefore

let parent = document.getElementById("list");
let child = document.getElementById("item");

parent.insertBefore(div, child);

// remove

div.remove();

// removeChild

parent.removeChild(child);

 /*

7. DOM TRAVERSAL
   ===========================================================
   */

let item = document.querySelector(".item");

console.log(item.parentElement);
/*
Returns parent element
*/

console.log(item.children);
/*
Returns HTMLCollection of children
*/

console.log(item.firstElementChild);
/*
First child
*/

console.log(item.lastElementChild);
/*
Last child
*/

console.log(item.nextElementSibling);
/*
Next element
*/

console.log(item.previousElementSibling);
/*
Previous element
*/

console.log(item.childNodes);
/*
Includes text nodes also
*/

 /*

8. DOM EVENTS
   ===========================================================
   */

let button = document.getElementById("btn");

button.addEventListener("click", function(){

console.log("Button clicked");

});

/*
Output
Button clicked
*/

// mouseover

button.addEventListener("mouseover", () => {

console.log("Mouse entered");

});

// keydown

document.addEventListener("keydown", (event) => {

console.log(event.key);

});

/*
Output example
a
Enter
ArrowUp
*/

// input event

let input = document.getElementById("name");

input.addEventListener("input", (event)=>{

console.log(event.target.value);

});

// submit event

let form = document.getElementById("form");

form.addEventListener("submit", (event)=>{

event.preventDefault();

console.log("Form submitted");

});

 /*

9. EVENT BUBBLING & CAPTURING
   ===========================================================
   */

let parentDiv = document.getElementById("parent");
let childBtn = document.getElementById("child");

parentDiv.addEventListener("click", ()=>{

console.log("Parent clicked");

});

childBtn.addEventListener("click", ()=>{

console.log("Child clicked");

});

/*
If child clicked

Output
Child clicked
Parent clicked

This is Event Bubbling
*/

// stopPropagation

childBtn.addEventListener("click", (event)=>{

event.stopPropagation();

console.log("Child only");

});

// Capturing

parentDiv.addEventListener("click", ()=>{

console.log("Capturing Parent");

}, true);

/*
true enables capturing phase
*/

 /*

10. EVENT DELEGATION
    ===========================================================
    */

let list = document.getElementById("list");

list.addEventListener("click", function(event){

if(event.target.tagName === "LI"){

console.log("Item clicked:", event.target.textContent);

}

});

/*
HTML

<ul id="list">
<li>Apple</li>
<li>Mango</li>
<li>Orange</li>
</ul>

Click Mango

Output
Item clicked: Mango
*/

// Delete example

list.addEventListener("click", (event)=>{

if(event.target.tagName === "BUTTON"){

event.target.parentElement.remove();

}

});

 /*

 END OF DOM REFERENCE

This file covered:

DOM Basics
Selecting Elements
Content Manipulation
Styles
Class Manipulation
Creating Elements
Removing Elements
DOM Traversal
Events
Event Bubbling
Event Capturing
Event Delegation

===========================================================
*/
