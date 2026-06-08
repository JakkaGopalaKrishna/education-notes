# Module 1: Introduction to APIs & Postman

## API Fundamentals

### What is an API?

API stands for **Application Programming Interface**.

An API acts as a messenger between two applications. It allows one application to communicate with another and exchange data.

**Example:**
* You use a weather app.
* The weather app sends a request to a weather server using an API.
* The server sends weather data back.
* The app displays the weather to you.

```text
Mobile App
    |
    | Request
    v
   API
    |
    | Response
    v
 Server/Database
```

### Types of APIs
#### Public API
Available for everyone.

**Examples:**
* Weather APIs
* Currency APIs

#### Private API

Used only within an organization.

**Example:**
* Employee Management System APIs

#### Partner API

Shared with specific business partners.

**Example:**
* Payment Gateway APIs

#### REST API

Uses HTTP methods and is the most commonly used API type.

**Example:**
```http
GET /users
POST /users
```

### API Testing Basics

API Testing verifies whether APIs:

* Return correct data
* Return correct status codes
* Handle errors properly
* Meet performance requirements

**Example Test Case**
```text
Request:
GET /users/1

Expected:
Status Code = 200
User ID = 1
```

### Why API Testing?

Benefits:
* Faster than UI testing
* Detects issues early
* Independent of UI
* Improves software quality
* Supports automation

---

## Introduction to Postman

### What is Postman?

Postman is an API testing tool used to:
* Send API requests
* View responses
* Validate data
* Automate API tests

It is one of the most popular tools used by QA Engineers and Developers.

### Features of Postman

#### API Request Creation
Create and send requests easily.

#### Response Inspection
View:
* Status Code
* Headers
* Response Body
* Response Time

#### Test Automation
Write JavaScript-based test cases.

#### Collections
Group related API requests.

#### Variables
Store reusable values.

#### Newman Integration
Run Postman collections from the command line.

### Advantages of Postman

#### Easy to Learn
No programming required for basic usage.

#### User-Friendly Interface
Simple GUI for API testing.

#### Supports Automation
Can automate API validations.

#### Collaboration
Teams can share collections.

#### Supports Multiple Authentication Types
* Basic Auth
* Bearer Token
* API Key

### Installing Postman

#### Windows

1. Download Postman.
2. Run the installer.
3. Complete installation.
4. Launch Postman.

#### Linux
Install using Snap:

```bash
sudo snap install postman
```

#### Verify Installation
Open Postman and ensure the workspace loads successfully.

### Postman Interface Overview

#### Sidebar
Contains:

* Collections
* APIs
* Environments
* History

#### Request Builder
Used to create requests.
Contains:
* Method Dropdown
* URL Field
* Send Button

#### Response Section
Displays:
* Status Code
* Response Body
* Headers
* Cookies

```text
----------------------------------
| Method | URL | Send Button     |
----------------------------------
| Params | Auth | Headers | Body |
----------------------------------
| Response Area                 |
----------------------------------
```

### Creating a Workspace

A Workspace is an area where you organize API development and testing activities.

#### Types of Workspaces

##### Personal Workspace
Used by a single user.

##### Team Workspace
Used by multiple users.

##### Public Workspace
Shared publicly.

#### Creating a Workspace
1. Open Postman.
2. Click Workspace.
3. Click Create Workspace.
4. Enter Workspace Name.
5. Choose Workspace Type.
6. Click Create.

**Example:**
```text
Workspace Name:
QA Automation Practice

Type:
Personal
```

---

## Module 1 Summary
### Key Terms

| Term      | Meaning                                   |
| --------- | ----------------------------------------- |
| API       | Communication bridge between applications |
| REST API  | API using HTTP methods                    |
| Request   | Data sent to server                       |
| Response  | Data received from server                 |
| Postman   | API testing tool                          |
| Workspace | Area to organize API testing              |
---
---

# Module 2: HTTP Fundamentals

## HTTP Basics

### What is HTTP?

**HTTP** stands for **HyperText Transfer Protocol**.

It is the communication protocol used between a client and a server.

**Example:**
When you open a website:

```text
Browser (Client)
      |
      | HTTP Request
      v
     Server
      |
      | HTTP Response
      v
    Browser
```

### What is HTTPS?

**HTTPS** stands for **HyperText Transfer Protocol Secure**.

It is the secure version of HTTP.

* HTTP → Data is sent as plain text.
* HTTPS → Data is encrypted.

**Example:**
```text
HTTP  : http://example.com
HTTPS : https://example.com
```

### HTTP vs HTTPS
| HTTP               | HTTPS           |
| ------------------ | --------------- |
| Not Secure         | Secure          |
| Uses Port 80       | Uses Port 443   |
| Data Not Encrypted | Data Encrypted  |
| Faster             | Slightly Slower |

---

## Client-Server Architecture

### What is a Client?

A client is an application that sends requests.

**Examples:**
* Browser
* Mobile App
* Postman

### What is a Server?

A server receives requests and sends responses.

**Examples:**
* Web Server
* Database Server
* API Server

### Communication Flow

```text
Client
   |
   | Request
   v
Server
   |
   | Response
   v
Client
```

**Real Example**

```text
Postman
   |
GET /books
   |
   v
Books API Server
   |
200 OK + Book Data
   |
   v
Postman
```

---

## Request and Response Cycle

### What is a Request?
A request is sent from client to server asking for data or an action.

A request contains:

* URL
* Method
* Headers
* Body (optional)

**Example**
```http
GET https://api.example.com/books
```

### What is a Response?

A response is sent from server to client.

A response contains:

* Status Code
* Headers
* Response Body

**Example**
```json
{
  "id": 1,
  "name": "Java Basics"
}
```

---

## HTTP Methods

### GET
Used to retrieve data.
**Example**
```http
GET /books
```

Response:

```json
[
  {
    "id":1,
    "name":"Java"
  }
]
```

### POST

Used to create data.

**Example**

```http
POST /books
```

Body:

```json
{
  "name":"Python"
}
```

Response:

```json
{
  "id":2,
  "name":"Python"
}
```

### PUT

Used to update an entire resource.

**Example**
```http
PUT /books/1
```
Body:

```json
{
  "id":1,
  "name":"Advanced Java"
}
```

### PATCH
Used to partially update data.
**Example**
```http
PATCH /books/1
```
Body:

```json
{
  "name":"Advanced Java"
}
```

### DELETE
Used to remove data.

**Example**
```http
DELETE /books/1
```
---

## Difference Between HTTP Methods
| Method | Purpose                |
| ------ | ---------------------- |
| GET    | Retrieve Data          |
| POST   | Create Data            |
| PUT    | Update Entire Resource |
| PATCH  | Partial Update         |
| DELETE | Delete Resource        |

---

## HTTP Status Codes

### What is a Status Code?

A status code tells whether the request was successful or failed.

---
### 1xx Informational
Request received.

**Examples**
```text
100 Continue
101 Switching Protocols
```

Rarely used in API testing.
---

### 2xx Success
Request successful.

#### 200 OK
Request successful.

```http
GET /books
```
#### 201 Created
Resource created successfully.
```http
POST /books
```

#### 204 No Content
Request successful but no response body.
```http
DELETE /books/1
```
---

### 3xx Redirection
Client must take additional action.
#### 301 Moved Permanently
Resource moved permanently.
#### 302 Found
Temporary redirect.
---
### 4xx Client Errors
Problem in request sent by client.
#### 400 Bad Request
Invalid request.
#### 401 Unauthorized
Authentication required.
#### 403 Forbidden
Access denied.
#### 404 Not Found
Resource not found.
**Example**
```http
GET /books/999
```
---
### 5xx Server Errors
Problem on server side.
#### 500 Internal Server Error
Unexpected server issue.
#### 502 Bad Gateway
Invalid response from another server.
#### 503 Service Unavailable
Server temporarily unavailable.

---
## Common Status Codes for QA
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

**Memorize these codes for interviews and API testing.**

---
---

# Module 3: Building API Requests

## Request Components

### What is an API Request?

An API Request is a message sent from a client (Postman) to a server asking for data or requesting an action.

```text
Postman
   |
   | Request
   v
API Server
```

A Request generally contains:

* URL
* Method
* Headers
* Authorization
* Body (optional)

---
### URL
URL (Uniform Resource Locator) is the address of the API endpoint.
**Syntax**

```text
https://domain.com/resource
```
**Example**
```http
https://simple-books-api.click/books
```
**Parts of URL**

```text
https://simple-books-api.click/books
|-----| |-------------------| |---|
Protocol      Domain          Endpoint
```
#### Protocol
```text
https://
```
Defines how communication happens.
#### Domain
```text
simple-books-api.click
```
Identifies the server.
#### Endpoint
```text
/books
```
Identifies the resource.

---
### Method
The HTTP method tells the server what action to perform.
#### GET
Retrieve data.
```http
GET /books
```
#### POST
Create data.
```http
POST /orders
```
#### PUT
Update complete data.
```http
PUT /orders/1
```
#### PATCH
Update partial data.
```http
PATCH /orders/1
```
#### DELETE
Delete data.
```http
DELETE /orders/1
```
---
### Headers

Headers provide additional information about the request.

**Examples**
```http
Content-Type: application/json
Authorization: Bearer token123
Accept: application/json
```
#### Common Headers
##### Content-Type
Specifies request body format.
```http
Content-Type: application/json
```
##### Accept
Specifies expected response format.
```http
Accept: application/json
```
##### Authorization
Used for authentication.
```http
Authorization: Bearer token123
```
---

### Authorization

Authorization verifies whether the user can access the API.
#### No Auth
No authentication required.
#### Basic Auth
Username and password.
```text
Username: admin
Password: admin123
```
#### Bearer Token
Most commonly used.
```http
Authorization: Bearer eyJhbGci...
```
#### API Key
```http
x-api-key: 123456
```
---
### Body
The Body contains data sent to the server.
Mostly used with:
* POST
* PUT
* PATCH
#### JSON Body Example
```json
{
  "bookId": 1,
  "customerName": "Krishna"
}
```
---
## Sending Requests
### Creating a GET Request
#### Example
```http
GET https://simple-books-api.click/books
```
#### Steps
1. Open Postman.
2. Select GET.
3. Enter URL.
4. Click Send.

#### Response
```json
[
  {
    "id":1,
    "name":"The Russian"
  }
]
```

---

### Creating a POST Request

#### Example
```http
POST https://simple-books-api.click/orders
```
#### Headers
```http
Content-Type: application/json
```
#### Body
```json
{
  "bookId":1,
  "customerName":"Krishna"
}
```
#### Expected Response
```json
{
  "created": true,
  "orderId": "abc123"
}
```
---
### Creating a PUT Request
#### Example
```http
PUT https://simple-books-api.click/orders/123
```
#### Body
```json
{
  "customerName":"Krishna Updated"
}
```
Used for full updates.

---
### Creating a PATCH Request
#### Example
```http
PATCH https://simple-books-api.click/orders/123
```
#### Body
```json
{
  "customerName":"Krishna"
}
```
Used for partial updates.

---

### Creating a DELETE Request

#### Example

```http
DELETE https://simple-books-api.click/orders/123
```

Deletes the resource.

---

## Understanding Responses

### What is a Response?

A response is returned by the server after processing a request.

```text
Postman
   |
Request
   |
   v
Server
   |
Response
   |
   v
Postman
```

---

### Status Code

Shows success or failure.

#### Examples

```text
200 OK
201 Created
400 Bad Request
404 Not Found
500 Internal Server Error
```

---

### Response Headers

Metadata about the response.

#### Example

```http
Content-Type: application/json
Content-Length: 250
```

---

### Response Body

Actual data returned by the server.

#### Example

```json
{
  "id":1,
  "name":"The Russian"
}
```

---

### Response Time

Time taken by server to respond.

#### Example

```text
120 ms
350 ms
500 ms
```

QA engineers often validate response times.

---

## Postman Tabs

### Params Tab

Used for query parameters.

Example:

```http
GET /books?type=fiction
```

---

### Authorization Tab

Used for authentication.

Options:

* No Auth
* Basic Auth
* Bearer Token
* API Key

---

### Headers Tab

Add custom headers.

Example:

```http
Content-Type: application/json
```

---

### Body Tab

Add request payload.

Formats:

* JSON
* Text
* XML
* Form Data

---

### Tests Tab

Used for validation.

