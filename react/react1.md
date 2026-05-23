# REACT

## What Is React?

* React is a JavaScript library/framework for building user interfaces. It was created by Facebook.
* Websites/Uls are looked at in terms of components.
* React is currently the most popular out of the major front-end frameworks.

## Why React?

* React allows us to build very dynamic and interactive websites and user interfaces.
* Very fast, especially with the new compiler.
* There is a huge ecosystem from Next.js to React Native.
* Best framework to learn to get a job.

## Components

* Reusable piece of code that can be used to build elements on the page.
* Allows us to break down complex UIs, which makes them easier to maintain and scale.
* Components can get props passed in and can hold their own state.

## State

* State represents the data that a component manages internally.
* This could be form input data, fetched data, Ul-related data like if a modal is open/close.
* There is also global state, which relates to the app as a whole and not a single component.

## Hooks

* Allow us to use state and other React features within functional components
* useState 
* useEffect -> useContext, useMemo & useCallback 
* useRef -> will be phased out in React 19 
* useReducer

## JSX (JavaScript Syntax Extension)

> An HTML-like syntax within JavaScript (components)


## SPA, SSR & SSG

* **Single Page App** - Load a single HTML file and JavaScript loads the entire Ul including routes.

* **Server-Side Rendered** - Server sends fully rendered page to client. You can fetch data and load it as well.

* **Static Site Generation** - React generates static HTML files at build time. These are very fast.

## Quickly

* Vite is a super fast front-end toolkit that can be used for all kinds of JS projects including React.

* It is built on top of ESBuild, which is a very fast JS bundler.

* Fast development server with hot-reload.

* Installed with npm create vite@latest

## How to INSTALL
```bash
node -v
# v20.20.0

npm create vite@4.1.0
# pertucular version or latest version
npm create vite@latest
#- write folder name
#- select React / what you need
#- select JavaScript / what you need
cd FolderName
npm install
npm run dev
# for tailwind css
npm install tailwindcss @tailwindcss/vite
```
---

---

# 🧠 What is `fetch`?

👉 `fetch` is a **built-in browser API**
👉 Used to make HTTP requests (GET, POST, etc.)

---

## ✅ Basic Example

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

---

## ✅ With async/await (better)

```js
async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
```

---

# ⚠️ Important about fetch

👉 `fetch` **DOES NOT throw error for HTTP errors**

```js
if (!res.ok) {
  throw new Error("Error");
}
```

You must handle manually ❗

---

# 🧠 What is Axios?

👉 Axios is a **third-party library** (you install it)

```bash
npm install axios
```

👉 Used for HTTP requests (same as fetch but easier)

---

## ✅ Basic Example

```js
import axios from "axios";

axios.get("https://jsonplaceholder.typicode.com/users")
  .then(res => console.log(res.data))
  .catch(err => console.log(err));
```

---

## ✅ Async/await

```js
import axios from "axios";

async function getData() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
}
```

---

# ⚔️ Fetch vs Axios (VERY IMPORTANT 🔥)

| Feature        | fetch    | axios       |
| -------------- | -------- | ----------- |
| Built-in       | ✅ Yes    | ❌ No        |
| Install needed | ❌        | ✅           |
| JSON parsing   | ❌ manual | ✅ automatic |
| Error handling | ❌ manual | ✅ automatic |
| Request cancel | ❌ hard   | ✅ easy      |
| Interceptors   | ❌        | ✅           |
| Simplicity     | Medium   | Easy        |

---

## 🔥 Key Differences Explained

## 1. JSON Handling

### fetch ❌

```js
const res = await fetch(url);
const data = await res.json();
```

### axios ✅

```js
const res = await axios.get(url);
const data = res.data;
```

---

## 2. Error Handling

### fetch ❌

```js
if (!res.ok) throw new Error();
```

### axios ✅

```js
try {
  await axios.get(url);
} catch (err) {
  // auto catches
}
```

---

## 3. Cleaner Code

👉 Axios is shorter + cleaner

---

## 🧠 When to use WHAT?

## ✅ Use FETCH when:

* Small project
* No extra dependency needed
* Learning basics

---

## ✅ Use AXIOS when:

* Real projects 🔥
* Need interceptors (auth tokens)
* Better error handling
* Cleaner code
* API-heavy apps

---

## 🚀 Real React Example

## 🔹 Using fetch

```jsx
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
}, []);
```

---

## 🔹 Using axios

```jsx
useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => setUsers(res.data));
}, []);
```

---

## 🏆 Which is BEST?

👉 **Axios is better for real-world apps**   
👉 **Fetch is enough for learning**

---

## 💯 Final Answer
 
👉 `fetch` = built-in, basic   
👉 `axios` = powerful, easier, production-ready

---
---

## 🔥 Prop Drilling in React

**Prop Drilling** means passing data from a **parent component → deeply nested child components** through multiple levels.

---

## ❌ What it looks like

```jsx
function Parent() {
  const data = "Hello";

  return <Child1 data={data} />;
}

function Child1({ data }) {
  return <Child2 data={data} />;
}

function Child2({ data }) {
  return <Child3 data={data} />;
}

// ...
function Child10({ data }) {
  return <h1>{data}</h1>;
}
```

👉 Even if `Child1–Child9` don’t need `data`, they still pass it
👉 This is **prop drilling problem**

---

## 🚨 Why it’s a problem

* ❌ Code becomes messy
* ❌ Hard to maintain
* ❌ Difficult to debug
* ❌ Too much unnecessary passing

---
---

## 💡 Quick Summary

* Prop drilling = passing props through many layers
* Happens in nested components
* Best fix = **Context API**
* Large apps = **Redux / Zustand**

---
---


You’re describing a common React problem called **“prop drilling”** 🔥
(parent → child → child → … → 10th child)

Passing props manually through every level is messy ❌

