# RAW NODE.JS

> Great — this is the **right way to learn Node.js**. Let’s go step by step.   
> [video link](https://www.youtube.com/watch?v=32M1al-Y6Ag)

# 🚀 Intro & Philosophy

## 🎯 What this section is trying to teach

Before writing any code, the video sets a mindset:

👉 **Don’t jump directly to frameworks**   
👉 First understand how Node.js works internally

---

## 🧠 Core Philosophy

### ❌ Wrong approach (what most beginners do)

* Directly learn Express.js
* Copy-paste code
* Don’t understand what’s happening

👉 Result:

* Can’t debug
* Gets stuck easily

---

### ✅ Right approach (what this video teaches)

Start with **raw Node.js**

Learn:

* How server works
* How request comes
* How response is sent
* How routing works internally

👉 Then move to frameworks

---

## 🏗️ Why Learn “Raw Node.js” First?

Think like this:

### 🧱 Analogy

* Node.js = **Engine**
* Express.js = **Car body**

If engine fails → car useless
If you understand engine → you can fix anything

---

## 🔥 Real Example

When you use Express:

```js
app.get('/', (req, res) => {
  res.send("Hello");
});
```

Looks simple right?

But internally:

* HTTP server is created
* Request is parsed
* Routing logic is checked
* Response is formatted

👉 This video teaches you **what happens behind this line**

---

## ⚙️ What is Node.js (in simple words)

👉 Node.js = JavaScript runtime built on
Google Chrome V8 engine

### Meaning:

* Runs JS outside browser
* Can build backend/server

---

## 🧩 What You’ll Build in This Course

By the end (based on video flow):

* Basic HTTP server
* Routing system
* REST API
* File handling
* Middleware logic

👉 Basically a **mini Express-like backend**

---

## 🧠 Important Concept Introduced Early

### Event-driven + Non-blocking

Node.js does NOT do:
❌ “Wait for one task to finish”

Instead:
✅ Handles multiple requests efficiently

👉 This is why Node.js is fast

---

## 💡 Why This Matters for YOU

Since you are building:

* Chatbot backend
* APIs (Node + React Native)

👉 If you skip this foundation:

* You’ll struggle with bugs
* You won’t understand request flow

👉 If you learn this properly:

* You can build your own backend from scratch
* Debug anything
* Use Express like a pro (not blindly)

---

## 🧭 Simple Roadmap (From This Philosophy)

1. Learn raw Node.js ✅ (current step)
2. Understand HTTP deeply
3. Build API manually
4. Then use Express.js
5. Then connect frontend (your chatbot app)

---

## 🧠 Summary (Remember This)

👉 “Frameworks make things easy, but hide understanding”
👉 “Raw Node.js makes things harder, but builds strong foundation”

---
---

# ⚙️ Installation

---

## 🎯 Goal of this section

Set up **Node.js** on your system so you can:

* Run JavaScript outside browser
* Build backend apps

---

## 🧩 What gets installed?

When you install Node.js, you actually get:

1. **Node runtime** → runs JS
2. **NPM (Node Package Manager)** → installs libraries

---

## 📥 Step 1: Download Node.js

Go to official site:
👉 [https://nodejs.org](https://nodejs.org)

You’ll see two versions:

### 🟢 LTS (Recommended)

* Stable
* Best for projects
* Use this ✅

### 🟡 Current

* Latest features
* May have bugs

👉 Always choose **LTS**

---

## 🛠️ Step 2: Install

Just:

* Download installer
* Click **Next → Next → Finish**

👉 No special setup needed

---

## ✅ Step 3: Verify Installation

Open terminal and run:

```bash
node -v
npm -v
```

👉 Example output:

```bash
v20.x.x
10.x.x
```

---

## 🧠 What these mean

* `node -v` → Node.js version
* `npm -v` → NPM version

👉 If both work → setup is correct ✅

---

## ⚠️ Common Errors (Important)

### ❌ Command not found

👉 Fix:

* Restart terminal
* Reinstall Node
* Check PATH

---

### ❌ Wrong version

👉 Fix:

* Download LTS version again

---

## 🧪 Quick Test

Create a file:

```bash
touch test.js
```

Add:

```js
console.log("Node working!");
```

Run:

```bash
node test.js
```

👉 Output:

```
Node working!
```

---

## 🧠 Why This Step Matters

Without installation:

* You cannot run backend code
* You cannot install packages like:

  * Express.js
  * Database libraries
  * API tools

---

## 💡 Pro Tip (Very Useful)

Install this globally:

```bash
npm install -g nodemon
```

👉 Nodemon:

* Auto-restarts server
* Saves time during development

---

## 🧭 What You Should Do Now

✔ Install Node
✔ Run `node -v`
✔ Run a test file

---
---

# 🧪 Node REPL 

---

## 🎯 What is REPL?

**REPL = Read → Eval → Print → Loop**

👉 It is an **interactive terminal** where you can run JavaScript instantly using
Node.js

---

## ⚡ How to Start REPL

Open terminal and type:

```bash
node
```

👉 You’ll see something like:

```bash
>
```

Now you can write JavaScript directly.

---

## 🧠 How REPL Works

| Step  | Meaning              |
| ----- | -------------------- |
| Read  | Takes your input     |
| Eval  | Executes it          |
| Print | Shows result         |
| Loop  | Waits for next input |

---

## 🧪 Examples (Try These)

### Basic Math

```js
2 + 3
```

👉 Output:

```
5
```

---

### Variables

```js
let name = "Krishna"
name
```

---

### Functions

```js
function add(a, b) {
  return a + b;
}

add(2, 5)
```

---

### Objects

```js
const user = { name: "Krishna", age: 21 }
user.name
```

---

## 🔥 Why REPL is Useful

### 1. Quick Testing

No need to create file

👉 Example:

* Test logic
* Try syntax

---

### 2. Debugging

Check small parts of your code

---

### 3. Learning JavaScript Faster

Experiment instantly

---

## ⚙️ Special REPL Commands

These are built-in shortcuts:

### Exit REPL

```bash
.exit
```

or press:

```
Ctrl + C (twice)
```

---

### Clear Screen

```bash
.clear
```

---

### Get Help

```bash
.help
```

---

## ⚠️ Important Note

REPL is:

* ❌ Not for big projects
* ✅ Only for testing / experimenting

---

## 💡 Real Developer Usage

👉 Before writing code in file:

* Test logic in REPL
* Then move to project

---

## 🧠 Summary

* REPL = Interactive JS environment
* Runs inside Node.js
* Used for quick testing & debugging

---
---

# 📦 Setup & `package.json` Init 
---

## 🎯 Goal of this step

Create a **Node.js project structure** and initialize a config file called:

👉 `package.json`

---

## 🧠 What is `package.json`?

It’s the **heart of your Node project**

👉 It stores:

* Project name
* Version
* Scripts
* Dependencies (libraries)

---

## 🏗️ Step 1: Create a Project Folder

```bash
mkdir my-node-app
cd my-node-app
```

---

## ⚙️ Step 2: Initialize Project

Run:

```bash
npm init
```

👉 It will ask questions like:

* project name
* version
* description

---

### ⚡ Shortcut (recommended)

```bash
npm init -y
```

👉 Creates file instantly with default values

---

## 📄 Example `package.json`

```json
{
  "name": "my-node-app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  }
}
```

---

## 🔍 Important Fields Explained

### 1. `"name"`

Project name

---

### 2. `"version"`

Version of your app

---

### 3. `"main"`

Entry file

👉 Node starts from here

---

### 4. `"scripts"` (VERY IMPORTANT)

```json
"scripts": {
  "start": "node index.js"
}
```

Run using:

```bash
npm start
```

👉 Saves typing time

---

## 📦 Why This File is Important

When you install packages (like
Express.js):

```bash
npm install express
```

👉 It automatically updates:

```json
"dependencies": {
  "express": "^4.x.x"
}
```

---

## 🧠 Real Project Structure Now

```
my-node-app/
│
├── package.json
├── index.js
```

---

## 🧪 Step 3: Create Entry File

```bash
touch index.js
```

Add:

```js
console.log("Project started");
```

Run:

```bash
node index.js
```

---

## ⚠️ Common Beginner Mistakes

### ❌ Forgetting `package.json`

👉 Then dependencies are not tracked

---

### ❌ Not using scripts

👉 Leads to repetitive commands

---

## 💡 Pro Tip

Later you’ll add:

```json
"type": "module"
```

👉 Enables modern ES Modules (import/export)

---

## 🧠 Summary

* `package.json` = project config file
* Created using `npm init`
* Stores dependencies & scripts
* Required for any real project

---
---

# ▶️ Running JavaScript Files 
---

## 🎯 Goal of this section

Understand how to execute your Node.js program from terminal using
Node.js

---

## 🧠 Basic Idea

In browser:

* JS runs automatically

In Node.js:
👉 You must **manually run the file**

---

## ⚙️ Step 1: Create a File

```bash
touch index.js
```

Add code:

```js
console.log("Hello from Node!");
```

---

## ▶️ Step 2: Run the File

```bash
node index.js
```

👉 Output:

```
Hello from Node!
```

---

## 🧠 What’s Happening Internally

When you run:

```bash
node index.js
```

👉 Node does:

1. Reads the file
2. Executes JavaScript using V8 engine
3. Prints output to terminal

---

## 📌 Important Rule

👉 Node always starts from the file you give:

```bash
node filename.js
```

---

## ⚡ Using `package.json` Scripts (Better Way)

Instead of typing:

```bash
node index.js
```

Add this in `package.json`:

```json
"scripts": {
  "start": "node index.js"
}
```

Now run:

```bash
npm start
```

👉 Cleaner & professional way

---

## 🔄 Auto Restart (Dev Mode)

Instead of restarting manually, use:

```bash
nodemon index.js
```

👉 Nodemon:

* Watches file changes
* Restarts automatically

---

## 🧪 Multiple Files Example

```plaintext
project/
├── index.js
├── app.js
```

Run specific file:

```bash
node app.js
```

👉 Node only runs the file you specify

---

## ⚠️ Common Mistakes

### ❌ Wrong file name

```bash
node Index.js   ❌
node index.js   ✅
```

---

### ❌ Not in correct folder

👉 Always `cd` into project folder

---

### ❌ Forget `.js`

```bash
node index   ❌
node index.js ✅
```

---

## 💡 Pro Tip (Important for Backend)

👉 This command:

```bash
node index.js
```

is what actually:

* Starts your server
* Runs your API
* Executes backend logic

---

## 🧠 Summary

* Use `node filename.js` to run code
* Node executes file using V8 engine
* Use `npm start` for cleaner workflow
* Use nodemon for development

---
---

# 📚 CommonJS Modules 

---

## 🎯 Goal of this section

Learn how to **split your code into multiple files** and reuse it using the default Node.js module system.

---

## 🧠 Why Modules?

Without modules ❌:

* Everything in one file
* Messy code
* Hard to maintain

With modules ✅:

* Clean structure
* Reusable code
* Easy debugging

---

## ⚙️ What is CommonJS?

👉 CommonJS is the **default module system in Node.js**

It uses:

* `require()` → to import
* `module.exports` → to export

---

## 📦 Basic Example

### 📁 math.js (export file)

```js id="n2p7kl"
function add(a, b) {
  return a + b;
}

module.exports = add;
```

---

### 📁 index.js (import file)

```js id="6qyzs3"
const add = require('./math');

console.log(add(2, 3));
```

👉 Output:

```id="p0p8sm"
5
```

---

## 🧩 How It Works Internally

When you write:

```js id="x88d62"
const add = require('./math');
```

👉 Node:

1. Finds `math.js`
2. Executes it
3. Returns `module.exports`

---

## 🔁 Export Multiple Things

### 📁 utils.js

```js id="m9h01h"
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

module.exports = { add, sub };
```

---

### 📁 index.js

```js id="c4x1m9"
const utils = require('./utils');

console.log(utils.add(5, 2));
console.log(utils.sub(5, 2));
```

---

## 🧠 Shortcut (Destructuring)

```js id="px8slq"
const { add, sub } = require('./utils');
```

👉 Cleaner way

---

## 📌 Important Rules

### 1. Use `./` for local files

```js id="yk72lj"
require('./file') ✅
require('file') ❌
```

---

### 2. `.js` is optional

```js id="mwzv5l"
require('./math')  // same as math.js
```

---

### 3. Modules are cached

👉 Node loads a file **only once**

* Improves performance

---

## ⚠️ Common Mistakes

### ❌ Forgetting export

```js id="49j9co"
function add() {}
// no module.exports ❌
```

👉 Import will fail

---

### ❌ Wrong path

```js id="p9h7dz"
require('math') ❌
require('./math') ✅
```

---

## 💡 Real-World Use

In your backend project, you’ll separate:

```plaintext id="g4d8vq"
controllers/
routes/
services/
utils/
```

👉 Each file = module

---

## 🔥 Why This is Important

Before learning
Express.js

👉 You must understand:

* How files connect
* How logic is shared

---

## 🧠 Summary

* CommonJS = default module system
* `require()` → import
* `module.exports` → export
* Helps organize code

---
---

# ✨ ES Modules 

---

## 🎯 Goal of this section

Learn the **modern JavaScript module system** used in:

* React
* Frontend apps
* Modern backend apps

---

## 🧠 What are ES Modules?

👉 ES Modules (ESM) use:

* `import` → to bring code
* `export` → to share code

They are newer than CommonJS and now **standard in JavaScript**

---

## ⚙️ Enable ES Modules in Node.js

By default, Node uses CommonJS.

👉 To enable ES Modules:

Add in `package.json`:

```json id="dti0ej"
"type": "module"
```

---

## 📦 Basic Example

### 📁 math.js

```js id="k6k4tg"
export function add(a, b) {
  return a + b;
}
```

---

### 📁 index.js

```js id="9g9c1q"
import { add } from './math.js';

console.log(add(2, 3));
```

👉 Output:

```id="1bq1wc"
5
```

---

## 📌 Important Rule (VERY IMPORTANT)

👉 In ES Modules, you MUST include file extension:

```js id="3m54sg"
import { add } from './math.js'; ✅
import { add } from './math'; ❌
```

---

## 🔁 Default Export

### 📁 math.js

```js id="z8g0hr"
export default function add(a, b) {
  return a + b;
}
```

---

### 📁 index.js

```js id="pn6x0s"
import add from './math.js';
```

---

## 🧩 Named vs Default Export

| Type    | Syntax               |
| ------- | -------------------- |
| Named   | `export { add }`     |
| Default | `export default add` |

👉 You can only have:

* Many named exports ✅
* One default export ✅

---

## 🔄 Import Everything

```js id="rd9r1s"
import * as math from './math.js';

math.add(2, 3);
```

---

## ⚔️ CommonJS vs ES Modules

| Feature         | CommonJS         | ES Modules   |
| --------------- | ---------------- | ------------ |
| Import          | `require()`      | `import`     |
| Export          | `module.exports` | `export`     |
| Default in Node | Yes              | Needs config |
| Used in React   | ❌                | ✅            |

---

## ⚠️ Common Mistakes

### ❌ Forgetting `"type": "module"`

👉 import will not work

---

### ❌ Missing `.js`

```js id="t9eyr5"
import x from './file' ❌
```

---

### ❌ Mixing require + import

👉 Don’t mix both in same file

---

## 💡 When to Use What?

👉 Use ES Modules if:

* New project
* React / frontend
* Modern backend

👉 Use CommonJS if:

* Old project
* Legacy code

---

## 🔥 Real-World Insight

Frameworks like
Express.js
support both — but modern code prefers ES Modules

---

## 🧠 Summary

* ES Modules = modern JS system
* Uses `import` / `export`
* Needs `"type": "module"`
* Must include `.js` extension

---
---

# 🌐 HTTP Module & Create Server 

---

## 🎯 Goal of this section

Use Node’s built-in **HTTP module** to create a **real web server** using
Node.js

---

## 🧠 What is the HTTP Module?

👉 It’s a **core module** in Node.js
👉 No need to install anything

It helps you:

* Receive requests (from browser / apps)
* Send responses

---

## ⚙️ Basic Server Example

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

## ▶️ Run the Server

```bash
node index.js
```

Open browser:

```
http://localhost:3000
```

👉 You’ll see:

```
Hello World
```

---

## 🧩 Understanding the Code

---

### 1. Import HTTP

```js
const http = require('http');
```

👉 Loads Node’s HTTP module

---

### 2. Create Server

```js
http.createServer((req, res) => { ... });
```

👉 This function runs **every time a request comes**

---

### 3. Request Object (`req`)

Contains:

* URL (`req.url`)
* Method (`req.method`)
* Headers

---

### 4. Response Object (`res`)

Used to send data:

```js
res.end("Hello");
```

👉 Ends response and sends data

---

### 5. Listen on Port

```js
server.listen(3000);
```

👉 Server runs on:

```
http://localhost:3000
```

---

## 🔁 Request Flow (Very Important)

1. Browser sends request
2. Server receives (`req`)
3. Your function runs
4. You send response (`res`)
5. Browser displays result

---

## 🔥 Try This Example

```js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About Page");
  } else {
    res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server started");
});
```

👉 Now test:

* `/` → Home
* `/about` → About
* anything else → 404

---

## ⚠️ Important Rules

### ❗ Always end response

```js
res.end()
```

👉 If not → browser keeps loading

---

### ❗ Port must be free

If error:

```
EADDRINUSE
```

👉 Change port:

```js
server.listen(5000);
```

---

## 💡 Why This is Powerful

👉 You just built what
Express.js
does internally — but manually

---

## 🧠 Real Understanding (Key Insight)

This one function:

```js
(req, res) => {}
```

👉 is the **core of backend development**

Everything (Express, APIs, etc.) is built on this idea.

---

## 🧠 Summary

* HTTP module = built-in server tool
* `createServer()` handles requests
* `req` = incoming data
* `res` = outgoing data
* `listen()` starts server

---
---

# ⚡ NPM Scripts

---

## 🎯 Goal of this section

Use `package.json` to create **short commands** instead of typing long terminal commands every time.

---

## 🧠 What are NPM Scripts?

👉 NPM Scripts are **custom commands** defined inside
`package.json`

They help you:

* Run your app easily
* Automate tasks

---

## 📄 Where to Write Scripts?

Inside `package.json`:

```json id="m3c6pv"
"scripts": {
  "start": "node index.js"
}
```

---

## ▶️ Run Script

```bash id="7t9v6t"
npm start
```

👉 Instead of:

```bash id="x17u8u"
node index.js
```

---

## 🔥 More Useful Scripts

```json id="wqph4s"
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

Run:

```bash id="u2a2sh"
npm run dev
```

---

## 🧠 Why This is Important

Without scripts ❌:

```bash
node index.js
nodemon index.js
node server.js
```

With scripts ✅:

```bash
npm start
npm run dev
```

👉 Cleaner + standard practice

---

## ⚙️ Special Script Names

### 1. `start`

```bash id="6h0z5q"
npm start
```

👉 No need for `run`

---

### 2. Others (need `run`)

```bash id="z5c4u7"
npm run dev
npm run build
```

---

## 🧩 Real Project Example

```json id="xdl3qj"
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js",
  "test": "echo \"No tests yet\""
}
```

---

## 💡 Pro Tip

Later in real apps:

* `dev` → development mode
* `start` → production mode

---

## 🔥 Important Tool Mention

For development, you’ll often use:

👉 nodemon

It:

* Watches file changes
* Restarts server automatically

---

## ⚠️ Common Mistakes

### ❌ Forgetting quotes

```json id="p1q0ls"
"start": node index.js ❌
"start": "node index.js" ✅
```

---

### ❌ Wrong script name

```bash id="3v4b2k"
npm dev ❌
npm run dev ✅
```

---

## 🧠 Summary

* Scripts = shortcuts for commands
* Defined in `package.json`
* Use `npm start` or `npm run <name>`
* Makes workflow clean & fast

---
---

# 📦 NPM Modules & Nodemon 
---

## 🎯 Goal of this section

Learn how to:

* Install external libraries (modules)
* Use tools to improve development speed

---

## 🧠 What are NPM Modules?

👉 NPM modules = **pre-built packages** you can use in your project

Instead of writing everything from scratch:

* You install ready-made solutions

---

## 📦 NPM = Node Package Manager

Comes with
Node.js

👉 Used to:

* Install packages
* Manage dependencies

---

## ⚙️ Install a Package

```bash id="t89bt7"
npm install express
```

👉 Installs
Express.js

---

## 📁 What Happens After Install?

You’ll see:

```plaintext id="31plk7"
project/
├── node_modules/
├── package.json
├── package-lock.json
```

---

### 🔍 Explained

* `node_modules/` → all installed packages
* `package.json` → tracks dependencies
* `package-lock.json` → exact versions

---

## 🧩 Using Installed Module

```js id="9qnk4z"
const express = require('express');
```

👉 Now you can use it

---

## 🔁 Installing Dev Dependencies

```bash id="dqp9r7"
npm install nodemon --save-dev
```

👉 Stored in:

```json id="q8svmq"
"devDependencies": {}
```

---

## 🔥 Nodemon (Very Important)

👉 nodemon

### Problem:

Without nodemon:

* Change code → restart manually

---

### Solution:

```bash id="kxnj0y"
nodemon index.js
```

👉 It:

* Watches files
* Restarts server automatically

---

## ⚙️ Use Nodemon with Scripts

```json id="3m1u6z"
"scripts": {
  "dev": "nodemon index.js"
}
```

Run:

```bash id="ek3p5h"
npm run dev
```

---

## 📌 Types of Dependencies

| Type            | Meaning               |
| --------------- | --------------------- |
| dependencies    | Needed for app to run |
| devDependencies | Only for development  |

---

## ⚠️ Important Rule

👉 Never upload `node_modules` to Git

(Next topic will explain `.gitignore`)

---

## 💡 Real-World Examples of Modules

* Express → backend framework
* Axios → API requests
* Mongoose → MongoDB

---

## 🧠 Why This is Important

👉 Without NPM:

* You write everything manually ❌

👉 With NPM:

* Faster development ✅
* Industry standard ✅

---

## 🔥 Key Insight

Node.js becomes powerful **because of NPM ecosystem**

---

## 🧠 Summary

* NPM installs packages
* `npm install <package>`
* nodemon improves dev workflow
* dependencies vs devDependencies

---
---

# 🚫 `.gitignore` File 

---

## 🎯 Goal of this section

Tell Git **which files/folders NOT to track**

---

## 🧠 What is `.gitignore`?

👉 A file used by
Git
to ignore unnecessary or sensitive files

---

## 📁 Why Do We Need It?

Without `.gitignore` ❌:

* Huge uploads (node_modules 😱)
* Sensitive data leaked
* Messy repository

With `.gitignore` ✅:

* Clean repo
* Secure data
* Faster pushes

---

## ⚠️ Most Important Folder to Ignore

### ❌ `node_modules/`

👉 Contains:

* Thousands of files
* Can be reinstalled using `npm install`

---

## 📄 Basic `.gitignore` for Node.js

```id="0ds7o8"
node_modules/
.env
logs/
*.log
dist/
```

---

## 🔍 Explained

### `node_modules/`

👉 Installed packages (don’t upload)

---

### `.env`

👉 Contains secrets (API keys, DB passwords)

---

### `*.log`

👉 Ignore all log files

---

### `dist/`

👉 Build output (can regenerate)

---

## 🧪 How to Create

```bash id="wdrw5p"
touch .gitignore
```

Add content inside it.

---

## ⚠️ Common Mistake (Very Important)

### ❌ Adding `.gitignore` after pushing files

👉 Git already tracks them!

---

### ✅ Fix:

```bash id="v2b2kk"
git rm -r --cached node_modules
```

Then commit again

---

## 🔐 Why `.env` Must Be Ignored

Example `.env`:

```id="8hl2u7"
API_KEY=secret123
DB_PASSWORD=xyz
```

👉 If pushed:

* Anyone can see it 😬
* Security risk

---

## 💡 Real-World Practice

Every Node project uses `.gitignore`
before pushing to GitHub

---

## 🧠 Summary

* `.gitignore` tells Git what to ignore
* Always ignore:

  * node_modules
  * .env
  * logs
* Keeps repo clean & secure

---
---

# 🔐 Environment Variables & `.env` 

---

## 🎯 Goal of this section

Learn how to store:

* Secrets 🔑
* Config values ⚙️

**safely outside your code**

---

## 🧠 What are Environment Variables?

👉 Variables stored **outside your code**, but used inside your app

---

## ❌ Problem Without Them

```js
const API_KEY = "mySecret123"; // ❌ BAD
```

👉 Issues:

* Exposed in GitHub
* Not secure
* Hard to change

---

## ✅ Solution: `.env` File

Create a file:

```bash
touch .env
```

Add:

```env
PORT=5000
API_KEY=secret123
DB_URL=mongodb://localhost:27017
```

---

## ⚙️ How to Use in Node.js

Node **does NOT read `.env` automatically**

👉 Install package:

```bash
npm install dotenv
```

---

## 📦 Use `dotenv`

```js
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.PORT);
```

---

## 🔍 What is `process.env`?

👉 Built-in object in Node.js

```js
process.env.PORT
```

Used to access:

* Environment variables
* System config

---

## ⚡ Example Server with `.env`

```js
import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.end("Server running");
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