Example:

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```

---

## Real-Time Example

### Get All Books

#### Request

```http
GET https://simple-books-api.click/books
```

#### Response

```json
[
  {
    "id":1,
    "name":"The Russian"
  }
]
```

---

### Create Order

#### Request

```http
POST https://simple-books-api.click/orders
```

#### Body

```json
{
  "bookId":1,
  "customerName":"Krishna"
}
```

#### Response

```json
{
  "created":true,
  "orderId":"xyz123"
}
```

---
---
# Module 4: Parameters

## Introduction to Parameters

### What are Parameters?

Parameters are values passed to an API to provide additional information.

They help:

* Filter data
* Search data
* Identify specific resources
* Customize responses

**Example**

```http
GET /books?type=fiction
```

Here:

```text
type=fiction
```

is a parameter.

---

## Query Parameters

### What are Query Parameters?

Query Parameters are key-value pairs appended to the URL after a `?`.

They are mainly used for:

* Filtering
* Searching
* Sorting
* Pagination

---

### Syntax

```http
URL?key=value
```

Example:

```http
GET /books?type=fiction
```

---

### Multiple Query Parameters

Syntax:

```http
URL?key1=value1&key2=value2
```

Example:

```http
GET /books?type=fiction&language=english
```

Parameters:

```text
type = fiction
language = english
```

---

### Real-Time Example

#### Search Products

```http
GET /products?name=laptop
```

#### Filter Employees

```http
GET /employees?department=IT
```

#### Pagination

```http
GET /users?page=1&limit=10
```

---

### Query Parameter in Postman

#### URL

```http
https://api.example.com/books
```

#### Params Tab

| Key    | Value   |
| ------ | ------- |
| type   | fiction |
| author | john    |

Postman automatically creates:

```http
https://api.example.com/books?type=fiction&author=john
```

---

### Advantages of Query Parameters

#### Filtering

```http
GET /books?category=science
```

#### Searching

```http
GET /users?name=krishna
```

#### Pagination

```http
GET /users?page=2
```

---

## Path Parameters

### What are Path Parameters?

Path Parameters are values embedded directly within the URL path.

They identify a specific resource.

---

### Syntax

```http
URL/resource/{id}
```

Example:

```http
GET /books/1
```

Here:

```text
1
```

is the Path Parameter.

---

### Real-Time Examples

#### Get Book By ID

```http
GET /books/1
```

#### Get Employee By ID

```http
GET /employees/101
```

#### Get Order By ID

```http
GET /orders/5001
```

---

### Path Variables in Postman

#### URL

```http
https://api.example.com/books/:bookId
```

#### Path Variable

| Variable | Value |
| -------- | ----- |
| bookId   | 1     |

Generated URL:

```http
https://api.example.com/books/1
```

---

### Why Use Path Parameters?

Because resources often have unique identifiers.

Examples:

```http
GET /users/1
GET /users/2
GET /users/3
```

Each request fetches a different user.

---

## Difference Between Query Parameters and Path Parameters

### Comparison Table

| Query Parameter              | Path Parameter                  |
| ---------------------------- | ------------------------------- |
| Used for filtering/searching | Used for identifying a resource |
| Comes after ?                | Part of URL path                |
| Optional                     | Usually required                |
| Multiple allowed             | Usually one or more IDs         |

---

### Example

#### Query Parameter

```http
GET /books?type=fiction
```

Meaning:

```text
Give me all fiction books.
```

---

#### Path Parameter

```http
GET /books/1
```

Meaning:

```text
Give me book whose ID is 1.
```

---

### Visual Comparison

#### Query Parameter

```http
GET /users?city=bangalore
```

```text
users → Resource
city=bangalore → Filter
```

---

#### Path Parameter

```http
GET /users/101
```

```text
users → Resource
101 → Specific User
```

---

## Common Use Cases

### Query Parameters

#### Search

```http
GET /products?name=phone
```

#### Filter

```http
GET /employees?department=IT
```

#### Sort

```http
GET /products?sort=price
```

#### Pagination

```http
GET /users?page=1&limit=10
```

---

### Path Parameters

#### Get User

```http
GET /users/1
```

#### Update User

```http
PUT /users/1
```

#### Delete User

```http
DELETE /users/1
```

---

### Quick Revision

#### Query Parameter

```http
GET /books?type=fiction
```

Used for:

* Filter
* Search
* Sort
* Pagination

---

#### Path Parameter

```http
GET /books/1
```

Used for:

* Get Specific Record
* Update Specific Record
* Delete Specific Record

---

### Interview Formula

```text
Query Parameter → Filter/Search Data

Path Parameter → Identify Specific Resource
```
---
---
# Module 5: Authentication

## Authentication Basics

### What is Authentication?

Authentication is the process of verifying the identity of a user, application, or system before allowing access to an API.

Simply:

```text
Authentication = Who are you?
```

**Example**

When you log in to Gmail:

```text
Username + Password
        ↓
Google verifies identity
        ↓
Access Granted
```

The same concept is used in APIs.

---

### Why Authentication is Required?

Authentication helps:

* Protect sensitive data
* Restrict unauthorized access
* Identify users
* Improve security

Without authentication:

```text
Anyone → Access API → View/Modify Data
```

With authentication:

```text
Authorized User → Access API → Allowed
Unauthorized User → Access API → Denied
```

---

### Authentication vs Authorization

#### Authentication

Verifies identity.

```text
Who are you?
```

#### Authorization

Verifies permissions.

```text
What are you allowed to do?
```

---

### Example

```text
Login to Company Portal

Authentication:
Username = Krishna
Password = ******

Authorization:
Can View Reports = Yes
Can Delete Reports = No
```

---

## Authentication Workflow

### Typical Flow

```text
Client
   |
Credentials
   |
   v
Authentication Server
   |
Token Generated
   |
   v
Client
   |
Token Sent with API Request
   |
   v
API Server
   |
Access Granted
```

---

## Authentication Types

### No Auth

Some APIs do not require authentication.

#### Example

```http
GET https://simple-books-api.click/status
```

Response:

```json
{
  "status": "OK"
}
```

---

## Basic Authentication

### What is Basic Authentication?

Basic Authentication uses:

* Username
* Password

These credentials are encoded and sent in the request header.

---

### Example

```text
Username: admin
Password: admin123
```

Header:

```http
Authorization: Basic YWRtaW46YWRtaW4xMjM=
```

---

### Using Basic Auth in Postman

1. Open Authorization Tab.
2. Select Basic Auth.
3. Enter Username.
4. Enter Password.
5. Click Send.

Postman automatically generates the Authorization header.

---

### Advantages

* Easy to implement
* Built into HTTP

### Disadvantages

* Less secure
* Credentials sent with every request

---

## Bearer Token Authentication

### What is a Bearer Token?

A Bearer Token is a security token provided after successful login.

The token is then sent with every request.

---

### Example Token

```text
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXCJ9...
```

---

### Request Example

```http
GET /users

Authorization: Bearer eyJhbGciOiJIUzI1Ni...
```

---

### Workflow

```text
Login
   |
Token Generated
   |
Client Stores Token
   |
Send Token with API Requests
   |
Access Granted
```

---

### Using Bearer Token in Postman

1. Authorization Tab
2. Select Bearer Token
3. Paste Token
4. Send Request

---

### Advantages

* More secure than Basic Auth
* Widely used in REST APIs
* Easy to manage

---

## API Key Authentication

### What is an API Key?

An API Key is a unique identifier issued to an application.

The client sends the key with every request.

---

### Example

```text
API Key:
123456789ABCDEF
```

---

### Request Example

```http
GET /products

x-api-key: 123456789ABCDEF
```

---

### Using API Key in Postman

1. Authorization Tab
2. Select API Key
3. Enter:

   * Key Name
   * Value
4. Send Request

---

### Advantages

* Easy to implement
* Common in public APIs

### Disadvantages

* Less secure than OAuth
* Key leakage can expose APIs

---

## OAuth 2.0 (Overview)

### What is OAuth 2.0?

OAuth 2.0 is an authorization framework used by major platforms.

Examples:

* Google
* Facebook
* GitHub
* Microsoft

---

### Example

Login with Google:

```text
Application
     |
Redirect to Google
     |
User Login
     |
Google Returns Access Token
     |
Application Uses Token
```

---

### OAuth Flow

```text
User
  |
Login
  |
OAuth Server
  |
Access Token
  |
Client
  |
API Request
  |
API Server
```

---

### Why OAuth?

* Highly secure
* Industry standard
* Supports third-party applications

---

### Common OAuth Terms

#### Access Token

Temporary token used for API access.

#### Refresh Token

Used to generate a new access token.

#### Client ID

Application identifier.

#### Client Secret

Application password.

---

## Authentication Headers

### Basic Auth Header

```http
Authorization: Basic YWRtaW46MTIz
```

---

### Bearer Token Header

```http
Authorization: Bearer token123
```

---

### API Key Header

```http
x-api-key: ABC123XYZ
```

---

## Common Authentication Status Codes

### 200 OK

Authentication successful.

---

### 401 Unauthorized

Authentication failed.

```text
Invalid Username
Invalid Password
Invalid Token
Missing Token
```

---

### 403 Forbidden

Authentication successful but access denied.

Example:

```text
User Logged In
But Not Allowed To Delete Data
```

---

## Real-Time Example (Simple Books API)

### Step 1: Generate Token

```http
POST /api-clients
```

Body:

```json
{
  "clientName": "Krishna",
  "clientEmail": "krishna@example.com"
}
```

Response:

```json
{
  "accessToken": "abc123xyz"
}
```

---

### Step 2: Use Token

```http
POST /orders
```

Header:

```http
Authorization: Bearer abc123xyz
```

Body:

```json
{
  "bookId": 1,
  "customerName": "Krishna"
}
```

---

## Quick Revision

```text
Authentication → Who are you?

Authorization → What can you do?

Basic Auth → Username + Password

Bearer Token → Most Common API Authentication

API Key → Unique Key for API Access