---

# ❌ Problem (Prop Drilling)

```jsx
<Parent data={data} />
  ↓
<Child1 data={data} />
  ↓
<Child2 data={data} />
  ↓
...
  ↓
<Child10 data={data} />
```

👉 You have to pass props through all intermediate components even if they don’t use it.

---

## ✅ Solution 1: Context API (Best for this case)

Use React Context to **directly access data in the 10th child** 🚀

---

### Step 1: Create Context

```jsx
import { createContext } from "react";

export const MyContext = createContext();
```

---

### Step 2: Provide data in Parent

```jsx
import { MyContext } from "./MyContext";

function Parent() {
  const data = "Hello from Parent";

  return (
    <MyContext.Provider value={data}>
      <Child1 />
    </MyContext.Provider>
  );
}
```

---

### Step 3: Use in Child10 (direct access 💥)

```jsx
import { useContext } from "react";
import { MyContext } from "./MyContext";

function Child10() {
  const data = useContext(MyContext);

  return <h1>{data}</h1>;
}
```

👉 Now you **don’t need to pass props through Child1 → Child9**

---

## ✅ Solution 2: State Management Libraries (for large apps)

If your app grows bigger:

* Redux
* Zustand

These help manage global state efficiently.

---

## ✅ Solution 3: Composition (Advanced clean approach)

Instead of passing data, pass components:

```jsx
<Parent>
  <Child10 data={data} />
</Parent>
```

---

## 🧠 When to use what?

| Situation                | Best Choice     |
| ------------------------ | --------------- |
| Small app                | Props           |
| Deep nesting (your case) | ✅ Context API   |
| Large scalable app       | Redux / Zustand |

---
---
---

>- REACT
>- Intro
>- Components
>- JSX
>- Curly Braces
>- Fragments
>- Props
>- Children
>- Keys
>- Rendering
>- Event Handling
>- State
>- Controlled Components
>- Hooks
>- Purity
>- Strict Mode
>- Effects
>- Refs
>- Context
>- Portals
>- Suspense
>- Error Boundaries

## 🧩 Components in React

**Components = building blocks of UI**
Everything in React is made using components.

👉 Think like LEGO blocks — small pieces → combine → big app

---

## 🔹 What is a Component?

A **component is a function** that returns UI (JSX)

```jsx
function Welcome() {
  return <h1>Hello</h1>;
}
```

---

## 🔹 Types of Components

### 1. Functional Components ✅ (Most used)

```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

👉 Simple, modern, uses Hooks

---

### 2. Class Components ❌ (Old)

```jsx
class App extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

👉 Rarely used now

---

## 🔹 Reusable Components

```jsx
function Button() {
  return <button>Click</button>;
}

function App() {
  return (
    <>
      <Button />
      <Button />
    </>
  );
}
```

👉 Write once → use many times

---

## 🔹 Component Naming Rules

✔ Must start with **Capital letter**

```jsx
function MyComponent() {}  // ✅
function myComponent() {}  // ❌
```

---

## 🔹 Component Structure (Real Project)

```
src/
  components/
    Button.jsx
    Navbar.jsx
  pages/
    Home.jsx
```

---

## 🔹 Nesting Components

```jsx
function Child() {
  return <p>I am child</p>;
}

function Parent() {
  return <Child />;
}
```

👉 Components can be inside components

---

## 🔹 Key Points (Interview 💡)

* Components are **independent & reusable**
* Return JSX
* Can be nested
* Functional components are preferred

---

## ⚡ Simple Example (Important)

```jsx
function Greeting() {
  return <h1>Hello Krishna 👋</h1>;
}

function App() {
  return <Greeting />;
}
```

---

## 🚀 Summary 

👉 Component = Function that returns UI  
👉 Helps break UI into small   
👉 Reusable + maintainable  

---
---

## ⚛️ JSX in React

**JSX = JavaScript XML**
👉 It lets you write **HTML-like code inside JavaScript**

---

## 🔹 What is JSX?

```jsx
const element = <h1>Hello World</h1>;
```

👉 Looks like HTML
👉 But actually **JavaScript (converted to JS behind the scenes)**

---

## 🔹 Why JSX?

* Easier to write UI
* More readable
* Combines HTML + JS logic

---

## 🔹 How JSX Works (Behind the scenes)

```jsx
const el = <h1>Hello</h1>;
```

👉 React converts it to:

```js
React.createElement("h1", null, "Hello");
```

---

## 🔹 Using JavaScript inside JSX `{}`

```jsx
const name = "Krishna";

<h1>Hello {name}</h1>
```

✔ You can use:

* Variables
* Expressions
* Functions

---

## 🔹 Important Rule ❗

❌ You **cannot write statements directly**

```jsx
// ❌ Wrong
if (true) {
  return <h1>Hello</h1>;
}
```

✔ Use expressions instead:

```jsx
// ✅ Correct
{isLoggedIn ? <h1>Welcome</h1> : <h1>Login</h1>}
```

---

## 🔹 Attributes in JSX

HTML → JSX difference:

```jsx
// HTML
class="box"

// JSX
className="box"
```

```jsx
<input type="text" placeholder="Enter name" />
```

---

## 🔹 Self Closing Tags

```jsx
<img src="img.png" />
<input />
```

👉 Must close tags in JSX

---

## 🔹 Multiple Elements? Use Wrapper

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);
```

OR (better 👇)

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);
```

---

## 🔹 Embedding Expressions Example

```jsx
const a = 5;
const b = 10;

<p>{a + b}</p>   // Output: 15
```

---

## 🔹 JSX with Functions

```jsx
function greet(name) {
  return "Hello " + name;
}

<h1>{greet("Krishna")}</h1>
```

---

## 🔹 Key Points (Interview 💡)

