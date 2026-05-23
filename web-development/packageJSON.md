# Package.json

```
npm init -y
```

```json
//package.json
{
  "name": "my-server",//file-name (web application name)
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "JGKrishna",//owner of application
  "license": "ISC",
  "description": ""
}
```
This is a package.json file, which acts as the "ID card" and instruction manual for a Node.js project. It tells the system how to handle your app and what it needs to run.
Here is the breakdown of each field:

* **name**: The unique identifier for your project. If you ever publish this to the web (npm), this is the name people would use to install it.
* **version**: Follows "Semantic Versioning" (Major.Minor.Patch). 1.0.0 usually means your first stable release.
* **main**: The "entry point" of your app. When someone runs your package, this tells Node.js to look at index.js first to start the program.
* **scripts**: These are shortcut commands.
  * "test": Currently, if you run npm test, it will just print an error message and stop. You can replace this later with actual testing tools.
* **keywords**: An array of words that help people find your project in a search (e.g., ["server", "chat", "api"]). It's empty here.
* **author**: Your name or organization.
* **license**: The legal terms for your code. ISC is a common "open source" license that lets others use your code freely.
* **description**: A short summary of what the project actually does.

---
---
In a package.json file, the **license key typically** uses SPDX license identifiers.

While there are **hundreds** of valid identifiers, here are the most common values you will see in the Node.js ecosystem:

### Common Open Source Values

* **MIT**: The most popular permissive license. It allows almost anything as long as the original copyright notice is included.
* **ISC**: The default value for npm init. It is functionally equivalent to the MIT and BSD licenses but uses simpler language.
* **Apache-2.0**: A permissive license that also includes explicit protections for patents.
* **0BSD**: An extremely permissive license that doesn't even require attribution.   
  
### Special Values

* **UNLICENSED**: Use this if you do not want to grant anyone the right to use your code under any terms (common for private/proprietary projects).
* **SEE LICENSE IN** `<filename>`: Use this if you have a custom license file in your project that doesn't match a standard SPDX ID.

---
---