## 🔐 Why This is Important

👉 Keeps secrets safe:

* API keys
* Database passwords
* JWT secrets

---

## 🚫 VERY IMPORTANT RULE

👉 NEVER push `.env` to GitHub

Already handled by `.gitignore` ✅

---

## 💡 Real-World Usage

In your projects (like chatbot backend):

You’ll store:

* Gemini / OpenAI API keys
* Database URL
* Server port

---

## ⚠️ Common Mistakes

### ❌ Forgetting `dotenv.config()`

👉 Variables won’t load

---

### ❌ Typo in `.env`

```env
PORT = 5000 ❌ (space issue)
PORT=5000   ✅
```

---

### ❌ Accessing before config

```js
console.log(process.env.PORT); ❌ before dotenv
```

---

## 🧠 Summary

* `.env` stores secrets/config
* Use `dotenv` to load it
* Access via `process.env`
* Never push `.env`

---
---

# 📥 Request Object (`req`) 
---

## 🎯 Goal of this section

Understand the **request object (`req`)** in a Node.js server:

* What data comes from client
* How to read it

---

## 🧠 What is `req`?

In this code:

```js id="o5nq3u"
http.createServer((req, res) => {
  // req is here
});
```

👉 `req` = **Request Object**

It represents:

> 📡 Data sent from client (browser / app / API tool)