* JSX is not HTML, it's JavaScript syntax
* Uses `{}` for JS
* Must return **one parent element**
* Attributes use camelCase (`className`, `onClick`)

---

## 🚀 Summary

👉 JSX = Write UI easily
👉 Mix HTML + JS
👉 Makes React powerful & readable

---
---

## 🔥 Curly Braces `{}` in React

Curly braces are **VERY IMPORTANT in JSX** 💥
They let you **write JavaScript inside JSX**

---

## 🔹 Basic Usage

```jsx id="w7w5ai"
const name = "Krishna";

<h1>Hello {name}</h1>
```

👉 `{}` = enter JavaScript mode

---

## 🔹 What You CAN Write Inside `{}`

### ✔ 1. Variables

```jsx id="6dwja5"
const age = 20;

<p>Age: {age}</p>
```

---

### ✔ 2. Expressions

```jsx id="0phnql"
<p>{10 + 5}</p>   // 15
```

---

### ✔ 3. Functions

```jsx id="z2ic8w"
function greet() {
  return "Hello";
}

<h1>{greet()}</h1>
```

---

### ✔ 4. Ternary (if-else)

```jsx id="77obxs"
{isLoggedIn ? <h1>Welcome</h1> : <h1>Please Login</h1>}
```

---

### ✔ 5. Arrays (Very Important 🔥)

```jsx id="6xrps7"
const arr = [1, 2, 3];

arr.map(num => <p key={num}>{num}</p>);
```

---

## 🔹 What You CANNOT Write ❌

### ❌ Statements (directly)

```jsx id="84jcs9"
// ❌ Wrong
{for (let i = 0; i < 5; i++) {}}
```

```jsx id="6ep7xs"
// ❌ Wrong
{if (true) {}}
```

👉 JSX only allows **expressions**, not statements

---

## 🔹 Workaround for Statements ✔

```jsx id="d1ulfc"
let content;

if (isLoggedIn) {
  content = <h1>Welcome</h1>;
} else {
  content = <h1>Login</h1>;
}

return content;
```

---

## 🔹 Inline Styling using `{}`

```jsx id="h87s2j"
<div style={{ color: "red", fontSize: "20px" }}>
  Hello
</div>
```

👉 Double `{}`

* Outer `{}` → JSX
* Inner `{}` → JS object

---

## 🔹 Passing Objects

```jsx id="ffn8qj"
const user = { name: "Krishna" };

<p>{user.name}</p>
```

---

## 🔹 Key Points (Interview 💡)

* `{}` allows JavaScript inside JSX
* Only expressions allowed
* Used for dynamic UI
* Very commonly used with:

  * map()
  * conditions
  * variables

---

## 🚀 Summary

👉 `{}` = JavaScript inside JSX
👉 Used everywhere in React
👉 Core concept 🔥

---
---


## 🧩 Fragments in React

**Fragments** let you group multiple elements **without adding extra DOM nodes**.

---

## 🔹 Problem Without Fragment ❌

React components must return **one parent element**:

```jsx id="jrd68i"
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>World</p>
    </div>
  );
}
```

👉 This adds an **extra `<div>` in DOM** (sometimes unwanted)

---

## 🔹 Solution: Fragment ✅

```jsx id="n37d6j"
function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>World</p>
    </>
  );
}
```

👉 No extra DOM element created 🚀

---

## 🔹 Full Syntax

```jsx id="hlbf8d"
import React from "react";

function App() {
  return (
    <React.Fragment>
      <h1>Hello</h1>
      <p>World</p>
    </React.Fragment>
  );
}
```

---

## 🔹 Short Syntax (Most Used 🔥)

```jsx id="j70tm0"
<>
  <h1>Hello</h1>
  <p>World</p>
</>
```

---

## 🔹 When to Use Fragments?

✔ Avoid unnecessary `<div>`
✔ Cleaner DOM
✔ Better performance (slightly)
✔ Useful in lists & tables

---

## 🔹 Fragment with Keys (Important 🔥)

When mapping:

```jsx id="vcx0s1"
arr.map(item => (
  <React.Fragment key={item.id}>
    <h1>{item.title}</h1>
    <p>{item.desc}</p>
  </React.Fragment>
));
```

👉 Short syntax `<> </>` **cannot use key**

---

## 🔹 Real Example

```jsx id="3e6dqs"
function List() {
  return (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
    </>
  );
}
```

---

## 🔹 Key Points (Interview 💡)

* Fragments avoid extra DOM nodes
* Must return single parent → Fragment helps
* `<> </>` is shorthand
* Use full syntax when **key is needed**

---

## 🚀 Summary

👉 Fragment = invisible wrapper  
👉 Keeps DOM clean  
👉 Very commonly used 

---
---

## 🔥 Props in React

**Props = Properties**
👉 Used to **pass data from parent → child component**

---

## 🔹 Basic Example

```jsx id="x3d2zq"
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}

function App() {
  return <Welcome name="Krishna" />;
}
```

👉 Parent (`App`) → Child (`Welcome`)

---

## 🔹 Destructuring Props (Clean Way ✅)

```jsx id="2y0d0u"
function Welcome({ name }) {
  return <h1>Hello {name}</h1>;
}
```

👉 No need to write `props.name`

---

## 🔹 Passing Multiple Props

```jsx id="9kwt8p"
function User({ name, age }) {
  return (
    <h1>
      {name} - {age}
    </h1>
  );
}

<User name="Krishna" age={20} />
```

---

## 🔹 Passing Functions as Props 🔥

```jsx id="h6dj9j"
function Button({ handleClick }) {
  return <button onClick={handleClick}>Click</button>;
}

function App() {
  function sayHi() {
    alert("Hi");
  }

  return <Button handleClick={sayHi} />;
}
```

👉 Used for communication **child → parent**

---

## 🔹 Props are Read-Only ❗

