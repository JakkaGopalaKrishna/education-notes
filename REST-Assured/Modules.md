# Module 1: Introduction to API Testing

## 1. What is API?

API stands for:

### Application Programming Interface

An API acts as a bridge between two software applications.

It allows applications to:

* communicate
* exchange data
* perform operations

without directly accessing each other's internal code.

---

## 2. Real-Life Example of API

Imagine a restaurant:

* Customer → Client
* Waiter → API
* Kitchen → Server

### Flow

1. Customer gives order
2. Waiter takes request
3. Kitchen prepares food
4. Waiter returns response

---

## 3. API Architecture

```text id="9h9llm"
Client → API → Server
```

Examples of clients:

* Mobile Apps
* Websites
* Postman
* REST Assured

---

## 4. Types of APIs

### REST API

Most commonly used API type.

#### Features

* Fast
* Lightweight
* Uses JSON
* Uses HTTP methods

Example:

```text id="dh6cd0"
GET /users
POST /login
```

---

### SOAP API

Older protocol-based API.

#### Features

* Uses XML
* More secure
* Complex structure

Used mainly in:

* Banking
* Enterprise applications

---

## 5. REST vs SOAP

| REST        | SOAP     |
| ----------- | -------- |
| Uses JSON   | Uses XML |
| Fast        | Slower   |
| Lightweight | Heavy    |
| Easy to use | Complex  |

---

## 6. What is API Testing?

API Testing means testing APIs directly to verify:

* functionality
* reliability
* performance
* security

without using UI.

---

## 7. Why API Testing?

### Advantages

* Faster than UI testing
* Stable
* Easy to automate
* Finds backend issues early
* No browser needed

---

## 8. UI Testing vs API Testing

| UI Testing     | API Testing          |
| -------------- | -------------------- |
| Tests frontend | Tests backend        |
| Slow           | Fast                 |
| Uses browser   | No browser           |
| Selenium       | REST Assured/Postman |

---

## 9. Client-Server Architecture

### Client

Requests data from server.

Examples:

* Browser
* Mobile App
* Postman

---

### Server

Processes request and sends response.

---

## 10. Request and Response Flow

```text 
Client → Request → Server
Client ← Response ← Server
```

---

## 11. What is HTTP?

HTTP stands for:

### HyperText Transfer Protocol

Used for communication between:

* client
* server

---

## 12. HTTP Methods

| Method | Purpose             |
| ------ | ------------------- |
| GET    | Fetch data          |
| POST   | Create data         |
| PUT    | Update full data    |
| PATCH  | Update partial data |
| DELETE | Delete data         |

---

## 13. GET Method Example

```text id="r4p0zt"
GET https://reqres.in/api/users
```

Used to fetch user data.

---

## 14. POST Method Example

```text id="p5xb9o"
POST https://reqres.in/api/users
```

Used to create new user.

---

## 15. What is Request?

Request is sent by client to server.

### Request Contains

* URL
* Method
* Headers
* Body
* Parameters

---

## 16. What is Response?

Response is sent by server to client.

### Response Contains

* Status code
* Response body
* Headers

---

## 17. JSON Response Example

```json 
{
  "name": "Krishna",
  "job": "Tester"
}
```

---

## 18. What is JSON?

JSON stands for:

### JavaScript Object Notation

Used for data transfer.

---

## 19. Status Codes

### 2xx Success Codes

| Code | Meaning |
| ---- | ------- |
| 200  | OK      |
| 201  | Created |

---

### 4xx Client Errors

| Code | Meaning      |
| ---- | ------------ |
| 400  | Bad Request  |
| 401  | Unauthorized |
| 404  | Not Found    |

---

### 5xx Server Errors

| Code | Meaning               |
| ---- | --------------------- |
| 500  | Internal Server Error |

---

## 20. Common API Terms

| Term           | Meaning               |
| -------------- | --------------------- |
| Endpoint       | API URL               |
| Header         | Extra information     |
| Body           | Data sent             |
| JSON           | Data format           |
| Authentication | Security verification |

---

## 21. Tools Used in API Testing

| Tool          | Purpose             |
| ------------- | ------------------- |
| Postman       | Manual API Testing  |
| REST Assured  | API Automation      |
| Swagger       | API Documentation   |
| Apache JMeter | Performance Testing |

---
---
# Module 2: HTTP Methods & Status Codes

## 1. What are HTTP Methods?

HTTP methods define what action the client wants to perform on the server.

---

## 2. Main HTTP Methods

| Method | Purpose              |
| ------ | -------------------- |
| GET    | Fetch data           |
| POST   | Create data          |
| PUT    | Update complete data |
| PATCH  | Update partial data  |
| DELETE | Delete data          |

---

## 3. GET Method

### Purpose

Used to retrieve data from server.

---

### GET Request Example

```text id="fh3b6z"
GET https://reqres.in/api/users/2
```

---

### GET Request Flow

```text id="24t0ml"
Client → GET Request → Server
Client ← Response ← Server
```

---

### GET Response Example

```json id="9wd3sr"
{
  "data": {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet"
  }
}
```

---

### REST Assured GET Example

```java id="7lcv2u"
import io.restassured.RestAssured;
import org.junit.Test;

public class GetTest {

    @Test
    public void getUser() {

        RestAssured
                .given()

                .when()
                .get("https://reqres.in/api/users/2")

                .then()
                .statusCode(200);
    }
}
```

---

## 4. POST Method

### Purpose

Used to create new data on server.

---

### POST Request Example

```text 
POST https://reqres.in/api/users
```

---

### POST Request Body

```json id="p3ik2m"
{
  "name": "Krishna",
  "job": "Tester"
}
```

---

### POST Response Example

```json id="zv54lx"
{
  "name": "Krishna",
  "job": "Tester",
  "id": "101"
}
```

---

### REST Assured POST Example

```java id="8o4yba"
import io.restassured.RestAssured;
import org.junit.Test;

public class PostTest {

    @Test
    public void createUser() {

        String body = "{\n" +
                "\"name\":\"Krishna\",\n" +
                "\"job\":\"Tester\"\n" +
                "}";

        RestAssured
                .given()
                .header("Content-Type", "application/json")
                .body(body)

                .when()
                .post("https://reqres.in/api/users")

                .then()
                .statusCode(201);
    }
}
```

---

## 5. PUT Method

### Purpose

Used to update complete existing data.

---

### PUT Request Example

```text 
PUT https://reqres.in/api/users/2
```

---

### PUT Request Body

```json id="2jvx54"
{
  "name": "Krishna",
  "job": "Senior Tester"
}
```

---

### REST Assured PUT Example

```java id="2d8zv2"
RestAssured
        .given()
        .header("Content-Type", "application/json")
        .body(body)

        .when()
        .put("https://reqres.in/api/users/2")

        .then()
        .statusCode(200);
```

---

## 6. PATCH Method

### Purpose

Used to partially update data.

---

### PATCH Request Example

```text id="azb79e"
PATCH https://reqres.in/api/users/2
```

---

### PATCH Request Body

```json id="n8z8te"
{
  "job": "Automation Tester"
}
```

---

## 7. PUT vs PATCH

| PUT                     | PATCH                       |
| ----------------------- | --------------------------- |
| Full update             | Partial update              |
| Replaces whole resource | Updates only required field |

---

## 8. DELETE Method

### Purpose

Used to delete data from server.

---

### DELETE Request Example

```text 
DELETE https://reqres.in/api/users/2
```

---

### REST Assured DELETE Example

```java id="4bpx6d"
RestAssured
        .given()

        .when()
        .delete("https://reqres.in/api/users/2")

        .then()
        .statusCode(204);
```

---

## 9. What are Status Codes?

Status codes tell whether request:

* succeeded
* failed
* has errors

---

## 10. Status Code Categories

| Range | Meaning       |
| ----- | ------------- |
| 1xx   | Informational |
| 2xx   | Success       |
| 3xx   | Redirection   |
| 4xx   | Client Errors |
| 5xx   | Server Errors |

---

## 11. Success Status Codes

| Code | Meaning    |
| ---- | ---------- |
| 200  | OK         |
| 201  | Created    |
| 204  | No Content |

---

## 12. Client Error Codes

| Code | Meaning      |
| ---- | ------------ |
| 400  | Bad Request  |
| 401  | Unauthorized |
| 403  | Forbidden    |
| 404  | Not Found    |

---

## 13. Server Error Codes

| Code | Meaning               |
| ---- | --------------------- |
| 500  | Internal Server Error |
| 502  | Bad Gateway           |

---

## 14. 404 Error Example

```text 
GET https://reqres.in/api/unknown/999
```

Response:

```text 
404 Not Found
```

---

## 15. Request Components

| Component  | Purpose           |
| ---------- | ----------------- |
| URL        | Endpoint          |
| Method     | Action            |
| Headers    | Extra information |
| Body       | Data              |
| Parameters | Query values      |

---

## 16. Response Components

| Component     | Meaning       |
| ------------- | ------------- |
| Status Code   | Success/Error |
| Headers       | Metadata      |
| Body          | Actual data   |
| Response Time | Performance   |

---

## 17. Content Types

| Content Type     | Meaning   |
| ---------------- | --------- |
| application/json | JSON Data |
| text/html        | HTML      |
| application/xml  | XML Data  |

---

## 18. Common Headers

| Header        | Purpose                |
| ------------- | ---------------------- |
| Content-Type  | Data format            |
| Authorization | Security               |
| Accept        | Expected response type |

---

## 19. API Testing Workflow

```text id="2ng5r7"
1. Send Request
2. Receive Response
3. Validate Status Code
4. Validate Response Body
5. Validate Headers
6. Validate Response Time
```

---
---

# Module 3: REST Assured Setup & Project Configuration

## 1. What is REST Assured?

REST Assured is a Java library used for API Automation Testing.

It helps to:

* send API requests
* validate responses
* automate API testing

---

## 2. Software Required

| Software                | Purpose               |
| ----------------------- | --------------------- |
| Java JDK                | Programming Language  |
| IntelliJ IDEA / Eclipse | IDE                   |
| Maven                   | Dependency Management |
| REST Assured            | API Automation        |

---

## 3. Install Java

### Download Java

