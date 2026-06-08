# Postman Syllabus (QA Automation)

## Module 1: Introduction to APIs & Postman

### Topics

* What is an API?
* API Testing Basics
* What is Postman?
* Installing Postman
* Postman Interface Overview
* Creating a Workspace

### Questions

* What is an API?
* Why is Postman used?
* What are the advantages of Postman?

---

## Module 2: HTTP Fundamentals

### Topics

* Client-Server Architecture
* HTTP vs HTTPS
* Request & Response
* HTTP Methods

  * GET
  * POST
  * PUT
  * PATCH
  * DELETE
* Status Codes

### Questions

* Difference between GET and POST?
* What are HTTP status codes?
* What is the difference between PUT and PATCH?

---

## Module 3: Building API Requests

### Topics

* Request URL
* Headers
* Authorization
* Request Body
* Sending Requests
* Viewing Responses

### Hands-On

* Create GET Request
* Create POST Request
* Create PUT Request
* Create DELETE Request

---

## Module 4: Parameters

### Topics

* Query Parameters
* Path Parameters

### Examples

Query Parameter:

```http
GET /books?type=fiction
```

Path Parameter:

```http
GET /books/1
```

### Questions

* What are Query Parameters?
* What are Path Variables?

---

## Module 5: Authentication

### Topics

* API Authentication Basics
* Basic Auth
* Bearer Token
* API Key Authentication

### Questions

* What is Authentication?
* What is Bearer Token?

---

## Module 6: JSON

### Topics

* JSON Introduction
* JSON Objects
* JSON Arrays
* Nested JSON
* JSON Validation

### Example

```json
{
  "id": 1,
  "name": "Krishna"
}
```

---

## Module 7: Collections

### Topics

* Creating Collections
* Organizing Requests
* Exporting Collections
* Importing Collections

### Questions

* What is a Collection?
* Why are Collections used?

---

## Module 8: Variables

### Topics

* Global Variables
* Collection Variables
* Environment Variables
* Local Variables

### Example

```text
{{baseUrl}}
{{token}}
```

### Questions

* What are Environment Variables?
* Difference between Global and Environment Variables?

---

## Module 9: Postman Scripts

### Topics

* Pre-request Scripts
* Tests Tab
* JavaScript Basics for Postman

### Example

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```

---

## Module 10: API Testing

### Topics

* Response Validation
* Status Code Validation
* Header Validation
* Body Validation
* Response Time Validation

### Example

```javascript
pm.expect(pm.response.code).to.eql(200);
```

---

## Module 11: Assertions

### Topics

* eql()
* above()
* below()
* true()
* false()
* include()

### Example

```javascript
pm.expect(responseTime).to.be.below(500);
```

---

## Module 12: Data Extraction

### Topics

* Extract Data from Response
* Store Values in Variables
* Dynamic Requests

### Example

```javascript
let jsonData = pm.response.json();
pm.environment.set("orderId", jsonData.orderId);
```

---

## Module 13: Request Chaining

### Topics

* Passing Data Between Requests
* Dynamic Workflow Creation

### Example

```text
Create Order
      ↓
Get Order
      ↓
Update Order
      ↓
Delete Order
```

---

## Module 14: Collection Runner

### Topics

* Running Multiple Requests
* Iterations
* Data-Driven Testing

### Questions

* What is Collection Runner?
* Why is it used?

---

## Module 15: Newman

### Topics

* Newman Installation
* Running Collections via CLI
* Environment Files
* Generating Reports

### Commands

```bash
npm install -g newman
```

```bash
newman run Collection.json
```

---

## Module 16: Reporting

### Topics

* Newman HTML Reports
* Test Execution Results
* Export Reports

---

## Module 17: Monitoring

### Topics

* Postman Monitors
* Scheduled API Testing
* Alert Notifications

---

## Module 18: CI/CD Integration (Basic)

### Topics

* What is CI/CD?
* Running Newman in Pipelines
* Jenkins Overview
* GitHub Actions Overview

---

# QA Interview Focus (Most Important)

Learn these thoroughly:

✅ HTTP Methods   
✅ Status Codes   
✅ Headers   
✅ Authentication   
✅ JSON   
✅ Query & Path Parameters   
✅ Collections   
✅ Variables  
✅ Tests Tab  
✅ Assertions  
✅ Data Extraction  
✅ Request Chaining  
✅ Collection Runner  
✅ Newman  

This syllabus is sufficient for **Beginner → Intermediate Postman** and aligns well with a QA Automation path before moving to REST Assured.