```jsx id="lm5w4m"
// ❌ Wrong
props.name = "New Name";
```

👉 Props are **immutable** (cannot change)

---

## 🔹 Default Props

```jsx id="v5h1rf"
function Welcome({ name = "Guest" }) {
  return <h1>Hello {name}</h1>;
}
```

---

## 🔹 Props with Objects

```jsx id="p3s9mz"
const user = { name: "Krishna", age: 20 };

<User user={user} />
```

```jsx id="9y2l0k"
function User({ user }) {
  return <h1>{user.name}</h1>;
}
```

---

## 🔹 Props Flow (Important 💡)

👉 Data flows **one direction only**

```
Parent → Child → Child → ...
```

👉 This is why **prop drilling happens**

---

## 🔹 Key Points (Interview 🔥)

* Props = pass data
* Read-only
* One-way data flow
* Can pass:

  * values
  * objects
  * functions

---

## 🚀 Summary

👉 Props = communication between components
👉 Parent controls child data
👉 Core concept in React

---
---
## 👶 Children in React

**`children` is a special prop**
👉 It represents **whatever you put between component tags**

---

## 🔹 Basic Example

```jsx id="e7t1tq"
function Box(props) {
  return <div>{props.children}</div>;
}

function App() {
  return (
    <Box>
      <h1>Hello</h1>
    </Box>
  );
}
```

👉 `<h1>Hello</h1>` becomes **props.children**

---

## 🔹 Using Destructuring (Clean ✅)

```jsx id="x9kp4m"
function Box({ children }) {
  return <div>{children}</div>;
}
```

---

## 🔹 Multiple Children

```jsx id="7m7r6j"
<Box>
  <h1>Hello</h1>
  <p>World</p>
</Box>
```

👉 `children` can be:

* Single element
* Multiple elements
* Text
* Even components

---

## 🔹 Real Use Case 🔥

### Layout / Wrapper Component

```jsx id="3o4c4r"
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function App() {
  return (
    <Card>
      <h2>Title</h2>
      <p>Description</p>
    </Card>
  );
}
```

👉 Reusable UI wrapper 💥

---

## 🔹 Passing Components as Children

```jsx id="7b6x2v"
<Card>
  <Button />
</Card>
```

👉 Very powerful composition pattern

---

## 🔹 Children with Functions (Advanced 🔥)

```jsx id="q7r1xy"
function Data({ children }) {
  return children("Krishna");
}

<Data>
  {(name) => <h1>Hello {name}</h1>}
</Data>
```

👉 Called **Render Props pattern**

---

## 🔹 Key Points (Interview 💡)

* `children` is a **special prop**
* Represents content inside component
* Used for:

  * Layouts
  * Wrappers
  * Reusable UI
* Makes components flexible

---

## 🚀 Summary

👉 `children` = content inside component
👉 Helps build reusable layouts
👉 Very important concept 🔥

---
---

## 🔑 Keys in React

**Keys are used when rendering lists**
👉 They help React **identify which items changed, added, or removed**

---

## 🔹 Basic Example

```jsx id="4h0g1h"
const arr = ["A", "B", "C"];

arr.map((item, index) => (
  <p key={index}>{item}</p>
));
```

---

## 🔹 Why Keys are Important ❓

React uses keys for **efficient updates (Virtual DOM diffing)**

👉 Without keys:

* React gets confused ❌
* Wrong elements may update ❌
* Performance decreases ❌

---

## 🔹 Best Practice ✅ (VERY IMPORTANT)

✔ Use **unique ID**

```jsx id="p2w7hy"
const users = [
  { id: 1, name: "Krishna" },
  { id: 2, name: "Ram" }
];

users.map(user => (
  <p key={user.id}>{user.name}</p>
));
```

---

## 🔹 Avoid Using Index ❌

```jsx id="2p98o0"
<p key={index}>{item}</p>
```

👉 Problem:

* If list changes (add/remove/reorder)
* React may update wrong items

---

## 🔹 Real Problem Example

```jsx id="hlc0r2"
// Wrong behavior if using index
[ A, B, C ] → remove A → [ B, C ]
```

👉 React may think:

* A → B
* B → C
  ❌ Wrong mapping

---

## 🔹 Keys with Components

```jsx id="9ybrd7"
users.map(user => (
  <User key={user.id} name={user.name} />
));
```

---

## 🔹 Where to Add Key?

👉 Add key to **top-level element inside map**

```jsx id="t8z8m9"
arr.map(item => (
  <div key={item.id}>
    <p>{item.name}</p>
  </div>
));
```

---

## 🔹 Key Rules 🔥

* Must be **unique among siblings**
* Should be **stable (not changing)**
* Not accessible as prop (`props.key` ❌)

---

## 🔹 Key Points (Interview 💡)

* Keys help React identify elements
* Improve performance
* Avoid bugs in UI updates
* Always prefer **unique ID**

---

## 🚀 Summary

👉 Keys = identity for list items  
👉 Critical for rendering lists  
👉 Never ignore this concept 🔥  

---
---

## 🔄 Rendering in React

**Rendering = displaying UI on the screen**

👉 React updates the UI when:

* Props change
* State changes

---

## 🔹 Types of Rendering

### 1. Initial Rendering

👉 First time component loads

```jsx id="z8lq9a"
function App() {
  return <h1>Hello</h1>;
}
```

---

### 2. Re-Rendering 🔥

👉 Happens when state or props change

```jsx id="o9b3o7"
const [count, setCount] = useState(0);
```

👉 When `setCount()` runs → component re-renders

---

## 🔹 Example

```jsx id="u7o7gf"
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
```

👉 Click → state changes → UI updates automatically 💥

---

## 🔹 How React Rendering Works (Simple)

1. UI changes (state/props)
2. React updates **Virtual DOM**
3. Compares with previous (diffing)
4. Updates only changed parts