---

## 🌐 When Does `req` Get Created?

Every time someone visits:

```id="rqsz4q"
http://localhost:3000
```

👉 A request is sent → Node creates `req`

---

## 🔍 Most Important Properties

---

### 1. `req.url`

```js id="ljn4hm"
console.log(req.url);
```

👉 Example:

```id="k90o91"
/about
```

---

### 2. `req.method`

```js id="3o2c5k"
console.log(req.method);
```

👉 Output:

```id="j7yyfb"
GET
POST
PUT
DELETE
```

---

### 3. `req.headers`

```js id="e5ex7o"
console.log(req.headers);
```

👉 Contains:

* Browser info
* Content type
* Authorization

---

## 🧪 Example Code

```js id="p5bqxe"
const http = require('http');

const server = http.createServer((req, res) => {
  console.log("URL:", req.url);
  console.log("Method:", req.method);

  res.end("Check terminal");
});

server.listen(3000);
```

👉 Open browser → see logs in terminal

---

## 🔁 Real Request Flow

1. User hits URL
2. Request sent
3. Node creates `req`
4. You read `req`
5. Send response

---

## 📦 Why `req` is Important

You use it for:

* Routing (`req.url`)
* API methods (`req.method`)
* Data from client

---

## 🔥 Example: Simple Routing