OAuth 2.0 → Industry Standard Authentication Framework
```

---
---
# Module 6: JSON

## JSON Fundamentals

### What is JSON?

**JSON** stands for **JavaScript Object Notation**.

It is a lightweight format used to store and exchange data between a client and a server.

Most modern APIs send and receive data in JSON format.

---

### Why JSON is Used?

* Easy to read
* Easy to write
* Lightweight
* Language independent
* Supported by almost all programming languages

---

### Real-Time Example

When you request user data:

```http
GET /users/1
```

Response:

```json
{
  "id": 1,
  "name": "Krishna",
  "email": "krishna@gmail.com"
}
```

This response is JSON.

---

## JSON Syntax

### Rules of JSON

#### Data is Stored as Key-Value Pairs

```json
{
  "name": "Krishna"
}
```

Here:

```text
Key   = name
Value = Krishna
```

---

#### Keys Must Be Inside Double Quotes

✅ Correct

```json
{
  "name": "Krishna"
}
```

❌ Wrong

```json
{
  name: "Krishna"
}
```

---

#### Strings Must Use Double Quotes

✅ Correct

```json
{
  "city": "Bangalore"
}
```

❌ Wrong

```json
{
  "city": 'Bangalore'
}
```

---

#### JSON Starts and Ends with Curly Braces

```json
{
  "name": "Krishna"
}
```

---

## JSON Data Types

### String

```json
{
  "name": "Krishna"
}
```

---

### Number

```json
{
  "age": 25
}
```

---

### Boolean

```json
{
  "isActive": true
}
```

---

### Null

```json
{
  "middleName": null
}
```

---

### Object

```json
{
  "address": {
    "city": "Bangalore"
  }
}
```

---

### Array

```json
{
  "skills": ["Java", "SQL", "Selenium"]
}
```

---

## JSON Objects

### What is a JSON Object?

An object is a collection of key-value pairs enclosed in `{}`.

Example:

```json
{
  "id": 1,
  "name": "Krishna",
  "city": "Bangalore"
}
```

---

### Accessing Object Values

```json
{
  "name": "Krishna"
}
```

Key:

```text
name
```

Value:

```text
Krishna
```

---

## JSON Arrays

### What is an Array?

An array stores multiple values inside `[]`.

Example:

```json
[
  "Java",
  "SQL",
  "Selenium"
]
```

---

### Array of Numbers

```json
[
  10,
  20,
  30
]
```

---

### Array of Objects

```json
[
  {
    "id": 1,
    "name": "Krishna"
  },
  {
    "id": 2,
    "name": "John"
  }
]
```

Very common in API responses.

---

## Nested JSON

### What is Nested JSON?

JSON inside another JSON object.

Example:

```json
{
  "id": 1,
  "name": "Krishna",
  "address": {
    "city": "Bangalore",
    "state": "Karnataka"
  }
}
```

---

### Multiple Nested Levels

```json
{
  "employee": {
    "personal": {
      "name": "Krishna",
      "age": 25
    }
  }
}
```

---

## Complex JSON Example

```json
{
  "id": 1,
  "name": "Krishna",
  "skills": [
    "Java",
    "SQL",
    "Selenium"
  ],
  "address": {
    "city": "Bangalore",
    "state": "Karnataka"
  }
}
```

Contains:

* String
* Number
* Array
* Nested Object

---

## JSON in API Requests

### POST Request Example

```http
POST /users
```

Body:

```json
{
  "name": "Krishna",
  "email": "krishna@gmail.com"
}
```

---

### PUT Request Example

```http
PUT /users/1
```

Body:

```json
{
  "name": "Krishna Updated",
  "email": "krishna123@gmail.com"
}
```

---

### PATCH Request Example

```http
PATCH /users/1
```

Body:

```json
{
  "name": "Krishna Updated"
}
```

---

## JSON in API Responses

### Example Response

```json
{
  "id": 1,
  "name": "Krishna",
  "email": "krishna@gmail.com"
}
```

---

### List Response

```json
[
  {
    "id": 1,
    "name": "Krishna"
  },
  {
    "id": 2,
    "name": "John"
  }
]
```

---

## JSON Validation

### What is JSON Validation?

Checking whether JSON follows proper syntax.

---

### Valid JSON

```json
{
  "id": 1,
  "name": "Krishna"
}
```

---

### Invalid JSON

Missing quote:

```json
{
  name: "Krishna"
}
```

---

### Invalid JSON

Trailing comma:

```json
{
  "id": 1,
}
```

---

### Invalid JSON

Missing brace:

```json
{
  "id": 1
```

---

## JSON Pretty View in Postman

Postman automatically formats JSON.

Options:

### Pretty

```json
{
  "id": 1,
  "name": "Krishna"
}
```

Easy to read.

---

### Raw

```json
{"id":1,"name":"Krishna"}
```

Original format.

---

### Preview

Displays formatted output.

---

## Common JSON Structures in APIs

### Single Object

```json
{
  "id": 1,
  "name": "Krishna"
}
```

---

### Array

```json
[
  {
    "id": 1
  },
  {
    "id": 2
  }
]
```

---

### Nested Object

```json
{
  "address": {
    "city": "Bangalore"
  }
}
```

---

### Array of Objects

```json
{
  "employees": [
    {
      "id": 1,
      "name": "Krishna"
    },
    {
      "id": 2,
      "name": "John"
    }
  ]
}
```

---

### Quick Revision

```json
{
  "id": 1,
  "name": "Krishna",
  "skills": ["Java", "SQL"],
  "active": true
}
```

Contains:

```text
id      → Number
name    → String
skills  → Array
active  → Boolean
```

### Interview Formula

```text
Object → {}

Array → []

JSON = Collection of Key-Value Pairs

Content-Type → application/json
```
---
---
# Module 7: Collections

## Collection Basics

### What is a Collection?

A Collection is a group of API requests organized together in Postman.

Instead of creating requests one by one every time, we can save them inside a collection.

---

### Real-Time Example

Suppose you are testing a Book Store API.

Requests:

```text
GET Books
GET Book By ID
Create Order
Get Order
Update Order
Delete Order
```

You can store all these requests inside one collection.

```text
Book Store Collection
|
├── GET Books
├── GET Book By ID
├── Create Order
├── Get Order
├── Update Order
└── Delete Order
```

---

### Why Collections are Used?

Collections help:

* Organize API requests
* Reuse requests
* Share requests with team members
* Run multiple requests together
* Automate testing

---

## Collection Structure

### Collection

Top-level container.

```text
Collection
```

---

### Folder

Used to group related requests.

```text
Collection
|
├── Books
├── Orders
└── Customers
```

---

### Request

Actual API call.

```text
Books
|
├── GET Books
├── GET Book By ID
└── Create Book
```

---

## Creating Collections

### Steps

1. Open Postman
2. Click Collections
3. Click New Collection
4. Enter Collection Name
5. Save

---

### Example

```text
Collection Name:
Simple Books API
```

Result:

```text
Simple Books API
```

---

## Adding Requests to Collection

### Example

Create Request:

```http
GET https://simple-books-api.click/books
```

Save Request:

```text
Collection:
Simple Books API

Request Name:
Get All Books
```

---

### Result

```text
Simple Books API
|
└── Get All Books
```

---

## Collection Folders

### Why Use Folders?

Large projects may contain hundreds of APIs.

Folders help organize them.

---

### Example

```text
Simple Books API
|
├── Books
│   ├── Get Books
│   └── Get Book By ID
│
├── Orders
│   ├── Create Order
│   ├── Get Order
│   ├── Update Order
│   └── Delete Order
│
└── Authentication
    └── Generate Token
```

---

### Benefits

* Better organization
* Easy navigation
* Easy execution
* Easier maintenance

---

## Collection Variables

### What are Collection Variables?

Variables available to all requests inside a collection.

---

### Example

Collection Variable:

```text
baseUrl = https://simple-books-api.click
```

Request:

```http
{{baseUrl}}/books
```

Actual URL:

```http
https://simple-books-api.click/books
```

---

### Advantages

* Reusable
* Easy maintenance
* Reduces duplication

---

## Saving Requests

### Save Request

After creating a request:

1. Click Save
2. Select Collection
3. Enter Request Name
4. Save

---

### Example

```text
Request Name:
Create Order
```

Saved inside:

```text
Simple Books API
```

---

## Import Collections

### What is Import?

Import allows you to load existing Postman collections.

---

### Import Formats

#### JSON Collection File

Example:

```text
SimpleBooksCollection.json
```

---

### Steps

1. Click Import
2. Select File
3. Choose Collection JSON
4. Import

---

### Benefits

* Reuse existing collections
* Share APIs easily
* Quick project setup

---

## Export Collections

### What is Export?

Export creates a collection file that can be shared or backed up.

---

### Steps

1. Select Collection
2. Click More Options (...)
3. Click Export
4. Save JSON File

---

### Example Output

```text
SimpleBooksCollection.json
```

---

## Collection Documentation

### Purpose

Collections can serve as API documentation.

---

### Example

```text
Collection:
Simple Books API

Request:
GET /books

Description:
Returns all available books.
```

---

## Running Collections

### Why Run Collections?

Instead of executing requests one by one:

```text
GET Books
Create Order
Get Order
Delete Order
```

You can run all requests together.

---

### Collection Runner Preview

```text
Collection
|
├── Request 1
├── Request 2
├── Request 3
└── Request 4
```

Executed automatically in sequence.

---

## Sharing Collections

### Share with Team

Collections can be shared with:

* Developers
* Testers
* Managers
* Clients

---

### Advantages

* Consistency
* Collaboration
* Faster onboarding

---

## Real-Time Example

### Collection Structure

```text
Simple Books API
|
├── Authentication
│   └── Generate Token
│
├── Books
│   ├── Get Books
│   └── Get Book By ID
│
└── Orders
    ├── Create Order
    ├── Get Order
    ├── Update Order
    └── Delete Order
```

This is how most real-world API collections are organized.

---

## Best Practices

### Use Meaningful Names

✅ Good

```text
Get All Books
Create New Order
Delete Order
```

❌ Bad

```text
Test1
API1
Request123
```

---

### Group Related APIs

✅ Good

```text
Orders Folder
Customers Folder
Books Folder
```

---

### Use Variables

Instead of:

```http
https://simple-books-api.click/books
```

Use:

```http
{{baseUrl}}/books
```

---

### Add Descriptions

Document requests and collections.

---

## Quick Revision

```text
Collection
|
├── Folder
│     ├── Request
│     ├── Request
│     └── Request
│
└── Folder
      ├── Request
      └── Request
```

### Interview Formula

```text
Collection = Group of Requests

Folder = Group of Related Requests

Import = Load Collection

Export = Save Collection

Collection Variables = Reusable Variables
```
---
---
# Module 8: Variables

## Variable Fundamentals

### What is a Variable?

A Variable is a container used to store data that can be reused across requests.

Instead of hardcoding values repeatedly, we store them in variables.

---

### Why Use Variables?

Without Variables:

```http
https://simple-books-api.click/books
```

Used in 50 requests.

If the URL changes:

```http
https://api.books.com/books
```

You must update all 50 requests.

---

With Variables:

```http
{{baseUrl}}/books
```

Variable:

```text
baseUrl = https://simple-books-api.click
```

If URL changes, update only the variable.

---

### Benefits of Variables

* Reusable
* Easy Maintenance
* Dynamic Testing
* Less Duplication
* Better Readability

---

## Variable Syntax

### Accessing Variables

Syntax:

```text
{{variableName}}
```

Example:

```text
{{baseUrl}}
{{token}}
{{orderId}}
```

---

### Example

Variable:

```text
baseUrl = https://simple-books-api.click
```

Request:

```http
GET {{baseUrl}}/books
```

Actual Request:

```http
GET https://simple-books-api.click/books
```

---

## Variable Scope

### What is Scope?

Scope determines where a variable can be accessed.

Postman provides different variable scopes.

```text
Global
   ↓
Collection
   ↓
Environment
   ↓
Local
```

---

## Global Variables

### What are Global Variables?

Available throughout Postman.

Can be used by all collections and requests.

---

### Example

Variable:

```text
companyName = ABC Technologies
```

Usage:

```text
{{companyName}}
```

Available everywhere.

---

### When to Use?

Use for values needed across multiple collections.

Examples:

```text
companyName
country
```

---

### Advantages

* Accessible everywhere
* Easy reuse

---

### Disadvantages

* Difficult to manage in large projects
* Can cause conflicts

---

## Collection Variables

### What are Collection Variables?

Available only within a specific collection.

---

### Example

Collection:

```text
Simple Books API
```

Variable:

```text
baseUrl = https://simple-books-api.click
```

Usage:

```http
GET {{baseUrl}}/books
```

---

### Scope

```text
Collection
   |
   ├── Request 1
   ├── Request 2
   └── Request 3
```

Accessible only inside this collection.

---

### Advantages

* Easy management
* Collection-specific
* Highly reusable

---

## Environment Variables

### What are Environment Variables?

Variables used for different environments.

Examples:

```text
Development
Testing
Staging
Production
```

---

### Example

#### Development Environment

```text
baseUrl = https://dev.api.com
```

---

#### Testing Environment

```text
baseUrl = https://test.api.com
```

---

#### Production Environment

```text
baseUrl = https://prod.api.com
```

---

### Same Request

```http
GET {{baseUrl}}/books
```

Changing environment automatically changes URL.

---

### Real-Time Example

#### Development

```http
GET https://dev.api.com/books
```

#### Testing

```http
GET https://test.api.com/books
```

#### Production

```http
GET https://prod.api.com/books
```

---

### Advantages

* Environment Switching
* Easy Testing
* No URL Changes Required

---

## Local Variables

### What are Local Variables?

Variables available only during the execution of a request.

---

### Example

```javascript
let orderId = "12345";
```

Exists only while script runs.

---

### Usage

Mostly used in:

* Pre-request Scripts
* Tests

---

## Creating Variables

### Method 1: Using Postman UI

#### Steps

1. Open Variables Section
2. Click Add Variable
3. Enter Name
4. Enter Value
5. Save

---

### Example

```text
Variable Name:
baseUrl

Value:
https://simple-books-api.click
```

---

## Using Variables in Requests

### URL

```http
GET {{baseUrl}}/books
```

---

### Header

```http
Authorization: Bearer {{token}}
```

---

### Request Body

```json
{
  "orderId": "{{orderId}}"
}
```

---

## Dynamic Variables

### What are Dynamic Variables?

Postman provides built-in variables that generate values automatically.

---

### Random Name

```text
{{$randomFirstName}}
```

Example Output:

```text
John
```

---

### Random Email

```text
{{$randomEmail}}
```

Example Output:

```text
abc@gmail.com
```

---

### Random Number

```text
{{$randomInt}}
```

Example Output:

```text
4521
```

---

### Usage Example

```json
{
  "name": "{{$randomFirstName}}",
  "email": "{{$randomEmail}}"
}
```

Each request generates new data.

---

## Setting Variables in Scripts

### Environment Variable

```javascript
pm.environment.set("token", "abc123");
```

---

### Collection Variable

```javascript
pm.collectionVariables.set("token", "abc123");
```

---

### Global Variable

```javascript
pm.globals.set("token", "abc123");
```

---

## Getting Variables in Scripts

### Environment Variable

```javascript
pm.environment.get("token");
```

---

### Collection Variable

```javascript
pm.collectionVariables.get("token");
```

---

### Global Variable

```javascript
pm.globals.get("token");
```

---

## Real-Time Example

### Generate Token

Response:

```json
{
  "accessToken": "abc123xyz"
}
```

---

### Store Token

```javascript
let response = pm.response.json();

pm.environment.set(
    "token",
    response.accessToken
);
```

---

### Use Token

Header:

```http
Authorization: Bearer {{token}}
```

No need to manually copy the token.

---

## Variable Precedence

### Priority Order

```text
Local Variable
      ↓
Environment Variable
      ↓
Collection Variable
      ↓
Global Variable
```

If the same variable name exists in multiple scopes, Postman uses the highest priority variable.

---

### Example

Global:

```text
baseUrl = global.com
```

Collection:

```text
baseUrl = collection.com
```

Environment:

```text
baseUrl = env.com
```

Used Value:

```text
env.com
```

Environment wins.

---

## Best Practices

### Use Collection Variables

Preferred for most projects.

---

### Use Environment Variables

For:

```text
Dev
QA
UAT
Production
```

---

### Avoid Excessive Global Variables

Can become difficult to manage.

---

### Use Meaningful Names

✅ Good

```text
baseUrl
token
orderId
customerId
```

❌ Bad

```text
a
x
var1
test123
```

---

### Quick Revision

```text
{{variableName}}
```

Examples:

```text
{{baseUrl}}
{{token}}
{{orderId}}
```

---

### Scope Hierarchy

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

### Interview Formula

```text
Variable = Reusable Value

Collection Variable = Collection Scope

Environment Variable = Environment Scope

Dynamic Variable = Auto Generated Data

{{variableName}} = Access Variable
```

---
---

# Module 9: Postman Scripts

## Scripting Basics

### What are Postman Scripts?

Postman Scripts are JavaScript code snippets executed before or after an API request.

They help:

* Automate testing
* Validate responses
* Store values
* Chain requests
* Generate dynamic data

---

### Types of Scripts

#### Pre-request Script

Runs before the request is sent.

```text
Pre-request Script
       ↓
Request Sent
       ↓
Response Received
```

---

#### Test Script

Runs after the response is received.

```text
Request Sent
       ↓
Response Received
       ↓
Test Script
```

---

## JavaScript Basics for Postman

### Variables

```javascript
let name = "Krishna";
```

---

### Numbers

```javascript
let age = 25;
```

---

### Boolean

```javascript
let active = true;
```

---

### Arrays

```javascript
let skills = ["Java", "SQL", "Selenium"];
```

---

### Objects

```javascript
let user = {
    name: "Krishna",
    age: 25
};
```

---

### If Condition

```javascript
if (age > 18) {
    console.log("Adult");
}
```

---

### Functions

```javascript
function add(a, b) {
    return a + b;
}
```

---

### Console Log

```javascript
console.log("Hello");
```

View output in:

```text
Postman Console
```

---

## Pre-request Scripts

### What is a Pre-request Script?

A script executed before sending the request.

Used for:

* Creating variables
* Generating random data
* Creating timestamps
* Setting tokens

---

### Location

```text
Request
   |
Pre-request Script Tab
```

---

### Example 1: Create Variable

```javascript
pm.environment.set("username", "Krishna");
```

---

### Example 2: Generate Random Number

```javascript
let num = Math.floor(Math.random() * 1000);

pm.environment.set("randomNumber", num);
```

---

### Use Variable

```json
{
  "id": "{{randomNumber}}"
}
```

---

### Example 3: Generate Timestamp

```javascript
let time = Date.now();

pm.environment.set("timestamp", time);
```

---

### Example 4: Generate Random Email

```javascript
let email =
    "user" +
    Date.now() +
    "@gmail.com";

pm.environment.set("email", email);
```

---

### Use Email

```json
{
  "email": "{{email}}"
}
```

---

## Tests Tab

### What is Tests Tab?

The Tests tab contains scripts executed after the response is received.

Used for:

* Validating responses
* Checking status codes
* Checking response body
* Extracting values
* Storing variables

---

### Location

```text
Request
      ↓
Response
      ↓
Tests Tab Executes
```

---

## Writing Your First Test

### Status Code Validation

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```

---

### Result

```text
PASS
```

or

```text
FAIL
```

---

## Understanding pm.test()

### Syntax

```javascript
pm.test(
    "Test Name",
    function () {

    }
);
```

Example:

```javascript
pm.test(
    "Status code is 200",
    function () {
        pm.response.to.have.status(200);
    }
);
```

---

## Response Validation

### Validate Status Code

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```

---

### Validate 201

```javascript
pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});
```

---

### Validate 404

```javascript
pm.test("Status code is 404", function () {
    pm.response.to.have.status(404);
});
```

---

## Response Time Validation

### Check Response Time

```javascript
pm.test("Response Time", function () {
    pm.expect(
        pm.response.responseTime
    ).to.be.below(500);
});
```

Meaning:

```text
Response must be less than 500 ms
```

---

## Response Body Validation

### Convert Response to JSON

```javascript
let response =
    pm.response.json();
