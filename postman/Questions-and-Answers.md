# Postman Interview Questions & Answers

**Q) What is an API?**

A) An API allows communication between different software applications.

---

**Q) What is API Testing?**

A) Testing APIs by sending requests and validating responses.

---

**Q) What is Postman?**

A) A tool used for API development, testing, and automation.

---

**Q) What are the advantages of Postman?**

A) Easy testing, automation support, collections, variables, and reporting.

---

**Q) What is a Workspace?**

A) A Postman area used to organize API-related activities.

---

**Q) What is HTTP?**

A) HTTP is a protocol used for communication between client and server.

---

**Q) Difference between HTTP and HTTPS?**

A)
* HTTP is not secure.
* HTTPS encrypts data and is secure.

---

**Q) What is a Request?**

A) A message sent by a client to a server.

---

**Q) What is a Response?**

A) A message sent by a server back to a client.

---

**Q) Difference between GET and POST?**

A)

* GET retrieves data.
* POST creates data.

---

**Q) Difference between PUT and PATCH?**

A)

* PUT updates the entire resource.
* PATCH updates only specific fields.

---

**Q) What does 404 mean?**

A) The requested resource was not found.

---

**Q) What does 500 mean?**

A) An internal server error occurred.

---

**Q) What are the components of an API Request?**

A)

* URL
* Method
* Headers
* Authorization
* Body

---

**Q) What is a URL?**

A) The address of an API endpoint.

---

**Q) What are Headers?**

A) Additional information sent with a request.

---

**Q) What is Authorization?**

A) A mechanism used to verify access to APIs.

---

**Q) What is Request Body?**

A) Data sent to the server in POST, PUT, and PATCH requests.

---

**Q) Difference between Request and Response?**

A)

| Request             | Response             |
| ------------------- | -------------------- |
| Sent by Client      | Sent by Server       |
| Contains Input Data | Contains Output Data |

---

**Q) What is Response Time?**

A) The time taken by the server to process and return a response.

---

**Q) What are Query Parameters?**

A) Query Parameters are key-value pairs added after `?` in a URL and are used for filtering, searching, sorting, and pagination.

---

**Q) What are Path Parameters?**

A) Path Parameters are values embedded within the URL path used to identify a specific resource.

---

**Q) Difference Between Query and Path Parameters?**

A)

| Query Parameter  | Path Parameter          |
| ---------------- | ----------------------- |
| Filtering/Search | Resource Identification |
| After ?          | Inside URL Path         |
| Optional         | Usually Mandatory       |

---

**Q) What is Authentication?**

A) Authentication verifies the identity of a user or application before granting access.

---

**Q) What is Authorization vs Authentication?**

A)

| Authentication        | Authorization           |
| --------------------- | ----------------------- |
| Who are you?          | What can you do?        |
| Identity Verification | Permission Verification |

---

**Q) What is Basic Authentication?**

A) Authentication using username and password.

---

**Q) What is a Bearer Token?**

A) A token sent in the Authorization header to access protected APIs.

---

**Q) What is an API Key?**

A) A unique key used to identify and authenticate API requests.

---

**Q) What is OAuth 2.0?**

A) A secure authorization framework widely used by Google, Facebook, GitHub, etc.

---

**Q) What Does 401 Mean?**

A) Authentication failed.

---

**Q) What Does 403 Mean?**

A) Access denied despite successful authentication.

---

**Q) What is JSON?**

A) JSON (JavaScript Object Notation) is a lightweight data-interchange format used by APIs.

---

**Q) What are JSON Data Types?**

A)

* String
* Number
* Boolean
* Null
* Object
* Array

---

**Q) What is a JSON Object?**

A) A collection of key-value pairs enclosed in `{}`.

---

**Q) What is a JSON Array?**

A) A collection of values enclosed in `[]`.

---

**Q) What is Nested JSON?**

A) JSON containing another object or array inside it.

---

**Q) What Content-Type is Used for JSON?**

A)

```http
Content-Type: application/json
```

---

**Q) What is a Collection?**

A) A collection is a group of API requests organized together in Postman.

---

**Q) Why are Collections Used?**

A) To organize, reuse, automate, and share API requests.

---

**Q) What is a Variable?**

A) A reusable container used to store values in Postman.

---

**Q) What are Environment Variables?**

A) Variables used for different environments like Dev, QA, and Production.

---

**Q) What are Dynamic Variables?**

A) Built-in Postman variables that generate random data.

Example:

```text
{{$randomEmail}}
{{$randomFirstName}}
{{$randomInt}}
```

---

**Q) What is Variable Precedence?**

A)

```text
Local
↓
Environment
↓
Collection
↓
Global
```

---

**Q) What are Postman Scripts?**

A) JavaScript code executed before or after API requests.

---

**Q) What is a Pre-request Script?**

A) A script executed before the request is sent.

---

**Q) What is the Tests Tab?**

A) A script executed after the response is received.

---

**Q) What is an Assertion?**

A) An assertion validates whether actual and expected values match.

---

**Q) What is pm.expect()?**

A) Used to create assertions in Postman.

---

**Q) Which Assertions Are Most Commonly Used?**

A)

```javascript
eql()
include()
true()
false()
above()
below()
```

---

**Q) What is Positive Testing?**

A) Testing with valid input data.

---

**Q) What is Negative Testing?**

A) Testing with invalid input data.

---

**Q) What is Edge Case Testing?**

A) Testing boundary and unusual conditions.

---

**Q) What is Data Extraction?**

A) Retrieving values from API responses and storing them for reuse.

---

**Q) What is Request Chaining?**

A) Passing data from one API request to another.

---

**Q) What is Collection Runner?**

A) A Postman feature used to execute multiple requests automatically.

---

**Q) What is Data-Driven Testing?**

A) Executing the same test using different sets of input data.

---

**Q) What is Newman?**

A) Newman is the command-line runner for Postman collections.

---

**Q) How Do You Install Newman?**

A)

```bash
npm install -g newman
```

---

**Q) How Do You Run a Collection?**

A)

```bash
newman run collection.json
```

---

**Q) What is a Test Report?**

A) A report showing API execution results and test outcomes.

---

**Q) What is an HTML Report?**

A) A browser-readable execution report.

---

**Q) What is Monitoring?**

A) Running API tests automatically at scheduled intervals.

---

**Q) What is a Postman Monitor?**

A) A Postman feature used to execute collections automatically on a schedule.

---

**Q) What is CI?**

A) Continuous Integration is the practice of automatically building and testing code changes.

---

**Q) What is CD?**

A) Continuous Delivery/Deployment automates application release processes.

---

**Q) Why is Newman Used in CI/CD?**

A) Because CI/CD servers execute tests through the command line rather than the Postman GUI.

---

**Q) What is Jenkins?**

A) An automation server used for building, testing, and deploying applications.

---

**Q) What is GitHub Actions?**

A) A workflow automation platform built into GitHub.