```js id="8xdtzh"
if (req.url === "/" && req.method === "GET") {
  res.end("Home Page");
}
```

---

## 💡 Real-World Usage

In APIs:

* `GET /users`
* `POST /login`

👉 All handled using `req`

---

## ⚠️ Common Mistakes

### ❌ Ignoring method

```js id="pl9n3p"
if (req.url === "/user") ❌
```

👉 Should also check:

```js id="sm7g2m"
req.method === "GET"
```

---

### ❌ Not logging during debugging

👉 Always log `req` when confused

---

## 🧠 Summary

* `req` = incoming request data
* Important fields:

  * `req.url`
  * `req.method`
  * `req.headers`
* Used for routing & APIs

---
---

# 🧪 Making Requests Using Postman

---

## 🎯 Goal of this section

Learn how to:

* Send requests to your Node.js server
* Test APIs without a browser

---

## 🧠 Why Not Just Use Browser?

Browser can only send:

* ✅ GET requests

But backend needs:

* POST
* PUT
* DELETE

👉 That’s why we use Postman

---

## ⚙️ What is Postman?

👉 A tool to:

* Send HTTP requests
* Test APIs
* Debug backend

---

## 📥 Step 1: Install Postman

Download from official site
(Desktop app recommended)

---

## ▶️ Step 2: Start Your Server

```bash id="34txea"
node index.js
```

👉 Make sure server is running

---

## 🧪 Step 3: Send a GET Request

In Postman:

* Method: `GET`
* URL:

```id="r3b0bb"
http://localhost:3000
```

Click **Send**

👉 You’ll see response:

```id="nzw3nx"
Hello World
```

---

## 🔥 Step 4: Try Different Routes

Example server:

```js id="lfrh3y"
if (req.url === "/about") {
  res.end("About Page");
}
```

Test in Postman:

```id="a33kgk"
http://localhost:3000/about
```