```

---

### Example Response

```json
{
  "id": 1,
  "name": "Krishna"
}
```

---

### Validate Name

```javascript
let response =
    pm.response.json();

pm.test("Check Name", function () {

    pm.expect(
        response.name
    ).to.eql("Krishna");

});
```

---

### Validate ID

```javascript
let response =
    pm.response.json();

pm.test("Check ID", function () {

    pm.expect(
        response.id
    ).to.eql(1);

});
```

---

## Header Validation

### Validate Content-Type

```javascript
pm.test(
    "Content Type",
    function () {

        pm.response.to.have.header(
            "Content-Type"
        );

    }
);
```

---

### Check Header Value

```javascript
pm.test(
    "JSON Response",
    function () {

        pm.expect(
            pm.response.headers.get(
                "Content-Type"
            )
        ).to.include(
            "application/json"
        );

    }
);
```

---

## Extracting Data from Response

### Example Response

```json
{
  "token": "abc123xyz"
}
```

---

### Extract Token

```javascript
let response =
    pm.response.json();

let token =
    response.token;
```

---

### Store Token

```javascript
pm.environment.set(
    "token",
    token
);
```

---

### Use Token

```http
Authorization: Bearer {{token}}
```

---

## Assertions

### What is an Assertion?

An assertion verifies expected results.

---

### Equal

```javascript
pm.expect(10)
  .to.eql(10);
```

---

### True

```javascript
pm.expect(true)
  .to.be.true;
```

---

### False

```javascript
pm.expect(false)
  .to.be.false;
```

---

### Above

```javascript
pm.expect(20)
  .to.be.above(10);
```

---

### Below

```javascript
pm.expect(20)
  .to.be.below(50);
```

---

### Include

```javascript
pm.expect("Hello")
  .to.include("Hell");
```

---

## Common Postman Objects

### pm.response

Access response information.

```javascript
pm.response.code
```

---

### Response Status Code

```javascript
pm.response.code
```

Example:

```text
200
```

---

### Response Time

```javascript
pm.response.responseTime
```

Example:

```text
120
```

---

### Response Body

```javascript
pm.response.json();
```

---

### pm.environment

Environment variables.

Set:

```javascript
pm.environment.set(
    "token",
    "abc123"
);
```

Get:

```javascript
pm.environment.get(
    "token"
);
```

---

### pm.collectionVariables

Set:

```javascript
pm.collectionVariables.set(
    "id",
    100
);
```

Get:

```javascript
pm.collectionVariables.get(
    "id"
);
```

---

### pm.globals

Set:

```javascript
pm.globals.set(
    "name",
    "Krishna"
);
```

Get:

```javascript
pm.globals.get(
    "name"
);
```

---

## Real-Time Example

### Login Request

Response:

```json
{
  "accessToken": "xyz123"
}
```

---

### Store Token

```javascript
let response =
    pm.response.json();

pm.environment.set(
    "token",
    response.accessToken
);
```

---

### Next Request

Header:

```http
Authorization: Bearer {{token}}
```

Token automatically used.

---

## Best Practices

### Use Meaningful Test Names

✅ Good

```javascript
pm.test(
 "Status code is 200"
);
```

❌ Bad

```javascript
pm.test("Test1");
```

---

### Validate Status Code

Always validate response code.

---

### Validate Important Fields

Check:

```text
ID
Name
Token
Email
```

---

### Store Dynamic Values

Examples:

```text
Token
Order ID
User ID
```

---

## Module 9 Summary

### Quick Revision

#### Pre-request Script

```javascript
pm.environment.set(
  "name",
  "Krishna"
);
```

Runs before request.

---

#### Tests Tab

```javascript
pm.test(
 "Status code is 200",
 function () {
     pm.response.to.have.status(200);
 });
```

Runs after response.

---

### Interview Formula

```text
Pre-request Script
       ↓
Request
       ↓
Response
       ↓
Tests Tab

pm.test() → Create Test

pm.expect() → Assertion

pm.response → Access Response

pm.environment.set() → Store Value
```
---
---

# Module 10: API Testing

## Introduction to API Testing

### What is API Testing?

API Testing is the process of verifying that APIs work correctly by sending requests and validating responses.

The goal is to ensure:

* Correct functionality
* Correct data
* Correct status codes
* Good performance
* Proper error handling

---

### Why API Testing?

API testing is important because APIs connect different systems.

Example:

```text
Frontend
    ↓
   API
    ↓
Database
```

If the API fails, the application may stop working.

---

### Benefits of API Testing

* Faster than UI testing
* Detects defects early
* Supports automation
* Improves software quality
* Reduces testing time

---

## Response Validation

### What is Response Validation?

Checking whether the response received matches the expected result.

---

### Things to Validate

#### Status Code

Example:

```text
Expected: 200
Actual: 200
Result: PASS
```

---

#### Response Body

Example:

```json
{
  "id": 1,
  "name": "Krishna"
}
```

Check whether values are correct.

---

#### Headers

Example:

```http
Content-Type: application/json
```

---

#### Response Time

Example:

```text
Expected < 500 ms
Actual = 120 ms
Result = PASS
```

---

## Status Code Validation

### Why Validate Status Codes?

Status codes indicate whether the API request succeeded or failed.

---

### Example

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```

---

### Common Status Codes

| Status Code | Meaning               |
| ----------- | --------------------- |
| 200         | OK                    |
| 201         | Created               |
| 204         | No Content            |
| 400         | Bad Request           |
| 401         | Unauthorized          |
| 403         | Forbidden             |
| 404         | Not Found             |
| 500         | Internal Server Error |

---

## Header Validation

### What is Header Validation?

Verifying that response headers contain expected values.

---

### Example

Response Header:

```http
Content-Type: application/json
```

Validation:

```javascript
pm.test("Content Type Validation", function () {

    pm.expect(
        pm.response.headers.get("Content-Type")
    ).to.include("application/json");

});
```

---

## Body Validation

### What is Body Validation?

Checking response data returned by the API.

---

### Example Response

```json
{
  "id": 1,
  "name": "Krishna"
}
```

---

### Validate Name

```javascript
let response = pm.response.json();

pm.test("Check Name", function () {

    pm.expect(
        response.name
    ).to.eql("Krishna");

});
```

---

### Validate ID

```javascript
pm.test("Check ID", function () {

    pm.expect(
        response.id
    ).to.eql(1);

});
```

---

## Response Time Validation

### Why Validate Response Time?

Slow APIs create poor user experience.

---

### Example

```javascript
pm.test("Response Time", function () {

    pm.expect(
        pm.response.responseTime
    ).to.be.below(500);

});
```

Meaning:

```text
API should respond within 500 milliseconds.
```

---

## Positive Testing

### What is Positive Testing?

Testing the API using valid input data.

Expected result:

```text
API works successfully.
```

---

### Example

Request:

```json
{
  "name": "Krishna"
}
```

Expected:

```text
201 Created
```

---

### Positive Test Case

| Test Case           | Expected Result |
| ------------------- | --------------- |
| Valid User Creation | 201 Created     |
| Valid Login         | 200 OK          |
| Valid Book Order    | Success         |

---

## Negative Testing

### What is Negative Testing?

Testing the API using invalid data.

Expected result:

```text
Proper error response.
```

---

### Example

Request:

```json
{
  "email": ""
}
```

Expected:

```text
400 Bad Request
```

---

### Negative Test Cases

| Test Case             | Expected Result |
| --------------------- | --------------- |
| Missing Email         | 400             |
| Invalid Password      | 401             |
| Invalid Token         | 401             |
| Non-existing Resource | 404             |

---

## Edge Case Testing

### What is Edge Case Testing?

Testing unusual or boundary conditions.

---

### Example 1

Maximum Length

```json
{
  "name": "AAAAAAAAAAAAAAAAAAAA"
}
```

Expected:

```text
Validation Response
```

---

### Example 2

Minimum Length

```json
{
  "name": ""
}
```

Expected:

```text
Validation Error
```

---

### Example 3

Special Characters

```json
{
  "name": "@#$%^&*"
}
```

Expected:

```text
Proper Validation
```

---

## Functional Testing

### What is Functional Testing?

Verifying that the API performs its intended function.

---

### Example

Request:

```http
GET /books/1
```

Expected:

```json
{
  "id": 1
}
```

If correct data is returned:

```text
PASS
```

---

## Data Validation Testing

### What is Data Validation?

Checking whether returned data is accurate.

---

### Example

Request:

```http
GET /users/1
```

Response:

```json
{
  "id": 1,
  "name": "Krishna"
}
```

Verify:

```text
ID = 1
Name = Krishna
```

---

## Error Handling Testing

### What is Error Handling Testing?

Verifying how the API behaves when errors occur.

---

### Example

Request:

```http
GET /users/99999
```

Expected:

```text
404 Not Found
```

---

### Another Example

Request:

```http
GET /users
```

Without Token

Expected:

```text
401 Unauthorized
```

---

## Security Testing Basics

### What to Verify?

#### Authentication

Valid token required.

---

#### Authorization

User permissions verified.

---

#### Sensitive Data

Passwords should not be exposed.

---

### Example

Response should NOT return:

```json
{
  "password": "admin123"
}
```

---

## CRUD API Testing

### Create

```http
POST /users
```

Expected:

```text
201 Created
```

---

### Read

```http
GET /users/1
```

Expected:

```text
200 OK
```

---

### Update

```http
PUT /users/1
```

Expected:

```text
200 OK
```

---

### Delete

```http
DELETE /users/1
```

Expected:

```text
204 No Content
```

---

## Example API Test Flow

### Step 1: Create User

```http
POST /users
```

Response:

```json
{
  "id": 100
}
```

---

### Step 2: Get User

```http
GET /users/100
```

Expected:

```text
200 OK
```

---

### Step 3: Update User

```http
PUT /users/100
```

Expected:

```text
200 OK
```

---

### Step 4: Delete User

```http
DELETE /users/100
```

Expected:

```text
204 No Content
```

---

### Step 5: Verify Deletion

```http
GET /users/100
```

Expected:

```text
404 Not Found
```

---

## Common API Test Scenarios

### Status Code Validation

Verify:

```text
200
201
204
400
401
403
404
500
```

---

### Response Body Validation

