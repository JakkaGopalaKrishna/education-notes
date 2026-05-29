# REST Assured Interview Questions & Answers

### Q) What is API?

**A)** API (Application Programming Interface) is a bridge that allows two applications to communicate.

---

### Q) What is API Testing?

**A)** Testing APIs directly without using the UI.

---

### Q) What is REST API?

**A)** REST API follows REST architecture principles and uses HTTP methods like GET, POST, PUT, PATCH, and DELETE.

---

### Q) What is REST Assured?

**A)** REST Assured is a Java library used for API Automation Testing.

---

### Q) Why REST Assured is used?

**A)**

* Easy syntax
* Supports JSON and XML
* Easy validations
* Supports authentication
* Integrates with TestNG and JUnit

---

### Q) Which language is used in REST Assured?

**A)** Java.

---

### Q) What are HTTP Methods?

**A)**

| Method | Purpose              |
| ------ | -------------------- |
| GET    | Fetch data           |
| POST   | Create data          |
| PUT    | Update complete data |
| PATCH  | Partial update       |
| DELETE | Delete data          |

---

### Q) What is GET Method?

**A)** Used to fetch data from the server.

---

### Q) What is POST Method?

**A)** Used to create new data on the server.

---

### Q) What is PUT Method?

**A)** Used to update a complete resource.

---

### Q) What is PATCH Method?

**A)** Used to partially update a resource.

---

### Q) What is DELETE Method?

**A)** Used to remove data from the server.

---

### Q) Difference between POST and PUT?

**A)**

| POST        | PUT         |
| ----------- | ----------- |
| Create data | Update data |

---

### Q) Difference between PUT and PATCH?

**A)**

| PUT         | PATCH          |
| ----------- | -------------- |
| Full update | Partial update |

---

### Q) Difference between REST and SOAP?

**A)**

| REST        | SOAP   |
| ----------- | ------ |
| JSON        | XML    |
| Lightweight | Heavy  |
| Faster      | Slower |

---

### Q) What is JSON?

**A)** JSON (JavaScript Object Notation) is a data transfer format used in APIs.

---

### Q) What is JSON Object?

**A)** Collection of key-value pairs enclosed in `{}`.

---

### Q) What is JSON Array?

**A)** Collection of values enclosed in `[]`.

---

### Q) Which content type is used for JSON?

**A)**

```text
application/json
```

---

### Q) What is Status Code 200?

**A)** Request successful.

---

### Q) What is Status Code 201?

**A)** Resource created successfully.

---

### Q) What is Status Code 401?

**A)** Unauthorized access.

---

### Q) What is Status Code 404?

**A)** Resource not found.

---

### Q) What is Authentication?

**A)** Process of verifying user identity.

---

### Q) What are the types of Authentication?

**A)**

* Basic Authentication
* Bearer Token
* OAuth 2.0
* API Key

---

### Q) What is Basic Authentication?

**A)** Authentication using username and password.

---

### Q) What is Bearer Token?

**A)** Token-based authentication method.

---

### Q) What is OAuth 2.0?

**A)** Secure authorization framework using tokens.

---

### Q) Which header is commonly used for token authentication?

**A)**

```text
Authorization
```

---

### Q) What is Serialization?

**A)** Converting a Java object into JSON.

---

### Q) What is Deserialization?

**A)** Converting JSON into a Java object.

---

### Q) What is POJO Class?

**A)** Plain Old Java Object containing variables, getters, and setters.

---

### Q) What is JsonPath?

**A)** Used to extract values from JSON responses.

---

### Q) What is Response Parsing?

**A)** Extracting data from API responses.

---

### Q) What is Response Object?

**A)** Stores the API response.

---

### Q) Difference between Query Parameter and Path Parameter?

**A)**

| Query Parameter  | Path Parameter    |
| ---------------- | ----------------- |
| After `?` in URL | Inside URL        |
| Optional         | Usually mandatory |

---

### Q) What is Base URI?

**A)** Common base URL used in a project.

---

### Q) What is BDD Style in REST Assured?

**A)**

```java
given()
.when()
.then()
```

---

### Q) What is given()?