---

## 📩 Step 5: Send POST Request

In Postman:

* Method: `POST`
* URL:

```id="u9i7q7"
http://localhost:3000/data
```

👉 You can also send body (JSON)

---

## 📦 Sending JSON Data

Go to:

* Body → raw → JSON

```json id="c7p0sl"
{
  "name": "Krishna"
}
```

---

## 🧠 What Happens Internally

1. Postman sends request
2. Your server receives it (`req`)
3. Your logic runs
4. Response sent (`res`)
5. Postman shows result

---

## 🔍 Why This is Important

👉 Without Postman:

* Hard to test APIs
* Cannot send POST/PUT requests easily

---

## 💡 Real Developer Workflow

1. Write API
2. Test in Postman
3. Fix bugs
4. Connect frontend

---

## ⚠️ Common Mistakes

### ❌ Server not running

👉 Always start server first

---

### ❌ Wrong URL

```id="u7rk1m"
localhost:3000 ❌
http://localhost:3000 ✅
```

---

### ❌ Wrong method

👉 GET vs POST matters

---

## 🧠 Summary

* Postman is used to test APIs
* Supports all HTTP methods
* Helps debug backend
* Essential developer tool

---
---

# 🛣️ Simple Routing 

---

## 🎯 Goal of this section

Handle different:

* URLs (`/`, `/about`, `/users`)
* HTTP methods (GET, POST)

👉 This is called **routing**

---

## 🧠 What is Routing?

👉 Routing = deciding **which code runs for which request**

Example:

* `/` → Home page
* `/about` → About page
* `/users` → User data

---

## ⚙️ Basic Routing in Node.js

```js id="gvijw0"
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } 
  else if (req.url === "/about") {
    res.end("About Page");
  } 
  else {
    res.end("404 Not Found");
  }
});

server.listen(3000);
```

---

## 🧩 How It Works

1. Request comes (`req`)
2. Check `req.url`
3. Match condition
4. Send response

---

## 🔥 Add Method Check (IMPORTANT)

```js id="8i8jqs"
if (req.url === "/users" && req.method === "GET") {
  res.end("Get Users");
}
```

👉 This is how APIs work:

* GET → fetch data
* POST → send data

---

## 🧪 Full Example

```js id="pcw15u"
const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.end("Home Page");
  } 
  else if (req.url === "/about" && req.method === "GET") {
    res.end("About Page");
  } 
  else if (req.url === "/user" && req.method === "POST") {
    res.end("User Created");
  } 
  else {
    res.end("Route Not Found");
  }
});
```

---

## 📦 Real API Example

| Route      | Method | Meaning      |
| ---------- | ------ | ------------ |
| `/users`   | GET    | Get users    |
| `/users`   | POST   | Create user  |
| `/users/1` | GET    | Get one user |

---

## ⚠️ Problem with This Approach

As app grows:

* Too many `if-else` ❌
* Hard to manage ❌

👉 This is why frameworks like
Express.js exist

---

## 💡 But Why Learn This?

Because Express internally does **same thing**, but cleaner

👉 If you understand this:

* You understand backend deeply
* You debug easily

---

## 🧠 Key Insight

This line:

```js id="0p9wta"
if (req.url === "/about")
```

👉 is the **foundation of routing in all frameworks**

---

## ⚠️ Common Mistakes

### ❌ Not checking method

```js id="wqrsz0"
if (req.url === "/user") ❌
```

---

### ❌ Forgetting `else`

👉 Can send multiple responses → error

---

### ❌ Case sensitivity

```id="p8lb5q"
/About ❌
/about ✅
```

---

## 🧠 Summary

* Routing = match URL + method
* Done using `req.url` + `req.method`
* Basic routing uses `if-else`
* Foundation of backend frameworks

---
---

# 📂 Loading Files 

---

## 🎯 Goal of this section

Learn how to:

* Read files from your system
* Send them as response (HTML, JSON, etc.)

---

## 🧠 Why This is Needed?

Till now:

```js
res.end("Hello World");
```

👉 Only plain text ❌

But real apps need:

* HTML pages
* JSON files
* Images

---

## 📦 Use File System Module

Node provides built-in:

👉 `fs` (File System)

No install needed — part of
Node.js

---

## ⚙️ Basic Example (Read File)

### 📁 index.html

```html id="y2b0cf"
<h1>Welcome to My Server</h1>
```

---

### 📁 server code

```js id="k8p8py"
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile('index.html', (err, data) => {
      res.end(data);
    });
  }
});

server.listen(3000);
```

---

## 🧩 What Happens Here?

1. Request comes
2. `fs.readFile()` reads file
3. File content stored in `data`
4. `res.end(data)` sends it

---

## ⚠️ Important: Content-Type

Without content-type → browser may not understand

👉 Fix:

```js id="ujk0lu"
res.writeHead(200, { "Content-Type": "text/html" });
res.end(data);
```

---

## 🧪 Improved Example

```js id="ggznsq"
if (req.url === "/") {
  fs.readFile('index.html', (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}
```

---

## 🔥 Serving JSON File

```js id="s0vshj"
fs.readFile('data.json', (err, data) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(data);
});
```

---

## ⚠️ Error Handling (Important)

```js id="p0e6t6"
if (err) {
  res.writeHead(500);
  res.end("Server Error");
}
```

---

## 📁 Real Project Structure

```plaintext id="xgw7ti"
project/
├── index.js
├── index.html
├── data.json
```

---

## 💡 Why This Matters

👉 You are now:

* Serving web pages
* Building real backend behavior

---

## 🔥 Real Insight

Frameworks like
Express.js
have functions like:

```js
res.sendFile()
```

👉 But internally → same `fs.readFile`

---

## ⚠️ Common Mistakes

### ❌ Forgetting content-type

👉 Page may break

---

### ❌ Not handling error

👉 App crashes

---

### ❌ Wrong file path

👉 File not found

---

## 🧠 Summary

* Use `fs.readFile()` to load files
* Send file using `res.end()`
* Set correct content-type
* Handle errors properly

---
---

# 🔌 Building a Simple API 

---

## 🎯 Goal of this section

Create a **basic REST API** that:

* Handles requests
* Returns JSON data

---

## 🧠 What is an API?

👉 API = Application Programming Interface

In simple terms:

> A way for frontend (or apps) to talk to backend

---

## 📦 Example API

Request:

```http
GET /users
```

Response:

```json
[
  { "id": 1, "name": "Krishna" }
]
```

---

## ⚙️ Basic API in Node.js

```js id="sg6jls"
const http = require('http');

const users = [
  { id: 1, name: "Krishna" },
  { id: 2, name: "Arjun" }
];

const server = http.createServer((req, res) => {
  if (req.url === "/users" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(3000);
```

---

## 🧩 Key Concepts

---

### 1. JSON Response

```js id="cf1hk6"
JSON.stringify(users)
```

👉 Converts JS → JSON

---

### 2. Content-Type

```js id="k0s7bt"
"Content-Type": "application/json"
```

👉 Tells client it's JSON

---

### 3. Status Code

```js id="g7v2kx"
res.writeHead(200)
```

| Code | Meaning      |
| ---- | ------------ |
| 200  | Success      |
| 404  | Not Found    |
| 500  | Server Error |

---

## 🔥 Dynamic Route Example

```js id="d2m0ct"
if (req.url === "/users/1" && req.method === "GET") {
  const user = users.find(u => u.id === 1);
  res.end(JSON.stringify(user));
}
```

---

## 🧪 Test with Postman

Try:

```id="ajuj1v"
GET http://localhost:3000/users
```