Verify:

```text
ID
Name
Email
Token
```

---

### Header Validation

Verify:

```text
Content-Type
Authorization
```

---

### Performance Validation

Verify:

```text
Response Time
```

---

## Module 10 Summary

### Quick Revision

```text
Response Validation
    ↓
Status Code
Headers
Body
Response Time
```

---

### Testing Types

```text
Positive Testing
    ↓
Valid Data

Negative Testing
    ↓
Invalid Data

Edge Testing
    ↓
Boundary Conditions
```

---

### Interview Formula

```text
API Testing =
Status Code Validation
+
Response Body Validation
+
Header Validation
+
Response Time Validation

Positive Testing = Valid Input

Negative Testing = Invalid Input

Edge Testing = Boundary Values
```
---
---

# Module 11: Assertions

## Assertion Basics

### What is an Assertion?

An Assertion is a validation that checks whether the actual result matches the expected result.

In Postman, assertions are used inside test scripts.

---

### Why Assertions are Important?

Assertions help verify:

* Status Codes
* Response Body
* Response Headers
* Response Time
* Data Accuracy

Without assertions:

```text
Request Sent
↓
Response Received
↓
No Validation
```

With assertions:

```text
Request Sent
↓
Response Received
↓
Validation Performed
↓
PASS / FAIL
```

---

### Syntax of Assertion

```javascript
pm.expect(actualValue)
  .to.eql(expectedValue);
```

Example:

```javascript
pm.expect(10)
  .to.eql(10);
```

Result:

```text
PASS
```

---

## eql()

### What is eql()?

Checks whether two values are exactly equal.

---

### Syntax

```javascript
pm.expect(actual)
  .to.eql(expected);
```

---

### Example

```javascript
pm.expect(100)
  .to.eql(100);
```

PASS

---

### Example

```javascript
pm.expect(100)
  .to.eql(200);
```

FAIL

---

### Real API Example

Response:

```json
{
  "id": 1,
  "name": "Krishna"
}
```

Validation:

```javascript
let response = pm.response.json();

pm.expect(response.id)
  .to.eql(1);
```

---

## include()

### What is include()?

Checks whether a string or array contains a value.

---

### String Example

```javascript
pm.expect("Hello World")
  .to.include("World");
```

PASS

---

### Array Example

```javascript
pm.expect([
    "Java",
    "SQL",
    "Selenium"
]).to.include("Java");
```

PASS

---

### Response Example

```json
{
  "message": "Order Created Successfully"
}
```

Validation:

```javascript
let response = pm.response.json();

pm.expect(response.message)
  .to.include("Created");
```

PASS

---

## true()

### What is true()?

Checks whether a value is true.

---

### Syntax

```javascript
pm.expect(value)
  .to.be.true;
```

---

### Example

```javascript
pm.expect(true)
  .to.be.true;
```

PASS

---

### Response Example

```json
{
  "success": true
}
```

Validation:

```javascript
let response = pm.response.json();

pm.expect(response.success)
  .to.be.true;
```

PASS

---

## false()

### What is false()?

Checks whether a value is false.

---

### Syntax

```javascript
pm.expect(value)
  .to.be.false;
```

---

### Example

```javascript
pm.expect(false)
  .to.be.false;
```

PASS

---

### Response Example

```json
{
  "deleted": false
}
```

Validation:

```javascript
let response = pm.response.json();

pm.expect(response.deleted)
  .to.be.false;
```

PASS

---

## above()

### What is above()?

Checks whether a value is greater than another value.

---

### Syntax

```javascript
pm.expect(actual)
  .to.be.above(expected);
```

---

### Example

```javascript
pm.expect(50)
  .to.be.above(20);
```

PASS

---

### Response Time Example

```javascript
pm.expect(
    pm.response.responseTime
).to.be.above(100);
```

Meaning:

```text
Response Time > 100 ms
```

---

## below()

### What is below()?

Checks whether a value is less than another value.

---

### Syntax

```javascript
pm.expect(actual)
  .to.be.below(expected);
```

---

### Example

```javascript
pm.expect(20)
  .to.be.below(50);
```

PASS

---

### Response Time Validation

```javascript
pm.expect(
    pm.response.responseTime
).to.be.below(500);
```

Meaning:

```text
Response Time < 500 ms
```

---

## Common Assertion Examples

### Validate Status Code

```javascript
pm.test(
    "Status code is 200",
    function () {

        pm.response.to.have.status(200);

    }
);
```

---

### Validate Response Time

```javascript
pm.test(
    "Response Time",
    function () {

        pm.expect(
            pm.response.responseTime
        ).to.be.below(500);

    }
);
```

---

### Validate Name

Response:

```json
{
  "name": "Krishna"
}
```

Validation:

```javascript
let response =
    pm.response.json();

pm.expect(
    response.name
).to.eql("Krishna");
```

---

### Validate Success Flag

Response:

```json
{
  "success": true
}
```

Validation:

```javascript
let response =
    pm.response.json();

pm.expect(
    response.success
).to.be.true;
```

---

### Validate Message

Response:

```json
{
  "message":
  "Order Created Successfully"
}
```

Validation:

```javascript
let response =
    pm.response.json();

pm.expect(
    response.message
).to.include(
    "Created"
);
```

---

## Combining Assertions

### Example

Response:

```json
{
  "id": 1,
  "name": "Krishna",
  "active": true
}
```

Validation:

```javascript
let response =
    pm.response.json();

pm.expect(
    response.id
).to.eql(1);

pm.expect(
    response.name
).to.eql("Krishna");

pm.expect(
    response.active
).to.be.true;
```

---

## Assertions with Arrays

### Response

```json
[
  "Java",
  "SQL",
  "Selenium"
]
```

Validation:

```javascript
let response =
    pm.response.json();

pm.expect(
    response
).to.include("Java");
```

---

## Assertions with Nested JSON

### Response

```json
{
  "address": {
    "city": "Bangalore"
  }
}
```

Validation:

```javascript
let response =
    pm.response.json();

pm.expect(
    response.address.city
).to.eql("Bangalore");
```

---

## Frequently Used Assertions in QA

### Status Code

```javascript
pm.response.to.have.status(200);
```

---

### Equal

```javascript
pm.expect(value)
  .to.eql(expected);
```

---

### Contains

```javascript
pm.expect(value)
  .to.include(text);
```

---

### True

```javascript
pm.expect(value)
  .to.be.true;
```

---

### False

```javascript
pm.expect(value)
  .to.be.false;
```

---

### Greater Than

```javascript
pm.expect(value)
  .to.be.above(10);
```

---

### Less Than

```javascript
pm.expect(value)
  .to.be.below(500);
```

---

## Best Practices

### Validate Status Code First

```javascript
pm.response.to.have.status(200);
```

---

### Validate Important Fields

Check:

```text
ID
Name
Email
Token
Order ID
```

---

### Use Meaningful Test Names

✅ Good

```javascript
pm.test(
 "User Created Successfully"
);
```

❌ Bad

```javascript
pm.test("Test1");
```

---

### Keep Assertions Simple

Write clear and readable validations.

---

## Module 11 Summary

### Quick Revision

#### Equal

```javascript
pm.expect(value)
  .to.eql(expected);
```

---

#### Include

```javascript
pm.expect(value)
  .to.include(text);
```

---

#### True

```javascript
pm.expect(value)
  .to.be.true;
```

---

#### False

```javascript
pm.expect(value)
  .to.be.false;
```

---

#### Above

```javascript
pm.expect(value)
  .to.be.above(number);
```

---

#### Below

```javascript
pm.expect(value)
  .to.be.below(number);
```

---

### Interview Formula

```text
Assertion = Validation

pm.expect() = Assertion Function

eql() = Equal

include() = Contains

true() = Must Be True

false() = Must Be False

above() = Greater Than

below() = Less Than
```
---
---
# Module 12: Data Extraction

## Extracting Response Data

### What is Data Extraction?

Data Extraction is the process of retrieving values from an API response and storing them for later use.

In real projects, APIs often return dynamic values such as:

* Token
* User ID
* Order ID
* Product ID
* Session ID

These values need to be used in subsequent requests.

---

### Why Data Extraction is Important?

Without extraction:

```text
Create User
↓
Copy User ID Manually
↓
Paste User ID in Next Request
```

With extraction:

```text
Create User
↓
Extract User ID Automatically
↓
Store in Variable
↓
Use in Next Request
```

---

## Parsing JSON Responses

### What is Parsing?

Parsing converts the response body into a JavaScript object so that individual fields can be accessed.

---

### Example Response

```json
{
  "id": 101,
  "name": "Krishna",
  "email": "krishna@gmail.com"
}
```

---

### Convert Response to JSON

```javascript
let response = pm.response.json();
```

Now:

```javascript
response.id
response.name
response.email
```

can be accessed.

---

## Extracting Simple Values

### Example Response

```json
{
  "id": 101,
  "name": "Krishna"
}
```

---

### Extract ID

```javascript
let response = pm.response.json();

let id = response.id;
```

---

### Extract Name

```javascript
let response = pm.response.json();

let name = response.name;
```

---

### Print Value

```javascript
console.log(id);
```

Output:

```text
101
```

---

## Storing Values in Variables

### Environment Variable

Response:

```json
{
  "token": "abc123xyz"
}
```

Store Token:

```javascript
let response = pm.response.json();

pm.environment.set(
    "token",
    response.token
);
```

---

### Use Token

```http
Authorization: Bearer {{token}}
```

---

## Extracting User ID

### Response

```json
{
  "id": 101,
  "name": "Krishna"
}
```

---

### Store User ID

```javascript
let response = pm.response.json();

pm.environment.set(
    "userId",
    response.id
);
```

---

### Use User ID

```http
GET /users/{{userId}}
```

Actual Request:

```http
GET /users/101
```

---

## Extracting Multiple Values

### Response

```json
{
  "id": 101,
  "name": "Krishna",
  "email": "krishna@gmail.com"
}
```

---

### Store Multiple Values

```javascript
let response = pm.response.json();

pm.environment.set(
    "id",
    response.id
);

pm.environment.set(
    "name",
    response.name
);

pm.environment.set(
    "email",
    response.email
);
```

---

## Extracting Data from Arrays

### Response

```json
[
  {
    "id": 1,
    "name": "Java"
  },
  {
    "id": 2,
    "name": "SQL"
  }
]
```

---

### Extract First Item

```javascript
let response = pm.response.json();

let firstId =
    response[0].id;
```

Result:

```text
1
```

---

### Extract First Name

```javascript
let response = pm.response.json();

let firstName =
    response[0].name;
```

Result:

```text
Java
```

---

## Extracting Data from Nested JSON

### Response

```json
{
  "id": 1,
  "address": {
    "city": "Bangalore",
    "state": "Karnataka"
  }
}
```

---

### Extract City

```javascript
let response = pm.response.json();

let city =
    response.address.city;
```

Result:

```text
Bangalore
```

---

### Extract State

```javascript
let response = pm.response.json();

let state =
    response.address.state;
```

Result:

```text
Karnataka
```

---

## Extracting Data from Nested Arrays

### Response

```json
{
  "skills": [
    "Java",
    "SQL",
    "Selenium"
  ]
}
```

---

### Extract First Skill

```javascript
let response = pm.response.json();

let skill =
    response.skills[0];
```

Result:

```text
Java
```

---

## Collection Variables

### Store Value

```javascript
pm.collectionVariables.set(
    "orderId",
    1001
);
```

---

### Retrieve Value

```javascript
pm.collectionVariables.get(
    "orderId"
);
```

---

## Global Variables

### Store Value

```javascript
pm.globals.set(
    "token",
    "abc123"
);
```

---

### Retrieve Value

```javascript
pm.globals.get(
    "token"
);
```

---

## Dynamic Request Chaining

### Step 1: Create Order

Request:

```http
POST /orders
```

Response:

```json
{
  "created": true,
  "orderId": "xyz123"
}
```

---

### Extract Order ID

```javascript
let response = pm.response.json();

pm.environment.set(
    "orderId",
    response.orderId
);
```

---

### Step 2: Get Order

Request:

```http
GET /orders/{{orderId}}
```

Actual:

```http
GET /orders/xyz123
```

---

### Step 3: Delete Order

Request:

```http
DELETE /orders/{{orderId}}
```

Actual:

```http
DELETE /orders/xyz123
```

---

## Using Extracted Data in Request Body

### Variable

```text
userId = 101
```

---

### Request Body

```json
{
  "userId": "{{userId}}"
}
```

Actual Body:

```json
{
  "userId": "101"
}
```

---

## Using Extracted Data in URL

### Variable

```text
orderId = 500
```

---

### URL

```http
GET /orders/{{orderId}}
```

Actual:

```http
GET /orders/500
```

---

## Using Extracted Data in Headers

### Variable

```text
token = abc123xyz
```

---

### Header

```http
Authorization: Bearer {{token}}
```

Actual:

```http
Authorization: Bearer abc123xyz
```

---

## Console Logging

### Print Response

```javascript
console.log(
    pm.response.json()
);
```

---

### Print Variable

```javascript
console.log(
    pm.environment.get("token")
);
```

---

### Open Postman Console

```text
View
↓
Show Postman Console
```

Useful for debugging.