**A)** Used to prepare the request.

---

### Q) What is when()?

**A)** Used to send the request.

---

### Q) What is then()?

**A)** Used for validations.

---

### Q) How to validate Status Code?

**A)**

```java
.statusCode(200)
```

---

### Q) How to validate Response Body?

**A)**

```java
.body("key", equalTo("value"))
```

---

### Q) What are Hamcrest Matchers?

**A)** Used for validations in REST Assured.

---

### Q) What is equalTo()?

**A)** Checks exact value.

---

### Q) What is hasItem()?

**A)** Checks whether an item exists in an array.

---

### Q) What is notNullValue()?

**A)** Checks that a value is not null.

---

### Q) Why are Hamcrest Matchers used?

**A)** For clean and readable validations.

---

### Q) What are Assertions?

**A)** Used to validate expected results.

---

### Q) What is AssertionError?

**A)** Occurs when expected and actual values do not match.

---

### Q) What is Schema Validation?

**A)** Validation of API response structure.

---

### Q) Why Schema Validation is important?

**A)** Ensures response format consistency.

---

### Q) What does Schema Validation check?

**A)**

* Structure
* Fields
* Data Types
* Required Fields

---

### Q) What is Maven?

**A)** Build and dependency management tool.

---

### Q) What is pom.xml?

**A)** Main configuration file in a Maven project.

---

### Q) Why REST Assured dependency is added?

**A)** To use REST Assured library features.

---

### Q) What is TestNG?

**A)** Java testing framework used for execution and reporting.

---

### Q) What is @Test Annotation?

**A)** Used to mark test methods.

---

### Q) What is DataProvider?

**A)** Used for parameterized testing.

---

### Q) What is testng.xml?

**A)** Configuration file used for TestNG execution.

---

### Q) What is Data-Driven Testing?

**A)** Running the same test with multiple sets of data.

---

### Q) Which library is used to read Excel files?

**A)** Apache POI.

---

### Q) Why external files are used in testing?

**A)** To avoid hardcoded test data.

---

### Q) What is Logging?

**A)** Recording request and response details during execution.

---

### Q) Why Logging is important?

**A)** Helps debug failures.

---

### Q) Which method logs complete request and response?

**A)**

```java
.log().all()
```

---

### Q) What is Reporting?

**A)** Generating execution summary after test execution.

---

### Q) Which reporting tools are commonly used?

**A)**

* ExtentReports
* Allure Report

---

### Q) What is Framework?

**A)** Structured automation project design.

---

### Q) Why Framework is important?

**A)**

* Reusability
* Maintainability
* Scalability

---

### Q) What is Base Class?

**A)** Common setup class used by all test classes.

---

### Q) Why use Routes Class?

**A)** To centralize API endpoints.

---

### Q) What is Reusable Method?

**A)** Method that can be used multiple times across the framework.

---

### Q) What is CI/CD?

**A)** Continuous Integration and Continuous Deployment.

---

### Q) What is Jenkins?

**A)** Automation server used in CI/CD.

---

### Q) Which Maven command runs tests?

**A)**

```bash
mvn test
```

---

### Q) What is Jenkins Pipeline?

**A)** Automated workflow for CI/CD execution.

---

### Q) Why CI/CD is important?

**A)** Faster and automated software delivery.

---

### Q) What is API Framework?

**A)** Structured automation project for API testing.

---

### Q) Why Token Handling is important?

**A)** Required for authenticated API execution.

---

### Q) Why Mini Projects are important?

**A)** To gain real-time practical experience.

---

### Q) What are the common tools used in API Automation?

**A)**

* REST Assured
* TestNG
* Maven
* Jenkins
* Git
* Extent Reports

---

### Q) What are common API Testing Challenges?

**A)**

* Token Expiration
* Hardcoded Data
* Duplicate Code
* Environment Issues

---

### Q) What are REST Assured Best Practices?

**A)**

* Use reusable methods
* Avoid hardcoded values
* Maintain clean framework structure
* Validate responses properly
* Use logging and reporting
* Store configurations externally

---

This version is much cleaner for interview preparation (around 60 high-frequency questions only, no duplicates).
