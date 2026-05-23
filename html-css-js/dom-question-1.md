#  Interview Questions

### Q1: What is DOM?

**Answer:**

> DOM is a programming interface that represents an HTML document as a tree of objects, allowing JavaScript to dynamically manipulate the content, structure, and styles of the webpage.

---

### Q2: What is DOM Tree?

**Answer:**

DOM Tree is the hierarchical representation of HTML elements where each element becomes a node.

---

### Q3: Who creates the DOM?

Answer:

**The browser creates the DOM when it parses the HTML document.**

---

### Q4: Difference between `querySelector` and `querySelectorAll`?

Answer:

`querySelector` returns **first matching element**
`querySelectorAll` returns **all matching elements**

---

### Q5: Difference between `HTMLCollection` and `NodeList`?

Answer:

HTMLCollection is **live collection**, NodeList is **static collection**.

---

### Q6: Which method is most commonly used today?

Answer:

Developers mostly use

```javascript
querySelector()
querySelectorAll()
```

because they support **CSS selectors**.

---

### Q7: Difference between `innerHTML` and `textContent`?

Answer:

* `innerHTML` parses **HTML tags**
* `textContent` treats everything as **plain text**

---

### Q8: Difference between `innerText` and `textContent`?

Answer:

`innerText` returns **visible text only**, while `textContent` returns **all text including hidden text**.

---

### Q9: Which is faster?

Answer:

```
textContent is faster
```

because it **does not trigger layout recalculation**.

---

### Q10: How do you change CSS using JavaScript?

Answer:

```javascript
element.style.property = "value"
```

Example

```javascript
element.style.color = "red"
```

---

### Q11: Why use `classList` instead of `style`?

Answer:

Using classes keeps CSS **separate from JavaScript**, making code **cleaner and maintainable**.

---

### Q12: How to read computed styles?

Answer:

```javascript
getComputedStyle(element)
```

---
### Q13: Difference between `className` and `classList`?

Answer:

`className` replaces the entire class string.
`classList` allows adding, removing, and toggling classes individually.

---

### Q14: What does `toggle()` do?

Answer:

Adds class if it doesn't exist, removes it if it exists.

---

### Q15: How to check if a class exists?

Answer:

```javascript
element.classList.contains("className")
```

---
### Q16: Difference between `append` and `appendChild`?

Answer:

`appendChild` accepts **only nodes**
`append` accepts **nodes and text**

---

### Q17: How do you create an element in DOM?

Answer:

```javascript
document.createElement("tagName")
```

---

### Q18: How to remove element?

Answer

```javascript
element.remove()
```

or

```javascript
parent.removeChild(child)
```

---

### Q19: Difference between `children` and `childNodes`?

Answer:

`children` returns **only element nodes**.
`childNodes` returns **all nodes including text and comments**.

---

### Q20: How to get parent element?

```javascript
element.parentElement
```

---

### Q21: How to get next sibling?

```javascript
element.nextElementSibling
```
### Q22: What is `addEventListener`?

Answer:

`addEventListener` attaches an event handler to an element to listen for specific events.

---

### Q23: Difference between `onclick` and `addEventListener`?

| onclick        | addEventListener |
| -------------- | ---------------- |
| one event only | multiple events  |
| older method   | modern method    |

Example

```javascript
btn.onclick = function(){}
```

---

### Q24: What is `event.target`?

Answer:

It refers to the **element that triggered the event**.

---
### Q25: What is Event Bubbling?

Answer:

Event bubbling is the process where an event starts from the **target element and propagates upward to its ancestors**.

---

### Q26: How do you stop event bubbling?

Answer:

```
event.stopPropagation()
```

---

### Q27: What is Event Capturing?

Answer:

Event capturing is when the event **travels from parent to child before reaching the target element**.

---

### Q28: What is Event Delegation?

Answer:

Event delegation is a technique where a parent element handles events for its child elements using event bubbling.

---

### Q29: Why use Event Delegation?

Answer:

* Improves performance
* Handles dynamic elements
* Reduces number of event listeners

---

### Q30: Which property helps in Event Delegation?

Answer

```javascript
event.target
```

---