---

## Real-Time Example

### Login Request

Response:

```json
{
  "accessToken": "xyz123"
}
```

---

### Extract Token

```javascript
let response =
    pm.response.json();

pm.environment.set(
    "token",
    response.accessToken
);
```

---

### Use Token

Header:

```http
Authorization: Bearer {{token}}
```

---

### Result

No manual copy-paste needed.

---

## Common Extraction Scenarios

### Extract Token

```javascript
pm.environment.set(
    "token",
    response.token
);
```

---

### Extract User ID

```javascript
pm.environment.set(
    "userId",
    response.id
);
```

---

### Extract Order ID

```javascript
pm.environment.set(
    "orderId",
    response.orderId
);
```

---

### Extract Email

```javascript
pm.environment.set(
    "email",
    response.email
);
```

---

## Best Practices

### Extract Only Required Fields

Avoid storing unnecessary data.

---

### Use Meaningful Variable Names

✅ Good

```text
token
userId
orderId
email
```

❌ Bad

```text
a
x
temp1
test123
```

---

### Use Environment Variables for Dynamic Data

Examples:

```text
token
userId
orderId
```

---

### Verify Data Before Storing

```javascript
pm.expect(
    response.id
).to.not.be.null;
```

---

## Module 12 Summary

### Quick Revision

#### Parse Response

```javascript
let response =
    pm.response.json();
```

---

#### Store Variable

```javascript
pm.environment.set(
    "token",
    response.token
);
```

---

#### Read Variable

```javascript
pm.environment.get(
    "token"
);
```

---

#### Array

```javascript
response[0].id
```

---

#### Nested Object

```javascript
response.address.city
```

---

### Interview Formula

```text
Response
   ↓
pm.response.json()
   ↓
Extract Value
   ↓
Store Variable
   ↓
Reuse Variable

response.id

response[0].id

response.address.city

pm.environment.set()

pm.environment.get()
```
---
---
# Module 13: Request Chaining

## Chaining Requests

### What is Request Chaining?

Request Chaining is the process of passing data from one API request to another.

The output of one request becomes the input of the next request.

---

### Why Request Chaining?

In real-world applications:

* User must be created before retrieving user details.
* Order must be created before updating it.
* Token must be generated before accessing secured APIs.

Because IDs and tokens are generated dynamically, they must be passed automatically between requests.

---

### Without Request Chaining

```text
Create User
↓
Copy User ID Manually
↓
Paste User ID
↓
Get User
```

---

### With Request Chaining

```text
Create User
↓
Extract User ID
↓
Store Variable
↓
Get User
```

Fully automated.

---

## Basic Workflow

### Example

```text
Request 1
Create User
    ↓
Extract User ID
    ↓
Store Variable
    ↓
Request 2
Get User
```

---

## Dynamic Data Flow

### Step 1: Create User

Request:

```http
POST /users
```

Body:

```json
{
  "name": "Krishna"
}
```

Response:

```json
{
  "id": 101,
  "name": "Krishna"
}
```

---

### Step 2: Extract User ID

Tests Tab:

```javascript
let response = pm.response.json();

pm.environment.set(
    "userId",
    response.id
);
```

Stored:

```text
userId = 101
```

---

### Step 3: Use User ID

Request:

```http
GET /users/{{userId}}
```

Actual Request:

```http
GET /users/101
```

---

## Login → Token → Protected API

### Step 1: Login

Request:

```http
POST /login
```

Body:

```json
{
  "username": "krishna",
  "password": "password123"
}
```

---

### Response

```json
{
  "token": "abc123xyz"
}
```

---

### Step 2: Extract Token

```javascript
let response = pm.response.json();

pm.environment.set(
    "token",
    response.token
);
```

---

### Step 3: Use Token

Header:

```http
Authorization: Bearer {{token}}
```

---

### Workflow

```text
Login
 ↓
Receive Token
 ↓
Store Token
 ↓
Use Token
 ↓
Access Protected API
```

---

## CRUD Request Chaining

### Create User

```http
POST /users
```

Response:

```json
{
  "id": 100
}
```

---

### Store ID

```javascript
let response = pm.response.json();

pm.environment.set(
    "userId",
    response.id
);
```

---

### Read User

```http
GET /users/{{userId}}
```

---

### Update User

```http
PUT /users/{{userId}}
```

---

### Delete User

```http
DELETE /users/{{userId}}
```

---

### Verify Deletion

```http
GET /users/{{userId}}
```

Expected:

```text
404 Not Found
```

---

## Real-Time Example: Book Order API

### Step 1: Create Order

Request:

```http
POST /orders
```

Body:

```json
{
  "bookId": 1,
  "customerName": "Krishna"
}
```

---

### Response

```json
{
  "created": true,
  "orderId": "xyz123"
}
```

---

### Step 2: Extract Order ID

```javascript
let response = pm.response.json();

pm.environment.set(
    "orderId",
    response.orderId
);
```

---

### Step 3: Get Order

```http
GET /orders/{{orderId}}
```

Actual:

```http
GET /orders/xyz123
```

---

### Step 4: Update Order

```http
PATCH /orders/{{orderId}}
```

---

### Step 5: Delete Order

```http
DELETE /orders/{{orderId}}
```

---

### Complete Flow

```text
Create Order
      ↓
Extract Order ID
      ↓
Get Order
      ↓
Update Order
      ↓
Delete Order
```

---

## Passing Data Using Environment Variables

### Store Data

```javascript
pm.environment.set(
    "userId",
    response.id
);
```

---

### Retrieve Data

```javascript
pm.environment.get(
    "userId"
);
```

---

### Use in URL

```http
GET /users/{{userId}}
```

---

### Use in Body

```json
{
  "userId": "{{userId}}"
}
```

---

### Use in Header

```http
Authorization: Bearer {{token}}
```

---

## Collection Variables in Chaining

### Store

```javascript
pm.collectionVariables.set(
    "orderId",
    response.orderId
);
```

---

### Retrieve

```javascript
pm.collectionVariables.get(
    "orderId"
);
```

---

## Request Execution Order

### Why Important?

Requests must execute in the correct sequence.

Incorrect:

```text
Get User
↓
Create User
```

Will fail.

---

### Correct

```text
Create User
↓
Get User
↓
Update User
↓
Delete User
```

---

## Collection Runner and Chaining

### Example Collection

```text
User API Collection
|
├── Login
├── Create User
├── Get User
├── Update User
└── Delete User
```

When executed:

```text
Login
 ↓
Token Stored
 ↓
Create User
 ↓
User ID Stored
 ↓
Get User
 ↓
Update User
 ↓
Delete User
```

No manual intervention required.

---

## Common Chaining Scenarios

### Authentication Flow

```text
Login
 ↓
Get Token
 ↓
Store Token
 ↓
Access APIs
```

---

### User Management

```text
Create User
 ↓
Get User
 ↓
Update User
 ↓
Delete User
```

---

### Order Management

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

### Product Management

```text
Create Product
 ↓
Get Product
 ↓
Update Product
 ↓
Delete Product
```

---

## Debugging Request Chaining

### View Stored Variable

```javascript
console.log(
    pm.environment.get("userId")
);
```

---

### Print Response

```javascript
console.log(
    pm.response.json()
);
```

---

### Open Postman Console

```text
View
 ↓
Show Postman Console
```

Useful for troubleshooting.

---

## Best Practices

### Use Meaningful Variable Names

✅ Good

```text
userId
orderId
token
productId
```

❌ Bad

```text
x
a
temp1
```

---

### Extract Only Required Data

Store only necessary fields.

---

### Validate Before Storing

```javascript
pm.expect(
    response.id
).to.not.be.null;
```

---

### Keep Flows Logical

```text
Login
 ↓
Create
 ↓
Read
 ↓
Update
 ↓
Delete
```

---

## Module 13 Summary

### Quick Revision

#### Store Data

```javascript
pm.environment.set(
    "userId",
    response.id
);
```
---

#### Use Data

```http
GET /users/{{userId}}
```
---

#### Token Flow

```text
Login
 ↓
Get Token
 ↓
Store Token
 ↓
Use Token
```

---

#### CRUD Flow

```text
Create
 ↓
Read
 ↓
Update
 ↓
Delete
```

---

### Interview Formula

```text
Request Chaining =
Extract Data
      ↓
Store Variable
      ↓
Reuse Variable

response.id
      ↓
pm.environment.set()
      ↓
{{userId}}
```
---
---
# Module 14: Collection Runner

## Collection Runner Basics

### What is Collection Runner?

Collection Runner is a Postman feature used to execute multiple requests automatically.

Instead of running requests one by one:

```text
Login
Create User
Get User
Update User
Delete User
```

You can run them all together.

---

### Why Use Collection Runner?

Benefits:

* Execute multiple requests automatically
* Run complete API workflows
* Perform regression testing
* Data-driven testing
* Save time

---

### Manual Execution vs Collection Runner

#### Manual

```text
Request 1 → Run
Request 2 → Run
Request 3 → Run
Request 4 → Run
```

---

#### Collection Runner

```text
Click Run
      ↓
All Requests Execute Automatically
```

---

## Running Collections

### Example Collection

```text
User API Collection
|
├── Login
├── Create User
├── Get User
├── Update User
└── Delete User
```

---

### Steps to Run

1. Open Collection
2. Click Run Collection
3. Select Environment
4. Click Run

---

### Execution Flow

```text
Login
 ↓
Create User
 ↓
Get User
 ↓
Update User
 ↓
Delete User
```

---

## Request Execution Order

### How Order Works?

Collection Runner executes requests in the order they appear inside the collection.

---

### Example

Collection:

```text
1. Login
2. Create User
3. Get User
4. Delete User
```

Execution:

```text
Login
 ↓
Create User
 ↓
Get User
 ↓
Delete User
```

---

### Why Order Matters?

Many APIs depend on previous requests.

Example:

```text
Create User
 ↓
Get User
```

Correct.

---

```text
Get User
 ↓
Create User
```

Wrong.

---

## Collection Runner Results

### Example Output

```text
Request Name          Status

Login                 PASS
Create User           PASS
Get User              PASS
Delete User           PASS
```

---

### Failed Request

```text
Request Name          Status

Login                 PASS
Create User           FAIL
Get User              SKIPPED
```

---

## Iterations

### What is an Iteration?

An iteration means running the same collection multiple times.

---

### Example

Iterations = 3

```text
Run 1
 ↓
Run 2
 ↓
Run 3
```

Collection executes three times.

---

### Use Case

Load Testing (Basic)

```text
Create User
Create User
Create User
```

Repeated automatically.

---

## Data-Driven Testing

### What is Data-Driven Testing?

Executing the same requests using different test data.

Instead of hardcoding values:

```json
{
  "name": "Krishna"
}
```

Use external files.

---

### Benefits

* Reusable tests
* More coverage
* Less duplication
* Easier maintenance

---

## CSV Data Files

### What is CSV?

CSV = Comma Separated Values

Example:

```csv
name,email
Krishna,krishna@gmail.com
John,john@gmail.com
David,david@gmail.com
```

---

### Collection Request

Body:

```json
{
  "name": "{{name}}",
  "email": "{{email}}"
}
```

---

### Execution

Run 1:

```json
{
  "name": "Krishna",
  "email": "krishna@gmail.com"
}
```

---

Run 2:

```json
{
  "name": "John",
  "email": "john@gmail.com"
}
```

---

Run 3:

```json
{
  "name": "David",
  "email": "david@gmail.com"
}
```

---

## JSON Data Files

### Example JSON File

```json
[
  {
    "name": "Krishna",
    "email": "krishna@gmail.com"
  },
  {
    "name": "John",
    "email": "john@gmail.com"
  }
]
```

---

### Request Body

```json
{
  "name": "{{name}}",
  "email": "{{email}}"
}
```

---

### Execution

Collection Runner automatically reads each record.

---

## Using Variables with Collection Runner

### CSV File

```csv
userId
100
101
102
```

---

### Request

```http
GET /users/{{userId}}
```

---

### Executions

```http
GET /users/100
GET /users/101
GET /users/102
```

---

## Running Request Chains

### Example

```text
Login
 ↓
Create User
 ↓
Store User ID
 ↓
Get User
 ↓
Delete User
```

Collection Runner automatically executes the entire workflow.

---

## Collection Runner Summary Report

### Displays

* Total Requests
* Passed Tests
* Failed Tests
* Execution Time

---

### Example

```text
Requests: 10
Passed: 10
Failed: 0
Duration: 2.5 sec
```

---

## Common Use Cases

### Smoke Testing

```text
Verify critical APIs
```

---

### Regression Testing

```text
Verify all APIs after changes
```

---

### Data-Driven Testing

```text
Run same API with multiple inputs
```

---

### End-to-End Testing

```text
Login
 ↓
Create Order
 ↓
Get Order
 ↓
Delete Order
```

---

## Collection Runner vs Sending Requests Individually

| Individual Requests          | Collection Runner       |
| ---------------------------- | ----------------------- |
| Manual Execution             | Automatic Execution     |
| Time Consuming               | Faster                  |
| Limited Coverage             | Better Coverage         |
| Difficult for Large Projects | Easy for Large Projects |

---

## Best Practices

### Organize Requests Properly