👉 This makes React fast 🚀

---

## 🔹 Conditional Rendering

Show UI based on condition

```jsx id="7g8k4q"
{isLoggedIn ? <h1>Welcome</h1> : <h1>Login</h1>}
```

---

## 🔹 Rendering Lists

```jsx id="m8j5ye"
const arr = [1, 2, 3];

arr.map(num => <p key={num}>{num}</p>);
```

---

## 🔹 Prevent Unnecessary Re-Renders (Advanced 🔥)

* `React.memo()`
* `useMemo()`
* `useCallback()`

👉 Improves performance

---

## 🔹 Key Points (Interview 💡)

* Rendering = showing UI
* Triggered by **state & props changes**
* Uses **Virtual DOM**
* Efficient updates

---

## 🚀 Summary

👉 React re-renders automatically
👉 Only updates changed parts
👉 Makes UI dynamic & fast

---
---
## 🖱️ Event Handling in React

Event handling means **responding to user actions**
👉 like click, input, submit, hover, etc.

---

## 🔹 Basic Example

```jsx id="lqk6q2"
function App() {
  function handleClick() {
    alert("Button clicked");
  }

  return <button onClick={handleClick}>Click</button>;
}
```

👉 `onClick` = event
👉 `handleClick` = function

---

## 🔹 Important Rule ❗

❌ Don’t call function directly

```jsx id="1z7nbe"
// ❌ Wrong
<button onClick={handleClick()}>
```

✔ Pass function reference

```jsx id="y3n7vn"
// ✅ Correct
<button onClick={handleClick}>
```

---

## 🔹 Passing Arguments

```jsx id="a5ph3n"
<button onClick={() => handleClick("Krishna")}>
  Click
</button>
```

---

## 🔹 Common Events

| Event       | Usage        |
| ----------- | ------------ |
| onClick     | Button click |
| onChange    | Input change |
| onSubmit    | Form submit  |
| onMouseOver | Hover        |

---

## 🔹 Input Handling Example

```jsx id="y1uxrt"
function App() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```

👉 `e.target.value` gets input value

---

## 🔹 Prevent Default (Forms)

```jsx id="a1x9o2"
function handleSubmit(e) {
  e.preventDefault();
  console.log("Submitted");
}
```

```jsx id="k6z8f0"
<form onSubmit={handleSubmit}>
  <button type="submit">Submit</button>
</form>
```

---

## 🔹 Synthetic Events

React wraps browser events into **SyntheticEvent**

👉 Works same across all browsers

---

## 🔹 Key Points (Interview 💡)

* Events use camelCase (`onClick`)
* Pass function, not function call
* Use `e` for event object
* Can pass arguments using arrow function

---

## 🚀 Summary

👉 Event handling = user interaction  
👉 Very common in forms, buttons  
👉 Core concept for dynamic apps

---
---
## 🔥 State in React

**State = data that can change over time**
👉 When state changes → UI automatically updates 💥

---

## 🔹 What is State?

State is used to store **dynamic values**

```jsx id="o6l8qs"
const [count, setCount] = useState(0);
```

* `count` → current value
* `setCount` → function to update

---

## 🔹 Basic Example

```jsx id="1lq2xw"
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
```

👉 Click → state changes → UI updates 🚀

---

## 🔹 How State Works

1. Initial value → `useState(0)`
2. User action → `setCount()`
3. React re-renders component
4. UI updates

---

## 🔹 State Rules ❗

### ✔ 1. Don’t update directly

```jsx id="6k4f5b"
// ❌ Wrong
count = count + 1;
```

```jsx id="6m0xv3"
// ✅ Correct
setCount(count + 1);
```

---

### ✔ 2. State updates are async

```jsx id="9t8p1u"
setCount(count + 1);
setCount(count + 1);
```

👉 May not update twice

✔ Use functional update:

```jsx id="4o6p7n"
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

---

### ✔ 3. State is local

👉 Each component has its own state

---

## 🔹 Multiple State

```jsx id="9q2m3a"
const [name, setName] = useState("");
const [age, setAge] = useState(20);
```

---

## 🔹 State with Objects

```jsx id="3n7q8p"
const [user, setUser] = useState({
  name: "",
  age: 0
});
```

```jsx id="0j2h4k"
setUser({ ...user, name: "Krishna" });
```

---

## 🔹 State Lifting (Important 🔥)

👉 Share state between components

* Move state to **parent**
* Pass via props

---

## 🔹 Key Points (Interview 💡)

* State = dynamic data
* Causes re-render
* Use `useState`
* Never mutate directly
* Updates are async

---

## 🚀 Summary

👉 State controls UI    
👉 Makes app interactive  
👉 MOST IMPORTANT concept 🔥🔥

---
---

# 🧾 Controlled Components in React

**Controlled Components = form elements controlled by React state**

👉 React controls the input value (not the DOM)

---

## 🔹 Basic Idea

👉 Input value comes from **state**
👉 Changes handled using **onChange**

---

## 🔹 Example

```jsx id="2m8f9p"
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>
    </>
  );
}
```

👉 Whatever you type → stored in state → UI updates 💥

---

## 🔹 How It Works

1. Input value = state
2. User types
3. `onChange` fires
4. State updates
5. UI re-renders

---

## 🔹 Multiple Inputs

```jsx id="6x4t8q"
function Form() {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <input name="name" onChange={handleChange} />
      <input name="email" onChange={handleChange} />
    </>
  );
}
```

---

## 🔹 Why Use Controlled Components?

* Single source of truth (state)
* Easy validation
* Easy form handling
* Predictable behavior

---

## 🔹 Uncontrolled vs Controlled

| Type    | Controlled    | Uncontrolled |
| ------- | ------------- | ------------ |
| Data    | React state   | DOM          |
| Control | High          | Low          |
| Usage   | Recommended ✅ | Less used    |

---

## 🔹 Example (Uncontrolled ❌)

```jsx id="c5p8n2"
<input ref={inputRef} />
```

👉 Value comes from DOM, not state

---

## 🔹 Key Points (Interview 💡)

* Controlled = value + onChange
* State manages form data
* Better for validation & logic

---

## 🚀 Summary

👉 Controlled components = React controls form  
👉 Important for real apps (login, forms)  
👉 Always preferred 🔥

---
---

# 🪝 Hooks in React

**Hooks = special functions**
👉 Let you use React features like **state, lifecycle, context** inside functional components

---

## 🔹 Why Hooks?

Before Hooks:

* Only class components could use state ❌

Now:

* Functional components can do everything ✅

---

## 🔹 Most Important Hooks 🔥

---

### 1. `useState` (State)

```jsx id="c8n1f2"
import { useState } from "react";