👉 You’ll get JSON response

---

## 💡 Real-World API Structure

| Method | Route    | Action        |
| ------ | -------- | ------------- |
| GET    | /users   | Get all users |
| GET    | /users/1 | Get one user  |
| POST   | /users   | Create user   |

---

## ⚠️ Problem with Raw Node API

As project grows:

* Too many conditions ❌
* Hard to scale ❌

👉 That’s why
Express.js is used later

---

## 🔥 Key Insight

👉 This line:

```js id="pjc3i2"
res.end(JSON.stringify(data));
```

= core of all APIs

---

## 🧠 Summary

* API sends/receives JSON
* Use `JSON.stringify()`
* Set content-type to JSON
* Handle routes + methods

---
---

# 🔄 Middleware 

---

## 🎯 Goal of this section

Understand **middleware** — functions that run:

> 🧩 **between request and response**

---

## 🧠 What is Middleware?

👉 Middleware = a function that:

* Receives request (`req`)
* Can modify it
* Can decide what happens next

---

## 📌 Simple Flow

```plaintext
Request → Middleware → Response
```

---

## ⚙️ Basic Example (Manual Middleware)

```js
const http = require('http');

const logger = (req) => {
  console.log(`${req.method} ${req.url}`);
};

const server = http.createServer((req, res) => {
  logger(req); // middleware

  res.end("Hello World");
});

server.listen(3000);
```

---

## 🧩 What This Middleware Does

👉 Every request:

* Logs method + URL
* Then continues

---

## 🔥 Real Middleware Examples

Middleware is used for:

### 1. Logging

```js
console.log(req.method, req.url);
```

---

### 2. Authentication

```js
if (!req.headers.authorization) {
  res.end("Unauthorized");
}
```

---

### 3. Parsing Data

* JSON body
* Form data

---

## ⚠️ Important Concept

Middleware can:

* ✅ Continue request
* ❌ Stop request

---

## 🧪 Example: Stop Request

```js
const auth = (req, res) => {
  if (req.url === "/admin") {
    res.end("Access Denied");
    return;
  }
};
```

---

## 🧠 Chain Concept (Very Important)

Multiple middleware can run:

```plaintext
Request → Logger → Auth → Handler → Response
```

---

## 🔥 Why This is Powerful

Frameworks like
Express.js
are built **entirely on middleware**

Example in Express:

```js
app.use((req, res, next) => {
  console.log("Middleware");
  next();
});
```

---

## 💡 Key Insight

👉 Middleware is the **backbone of backend architecture**

Used for:

* Security
* Logging
* Validation
* Error handling

---

## ⚠️ Common Mistakes

### ❌ Not ending response

```js
res.end() // must call if stopping request
```

---

### ❌ Not controlling flow

👉 Can cause:

* Hanging requests
* Multiple responses

---

## 🧠 Summary

* Middleware = function between req & res
* Used for logging, auth, processing
* Can stop or continue request
* Core concept in backend frameworks

---
---

# 🧹 Cleanup (Middleware & Handlers) 

---

## 🎯 Goal of this section

Refactor your code to:

* Separate logic 🧩
* Improve readability 👀
* Make it scalable 🚀

---

## 🧠 Problem Before Cleanup

You probably had code like this:

```js
if (req.url === "/users" && req.method === "GET") {
  // logic here
}
else if (req.url === "/about") {
  // more logic
}
```

👉 Problems:

* Too many `if-else` ❌
* Hard to maintain ❌
* Mixed logic ❌

---

## ✅ Solution: Separate Responsibilities

Split code into:

1. **Middleware** → common tasks
2. **Handlers** → route-specific logic

---

## 🧩 Step 1: Create Handler Functions

```js id="y8m1xq"
const handleHome = (req, res) => {
  res.end("Home Page");
};

const handleUsers = (req, res) => {
  const users = [{ name: "Krishna" }];
  res.end(JSON.stringify(users));
};
```

---

## ⚙️ Step 2: Use Them in Server

```js id="0g3o4z"
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    handleHome(req, res);
  } 
  else if (req.url === "/users") {
    handleUsers(req, res);
  } 
  else {
    res.end("Not Found");
  }
});
```

---

## 🧠 What Changed?

👉 Instead of writing logic inside conditions:

* You call **separate functions**

---

## 🔥 Step 3: Add Middleware Cleanly

```js id="6z8x1c"
const logger = (req) => {
  console.log(`${req.method} ${req.url}`);
};
```

Use it:

```js id="n8b4mv"
const server = http.createServer((req, res) => {
  logger(req); // middleware

  if (req.url === "/") {
    handleHome(req, res);
  }
});
```

---

## 📁 Better Project Structure

```plaintext
project/
├── index.js
├── handlers/
│   ├── home.js
│   ├── users.js
├── middleware/
│   ├── logger.js
```

---

## 💡 Why This is Important

👉 Now your code is:

* Clean ✅
* Reusable ✅
* Easy to debug ✅

---

## 🔥 Real-World Insight

Frameworks like
Express.js
**force this structure**

Example:

```js
app.get('/', homeHandler);
```

👉 Same concept, cleaner syntax

---

## ⚠️ Common Mistakes

### ❌ Keeping everything in one file

👉 Becomes messy quickly

---

### ❌ Mixing logic + routing

👉 Hard to scale

---

## 🧠 Key Insight

👉 “Separate concerns = professional code”

---

## 🧠 Summary

* Move logic into functions (handlers)
* Use middleware separately
* Avoid large `if-else` blocks
* Organize files into folders

---
---

# 📩 Get Request Body for POST 

---

## 🎯 Goal of this section

Learn how to:

* Receive data sent from client (POST request)
* Parse it manually in
  Node.js

---

## 🧠 Problem

Until now:

* You handled GET requests ✅
* But POST sends **data in body**

👉 Example:

```json
{
  "name": "Krishna"
}
```

👉 This data is **NOT directly available**

---

## ⚠️ Important Concept

Node.js receives body in **chunks (streams)**

👉 Not all at once ❗

---

## ⚙️ Basic POST Body Handling

```js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/data") {

    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      console.log(body);

      res.end("Data received");
    });

  } else {
    res.end("Hello");
  }
});

server.listen(3000);
```

---

## 🧩 How This Works

### 1. `req.on("data")`

👉 Collects chunks of incoming data

---

### 2. `body += chunk`

👉 Combine all chunks

---

### 3. `req.on("end")`

👉 Fires when all data is received

---

## 🔄 Convert to JSON

```js
const parsedData = JSON.parse(body);
console.log(parsedData.name);
```

---

## 🧪 Test Using Postman

* Method: POST
* URL:

```
http://localhost:3000/data
```

* Body → JSON:

```json
{
  "name": "Krishna"
}
```

---

## ⚠️ Common Mistakes

### ❌ Using body directly

```js
console.log(req.body); ❌ (does not exist in raw Node)
```

---

### ❌ Forgetting `JSON.parse`

👉 You’ll get string instead of object

---

### ❌ Not waiting for `end`

👉 Data incomplete

---

## 💡 Why This is Important

Frameworks like
Express.js
hide this complexity:

```js
app.use(express.json());
```

👉 But internally → same logic

---

## 🔥 Key Insight

👉 This part is:

* Hard manually
* Easy with frameworks

But understanding it = **strong backend foundation**

---

## 🧠 Summary

* POST data comes in chunks
* Use `req.on("data")`
* Use `req.on("end")`
* Convert using `JSON.parse()`

---
---

# 📁 File System Module (`fs`)

---

## 🎯 Goal of this section

