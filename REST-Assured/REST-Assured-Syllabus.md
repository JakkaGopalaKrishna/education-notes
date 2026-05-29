# REST Assured Syllabus (API Automation Testing)

## Module 1: Introduction to API Testing

### Topics

* What is API?
* Types of APIs

  * REST API
  * SOAP API
* What is API Testing?
* Why API Testing is important
* Difference between UI Testing and API Testing
* Client-Server Architecture
* HTTP Protocol Basics

### Concepts to Learn

* Request
* Response
* Endpoint
* URL
* Headers
* Body
* Status Codes

---

## Module 2: HTTP Methods & Status Codes

### HTTP Methods

* GET
* POST
* PUT
* PATCH
* DELETE

### HTTP Status Codes

* 1xx Informational
* 2xx Success
* 3xx Redirection
* 4xx Client Errors
* 5xx Server Errors

### Important Status Codes

| Code | Meaning               |
| ---- | --------------------- |
| 200  | OK                    |
| 201  | Created               |
| 204  | No Content            |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 500  | Internal Server Error |

---

## Module 3: REST Assured Basics

### Topics

* Introduction to REST Assured
* Installing Java
* Installing Maven
* Setting up IntelliJ / Eclipse
* Maven Project Setup
* Adding REST Assured Dependency

### Hands-On

* Create first REST Assured project
* Run first API test

---

## Module 4: REST Assured Core Concepts

### Topics

* given()
* when()
* then()

### Request Specification

* Base URI
* Base Path
* Query Parameters
* Path Parameters
* Headers
* Cookies

### Response Validation

* Status Code Validation
* Response Body Validation
* Header Validation
* Response Time Validation

---

## Module 5: Working with GET Requests

### Topics

* Simple GET Request
* Query Parameters
* Path Parameters
* Extract Response
* Validate JSON Response

### Practice

* Fetch user details
* Fetch product list
* Validate user data

---

## Module 6: Working with POST Requests

### Topics

* Create Request Body
* Sending JSON Data
* Content-Type
* Create New Resource

### Practice

* Create user
* Create product
* Create employee

---

## Module 7: PUT, PATCH & DELETE Requests

### PUT Request

* Full Update

### PATCH Request

* Partial Update

### DELETE Request

* Delete Resource

### Practice

* Update user details
* Delete records
* Verify deletion

---

## Module 8: JSON Handling

### Topics

* JSON Basics
* JSON Objects
* JSON Arrays
* Nested JSON

### Tools

* JSON Formatter
* JSON Validator

### REST Assured JSON Validation

* body()
* equalTo()
* hasItem()

---

## Module 9: Hamcrest Matchers

### Topics

* equalTo()
* containsString()
* hasItem()
* notNullValue()
* greaterThan()

### Practice

* Validate API responses using matchers

---

## Module 10: Authentication in REST Assured

### Types of Authentication

* Basic Auth
* Bearer Token
* OAuth
* API Key Authentication

### Practice

* Login API Testing
* Token-based Authentication

---

## Module 11: Serialization & Deserialization

### Topics

* POJO Classes
* Convert Java Object to JSON
* Convert JSON to Java Object

### Libraries

* Jackson
* Gson

---

## Module 12: Parsing API Responses

### Topics

* JsonPath
* XmlPath

### Practice

* Extract values from response
* Store response data
* Use dynamic values

---

## Module 13: Assertions & Validations

### Topics

* Assertions in REST Assured
* JUnit Assertions
* TestNG Assertions

### Practice

* Validate:

  * Status code
  * Response body
  * Headers
  * Cookies
  * Response time

---

## Module 14: Framework Development

### Topics

* Folder Structure
* Reusable Methods
* Utility Classes
* Base Class Design
* Config File Handling

### Framework Features

* Logging
* Reporting
* Reusability
* Maintainability

---

## Module 15: Data-Driven Testing

### Topics

* Read data from:

  * Excel
  * CSV
  * JSON
  * Properties File

### Practice

* Parameterized API tests

---

## Module 16: Logging & Reporting

### Logging

* log().all()
* log().body()

### Reporting Tools

* Extent Reports
* Allure Reports

---

## Module 17: Schema Validation

### Topics

* JSON Schema Validation
* Response Structure Validation

### Practice

* Validate API schema

---

## Module 18: TestNG Integration

### Topics

* TestNG Annotations
* Test Suites
* Priority
* Grouping
* Parallel Execution

---

## Module 19: CI/CD Integration

### Topics

* Jenkins Integration
* GitHub Integration
* Maven Build Commands

### Practice

* Run API tests in Jenkins

---

## Module 20: Real-Time API Automation Framework

### Project Structure

```text
src/test/java
    ├── testcases
    ├── utilities
    ├── payloads
    ├── routes
    ├── reports
```

### Real-Time Features

* Dynamic data handling
* Token management
* Reusable methods
* Logging
* Reporting
* Config management

---

## Module 21: Mini Projects

### Beginner

* User Management API

### Intermediate

* E-Commerce API Testing

### Advanced

* Banking API Automation Framework

---

## Module 22: Interview Preparation

### Important Questions

* What is REST API?
* Difference between PUT and PATCH
* What is Serialization?
* What is JsonPath?
* How authentication works?
* Difference between SOAP and REST
* What is API Schema Validation?

---

# Recommended Learning Flow

## Phase 1: Basics

* API Concepts
* HTTP Methods
* Status Codes

## Phase 2: REST Assured Core

* GET
* POST
* PUT
* DELETE
* Assertions

## Phase 3: Advanced

* Authentication
* Serialization
* Framework Design

## Phase 4: Real-Time

* Reporting
* CI/CD
* Jenkins
* Projects

---

# Best Tools to Learn Alongside

| Tool          | Purpose               |
| ------------- | --------------------- |
| Postman       | API Testing           |
| IntelliJ IDEA | Java Development      |
| Apache Maven  | Dependency Management |
| Jenkins       | CI/CD                 |
| Git           | Version Control       |
| TestNG        | Test Execution        |
