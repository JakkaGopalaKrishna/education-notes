
nvm allows you to quickly install and use different versions of node via the command line.

    Locally download any of the remote Long Term Support (LTS) versions of Node.js with a simple command.
    Easily switch between multiple versions of Node.js, right from the command line.
    Set up aliases to switch between different downloaded versions of Node.js with ease.

Installing NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

to check the version of a nvm is 
command -v nvm

--- 
# what is node.js
- A run time environment for executing javascript code
- We often use node to built back-services like API's (Application Programming Interfaces)
- It highly scalable, data intensive and realtime apps
- special features:
    great for prototyping and agile development
    superFast and highly scalable
    javascript everywhere
    cleaner amd more consistent  codebase
    large ecosystem of open-source libs

---
# what is npm:
node package manager
pre-installed with node.js
Easily install modules/package on your system
modules are basically javascript libraries 
makes it easy for developers to share &  reuse code

---
# Comparison of All Promise Methods
--------------------------------------------------------------------------------------------------
| Method     | Wait all?  | First success?  | First settle?  | Fails fast?         | Returns      |
| ---------- | ---------- | --------------- | -------------- | ------------------- | ------------ |
| all        | ✅ Yes     | ❌ No           | ❌ No          | ✅ Yes              | Array        |
| race       | ❌ No      | ❌ No           | ✅ Yes         | ✅ If first fails   | One value    |
| any        | ❌ No      | ✅ Yes          | ❌ No          | ❌ Only if all fail | One value    |
| allSettled | ✅ Yes     | ❌ No           | ❌ No          | ❌ No               | Status array |
| finally    | —          | —               | —              | —                   | Cleanup only |
---------------------------------------------------------------------------------------------------

---
# File system
fs.readFile("file.txt", "utf16le", cb);
Encoding Comparison

-------------------------------------------------------
| Encoding | Supports Unicode  | Size   | Usage        |
| -------- | ----------------- | ------ | ------------ |
| utf8     | ✅ Yes            | Small  | Web, apps    |
| ascii    | ❌ No             | Small  | Old systems  |
| base64   | ✅ Yes            | Large  | Images, APIs |
| hex      | ✅ Yes            | Large  | Debugging    |
| latin1   | Partial           | Medium | EU languages |
| utf16le  | ✅ Yes            | Large  | Windows      |
-------------------------------------------------------






































































































