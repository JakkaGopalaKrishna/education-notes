# Postman Overview

## What is Postman?

**Postman** is an API testing tool used to send requests to APIs and verify responses without writing much code.

It helps QA Engineers, Developers, and Testers:

* Test REST APIs
* Validate responses
* Automate API testing
* Create API documentation
* Run collections of requests

---

## Why Use Postman?

Without Postman:

* Need to write code to call APIs

With Postman:

* Send API requests with a few clicks
* View responses instantly
* Automate API testing easily

---

## Postman Workflow

```text
Client (Postman)
       |
       | Request
       ↓
      API
       |
       | Response
       ↓
Client (Postman)
```

---

## HTTP Methods

| Method | Purpose               |
| ------ | --------------------- |
| GET    | Retrieve data         |
| POST   | Create data           |
| PUT    | Update entire record  |
| PATCH  | Update partial record |
| DELETE | Delete data           |

---

## Example API

### GET Request

```http
GET https://simple-books-api.click/books
```

Response:

```json
[
  {
    "id": 1,
    "name": "The Russian"
  }
]
```

---

### POST Request

```http
POST https://simple-books-api.click/orders
```

Body:

```json
{
  "bookId": 1,
  "customerName": "Krishna"
}
```

---

### DELETE Request

```http
DELETE https://simple-books-api.click/orders/123
```

---

## Main Components of Postman

### 1. Workspace

Area where APIs are created and tested.

### 2. Collection

Group of API requests.

Example:

```text
Book API Collection
    ├── Get Books
    ├── Create Order
    ├── Get Order
    └── Delete Order
```

### 3. Request

Contains:

* URL
* Method
* Headers
* Body

### 4. Response

Contains:

* Status Code
* Headers
* Response Body
* Response Time

---

## Status Codes

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

## Headers

Additional information sent with request.

Example:

```http
Content-Type: application/json
Authorization: Bearer token123
```

---

## Query Parameters

Used to filter data.

Example:

```http
GET /books?type=fiction
```

Parameter:

```text
type = fiction
```

---

## Path Parameters

Example:

```http
GET /books/1
```

Here:

```text
1 = Book ID
```

---

## Request Body

Used mainly in POST, PUT, PATCH.

Example:

```json
{
  "name": "Krishna",
  "role": "QA"
}
```

---

## Environment Variables

Store reusable values.

Example:

```text
baseUrl = https://simple-books-api.click
token = abc123
```

Use:

```text
{{baseUrl}}/books
```

---

## Tests in Postman

Open **Tests** tab:

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```

---

### Validate Response Time

```javascript
pm.test("Response time less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});
```

---

### Validate Response Body

```javascript
pm.test("Check book name", function () {
    let jsonData = pm.response.json();
    pm.expect(jsonData[0].name).to.eql("The Russian");
});
```

---

## Assertions Used in Postman

```javascript
pm.expect(value).to.eql(expected);
pm.expect(value).to.be.true;
pm.expect(value).to.be.false;
pm.expect(value).to.be.above(10);
pm.expect(value).to.be.below(100);
```

---

## Collection Runner

Used to execute multiple requests automatically.

Steps:

1. Select Collection
2. Click Run
3. Execute all requests
4. View report

---

## Newman

**Newman** is the command-line version of Postman.

Install:

```bash
npm install -g newman
```

Run Collection:

```bash
newman run SimpleBooksCollection.json
```

With Environment:

```bash
newman run SimpleBooksCollection.json -e Environment.json
```

---

## Interview Questions

### Q1. What is Postman?

**A:** Postman is an API testing tool used to send requests, validate responses, and automate API testing.

### Q2. What is a Collection?

**A:** A collection is a group of API requests.

### Q3. What are Environment Variables?

**A:** Variables used to store reusable values such as URLs, tokens, IDs, etc.

### Q4. Difference between GET and POST?

**A:**

* GET → Fetch data
* POST → Create data

### Q5. What is Newman?

**A:** Newman is the command-line tool used to run Postman collections.

### Q6. What is Pre-request Script?

**A:** Code executed before sending the request.

### Q7. What is the Tests Tab?

**A:** Used to write assertions and validate API responses.

---

# For QA Automation Learning

Focus on:

1. Creating Requests
2. HTTP Methods
3. Status Codes
4. Headers
5. Query Parameters
6. Path Parameters
7. JSON Body
8. Environment Variables
9. Tests Tab
10. Collection Runner
11. Newman

These are the most commonly asked Postman topics for QA interviews and automation training.