const [count, setCount] = useState(0);
```

👉 Store and update data

---

### 2. `useEffect` (Side Effects)

```jsx id="n3k8p4"
import { useEffect } from "react";

useEffect(() => {
  console.log("Component Mounted");
}, []);
```

👉 Runs after render
👉 Used for API calls, timers, etc.

---

### 3. `useContext` (Global Data)

```jsx id="w4p9z1"
const value = useContext(MyContext);
```

👉 Avoid prop drilling

---

### 4. `useRef` (DOM Access)

```jsx id="r2m7x6"
const inputRef = useRef();

<input ref={inputRef} />
```

👉 Access DOM directly

---

## 🔹 Rules of Hooks ❗

1. Call Hooks **only at top level**

```jsx id="y7v3q9"
// ❌ Wrong
if (true) {
  useState();
}
```

---

2. Call Hooks **only inside React components**

```jsx id="u1c8k3"
// ❌ Wrong
function test() {
  useState();
}
```

---

## 🔹 Custom Hook (Advanced 🔥)

👉 You can create your own hook

```jsx id="z5n2l7"
function useCounter() {
  const [count, setCount] = useState(0);
  return { count, setCount };
}
```

---

## 🔹 When to Use Hooks?

* Manage state → `useState`
* Handle side effects → `useEffect`
* Share data → `useContext`
* Access DOM → `useRef`

---

## 🔹 Key Points (Interview 💡)

* Hooks work only in functional components
* Replace class components
* Follow rules strictly
* Make code cleaner

---

## 🚀 Summary

👉 Hooks = power of React in functions  
👉 Most important topic 🔥🔥🔥  
👉 Must know for real projects & interviews

---
---

# 🧠 Purity in React

**Purity = components behave like pure functions**

👉 Same input → Same output
👉 No side effects during rendering

---

## 🔹 What is a Pure Component?

A component is **pure** if:

* It only depends on **props & state**
* It does NOT modify anything outside

---

## 🔹 Example (Pure ✅)

```jsx id="l9q2d1"
function Greeting({ name }) {
  return <h1>Hello {name}</h1>;
}
```

👉 Input: `name = Krishna`
👉 Output: always same

---

## 🔹 Impure Component ❌

```jsx id="c3m8z7"
let count = 0;

function Counter() {
  count++;   // ❌ side effect
  return <h1>{count}</h1>;
}
```

👉 Output changes even without props/state
👉 Not predictable ❌

---

## 🔹 Side Effects (Important 🔥)

Side effects = things that affect outside world

Examples:

* API calls
* Timers
* DOM manipulation
* Changing global variables

👉 ❌ Don’t do inside render

---

## 🔹 Correct Way (Using Hook ✅)

```jsx id="w7p4n2"
import { useEffect } from "react";

useEffect(() => {
  console.log("Side effect here");
}, []);
```

👉 Side effects go inside `useEffect`

---

## 🔹 Why Purity is Important?

* Predictable UI
* Easier debugging
* Better performance
* Works well with React rendering

---

## 🔹 React.StrictMode (Related 🔥)

React Strict Mode helps detect impure components

👉 It may run components twice (in dev) to catch issues

---

## 🔹 Key Points (Interview 💡)

* Components should be **pure functions**
* No side effects in render
* Use `useEffect` for side effects
* Improves reliability

---

## 🚀 Summary

👉 Pure = same input → same output  
👉 No side effects in UI rendering  
👉 Very important for clean React apps

---
---

# ⚠️ Strict Mode in React

**Strict Mode** is a **development tool**
👉 Helps you find **bugs, unsafe code, and side effects**

---

## 🔹 How to Use

```jsx
import React from "react";

<React.StrictMode>
  <App />
</React.StrictMode>
```

---

## 🔹 What Strict Mode Does

### ✔ 1. Detects Bugs

* Unsafe lifecycle methods
* Deprecated APIs

---

### ✔ 2. Detects Side Effects 🔥

👉 It **runs components twice (only in development)**

```jsx
function App() {
  console.log("Rendered");
  return <h1>Hello</h1>;
}
```

👉 Output in console:

```
Rendered
Rendered
```

👉 This helps detect **impure code**

---

### ✔ 3. Warns About Bad Practices

* Missing keys
* Legacy code
* Improper usage

---

## 🔹 Important Point ❗

👉 Double rendering happens **only in development**
👉 NOT in production ✅

---

## 🔹 Why React Does This?

To ensure:

* Components are **pure**
* Side effects are handled correctly
* Code is future-proof

---

## 🔹 Common Confusion 😵

👉 “Why API is calling twice??”

```jsx
useEffect(() => {
  fetchData();
}, []);
```

👉 In Strict Mode → runs twice (dev only)

---

## 🔹 Fix (Best Practice)

Write safe code:

```jsx
useEffect(() => {
  let ignore = false;

  if (!ignore) {
    fetchData();
  }

  return () => {
    ignore = true;
  };
}, []);
```

---

## 🔹 When to Use?

✔ Always use in development
✔ Helps catch hidden bugs

---

## 🔹 Key Points (Interview 💡)

* Dev-only tool
* Runs components twice
* Detects side effects
* Improves code quality

---

## 🚀 Summary

👉 Strict Mode = bug detector 🕵️
👉 Double render is normal (dev only)
👉 Makes your app stronger

---
---

# ⚡ Effects (`useEffect`) in React

**Effects = side effects in React**
👉 Handle things **outside rendering**

Examples:

* API calls
* Timers
* DOM updates
* Subscriptions

---

## 🔹 Basic Syntax

```jsx id="0g7q2x"
import { useEffect } from "react";