[Oracle Java Downloads](https://www.oracle.com/java/technologies/downloads/?utm_source=chatgpt.com)

OR

[OpenJDK Downloads](https://jdk.java.net/?utm_source=chatgpt.com)

---

### Verify Java Installation

Open terminal:

```bash id="snt4cq"
java -version
```

Example Output:

```text 
java version "21"
```

---

## 4. Install IntelliJ IDEA

Download:

[IntelliJ IDEA](https://www.jetbrains.com/idea/download/?utm_source=chatgpt.com)

Community Edition is enough.

---

## 5. Install Maven

Download:

[Apache Maven](https://maven.apache.org/download.cgi?utm_source=chatgpt.com)

---

### Verify Maven Installation

```bash 
mvn -version
```

---

## 6. Create Maven Project

### Steps

1. Open IntelliJ IDEA
2. Click:

```text 
New Project
```

3. Select:

```text id="glq78s"
Maven
```

4. Enter project details

Example:

| Field       | Value              |
| ----------- | ------------------ |
| Group ID    | com.api            |
| Artifact ID | restassuredproject |

---

## 7. Maven Project Structure

```text id="vpy72x"
project-name
│
├── src
│   ├── main
│   └── test
│
├── pom.xml
```

---

## 8. What is pom.xml?

`pom.xml` is the main configuration file in Maven project.

Used for:

* dependencies
* plugins
* project configuration

---

## 9. Add REST Assured Dependency

Open `pom.xml`

Add:

```xml id="rfc0o6"
<dependency>
    <groupId>io.rest-assured</groupId>
    <artifactId>rest-assured</artifactId>
    <version>5.5.0</version>
    <scope>test</scope>
</dependency>
```

---

## 10. Add JUnit Dependency

```xml id="5jv0u6"
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
    <scope>test</scope>
</dependency>
```

---

## 11. Complete pom.xml

```xml id="98zc0w"
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

    <modelVersion>4.0.0</modelVersion>

    <groupId>com.api</groupId>
    <artifactId>restassuredproject</artifactId>
    <version>1.0</version>

    <dependencies>

        <dependency>
            <groupId>io.rest-assured</groupId>
            <artifactId>rest-assured</artifactId>
            <version>5.5.0</version>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.13.2</version>
            <scope>test</scope>
        </dependency>

    </dependencies>

</project>
```

---

## 12. Maven Commands

| Command     | Purpose          |
| ----------- | ---------------- |
| mvn clean   | Remove old files |
| mvn test    | Run tests        |
| mvn compile | Compile project  |
| mvn install | Build project    |

---

## 13. Create First Test Class

Path:

```text id="zb5o2k"
src/test/java
```

Create class:

```text 
FirstApiTest.java
```

---

## 14. First REST Assured Test

```java id="8q8jws"
import io.restassured.RestAssured;
import org.junit.Test;

public class FirstApiTest {

    @Test
    public void firstTest() {

        RestAssured
                .given()

                .when()
                .get("https://reqres.in/api/users/2")

                .then()
                .statusCode(200);
    }
}
```

---

## 15. Understanding the Code

### given()

Used to prepare request.

Example:

* headers
* body
* authentication

---

### when()

Used to send request.

Example:

```java id="tn1kl1"
.get()
.post()
.put()
.delete()
```

---

### then()

Used for validation.

Example:

```java id="3u2jv8"
.statusCode(200)
```

---

## 16. Run the Test

In IntelliJ:

Right click:

```text id="2a4b7h"
Run FirstApiTest
```

---

## 17. Successful Output

```text id="1ydv8u"
BUILD SUCCESS
```

---

## 18. Common Errors

### Dependency Not Found

Solution:

```text 
Reload Maven Project
```

---

### Java Not Configured

Check:

```bash id="zt4obm"
java -version
```

---

### Internet Issue

Ensure API endpoint is accessible.

---

## 19. REST Assured Flow

```java id="x88r4u"
given()
.when()
.then()
```

This is called:

### BDD Style Syntax

BDD = Behavior Driven Development

---

## 20. Advantages of Maven

* Easy dependency management
* Simple project structure
* Easy execution
* Supports CI/CD

---
---
# Module 4: REST Assured Core Concepts

## 1. REST Assured Request Flow

Main structure:

```java id="fcw5m4"
given()
.when()
.then();
```

---

## 2. Flow Explanation

| Method  | Purpose           |
| ------- | ----------------- |
| given() | Prepare request   |
| when()  | Send request      |
| then()  | Validate response |

---

## 3. Simple GET Request Example

```java id="7alv9g"
import io.restassured.RestAssured;
import org.junit.Test;

public class ApiTest {

    @Test
    public void testAPI() {

        RestAssured
                .given()

                .when()
                .get("https://reqres.in/api/users/2")

                .then()
                .statusCode(200);
    }
}
```

---

## 4. Understanding given()

`given()` is used to prepare request details.

Inside `given()` we can add:

* Headers
* Authentication
* Parameters
* Cookies
* Request Body

---

## 5. Header Example

```java
.given()
.header("Content-Type", "application/json")
```

---

## 6. Authentication Example

```java id="pcn1ih"
.given()
.auth()
.basic("username", "password")
```

---

## 7. Understanding when()

`when()` sends request to server.

---

## 8. Common HTTP Methods in REST Assured

```java id="s1m2fr"
.get()
.post()
.put()
.patch()
.delete()
```

---

## 9. Example

```java 
.when()
.get("https://reqres.in/api/users")
```

---

## 10. Understanding then()

`then()` is used for validation.

---

## 11. Common Validations

| Validation   | Purpose                |
| ------------ | ---------------------- |
| statusCode() | Validate status code   |
| body()       | Validate response body |
| header()     | Validate headers       |
| time()       | Validate response time |

---

## 12. Status Code Validation

```java 
.then()
.statusCode(200)
```

---

## 13. Base URI

Base URI helps avoid writing full URL repeatedly.

---

### Without Base URI

```java
.get("https://reqres.in/api/users/2")
```

---

### With Base URI

```java
RestAssured.baseURI = "https://reqres.in";
```

Then:

```java
.get("/api/users/2")
```

---

## 14. Complete Base URI Example

```java id="2a9w9m"
import io.restassured.RestAssured;
import org.junit.Test;

public class BaseURITest {

    @Test
    public void testBaseURI() {

        RestAssured.baseURI = "https://reqres.in";

        RestAssured
                .given()

                .when()
                .get("/api/users/2")

                .then()
                .statusCode(200);
    }
}
```

---

## 15. Headers

Headers send extra information to server.

---

## 16. Common Headers

| Header        | Purpose           |
| ------------- | ----------------- |
| Content-Type  | Data format       |
| Accept        | Expected response |
| Authorization | Security token    |

---

## 17. Multiple Headers Example

```java id="1lb0h7"
.headers(
    "Content-Type", "application/json",
    "Accept", "application/json"
)
```

---

## 18. Query Parameters

Query parameters are added after `?` in URL.

---

### Example URL

```text 
https://reqres.in/api/users?page=2
```

Here:

```text id="zph92f"
page=2
```

is query parameter.

---

## 19. Query Parameter Example

```java 
RestAssured
        .given()
        .queryParam("page", 2)

        .when()
        .get("https://reqres.in/api/users")

        .then()
        .statusCode(200);
```

---

## 20. Path Parameters

Path parameters are dynamic values inside URL.

---

### Example URL

```text 
https://reqres.in/api/users/2
```

Here:

```text
2
```

is path parameter.

---

## 21. Path Parameter Example

```java 
RestAssured
        .given()
        .pathParam("id", 2)

        .when()
        .get("https://reqres.in/api/users/{id}")

        .then()
        .statusCode(200);
```

---

## 22. Request Body

Used mainly in:

* POST
* PUT
* PATCH

---

## 23. JSON Request Body Example

```json
{
  "name": "Krishna",
  "job": "Tester"
}
```

---

## 24. Request Body in REST Assured

```java id="jmc4"
.body(requestBody)
```

---

## 25. POST Request with Body

```java id="jmc5"
String body = "{\n" +
        "\"name\":\"Krishna\",\n" +
        "\"job\":\"Tester\"\n" +
        "}";

RestAssured
        .given()
        .header("Content-Type", "application/json")
        .body(body)

        .when()
        .post("https://reqres.in/api/users")

        .then()
        .statusCode(201);
```

---

## 26. Response Validation

REST Assured validates server response.

---

## 27. Status Line Validation

```java id="jmc6"
.statusLine("HTTP/1.1 200 OK")
```

---

## 28. Header Validation

```java id="jmc7"
.header("Content-Type", "application/json; charset=utf-8")
```

---

## 29. Logging

Logging helps debug requests and responses.

---

## 30. Log Request and Response

```java 
RestAssured
        .given()
        .log().all()

        .when()
        .get("https://reqres.in/api/users")

        .then()
        .log().all();
```

---

## 31. Response Extraction

Store response for later use.

---

## 32. Response Object Example

```java 
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.Test;

public class ResponseTest {

    @Test
    public void testResponse() {

        Response response = RestAssured
                .given()

                .when()
                .get("https://reqres.in/api/users/2");

        System.out.println(response.getStatusCode());

        System.out.println(response.getBody().asString());
    }
}
```

---

## 33. Get Status Code

```java 
response.getStatusCode();
```

---

## 34. Get Response Body

```java 
response.getBody().asString();
```

---

## 35. BDD vs Non-BDD Style

### BDD Style

```java 
given()
.when()
.then()
```

---

### Non-BDD Style

```java 
RestAssured.get();
```

BDD style is more readable.

---

## 36. Important Classes

| Class                | Purpose         |
| -------------------- | --------------- |
| RestAssured          | Main class      |
| Response             | Stores response |
| RequestSpecification | Request details |

---
---
# Module 5: Working with GET Requests

## 1. What is GET Request?

GET request is used to retrieve data from server.

It does not modify data.

---

## 2. GET Request Syntax in REST Assured

```java id="8c0q8f"
RestAssured
        .given()

        .when()
        .get("https://reqres.in/api/users/2")

        .then()
        .statusCode(200);
```

---

## 3. Simple GET Request Example

```java 
import io.restassured.RestAssured;
import org.junit.Test;

public class GetRequestTest {

    @Test
    public void getUser() {

        RestAssured
                .given()

                .when()
                .get("https://reqres.in/api/users/2")

                .then()
                .statusCode(200);
    }
}
```

---

## 4. GET Request Flow

```text 
Client → GET Request → Server
Client ← Response ← Server
```

---

## 5. GET Response Example

```json 
{
  "data": {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver"
  }
}
```

---

## 6. Validate Status Code

```java 
.then()
.statusCode(200)
```

---

## 7. Validate Response Body

Used to verify API response data.

---

### Example

```java 
.then()
.body("data.first_name", equalTo("Janet"))
```

---

## 8. Complete Validation Example

```java 
import io.restassured.RestAssured;
import org.junit.Test;

import static org.hamcrest.Matchers.equalTo;

public class ValidationTest {

    @Test
    public void validateUser() {

        RestAssured
                .given()

                .when()
                .get("https://reqres.in/api/users/2")

                .then()
                .statusCode(200)
                .body("data.first_name", equalTo("Janet"));
    }
}
```

---

## 9. Query Parameters

Query parameters are added after `?` in URL.

---

### Example URL

```text
https://reqres.in/api/users?page=2
```

Here:

```text
page=2
```

is query parameter.

---

## 10. Query Parameter Example

```java
RestAssured
        .given()
        .queryParam("page", 2)

        .when()
        .get("https://reqres.in/api/users")

        .then()
        .statusCode(200);
```

---

## 11. Multiple Query Parameters

```java
.queryParam("page", 2)
.queryParam("id", 5)
```

---

## 12. Path Parameters

Path parameters are dynamic values inside URL.

---

### Example URL

```text
https://reqres.in/api/users/2
```

Here:

```text
2
```

is path parameter.

---

## 13. Path Parameter Example

```java
RestAssured
        .given()
        .pathParam("id", 2)

        .when()
        .get("https://reqres.in/api/users/{id}")

        .then()
        .statusCode(200);
```

---

## 14. Multiple Path Parameters

Example URL:

```text
/users/{userid}/posts/{postid}
```

---

### Example

```java
.pathParam("userid", 1)
.pathParam("postid", 10)
```

---

## 15. Logging GET Requests

Logging helps debug API execution.

---

### Log Complete Request

```java
.log().all()
```

---

### Log Complete Response

```java
.then()
.log().all()
```

---

## 16. Logging Example

```java
RestAssured
        .given()
        .log().all()

        .when()
        .get("https://reqres.in/api/users/2")

        .then()
        .log().all();
```

---

## 17. Extract Response

Response can be stored for future usage.

---

### Example

```java
Response response =
        RestAssured
                .given()

                .when()
                .get("https://reqres.in/api/users/2");
```

---

## 18. Get Status Code from Response

```java
response.getStatusCode();
```

---

## 19. Get Response Body

```java
response.getBody().asString();
```

---

## 20. Print Response Body

```java
System.out.println(response.getBody().asString());
```

---

## 21. Complete Response Extraction Example

```java
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.Test;

public class ResponseExample {

    @Test
    public void extractResponse() {

        Response response = RestAssured
                .given()

                .when()
                .get("https://reqres.in/api/users/2");

        System.out.println("Status Code: "
                + response.getStatusCode());

        System.out.println("Response Body:");

        System.out.println(response.getBody().asString());
    }
}
```

---

## 22. Validate Response Headers

```java
.then()
.header("Content-Type",
        "application/json; charset=utf-8")
```

---

## 23. Validate Response Time

```java
.then()
.time(lessThan(3000L));
```

---

## 24. GET Request with Base URI

```java
import io.restassured.RestAssured;
import org.junit.Test;

public class BaseURITest {

    @Test
    public void testBaseURI() {

        RestAssured.baseURI =
                "https://reqres.in";

        RestAssured
                .given()

                .when()
                .get("/api/users/2")

                .then()
                .statusCode(200);
    }
}
```

---

## 25. Common GET Request Validations

| Validation   | Purpose                |
| ------------ | ---------------------- |
| statusCode() | Validate status        |
| body()       | Validate response      |
| header()     | Validate headers       |
| time()       | Validate response time |

---

## 26. Common Errors in GET Requests

| Error | Meaning            |
| ----- | ------------------ |
| 404   | Resource not found |
| 401   | Unauthorized       |
| 500   | Server error       |

---
---

# Module 6: Working with POST Requests

## 1. What is POST Request?

POST request is used to create new data on server.

Examples:

* Create user
* Register account
* Add product
* Submit form

---

## 2. POST Request Flow

```text
Client → POST Request → Server
Client ← Response ← Server
```

---

## 3. POST Request Syntax

```java
RestAssured
        .given()

        .when()
        .post("URL")

        .then();
```

---

## 4. Important Components in POST Request

| Component | Purpose      |
| --------- | ------------ |
| Header    | Data format  |
| Body      | Data to send |
| Endpoint  | API URL      |

---

## 5. JSON Request Body

POST requests mostly send JSON data.

---

### Example JSON Body

```json
{
  "name": "Krishna",
  "job": "Tester"
}
```

---

## 6. Simple POST Request Example

```java
import io.restassured.RestAssured;
import org.junit.Test;

public class PostRequestTest {

    @Test
    public void createUser() {

        String requestBody = "{\n" +
                "\"name\":\"Krishna\",\n" +
                "\"job\":\"Tester\"\n" +
                "}";

        RestAssured
                .given()
                .header("Content-Type",
                        "application/json")
                .body(requestBody)

                .when()
                .post("https://reqres.in/api/users")

                .then()
                .statusCode(201);
    }
}
```

---

## 7. Understanding the Code

### header()

Defines request content type.

---

### body()

Sends request payload.

---

### post()

Sends POST request to server.

---

### statusCode(201)

Validates resource creation.

---

## 8. POST Response Example

```json
{
  "name": "Krishna",
  "job": "Tester",
  "id": "101",
  "createdAt": "2026-05-28T10:00:00Z"
}
```

---

## 9. Validate Response Body

```java
.then()
.body("name", equalTo("Krishna"))
```

---

## 10. Complete Validation Example

```java 
import io.restassured.RestAssured;
import org.junit.Test;

import static org.hamcrest.Matchers.equalTo;

public class PostValidationTest {

    @Test
    public void validatePostRequest() {

        String body = "{\n" +
                "\"name\":\"Krishna\",\n" +
                "\"job\":\"Tester\"\n" +
                "}";

        RestAssured
                .given()
                .header("Content-Type",
                        "application/json")
                .body(body)

                .when()
                .post("https://reqres.in/api/users")

                .then()
                .statusCode(201)
                .body("name",
                        equalTo("Krishna"));
    }
}
```

---

## 11. Content-Type Header

Specifies data format sent to server.

---

### Common Content Types

| Content Type     | Purpose    |
| ---------------- | ---------- |
| application/json | JSON data  |
| application/xml  | XML data   |
| text/plain       | Plain text |

---

## 12. Adding Multiple Headers

```java 
.headers(
    "Content-Type", "application/json",
    "Accept", "application/json"
)
```

---

## 13. Logging POST Request

Logging helps debug requests and responses.

---

### Logging Example

```java 
RestAssured
        .given()
        .log().all()
        .header("Content-Type",
                "application/json")
        .body(body)

        .when()
        .post("https://reqres.in/api/users")

        .then()
        .log().all();
```

---

## 14. Extract Response from POST Request

```java 
Response response =
        RestAssured
                .given()
                .header("Content-Type",
                        "application/json")
                .body(body)

                .when()
                .post("https://reqres.in/api/users");
```

---

## 15. Print Response Body

```java 
System.out.println(
        response.getBody().asString());
```

---

## 16. Get Status Code

```java 
response.getStatusCode();
```

---

## 17. Complete Response Extraction Example

```java 
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.Test;

public class ResponseExtractionTest {

    @Test
    public void extractPostResponse() {

        String body = "{\n" +
                "\"name\":\"Krishna\",\n" +
                "\"job\":\"Tester\"\n" +
                "}";

        Response response =
                RestAssured
                        .given()
                        .header("Content-Type",
                                "application/json")
                        .body(body)

                        .when()
                        .post("https://reqres.in/api/users");

        System.out.println(
                response.getStatusCode());

        System.out.println(
                response.getBody().asString());
    }
}
```

---

## 18. Using Base URI

```java 
RestAssured.baseURI =
        "https://reqres.in";
```

---

### Example

```java 
RestAssured
        .given()
        .header("Content-Type",
                "application/json")
        .body(body)

        .when()
        .post("/api/users")

        .then()
        .statusCode(201);
```

---

## 19. Common POST Status Codes

| Status Code | Meaning          |
| ----------- | ---------------- |
| 200         | Success          |
| 201         | Resource Created |
| 400         | Bad Request      |
| 401         | Unauthorized     |
| 500         | Server Error     |

---

## 20. Common Errors in POST Requests

| Error | Reason               |
| ----- | -------------------- |
| 400   | Invalid request body |
| 401   | Authentication issue |
| 404   | Wrong endpoint       |
| 500   | Server issue         |

---

## 21. POST vs GET

| GET             | POST              |
| --------------- | ----------------- |
| Fetch data      | Create data       |
| No request body | Uses request body |
| Data in URL     | Data in body      |

---
---
# Module 7: Working with PUT, PATCH & DELETE Requests

## 1. What is PUT Request?

PUT request is used to update complete existing data on server.

---

## 2. PUT Request Flow

```text 
Client → PUT Request → Server
Client ← Updated Response ← Server
```

---

## 3. PUT Request Example

```text 
PUT https://reqres.in/api/users/2
```

---

## 4. PUT Request Body

```json 
{
  "name": "Krishna",
  "job": "Senior Tester"
}
```

---

## 5. PUT Request in REST Assured

```java 
import io.restassured.RestAssured;
import org.junit.Test;

public class PutRequestTest {

    @Test
    public void updateUser() {

        String body = "{\n" +
                "\"name\":\"Krishna\",\n" +
                "\"job\":\"Senior Tester\"\n" +
                "}";

        RestAssured
                .given()
                .header("Content-Type",
                        "application/json")
                .body(body)

                .when()
                .put("https://reqres.in/api/users/2")

                .then()
                .statusCode(200);
    }
}
```

---

## 6. PUT Response Example

```json 
{
  "name": "Krishna",
  "job": "Senior Tester",
  "updatedAt": "2026-05-28T10:00:00Z"
}
```

---

## 7. Validate PUT Response

```java 
.then()
.body("job",
        equalTo("Senior Tester"))
```

---

## 8. What is PATCH Request?

PATCH request is used to partially update existing data.

Only required fields are updated.

---

## 9. PATCH Request Example

```text 
PATCH https://reqres.in/api/users/2
```

---

## 10. PATCH Request Body

```json 
{
  "job": "Automation Tester"
}
```

---

## 11. PATCH Request in REST Assured

```java 
import io.restassured.RestAssured;
import org.junit.Test;

public class PatchRequestTest {

    @Test
    public void patchUser() {

        String body = "{\n" +
                "\"job\":\"Automation Tester\"\n" +
                "}";

        RestAssured
                .given()
                .header("Content-Type",
                        "application/json")
                .body(body)

                .when()
                .patch("https://reqres.in/api/users/2")

                .then()
                .statusCode(200);
    }
}
```

---

## 12. PATCH Response Example

```json 
{
  "job": "Automation Tester",
  "updatedAt": "2026-05-28T10:00:00Z"
}
```

---

## 13. PUT vs PATCH

| PUT                        | PATCH                        |
| -------------------------- | ---------------------------- |
| Full update                | Partial update               |
| Replaces complete resource | Updates only required fields |

---

## 14. What is DELETE Request?

DELETE request is used to remove data from server.

---

## 15. DELETE Request Example

```text 
DELETE https://reqres.in/api/users/2
```

---

## 16. DELETE Request in REST Assured

```java 
import io.restassured.RestAssured;
import org.junit.Test;

public class DeleteRequestTest {

    @Test
    public void deleteUser() {

        RestAssured
                .given()

                .when()
                .delete("https://reqres.in/api/users/2")

                .then()
                .statusCode(204);
    }
}
```

---

## 17. DELETE Response Status

Usually successful DELETE request returns:

| Status Code | Meaning    |
| ----------- | ---------- |
| 200         | Success    |
| 202         | Accepted   |
| 204         | No Content |

---

## 18. Complete PUT Validation Example

```java 
import io.restassured.RestAssured;
import org.junit.Test;

import static org.hamcrest.Matchers.equalTo;

public class PutValidationTest {

    @Test
    public void validatePutRequest() {

        String body = "{\n" +
                "\"name\":\"Krishna\",\n" +
                "\"job\":\"Senior Tester\"\n" +
                "}";

        RestAssured
                .given()
                .header("Content-Type",
                        "application/json")
                .body(body)

                .when()
                .put("https://reqres.in/api/users/2")

                .then()
                .statusCode(200)
                .body("job",
                        equalTo("Senior Tester"));
    }
}
```

---

## 19. Logging PUT Request

```java 
RestAssured
        .given()
        .log().all()
        .header("Content-Type",
                "application/json")
        .body(body)

        .when()
        .put("https://reqres.in/api/users/2")

        .then()
        .log().all();
```

---

## 20. Extract Response

```java 
Response response =
        RestAssured
                .given()
                .header("Content-Type",
                        "application/json")
                .body(body)

                .when()
                .put("https://reqres.in/api/users/2");
```

---

## 21. Get Response Body

```java 
response.getBody().asString();
```

---

## 22. Get Status Code

```java 
response.getStatusCode();
```

---

## 23. Using Base URI

```java 
RestAssured.baseURI =
        "https://reqres.in";
```

---

### Example

```java 
RestAssured
        .given()
        .header("Content-Type",
                "application/json")
        .body(body)

        .when()
        .put("/api/users/2")

        .then()
        .statusCode(200);
```

---

## 24. Common Status Codes

| Status Code | Meaning      |
| ----------- | ------------ |
| 200         | Success      |
| 201         | Created      |
| 204         | No Content   |
| 400         | Bad Request  |
| 401         | Unauthorized |
| 404         | Not Found    |
| 500         | Server Error |

---

## 25. Common Errors

| Error | Reason               |
| ----- | -------------------- |
| 400   | Invalid body         |
| 401   | Authentication issue |
| 404   | Wrong endpoint       |
| 500   | Server problem       |

---

## 26. PUT vs POST

| POST             | PUT                  |
| ---------------- | -------------------- |
| Create new data  | Update existing data |
| Creates resource | Replaces resource    |

---

## 27. DELETE vs PUT

| DELETE       | PUT          |
| ------------ | ------------ |
| Removes data | Updates data |

---
---
# Module 8: JSON Handling in REST Assured

## 1. What is JSON?

JSON stands for:

### JavaScript Object Notation

JSON is used to store and transfer data between:

* client
* server

Most REST APIs use JSON format.

---

## 2. Features of JSON

* Lightweight
* Easy to read
* Easy to write
* Language independent
* Widely used in APIs

---

## 3. JSON Syntax Rules

### Rules

* Data is written in key-value pairs
* Keys are inside double quotes
* Objects use `{ }`
* Arrays use `[ ]`

---

## 4. Simple JSON Example

```json 
{
  "name": "Krishna",
  "job": "Tester"
}
```

---

## 5. JSON Data Types

| Data Type | Example            |
| --------- | ------------------ |
| String    | "Krishna"          |
| Number    | 101                |
| Boolean   | true               |
| Array     | [1,2,3]            |
| Object    | {"name":"Krishna"} |
| Null      | null               |

---

## 6. JSON Object

JSON object uses curly braces `{}`.

---

### Example

```json 
{
  "id": 101,
  "name": "Krishna",
  "active": true
}
```

---

## 7. JSON Array

JSON array uses square brackets `[]`.

---

### Example

```json 
{
  "skills": [
    "Java",
    "Selenium",
    "REST Assured"
  ]
}
```

---

## 8. Nested JSON

JSON inside another JSON object.

---

### Example

```json
{
  "employee": {
    "name": "Krishna",
    "role": "Tester"
  }
}
```

---

## 9. Complex JSON Example

```json
{
  "id": 101,
  "name": "Krishna",
  "skills": [
    "Java",
    "Selenium",
    "API Testing"
  ],
  "address": {
    "city": "Bangalore",
    "state": "Karnataka"
  }
}
```

---

## 10. JSON in REST Assured

JSON is mainly used in:

* request body
* response body

---

## 11. Sending JSON Request Body

```java
String body = "{\n" +
        "\"name\":\"Krishna\",\n" +
        "\"job\":\"Tester\"\n" +
        "}";
```

---

## 12. POST Request with JSON Body

```java
import io.restassured.RestAssured;
import org.junit.Test;

public class JsonRequestTest {

    @Test
    public void createUser() {

        String body = "{\n" +
                "\"name\":\"Krishna\",\n" +
                "\"job\":\"Tester\"\n" +
                "}";

        RestAssured
                .given()
                .header("Content-Type",
                        "application/json")
                .body(body)

                .when()
                .post("https://reqres.in/api/users")

                .then()
                .statusCode(201);
    }
}
```

---

## 13. JSON Response Example

```json
{
  "data": {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet"
  }
}
```

---

## 14. Validate JSON Response

```java
.then()
.body("data.first_name",
        equalTo("Janet"))
```

---

## 15. Validate Nested JSON

### JSON

```json
{
  "employee": {
    "name": "Krishna"
  }
}
```

---

### Validation

```java
.body("employee.name",
        equalTo("Krishna"))
```

---

## 16. Validate JSON Array

### JSON

```json
{
  "skills": [
    "Java",
    "Selenium"
  ]
}
```

---

### Validation

```java
.body("skills[0]",
        equalTo("Java"))
```

---

## 17. Validate Array Values

```java
.body("skills",
        hasItem("Selenium"))
```

---

## 18. Complete JSON Validation Example

```java
import io.restassured.RestAssured;
import org.junit.Test;

import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasItem;

public class JsonValidationTest {

    @Test
    public void validateJsonResponse() {

        RestAssured
                .given()

                .when()
                .get("https://reqres.in/api/users/2")

                .then()
                .statusCode(200)
                .body("data.first_name",
                        equalTo("Janet"));
    }
}
```

---

## 19. Common Hamcrest Matchers

| Matcher          | Purpose             |
| ---------------- | ------------------- |
| equalTo()        | Exact match         |
| hasItem()        | Check item in array |
| containsString() | Check text          |
| notNullValue()   | Verify not null     |

---

## 20. JSON Formatting Tools

| Tool    | Purpose           |
| ------- | ----------------- |
| Postman | API Testing       |
| Swagger | API Documentation |

---

## 21. Pretty Print JSON Response

```java
response.prettyPrint();
```

---

## 22. Complete Pretty Print Example

```java
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.Test;

public class PrettyPrintTest {

    @Test
    public void printJson() {

        Response response =
                RestAssured
                        .given()

                        .when()
                        .get("https://reqres.in/api/users/2");

        response.prettyPrint();
    }
}
```

---

## 23. Common JSON Errors

| Error             | Reason             |
| ----------------- | ------------------ |
| Invalid JSON      | Wrong syntax       |
| Missing comma     | Formatting issue   |
| Wrong key name    | Validation failure |
| Wrong array index | Index out of range |

---

## 24. JSON Best Practices

* Use proper formatting
* Use meaningful keys
* Validate response data
* Avoid hardcoded large JSON
* Use pretty print for debugging

---
---
# Module 9: Hamcrest Matchers in REST Assured

## 1. What are Hamcrest Matchers?

Hamcrest Matchers are used for validations in REST Assured.

They help verify:

* response body
* response values
* arrays
* strings
* numbers

---

## 2. Why Hamcrest Matchers?

### Advantages

* Easy to read
* Better validations
* Reusable
* Cleaner test code

---

## 3. Import Hamcrest Matchers

```java
import static org.hamcrest.Matchers.*;
```

---

## 4. equalTo()

Used to check exact value.

---

### Example

```java
.then()
.body("data.first_name",
        equalTo("Janet"))
```

---

## 5. Complete equalTo() Example

```java
import io.restassured.RestAssured;
import org.junit.Test;

import static org.hamcrest.Matchers.equalTo;

public class EqualToTest {

    @Test
    public void validateName() {

        RestAssured
                .given()

                .when()
                .get("https://reqres.in/api/users/2")

                .then()
                .statusCode(200)
                .body("data.first_name",
                        equalTo("Janet"));
    }
}
```

---

## 6. hasItem()

Used to verify item exists in array.

---

### JSON Example

```json
{
  "skills": [
    "Java",
    "Selenium",
    "REST Assured"
  ]
}
```

---

### Validation Example

```java
.body("skills",
        hasItem("Selenium"))
```

---

## 7. containsString()

Checks whether string contains expected text.

---

### Example

```java
.body("data.email",
        containsString("@reqres.in"))
```

---

## 8. startsWith()

Checks starting text.

---

### Example

```java
.body("data.first_name",
        startsWith("Jan"))
```

---

## 9. endsWith()

Checks ending text.

---

### Example

```java
.body("data.email",
        endsWith(".in"))
```

---

## 10. notNullValue()

Checks value is not null.

---

### Example

```java
.body("data.id",
        notNullValue())
```

---

## 11. nullValue()

Checks value is null.

---

### Example

```java
.body("data.middle_name",
        nullValue())
```

---

## 12. greaterThan()

Checks value is greater than expected value.

---

### Example

```java
.body("data.id",
        greaterThan(1))
```

---

## 13. lessThan()

Checks value is smaller than expected value.

---

### Example

```java
.body("data.id",
        lessThan(10))
```

---

## 14. hasSize()

Checks array size.

---

### Example

```java
.body("data",
        hasSize(6))
```

---

## 15. everyItem()

Checks every item in array.

---

### Example

```java
.body("data.email",
        everyItem(
            containsString("@reqres.in")
        ))
```

---

## 16. allOf()

Combines multiple conditions.

---

### Example

```java
.body("data.first_name",
        allOf(
            startsWith("Jan"),
            containsString("et")
        ))
```

---

## 17. anyOf()

At least one condition should match.

---

### Example

```java
.body("data.first_name",
        anyOf(
            equalTo("Janet"),
            equalTo("Emma")
        ))
```

---

## 18. Complete Hamcrest Validation Example

```java
import io.restassured.RestAssured;
import org.junit.Test;

import static org.hamcrest.Matchers.*;

public class HamcrestTest {

    @Test
    public void validateResponse() {

        RestAssured
                .given()

                .when()
                .get("https://reqres.in/api/users/2")

                .then()
                .statusCode(200)
                .body("data.first_name",
                        equalTo("Janet"))
                .body("data.email",
                        containsString("@reqres.in"))
                .body("data.id",
                        greaterThan(1));
    }
}
```

---

## 19. Validate Multiple Values

```java
.then()
.body("data.first_name",
        equalTo("Janet"))
.body("data.last_name",
        equalTo("Weaver"))
```

---

## 20. Matchers for Strings

| Matcher          | Purpose          |
| ---------------- | ---------------- |
| containsString() | Contains text    |
| startsWith()     | Starts with text |
| endsWith()       | Ends with text   |

---

## 21. Matchers for Numbers

| Matcher       | Purpose       |
| ------------- | ------------- |
| greaterThan() | Greater value |
| lessThan()    | Smaller value |

---

## 22. Matchers for Arrays

| Matcher     | Purpose            |
| ----------- | ------------------ |
| hasItem()   | Check item         |
| hasSize()   | Check size         |
| everyItem() | Validate all items |

---

## 23. Common Validation Errors

| Error          | Reason                  |
| -------------- | ----------------------- |
| AssertionError | Validation failed       |
| Wrong key      | Incorrect JSON path     |
| Wrong value    | Expected value mismatch |

---

## 24. Best Practices

* Use meaningful validations
* Avoid unnecessary assertions
* Validate critical fields
* Use reusable matchers
* Validate response properly

---
---
# Module 10: Authentication in REST Assured

## 1. What is Authentication?

Authentication is the process of verifying user identity before accessing API.

It provides security to APIs.

---

## 2. Why Authentication is Important?

Authentication helps:

* protect APIs
* secure user data
* restrict unauthorized access

---

## 3. Types of Authentication

| Authentication Type  | Purpose              |
| -------------------- | -------------------- |
| Basic Authentication | Username & Password  |
| Bearer Token         | Token-based security |
| API Key              | Unique access key    |
| OAuth 2.0            | Secure authorization |

---

## 4. Basic Authentication

Uses:

* username
* password

---

## 5. Basic Authentication Syntax

```java
.auth()
.basic("username", "password")
```

---

## 6. Basic Authentication Example

```java
import io.restassured.RestAssured;
import org.junit.Test;

public class BasicAuthTest {

    @Test
    public void testBasicAuth() {

        RestAssured
                .given()
                .auth()
                .basic("admin", "password")

                .when()
                .get("https://example.com/api")

                .then()
                .statusCode(200);
    }
}
```

---

## 7. Bearer Token Authentication

Bearer token is widely used in REST APIs.

Token is sent in request header.

---

## 8. Bearer Token Header

```text
Authorization: Bearer token_value
```

---

## 9. Bearer Token Example

```java
import io.restassured.RestAssured;
import org.junit.Test;

public class BearerTokenTest {

    @Test
    public void testBearerToken() {

        String token = "your_token";

        RestAssured
                .given()
                .header("Authorization",
                        "Bearer " + token)

                .when()
                .get("https://example.com/api")

                .then()
                .statusCode(200);
    }
}
```

---

## 10. API Key Authentication

Some APIs use API keys for security.

---

## 11. API Key Example

```java
import io.restassured.RestAssured;
import org.junit.Test;

public class ApiKeyTest {

    @Test
    public void testApiKey() {

        RestAssured
                .given()
                .header("x-api-key",
                        "your_api_key")

                .when()
                .get("https://example.com/api")

                .then()
                .statusCode(200);
    }
}
```

---

## 12. OAuth 2.0 Authentication

OAuth 2.0 is secure token-based authentication.

Widely used in:

* Google APIs
* GitHub APIs
* Facebook APIs

---

## 13. OAuth 2.0 Syntax

```java
.auth()
.oauth2("token")
```

---

## 14. OAuth 2.0 Example

```java
import io.restassured.RestAssured;
import org.junit.Test;

public class OAuthTest {

    @Test
    public void testOAuth() {

        String token = "your_token";

        RestAssured
                .given()
                .auth()
                .oauth2(token)

                .when()
                .get("https://example.com/api")

                .then()
                .statusCode(200);
    }
}
```

---

## 15. Authentication Header Example

```java
.header("Authorization",
        "Bearer token")
```

---

## 16. Common Authentication Status Codes

| Status Code | Meaning      |
| ----------- | ------------ |
| 200         | Success      |
| 201         | Created      |
| 401         | Unauthorized |
| 403         | Forbidden    |

---

## 17. 401 Unauthorized Error

Occurs when:

* token is invalid
* username/password is wrong
* authentication missing

---

## 18. 403 Forbidden Error

Occurs when:

* user has no permission
* access is restricted

---

## 19. Login API Example

### Request Body

```json
{
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}
```

---

## 20. Login API Test Example

```java
import io.restassured.RestAssured;
import org.junit.Test;

public class LoginTest {

    @Test
    public void loginAPI() {

        String body = "{\n" +
                "\"email\":\"eve.holt@reqres.in\",\n" +
                "\"password\":\"cityslicka\"\n" +
                "}";

        RestAssured
                .given()
                .header("Content-Type",
                        "application/json")
                .body(body)

                .when()
                .post("https://reqres.in/api/login")

                .then()
                .statusCode(200);
    }
}
```

---

## 21. Login Response Example

```json
{
  "token": "QpwL5tke4Pnpja7X4"
}
```

---

## 22. Extract Token from Response

```java
String token =
        response.jsonPath()
                .getString("token");
```

---

## 23. Complete Token Extraction Example

```java
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.Test;

public class TokenExtractionTest {

    @Test
    public void extractToken() {

        String body = "{\n" +
                "\"email\":\"eve.holt@reqres.in\",\n" +
                "\"password\":\"cityslicka\"\n" +
                "}";

        Response response =
                RestAssured
                        .given()
                        .header("Content-Type",
                                "application/json")
                        .body(body)

                        .when()
                        .post("https://reqres.in/api/login");

        String token =
                response.jsonPath()
                        .getString("token");

        System.out.println(token);
    }
}
```

---

## 24. Using Extracted Token

```java
.header("Authorization",
        "Bearer " + token)
```

---

## 25. Authentication Best Practices

* Never hardcode tokens
* Store credentials securely
* Use environment variables
* Validate authentication properly
* Handle token expiration

---

## 26. Common Authentication Errors

| Error            | Reason               |
| ---------------- | -------------------- |
| 401 Unauthorized | Invalid credentials  |
| 403 Forbidden    | No access permission |
| 400 Bad Request  | Invalid request      |
| 500 Server Error | Backend issue        |

---
---
# Module 11: Serialization & Deserialization in REST Assured

## 1. What is Serialization?

Serialization is the process of converting Java object into JSON format.

---

## 2. What is Deserialization?

Deserialization is the process of converting JSON response into Java object.

---

## 3. Why Serialization & Deserialization?

### Advantages

* Cleaner code
* Reusable objects
* Easy maintenance
* Better framework design
* Avoid hardcoded JSON strings

---

## 4. POJO Class

POJO stands for:

### Plain Old Java Object

POJO class contains:

* variables
* getters
* setters

---

## 5. Simple POJO Class Example

```java id="swd111"
public class User {

    private String name;
    private String job;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }
}
```

---

## 6. Serialization Flow

```text id="swd112"
Java Object → JSON
```

---

## 7. Serialization Example

### Create Object

```java id="swd113"
User user = new User();

user.setName("Krishna");
user.setJob("Tester");
```

---

## 8. Send Object as Request Body

```java id="swd114"
.body(user)
```

REST Assured automatically converts object into JSON.

---

## 9. Complete Serialization Example

```java id="swd115"
import io.restassured.RestAssured;
import org.junit.Test;

public class SerializationTest {

    @Test
    public void serializeObject() {

        User user = new User();

        user.setName("Krishna");
        user.setJob("Tester");

        RestAssured
                .given()
                .header("Content-Type",
                        "application/json")
                .body(user)

                .when()
                .post("https://reqres.in/api/users")

                .then()
                .statusCode(201);
    }
}
```

---

## 10. Generated JSON

REST Assured converts object into:

```json id="swd116"
{
  "name": "Krishna",
  "job": "Tester"
}
```

---

## 11. Deserialization Flow

```text id="swd117"
JSON → Java Object
```

---

## 12. JSON Response Example

```json id="swd118"
{
  "name": "Krishna",
  "job": "Tester"
}
```

---

## 13. Convert Response into Java Object

```java id="swd119"
User user =
        response.as(User.class);
```

---

## 14. Complete Deserialization Example

```java id="swd120"
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.Test;

public class DeserializationTest {

    @Test
    public void deserializeResponse() {

        Response response =
                RestAssured
                        .given()

                        .when()
                        .get("https://reqres.in/api/users/2");

        User user =
                response.as(User.class);

        System.out.println(user.getName());
    }
}
```

---

## 15. Get Values from Object

```java id="swd121"
user.getName();
user.getJob();
```

---

## 16. Libraries Used

| Library | Purpose         |
| ------- | --------------- |
| Jackson | JSON conversion |
| Gson    | JSON conversion |

REST Assured mainly uses Jackson internally.

---

## 17. Serialization with Multiple Fields

```java id="swd122"
public class Employee {

    private int id;
    private String name;
    private String role;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
```

---

## 18. Serialization Example with Employee

```java id="swd123"
Employee emp = new Employee();

emp.setId(101);
emp.setName("Krishna");
emp.setRole("Tester");
```

---

## 19. Nested JSON Serialization

### JSON

```json id="swd124"
{
  "employee": {
    "name": "Krishna"
  }
}
```

Requires nested POJO classes.

---

## 20. Array Serialization

### JSON

```json id="swd125"
{
  "skills": [
    "Java",
    "Selenium"
  ]
}
```

Uses:

```java id="swd126"
List<String>
```

---

## 21. Benefits of POJO Classes

* Reusable
* Easy maintenance
* Cleaner framework
* Better readability
* Supports large projects

---

## 22. Common Errors

| Error                | Reason                   |
| -------------------- | ------------------------ |
| Null values          | Missing setters          |
| Invalid mapping      | Wrong field names        |
| Serialization failed | Incorrect POJO structure |

---

## 23. Best Practices

* Use private variables
* Generate getters/setters
* Match JSON keys correctly
* Avoid hardcoded JSON
* Use reusable POJO classes

---

## 24. Serialization vs Deserialization

| Serialization         | Deserialization     |
| --------------------- | ------------------- |
| Java → JSON           | JSON → Java         |
| Request body creation | Response conversion |

---
---
# Module 12: Parsing API Responses in REST Assured

## 1. What is Response Parsing?

Response parsing means extracting data from API response.

Used to:

* read response values
* store dynamic data
* validate API responses

---

## 2. Why Response Parsing?

### Advantages

* Access response data easily
* Reuse dynamic values
* Validate API fields
* Perform chained API testing

---

## 3. Sample JSON Response

```json id="prs121"
{
  "data": {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver"
  }
}
```

---

## 4. Response Object

Response is stored using `Response` class.

---

### Example

```java id="prs122"
Response response =
        RestAssured
                .given()

                .when()
                .get("https://reqres.in/api/users/2");
```

---

## 5. Print Complete Response

```java id="prs123"
response.prettyPrint();
```

---

## 6. Get Status Code

```java id="prs124"
response.getStatusCode();
```

---

## 7. Get Response Body

```java id="prs125"
response.getBody().asString();
```

---

## 8. Get Response Time

```java id="prs126"
response.getTime();
```

---

## 9. What is JsonPath?

JsonPath is used to extract values from JSON response.

Similar to XPath in XML.

---

## 10. JsonPath Syntax

```java id="prs127"
response.jsonPath()
```

---

## 11. Extract Single Value

### JSON

```json id="prs128"
{
  "data": {
    "first_name": "Janet"
  }
}
```

---

### Extraction

```java id="prs129"
String name =
        response.jsonPath()
                .getString("data.first_name");
```

---

## 12. Complete JsonPath Example

```java id="prs130"
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.Test;

public class JsonPathTest {

    @Test
    public void extractData() {

        Response response =
                RestAssured
                        .given()

                        .when()
                        .get("https://reqres.in/api/users/2");

        String name =
                response.jsonPath()
                        .getString("data.first_name");

        System.out.println(name);
    }
}
```

---

## 13. Extract Integer Value

```java id="prs131"
int id =
        response.jsonPath()
                .getInt("data.id");
```

---

## 14. Extract Boolean Value

```java id="prs132"
boolean status =
        response.jsonPath()
                .getBoolean("status");
```

---

## 15. Extract Array Value

### JSON

```json id="prs133"
{
  "skills": [
    "Java",
    "Selenium"
  ]
}
```

---

### Extraction

```java id="prs134"
String skill =
        response.jsonPath()
                .getString("skills[0]");
```

---

## 16. Extract Complete Array

```java id="prs135"
List<String> skills =
        response.jsonPath()
                .getList("skills");
```

---

## 17. Extract Nested JSON Value

### JSON

```json id="prs136"
{
  "employee": {
    "address": {
      "city": "Bangalore"
    }
  }
}
```

---

### Extraction

```java id="prs137"
String city =
        response.jsonPath()
                .getString(
                    "employee.address.city"
                );
```

---

## 18. Extract List from Response

```java id="prs138"
List<Object> data =
        response.jsonPath()
                .getList("data");
```

---

## 19. Complete Parsing Example

```java id="prs139"
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.Test;

public class ParsingTest {

    @Test
    public void parseResponse() {

        Response response =
                RestAssured
                        .given()

                        .when()
                        .get("https://reqres.in/api/users/2");

        int id =
                response.jsonPath()
                        .getInt("data.id");

        String email =
                response.jsonPath()
                        .getString("data.email");

        String name =
                response.jsonPath()
                        .getString("data.first_name");

        System.out.println(id);
        System.out.println(email);
        System.out.println(name);
    }
}
```

---

## 20. Store Dynamic Data

Extracted values can be reused.

---

### Example

```java id="prs140"
String token =
        response.jsonPath()
                .getString("token");
```

---

## 21. Use Extracted Token

```java id="prs141"
.header("Authorization",
        "Bearer " + token)
```

---

## 22. Response Header Extraction

```java id="prs142"
String contentType =
        response.getHeader("Content-Type");
```

---

## 23. Get All Headers

```java id="prs143"
Headers headers =
        response.getHeaders();
```

---

## 24. XML Parsing

REST Assured also supports XML parsing.

Uses:

```java id="prs144"
XmlPath
```

---

## 25. XML Extraction Example

```java id="prs145"
String value =
        response.xmlPath()
                .getString("users.user.name");
```

---

## 26. Common JsonPath Methods

| Method       | Purpose         |
| ------------ | --------------- |
| getString()  | Extract string  |
| getInt()     | Extract integer |
| getBoolean() | Extract boolean |
| getList()    | Extract list    |

---

## 27. Common Parsing Errors

| Error                | Reason                  |
| -------------------- | ----------------------- |
| NullPointerException | Wrong JSON path         |
| Incorrect key        | Invalid field name      |
| Type mismatch        | Wrong extraction method |

---

## 28. Best Practices

* Validate response before parsing
* Use proper JSON paths
* Store reusable values
* Avoid hardcoded response values
* Handle null responses carefully

---

## 29. JsonPath vs XPath

| JsonPath      | XPath          |
| ------------- | -------------- |
| Used for JSON | Used for XML   |
| Simple syntax | Complex syntax |

---
---
# Module 13: Assertions & Validations in REST Assured

## 1. What are Assertions?

Assertions are used to verify expected results in API testing.

They help confirm:

* status codes
* response body
* headers
* response time
* data correctness

---

## 2. Why Assertions are Important?

Assertions help:

* detect failures
* validate API behavior
* ensure data accuracy
* automate verification

---

## 3. Common Assertions in REST Assured

| Assertion    | Purpose                |
| ------------ | ---------------------- |
| statusCode() | Validate status code   |
| body()       | Validate response body |
| header()     | Validate headers       |
| time()       | Validate response time |

---

## 4. Validate Status Code

```java id="asr131"
.then()
.statusCode(200)
```

---

## 5. Complete Status Code Validation Example

```java id="asr132"
import io.restassured.RestAssured;
import org.junit.Test;

public class StatusCodeTest {

    @Test
    public void validateStatusCode() {

        RestAssured
                .given()

                .when()
                .get("https://reqres.in/api/users/2")

                .then()
                .statusCode(200);
    }
}
```

---

## 6. Validate Response Body

```java id="asr133"
.then()
.body("data.first_name",
        equalTo("Janet"))
```

---

## 7. Complete Response Validation Example

```java id="asr134"
import io.restassured.RestAssured;
import org.junit.Test;

import static org.hamcrest.Matchers.equalTo;

public class ResponseValidationTest {

    @Test
    public void validateResponseBody() {

        RestAssured
                .given()

                .when()
                .get("https://reqres.in/api/users/2")

                .then()
                .statusCode(200)
                .body("data.first_name",
                        equalTo("Janet"));
    }
}
```

---

## 8. Validate Multiple Fields

```java id="asr135"
.then()
.body("data.first_name",
        equalTo("Janet"))
.body("data.last_name",
        equalTo("Weaver"))
```

---

## 9. Validate Response Header

```java id="asr136"
.then()
.header("Content-Type",
        "application/json; charset=utf-8")
```

---

## 10. Header Validation Example

```java id="asr137"
import io.restassured.RestAssured;
import org.junit.Test;

public class HeaderValidationTest {

    @Test
    public void validateHeader() {

        RestAssured
                .given()

                .when()
                .get("https://reqres.in/api/users/2")

                .then()
                .statusCode(200)
                .header("Content-Type",
                        "application/json; charset=utf-8");
    }
}
```

---

## 11. Validate Response Time

```java id="asr138"
.then()
.time(lessThan(3000L));
```

---

## 12. Response Time Validation Example

```java id="asr139"
import io.restassured.RestAssured;
import org.junit.Test;

import static org.hamcrest.Matchers.lessThan;

public class ResponseTimeTest {

    @Test
    public void validateResponseTime() {

        RestAssured
                .given()

                .when()
                .get("https://reqres.in/api/users/2")

                .then()
                .statusCode(200)
                .time(lessThan(3000L));
    }
}
```

---

## 13. Validate Status Line

```java id="asr140"
.then()
.statusLine("HTTP/1.1 200 OK")
```

---

## 14. Validate Cookies

```java id="asr141"
.then()
.cookie("cookie_name")
```

---

## 15. Validate JSON Array

```java id="asr142"
.then()
.body("data.first_name",
        hasItem("Janet"))
```

---

## 16. Validate Null Values

```java id="asr143"
.body("data.id",
        notNullValue())
```

---

## 17. Complete Validation Example

```java id="asr144"
import io.restassured.RestAssured;
import org.junit.Test;

import static org.hamcrest.Matchers.*;

public class CompleteValidationTest {

    @Test
    public void validateAPI() {

        RestAssured
                .given()

                .when()
                .get("https://reqres.in/api/users?page=2")

                .then()
                .statusCode(200)
                .body("data[0].first_name",
                        equalTo("Michael"))
                .body("data[0].email",
                        containsString("@reqres.in"))
                .time(lessThan(3000L));
    }
}
```

---

## 18. JUnit Assertions

JUnit also provides assertions.

---

## 19. Common JUnit Assertions

| Assertion       | Purpose          |
| --------------- | ---------------- |
| assertEquals()  | Exact comparison |
| assertTrue()    | Check true       |
| assertFalse()   | Check false      |
| assertNull()    | Check null       |
| assertNotNull() | Check not null   |

---

## 20. JUnit Assertion Example

```java id="asr145"
import org.junit.Assert;
import org.junit.Test;

public class JunitAssertionTest {

    @Test
    public void testAssertions() {

        String actual = "Krishna";

        Assert.assertEquals(
                "Krishna",
                actual
        );
    }
}
```

---

## 21. Extract and Validate Response

```java id="asr146"
Response response =
        RestAssured
                .given()

                .when()
                .get("https://reqres.in/api/users/2");

Assert.assertEquals(
        200,
        response.getStatusCode()
);
```

---

## 22. Soft Validation vs Hard Validation

| Hard Validation             | Soft Validation     |
| --------------------------- | ------------------- |
| Stops execution immediately | Continues execution |
| Default in REST Assured     | Used in frameworks  |

---

## 23. Common Assertion Failures

| Error                | Reason              |
| -------------------- | ------------------- |
| AssertionError       | Validation failed   |
| Wrong expected value | Incorrect assertion |
| Invalid JSON path    | Wrong field access  |

---

## 24. Best Practices

* Validate critical fields
* Use meaningful assertions
* Avoid unnecessary validations
* Validate status codes always
* Use reusable validations

---

## 25. Real-Time Validations

Common validations in projects:

* response code
* token validation
* schema validation
* response time
* response data

---
---
# Module 14: Framework Development in REST Assured

## 1. What is Framework?

Framework is a structured way to organize automation code.

It helps:

* improve reusability
* reduce duplication
* simplify maintenance
* manage large projects

---

## 2. Why Framework is Important?

### Advantages

* Reusable code
* Better readability
* Easy maintenance
* Scalable structure
* Faster execution
* Team collaboration

---

## 3. Real-Time Framework Structure

```text id="frm141"
src/test/java
│
├── testcases
├── payloads
├── routes
├── utilities
├── reports
├── config
```

---

## 4. testcases Folder

Contains all test classes.

### Example

```text id="frm142"
LoginTest.java
UserTest.java
EmployeeTest.java
```

---

## 5. payloads Folder

Contains request body classes.

Used for:

* POJO classes
* request data creation

---

### Example

```text id="frm143"
UserPayload.java
EmployeePayload.java
```

---

## 6. routes Folder

Stores API endpoints.

Helps avoid hardcoded URLs.

---

### Example

```java id="frm144"
public class Routes {

    public static String base_url =
            "https://reqres.in";

    public static String create_user =
            base_url + "/api/users";

    public static String get_user =
            base_url + "/api/users/{id}";
}
```

---

## 7. utilities Folder

Contains reusable utility methods.

Used for:

* reading files
* generating random data
* reusable functions
* reporting utilities

---

## 8. reports Folder

Stores automation reports.

Examples:

* Extent Reports
* Allure Reports

---

## 9. config Folder

Stores configuration files.

Examples:

* URLs
* tokens
* credentials
* environment settings

---

## 10. Config Properties File

Example:

```properties id="frm145"
base_url=https://reqres.in
username=admin
password=admin123
```

---

## 11. Read Properties File

```java id="frm146"
Properties prop = new Properties();

FileInputStream file =
        new FileInputStream(
                "config.properties");

prop.load(file);

String url =
        prop.getProperty("base_url");
```

---

## 12. Base Test Class

Common setup should be centralized.

---

### Example

```java id="frm147"
import io.restassured.RestAssured;
import org.junit.Before;

public class BaseClass {

    @Before
    public void setup() {

        RestAssured.baseURI =
                "https://reqres.in";
    }
}
```

---

## 13. Extend Base Class

```java id="frm148"
public class UserTest
        extends BaseClass {
}
```

---

## 14. Reusable Request Method

```java id="frm149"
public static Response getUser(int id) {

    return RestAssured
            .given()
            .pathParam("id", id)

            .when()
            .get(Routes.get_user);
}
```

---

## 15. Test Class Example

```java id="frm150"
import org.junit.Test;

public class UserTest
        extends BaseClass {

    @Test
    public void testGetUser() {

        UserAPI.getUser(2)
                .then()
                .statusCode(200);
    }
}
```

---

## 16. Payload Class Example

```java id="frm151"
public class UserPayload {

    private String name;
    private String job;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }
}
```

---

## 17. API Class Example

```java id="frm152"
import io.restassured.RestAssured;
import io.restassured.response.Response;

public class UserAPI {

    public static Response createUser(
            UserPayload payload) {

        return RestAssured
                .given()
                .header("Content-Type",
                        "application/json")
                .body(payload)

                .when()
                .post(Routes.create_user);
    }
}
```

---

## 18. Logging in Framework

Logging helps debug automation.

---

### Request Logging

```java id="frm153"
.log().all()
```

---

### Response Logging

```java id="frm154"
.then()
.log().all()
```

---

## 19. Reporting in Framework

Reports help track:

* passed tests
* failed tests
* execution details

---

## 20. Common Reporting Tools

| Tool          | Purpose          |
| ------------- | ---------------- |
| ExtentReports | HTML Reports     |
| Allure Report | Advanced Reports |

---

## 21. Framework Layers

| Layer         | Purpose        |
| ------------- | -------------- |
| Test Layer    | Test execution |
| API Layer     | API methods    |
| Payload Layer | Request data   |
| Utility Layer | Common methods |

---

## 22. Advantages of Reusable Methods

* Less duplicate code
* Easy updates
* Faster development
* Better maintenance

---

## 23. Common Framework Features

* Base URI management
* Reusable requests
* Config management
* Logging
* Reporting
* Data handling
* Token handling

---

## 24. Common Framework Errors

| Error                | Reason                  |
| -------------------- | ----------------------- |
| NullPointerException | Missing initialization  |
| Invalid endpoint     | Wrong routes            |
| Config issue         | Missing property values |

---

## 25. Best Practices

* Use reusable methods
* Avoid hardcoded data
* Separate test data
* Maintain clean structure
* Use config files
* Centralize endpoints

---

## 26. Real-Time Framework Flow

```text id="frm155"
Test Case
   ↓
API Method
   ↓
Payload
   ↓
Request Execution
   ↓
Response Validation
```

---
---
# Module 15: Data-Driven Testing in REST Assured

## 1. What is Data-Driven Testing?

Data-Driven Testing means executing same test with multiple sets of data.

Instead of hardcoding values, test data is read from external files.

---

## 2. Advantages of Data-Driven Testing

* Reusable test cases
* Better test coverage
* Easy maintenance
* Supports multiple test data
* Reduces duplicate code

---

## 3. Common Data Sources

| Data Source     | Purpose              |
| --------------- | -------------------- |
| Excel           | Test data storage    |
| CSV             | Comma separated data |
| JSON            | Structured API data  |
| Properties File | Configuration values |

---

## 4. Example Scenario

Login API tested with multiple users:

| Email                                     | Password |
| ----------------------------------------- | -------- |
| [user1@gmail.com](mailto:user1@gmail.com) | pass1    |
| [user2@gmail.com](mailto:user2@gmail.com) | pass2    |
| [user3@gmail.com](mailto:user3@gmail.com) | pass3    |

---

## 5. Apache POI

Apache POI is used to read Excel files in Java.

---

## 6. Add Apache POI Dependency

```xml id="ddt151"
<dependency>
    <groupId>org.apache.poi</groupId>
    <artifactId>poi-ooxml</artifactId>
    <version>5.2.5</version>
</dependency>
```

---

## 7. Excel File Example

| Name    | Job       |
| ------- | --------- |
| Krishna | Tester    |
| Rahul   | Developer |

---

## 8. Read Excel File

```java id="ddt152"
import org.apache.poi.xssf.usermodel.*;

import java.io.FileInputStream;

public class ReadExcel {

    public static void main(String[] args)
            throws Exception {

        FileInputStream file =
                new FileInputStream(
                        "testdata.xlsx");

        XSSFWorkbook workbook =
                new XSSFWorkbook(file);

        XSSFSheet sheet =
                workbook.getSheet("Sheet1");

        String name =
                sheet.getRow(1)
                     .getCell(0)
                     .getStringCellValue();

        System.out.println(name);

        workbook.close();
    }
}
```

---

## 9. Read Multiple Rows from Excel

```java id="ddt153"
int rows = sheet.getLastRowNum();

for (int i = 1; i <= rows; i++) {

    String name =
            sheet.getRow(i)
                 .getCell(0)
                 .getStringCellValue();

    System.out.println(name);
}
```

---

## 10. Data-Driven POST Request Example

```java id="ddt154"
import io.restassured.RestAssured;
import org.junit.Test;

public class DataDrivenTest {

    @Test
    public void createUser() {

        String name = "Krishna";
        String job = "Tester";

        String body = "{\n" +
                "\"name\":\"" + name + "\",\n" +
                "\"job\":\"" + job + "\"\n" +
                "}";

        RestAssured
                .given()
                .header("Content-Type",
                        "application/json")
                .body(body)

                .when()
                .post("https://reqres.in/api/users")

                .then()
                .statusCode(201);
    }
}
```

---

## 11. CSV File

CSV = Comma Separated Values

---

### CSV Example

```text id="ddt155"
name,job
Krishna,Tester
Rahul,Developer
```

---

## 12. Read CSV File

```java id="ddt156"
import java.io.BufferedReader;
import java.io.FileReader;

public class ReadCSV {

    public static void main(String[] args)
            throws Exception {

        BufferedReader br =
                new BufferedReader(
                        new FileReader("data.csv"));

        String line;

        while ((line = br.readLine()) != null) {

            String[] values = line.split(",");

            System.out.println(values[0]);
        }

        br.close();
    }
}
```

---

## 13. JSON File for Test Data

### users.json

```json id="ddt157"
{
  "name": "Krishna",
  "job": "Tester"
}
```

---

## 14. Read JSON File

```java id="ddt158"
import java.nio.file.Files;
import java.nio.file.Paths;

public class ReadJson {

    public static void main(String[] args)
            throws Exception {

        String content =
                new String(
                        Files.readAllBytes(
                                Paths.get("users.json")
                        )
                );

        System.out.println(content);
    }
}
```

---

## 15. Properties File

Used for configuration data.

---

### config.properties

```properties id="ddt159"
base_url=https://reqres.in
username=admin
password=admin123
```

---

## 16. Read Properties File

```java id="ddt160"
import java.io.FileInputStream;
import java.util.Properties;

public class ReadProperties {

    public static void main(String[] args)
            throws Exception {

        Properties prop =
                new Properties();

        FileInputStream file =
                new FileInputStream(
                        "config.properties");

        prop.load(file);

        System.out.println(
                prop.getProperty("base_url"));
    }
}
```

---

## 17. Parameterized Testing

Parameterized tests run same test with multiple data sets.

---

## 18. TestNG DataProvider Example

```java id="ddt161"
@DataProvider(name = "userdata")
public Object[][] data() {

    return new Object[][]{
            {"Krishna", "Tester"},
            {"Rahul", "Developer"}
    };
}
```

---

## 19. Using DataProvider

```java id="ddt162"
@Test(dataProvider = "userdata")
public void testData(String name,
                     String job) {

    System.out.println(name);
    System.out.println(job);
}
```

---

## 20. Data-Driven Framework Flow

```text id="ddt163"
Test Data
   ↓
Read Data
   ↓
Pass to API Request
   ↓
Execute Test
   ↓
Validate Response
```

---

## 21. Common Data-Driven Errors

| Error                 | Reason                   |
| --------------------- | ------------------------ |
| FileNotFoundException | Wrong file path          |
| NullPointerException  | Missing data             |
| Invalid format        | Incorrect file structure |

---

## 22. Best Practices

* Store reusable test data externally
* Avoid hardcoded values
* Use proper file structure
* Close files properly
* Validate test data before usage

---

## 23. Real-Time Usage

Data-driven testing is used for:

* login testing
* registration testing
* bulk API validation
* multiple environment testing

---
---
# Module 16: Logging & Reporting in REST Assured

## 1. What is Logging?

Logging means recording request and response details during test execution.

It helps:

* debug failures
* analyze API behavior
* track execution flow

---

## 2. Why Logging is Important?

### Advantages

* Easy debugging
* Better visibility
* Faster issue identification
* Helps in framework maintenance

---

## 3. Request Logging

Request logging prints request details.

---

## 4. Log Complete Request

```java id="log161"
.log().all()
```

---

## 5. Request Logging Example

```java id="log162"
import io.restassured.RestAssured;
import org.junit.Test;

public class RequestLoggingTest {

    @Test
    public void logRequest() {

        RestAssured
                .given()
                .log().all()

                .when()
                .get("https://reqres.in/api/users/2")

                .then()
                .statusCode(200);
    }
}
```

---

## 6. Response Logging

Response logging prints server response.

---

## 7. Log Complete Response

```java id="log163"
.then()
.log().all()
```

---

## 8. Response Logging Example

```java id="log164"
import io.restassured.RestAssured;
import org.junit.Test;

public class ResponseLoggingTest {

    @Test
    public void logResponse() {

        RestAssured
                .given()

                .when()
                .get("https://reqres.in/api/users/2")

                .then()
                .log().all();
    }
}
```

---

## 9. Request and Response Logging

```java id="log165"
RestAssured
        .given()
        .log().all()

        .when()
        .get("https://reqres.in/api/users/2")

        .then()
        .log().all();
```

---

## 10. Log Only Headers

```java id="log166"
.log().headers()
```

---

## 11. Log Only Body

```java id="log167"
.log().body()
```

---

## 12. Log Only Parameters

```java id="log168"
.log().params()
```

---

## 13. Logging POST Request

```java id="log169"
import io.restassured.RestAssured;
import org.junit.Test;

public class PostLoggingTest {

    @Test
    public void logPostRequest() {

        String body = "{\n" +
                "\"name\":\"Krishna\",\n" +
                "\"job\":\"Tester\"\n" +
                "}";

        RestAssured
                .given()
                .log().all()
                .header("Content-Type",
                        "application/json")
                .body(body)

                .when()
                .post("https://reqres.in/api/users")

                .then()
                .log().all();
    }
}
```

---

## 14. What is Reporting?

Reporting means generating execution summary after test run.

Reports show:

* passed tests
* failed tests
* execution time
* logs
* screenshots

---

## 15. Why Reporting is Important?

Reports help:

* analyze execution results
* share execution status
* identify failed tests
* improve debugging

---

## 16. Common Reporting Tools

| Tool          | Purpose            |
| ------------- | ------------------ |
| ExtentReports | HTML reporting     |
| Allure Report | Advanced reporting |

---

## 17. Extent Reports

ExtentReports is a popular reporting library for automation frameworks.

Generates:

* HTML reports
* execution summary
* logs

---

## 18. Add Extent Reports Dependency

```xml id="log170"
<dependency>
    <groupId>com.aventstack</groupId>
    <artifactId>extentreports</artifactId>
    <version>5.1.1</version>
</dependency>
```

---

## 19. Extent Report Setup

```java id="log171"
ExtentSparkReporter reporter =
        new ExtentSparkReporter(
                "reports/report.html");

ExtentReports extent =
        new ExtentReports();

extent.attachReporter(reporter);
```

---

## 20. Create Test in Report

```java id="log172"
ExtentTest test =
        extent.createTest(
                "API Test");
```

---

## 21. Add Log Messages

```java id="log173"
test.pass("Test Passed");
test.fail("Test Failed");
```

---

## 22. Generate Report

```java id="log174"
extent.flush();
```

---

## 23. Complete Extent Report Example

```java id="log175"
import com.aventstack.extentreports.*;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;

public class ReportTest {

    public static void main(String[] args) {

        ExtentSparkReporter reporter =
                new ExtentSparkReporter(
                        "reports/report.html");

        ExtentReports extent =
                new ExtentReports();

        extent.attachReporter(reporter);

        ExtentTest test =
                extent.createTest("API Test");

        test.pass("API executed successfully");

        extent.flush();
    }
}
```

---

## 24. Allure Reports

Allure Report provides advanced and interactive reports.

Features:

* charts
* execution history
* screenshots
* detailed logs

---

## 25. Logging Best Practices

* Log requests during failures
* Avoid unnecessary logs
* Log important details only
* Use structured reporting
* Maintain readable logs

---

## 26. Reporting Best Practices

* Generate reports after every execution
* Include failure reasons
* Store reports separately
* Use timestamps in reports

---

## 27. Common Logging Errors

| Error                | Reason              |
| -------------------- | ------------------- |
| Huge logs            | Excessive logging   |
| Missing logs         | Logging not enabled |
| Report not generated | flush() missing     |

---

## 28. Real-Time Logging Usage

Logging helps in:

* debugging API failures
* checking request payloads
* validating server responses
* analyzing execution flow

---

## 29. Real-Time Reporting Usage

Reports help:

* managers track execution
* teams analyze failures
* testers monitor results

---
---
# Module 17: Schema Validation in REST Assured

## 1. What is Schema Validation?

Schema validation checks whether API response structure matches expected format.

It validates:

* keys
* data types
* required fields
* JSON structure

---

## 2. Why Schema Validation is Important?

### Advantages

* Ensures response structure correctness
* Detects unexpected changes
* Improves API reliability
* Helps contract testing

---

## 3. Example JSON Response

```json id="sch171"
{
  "name": "Krishna",
  "job": "Tester"
}
```

---

## 4. Example JSON Schema

```json id="sch172"
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "job": {
      "type": "string"
    }
  },
  "required": [
    "name",
    "job"
  ]
}
```

---

## 5. Add JSON Schema Validator Dependency

```xml id="sch173"
<dependency>
    <groupId>io.rest-assured</groupId>
    <artifactId>json-schema-validator</artifactId>
    <version>5.5.0</version>
    <scope>test</scope>
</dependency>
```

---

## 6. Store Schema File

Create folder:

```text id="sch174"
src/test/resources
```

Store schema file:

```text id="sch175"
userSchema.json
```

---

## 7. Import Schema Validator

```java id="sch176"
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
```

---

## 8. Schema Validation Syntax

```java id="sch177"
.body(matchesJsonSchemaInClasspath(
        "userSchema.json"))
```

---

## 9. Complete Schema Validation Example

```java id="sch178"
import io.restassured.RestAssured;
import org.junit.Test;

import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;

public class SchemaValidationTest {

    @Test
    public void validateSchema() {

        RestAssured
                .given()

                .when()
                .get("https://reqres.in/api/users/2")

                .then()
                .statusCode(200)
                .body(
                    matchesJsonSchemaInClasspath(
                        "userSchema.json"
                    )
                );
    }
}
```

---

## 10. What Schema Validation Checks?

Schema validation checks:

* field names
* data types
* required fields
* nested structure
* array structure

---

## 11. Validate Data Types

### Example

```json id="sch179"
{
  "id": 101
}
```

Schema:

```json id="sch180"
{
  "id": {
    "type": "integer"
  }
}
```

---

## 12. Validate Required Fields

```json id="sch181"
"required": [
  "name",
  "job"
]
```

If fields are missing, test fails.

---

## 13. Validate Array Structure

### JSON

```json id="sch182"
{
  "skills": [
    "Java",
    "Selenium"
  ]
}
```

---

### Schema

```json id="sch183"
{
  "skills": {
    "type": "array"
  }
}
```

---

## 14. Validate Nested JSON

### JSON

```json id="sch184"
{
  "employee": {
    "name": "Krishna"
  }
}
```

---

### Schema

```json id="sch185"
{
  "employee": {
    "type": "object"
  }
}
```

---

## 15. Schema Validation Flow

```text id="sch186"
API Response
      ↓
Compare with Schema
      ↓
Validation Result
```

---

## 16. Common JSON Schema Types

| Type    | Purpose      |
| ------- | ------------ |
| string  | Text         |
| integer | Whole number |
| boolean | true/false   |
| array   | List         |
| object  | JSON object  |

---

## 17. Common Schema Validation Errors

| Error             | Reason                |
| ----------------- | --------------------- |
| Missing field     | Required field absent |
| Type mismatch     | Wrong data type       |
| Invalid structure | Incorrect JSON format |

---

## 18. Schema Validation vs Response Validation

| Response Validation    | Schema Validation      |
| ---------------------- | ---------------------- |
| Validates values       | Validates structure    |
| Checks specific fields | Checks complete format |

---

## 19. Real-Time Usage

Schema validation is used in:

* contract testing
* microservices
* API version validation
* large automation frameworks

---

## 20. Benefits of Schema Validation

* Detects API changes early
* Prevents structure mismatch
* Improves automation stability
* Ensures API consistency

---

## 21. Best Practices

* Store schemas separately
* Validate critical APIs
* Maintain reusable schemas
* Update schemas carefully
* Avoid duplicate schemas

---

## 22. Real-Time Example

If backend changes:

```json id="sch187"
"name": 101
```

instead of:

```json id="sch188"
"name": "Krishna"
```

Schema validation will fail because:

* expected string
* actual integer

---

## 23. Advanced Schema Validation

Schema can validate:

* minimum values
* maximum values
* string length
* regex patterns

---

## 24. Example Minimum Validation

```json id="sch189"
{
  "age": {
    "type": "integer",
    "minimum": 18
  }
}
```

---
---
# Module 18: TestNG Integration in REST Assured

## 1. What is TestNG?

TestNG is a testing framework used for:

* test execution
* test management
* reporting
* parallel execution

It is widely used with REST Assured and Selenium.

---

## 2. Advantages of TestNG

* Easy test management
* Supports annotations
* Supports parallel execution
* Supports grouping
* Generates reports
* Supports data-driven testing

---

## 3. Add TestNG Dependency

```xml id="tng181"
<dependency>
    <groupId>org.testng</groupId>
    <artifactId>testng</artifactId>
    <version>7.10.2</version>
    <scope>test</scope>
</dependency>
```

---

## 4. TestNG Annotations

| Annotation    | Purpose                |
| ------------- | ---------------------- |
| @Test         | Marks test method      |
| @BeforeMethod | Runs before every test |
| @AfterMethod  | Runs after every test  |
| @BeforeClass  | Runs before class      |
| @AfterClass   | Runs after class       |

---

## 5. Simple TestNG Example

```java id="tng182"
import org.testng.annotations.Test;

public class SimpleTest {

    @Test
    public void testMethod() {

        System.out.println(
                "Test Executed");
    }
}
```

---

## 6. @BeforeMethod Example

Runs before every test method.

```java id="tng183"
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class BeforeMethodTest {

    @BeforeMethod
    public void setup() {

        System.out.println(
                "Before Method");
    }

    @Test
    public void test1() {

        System.out.println(
                "Test 1");
    }

    @Test
    public void test2() {

        System.out.println(
                "Test 2");
    }
}
```

---

## 7. @AfterMethod Example

Runs after every test method.

```java id="tng184"
import org.testng.annotations.AfterMethod;
import org.testng.annotations.Test;

public class AfterMethodTest {

    @AfterMethod
    public void teardown() {

        System.out.println(
                "After Method");
    }

    @Test
    public void testAPI() {

        System.out.println(
                "API Test");
    }
}
```

---

## 8. TestNG with REST Assured

```java id="tng185"
import io.restassured.RestAssured;
import org.testng.annotations.Test;

public class APITest {

    @Test
    public void getUser() {

        RestAssured
                .given()

                .when()
                .get("https://reqres.in/api/users/2")

                .then()
                .statusCode(200);
    }
}
```

---

## 9. Test Priority

Priority controls execution order.

---

### Example

```java id="tng186"
import org.testng.annotations.Test;

public class PriorityTest {

    @Test(priority = 1)
    public void login() {

        System.out.println("Login");
    }

    @Test(priority = 2)
    public void getUsers() {

        System.out.println("Get Users");
    }
}
```

---

## 10. Enable/Disable Test

```java id="tng187"
@Test(enabled = false)
```

Disabled test will not execute.

---

## 11. Grouping Tests

Groups help organize test cases.

---

### Example

```java id="tng188"
@Test(groups = "smoke")
```

---

## 12. Group Execution Example

```java id="tng189"
import org.testng.annotations.Test;

public class GroupTest {

    @Test(groups = "smoke")
    public void loginTest() {

        System.out.println("Smoke Test");
    }

    @Test(groups = "regression")
    public void userTest() {

        System.out.println(
                "Regression Test");
    }
}
```

---

## 13. testng.xml File

Used to control test execution.

---

### Example

```xml id="tng190"
<!DOCTYPE suite SYSTEM
"https://testng.org/testng-1.0.dtd">

<suite name="APISuite">

    <test name="API Tests">

        <classes>

            <class name=
            "tests.APITest"/>

        </classes>

    </test>

</suite>
```

---

## 14. Running TestNG Suite

Run:

```text id="tng191"
testng.xml
```

---

## 15. Parallel Execution

Runs multiple tests simultaneously.

Improves execution speed.

---

## 16. Parallel Execution Example

```xml id="tng192"
<suite name="Suite"
       parallel="methods"
       thread-count="2">
```

---

## 17. DataProvider in TestNG

Used for data-driven testing.

---

### Example

```java id="tng193"
@DataProvider(name = "userdata")
public Object[][] data() {

    return new Object[][]{
            {"Krishna"},
            {"Rahul"}
    };
}
```

---

## 18. Using DataProvider

```java id="tng194"
@Test(dataProvider = "userdata")
public void testData(String name) {

    System.out.println(name);
}
```

---

## 19. Dependency Between Tests

Used when one test depends on another.

---

### Example

```java id="tng195"
@Test
public void login() {
}

@Test(dependsOnMethods =
        "login")
public void getUsers() {
}
```

---

## 20. Assertions in TestNG

```java id="tng196"
Assert.assertEquals(actual,
                    expected);
```

---

## 21. Assertion Example

```java id="tng197"
import org.testng.Assert;
import org.testng.annotations.Test;

public class AssertionTest {

    @Test
    public void validateData() {

        Assert.assertEquals(
                "Krishna",
                "Krishna"
        );
    }
}
```

---

## 22. TestNG Reports

After execution, TestNG generates reports automatically.

Generated folders:

```text id="tng198"
test-output
```

---

## 23. Common TestNG Reports

| Report                | Purpose           |
| --------------------- | ----------------- |
| emailable-report.html | Execution summary |
| index.html            | Detailed report   |

---

## 24. Common TestNG Errors

| Error              | Reason             |
| ------------------ | ------------------ |
| Test not running   | Missing annotation |
| XML issue          | Invalid testng.xml |
| Dependency failure | Parent test failed |

---

## 25. Best Practices

* Use proper priorities
* Organize tests with groups
* Use reusable setup methods
* Keep testng.xml clean
* Use assertions properly

---

## 26. Real-Time Usage

TestNG is used for:

* regression testing
* smoke testing
* parallel execution
* CI/CD pipelines
* automation frameworks

---

## 27. JUnit vs TestNG

| JUnit            | TestNG             |
| ---------------- | ------------------ |
| Basic framework  | Advanced framework |
| Limited features | More flexible      |
| Less annotations | More annotations   |

---
---
# Module 19: CI/CD Integration with REST Assured

## 1. What is CI/CD?

CI/CD stands for:

| Term | Meaning                          |
| ---- | -------------------------------- |
| CI   | Continuous Integration           |
| CD   | Continuous Delivery / Deployment |

---

## 2. What is Continuous Integration?

Continuous Integration means automatically:

* building code
* running tests
* validating changes

whenever new code is pushed.

---

## 3. What is Continuous Deployment?

Continuous Deployment means automatically deploying application after successful testing.

---

## 4. Why CI/CD is Important?

### Advantages

* Faster testing
* Early bug detection
* Automated execution
* Improved software quality
* Reduced manual work

---

## 5. Common CI/CD Tools

| Tool         | Purpose                |
| ------------ | ---------------------- |
| Jenkins      | Automation server      |
| Git          | Source code management |
| GitHub       | Repository hosting     |
| Apache Maven | Build management       |

---

## 6. CI/CD Workflow

```text id="cicd191"
Developer Pushes Code
          ↓
Git Repository
          ↓
Jenkins Trigger
          ↓
Build Execution
          ↓
API Test Execution
          ↓
Report Generation
```

---

## 7. What is Jenkins?

Jenkins is an automation tool used to:

* execute tests
* build projects
* integrate pipelines
* automate deployments

---

## 8. Install Jenkins

Download:

[Jenkins Downloads](https://www.jenkins.io/download/?utm_source=chatgpt.com)

---

## 9. Start Jenkins

Default Jenkins URL:

```text id="cicd192"
http://localhost:8080
```

---

## 10. Create Jenkins Job

### Steps

1. Open Jenkins
2. Click:

```text id="cicd193"
New Item
```

3. Select:

```text id="cicd194"
Freestyle Project
```

4. Enter project name

---

## 11. Connect GitHub Repository

Repository URL Example:

```text id="cicd195"
https://github.com/user/project.git
```

---

## 12. GitHub Integration

GitHub stores automation project source code.

---

## 13. Maven Build Command

```bash id="cicd196"
mvn clean test
```

---

## 14. Add Build Step in Jenkins

### Steps

1. Open job configuration
2. Select:

```text id="cicd197"
Build Step
```

3. Choose:

```text id="cicd198"
Invoke top-level Maven targets
```

4. Enter:

```text id="cicd199"
clean test
```

---

## 15. Execute Jenkins Job

Click:

```text id="cicd200"
Build Now
```

---

## 16. Jenkins Console Output

Used to view:

* execution logs
* errors
* test results

---

## 17. Jenkins Build Status

| Status     | Meaning |
| ---------- | ------- |
| Blue/Green | Success |
| Red        | Failed  |

---

## 18. Maven Surefire Plugin

Used for test execution.

---

### Add Plugin

```xml id="cicd201"
<plugin>
    <groupId>
        org.apache.maven.plugins
    </groupId>

    <artifactId>
        maven-surefire-plugin
    </artifactId>

    <version>3.2.5</version>
</plugin>
```

---

## 19. Generate Test Reports

Reports generated after execution:

* TestNG reports
* Extent reports
* Allure reports

---

## 20. Archive Reports in Jenkins

### Steps

1. Post Build Actions
2. Select:

```text id="cicd202"
Archive Artifacts
```

3. Enter report path

Example:

```text id="cicd203"
reports/*
```

---

## 21. Schedule Automatic Execution

Jenkins supports scheduled builds.

---

### Example

```text id="cicd204"
H 10 * * *
```

Runs daily at 10 AM.

---

## 22. Poll SCM

Automatically triggers build when code changes occur.

---

### Example

```text id="cicd205"
H/5 * * * *
```

Checks repository every 5 minutes.

---

## 23. Parameterized Build

Allows passing values during execution.

Example:

* environment
* username
* token

---

## 24. Jenkins Pipeline

Pipeline automates CI/CD workflow.

---

## 25. Simple Jenkins Pipeline Example

```groovy id="cicd206"
pipeline {

    agent any

    stages {

        stage('Build') {

            steps {
                sh 'mvn clean test'
            }
        }
    }
}
```

---

## 26. Git Commands

### Clone Repository

```bash id="cicd207"
git clone repository_url
```

---

### Push Changes

```bash id="cicd208"
git push
```

---

### Pull Latest Code

```bash id="cicd209"
git pull
```

---

## 27. Real-Time CI/CD Usage

CI/CD is used for:

* nightly execution
* regression testing
* automated deployment
* smoke testing
* continuous validation

---

## 28. Common CI/CD Errors

| Error            | Reason                  |
| ---------------- | ----------------------- |
| Build failure    | Compilation issue       |
| Test failure     | Assertion failure       |
| Git issue        | Wrong repository access |
| Dependency issue | Missing libraries       |

---

## 29. Best Practices

* Keep builds stable
* Execute tests regularly
* Store reports properly
* Use proper branching strategy
* Automate regression suites

---
---
# Module 20: Real-Time API Automation Framework Project

## 1. What is Real-Time API Framework?

Real-time API framework is a structured automation project designed for:

* scalability
* maintainability
* reusability
* enterprise-level testing

It combines:

* REST Assured
* TestNG
* Maven
* Reporting
* Logging
* Data handling

---

## 2. Technologies Used

| Technology    | Purpose          |
| ------------- | ---------------- |
| REST Assured  | API Automation   |
| TestNG        | Test Execution   |
| Apache Maven  | Build Management |
| Jenkins       | CI/CD            |
| ExtentReports | Reporting        |
| Git           | Version Control  |

---

## 3. Real-Time Framework Structure

```text id="rtf201"
src/test/java
│
├── testcases
├── payloads
├── routes
├── utilities
├── reports
├── config
│
src/test/resources
│
├── testdata
├── schemas
├── config.properties
```

---

## 4. testcases Folder

Contains all API test classes.

### Example

```text id="rtf202"
UserTests.java
LoginTests.java
EmployeeTests.java
```

---

## 5. payloads Folder

Contains POJO classes for request bodies.

---

### Example

```text id="rtf203"
UserPayload.java
EmployeePayload.java
```

---

## 6. routes Folder

Stores all API endpoints.

Avoids hardcoded URLs.

---

### Routes Example

```java id="rtf204"
public class Routes {

    public static String base_url =
            "https://reqres.in";

    public static String create_user =
            base_url + "/api/users";

    public static String get_user =
            base_url + "/api/users/{id}";
}
```

---

## 7. utilities Folder

Contains reusable utility classes.

Used for:

* Excel handling
* JSON utilities
* Reporting
* Logging
* Random data generation

---

## 8. Config File

### config.properties

```properties id="rtf205"
base_url=https://reqres.in
token=sample_token
```

---

## 9. Read Config File

```java id="rtf206"
Properties prop =
        new Properties();

FileInputStream file =
        new FileInputStream(
                "config.properties");

prop.load(file);

String url =
        prop.getProperty("base_url");
```

---

## 10. Base Class

Centralized setup class.

---

### Base Class Example

```java id="rtf207"
import io.restassured.RestAssured;
import org.testng.annotations.BeforeClass;

public class BaseClass {

    @BeforeClass
    public void setup() {

        RestAssured.baseURI =
                "https://reqres.in";
    }
}
```

---

## 11. Payload Class Example

```java id="rtf208"
public class UserPayload {

    private String name;
    private String job;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }
}
```

---

## 12. API Class Example

```java id="rtf209"
import io.restassured.RestAssured;
import io.restassured.response.Response;

public class UserAPI {

    public static Response createUser(
            UserPayload payload) {

        return RestAssured
                .given()
                .header("Content-Type",
                        "application/json")
                .body(payload)

                .when()
                .post(Routes.create_user);
    }
}
```

---

## 13. Test Class Example

```java id="rtf210"
import org.testng.annotations.Test;

public class UserTests
        extends BaseClass {

    @Test
    public void testCreateUser() {

        UserPayload payload =
                new UserPayload();

        payload.setName("Krishna");
        payload.setJob("Tester");

        UserAPI.createUser(payload)
                .then()
                .statusCode(201);
    }
}
```

---

## 14. Logging in Framework

### Request Logging

```java id="rtf211"
.log().all()
```

---

### Response Logging

```java id="rtf212"
.then()
.log().all()
```

---

## 15. Reporting Integration

Reports help track:

* execution results
* failures
* execution time

---

## 16. Extent Report Setup

```java id="rtf213"
ExtentSparkReporter reporter =
        new ExtentSparkReporter(
                "reports/report.html");

ExtentReports extent =
        new ExtentReports();

extent.attachReporter(reporter);
```

---

## 17. Schema Validation Integration

Schema files stored in:

```text id="rtf214"
src/test/resources/schemas
```

---

### Validation Example

```java id="rtf215"
.body(matchesJsonSchemaInClasspath(
        "userSchema.json"))
```

---

## 18. Token Handling

Extract token dynamically.

---

### Example

```java id="rtf216"
String token =
        response.jsonPath()
                .getString("token");
```

---

### Use Token

```java id="rtf217"
.header("Authorization",
        "Bearer " + token)
```

---

## 19. Data-Driven Integration

Test data stored in:

* Excel
* CSV
* JSON

---

## 20. Excel Utility Example

```java id="rtf218"
String value =
        sheet.getRow(1)
             .getCell(0)
             .getStringCellValue();
```

---

## 21. Framework Execution Flow

```text id="rtf219"
Test Case
    ↓
Payload Creation
    ↓
API Method
    ↓
Request Execution
    ↓
Response Validation
    ↓
Reporting
```

---

## 22. CI/CD Integration

Framework integrated with:

* Jenkins
* GitHub
* Maven

---

### Maven Command

```bash id="rtf220"
mvn clean test
```

---

## 23. testng.xml Example

```xml id="rtf221"
<suite name="API Suite">

    <test name="User Tests">

        <classes>

            <class name=
            "testcases.UserTests"/>

        </classes>

    </test>

</suite>
```

---

## 24. Real-Time Features

| Feature             | Purpose              |
| ------------------- | -------------------- |
| Logging             | Debugging            |
| Reporting           | Execution summary    |
| Data-driven testing | Multiple test data   |
| Schema validation   | Structure validation |
| Token handling      | Authentication       |
| Reusable methods    | Better maintenance   |

---

## 25. Common Framework Challenges

| Problem          | Solution                 |
| ---------------- | ------------------------ |
| Hardcoded data   | Use config files         |
| Duplicate code   | Reusable methods         |
| Token expiration | Dynamic token generation |
| Large framework  | Modular structure        |

---

## 26. Best Practices

* Use reusable methods
* Avoid hardcoded values
* Maintain clean folder structure
* Store configs separately
* Use centralized routes
* Keep logs readable

---

## 27. Real-Time Project Flow

```text id="rtf222"
Login API
    ↓
Extract Token
    ↓
Pass Token to APIs
    ↓
Validate Responses
    ↓
Generate Reports
```

---
---
# Module 21: Mini Projects in REST Assured

## 1. Purpose of Mini Projects

Mini projects help:

* apply concepts practically
* improve framework understanding
* simulate real-time scenarios
* prepare for interviews

---

# Project 1: User Management API Framework

## 2. Project Objective

Automate User Management APIs:

* Create User
* Get User
* Update User
* Delete User

---

## 3. Technologies Used

| Technology   | Purpose          |
| ------------ | ---------------- |
| REST Assured | API Automation   |
| TestNG       | Test Execution   |
| Apache Maven | Build Management |

---

## 4. Project Structure

```text id="prj211"
src/test/java
│
├── testcases
├── payloads
├── routes
├── utilities
```

---

## 5. User Payload Class

```java id="prj212"
public class UserPayload {

    private String name;
    private String job;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }
}
```

---

## 6. Routes Class

```java id="prj213"
public class Routes {

    public static String base_url =
            "https://reqres.in";

    public static String create_user =
            base_url + "/api/users";

    public static String get_user =
            base_url + "/api/users/{id}";

    public static String update_user =
            base_url + "/api/users/{id}";

    public static String delete_user =
            base_url + "/api/users/{id}";
}
```

---

## 7. Create User API

```java id="prj214"
public static Response createUser(
        UserPayload payload) {

    return RestAssured
            .given()
            .header("Content-Type",
                    "application/json")
            .body(payload)

            .when()
            .post(Routes.create_user);
}
```

---

## 8. Get User API

```java id="prj215"
public static Response getUser(int id) {

    return RestAssured
            .given()
            .pathParam("id", id)

            .when()
            .get(Routes.get_user);
}
```

---

## 9. Update User API

```java id="prj216"
public static Response updateUser(
        int id,
        UserPayload payload) {

    return RestAssured
            .given()
            .pathParam("id", id)
            .header("Content-Type",
                    "application/json")
            .body(payload)

            .when()
            .put(Routes.update_user);
}
```

---

## 10. Delete User API

```java id="prj217"
public static Response deleteUser(int id) {

    return RestAssured
            .given()
            .pathParam("id", id)

            .when()
            .delete(Routes.delete_user);
}
```

---

## 11. User Test Class

```java id="prj218"
import org.testng.annotations.Test;

public class UserTests {

    @Test
    public void testCreateUser() {

        UserPayload payload =
                new UserPayload();

        payload.setName("Krishna");
        payload.setJob("Tester");

        UserAPI.createUser(payload)
                .then()
                .statusCode(201);
    }
}
```

---

# Project 2: E-Commerce API Testing

## 12. Project Objective

Automate E-Commerce APIs:

* Login
* Add Product
* Get Product
* Add to Cart
* Place Order

---

## 13. APIs Covered

| API         | Purpose         |
| ----------- | --------------- |
| Login API   | Authentication  |
| Product API | Product details |
| Cart API    | Add products    |
| Order API   | Place orders    |

---

## 14. Login API Example

```java id="prj219"
String body = "{\n" +
        "\"email\":\"test@gmail.com\",\n" +
        "\"password\":\"12345\"\n" +
        "}";

RestAssured
        .given()
        .header("Content-Type",
                "application/json")
        .body(body)

        .when()
        .post("/login")

        .then()
        .statusCode(200);
```

---

## 15. Extract Authentication Token

```java id="prj220"
String token =
        response.jsonPath()
                .getString("token");
```

---

## 16. Use Token in APIs

```java id="prj221"
.header("Authorization",
        "Bearer " + token)
```

---

# Project 3: Employee Management API

## 17. Project Objective

Automate Employee APIs:

* Add Employee
* Search Employee
* Update Employee
* Delete Employee

---

## 18. Employee Payload

```java id="prj222"
public class Employee {

    private int id;
    private String name;
    private String role;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
```

---

## 19. Employee POST API

```java id="prj223"
Employee emp = new Employee();

emp.setId(101);
emp.setName("Krishna");
emp.setRole("Tester");

RestAssured
        .given()
        .header("Content-Type",
                "application/json")
        .body(emp)

        .when()
        .post("/employees")

        .then()
        .statusCode(201);
```

---

## 20. Reporting Integration

### Extent Reports Example

```java id="prj224"
ExtentTest test =
        extent.createTest(
                "Create User Test");

test.pass("User created successfully");
```

---

## 21. Logging Integration

```java id="prj225"
.log().all()
```

---

## 22. Schema Validation Integration

```java id="prj226"
.body(matchesJsonSchemaInClasspath(
        "userSchema.json"))
```

---

## 23. Data-Driven Integration

Read data from:

* Excel
* CSV
* JSON

---

## 24. CI/CD Integration

Execute framework using:

```bash id="prj227"
mvn clean test
```

Integrate with:

* Jenkins
* GitHub

---

## 25. Real-Time Features

| Feature             | Purpose                       |
| ------------------- | ----------------------------- |
| Token Handling      | Authentication                |
| Reporting           | Execution tracking            |
| Logging             | Debugging                     |
| Schema Validation   | Response structure validation |
| Data-Driven Testing | Multiple data sets            |

---

## 26. Common Project Challenges

| Problem        | Solution                 |
| -------------- | ------------------------ |
| Token Expiry   | Dynamic token generation |
| Hardcoded Data | External test data       |
| Duplicate Code | Reusable methods         |
| Large Project  | Modular structure        |

---

## 27. Best Practices

* Keep framework modular
* Use reusable methods
* Avoid hardcoded values
* Use config files
* Maintain reports properly
* Use centralized routes

---

## 28. Real-Time Framework Flow

```text id="prj228"
Login API
    ↓
Get Token
    ↓
Execute APIs
    ↓
Validate Responses
    ↓
Generate Reports
```

---
---