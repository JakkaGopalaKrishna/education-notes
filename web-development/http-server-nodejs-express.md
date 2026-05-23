**HTTP** stands for **HyperText Transfer Protocol**.

It is the **foundation of communication on the web** — the rulebook that tells browsers and servers how to talk to each other.

---

### 🔹 Simple Explanation

When you open a website:

1. Your browser (client) sends a **request**
2. The server processes it
3. The server sends back a **response**

That communication happens using **HTTP**

---

### 🔹 Example


```
When you type:
http://example.com

👉 Your browser sends an HTTP request like:
[Method] [Path] [HTTP Version]
GET / HTTP/1.1

👉 Server responds with:
HTTP/1.1 200 OK
```

* website data (HTML, CSS, JS)

---

### 🔹 Key Concepts

* **Request** → Sent by client (browser)
* **Response** → Sent by server
* **Methods**:

  * `GET` → fetch data
  * `POST` → send data
  * `PUT` → update data
  * `DELETE` → remove data

---

### 🔹 HTTP vs HTTPS

* **HTTP** → Not secure ❌
* **HTTPS** → Secure (uses encryption 🔐)

---

### 🔹 Real-life Analogy

Think of HTTP like ordering food:

* You (client) → place order 🍔
* Kitchen (server) → prepares food
* Waiter (HTTP) → delivers it

---
---

## 🔹 What is a Server?

A **server** is a **computer (or program)** that **provides data or services** to other computers (called clients).

---

## 🔹 Simple Explanation

👉 When you open a website:

* **Your browser = Client**
* **The website’s computer = Server**

The server **stores the website** and sends it to you when you ask.

---

## 🔹 How it works (step by step)

1. You type a URL (like `google.com`)
2. Your browser sends a request (HTTP)
3. The **server receives it**
4. The server sends back data (HTML, CSS, JS)
5. Your browser shows the website

---

## 🔹 Real-Life Example

Think of a **restaurant 🍽️**

* You = Client
* Kitchen = Server
* Order = Request
* Food = Response

👉 You ask → server gives

---

## 🔹 Types of Servers

* **Web Server** → sends web pages
* **Database Server** → stores data
* **File Server** → stores files
* **API Server** → sends data (JSON)

---

## 🔹 Example


```
When you visit:
https://youtube.com

👉 A YouTube server sends:
 videos
 thumbnails
 comments
```
---

## 🔹 Key Point

👉 Server is always **waiting for requests**  
👉 Client always **initiates communication**

---

## 🔹 One-line definition

👉 **Server = a system that responds to requests and provides data/services**

---
---

## 🔹 Client vs Server (Simple & Clear)

| Feature   | Client 🧑‍💻  | Server 🖥️                    |
| --------- | ------------- | ------------------------- |
| Role      | Sends request | Sends response            |
| Location  | User side     | Remote machine (internet) |
| Example   | Browser, App  | Node.js server, Apache    |
| Work      | Displays UI   | Processes logic & data    |
| Initiates | Yes           | No (waits)                |

---
---

## 🔹 How to build your own server (Node.js 🔥)

---

# 🚀 1. Install Node.js

Download from 👉 [https://nodejs.org](https://nodejs.org)

Check installation:

```bash
node -v
npm -v
```

---

# 🚀 2. Create Project

```bash
mkdir my-server
cd my-server
npm init -y
#output:
#package.json (file created)
```
[packageJSON.md](packageJSON.md)

---

# 🚀 3. Create Server File

Create a file:

```bash
touch server.js
```

---

# 🚀 4. Write Basic Server Code

Paste this 👇

```javascript
const http = require('http');

// create server
const server = http.createServer((req, res) => {
    res.write('Hello World 🚀');
    res.end();
});

// run server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
```

---

# 🚀 5.0 Run the Server

```bash
node server.js
```

Open browser 👉

```
http://localhost:3000
```

🎉 You’ll see: **Hello World 🚀**

---

# 🧠 What’s happening?

* `http.createServer()` → creates server
* `(req, res)` → request & response
* `res.write()` → send data
* `res.end()` → finish response
* `listen(3000)` → run on port 3000

---

# 🛑 5.1 STOP the Server
To stop your server, you have two options depending on whether you want to do it manually from your keyboard or programmatically within your code.
1. **The Manual Way (Keyboard Shortcut) :**
If the server is running in your terminal, simply press:

* **`Ctrl + C`**

    This sends a "SIGINT" (signal interrupt) to the Node process, telling it to shut down immediately.  

2. **The Programmatic Way (In Code) :**
If you want the server to stop itself after a certain event or time, use the .close() method:

    ```js
    server.close(() => {
        console.log('Server shut down successfully.');
    });

    // Example: Stopping after 5 seconds
    setTimeout(() => {
        console.log("Closing server...");
        server.close();
    }, 5000); 
    ```
3. **Killing a "Ghost" Server :**
If you accidentally closed your terminal but the server is still running on port 3000, you can force it to stop using your command line:

   * **Windows (Command Prompt) :**
   `netstat -ano | findstr :3000` (Find the PID number, then run: `taskkill /PID <number> /F`)
   * **Mac/Linux :**
   `lsof -i :3000` ( Find the PID, then run: `kill -9 <PID>` )

Are you running into an "Address already in use" error when you try to restart your server?



---

# 🚀 6. Handle Routes (Important 🔥)

Update your code:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('Home Page');
    } 
    else if (req.url === '/about') {
        res.end('About Page');
    } 
    else {
        res.end('404 Not Found');
    }

});