useEffect(() => {
  console.log("Runs after render");
}, []);
```

---

## 🔹 3 Important Cases 🔥

---

### 1. Run Once (on mount)

```jsx id="1s8v4m"
useEffect(() => {
  console.log("Only once");
}, []);
```

👉 Empty dependency array `[]`

---

### 2. Run on State Change

```jsx id="k7n2p9"
useEffect(() => {
  console.log("Count changed");
}, [count]);
```

👉 Runs when `count` changes

---

### 3. Run Every Render ❌

```jsx id="m4p6t1"
useEffect(() => {
  console.log("Every render");
});
```

👉 No dependency array

---

## 🔹 Cleanup Function (VERY IMPORTANT 🔥)

Used to **stop/clean things**

```jsx id="y2x8n6"
useEffect(() => {
  const id = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    clearInterval(id);
  };
}, []);
```

👉 Prevents memory leaks

---

## 🔹 Real Example (API Call)

```jsx id="r5k3w8"
useEffect(() => {
  fetch("https://api.example.com/data")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);
```

---

## 🔹 Dependency Array Rule ❗

👉 Always include dependencies

```jsx id="z9q1u3"
useEffect(() => {
  console.log(name);
}, [name]);
```

---

## 🔹 Common Mistake ❌

```jsx id="w3v7b2"
useEffect(() => {
  setCount(count + 1);
}, []);
```

👉 May cause unexpected behavior

---

## 🔹 Key Points (Interview 💡)

* `useEffect` handles side effects
* Runs after render
* Controlled by dependency array
* Cleanup is important

---

## 🚀 Summary

👉 `useEffect` = side effects manager
👉 Very important for real apps 🔥🔥
👉 Used everywhere (API, timers, etc.)

---
---

# 🎯 Refs in React

**Refs = way to directly access DOM elements or store mutable values**

👉 Used when React’s normal flow (state/props) is not enough

---

## 🔹 Why Use Refs?

* Access DOM directly
* Focus input
* Scroll, play video
* Store values without re-render

---

## 🔹 Basic Example

```jsx id="y6m2k1"
import { useRef } from "react";

function App() {
  const inputRef = useRef();

  // This log will only run ONCE (at start) 
  // It will NOT run when you type "king-kong"
  console.log("hi"); 

  const handleShowValue = () => {
    // Access the value directly from the DOM node
    alert("Current Value: " + inputRef.current.value);
  };

  const handleClear = () => {
    inputRef.current.value = ""; // Manually clear the DOM node
  };

  return (
    <>
      <input ref={inputRef} defaultValue="" />
      
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <button onClick={handleShowValue}>Show Value</button>
      <button onClick={handleClear}>Clear</button>
    </>
  );
}

```

👉 Click → input gets focus 💥

---

## 🔹 How Refs Work

```jsx id="b3x9q7"
const ref = useRef();
```

👉 `ref.current` holds the value

---

## 🔹 Storing Values (No Re-render 🔥)

```jsx id="z8k4n2"
const countRef = useRef(0);

function increment() {
  countRef.current++;
  console.log(countRef.current);
}
```

👉 Value changes but UI does NOT re-render

---

## 🔹 Ref vs State

| Feature          | State | Ref   |
| ---------------- | ----- | ----- |
| Causes re-render | ✅ Yes | ❌ No  |
| Used for UI      | ✅ Yes | ❌ No  |
| Stores value     | ✅ Yes | ✅ Yes |

---

## 🔹 Access DOM Example

```jsx id="n2p7v5"
const divRef = useRef();

<div ref={divRef}>Hello</div>
```

👉 Access:

```jsx id="h5r1k9"
divRef.current.style.color = "red";
```

---

## 🔹 Important Rules ❗

* Don’t overuse refs
* Prefer state for UI updates
* Use refs for DOM or persistent values

---

## 🔹 Key Points (Interview 💡)

* `useRef` gives direct DOM access
* Does NOT trigger re-render
* Used for focus, timers, etc.

---

## 🚀 Summary

👉 Refs = escape hatch from React   
👉 Useful but use carefully  
👉 Important for DOM handling

---
---

# 🌍 Context in React

**Context = way to share data globally**  
👉 Without passing props manually (no prop drilling 🔥)

---

## 🔹 Problem (Why Context?)

```txt
Parent → Child1 → Child2 → ... → Child10
```

👉 Passing props through all levels ❌ (prop drilling)

---

## 🔹 Solution: Context API ✅

👉 Share data **directly to any component**

---

## 🔹 Step-by-Step Example

---

### 1. Create Context

```jsx id="x8k3p1"
import { createContext } from "react";

export const MyContext = createContext();
```

---

### 2. Provide Data (Parent)

```jsx id="m2n7q4"
import { MyContext } from "./MyContext";

function Parent() {
  return (
    <MyContext.Provider value="Hello Krishna">
      <Child1 />
    </MyContext.Provider>
  );
}
```

---

### 3. Consume Data (Any Child 🔥)

```jsx id="p9v4t6"
import { useContext } from "react";
import { MyContext } from "./MyContext";

function Child10() {
  const data = useContext(MyContext);

  return <h1>{data}</h1>;
}
```

👉 Direct access 💥
👉 No need to pass through Child1 → Child9

---

## 🔹 When to Use Context?

✔ User data (login info)
✔ Theme (dark/light)
✔ Language
✔ Global settings

---

## 🔹 When NOT to Use ❌

* Frequent updates (can cause re-renders)
* Very complex state → use Redux/Zustand

---

## 🔹 Multiple Contexts

```jsx id="c7w2x8"
<AuthContext.Provider>
  <ThemeContext.Provider>
    <App />
  </ThemeContext.Provider>
</AuthContext.Provider>
```

---

## 🔹 Key Points (Interview 💡)

* Avoids prop drilling
* Global state sharing
* Uses:

  * `createContext`
  * `Provider`
  * `useContext`

---

## 🚀 Summary

👉 Context = global data access  
👉 Clean & efficient  
👉 Very useful in real apps 🔥

---
---

# 🚪 Portals in React

**Portals = render components outside the normal DOM hierarchy**

👉 Even if a component is inside parent in code, it can be rendered somewhere else in DOM

---

## 🔹 Why Use Portals?

Some UI elements need to **escape parent styles/layout**

Examples:

* Modals (popup)
* Tooltips
* Dropdowns

👉 Avoid issues like:

* `overflow: hidden`
* `z-index` problems

---

## 🔹 Basic Idea

```txt id="b7k2x9"
React Tree ≠ DOM Tree
```

👉 Component stays in React tree  
👉 But renders in different DOM node

---

## 🔹 Setup

### 1. Add a root in HTML

```html id="j9p3n8"
<div id="root"></div>
<div id="portal-root"></div>
```

---

### 2. Use Portal

```jsx id="v5t8k2"
import ReactDOM from "react-dom";

function Modal() {
  return ReactDOM.createPortal(
    <div className="modal">Hello Modal</div>,
    document.getElementById("portal-root")
  );
}
```

---

## 🔹 Real Example (Modal)

```jsx id="x4p7m1"
function App() {
  return (
    <>
      <h1>Main App</h1>
      <Modal />
    </>
  );
}
```

👉 Modal renders outside main app DOM 💥

---

## 🔹 Key Advantage

✔ Break out of parent container
✔ Better UI layering
✔ Cleaner design

---

## 🔹 Important Point ❗

👉 Events still work normally  
👉 Portal is only DOM change, not React tree change

---

## 🔹 Key Points (Interview 💡)

* Use `ReactDOM.createPortal()`
* Render outside root
* Used for modals, tooltips
* Solves layout issues

---

## 🚀 Summary

👉 Portals = render anywhere in DOM  
👉 Useful for UI overlays  
👉 Advanced but important 🔥

---
---
# ⏳ Suspense in React

**Suspense = handle loading states easily**
👉 Mainly used with **lazy loading components**

---

## 🔹 Why Suspense?

👉 When loading a component or data:

* It takes time ⏳
* UI may look blank ❌

👉 Suspense lets you show **fallback UI (loader)**

---

## 🔹 Basic Example

```jsx id="c2m8k4"
import { Suspense, lazy } from "react";

const MyComponent = lazy(() => import("./MyComponent"));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <MyComponent />
    </Suspense>
  );
}
```

---

## 🔹 How It Works

1. Component is loaded lazily
2. While loading → shows fallback
3. After load → renders component

---

## 🔹 Lazy Loading

```jsx id="y7n3p6"
const Page = lazy(() => import("./Page"));
```

👉 Loads component **only when needed**

---

## 🔹 Real Use Case 🔥

* Large apps
* Route-based loading
* Improve performance

---

## 🔹 Example with Routes

```jsx id="v4k8q1"
<Suspense fallback={<p>Loading page...</p>}>
  <Routes>
    <Route path="/home" element={<Home />} />
  </Routes>