```text
Login
 ↓
Create
 ↓
Read
 ↓
Update
 ↓
Delete
```

---

### Use Variables

Avoid hardcoded values.

Use:

```text
{{token}}
{{userId}}
{{orderId}}
```

---

### Validate Responses

Always include tests:

```javascript
pm.response.to.have.status(200);
```

---

### Use Data Files

For multiple test scenarios.

---

## Module 14 Summary

### Quick Revision

#### Run Collection

```text
Collection
   ↓
Run
   ↓
Automatic Execution
```

---

#### Data-Driven Testing

```text
CSV / JSON File
      ↓
Multiple Test Data
      ↓
Multiple Executions
```

---

#### Iterations

```text
Iteration = Number of Times Collection Runs
```

---

### Interview Formula

```text
Collection Runner =
Run Multiple Requests Automatically

Iteration =
Run Collection Multiple Times

Data-Driven Testing =
CSV/JSON + Variables

Execution Order =
Top to Bottom
```
---
---
# Module 15: Newman

## Introduction to Newman

### What is Newman?

**Newman** is the command-line version of Postman.

It allows you to run Postman Collections without opening the Postman application.

---

### Why Use Newman?

Normally:

```text
Open Postman
 ↓
Run Collection
 ↓
View Results
```

With Newman:

```text
Terminal
 ↓
Run Command
 ↓
Execute Collection
 ↓
Get Results
```

---

### Benefits of Newman

* Run collections from terminal
* Useful for automation
* Supports CI/CD
* Generate reports
* Faster execution
* Easy integration with Jenkins/GitHub Actions

---

## Installing Newman

### Prerequisite

Install Node.js first.

Check installation:

```bash
node -v
```

```bash
npm -v
```

---

### Install Newman

```bash
npm install -g newman
```

---

### Verify Installation

```bash
newman -v
```

Example:

```text
6.2.1
```

---

## Exporting Collection from Postman

### Steps

1. Open Collection
2. Click `...`
3. Click Export
4. Select Collection Format
5. Save File

Example:

```text
SimpleBooksCollection.json
```

---

## Running Collections

### Basic Command

```bash
newman run SimpleBooksCollection.json
```

---

### Execution Flow

```text
Collection
    ↓
Newman
    ↓
Requests Execute
    ↓
Results Displayed
```

---

## Sample Output

```text
→ Login
  GET /login [200 OK]

→ Create User
  POST /users [201 Created]

→ Get User
  GET /users/101 [200 OK]

✓ Status code is 200
✓ Response time below 500ms

Iterations: 1
Requests: 3
Test Scripts: 3
Assertions: 3
Failures: 0
```

---

## Environment Files

### What is an Environment File?

Contains variables used by the collection.

Example:

```json
{
  "values": [
    {
      "key": "baseUrl",
      "value": "https://simple-books-api.click"
    }
  ]
}
```

---

### Export Environment

1. Open Environment
2. Click Export
3. Save File

Example:

```text
SimpleBooksEnvironment.json
```

---

## Running Collection with Environment

### Command

```bash
newman run SimpleBooksCollection.json -e SimpleBooksEnvironment.json
```

---

### Flow

```text
Collection
      +
Environment
      ↓
Newman Execution
```

---

## Running Specific Folder

### Example Collection

```text
Simple Books API
|
├── Authentication
├── Books
└── Orders
```

---

### Run Only Orders Folder

```bash
newman run SimpleBooksCollection.json --folder Orders
```

---

## Running Multiple Iterations

### Example

Run collection 5 times:

```bash
newman run SimpleBooksCollection.json -n 5
```

---

### Output

```text
Iteration 1
Iteration 2
Iteration 3
Iteration 4
Iteration 5
```

---

## Using Data Files

### CSV Example

```csv
name,email
Krishna,krishna@gmail.com
John,john@gmail.com
```

---

### Command

```bash
newman run SimpleBooksCollection.json \
-d users.csv
```

---

### Execution

```text
Run 1 → Krishna
Run 2 → John
```

---

## JSON Data File

### Example

```json
[
  {
    "name": "Krishna"
  },
  {
    "name": "John"
  }
]
```

---

### Command

```bash
newman run SimpleBooksCollection.json \
-d users.json
```

---

## Newman Reporters

### What is a Reporter?

A reporter controls how test results are displayed.

---

### CLI Reporter

Default output.

```bash
newman run collection.json
```

Displays results in terminal.

---

### JSON Reporter

```bash
newman run collection.json \
-r json
```

Creates JSON report.

---

### JUnit Reporter

```bash
newman run collection.json \
-r junit
```

Creates JUnit report.

Useful in Jenkins.

---

## HTML Reports

### Why HTML Reports?

HTML reports are easier to read and share.

---

### Install HTML Reporter

```bash
npm install -g newman-reporter-htmlextra
```

---

### Generate HTML Report

```bash
newman run collection.json \
-r htmlextra
```

---

### Output

```text
newman/
└── report.html
```

---

### Open Report

```text
Browser
 ↓
report.html
```

Shows:

* Requests
* Assertions
* Passed Tests
* Failed Tests
* Execution Time

---

## Common Newman Commands

### Run Collection

```bash
newman run collection.json
```

---

### Run with Environment

```bash
newman run collection.json \
-e environment.json
```

---

### Run Folder

```bash
newman run collection.json \
--folder Orders
```

---

### Run Iterations

```bash
newman run collection.json \
-n 10
```

---

### Run with CSV

```bash
newman run collection.json \
-d users.csv
```

---

### Generate HTML Report

```bash
newman run collection.json \
-r htmlextra
```

---

## Newman Execution Flow

### Real Project Example

```text
Login
 ↓
Store Token
 ↓
Create User
 ↓
Store User ID
 ↓
Get User
 ↓
Delete User
```

---

### Using Newman

```bash
newman run UserCollection.json
```

---

### Result

```text
All Requests Executed
All Tests Validated
Summary Generated
```

---

## Newman in Automation

### Manual Execution

```text
Open Postman
 ↓
Run Collection
```

---

### Automated Execution

```text
Git Push
 ↓
CI/CD Pipeline
 ↓
Newman Executes
 ↓
Report Generated
```

---

## Advantages of Newman

### Automation

Collections run automatically.

---

### Scheduling

Can run on servers.

---

### CI/CD Integration

Works with:

* Jenkins
* GitHub Actions
* GitLab CI
* Azure DevOps

---

### Reporting

Generates detailed reports.

---

## Newman vs Postman

| Postman              | Newman              |
| -------------------- | ------------------- |
| GUI Tool             | CLI Tool            |
| Manual Execution     | Automated Execution |
| Interactive          | Script Based        |
| Good for Development | Good for Automation |

---

## Best Practices

### Keep Collections Organized

```text
Authentication
Books
Orders
Users
```

---

### Use Environment Files

Avoid hardcoded URLs.

---

### Generate Reports

Always generate execution reports.

---

### Use in CI/CD

Automate collection execution.

---

## Module 15 Summary

### Quick Revision

#### Install

```bash
npm install -g newman
```

---

#### Run Collection

```bash
newman run collection.json
```

---

#### Environment

```bash
newman run collection.json \
-e environment.json
```

---

#### Data File

```bash
newman run collection.json \
-d users.csv
```

---

#### HTML Report

```bash
newman run collection.json \
-r htmlextra
```

---

### Interview Formula

```text
Postman = GUI API Testing Tool

Newman = CLI API Testing Tool

Collection
      ↓
Newman
      ↓
Execution
      ↓
Report

Install:
npm install -g newman
```
---
---
# Module 16: Reporting

## Test Execution Reports

### What is a Report?

A Report is a document that shows the results of API test execution.

It helps us understand:

* Which tests passed
* Which tests failed
* Execution time
* Error details
* Overall test summary

---

### Why Reporting is Important?

Without reports:

```text
Collection Executed
↓
No Visibility
```

With reports:

```text
Collection Executed
↓
Report Generated
↓
Pass/Fail Analysis
```

---

### Benefits of Reports

* Track test results
* Identify failures quickly
* Share results with team
* Maintain execution history
* Support CI/CD pipelines

---

## Understanding Test Results

### Example Collection

```text
Login
Create User
Get User
Delete User
```

---

### Execution Result

```text
Login         PASS
Create User   PASS
Get User      PASS
Delete User   PASS
```

---

### Summary

```text
Total Requests : 4
Passed         : 4
Failed         : 0
Duration       : 1.5 sec
```

---

## Report Components

### Request Details

Shows:

```text
Request Name
URL
Method
Status Code
Response Time
```

---

### Assertion Results

Example:

```text
✓ Status Code is 200
✓ Response Time < 500 ms
✓ User Created Successfully
```

---

### Failure Information

Example:

```text
✗ Status Code is 200
Expected: 200
Actual: 404
```

---

### Execution Statistics

Example:

```text
Requests : 10
Assertions : 25
Passed : 24
Failed : 1
```

---

## Pass and Fail Status

### Pass

A test passes when expected and actual results match.

Example:

```javascript
pm.expect(response.id)
  .to.eql(101);
```

Expected:

```text
101
```

Actual:

```text
101
```

Result:

```text
PASS
```

---

### Fail

Example:

```javascript
pm.expect(response.id)
  .to.eql(101);
```

Expected:

```text
101
```

Actual:

```text
102
```

Result:

```text
FAIL
```

---

## Common Failure Examples

### Wrong Status Code

Expected:

```text
200
```

Actual:

```text
404
```

---

### Wrong Response Body

Expected:

```json
{
  "name": "Krishna"
}
```

Actual:

```json
{
  "name": "John"
}
```

---

### Response Time Failure

Expected:

```text
< 500 ms
```

Actual:

```text
800 ms
```

---

## Newman Reports

### Default CLI Report

Command:

```bash
newman run collection.json
```

---

### Output

```text
→ Login

GET /login [200 OK]

✓ Status code is 200

→ Create User

POST /users [201 Created]

✓ User Created

Requests: 2
Assertions: 2
Failures: 0
```

---

## Report Analysis

### What to Check?

#### Total Requests

Example:

```text
10
```

---

#### Passed Tests

Example:

```text
9
```

---

#### Failed Tests

Example:

```text
1
```

---

#### Failure Reason

Example:

```text
Expected 200
Received 404
```

---

#### Execution Time

Example:

```text
2.5 seconds
```

---

## HTML Reports

### What is an HTML Report?

A browser-friendly report generated after execution.

---

### Why Use HTML Reports?

Compared to CLI output:

```text
CLI
↓
Text Only
```

HTML:

```text
Interactive
Readable
Shareable
```

---

## Installing HTML Reporter

### Command

```bash
npm install -g newman-reporter-htmlextra
```

---

## Generating HTML Reports

### Command

```bash
newman run collection.json -r htmlextra
```

---

### Output

```text
report.html
```

---

### Open Report

```text
Double Click
↓
Browser Opens
↓
View Report
```

---

## HTML Report Contents

### Execution Summary

Example:

```text
Requests : 20
Passed   : 20
Failed   : 0
```

---

### Request Details

Example:

```text
Login
Create User
Get User
Delete User
```

---

### Assertion Details

Example:

```text
✓ Status Code Validation

✓ Response Validation

✓ Response Time Validation
```

---

### Failure Details

Example:

```text
Expected : 200
Actual   : 404
```

---

## Report Types

### CLI Report

Generated in terminal.

Example:

```bash
newman run collection.json
```

---

### JSON Report

Generated as JSON file.

Example:

```bash
newman run collection.json -r json
```

---

### JUnit Report

Used in Jenkins.

Example:

```bash
newman run collection.json -r junit
```

---

### HTML Report

Used for human-readable reports.

Example:

```bash
newman run collection.json -r htmlextra
```

---

## Reporting in Real Projects

### Example Workflow

```text
Developer Pushes Code
        ↓
CI/CD Pipeline Starts
        ↓
Newman Executes APIs
        ↓
Report Generated
        ↓
QA Reviews Results
```

---

## Reading Failures

### Example Failure

```text
Test:
Status Code is 200

Expected:
200

Actual:
500
```

Meaning:

```text
Server Error
```

---

### Example Failure

```text
Response Time Below 500ms

Expected:
< 500

Actual:
800
```

Meaning:

```text
Performance Issue
```

---

## Report Sharing

### Share With

* QA Team
* Developers
* Managers
* Clients

---

### Common Formats

```text
HTML
JSON
JUnit XML
```

---

## Metrics Commonly Reviewed

### Total Requests

Example:

```text
50
```

---

### Passed Tests

Example:

```text
48
```

---

### Failed Tests

Example:

```text
2
```

---

### Success Rate

Formula:

```text
(Passed / Total) × 100
```

Example:

```text
48 / 50 × 100

96%
```

---

### Average Response Time

Example:

```text
250 ms
```

---

## Best Practices

### Generate Reports After Every Run

Helps track quality.

---

### Investigate Failed Tests

Do not ignore failures.

---

### Store Reports

Useful for audit and history.

---

### Use HTML Reports

Easier for stakeholders to understand.

---

## Module 16 Summary

### Quick Revision

#### Generate Report

```bash
newman run collection.json
```

---

#### Generate HTML Report

```bash
newman run collection.json -r htmlextra
```

---

#### Report Contains