Learn how to:

* Read files 📖
* Write files ✍️
* Append data ➕

using the `fs` module in
Node.js

---

## 🧠 What is `fs`?

👉 `fs` = File System module
👉 Used to interact with your computer’s files

---

## ⚙️ Import `fs`

```js
const fs = require('fs');
```

---

# 📖 1. Read File

```js
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
```

---

## 🧩 Explanation

* `'data.txt'` → file name
* `'utf8'` → readable format
* `data` → file content

---

# ✍️ 2. Write File

```js
fs.writeFile('data.txt', 'Hello World', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File written");
});
```

👉 Creates file if not exists
👉 Overwrites if exists

---

# ➕ 3. Append File

```js
fs.appendFile('data.txt', '\nNew Line', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Data added");
});
```

👉 Adds data without deleting old content

---

# 🔥 4. Delete File

```js
fs.unlink('data.txt', (err) => {
  if (err) throw err;
  console.log("File deleted");
});
```

---

## ⚡ Sync vs Async (IMPORTANT)

### Async (Recommended ✅)

```js
fs.readFile(...)
```

* Non-blocking
* Better performance

---

### Sync (Blocking ❌)

```js
const data = fs.readFileSync('data.txt', 'utf8');
```

* Blocks execution
* Not good for servers

---

## 🧠 Why Async is Important

Node.js is:
👉 Single-threaded

If you use sync:

* Server gets stuck ❌

---

## 💡 Real Use Cases

* Store logs
* Read HTML files
* Save user data
* Handle uploads

---

## 🔥 Example: Save POST Data

```js
req.on("end", () => {
  fs.writeFile('data.json', body, () => {
    res.end("Saved");
  });
});
```

---

## ⚠️ Common Mistakes

### ❌ Forgetting error handling

👉 Always check `err`

---

### ❌ Using sync methods in server

👉 Slows everything

---

### ❌ Wrong file path

👉 File not found

---

## 🧠 Summary

* `fs` handles files
* readFile → read
* writeFile → create/overwrite
* appendFile → add data
* Prefer async methods

---
---

# 📍 Path Module 

---

## 🎯 Goal of this section

Learn how to safely work with:

* File paths
* Folder paths

using the `path` module in
Node.js

---

## 🧠 Why Do We Need `path`?

Different OS have different path styles:

| OS        | Path Example         |
| --------- | -------------------- |
| Windows   | `C:\folder\file.txt` |
| Linux/Mac | `/folder/file.txt`   |

👉 Hardcoding paths = risky ❌
👉 `path` module fixes this ✅

---

## ⚙️ Import Path Module

```js id="1j1a7v"
const path = require('path');
```

---

## 📦 1. `path.join()` (MOST IMPORTANT)

```js id="mvr41r"
const filePath = path.join(__dirname, 'files', 'data.txt');
console.log(filePath);
```

---

## 🧩 What is `__dirname`?

👉 Current directory path

Example:

```id="kj0vle"
/home/user/project
```

---

## 🔥 Why `path.join()`?

👉 It:

* Joins paths correctly
* Works on all OS

---

## 📁 Example with `fs`

```js id="2xbp9q"
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
  console.log(data);
});
```

---

## 📌 2. `path.basename()`

```js id="6bf41q"
console.log(path.basename('/folder/data.txt'));
```

👉 Output:

```id="r7t3ka"
data.txt
```

---

## 📌 3. `path.extname()`

```js id="ix0llh"
console.log(path.extname('file.js'));
```

👉 Output:

```id="wkl5mz"
.js
```

---

## 📌 4. `path.resolve()`

```js id="j5r2w3"
const fullPath = path.resolve('data.txt');
```

👉 Converts to absolute path

---

## ⚠️ Common Mistakes

### ❌ Hardcoding paths

```js id="rw9y8r"
const path = "/users/files/data.txt"; ❌
```

---

### ❌ Not using `__dirname`

👉 File may not be found

---

## 💡 Real-World Use

Used for:

* Serving static files
* Reading HTML
* Upload paths
* Backend file handling

---

## 🔥 Example (Server + File)

```js id="e1bc1l"
const filePath = path.join(__dirname, 'index.html');

fs.readFile(filePath, (err, data) => {
  res.end(data);
});
```

---

## 🧠 Key Insight

👉 `path.join(__dirname, ...)` is used in almost every backend project

---

## 🧠 Summary

* `path` handles file paths safely
* `path.join()` is most important
* Avoid hardcoding paths
* Works across OS

---
---

# 🖥️ OS Module 

---

## 🎯 Goal of this section

Use the `os` module to get:

* System information
* Hardware details

from
Node.js

---

## 🧠 What is the OS Module?

👉 Built-in module
👉 No installation needed

It gives info about:

* CPU 🧠
* Memory 💾
* OS type 🖥️

---

## ⚙️ Import OS Module

```js id="cz09u6"
const os = require('os');
```

---

## 📊 1. OS Platform

```js id="qon52c"
console.log(os.platform());
```

👉 Output:

```id="c6sfdj"
linux
win32
darwin
```

---

## 🧠 2. CPU Architecture

```js id="51pvk9"
console.log(os.arch());
```

👉 Example:

```id="0dpn7m"
x64
```

---

## 💾 3. Free Memory

```js id="iqy4a2"
console.log(os.freemem());
```

👉 Output in **bytes**

---

## 💾 4. Total Memory

```js id="q6p0nt"
console.log(os.totalmem());
```

---

## ⏱️ 5. Uptime

```js id="0we68f"
console.log(os.uptime());
```

👉 Time system has been running (seconds)

---

## 👤 6. User Info

```js id="9n09w2"
console.log(os.userInfo());
```

---

## 🧪 Full Example

```js id="92s6fa"
const os = require('os');

console.log("Platform:", os.platform());
console.log("CPU:", os.arch());
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());
```

---

## 💡 Why This is Useful

👉 Helps in:

* Monitoring system
* Debugging performance
* Server health checks

---

## 🔥 Real-World Usage

In backend apps:

* Check available memory
* Optimize performance
* Log system info

---

## ⚠️ Important Note

👉 Not used daily like `fs` or routing
👉 But useful for **advanced backend tools**

---

## 🧠 Summary

* `os` module gives system info
* No install required
* Useful for monitoring & debugging

---
---

# 🌐 URL Module
---

## 🎯 Goal of this section

Learn how to:

* Parse URLs
* Extract query parameters

using tools available in
Node.js

---

## 🧠 Why This is Needed?

When a request comes:

```bash
http://localhost:3000/users?id=1&name=krishna
```

👉 You need to extract:

* Path → `/users`
* Query → `{ id: 1, name: "krishna" }`

---

## ⚙️ Using `URL` Class (Modern Way)

```js id="8b9i6x"
const server = http.createServer((req, res) => {
  const urlObj = new URL(req.url, `http://${req.headers.host}`);

  console.log(urlObj.pathname);
  console.log(urlObj.searchParams.get("id"));

  res.end("Done");
});
```

---

## 🧩 Explanation

### 1. Create URL Object

```js id="sb2p8o"
new URL(req.url, baseURL)
```

👉 Required because:

* `req.url` is relative
* Needs full URL

---

### 2. Get Path

```js id="xj1w8f"
urlObj.pathname
```

👉 Output:

```id="t6zljh"
/users
```

---

### 3. Get Query Params

```js id="rj3sfd"
urlObj.searchParams.get("id")
```

👉 Output:

```id="4czw9y"
1
```

---

## 🔥 Example

Request:

```bash id="qdz4h3"
http://localhost:3000/products?category=mobile
```

Code:

```js id="a4q4xg"
const urlObj = new URL(req.url, `http://${req.headers.host}`);