server.listen(3000, () => {
    console.log('Server running...');
});
```

Now try:

* `/` → Home
* `/about` → About

---

# 🚀 7. Use Express (Best Practice ⭐)

Install Express:

```bash
npm install express
```

Create `app.js`:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
```

Run:

```bash
node app.js
```

---

# 🔥 Why Express?

* Cleaner code ✅
* Easy routing ✅
* Used in real projects ✅

---

# 🧠 Real-world flow (VERY IMPORTANT)

Your future app (like your chatbot 👇):

```
React App (Client)
        ↓
Node.js Server (API)
        ↓
Database
```

---

# 🎯 One-line summary

👉 **Node.js server = program that listens for requests and sends responses**

---

---

# 🔹 1. `req` (Request Object)

👉 `req` = **data coming FROM client → server**

It contains everything the client sends.

### 📦 Common things inside `req`:

* `req.url` → The path and query string (e.g., `/user/101?age=25`)
* `req.path` → Only the path part of the URL (e.g., `/user/101`)
* `req.method` → The HTTP verb used (GET, POST, PUT, etc.)
* `req.query` → Object containing query parameters (e.g., `?name=krishna`)
* `req.params` → Object containing route parameters (e.g., `/user/:id`)
* `req.body` → The data sent in the request body (requires express.json() middleware)
* `req.headers` → Object containing HTTP headers (e.g., user-agent, content-type)
* `req.ip` → The IP address of the client making the request
* `req.cookies` → Object containing cookies (requires cookie-parser middleware)
* `req.protocol` → The protocol used (http or https)
* `req.hostname` → The domain name (e.g., localhost or example.com)
* `req.xhr` → Boolean; returns true if the request was an AJAX (XMLHttpRequest)

```js
app.get('/test', (req, res) => {
    console.log(Object.keys(req)); 
    res.send("Check your console!");
});
/*
[
  '_events',              '_readableState',
  '_maxListeners',        'socket',
  'httpVersionMajor',     'httpVersionMinor',
  'httpVersion',          'complete',
  'rawHeaders',           'rawTrailers',
  'joinDuplicateHeaders', 'aborted',
  'upgrade',              'url',
  'method',               'statusCode',
  'statusMessage',        'client',
  '_consuming',           '_dumped'
]
*/
```