```text
Requests
Assertions
Pass Count
Fail Count
Execution Time
```

---

### Interview Formula

```text
Collection
     ↓
Newman
     ↓
Execution
     ↓
Report

Report =
Passes
Failures
Assertions
Execution Time

Best Report =
HTML Report
```
---
---
# Module 17: Monitoring

## Postman Monitors

### What is Monitoring?

Monitoring is the process of automatically running API tests at scheduled intervals to check whether APIs are working properly.

Instead of manually testing APIs:

```text
Tester
  ↓
Run Collection
  ↓
Check Result
```

Monitoring automates this process.

```text
Monitor
  ↓
Run Collection Automatically
  ↓
Check Result
  ↓
Send Alert if Failure
```

---

### What is a Postman Monitor?

A Postman Monitor is a feature that executes a collection automatically on a schedule.

Examples:

* Every 5 minutes
* Every 1 hour
* Every day
* Every week

---

### Why Use Monitors?

Monitors help:

* Detect API failures quickly
* Ensure APIs are always available
* Track API performance
* Receive alerts automatically

---

## How Monitors Work

### Workflow

```text
Collection
      ↓
Monitor
      ↓
Scheduled Execution
      ↓
Results
      ↓
Notifications
```

---

### Example

Monitor executes:

```text
GET /status
```

Expected:

```text
200 OK
```

If API returns:

```text
500 Internal Server Error
```

Monitor reports failure.

---

## Creating a Monitor

### Steps

1. Create Collection
2. Add Tests
3. Click Monitor
4. Select Schedule
5. Save Monitor

---

### Example Collection

```text
API Health Check
|
└── GET /status
```

---

### Test Script

```javascript
pm.test(
    "Status code is 200",
    function () {
        pm.response.to.have.status(200);
    }
);
```

---

## Scheduling Monitors

### Common Schedules

#### Every 5 Minutes

```text
00:05
00:10
00:15
```

---

#### Every Hour

```text
01:00
02:00
03:00
```

---

#### Daily

```text
09:00 AM
```

---

#### Weekly

```text
Every Monday
```

---

## Monitor Results

### Successful Execution

```text
Run #1

Status Code: 200
Tests Passed: 3
Tests Failed: 0
```

---

### Failed Execution

```text
Run #2

Status Code: 500
Tests Passed: 2
Tests Failed: 1
```

---

## Monitoring API Availability

### Goal

Check whether API is available.

---

### Request

```http
GET /status
```

---

### Test

```javascript
pm.test(
    "API Available",
    function () {
        pm.response.to.have.status(200);
    }
);
```

---

### Monitoring Flow

```text
Monitor
    ↓
Run API
    ↓
200 ?
    ↓
PASS
```

---

## Monitoring Response Time

### Goal

Verify API performance.

---

### Test

```javascript
pm.test(
    "Response Time",
    function () {

        pm.expect(
            pm.response.responseTime
        ).to.be.below(500);

    }
);
```

---

### Example

Expected:

```text
< 500 ms
```

Actual:

```text
300 ms
```

Result:

```text
PASS
```

---

### Failure Example

Expected:

```text
< 500 ms
```

Actual:

```text
1200 ms
```

Result:

```text
FAIL
```

---

## Monitoring Response Data

### Example Response

```json
{
  "status": "UP"
}
```

---

### Validation

```javascript
let response =
    pm.response.json();

pm.expect(
    response.status
).to.eql("UP");
```

---

### Result

```text
PASS
```

---

## Notifications and Alerts

### Why Alerts?

If APIs fail, the team should know immediately.

---

### Example

Monitor detects:

```text
500 Internal Server Error
```

---

### Notification Sent

```text
API Health Check Failed
```

---

### Benefits

* Faster issue detection
* Reduced downtime
* Better reliability

---

## Common Monitoring Scenarios

### Health Check Monitoring

```http
GET /status
```

Verify:

```text
200 OK
```

---

### Authentication Monitoring

```http
POST /login
```

Verify:

```text
Token Generated
```

---

### User API Monitoring

```http
GET /users
```

Verify:

```text
Response Returned
```

---

### Order API Monitoring

```http
GET /orders
```

Verify:

```text
Status 200
```

---

## Monitoring vs Collection Runner

| Collection Runner     | Monitor               |
| --------------------- | --------------------- |
| Manual Execution      | Scheduled Execution   |
| Run Once              | Runs Repeatedly       |
| User Starts Execution | Automatic             |
| Testing Purpose       | Production Monitoring |

---

## Monitoring in Real Projects

### Example

E-commerce Application

Critical APIs:

```text
Login API
Product API
Order API
Payment API
```

---

### Monitoring Flow

```text
Every 15 Minutes

Login API
      ↓
Product API
      ↓
Order API
      ↓
Payment API
```

If any API fails:

```text
Alert Generated
```

---

## Monitoring Dashboard

### Information Displayed

```text
Monitor Name
Run Time
Status
Pass Count
Fail Count
Response Time
```

---

### Example

```text
API Health Check

Runs: 100
Passed: 98
Failed: 2
```

---

## Key Metrics

### Availability

Formula:

```text
Successful Runs
----------------
Total Runs
```

---

### Success Rate

Example:

```text
98/100

98%
```

---

### Response Time

Example:

```text
Average: 250 ms
```

---

### Failure Count

Example:

```text
2 Failures
```

---

## Best Practices

### Monitor Critical APIs

Examples:

```text
Login
Payments
Orders
Authentication
```

---

### Validate Response Time

Performance issues should be detected early.

---

### Add Meaningful Assertions

Example:

```javascript
pm.expect(
    response.status
).to.eql("UP");
```

---

### Review Alerts Regularly

Investigate failures immediately.

---

## Advantages of Monitoring

### Early Detection

Problems found before users report them.

---

### Automation

No manual testing required.

---

### Performance Tracking

Monitor API speed.

---

### Reliability

Improves system stability.

---

## Module 17 Summary

### Quick Revision

#### Monitor Flow

```text
Collection
     ↓
Monitor
     ↓
Scheduled Execution
     ↓
Results
     ↓
Alerts
```

---

#### Common Validations

```javascript
pm.response.to.have.status(200);

pm.expect(
  pm.response.responseTime
).to.be.below(500);
```

---

### Interview Formula

```text
Monitor =
Scheduled Collection Execution

Purpose =
Availability
Performance
Reliability

Key Metrics =
Success Rate
Response Time
Failures

Collection Runner = Manual

Monitor = Automatic
```
---
---
# Module 18: CI/CD Integration

## CI/CD Fundamentals

### What is CI?

**CI** stands for **Continuous Integration**.

Developers frequently merge code changes into a shared repository, and automated tests run to verify that nothing is broken.

---

### CI Workflow

```text
Developer Writes Code
        ↓
Push to Git Repository
        ↓
Build Starts
        ↓
Automated Tests Run
        ↓
Result Generated
```

---

### Benefits of CI

* Early bug detection
* Faster feedback
* Better code quality
* Reduced integration issues

---

## What is CD?

**CD** stands for **Continuous Delivery** or **Continuous Deployment**.

After successful testing, the application is automatically prepared or deployed.

---

### CD Workflow

```text
Build Success
      ↓
Tests Pass
      ↓
Deploy Application
      ↓
Production
```

---

## CI vs CD

| CI                        | CD                             |
| ------------------------- | ------------------------------ |
| Continuous Integration    | Continuous Delivery/Deployment |
| Focus on Code Integration | Focus on Deployment            |
| Build & Test              | Release & Deploy               |

---

## Why API Testing in CI/CD?

Without automation:

```text
Developer Changes Code
        ↓
Tester Manually Runs APIs
        ↓
Time Consuming
```

---

With CI/CD:

```text
Developer Pushes Code
        ↓
Pipeline Starts
        ↓
API Tests Run Automatically
        ↓
Report Generated
```

---

## Postman in CI/CD

### How Postman Fits

```text
Postman Collection
        ↓
Export Collection
        ↓
Newman
        ↓
CI/CD Pipeline
```

---

### Workflow

```text
Postman Collection
        ↓
Newman Execution
        ↓
Pass / Fail
        ↓
Deployment Decision
```

---

## Newman in CI/CD

### Why Newman?

CI/CD servers cannot open the Postman GUI.

They use Newman to execute collections.

---

### Command

```bash
newman run collection.json
```

---

### Pipeline Flow

```text
Git Push
   ↓
Jenkins/GitHub Actions
   ↓
Newman Executes
   ↓
Tests Run
   ↓
Report Generated
```

---

## Jenkins Overview

### What is Jenkins?

Jenkins is an open-source automation server used for:

* Build automation
* Test automation
* Deployment automation

---

### Jenkins Workflow

```text
Developer Pushes Code
         ↓
Jenkins Triggered
         ↓
Build
         ↓
Run Newman Tests
         ↓
Generate Report
         ↓
Deploy
```

---

## Running Newman in Jenkins

### Step 1

Install Newman on Jenkins server.

```bash
npm install -g newman
```

---

### Step 2

Store Collection Files

```text
collection.json
environment.json
```

---

### Step 3

Execute Newman

```bash
newman run collection.json \
-e environment.json
```

---

### Result

```text
PASS → Continue Deployment

FAIL → Stop Deployment
```

---

## GitHub Actions Overview

### What is GitHub Actions?

Part of [GitHub](https://github.com?utm_source=chatgpt.com) used to automate workflows.

---

### Workflow

```text
Git Push
      ↓
GitHub Action Triggered
      ↓
Run Newman
      ↓
Generate Report
      ↓
Success / Failure
```

---

## Example GitHub Actions Pipeline

### Workflow File

```yaml
name: API Tests

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Install Newman
        run: npm install -g newman

      - name: Run Collection
        run: newman run collection.json
```

---

### What Happens?

```text
Code Push
     ↓
Install Newman
     ↓
Run Collection
     ↓
Display Results
```

---

## Automated API Testing Pipeline

### Complete Flow

```text
Developer
    ↓
Git Push
    ↓
CI Server
    ↓
Build Application
    ↓
Run API Tests
    ↓
Generate Report
    ↓
Deploy Application
```

---

## API Testing Gate

### Purpose

Prevent deployment when tests fail.

---

### Example

```text
API Tests Passed
       ↓
Deploy
```

---

```text
API Tests Failed
       ↓
Stop Deployment
```

---

## Real Project Example

### E-Commerce Application

Critical APIs:

```text
Login API
Product API
Order API
Payment API
```

---

### Pipeline

```text
Developer Push
       ↓
Build
       ↓
Run Newman
       ↓
Login API Test
       ↓
Product API Test
       ↓
Order API Test
       ↓
Payment API Test
       ↓
Deploy
```

---

## Reports in CI/CD

### Generated Automatically

Examples:

```text
HTML Report
JSON Report
JUnit Report
```

---

### Used By

* QA Team
* Developers
* Managers

---

## Common CI/CD Tools

### CI Tools

* Jenkins
* [GitHub Actions](https://github.com/features/actions?utm_source=chatgpt.com)
* [GitLab CI/CD](https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/?utm_source=chatgpt.com)
* [Azure DevOps](https://azure.microsoft.com/en-us/products/devops?utm_source=chatgpt.com)

---

### Testing Tool

* Postman
* Newman

---

### Source Control

* [GitHub](https://github.com?utm_source=chatgpt.com)
* [GitLab](https://gitlab.com?utm_source=chatgpt.com)

---

## Advantages of CI/CD API Testing

### Faster Feedback

Developers know immediately if APIs fail.

---

### Better Quality

Issues detected before production.

---

### Reduced Manual Effort

No manual execution required.

---

### Continuous Testing

Tests run on every code change.

---

## Best Practices

### Run API Tests on Every Build

Detect failures early.

---

### Keep Collections Updated

Reflect latest API changes.

---

### Use Environment Files

Avoid hardcoded URLs.

---

### Generate Reports

Maintain execution history.

---

### Stop Deployment on Failure

Protect production environments.

---

## Module 18 Summary

### Quick Revision

#### CI Flow

```text
Code Push
    ↓
Build
    ↓
Test
```

---

#### CD Flow

```text
Tests Pass
     ↓
Deploy
```

---

#### API Testing Flow

```text
Postman Collection
        ↓
Newman
        ↓
CI/CD Pipeline
        ↓
Pass/Fail
```

---

### Interview Formula

```text
CI = Build + Test

CD = Release + Deploy

Postman Collection
        ↓
Newman
        ↓
Jenkins/GitHub Actions
        ↓
Automated API Testing

PASS → Deploy

FAIL → Stop Deployment
```

# Postman Course Complete 🎉

You now have a complete path covering:

1. Introduction to Postman
2. HTTP Fundamentals
3. Building API Requests
4. Parameters
5. Authentication
6. JSON
7. Collections
8. Variables
9. Postman Scripts
10. API Testing
11. Assertions
12. Data Extraction
13. Request Chaining
14. Collection Runner
15. Newman
16. Reporting
17. Monitoring
18. CI/CD Integration

For your QA Automation roadmap (**Java → SQL → Manual Testing → JUnit → Postman → REST Assured → Selenium**), the next logical topic is **REST Assured**, because it uses the same API concepts you've learned in Postman but automates them using Java.

---
---