const category = urlObj.searchParams.get("category");

res.end(`Category: ${category}`);
```

---

## 📦 Why This is Important

👉 Used in:

* Filtering data
* Searching
* Pagination

---

## 💡 Real API Example

```bash id="5mz6jz"
/users?page=2&limit=10
```

👉 Backend uses query params to:

* Limit results
* Control pagination

---

## ⚠️ Common Mistakes

### ❌ Not using base URL

```js id="b1cm6r"
new URL(req.url) ❌
```

---

### ❌ Using `req.url` directly

👉 Hard to parse manually

---

## 🔥 Real-World Insight

Frameworks like
Express.js
give shortcut:

```js id="0s7dxb"
req.query.id
```

👉 But internally → same logic

---

## 🧠 Summary

* Use `new URL()` to parse request
* `.pathname` → route
* `.searchParams` → query data
* Important for APIs

---
---

# 🔐 Crypto Module 

---

## 🎯 Goal of this section

Learn how to:

* Secure data
* Hash passwords
* Use cryptographic functions

using the `crypto` module in
Node.js

---

## 🧠 What is Crypto?

👉 `crypto` = built-in module for:

* Encryption 🔒
* Hashing 🔑
* Security operations

---

## 🔥 Most Important Concept: Hashing

👉 Hashing = converting data into a **fixed string**

Example:

```id="r11hvs"
"password123" → "ef92b7..."
```

👉 Cannot easily reverse ❗

---

## ⚙️ Basic Hash Example

```js id="e3p8f9"
const crypto = require('crypto');

const hash = crypto
  .createHash('sha256')
  .update('password123')
  .digest('hex');

console.log(hash);
```

---

## 🧩 Explanation

* `createHash('sha256')` → algorithm
* `.update()` → input data
* `.digest('hex')` → output format

---

## 🔐 Why Hash Passwords?

### ❌ Wrong way

```js id="7vghsx"
password = "123456"
```

---

### ✅ Correct way

```js id="7htoj1"
password = "hashed_value"
```

👉 Even if database leaks → safe

---

## ⚠️ Important Note

👉 SHA256 is basic
👉 Real apps use:

* bcrypt (recommended)

---

## 🔥 Generate Random Data

```js id="6ib1k6"
const random = crypto.randomBytes(16).toString('hex');
console.log(random);
```

👉 Used for:

* Tokens
* IDs
* Security keys

---

## 💡 Real-World Usage

* Password hashing
* JWT secrets
* API keys
* Authentication systems

---

## ⚠️ Common Mistakes

### ❌ Storing plain passwords

👉 Huge security risk

---

### ❌ Using weak hashing

👉 Use stronger libraries in production

---

## 🔥 Real Insight

Frameworks like
Express.js
don’t handle security automatically

👉 You must implement it

---

## 🧠 Summary

* `crypto` used for security
* Hashing protects data
* `sha256` basic example
* Use stronger methods in real apps

---
---

# 🔔 Emitting Events 

---

## 🎯 Goal of this section

Learn how Node.js uses **events** and how you can:

* Create your own events
* Trigger (emit) them
* Listen to them

using the event system in
Node.js

---

## 🧠 What is an Event?

👉 Event = something that **happens**

Examples:

* Request received 🌐
* File read 📂
* Button click 🖱️

---

## ⚙️ Event System in Node.js

Node uses:
👉 `EventEmitter` class

---

## 📦 Basic Example

```js id="xg7c9l"
const EventEmitter = require('events');

const emitter = new EventEmitter();

// listen
emitter.on('greet', () => {
  console.log("Hello Krishna!");
});

// emit (trigger)
emitter.emit('greet');
```

👉 Output:

```id="shqv0f"
Hello Krishna!
```

---

## 🧩 How It Works

1. `on()` → listens for event
2. `emit()` → triggers event

---

## 🔥 Passing Data with Events

```js id="c6z2tf"
emitter.on('user', (name) => {
  console.log(`User: ${name}`);
});

emitter.emit('user', "Krishna");
```

---

## 📌 Real-World Analogy

👉 Like notification system:

* Subscribe → `on()`
* Notify → `emit()`

---

## 🔄 Why Node Uses Events

Node is:
👉 Event-driven

Meaning:

* Doesn’t wait/block
* Reacts when events happen

---

## 💡 Real Usage in Node

Events are used in:

* HTTP requests
* File system
* Streams
* Server handling

---

## 🧪 Example in Server

```js id="t5rbkx"
const server = http.createServer((req, res) => {
  emitter.emit('request', req.url);
  res.end("Done");
});

emitter.on('request', (url) => {
  console.log("Request for:", url);
});
```

---

## ⚠️ Common Mistakes

### ❌ Emitting before listening

```js id="8j5d8k"
emitter.emit('event'); ❌
emitter.on('event', ...) 
```

👉 Listener won’t catch it

---

### ❌ Too many listeners

👉 Can cause memory issues

---

## 🔥 Key Insight

👉 Node.js internally works like:

```plaintext
Event happens → Listener runs → Action executed
```

---

## 🧠 Why This Matters

For your backend:

* APIs
* Async tasks
* Real-time apps

👉 All depend on events

---

## 🧠 Summary

* EventEmitter handles events
* `on()` → listen
* `emit()` → trigger
* Core of Node’s async system

---
---

# ⚙️ Process Object 
---

## 🎯 Goal of this section

Understand the global **`process` object** in
Node.js

👉 It helps you:

* Access environment variables
* Read command-line arguments
* Control app lifecycle

---

## 🧠 What is `process`?

👉 A **global object** available in every Node app
👉 Represents the **currently running Node process**

---

## 📌 1. Environment Variables

```js id="bb93dk"
console.log(process.env);
```

👉 Access values from `.env`:

```js id="4owrq9"
console.log(process.env.PORT);
```

---

## 📌 2. Command Line Arguments

Run:

```bash id="k0p37x"
node index.js hello world
```

Code:

```js id="q5k3o6"
console.log(process.argv);
```

👉 Output:

```id="wq7vvt"
[
  'node',
  'index.js',
  'hello',
  'world'
]
```

---

## 📌 3. Exit Process

```js id="e3jkh2"
process.exit();
```

👉 Stops execution immediately

---

## 📌 4. Current Working Directory

```js id="plmfpf"
console.log(process.cwd());
```

---

## 📌 5. Process ID

```js id="51n0d2"
console.log(process.pid);
```

---

## 🔥 Example: Custom Input

```js id="p68b5c"
const name = process.argv[2];
console.log(`Hello ${name}`);
```

Run:

```bash id="a4ngkm"
node index.js Krishna
```

👉 Output:

```id="bzkpgi"
Hello Krishna
```

---

## 💡 Why This is Useful

👉 Used for:

* Config management
* CLI tools
* Environment setup

---

## ⚠️ Common Mistakes

### ❌ Forgetting index in argv

```js id="q7qzrh"
process.argv[0] // node
process.argv[2] // actual input
```

---

### ❌ Using sensitive data without `.env`

👉 Security risk

---

## 🔥 Real-World Usage

In backend apps:

* Read PORT from env
* Pass configs via CLI
* Handle server start/stop

---

## 🧠 Final Big Picture

👉 Node.js works like:

```plaintext
Process → Event Loop → Handles Requests → Sends Response
```

---

## 🧠 Summary

* `process` = current running app
* `process.env` → env variables
* `process.argv` → CLI input
* `process.exit()` → stop app

---
---