* According to the [Express 4.x API Reference](https://expressjs.com/en/4x/api.html), there are 8 primary methods built into the req object:
Official req Methods

   1. `req.get(field)`: Returns the specified HTTP request header (e.g., req.get('Content-Type')).
   2. `req.accepts(types)`: Checks if the specified content types are acceptable based on the request's Accept header.
   3. `req.acceptsCharsets(charsets)`: Checks if the specified charsets are acceptable.
   4. `req.acceptsEncodings(encodings)`: Checks if the specified encodings are acceptable.
   5. `req.acceptsLanguages(langs)`: Checks if the specified languages are acceptable.
   6. `req.is(type)`: Returns the matching content type if the incoming request's Content-Type header matches the MIME type.
   7. `req.range(size[, options])`: Range header parser for serving partial content.
   8. `req.param(name)`: Deprecated. Formerly used to get params from body, query, or path. You should now use req.params, req.query, or req.body directly. [4, 5, 6, 7] 

**Important Distinction :**
Most of what you use in Express (like req.query, req.body, and req.params) are properties (variables), not methods (functions). 

| Type | Examples |
|---|---|
| Methods (Functions) | `req.get()`, `req.accepts()`, `req.is()` |
| Properties (Data) | `req.body`, `req.params`, `req.query`, `req.method`, `req.url` |
---
---

# 🔹 2. `res` (Response Object)

👉 `res` = **data going FROM server → client**

Used to send response back.

---

### 📦 Common methods in `res`:

* `res.send()` → Sends a generic response (string, object, or buffer).
* `res.json()` → Sends a JSON response and sets the correct Content-Type header.
* `res.status(code)` → Sets the HTTP status code (e.g., 404, 500).
* `res.sendStatus(code)` → Sets the status code and sends its string representation as the body.
* `res.redirect(url)` → Redirects the browser to a different URL.
* `res.render(view)` → Renders a view template (like EJS or Pug) and sends the HTML.
* `res.sendFile(path)` → Transfers a file at the given path.
* `res.download(path)` → Prompts the client to download a file.
* `res.set(name, value)` → Sets a specific HTTP response header.
* `res.cookie(name, value)` → Sets a cookie on the client's browser.
* `res.end()` → Ends the response process without sending any data.  

### Common res Properties (Data):

> In Express.js, the res object has several "Properties" (data variables) that are separate from its "Methods" (functions like .send()).   
These are used to store data about the current response or access the app's state.

* `res.locals` → An object containing variables scoped to the current request, useful for passing data to views.
* `res.headersSent` → Boolean; returns true if the app already sent HTTP headers for the response.
* `res.app` → A reference to the instance of the Express application using the middleware. 





> **Inherited Node.js res Properties :**
Since Express extends the Node.js http.ServerResponse class, it also includes these low-level properties:

* `res.statusCode` → The HTTP status code that will be sent to the client (e.g., 200, 404).
* `res.statusMessage` → The custom status message that will be sent (e.g., "OK", "Not Found").
* `res.finished` → A boolean that is true after res.end() has been called.
* `res.writable` → A boolean indicating if it is safe to call res.write() (the stream has not been destroyed or ended).
* `res.req` → A reference back to the original Request object.
* `res.socket` → A reference to the underlying network socket.
* `res.sendDate` → A boolean (defaults to true) that determines if the Date header should be automatically included in the response. [4, 6, 7, 8] 

Internal/Stream Properties
You may also see these when debugging the object, which manage how data flows to the client: [5] 

* `res.writableEnded` → true if res.end() was called.
* `res.writableFinished` → true if all data has been flushed to the underlying system.
* `res.writableLength` → The number of bytes currently in the buffer.

---

> **Why so many methods?**
The res object also inherits about 100+ items from Node's http.ServerResponse, including low-level controls like res.write(), res.setHeader(), and res.finished.

1. **Official Express Methods (~22) :**
These are the most common methods used in daily development.

    * **res.append():** Appends a value to a header.
    * **res.attachment():** Sets Content-Disposition to "attachment".
    * **res.cookie():** Sets a cookie.
    * **res.clearCookie():** Clears a cookie.
    * **res.download():** Prompts for a file download.
    * **res.end():** Ends the response process.
    * **res.format():** Performs content negotiation.
    * **res.get():** Returns an HTTP response header.
    * **res.json():** Sends a JSON response.
    * **res.jsonp():** Sends JSON with JSONP support.
    * **res.links():** Joins links to populate the Link header.
    * **res.location():** Sets the Location header.
    * **res.redirect():** Redirects the request.
    * **res.render():** Renders a view template.
    * **res.send():** Sends the HTTP response.
    * **res.sendFile():** Transfers a file at a path.
    * **res.sendStatus():** Sets status and sends its string body.
    * **res.set():** Sets a response header.
    * **res.status():** Sets the HTTP status code.
    * **res.type():** Sets the Content-Type MIME type.
    * **res.vary():** Adds a field to the Vary header.
    * **res.header():** Alias for res.set().



2. **Low-Level Node.js Members (~25+) :**
These are inherited from [Node.js http.ServerResponse](nodejs.org) 

    The http.ServerResponse object in Node.js provides core methods for managing HTTP responses, including `res.write()`, `res.end()`, `res.writeHead()`, and `res.setHeader()`. Other essential low-level methods and properties for controlling headers and stream state include `res.getHeader()`, `res.removeHeader()`, `res.flushHeaders()`, and `res.finished`. For a complete list of these methods, visit [Node.js Documentation](https://nodejs.org/api/http.html).


---

#  3. HTTP Methods (Very Important) &
#  4. Full Example (Real API )

```javascript
const express = require('express');
const app = express();

app.use(express.json()); // important for req.body

// GET→ Fetch data
// 👉 Used to get data
app.get('/users', (req, res) => {
    res.json([{ name: 'Krishna' }]);
});

// POST→ Send data
// 👉 Used to create data
app.post('/users', (req, res) => {
    const user = req.body;
    res.json({ message: 'User added', user });
});

// PUT→ Update full data
app.put('/users/:id', (req, res) => {
    res.send(`Updated user ${req.params.id}`);
});

// PATCH → Update partial data
app.patch('/users/:id', (req, res) => {
    res.send('User partially updated');
});

// DELETE → Remove data
app.delete('/users/:id', (req, res) => {
    res.send(`Deleted user ${req.params.id}`);
});

app.listen(3000);
```

---

# 🔹 5. Flow (Super Important 🧠)

```
Client → req → Server → res → Client
```

---

# 🔹 6. One-line Understanding

* `req` → **what client sends**
* `res` → **what server replies**

---
---

# 🚀 1. Using Core `http` (Low-level)

## 🔸 Code Example

```javascript
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

    // 🔹 req.url & req.method
    console.log('URL:', req.url);
    console.log('Method:', req.method);

    // 🔹 Parse URL
    const parsedUrl = url.parse(req.url, true);

    // 🔹 req.query
    const query = parsedUrl.query;
    console.log('Query:', query);

    // 🔹 req.params (manual handling)
    const pathParts = parsedUrl.pathname.split('/');

    if (pathParts[1] === 'user' && pathParts[2]) {
        const userId = pathParts[2];
        console.log('Param ID:', userId);
    }

    // 🔹 req.body (manual)
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        if (body) {
            console.log('Body:', body);
        }

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Check console');
    });

});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
```

---

## 🔸 How to PASS data

### 👉 1. Query

```
http://localhost:3000/?name=krishna&age=21
```

### 👉 2. Params

```
http://localhost:3000/user/101
```

### 👉 3. Body (POST using Postman)

```json
{
  "name": "krishna"
}
```

---

# 🔥 Final Understanding

| Thing  | How to Pass     | How to Access    |
| ------ | --------------- | ---------------- |
| URL    | `/user/101`     | `req.url`        |
| Method | GET / POST      | `req.method`     |
| Query  | `?name=krishna` | `req.query.name` |
| Params | `/user/:id`     | `req.params.id`  |
| Body   | JSON (POST/PUT) | `req.body`       |

---

# 🎯 Real Dev Tip

👉 In real projects (like your chatbot):

```javascript
POST /chat?lang=en
Body: { message: "hello" }
```

* `req.query.lang` → language
* `req.body.message` → user input

---
---


## PORT

In computer networking, a port is a virtual point where connections begin and end. While an IP address identifies a specific device on a network, the port number identifies the specific service or application running on that device. [1, 2] 
Port Range
The range of port numbers is 0 to 65535. They are categorized into three main groups by the Internet Assigned Numbers Authority (IANA): 

* Well-Known Ports (0 – 1023): Reserved for core system services and standardized protocols (e.g., Port 80 for HTTP, Port 443 for HTTPS, and Port 22 for SSH).
* Registered Ports (1024 – 49151): Used by specific user applications or services. Companies often register these for their software (e.g., Port 3306 for MySQL).
* Dynamic / Ephemeral Ports (49152 – 65535): Temporarily assigned by your operating system for client-side connections, such as when your web browser opens a session to a server. 

Why is the range 0 to 65535?
This specific limit exists because of how network protocols like TCP and UDP were designed:

* 16-bit Integer: In the headers of these protocols, exactly 16 bits are set aside for the port number.
* Math: The largest number you can represent with 16 bits is $2^{16} - 1$, which equals 65535.
* Compatibility: Because the entire internet depends on these standard header structures, increasing the number of ports would require changing the fundamental protocols of the web, which would break backward compatibility with billions of devices.


# UUID
A UUID is a 128-bit label used to identify information in computer systems.
1. Full Form
Universally Unique Identifier. (Also known as GUID in the Microsoft world).
2. Why use it?
The main goal is uniqueness. Unlike a standard ID (1, 2, 3...), a UUID is so long and random that the chances of generating the same one twice are practically zero.

* No Central Server: You can generate an ID on your laptop and I can generate one on mine; we don't need to check with each other to make sure they are different.
* Security: It’s harder for hackers to guess a URL like user/550e8400-e29b... than user/101.

3. Where is it used?

* Database Primary Keys: To identify rows in a table.
* Session IDs: To track user logins securely.
* File Names: To prevent uploaded files from overwriting each other.
* Microservices: When multiple servers are creating data at the same time.

4. How does it look?
A standard UUID (Version 4) looks like this:
550e8400-e29b-41d4-a716-446655440000
It consists of 32 hexadecimal characters displayed in 5 groups separated by hyphens.
5. How to use it (Node.js)
You usually use a library called uuid.

const { v4: uuidv4 } = require('uuid');const myId = uuidv4(); 
console.log(myId); // Outputs a random unique string

6. Can it fail?
Technically, yes, but practically, no. To have a 50% chance of a "collision" (two identical IDs), you would need to generate 1 billion UUIDs every second for about 100 years.
Would you like to see how to install and set up the uuid package in your Express project?