</Suspense>
```

---

## 🔹 Benefits

✔ Faster initial load
✔ Better user experience
✔ Code splitting

---

## 🔹 Important Notes ❗

* Works with `React.lazy()`
* Must wrap inside `<Suspense>`
* Fallback UI is required

---

## 🔹 Key Points (Interview 💡)

* Suspense = loading handler
* Used with lazy loading
* Improves performance
* Shows fallback UI

---

## 🚀 Summary

👉 Suspense = smooth loading experience  
👉 Important for performance optimization 🔥

---
---

# 🚨 Error Boundaries in React

**Error Boundaries = components that catch JavaScript errors in UI**

👉 Prevent entire app from crashing 💥
👉 Show fallback UI instead

---

## 🔹 Why Needed?

Without Error Boundary ❌

```txt
Error in one component → whole app crashes 😵
```

With Error Boundary ✅

```txt
Error in component → show fallback UI 👍
```

---

## 🔹 Important Rule ❗

👉 Error Boundaries work only in **Class Components**

---

## 🔹 Basic Example

```jsx id="x3p8n2"
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }

    return this.props.children;
  }
}
```

---

## 🔹 Usage

```jsx id="m7k4p9"
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```

👉 If `MyComponent` crashes → fallback UI shown

---

## 🔹 Where to Use?

✔ Around important UI parts
✔ Around routes/pages
✔ Around risky components

---

## 🔹 What It Catches ✅

* Rendering errors
* Lifecycle errors
* Constructor errors

---

## 🔹 What It DOES NOT Catch ❌

* Event handler errors
* Async code (setTimeout, API)
* Server-side errors

---

## 🔹 Key Points (Interview 💡)

* Prevent app crash
* Works only in class components
* Uses:

  * `getDerivedStateFromError`
  * `componentDidCatch`

---

## 🚀 Summary

👉 Error Boundary = safety net 🛡️   
👉 Handles UI errors gracefully   
👉 Important for production apps

---
---
