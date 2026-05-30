# Module 1: Introduction to Automation Testing

## What is Automation Testing?

### Definition

Automation Testing is a software testing technique where test cases are executed using automation tools and scripts instead of manual human effort.

### Purpose

* Reduce repetitive manual work
* Increase testing speed
* Improve accuracy
* Save time and cost

### Example

Instead of manually logging into a website every time testing is required, an automation script can perform the login automatically.

---

## Manual Testing vs Automation Testing

### Manual Testing

Manual Testing is the process of testing software manually without using any automation tools.

### Automation Testing

Automation Testing is the process of testing software using tools and scripts.

### Differences

| Manual Testing              | Automation Testing             |
| --------------------------- | ------------------------------ |
| Performed by humans         | Performed by tools/scripts     |
| Time-consuming              | Faster execution               |
| Suitable for small projects | Suitable for large projects    |
| More chances of human error | More accurate                  |
| No programming required     | Programming knowledge required |

---

## Advantages of Automation Testing

### Faster Execution

Automated tests run much faster than manual tests.

### Reusability

Scripts can be reused multiple times.

### Accuracy

Reduces human errors during testing.

### Cost Effective

Saves time and resources in the long run.

### Better Test Coverage

Large numbers of test cases can be executed efficiently.

### Supports Continuous Testing

Can be integrated with CI/CD pipelines.

---

## When to Automate?

### Suitable Scenarios

* Repetitive test cases
* Regression testing
* Smoke testing
* Data-driven testing
* Cross-browser testing
* Large projects

### Not Suitable Scenarios

* Frequently changing requirements
* One-time testing
* Exploratory testing
* Usability testing

---

## Automation Testing Life Cycle

### Requirement Analysis

Identify test cases suitable for automation.

### Tool Selection

Choose the appropriate automation tool.

### Framework Design

Create a structure for automation scripts.

### Test Script Development

Write automation scripts.

### Test Execution

Run the automation scripts.

### Result Analysis

Analyze test results and identify defects.

### Maintenance

Update scripts when application changes.

---

## Types of Automation Frameworks

### Linear Framework

#### Definition

A simple framework where test scripts are written sequentially.

#### Advantages

* Easy to create
* Suitable for beginners

#### Disadvantages

* Difficult to maintain
* Low reusability

---

### Modular Framework

#### Definition

Application is divided into modules and separate scripts are created for each module.

#### Advantages

* Better maintainability
* Reusable modules

---

### Data-Driven Framework

#### Definition

Test data is stored externally (Excel, CSV, Database).

#### Advantages

* Easy data management
* Supports multiple test scenarios

---

### Keyword-Driven Framework

#### Definition

Actions are controlled using keywords.

#### Example

| Keyword   | Action          |
| --------- | --------------- |
| Click     | Click Button    |
| EnterText | Enter Data      |
| Select    | Select Dropdown |

---

### Hybrid Framework

#### Definition

Combination of multiple frameworks such as Data-Driven and Keyword-Driven.

#### Advantages

* Flexible
* Highly scalable
* Most commonly used in real projects

---

## Introduction to Selenium

### Definition

Selenium is an open-source automation testing tool used to automate web applications.

### Features

* Open source
* Cross-browser support
* Cross-platform support
* Multiple language support
* Easy integration with frameworks

### Supported Browsers

* Chrome
* Firefox
* Edge
* Safari
* Opera

---

## Selenium Components

### Selenium IDE

#### Definition

A record-and-playback tool used for creating simple automation tests.

#### Features

* No coding required
* Easy for beginners
* Quick test creation

---

### Selenium WebDriver

#### Definition

A component used to automate browser interactions directly.

#### Features

* Supports multiple browsers
* Supports multiple programming languages
* Most widely used Selenium component

---

### Selenium Grid

#### Definition

A tool used to run tests on multiple browsers and machines simultaneously.

#### Benefits

* Parallel execution
* Faster test execution
* Cross-browser testing

---
---

# Module 2: Java Basics for Selenium

## Java Introduction

### Definition

Java is a high-level, object-oriented programming language used to develop desktop, web, mobile, and enterprise applications.

### Features

* Platform Independent
* Object-Oriented
* Secure
* Robust
* Portable
* Multithreaded

### Why Java for Selenium?

* Most commonly used language with Selenium
* Large community support
* Easy integration with Selenium, TestNG, Maven, and Jenkins

---

## Variables and Data Types

### Variable

#### Definition

A variable is a container used to store data values.

#### Syntax

```java
dataType variableName = value;
```

#### Example

```java
int age = 25;
String name = "Krishna";
```

---

### Primitive Data Types

#### int

```java
int num = 100;
```

#### double

```java
double salary = 25000.50;
```

#### char

```java
char grade = 'A';
```

#### boolean

```java
boolean status = true;
```

---

### Non-Primitive Data Types

#### String

```java
String name = "Selenium";
```

#### Array

```java
int[] numbers = {10, 20, 30};
```

---

## Operators

### Arithmetic Operators

#### Operators

* *
* *
* *
* /
* %

#### Example

```java
int a = 10;
int b = 5;

System.out.println(a + b);
System.out.println(a - b);
System.out.println(a * b);
System.out.println(a / b);
```

---

### Relational Operators

#### Operators

* ==
* !=
* >
* <
* > =
* <=

#### Example

```java
System.out.println(10 > 5);
System.out.println(10 == 5);
```

---

### Logical Operators

#### Operators

* &&
* ||
* !

#### Example

```java
boolean a = true;
boolean b = false;

System.out.println(a && b);
System.out.println(a || b);
```

---

## Conditional Statements

### if Statement

#### Syntax

```java
if(condition){
    // code
}
```

#### Example

```java
int age = 18;

if(age >= 18){
    System.out.println("Eligible");
}
```

---

### if-else Statement

#### Syntax

```java
if(condition){
    // code
}
else{
    // code
}
```

#### Example

```java
int age = 15;

if(age >= 18){
    System.out.println("Eligible");
}
else{
    System.out.println("Not Eligible");
}
```

---

### switch Statement

#### Syntax

```java
switch(value){
    case 1:
        break;
    default:
}
```

#### Example

```java
int day = 2;

switch(day){
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    default:
        System.out.println("Invalid");
}
```

---

## Loops

### for Loop

#### Syntax

```java
for(initialization; condition; increment){
    // code
}
```

#### Example

```java
for(int i=1; i<=5; i++){
    System.out.println(i);
}
```

---

### while Loop

#### Syntax

```java
while(condition){
    // code
}
```

#### Example

```java
int i = 1;

while(i <= 5){
    System.out.println(i);
    i++;
}
```

---

### do-while Loop

#### Syntax

```java
do{
    // code
}
while(condition);
```

#### Example

```java
int i = 1;

do{
    System.out.println(i);
    i++;
}
while(i <= 5);
```

---

## Arrays

### Definition

An array is used to store multiple values of the same data type.

### Syntax

```java
dataType[] arrayName;
```

### Example

```java
int[] numbers = {10, 20, 30, 40};

System.out.println(numbers[0]);
```

### Array Traversal

```java
int[] numbers = {10, 20, 30};

for(int i=0; i<numbers.length; i++){
    System.out.println(numbers[i]);
}
```

---

## Strings

### Definition

A String is a sequence of characters enclosed within double quotes.

### Example

```java
String name = "Selenium";
```

### Common Methods

#### length()

```java
String name = "Java";

System.out.println(name.length());
```

#### toUpperCase()

```java
System.out.println(name.toUpperCase());
```

#### toLowerCase()

```java
System.out.println(name.toLowerCase());
```

#### contains()

```java
System.out.println(name.contains("av"));
```

#### equals()

```java
System.out.println(name.equals("Java"));
```

---

## Methods

### Definition

A method is a block of code that performs a specific task.

### Syntax

```java
returnType methodName(){
    // code
}
```

### Example

```java
public void display(){
    System.out.println("Hello");
}
```

### Method with Parameters

```java
public void add(int a, int b){
    System.out.println(a + b);
}
```

---

## Constructors

### Definition

A constructor is a special method used to initialize objects.

### Characteristics

* Same name as class
* No return type
* Called automatically when object is created

### Example

```java
class Student{

    Student(){
        System.out.println("Constructor Called");
    }
}
```

---

## OOP Concepts

### Class and Object

#### Class

```java
class Student{
    String name;
}
```

#### Object

```java
Student s = new Student();
```

---

### Inheritance

#### Definition

Inheritance allows one class to acquire properties and methods of another class.

#### Example

```java
class Animal{
    void sound(){
        System.out.println("Animal Sound");
    }
}

class Dog extends Animal{
}
```

---

### Polymorphism

#### Definition

Polymorphism allows one method to perform different tasks.

#### Method Overloading

```java
class Demo{

    void add(int a, int b){
    }

    void add(int a, int b, int c){
    }
}
```

---

### Abstraction

#### Definition

Abstraction hides implementation details and shows only functionality.

#### Example

```java
abstract class Vehicle{

    abstract void start();
}
```

---

### Encapsulation

#### Definition

Encapsulation binds data and methods together.

#### Example

```java
class Employee{

    private int id;

    public void setId(int id){
        this.id = id;
    }

    public int getId(){
        return id;
    }
}
```

---

## Exception Handling

### Definition

Exception Handling is used to handle runtime errors and prevent program termination.

### try-catch

```java
try{
    int result = 10/0;
}
catch(Exception e){
    System.out.println(e);
}
```

### finally

```java
finally{
    System.out.println("Executed");
}
```

---

## Collections Framework

### ArrayList

#### Definition

ArrayList is a dynamic array used to store multiple values.

#### Example

```java
import java.util.ArrayList;

ArrayList<String> list = new ArrayList<>();

list.add("Java");
list.add("Selenium");

System.out.println(list);
```

---

### HashSet

#### Definition

HashSet stores unique values.

#### Example

```java
import java.util.HashSet;

HashSet<String> set = new HashSet<>();

set.add("Java");
set.add("Java");

System.out.println(set);
```

---

### HashMap

#### Definition

HashMap stores data as key-value pairs.

#### Example

```java
import java.util.HashMap;

HashMap<Integer,String> map = new HashMap<>();

map.put(1,"Java");
map.put(2,"Selenium");
```

---
---
# Module 3: Selenium WebDriver Setup

## Java Installation

### Definition

Java is required to write and execute Selenium automation scripts.

### Steps to Install Java

1. Download JDK from Oracle website.
2. Install JDK.
3. Configure Environment Variables.
4. Verify installation.

### Verify Installation

```bash
java -version
```

### Expected Output

```text
java version "21.x.x"
```

---

## JDK Configuration

### JAVA_HOME

#### Definition

JAVA_HOME is an environment variable that points to the JDK installation directory.

### Example

```text
JAVA_HOME=C:\Program Files\Java\jdk-21
```

### Verify JAVA_HOME

```bash
echo %JAVA_HOME%
```

---

## IDE Setup

### Eclipse Installation

#### Definition

Eclipse is an Integrated Development Environment (IDE) used to write Java code.

### Steps

1. Download Eclipse IDE.
2. Install Eclipse.
3. Launch Eclipse.
4. Create a Java Project.

---

### IntelliJ IDEA Installation

#### Definition

IntelliJ IDEA is another popular IDE for Java development.

### Steps

1. Download IntelliJ IDEA.
2. Install IntelliJ.
3. Create a Java Project.
4. Configure JDK.

---

## Maven Installation

### Definition

Maven is a build automation and dependency management tool.

### Advantages

* Dependency Management
* Build Automation
* Easy Project Structure
* Plugin Support

### Verify Maven Installation

```bash
mvn -version
```

### Expected Output

```text
Apache Maven 3.x.x
```

---

## Selenium Dependency Setup

### Creating Maven Project

### Project Structure

```text
Project
│
├── src/test/java
├── src/main/java
├── pom.xml
```

---

### Add Selenium Dependency

#### pom.xml

```xml
<dependencies>

    <dependency>
        <groupId>org.seleniumhq.selenium</groupId>
        <artifactId>selenium-java</artifactId>
        <version>4.33.0</version>
    </dependency>

</dependencies>
```

---

## WebDriver Architecture

### Definition

WebDriver acts as a bridge between Selenium scripts and browsers.

### Architecture Flow

```text
Selenium Script
       ↓
WebDriver API
       ↓
Browser Driver
       ↓
Browser
```

### Browser Drivers

| Browser | Driver       |
| ------- | ------------ |
| Chrome  | ChromeDriver |
| Firefox | GeckoDriver  |
| Edge    | EdgeDriver   |
| Safari  | SafariDriver |

---

## Selenium Manager

### Definition

Selenium Manager automatically downloads and manages browser drivers.

### Benefits

* No manual driver download
* No driver path configuration
* Simplifies setup

### Example

```java
WebDriver driver = new ChromeDriver();
```

No need to download ChromeDriver manually in Selenium 4.6+.

---

## Creating First Selenium Project

### Steps

1. Create Maven Project
2. Add Selenium Dependency
3. Create Java Class
4. Write Selenium Script
5. Execute Program

---

## First Selenium Script

### Launch Chrome Browser

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class FirstTest {

    public static void main(String[] args) {

        WebDriver driver = new ChromeDriver();

        driver.get("https://www.google.com");

        driver.quit();
    }
}
```

---

## Open URL

### Example

```java
driver.get("https://www.google.com");
```

### Purpose

Used to open a webpage.

---

## Get Page Title

### Example

```java
String title = driver.getTitle();

System.out.println(title);
```

### Purpose

Returns the title of the current webpage.

---

## Get Current URL

### Example

```java
String url = driver.getCurrentUrl();

System.out.println(url);
```

### Purpose

Returns the current webpage URL.

---

## Close Browser

### close()

```java
driver.close();
```

### Purpose

Closes the current browser window.

---

### quit()

```java
driver.quit();
```

### Purpose

Closes all browser windows and ends the WebDriver session.

---

## Understanding Maven Project Structure

### src/main/java

Contains application source code.

### src/test/java

Contains test scripts.

### pom.xml

Contains dependencies and project configuration.

### target

Contains compiled files and reports.

---

## Common Issues During Setup

### Java Not Recognized

#### Error

```text
'java' is not recognized as an internal or external command
```

#### Solution

Configure JAVA_HOME and Path variables correctly.

---

### Maven Not Recognized

#### Error

```text
'mvn' is not recognized as an internal or external command
```

#### Solution

Configure Maven Path variable correctly.

---

### Browser Driver Error

#### Error

```text
SessionNotCreatedException
```

#### Solution

* Update browser version
* Update Selenium dependency
* Ensure browser compatibility

---

## Selenium WebDriver Workflow

### Steps

1. Create WebDriver Object
2. Launch Browser
3. Open Application
4. Locate Elements
5. Perform Actions
6. Validate Results
7. Close Browser

### Example

```java
WebDriver driver = new ChromeDriver();

driver.get("https://www.google.com");

System.out.println(driver.getTitle());

driver.quit();
```

---
---
# Module 4: WebDriver Basics

## WebDriver Interface

### Definition

WebDriver is an interface in Selenium that provides methods to interact with web browsers.

### Example

```java
WebDriver driver = new ChromeDriver();
```

### Purpose

* Launch browser
* Open websites
* Perform actions
* Retrieve information
* Close browser

---

## Launch Browser

### Chrome Browser

```java
WebDriver driver = new ChromeDriver();
```

### Firefox Browser

```java
WebDriver driver = new FirefoxDriver();
```

### Edge Browser

```java
WebDriver driver = new EdgeDriver();
```

### Purpose

Creates a browser session and launches the specified browser.

---

## Open URL

### get()

#### Definition

Used to open a webpage URL.

#### Syntax

```java
driver.get("URL");
```

#### Example

```java
driver.get("https://www.google.com");
```

---

## Browser Information Commands

### getTitle()

#### Definition

Returns the title of the current webpage.

#### Syntax

```java
driver.getTitle();
```

#### Example

```java
String title = driver.getTitle();

System.out.println(title);
```

---

### getCurrentUrl()

#### Definition

Returns the current webpage URL.

#### Syntax

```java
driver.getCurrentUrl();
```

#### Example

```java
String url = driver.getCurrentUrl();

System.out.println(url);
```

---

### getPageSource()

#### Definition

Returns the complete HTML source code of the current page.

#### Syntax

```java
driver.getPageSource();
```

#### Example

```java
String source = driver.getPageSource();

System.out.println(source);
```

---

### getWindowHandle()

#### Definition

Returns the unique ID of the current browser window.

#### Example

```java
String windowID = driver.getWindowHandle();

System.out.println(windowID);
```

---

### getWindowHandles()

#### Definition

Returns IDs of all opened browser windows.

#### Example

```java
Set<String> windows = driver.getWindowHandles();
```

---

## Navigation Commands

### navigate().to()

#### Definition

Navigates to a specified URL.

#### Syntax

```java
driver.navigate().to("URL");
```

#### Example

```java
driver.navigate().to("https://www.google.com");
```

---

### navigate().back()

#### Definition

Moves back to the previous webpage.

#### Example

```java
driver.navigate().back();
```

---

### navigate().forward()

#### Definition

Moves forward to the next webpage.

#### Example

```java
driver.navigate().forward();
```

---

### navigate().refresh()

#### Definition

Refreshes the current webpage.

#### Example

```java
driver.navigate().refresh();
```

---

## Manage Window Commands

### maximize()

#### Definition

Maximizes browser window.

#### Example

```java
driver.manage().window().maximize();
```

---

### minimize()

#### Definition

Minimizes browser window.

#### Example

```java
driver.manage().window().minimize();
```

---

### fullscreen()

#### Definition

Opens browser in full-screen mode.

#### Example

```java
driver.manage().window().fullscreen();
```

---

## Manage Browser Cookies

### deleteAllCookies()

#### Definition

Deletes all cookies stored by the browser.

#### Example

```java
driver.manage().deleteAllCookies();
```

---

## Wait for Few Seconds

### Thread.sleep()

#### Definition

Pauses execution for a specified time.

#### Syntax

```java
Thread.sleep(milliseconds);
```

#### Example

```java
Thread.sleep(3000);
```

### Output

Waits for 3 seconds before executing the next statement.

---

## Close Browser Commands

### close()

#### Definition

Closes the currently active browser window.

#### Example

```java
driver.close();
```

---

### quit()

#### Definition

Closes all browser windows and ends WebDriver session.

#### Example

```java
driver.quit();
```

---

## Difference Between close() and quit()

| close()                                       | quit()                            |
| --------------------------------------------- | --------------------------------- |
| Closes current window                         | Closes all windows                |
| Session remains active if other windows exist | Ends WebDriver session completely |
| Used for single window                        | Used for complete cleanup         |

---

## Complete Example

### Launch Browser and Perform Basic Operations

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class WebDriverBasics {

    public static void main(String[] args) {

        WebDriver driver = new ChromeDriver();

        driver.manage().window().maximize();

        driver.get("https://www.google.com");

        System.out.println("Title : " + driver.getTitle());

        System.out.println("URL : " + driver.getCurrentUrl());

        driver.navigate().refresh();

        driver.quit();
    }
}
```

---

## Common WebDriver Methods

### Browser Commands

| Method          | Purpose              |
| --------------- | -------------------- |
| get()           | Open URL             |
| getTitle()      | Get page title       |
| getCurrentUrl() | Get current URL      |
| getPageSource() | Get HTML source      |
| close()         | Close current window |
| quit()          | Close all windows    |

---

### Navigation Commands

| Method               | Purpose      |
| -------------------- | ------------ |
| navigate().to()      | Open URL     |
| navigate().back()    | Go back      |
| navigate().forward() | Go forward   |
| navigate().refresh() | Refresh page |

---

### Window Commands

| Method       | Purpose             |
| ------------ | ------------------- |
| maximize()   | Maximize browser    |
| minimize()   | Minimize browser    |
| fullscreen() | Full-screen browser |

---
---
# Module 5: Locators

## What are Locators?

### Definition

Locators are used to identify and find web elements on a webpage so that Selenium can perform actions on them.

### Purpose

* Locate web elements
* Perform actions such as click, type, select, etc.
* Retrieve information from web pages

### Syntax

```java
driver.findElement(By.locator("value"));
```

### Example

```java
driver.findElement(By.id("username"));
```

---

## ID Locator

### Definition

ID locator identifies an element using its unique `id` attribute.

### Syntax

```java
driver.findElement(By.id("idValue"));
```

### Example

#### HTML

```html
<input id="username" type="text">
```

#### Selenium

```java
driver.findElement(By.id("username")).sendKeys("admin");
```

### Advantages

* Fastest locator
* Unique in most cases
* Recommended locator

---

## Name Locator

### Definition

Locates an element using the `name` attribute.

### Syntax

```java
driver.findElement(By.name("value"));
```

### Example

#### HTML

```html
<input name="email" type="text">
```

#### Selenium

```java
driver.findElement(By.name("email")).sendKeys("test@gmail.com");
```

---

## Class Name Locator

### Definition

Locates elements using the `class` attribute.

### Syntax

```java
driver.findElement(By.className("classValue"));
```

### Example

#### HTML

```html
<input class="input-field">
```

#### Selenium

```java
driver.findElement(By.className("input-field"));
```

### Limitation

If multiple elements share the same class name, Selenium returns the first matching element.

---

## Tag Name Locator

### Definition

Locates elements using HTML tag names.

### Syntax

```java
driver.findElement(By.tagName("tagName"));
```

### Example

```java
driver.findElement(By.tagName("a"));
```

### Usage

Commonly used to count links, buttons, tables, etc.

---

## Link Text Locator

### Definition

Locates a hyperlink using its complete visible text.

### Syntax

```java
driver.findElement(By.linkText("text"));
```

### Example

#### HTML

```html
<a href="#">Login</a>
```

#### Selenium

```java
driver.findElement(By.linkText("Login")).click();
```

---

## Partial Link Text Locator

### Definition

Locates a hyperlink using partial visible text.

### Syntax

```java
driver.findElement(By.partialLinkText("text"));
```

### Example

#### HTML

```html
<a href="#">Click Here To Login</a>
```

#### Selenium

```java
driver.findElement(By.partialLinkText("Login")).click();
```

---

## CSS Selector

### Definition

CSS Selector locates elements using CSS syntax.

### Advantages

* Faster than XPath
* Flexible and readable
* Widely used in automation

---

### CSS Using ID

#### HTML

```html
<input id="username">
```

#### Selenium

```java
driver.findElement(By.cssSelector("#username"));
```

---

### CSS Using Class

#### HTML

```html
<input class="input-field">
```

#### Selenium

```java
driver.findElement(By.cssSelector(".input-field"));
```

---

### CSS Using Tag and ID

```java
driver.findElement(By.cssSelector("input#username"));
```

---

### CSS Using Tag and Class

```java
driver.findElement(By.cssSelector("input.input-field"));
```

---

### CSS Using Attribute

#### HTML

```html
<input type="text">
```

#### Selenium

```java
driver.findElement(By.cssSelector("[type='text']"));
```

---

### CSS Using Multiple Attributes

```java
driver.findElement(By.cssSelector("input[type='text'][name='email']"));
```

---

## XPath

### Definition

XPath (XML Path Language) is used to locate elements using the HTML DOM structure.

### Advantages

* Handles dynamic elements
* Can traverse the DOM
* Supports functions and conditions

---

## Absolute XPath

### Definition

Starts from the root node and follows the complete path.

### Example

```xpath
/html/body/div/form/input
```

### Disadvantages

* Long
* Easily broken when UI changes

---

## Relative XPath

### Definition

Starts from anywhere in the DOM using `//`.

### Example

```xpath
//input[@id='username']
```

### Advantages

* Short
* Easy to maintain
* Most commonly used

---

## XPath Using Attribute

### Syntax

```xpath
//tagName[@attribute='value']
```

### Example

```xpath
//input[@id='username']
```

### Selenium

```java
driver.findElement(By.xpath("//input[@id='username']"));
```

---

## XPath Using Multiple Attributes

### Example

```xpath
//input[@type='text' and @name='email']
```

---

## XPath Using Text

### Example

```xpath
//button[text()='Login']
```

### HTML

```html
<button>Login</button>
```

---

## XPath Using contains()

### Definition

Used when attribute values are partially known.

### Example

```xpath
//input[contains(@id,'user')]
```

### HTML

```html
<input id="user123">
```

---

## XPath Using starts-with()

### Definition

Used when attribute values start with known text.

### Example

```xpath
//input[starts-with(@id,'user')]
```

---

## XPath Using text()

### Definition

Locates elements based on visible text.

### Example

```xpath
//a[text()='Register']
```

---

## XPath Using normalize-space()

### Definition

Removes extra spaces before matching text.

### Example

```xpath
//button[normalize-space()='Login']
```

---

## XPath Using AND Operator

### Example

```xpath
//input[@type='text' and @name='username']
```

---

## XPath Using OR Operator

### Example

```xpath
//input[@id='user' or @name='username']
```

---

## findElement()

### Definition

Returns a single web element.

### Syntax

```java
driver.findElement(By.id("username"));
```

### Example

```java
driver.findElement(By.id("username")).sendKeys("admin");
```

---

## findElements()

### Definition

Returns multiple matching elements.

### Syntax

```java
driver.findElements(By.tagName("a"));
```

### Example

```java
List<WebElement> links = driver.findElements(By.tagName("a"));

System.out.println(links.size());
```

---

## Locator Priority

### Recommended Order

1. ID
2. Name
3. CSS Selector
4. XPath
5. Class Name
6. Link Text
7. Tag Name

### Reason

ID and Name are generally faster and more stable.

---

## Complete Example

### Login Using Different Locators

```java
WebDriver driver = new ChromeDriver();

driver.get("https://example.com");

driver.findElement(By.id("username")).sendKeys("admin");

driver.findElement(By.name("password")).sendKeys("admin123");

driver.findElement(By.xpath("//button[text()='Login']")).click();

driver.quit();
```

---
---
# Module 6: WebElement Commands

## What is WebElement?

### Definition

WebElement is an interface in Selenium that represents an HTML element on a webpage.

### Purpose

* Perform actions on web elements
* Retrieve element information
* Validate element states

### Syntax

```java
WebElement element = driver.findElement(By.id("username"));
```

### Example

```java
WebElement username = driver.findElement(By.id("username"));
```

---

## click()

### Definition

Used to click on buttons, links, checkboxes, radio buttons, and other clickable elements.

### Syntax

```java
element.click();
```

### Example

```java
driver.findElement(By.id("loginBtn")).click();
```

### HTML

```html
<button id="loginBtn">Login</button>
```

---

## sendKeys()

### Definition

Used to enter text into input fields.

### Syntax

```java
element.sendKeys("text");
```

### Example

```java
driver.findElement(By.id("username")).sendKeys("admin");
```

### HTML

```html
<input id="username" type="text">
```

---

## clear()

### Definition

Removes existing text from input fields.

### Syntax

```java
element.clear();
```

### Example

```java
WebElement username = driver.findElement(By.id("username"));

username.clear();

username.sendKeys("admin");
```

---

## submit()

### Definition

Submits a form.

### Syntax

```java
element.submit();
```

### Example

```java
driver.findElement(By.id("loginForm")).submit();
```

### HTML

```html
<form id="loginForm">
</form>
```

---

## getText()

### Definition

Returns the visible text of an element.

### Syntax

```java
element.getText();
```

### Example

```java
String text = driver.findElement(By.tagName("h1")).getText();

System.out.println(text);
```

### HTML

```html
<h1>Welcome</h1>
```

### Output

```text
Welcome
```

---

## getAttribute()

### Definition

Returns the value of a specified attribute.

### Syntax

```java
element.getAttribute("attributeName");
```

### Example

```java
String placeholder =
driver.findElement(By.id("email"))
      .getAttribute("placeholder");

System.out.println(placeholder);
```

### HTML

```html
<input id="email" placeholder="Enter Email">
```

### Output

```text
Enter Email
```

---

## getTagName()

### Definition

Returns the tag name of an element.

### Syntax

```java
element.getTagName();
```

### Example

```java
String tag =
driver.findElement(By.id("username"))
      .getTagName();

System.out.println(tag);
```

### Output

```text
input
```

---

## getCssValue()

### Definition

Returns the value of a CSS property.

### Syntax

```java
element.getCssValue("property");
```

### Example

```java
String color =
driver.findElement(By.id("loginBtn"))
      .getCssValue("color");

System.out.println(color);
```

---

## isDisplayed()

### Definition

Checks whether an element is visible on the webpage.

### Syntax

```java
element.isDisplayed();
```

### Example

```java
boolean status =
driver.findElement(By.id("logo"))
      .isDisplayed();

System.out.println(status);
```

### Output

```text
true
```

---

## isEnabled()

### Definition

Checks whether an element is enabled.

### Syntax

```java
element.isEnabled();
```

### Example

```java
boolean status =
driver.findElement(By.id("submitBtn"))
      .isEnabled();

System.out.println(status);
```

---

## isSelected()

### Definition

Checks whether a checkbox, radio button, or option is selected.

### Syntax

```java
element.isSelected();
```

### Example

```java
boolean status =
driver.findElement(By.id("male"))
      .isSelected();

System.out.println(status);
```

---

## Working with Text Box

### Enter Text

```java
driver.findElement(By.id("username"))
      .sendKeys("admin");
```

### Clear Text

```java
driver.findElement(By.id("username"))
      .clear();
```

---

## Working with Button

### Click Button

```java
driver.findElement(By.id("loginBtn"))
      .click();
```

---

## Working with Link

### Click Link

```java
driver.findElement(By.linkText("Register"))
      .click();
```

---

## Retrieve Multiple Elements

### Example

```java
List<WebElement> links =
driver.findElements(By.tagName("a"));

System.out.println(links.size());
```

---

## Complete Example

### Login Form Automation

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginTest {

    public static void main(String[] args) {

        WebDriver driver = new ChromeDriver();

        driver.get("https://example.com");

        WebElement username =
                driver.findElement(By.id("username"));

        username.sendKeys("admin");

        WebElement password =
                driver.findElement(By.id("password"));

        password.sendKeys("admin123");

        driver.findElement(By.id("loginBtn")).click();

        driver.quit();
    }
}
```

---

## Commonly Used WebElement Methods

| Method         | Purpose                |
| -------------- | ---------------------- |
| click()        | Click element          |
| sendKeys()     | Enter text             |
| clear()        | Remove text            |
| submit()       | Submit form            |
| getText()      | Get visible text       |
| getAttribute() | Get attribute value    |
| getTagName()   | Get tag name           |
| getCssValue()  | Get CSS property value |
| isDisplayed()  | Check visibility       |
| isEnabled()    | Check enabled status   |
| isSelected()   | Check selection status |

---

## Difference Between getText() and getAttribute()

| getText()               | getAttribute()              |
| ----------------------- | --------------------------- |
| Returns visible text    | Returns attribute value     |
| Works on displayed text | Works on HTML attributes    |
| Example: Welcome        | Example: placeholder, value |

### Example

#### HTML

```html
<input id="email" value="admin@gmail.com">
```

```java
driver.findElement(By.id("email"))
      .getAttribute("value");
```

Output:

```text
admin@gmail.com
```

---
---
# Module 7: Waits

## What are Waits?

### Definition

Waits are used to synchronize Selenium with web applications by making the script wait until a specific condition is met.

### Why Waits are Required?

* Web pages load dynamically
* Elements may take time to appear
* Network delays can occur
* Prevents `NoSuchElementException`
* Improves test stability

### Example

```java
driver.findElement(By.id("loginBtn")).click();
```

If the element is not loaded yet, Selenium may throw an exception.

---

## Types of Waits

### Selenium Waits

1. Thread.sleep()
2. Implicit Wait
3. Explicit Wait
4. Fluent Wait

---

## Thread.sleep()

### Definition

Pauses the execution of the program for a specified amount of time.

### Syntax

```java
Thread.sleep(milliseconds);
```

### Example

```java
Thread.sleep(5000);
```

### Output

Waits for 5 seconds before executing the next statement.

### Advantages

* Easy to use
* Useful for debugging

### Disadvantages

* Slows execution
* Waits even if element appears earlier
* Not recommended for regular automation

---

## Implicit Wait

### Definition

Implicit Wait tells Selenium to wait for a certain amount of time while searching for elements.

### Syntax

```java
driver.manage().timeouts()
      .implicitlyWait(Duration.ofSeconds(10));
```

### Example

```java
import java.time.Duration;

driver.manage().timeouts()
      .implicitlyWait(Duration.ofSeconds(10));
```

### How It Works

* Selenium waits up to the specified time
* If element is found earlier, execution continues immediately

### Advantages

* Easy to implement
* Applies globally

### Disadvantages

* Cannot handle specific conditions
* Less flexible

---

## Explicit Wait

### Definition

Explicit Wait waits until a specific condition is satisfied.

### Classes Used

* WebDriverWait
* ExpectedConditions

### Syntax

```java
WebDriverWait wait =
new WebDriverWait(driver, Duration.ofSeconds(10));

wait.until(condition);
```

### Example

```java
import java.time.Duration;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;

WebDriverWait wait =
new WebDriverWait(driver, Duration.ofSeconds(10));

wait.until(
ExpectedConditions.visibilityOfElementLocated(
By.id("username"))
);
```

### Advantages

* More reliable
* Waits only when required
* Supports multiple conditions

### Disadvantages

* More code compared to Implicit Wait

---

## ExpectedConditions

### Definition

ExpectedConditions is a utility class that provides predefined conditions for Explicit Wait.

---

### visibilityOfElementLocated()

#### Purpose

Waits until the element becomes visible.

#### Example

```java
wait.until(
ExpectedConditions.visibilityOfElementLocated(
By.id("username"))
);
```

---

### elementToBeClickable()

#### Purpose

Waits until an element becomes clickable.

#### Example

```java
wait.until(
ExpectedConditions.elementToBeClickable(
By.id("loginBtn"))
);
```

---

### presenceOfElementLocated()

#### Purpose

Waits until an element is present in the DOM.

#### Example

```java
wait.until(
ExpectedConditions.presenceOfElementLocated(
By.id("email"))
);
```

---

### titleContains()

#### Purpose

Waits until page title contains specific text.

#### Example

```java
wait.until(
ExpectedConditions.titleContains("Google")
);
```

---

### alertIsPresent()

#### Purpose

Waits until an alert appears.

#### Example

```java
wait.until(
ExpectedConditions.alertIsPresent()
);
```

---

## Fluent Wait

### Definition

Fluent Wait is an advanced wait that allows defining:

* Maximum wait time
* Polling interval
* Ignored exceptions

### Syntax

```java
FluentWait<WebDriver> wait =
new FluentWait<>(driver)
.withTimeout(Duration.ofSeconds(20))
.pollingEvery(Duration.ofSeconds(2))
.ignoring(NoSuchElementException.class);
```

### Example

```java
import java.time.Duration;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.support.ui.FluentWait;

FluentWait<WebDriver> wait =
new FluentWait<>(driver)
.withTimeout(Duration.ofSeconds(20))
.pollingEvery(Duration.ofSeconds(2))
.ignoring(NoSuchElementException.class);

wait.until(
d -> d.findElement(By.id("username"))
);
```

### Advantages

* Highly flexible
* Custom polling intervals
* Handles exceptions efficiently

### Disadvantages

* More complex

---

## Polling

### Definition

Polling means checking repeatedly at regular intervals until a condition becomes true.

### Example

```text
Wait Time = 20 Seconds

Check every 2 Seconds

0s → Check
2s → Check
4s → Check
6s → Check
...
```

---

## Difference Between Implicit and Explicit Wait

| Implicit Wait            | Explicit Wait               |
| ------------------------ | --------------------------- |
| Applies globally         | Applies to specific element |
| Easy to use              | More flexible               |
| Cannot handle conditions | Supports conditions         |
| Less control             | More control                |

---

## Difference Between Explicit and Fluent Wait

| Explicit Wait          | Fluent Wait             |
| ---------------------- | ----------------------- |
| Fixed polling interval | Custom polling interval |
| Simpler                | More flexible           |
| Uses WebDriverWait     | Uses FluentWait         |

---

## Best Practices

### Use Explicit Wait for Dynamic Elements

```java
WebDriverWait wait =
new WebDriverWait(driver, Duration.ofSeconds(10));
```

---

### Avoid Excessive Thread.sleep()

Bad Practice:

```java
Thread.sleep(10000);
```

Good Practice:

```java
wait.until(
ExpectedConditions.visibilityOfElementLocated(
By.id("username"))
);
```

---

### Keep Wait Time Reasonable

Recommended:

```java
Duration.ofSeconds(10)
```

Avoid:

```java
Duration.ofMinutes(5)
```

---

## Complete Example

### Explicit Wait Example

```java
import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class WaitDemo {

    public static void main(String[] args) {

        WebDriver driver = new ChromeDriver();

        driver.get("https://example.com");

        WebDriverWait wait =
        new WebDriverWait(driver,
        Duration.ofSeconds(10));

        wait.until(
        ExpectedConditions.visibilityOfElementLocated(
        By.id("username"))
        );

        driver.findElement(By.id("username"))
              .sendKeys("admin");

        driver.quit();
    }
}
```

---

## Common Exceptions Related to Waits

### NoSuchElementException

#### Reason

Element not found on the webpage.

#### Solution

Use Explicit Wait.

---

### ElementNotInteractableException

#### Reason

Element exists but is not ready for interaction.

#### Solution

Use `elementToBeClickable()`.

---

### TimeoutException

#### Reason

Condition was not satisfied within specified time.

#### Solution

* Increase wait time
* Verify locator correctness

---
---
# Module 8: Handling Web Elements

## Text Box

### Definition

A Text Box is an input field used to enter text data.

### HTML Example

```html
<input type="text" id="username">
```

### Enter Text

```java
driver.findElement(By.id("username"))
      .sendKeys("admin");
```

### Clear Text

```java
driver.findElement(By.id("username"))
      .clear();
```

### Get Entered Value

```java
String value =
driver.findElement(By.id("username"))
      .getAttribute("value");

System.out.println(value);
```

---

## Button

### Definition

A Button is used to perform an action when clicked.

### HTML Example

```html
<button id="loginBtn">Login</button>
```

### Click Button

```java
driver.findElement(By.id("loginBtn"))
      .click();
```

### Check Button Status

```java
boolean status =
driver.findElement(By.id("loginBtn"))
      .isEnabled();

System.out.println(status);
```

---

## Radio Button

### Definition

Radio Buttons allow selecting only one option from a group.

### HTML Example

```html
<input type="radio" id="male">
<input type="radio" id="female">
```

### Select Radio Button

```java
driver.findElement(By.id("male"))
      .click();
```

### Verify Selection

```java
boolean selected =
driver.findElement(By.id("male"))
      .isSelected();

System.out.println(selected);
```

---

## Checkbox

### Definition

Checkboxes allow selecting multiple options.

### HTML Example

```html
<input type="checkbox" id="java">
```

### Select Checkbox

```java
driver.findElement(By.id("java"))
      .click();
```

### Verify Checkbox

```java
boolean selected =
driver.findElement(By.id("java"))
      .isSelected();

System.out.println(selected);
```

### Uncheck Checkbox

```java
WebElement checkbox =
driver.findElement(By.id("java"));

if(checkbox.isSelected()){
    checkbox.click();
}
```

---

## Dropdown

### Definition

Dropdown is a list of options from which users can select a value.

### HTML Example

```html
<select id="country">
    <option>India</option>
    <option>USA</option>
</select>
```

### Select Class

```java
import org.openqa.selenium.support.ui.Select;

Select dropdown =
new Select(driver.findElement(By.id("country")));
```

### Select by Visible Text

```java
dropdown.selectByVisibleText("India");
```

### Select by Value

```java
dropdown.selectByValue("india");
```

### Select by Index

```java
dropdown.selectByIndex(0);
```

### Get Selected Option

```java
String option =
dropdown.getFirstSelectedOption()
        .getText();

System.out.println(option);
```

---

## Auto Suggestions

### Definition

Auto Suggestions display matching values while typing.

### Example

Searching "Selen" may display:

```text
Selenium
Selenium Tutorial
Selenium Java
```

### Handle Auto Suggestions

```java
driver.findElement(By.id("search"))
      .sendKeys("Selenium");
```

### Select Suggestion

```java
List<WebElement> suggestions =
driver.findElements(By.xpath("//li"));

for(WebElement item : suggestions){

    if(item.getText().equals("Selenium Java")){
        item.click();
        break;
    }
}
```

---

## Dynamic Dropdown

### Definition

A Dynamic Dropdown loads options dynamically based on user input.

### Example

City suggestions after entering country.

### Handle Dynamic Dropdown

```java
driver.findElement(By.id("city"))
      .sendKeys("Ban");
```

```java
List<WebElement> cities =
driver.findElements(By.xpath("//li"));

for(WebElement city : cities){

    if(city.getText().equals("Bangalore")){
        city.click();
        break;
    }
}
```

---

## Links

### Definition

Links are used for navigation between webpages.

### HTML Example

```html
<a href="home.html">Home</a>
```

### Click Link

```java
driver.findElement(By.linkText("Home"))
      .click();
```

### Partial Link Text

```java
driver.findElement(
By.partialLinkText("Hom"))
.click();
```

### Count Links

```java
List<WebElement> links =
driver.findElements(By.tagName("a"));

System.out.println(links.size());
```

---

## Tables

### Definition

A Table is used to display data in rows and columns.

### HTML Example

```html
<table>
<tr>
    <td>John</td>
</tr>
</table>
```

---

## Get Table Data

### Retrieve Single Cell

```java
String data =
driver.findElement(
By.xpath("//table/tbody/tr[1]/td[1]")
).getText();

System.out.println(data);
```

---

## Count Rows

```java
List<WebElement> rows =
driver.findElements(
By.xpath("//table/tbody/tr")
);

System.out.println(rows.size());
```

---

## Count Columns

```java
List<WebElement> columns =
driver.findElements(
By.xpath("//table/tbody/tr[1]/td")
);

System.out.println(columns.size());
```

---

## Read Entire Table

```java
List<WebElement> rows =
driver.findElements(
By.xpath("//table/tbody/tr")
);

for(WebElement row : rows){

    System.out.println(row.getText());
}
```

---

## Hidden Elements

### Definition

Hidden elements are present in the DOM but not visible.

### Example

```html
<input type="hidden" id="token">
```

### Access Hidden Value

```java
String value =
driver.findElement(By.id("token"))
      .getAttribute("value");

System.out.println(value);
```

---

## Disabled Elements

### Definition

Disabled elements cannot be interacted with until enabled.

### Example

```html
<input type="text" disabled>
```

### Verify Disabled Element

```java
boolean enabled =
driver.findElement(By.id("email"))
      .isEnabled();

System.out.println(enabled);
```

---

## Complete Example

### Registration Form

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class RegistrationForm {

    public static void main(String[] args) {

        WebDriver driver = new ChromeDriver();

        driver.get("https://example.com");

        driver.findElement(By.id("username"))
              .sendKeys("Krishna");

        driver.findElement(By.id("male"))
              .click();

        driver.findElement(By.id("java"))
              .click();

        Select country =
        new Select(
        driver.findElement(By.id("country"))
        );

        country.selectByVisibleText("India");

        driver.findElement(By.id("submit"))
              .click();

        driver.quit();
    }
}
```

---

## Common Methods Used

| Method         | Purpose              |
| -------------- | -------------------- |
| sendKeys()     | Enter text           |
| clear()        | Clear text           |
| click()        | Click element        |
| isSelected()   | Check selection      |
| isEnabled()    | Check enabled status |
| getText()      | Get visible text     |
| getAttribute() | Get attribute value  |

---
---
# Module 9: Advanced User Interactions

## Actions Class

### Definition

The Actions class is used to perform advanced user interactions such as:

* Mouse Hover
* Right Click
* Double Click
* Drag and Drop
* Keyboard Actions

### Package

```java
import org.openqa.selenium.interactions.Actions;
```

### Create Actions Object

```java
Actions actions = new Actions(driver);
```

### Example

```java
Actions actions = new Actions(driver);
```

---

## Mouse Hover

### Definition

Mouse Hover moves the mouse pointer over an element without clicking.

### Example

```java
WebElement menu =
driver.findElement(By.id("menu"));

Actions actions =
new Actions(driver);

actions.moveToElement(menu)
       .perform();
```

### Usage

* Dropdown menus
* Hidden options
* Tooltips

---

## Right Click

### Definition

Right Click is also known as Context Click.

### Syntax

```java
actions.contextClick(element)
       .perform();
```

### Example

```java
WebElement button =
driver.findElement(By.id("btn"));

actions.contextClick(button)
       .perform();
```

### Usage

* Context menu testing
* Special browser actions

---

## Double Click

### Definition

Double Click performs two consecutive clicks on an element.

### Syntax

```java
actions.doubleClick(element)
       .perform();
```

### Example

```java
WebElement button =
driver.findElement(By.id("doubleBtn"));

actions.doubleClick(button)
       .perform();
```

### Usage

* Opening files
* Triggering special events

---

## Drag and Drop

### Definition

Drag and Drop moves an element from one location to another.

### Syntax

```java
actions.dragAndDrop(source, target)
       .perform();
```

### Example

```java
WebElement source =
driver.findElement(By.id("source"));

WebElement target =
driver.findElement(By.id("target"));

actions.dragAndDrop(source, target)
       .perform();
```

### Usage

* Kanban boards
* Dashboard widgets
* Sorting lists

---

## Click and Hold

### Definition

Clicks and holds the mouse button without releasing it.

### Syntax

```java
actions.clickAndHold(element)
       .perform();
```

### Example

```java
actions.clickAndHold(source)
       .perform();
```

---

## Release

### Definition

Releases the held mouse button.

### Syntax

```java
actions.release()
       .perform();
```

### Example

```java
actions.release()
       .perform();
```

---

## Drag and Drop Using clickAndHold()

### Example

```java
actions.clickAndHold(source)
       .moveToElement(target)
       .release()
       .build()
       .perform();
```

---

## Move By Offset

### Definition

Moves mouse pointer by specific coordinates.

### Syntax

```java
actions.moveByOffset(x, y)
       .perform();
```

### Example

```java
actions.moveByOffset(100, 50)
       .perform();
```

---

## Keyboard Actions

### Definition

Actions class can perform keyboard operations.

---

## Send Keys

### Syntax

```java
actions.sendKeys("Selenium")
       .perform();
```

### Example

```java
actions.sendKeys("Automation")
       .perform();
```

---

## Key Press

### Definition

Press a keyboard key.

### Example

```java
actions.keyDown(Keys.CONTROL)
       .perform();
```

---

## Key Release

### Definition

Release a pressed keyboard key.

### Example

```java
actions.keyUp(Keys.CONTROL)
       .perform();
```

---

## CTRL + A

### Definition

Select all text.

### Example

```java
actions.keyDown(Keys.CONTROL)
       .sendKeys("a")
       .keyUp(Keys.CONTROL)
       .perform();
```

---

## CTRL + C

### Definition

Copy selected text.

### Example

```java
actions.keyDown(Keys.CONTROL)
       .sendKeys("c")
       .keyUp(Keys.CONTROL)
       .perform();
```

---

## CTRL + V

### Definition

Paste copied text.

### Example

```java
actions.keyDown(Keys.CONTROL)
       .sendKeys("v")
       .keyUp(Keys.CONTROL)
       .perform();
```

---

## CTRL + X

### Definition

Cut selected text.

### Example

```java
actions.keyDown(Keys.CONTROL)
       .sendKeys("x")
       .keyUp(Keys.CONTROL)
       .perform();
```

---

## Keyboard Operations Example

### Copy Text Between Fields

```java
WebElement field1 =
driver.findElement(By.id("field1"));

WebElement field2 =
driver.findElement(By.id("field2"));

field1.sendKeys("Selenium");

field1.sendKeys(Keys.CONTROL + "a");
field1.sendKeys(Keys.CONTROL + "c");

field2.click();

field2.sendKeys(Keys.CONTROL + "v");
```

---

## build() Method

### Definition

Combines multiple actions into a single action sequence.

### Example

```java
actions.moveToElement(menu)
       .click()
       .build()
       .perform();
```

---

## perform() Method

### Definition

Executes the action.

### Example

```java
actions.doubleClick(element)
       .perform();
```

---

## build() vs perform()

| build()                   | perform()            |
| ------------------------- | -------------------- |
| Creates action sequence   | Executes action      |
| Optional                  | Mandatory            |
| Used for multiple actions | Executes immediately |

### Example

```java
actions.moveToElement(menu)
       .click()
       .build()
       .perform();
```

---

## Complete Example

### Mouse Hover and Click

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class ActionsDemo {

    public static void main(String[] args) {

        WebDriver driver =
        new ChromeDriver();

        driver.get("https://example.com");

        Actions actions =
        new Actions(driver);

        WebElement menu =
        driver.findElement(By.id("menu"));

        actions.moveToElement(menu)
               .perform();

        WebElement option =
        driver.findElement(By.id("option"));

        option.click();

        driver.quit();
    }
}
```

---

## Common Actions Methods

| Method          | Purpose             |
| --------------- | ------------------- |
| moveToElement() | Mouse Hover         |
| click()         | Click               |
| doubleClick()   | Double Click        |
| contextClick()  | Right Click         |
| clickAndHold()  | Hold Mouse          |
| release()       | Release Mouse       |
| dragAndDrop()   | Drag and Drop       |
| moveByOffset()  | Move Mouse          |
| sendKeys()      | Keyboard Input      |
| keyDown()       | Press Key           |
| keyUp()         | Release Key         |
| build()         | Create Action Chain |
| perform()       | Execute Action      |

---
---
# Module 10: Alerts and Popups

## What are Alerts and Popups?

### Definition

Alerts and Popups are message boxes displayed by web applications to get user attention or input.

### Types

* JavaScript Alert
* Confirmation Alert
* Prompt Alert
* Authentication Popup
* Hidden Division Popup

---

## JavaScript Alert

### Definition

A JavaScript Alert displays a message with an **OK** button.

### Example

```text
Alert!

Login Successful

[ OK ]
```

### Switch to Alert

```java
Alert alert = driver.switchTo().alert();
```

### Accept Alert

```java
alert.accept();
```

### Complete Example

```java
Alert alert = driver.switchTo().alert();

alert.accept();
```

---

## Confirmation Alert

### Definition

A Confirmation Alert contains **OK** and **Cancel** buttons.

### Example

```text
Delete Record?

[ OK ] [ Cancel ]
```

### Click OK

```java
driver.switchTo()
      .alert()
      .accept();
```

### Click Cancel

```java
driver.switchTo()
      .alert()
      .dismiss();
```

---

## Prompt Alert

### Definition

A Prompt Alert allows users to enter text.

### Example

```text
Enter Your Name

[________]

[ OK ] [ Cancel ]
```

### Enter Text

```java
Alert alert =
driver.switchTo().alert();

alert.sendKeys("Krishna");
```

### Accept Alert

```java
alert.accept();
```

### Complete Example

```java
Alert alert =
driver.switchTo().alert();

alert.sendKeys("Krishna");

alert.accept();
```

---

## Alert Methods

### accept()

#### Definition

Clicks the **OK** button.

#### Example

```java
alert.accept();
```

---

### dismiss()

#### Definition

Clicks the **Cancel** button.

#### Example

```java
alert.dismiss();
```

---

### getText()

#### Definition

Returns alert message text.

#### Example

```java
String message =
alert.getText();

System.out.println(message);
```

---

### sendKeys()

#### Definition

Enters text into a Prompt Alert.

#### Example

```java
alert.sendKeys("Admin");
```

---

## Reading Alert Message

### Example

```java
Alert alert =
driver.switchTo().alert();

String text =
alert.getText();

System.out.println(text);

alert.accept();
```

### Output

```text
Login Successful
```

---

## Authentication Popup

### Definition

Authentication Popups appear when a website requires username and password.

### Example

```text
Username : ______
Password : ______
```

---

## Handling Authentication Popup

### Syntax

```java
https://username:password@url
```

### Example

```java
driver.get(
"https://admin:admin123@testsite.com"
);
```

---

## Hidden Division Popup

### Definition

A Hidden Division Popup is not a browser alert. It is a normal web element created using HTML, CSS, and JavaScript.

### Example

```html
<div id="popup">
    Login Form
</div>
```

### Handling

Use normal Selenium locators.

```java
driver.findElement(By.id("close"))
      .click();
```

---

## Difference Between Alert and Hidden Popup

| Alert                       | Hidden Popup                    |
| --------------------------- | ------------------------------- |
| Browser generated           | Application generated           |
| Requires switchTo().alert() | Handled as normal element       |
| Cannot inspect              | Can inspect using browser tools |
| Uses Alert interface        | Uses WebElement                 |

---

## NoAlertPresentException

### Definition

Occurs when Selenium tries to access an alert that is not present.

### Example

```java
driver.switchTo().alert();
```

### Solution

Use Explicit Wait before handling alerts.

```java
WebDriverWait wait =
new WebDriverWait(
driver,
Duration.ofSeconds(10)
);

wait.until(
ExpectedConditions.alertIsPresent()
);
```

---

## Waiting for Alert

### Example

```java
WebDriverWait wait =
new WebDriverWait(
driver,
Duration.ofSeconds(10)
);

wait.until(
ExpectedConditions.alertIsPresent()
);

driver.switchTo()
      .alert()
      .accept();
```

---

## Complete Example

### Handle Alert

```java
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class AlertDemo {

    public static void main(String[] args) {

        WebDriver driver =
        new ChromeDriver();

        driver.get("https://example.com");

        driver.findElement(By.id("alertBtn"))
              .click();

        Alert alert =
        driver.switchTo().alert();

        System.out.println(
        alert.getText()
        );

        alert.accept();

        driver.quit();
    }
}
```

---

## Complete Example

### Handle Prompt Alert

```java
Alert alert =
driver.switchTo().alert();

alert.sendKeys("Krishna");

alert.accept();
```

---

## Complete Example

### Handle Confirmation Alert

```java
Alert alert =
driver.switchTo().alert();

alert.dismiss();
```

---

## Common Alert Methods

| Method     | Purpose                    |
| ---------- | -------------------------- |
| accept()   | Click OK                   |
| dismiss()  | Click Cancel               |
| getText()  | Get alert text             |
| sendKeys() | Enter text in prompt alert |

---

## Alert Handling Flow

### Steps

1. Trigger Alert
2. Switch to Alert
3. Read Text (Optional)
4. Accept or Dismiss
5. Continue Execution

### Example

```java
driver.findElement(By.id("btn"))
      .click();

Alert alert =
driver.switchTo().alert();

alert.accept();
```

---
---
# Module 11: Frames and Windows

## What are Frames?

### Definition

A Frame is an HTML element that allows one webpage to be embedded inside another webpage.

### Purpose

* Divide webpage into multiple sections
* Load independent content
* Display external pages within a webpage

### HTML Example

```html
<iframe id="frame1" src="page.html"></iframe>
```

### Important Note

Selenium cannot directly interact with elements inside a frame unless it switches to that frame first.

---

## Switch to Frame by Index

### Definition

Switches to a frame using its position number.

### Syntax

```java
driver.switchTo().frame(index);
```

### Example

```java
driver.switchTo().frame(0);
```

---

## Switch to Frame by Name or ID

### Syntax

```java
driver.switchTo().frame("frameName");
```

### Example

```java
driver.switchTo().frame("frame1");
```

---

## Switch to Frame by WebElement

### Syntax

```java
WebElement frame =
driver.findElement(By.id("frame1"));

driver.switchTo().frame(frame);
```

### Example

```java
WebElement frame =
driver.findElement(By.id("frame1"));

driver.switchTo().frame(frame);
```

---

## Interact with Elements Inside Frame

### Example

```java
driver.switchTo().frame("frame1");

driver.findElement(By.id("username"))
      .sendKeys("admin");
```

---

## Switch Back to Main Page

### defaultContent()

#### Definition

Switches back to the main webpage from any frame.

### Syntax

```java
driver.switchTo().defaultContent();
```

### Example

```java
driver.switchTo().defaultContent();
```

---

## Switch Back to Parent Frame

### parentFrame()

#### Definition

Switches back to the immediate parent frame.

### Syntax

```java
driver.switchTo().parentFrame();
```

### Example

```java
driver.switchTo().parentFrame();
```

---

## Nested Frames

### Definition

A Frame inside another Frame is called a Nested Frame.

### Example Structure

```text
Main Page
   │
   └── Frame 1
         │
         └── Frame 2
```

### Switch to Nested Frame

```java
driver.switchTo().frame("frame1");

driver.switchTo().frame("frame2");
```

### Return to Main Page

```java
driver.switchTo().defaultContent();
```

---

## Complete Frame Example

### Handle Frame

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class FrameDemo {

    public static void main(String[] args) {

        WebDriver driver =
        new ChromeDriver();

        driver.get("https://example.com");

        driver.switchTo().frame("frame1");

        driver.findElement(By.id("username"))
              .sendKeys("admin");

        driver.switchTo().defaultContent();

        driver.quit();
    }
}
```

---

## What are Windows?

### Definition

When a webpage opens another browser tab or window, Selenium treats each as a separate window.

### Examples

* New Browser Window
* New Browser Tab
* Payment Gateway Window
* Social Media Window

---

## Window Handle

### Definition

A Window Handle is a unique identifier assigned to every browser window.

### Get Current Window Handle

```java
String windowID =
driver.getWindowHandle();

System.out.println(windowID);
```

---

## Window Handles

### Definition

Returns all opened browser window IDs.

### Syntax

```java
driver.getWindowHandles();
```

### Example

```java
Set<String> windows =
driver.getWindowHandles();
```

---

## Open New Window Example

### Scenario

Click a link that opens a new window.

```java
driver.findElement(By.id("newWindow"))
      .click();
```

---

## Switch Between Windows

### Example

```java
Set<String> windows =
driver.getWindowHandles();

for(String win : windows){

    driver.switchTo().window(win);
}
```

---

## Switch to Child Window

### Example

```java
Set<String> windows =
driver.getWindowHandles();

Iterator<String> it =
windows.iterator();

String parent =
it.next();

String child =
it.next();

driver.switchTo().window(child);
```

---

## Switch Back to Parent Window

### Example

```java
driver.switchTo().window(parent);
```

---

## Close Child Window

### Example

```java
driver.close();
```

### Return to Parent

```java
driver.switchTo().window(parent);
```

---

## Complete Window Handling Example

```java
import java.util.Iterator;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class WindowDemo {

    public static void main(String[] args) {

        WebDriver driver =
        new ChromeDriver();

        driver.get("https://example.com");

        driver.findElement(By.id("newWindow"))
              .click();

        Set<String> windows =
        driver.getWindowHandles();

        Iterator<String> it =
        windows.iterator();

        String parent =
        it.next();

        String child =
        it.next();

        driver.switchTo().window(child);

        System.out.println(
        driver.getTitle()
        );

        driver.close();

        driver.switchTo().window(parent);

        driver.quit();
    }
}
```

---

## Multiple Windows Handling

### Example

```java
Set<String> windows =
driver.getWindowHandles();

for(String win : windows){

    driver.switchTo().window(win);

    System.out.println(
    driver.getTitle()
    );
}
```

---

## Difference Between Frame and Window

| Frame                           | Window                       |
| ------------------------------- | ---------------------------- |
| Embedded inside webpage         | Separate browser page        |
| Uses frame() method             | Uses window() method         |
| Exists within same browser page | Has unique window handle     |
| Requires switchTo().frame()     | Requires switchTo().window() |

---

## Common Exceptions

### NoSuchFrameException

#### Reason

Specified frame does not exist.

#### Example

```java
driver.switchTo().frame("invalid");
```

#### Solution

Verify frame locator.

---

### NoSuchWindowException

#### Reason

Specified window does not exist.

#### Example

```java
driver.switchTo().window("invalid");
```

#### Solution

Verify window handle.

---

## Best Practices

### Switch Back After Frame Work

```java
driver.switchTo().defaultContent();
```

---

### Store Parent Window

```java
String parent =
driver.getWindowHandle();
```

---

### Always Verify Window Count

```java
System.out.println(
driver.getWindowHandles().size()
);
```

---
---
# Module 12: Dropdown Handling

## What is a Dropdown?

### Definition

A Dropdown is a web element that displays a list of options from which a user can select one or more values.

### HTML Example

```html
<select id="country">
    <option value="india">India</option>
    <option value="usa">USA</option>
    <option value="uk">UK</option>
</select>
```

### Purpose

* Select a value from multiple options
* Save screen space
* Improve user experience

---

## Select Class

### Definition

The Select class is used to handle dropdown elements in Selenium.

### Package

```java
import org.openqa.selenium.support.ui.Select;
```

### Create Select Object

```java
Select dropdown =
new Select(driver.findElement(By.id("country")));
```

### Complete Example

```java
WebElement country =
driver.findElement(By.id("country"));

Select dropdown =
new Select(country);
```

---

## selectByVisibleText()

### Definition

Selects an option using the visible text displayed in the dropdown.

### Syntax

```java
dropdown.selectByVisibleText("India");
```

### Example

```java
Select dropdown =
new Select(driver.findElement(By.id("country")));

dropdown.selectByVisibleText("India");
```

---

## selectByValue()

### Definition

Selects an option using the value attribute.

### HTML Example

```html
<option value="india">India</option>
```

### Syntax

```java
dropdown.selectByValue("india");
```

### Example

```java
Select dropdown =
new Select(driver.findElement(By.id("country")));

dropdown.selectByValue("india");
```

---

## selectByIndex()

### Definition

Selects an option using its position in the dropdown.

### Syntax

```java
dropdown.selectByIndex(0);
```

### Example

```java
Select dropdown =
new Select(driver.findElement(By.id("country")));

dropdown.selectByIndex(1);
```

### Note

Index starts from 0.

---

## Get Selected Option

### getFirstSelectedOption()

#### Definition

Returns the currently selected option.

### Example

```java
String selectedOption =
dropdown.getFirstSelectedOption()
        .getText();

System.out.println(selectedOption);
```

### Output

```text
India
```

---

## Get All Dropdown Options

### getOptions()

#### Definition

Returns all options available in the dropdown.

### Example

```java
List<WebElement> options =
dropdown.getOptions();

for(WebElement option : options){

    System.out.println(option.getText());
}
```

### Output

```text
India
USA
UK
```

---

## Count Dropdown Options

### Example

```java
List<WebElement> options =
dropdown.getOptions();

System.out.println(options.size());
```

### Output

```text
3
```
---
## Multi-Select Dropdown
### Definition
A Multi-Select Dropdown allows selecting multiple values.
### HTML Example
```html
<select id="skills" multiple>
    <option>Java</option>
    <option>Selenium</option>
    <option>TestNG</option>
</select>
```
---
## Verify Multi-Select Dropdown
### isMultiple()
#### Definition
Checks whether a dropdown supports multiple selections.
### Example
```java
boolean status =
dropdown.isMultiple();

System.out.println(status);
```

### Output

```text
true
```

---

## Select Multiple Values

### Example

```java
dropdown.selectByVisibleText("Java");

dropdown.selectByVisibleText("Selenium");

dropdown.selectByVisibleText("TestNG");
```
---
## Get All Selected Options
### getAllSelectedOptions()
#### Definition
Returns all selected options.
### Example

```java
List<WebElement> selectedOptions =
dropdown.getAllSelectedOptions();

for(WebElement option : selectedOptions){

    System.out.println(option.getText());
}
```
---
## Deselect Option
### deselectByVisibleText()
#### Example
```java
dropdown.deselectByVisibleText("Java");
```
---
### deselectByValue()
#### Example
```java
dropdown.deselectByValue("java");
```
---
### deselectByIndex()
#### Example

```java
dropdown.deselectByIndex(0);
```
---
### deselectAll()
#### Example
```java
dropdown.deselectAll();
```

---

## Single Select vs Multi Select Dropdown

| Single Select                  | Multi Select               |
| ------------------------------ | -------------------------- |
| Select only one value          | Select multiple values     |
| No multiple attribute          | Has multiple attribute     |
| deselect methods not supported | deselect methods supported |

---

## Bootstrap Dropdown

### Definition

Bootstrap Dropdowns are not traditional `<select>` elements.

### Example

```html
<button>Choose Country</button>

<ul>
    <li>India</li>
    <li>USA</li>
</ul>
```

### Important Note
Select class cannot be used.
### Handling Bootstrap Dropdown
```java
driver.findElement(By.id("countryBtn"))
      .click();
```

```java
List<WebElement> countries =
driver.findElements(By.xpath("//li"));

for(WebElement country : countries){

    if(country.getText().equals("India")){

        country.click();
        break;
    }
}
```

---

## Hidden Dropdown
### Definition
A dropdown that appears only after clicking another element.
### Handling
```java
driver.findElement(By.id("menu"))
      .click();

driver.findElement(By.xpath("//li[text()='India']"))
      .click();
```

---

## Complete Example

### Single Select Dropdown

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class DropdownDemo {

    public static void main(String[] args) {

        WebDriver driver =
        new ChromeDriver();

        driver.get("https://example.com");

        WebElement country =
        driver.findElement(By.id("country"));

        Select dropdown =
        new Select(country);

        dropdown.selectByVisibleText("India");

        System.out.println(
        dropdown.getFirstSelectedOption()
                .getText()
        );

        driver.quit();
    }
}
```

---

## Complete Example

### Multi Select Dropdown

```java
Select skills =
new Select(
driver.findElement(By.id("skills"))
);
skills.selectByVisibleText("Java");
skills.selectByVisibleText("Selenium");
skills.selectByVisibleText("TestNG");
skills.deselectByVisibleText("Java");
```

---

## Common Select Class Methods

| Method                   | Purpose                 |
| ------------------------ | ----------------------- |
| selectByVisibleText()    | Select by text          |
| selectByValue()          | Select by value         |
| selectByIndex()          | Select by index         |
| getOptions()             | Get all options         |
| getFirstSelectedOption() | Get selected option     |
| getAllSelectedOptions()  | Get all selected values |
| isMultiple()             | Check multi-select      |
| deselectByVisibleText()  | Deselect by text        |
| deselectByValue()        | Deselect by value       |
| deselectByIndex()        | Deselect by index       |
| deselectAll()            | Deselect all options    |

---
---
# Module 13: JavaScript Executor
## What is JavaScript Executor?
### Definition
JavaScriptExecutor is an interface in Selenium used to execute JavaScript code directly in the browser.
### Why Use JavaScript Executor?
* Handle hidden elements
* Click elements when normal click fails
* Scroll webpages
* Highlight elements
* Retrieve page information
* Execute custom JavaScript
### Interface
```java
JavascriptExecutor js =
(JavascriptExecutor) driver;
```
---
## Creating JavaScriptExecutor Object
### Syntax

```java
JavascriptExecutor js =
(JavascriptExecutor) driver;
```

### Example

```java
WebDriver driver =
new ChromeDriver();

JavascriptExecutor js =
(JavascriptExecutor) driver;
```

---

## executeScript()

### Definition

Executes JavaScript code in the current browser window.

### Syntax

```java
js.executeScript("JavaScript Code");
```

### Example

```java
js.executeScript("alert('Hello Selenium')");
```

---

## Click Using JavaScript

### Why?

Sometimes Selenium's normal `click()` method may fail because:

* Element is hidden
* Element is covered by another element
* Element is not interactable

### Syntax

```java
js.executeScript(
"arguments[0].click();",
element
);
```

### Example

```java
WebElement loginBtn =
driver.findElement(By.id("login"));

js.executeScript(
"arguments[0].click();",
loginBtn
);
```

---

## Enter Text Using JavaScript

### Syntax

```java
js.executeScript(
"arguments[0].value='Admin';",
element
);
```

### Example

```java
WebElement username =
driver.findElement(By.id("username"));

js.executeScript(
"arguments[0].value='admin';",
username
);
```

---

## Scroll Down

### Definition

Scrolls the webpage downward.

### Syntax

```java
js.executeScript(
"window.scrollBy(0,500)"
);
```

### Example

```java
js.executeScript(
"window.scrollBy(0,1000)"
);
```

---

## Scroll Up

### Syntax

```java
js.executeScript(
"window.scrollBy(0,-500)"
);
```

### Example

```java
js.executeScript(
"window.scrollBy(0,-1000)"
);
```

---

## Scroll to Bottom of Page

### Syntax

```java
js.executeScript(
"window.scrollTo(0,document.body.scrollHeight)"
);
```

### Example

```java
js.executeScript(
"window.scrollTo(0,document.body.scrollHeight)"
);
```

---

## Scroll to Top of Page

### Syntax

```java
js.executeScript(
"window.scrollTo(0,0)"
);
```

### Example

```java
js.executeScript(
"window.scrollTo(0,0)"
);
```

---

## Scroll Into View

### Definition

Scrolls until a specific element becomes visible.

### Syntax

```java
js.executeScript(
"arguments[0].scrollIntoView();",
element
);
```

### Example

```java
WebElement footer =
driver.findElement(By.id("footer"));

js.executeScript(
"arguments[0].scrollIntoView();",
footer
);
```

---

## Highlight Element

### Definition

Adds a border around an element for visibility during execution.

### Syntax

```java
js.executeScript(
"arguments[0].style.border='3px solid red'",
element
);
```

### Example

```java
WebElement username =
driver.findElement(By.id("username"));

js.executeScript(
"arguments[0].style.border='3px solid red'",
username
);
```

---

## Change Background Color

### Example

```java
js.executeScript(
"arguments[0].style.background='yellow'",
element
);
```

---

## Generate Alert Using JavaScript

### Syntax

```java
js.executeScript(
"alert('Test Alert')"
);
```

### Example

```java
js.executeScript(
"alert('Automation Testing')"
);
```

---

## Refresh Page Using JavaScript

### Syntax

```java
js.executeScript(
"history.go(0)"
);
```

### Example

```java
js.executeScript(
"history.go(0)"
);
```

---

## Get Page Title Using JavaScript

### Syntax

```java
String title =
(String) js.executeScript(
"return document.title;"
);
```

### Example

```java
String title =
(String) js.executeScript(
"return document.title;"
);

System.out.println(title);
```

---

## Get Current URL Using JavaScript

### Syntax

```java
String url =
(String) js.executeScript(
"return document.URL;"
);
```

### Example

```java
String url =
(String) js.executeScript(
"return document.URL;"
);

System.out.println(url);
```

---

## Zoom In Page

### Example

```java
js.executeScript(
"document.body.style.zoom='150%'"
);
```

---

## Zoom Out Page

### Example

```java
js.executeScript(
"document.body.style.zoom='75%'"
);
```

---

## Flash Element

### Definition

Repeatedly changes background color for visibility.

### Example

```java
for(int i=0;i<5;i++){

    js.executeScript(
    "arguments[0].style.background='yellow'",
    element
    );

    js.executeScript(
    "arguments[0].style.background='white'",
    element
    );
}
```

---

## Complete Example

### Scroll and Click

```java
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class JavaScriptExecutorDemo {

    public static void main(String[] args) {

        WebDriver driver =
        new ChromeDriver();

        driver.get("https://example.com");

        JavascriptExecutor js =
        (JavascriptExecutor) driver;

        WebElement footer =
        driver.findElement(By.id("footer"));

        js.executeScript(
        "arguments[0].scrollIntoView();",
        footer
        );

        js.executeScript(
        "arguments[0].click();",
        footer
        );

        driver.quit();
    }
}
```

---

## Common JavaScriptExecutor Commands

| Command          | Purpose            |
| ---------------- | ------------------ |
| executeScript()  | Execute JavaScript |
| click()          | Click element      |
| value            | Enter text         |
| scrollBy()       | Scroll page        |
| scrollTo()       | Scroll to location |
| scrollIntoView() | Scroll to element  |
| style.border     | Highlight element  |
| alert()          | Generate alert     |
| history.go(0)    | Refresh page       |
| document.title   | Get title          |
| document.URL     | Get URL            |

---
## Best Practices
### Use JavaScript Executor Only When Necessary
Preferred:
```java
element.click();
```
Fallback:
```java
js.executeScript(
"arguments[0].click();",
element
);
```
---
### Avoid Excessive JavaScript Usage
Use normal Selenium methods whenever possible.
---
### Use scrollIntoView() Before Clicking Hidden Elements
```java
js.executeScript(
"arguments[0].scrollIntoView();",
element
);
```

---
---
# Module 14: File Upload and Download
## File Upload
### Definition
File Upload is the process of sending a file from the local system to a web application.
### Example
Common upload scenarios:

* Profile Picture Upload
* Resume Upload
* Document Upload
* Image Upload

---
## HTML File Upload Element
### Example
```html
<input type="file" id="uploadFile">
```
### Important Note
If the upload element is of type `file`, Selenium can directly upload the file using `sendKeys()`.
---
## Upload File Using sendKeys()
### Syntax
```java
driver.findElement(By.id("uploadFile"))
      .sendKeys("File Path");
```
### Example
```java
driver.findElement(By.id("uploadFile"))
      .sendKeys("C:\\Files\\resume.pdf");
```

### Complete Example

```java
WebDriver driver =
new ChromeDriver();

driver.get("https://example.com");

driver.findElement(By.id("uploadFile"))
      .sendKeys("C:\\Files\\resume.pdf");
```
---
## Verify Uploaded File
### Example
```java
String fileName =
driver.findElement(By.id("uploadFile"))
      .getAttribute("value");

System.out.println(fileName);
```
---
## Upload Multiple Files
### HTML Example
```html
<input type="file" multiple>
```
### Example
```java
driver.findElement(By.id("uploadFile"))
.sendKeys(
"C:\\Files\\file1.pdf\n" +
"C:\\Files\\file2.pdf"
);
```

---
## File Upload Using Robot Class
### Definition
Robot Class is used to handle native OS dialogs that Selenium cannot directly interact with.
### Package

```java
import java.awt.Robot;
```
### Why Use Robot Class?
When clicking Upload opens a Windows file selection dialog.
```text
Choose File
----------------
File Name: ______

[ Open ]
[ Cancel ]
```
Selenium cannot directly control this dialog.
---
## Robot Class Methods
### keyPress()
```java
robot.keyPress(KeyEvent.VK_ENTER);
```
### keyRelease()
```java
robot.keyRelease(KeyEvent.VK_ENTER);
```
---
## Upload File Using Robot Class
### Example
```java
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;

Robot robot = new Robot();

StringSelection file =
new StringSelection(
"C:\\Files\\resume.pdf"
);

Toolkit.getDefaultToolkit()
       .getSystemClipboard()
       .setContents(file, null);

robot.keyPress(KeyEvent.VK_CONTROL);
robot.keyPress(KeyEvent.VK_V);

robot.keyRelease(KeyEvent.VK_V);
robot.keyRelease(KeyEvent.VK_CONTROL);

robot.keyPress(KeyEvent.VK_ENTER);
robot.keyRelease(KeyEvent.VK_ENTER);
```

---
## File Download
### Definition
File Download is the process of downloading files from a web application to the local system.
### Examples

* PDF Download
* Excel Download
* Image Download
* Report Download

---
## Download File Using Click
### Example

```java
driver.findElement(By.id("downloadBtn"))
      .click();
```
---
## Verify File Download
### Using Java File Class
### Example

```java
import java.io.File;

File file =
new File(
"C:\\Downloads\\report.pdf"
);

System.out.println(
file.exists()
);
```
### Output
```text
true
```
---
## Verify Downloaded File Size
### Example
```java
File file =
new File(
"C:\\Downloads\\report.pdf"
);

System.out.println(
file.length()
);
```
---
## Custom Download Directory
### ChromeOptions
#### Definition
Allows changing the default download location.
### Example
```java
import org.openqa.selenium.chrome.ChromeOptions;

ChromeOptions options =
new ChromeOptions();
```

---

### Set Download Folder

```java
HashMap<String, Object> prefs =
new HashMap<>();

prefs.put(
"download.default_directory",
"C:\\Downloads"
);

ChromeOptions options =
new ChromeOptions();

options.setExperimentalOption(
"prefs",
prefs
);

WebDriver driver =
new ChromeDriver(options);
```

---

## Download PDF Without Opening Browser Viewer

### Example

```java
prefs.put(
"plugins.always_open_pdf_externally",
true
);
```

---

## Complete Upload Example

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class FileUploadDemo {

    public static void main(String[] args) {

        WebDriver driver =
        new ChromeDriver();

        driver.get("https://example.com");

        driver.findElement(By.id("uploadFile"))
              .sendKeys(
              "C:\\Files\\resume.pdf"
              );

        driver.quit();
    }
}
```

---

## Complete Download Example

```java
import java.io.File;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class DownloadDemo {

    public static void main(String[] args)
    throws InterruptedException {

        WebDriver driver =
        new ChromeDriver();

        driver.get("https://example.com");

        driver.findElement(By.id("downloadBtn"))
              .click();

        Thread.sleep(5000);

        File file =
        new File(
        "C:\\Downloads\\report.pdf"
        );

        System.out.println(
        file.exists()
        );

        driver.quit();
    }
}
```

---

## Common File Upload Methods

| Method         | Purpose                 |
| -------------- | ----------------------- |
| sendKeys()     | Upload file             |
| getAttribute() | Verify file name        |
| click()        | Trigger upload/download |
| exists()       | Verify file exists      |
| length()       | Get file size           |

---

## Common Robot Class Methods

| Method          | Purpose          |
| --------------- | ---------------- |
| keyPress()      | Press key        |
| keyRelease()    | Release key      |
| StringSelection | Copy file path   |
| Toolkit         | Access clipboard |

---

## Best Practices

### Prefer sendKeys() for Upload

Recommended:

```java
driver.findElement(By.id("uploadFile"))
      .sendKeys(path);
```

Avoid Robot Class unless necessary.

---

### Verify Download Success

```java
file.exists();
```

---

### Avoid Thread.sleep()

Prefer waiting for download completion using proper checks.

---

### Use Custom Download Folder

Helps maintain predictable test execution.

---

## Common Exceptions

### InvalidArgumentException

#### Reason

Invalid file path.

### Example

```java
driver.findElement(By.id("upload"))
.sendKeys("wrongPath");
```

### Solution

Verify file location.

---

### FileNotFoundException

#### Reason

Downloaded file not found.

### Solution

Verify download folder and file name.

---
---
# Module 15: Screenshot Capture

## What is Screenshot Capture?

### Definition

Screenshot Capture is the process of taking an image of the current browser screen during test execution.

### Why Take Screenshots?

* Evidence of test execution
* Debugging failed tests
* Reporting defects
* Automation reports
* Verification of UI

---

## TakesScreenshot Interface

### Definition

`TakesScreenshot` is an interface provided by Selenium to capture screenshots.

### Package

```java id="2g8n9v"
import org.openqa.selenium.TakesScreenshot;
```

### Syntax

```java id="kw9l9w"
TakesScreenshot ts =
(TakesScreenshot) driver;
```

---

## Capture Full Page Screenshot

### Steps

1. Convert WebDriver to TakesScreenshot
2. Capture Screenshot
3. Save Screenshot

### Example

```java id="jlwm7s"
TakesScreenshot ts =
(TakesScreenshot) driver;

File source =
ts.getScreenshotAs(
OutputType.FILE
);
```

---

## Save Screenshot

### Example

```java id="rljlwm"
File destination =
new File(
"./Screenshots/homepage.png"
);

FileHandler.copy(
source,
destination
);
```

---

## Complete Screenshot Example

```java id="x6s7al"
import java.io.File;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.io.FileHandler;

public class ScreenshotDemo {

    public static void main(String[] args)
    throws Exception {

        WebDriver driver =
        new ChromeDriver();

        driver.get(
        "https://www.google.com"
        );

        TakesScreenshot ts =
        (TakesScreenshot) driver;

        File source =
        ts.getScreenshotAs(
        OutputType.FILE
        );

        File destination =
        new File(
        "./Screenshots/google.png"
        );

        FileHandler.copy(
        source,
        destination
        );

        driver.quit();
    }
}
```

---

## Screenshot as File

### Syntax

```java id="t0s8m1"
File file =
ts.getScreenshotAs(
OutputType.FILE
);
```

### Purpose

Stores screenshot as a file.

---

## Screenshot as Base64

### Syntax

```java id="uoqb5v"
String image =
ts.getScreenshotAs(
OutputType.BASE64
);
```

### Purpose

Used in reports and APIs.

---

## Screenshot as Bytes

### Syntax

```java id="qql35h"
byte[] image =
ts.getScreenshotAs(
OutputType.BYTES
);
```

### Purpose

Stores screenshot as byte array.

---

## Element Screenshot

### Definition

Captures screenshot of a specific web element instead of the entire page.

### Example

```java id="5w5yik"
WebElement logo =
driver.findElement(By.id("logo"));

File source =
logo.getScreenshotAs(
OutputType.FILE
);
```

---

## Save Element Screenshot

### Example

```java id="iwkgxw"
File destination =
new File(
"./Screenshots/logo.png"
);

FileHandler.copy(
source,
destination
);
```

---

## Complete Element Screenshot Example

```java id="sztf5x"
WebElement logo =
driver.findElement(By.id("logo"));

File source =
logo.getScreenshotAs(
OutputType.FILE
);

File destination =
new File(
"./Screenshots/logo.png"
);

FileHandler.copy(
source,
destination
);
```

---

## Screenshot on Test Failure

### Definition

Capturing screenshots automatically when test execution fails.

### Purpose

* Easier debugging
* Failure evidence
* Better reporting

---

## Example Using try-catch

```java id="0rzxt8"
try {

    driver.findElement(
    By.id("invalid")
    ).click();

}
catch(Exception e){

    TakesScreenshot ts =
    (TakesScreenshot) driver;

    File source =
    ts.getScreenshotAs(
    OutputType.FILE
    );

    File destination =
    new File(
    "./Screenshots/error.png"
    );

    FileHandler.copy(
    source,
    destination
    );
}
```

---

## Screenshot Naming Convention

### Recommended Format

```text id="jdcqv7"
TestCaseName_Date_Time.png
```

### Example

```text id="y8wzzv"
LoginTest_20260530_103000.png
```

### Benefits

* Unique file names
* Easy identification
* Better maintenance

---

## Create Screenshot Folder Automatically

### Example

```java id="z7e0lr"
File folder =
new File("./Screenshots");

if(!folder.exists()){

    folder.mkdir();
}
```

---

## Utility Method for Screenshot

### Example

```java id="t0hz9i"
public static void captureScreenshot(
WebDriver driver,
String fileName
) throws Exception {

    TakesScreenshot ts =
    (TakesScreenshot) driver;

    File source =
    ts.getScreenshotAs(
    OutputType.FILE
    );

    File destination =
    new File(
    "./Screenshots/" +
    fileName + ".png"
    );

    FileHandler.copy(
    source,
    destination
    );
}
```

### Usage

```java id="3mjlwm"
captureScreenshot(
driver,
"LoginPage"
);
```

---

## Screenshot in TestNG

### Example

```java id="s4y5c6"
@AfterMethod

public void takeScreenshot()
throws Exception {

    TakesScreenshot ts =
    (TakesScreenshot) driver;

    File source =
    ts.getScreenshotAs(
    OutputType.FILE
    );

    File destination =
    new File(
    "./Screenshots/test.png"
    );

    FileHandler.copy(
    source,
    destination
    );
}
```

---

## Common Screenshot Methods

| Method                  | Purpose         |
| ----------------------- | --------------- |
| getScreenshotAs(FILE)   | Save as file    |
| getScreenshotAs(BASE64) | Save as Base64  |
| getScreenshotAs(BYTES)  | Save as bytes   |
| FileHandler.copy()      | Save screenshot |

---

## Full Page vs Element Screenshot

| Full Page Screenshot       | Element Screenshot        |
| -------------------------- | ------------------------- |
| Captures entire page       | Captures specific element |
| Uses TakesScreenshot       | Uses WebElement           |
| More storage               | Less storage              |
| Useful for page validation | Useful for UI validation  |

---

## Best Practices

### Capture Screenshot on Failure

Recommended for automation frameworks.

---

### Use Dynamic File Names

Avoid:

```text id="bdlp07"
screenshot.png
```

Recommended:

```text id="mmyvlj"
LoginTest_20260530.png
```

---

### Organize Screenshots

```text id="lr0d3v"
Project
│
├── Screenshots
│    ├── Login.png
│    ├── Search.png
│    └── Error.png
```

---

### Delete Old Screenshots

Helps reduce storage usage.

---

## Common Exceptions

### IOException

#### Reason

Error while saving screenshot.

#### Solution

Verify file path and permissions.

---

### FileNotFoundException

#### Reason

Target folder does not exist.

#### Solution

Create folder before saving screenshot.

---
---
# Module 16: Handling Dynamic Web Elements

## What are Dynamic Web Elements?

### Definition

Dynamic Web Elements are elements whose attributes, location, text, or properties change during runtime.

### Examples

* Dynamic IDs
* Dynamic Buttons
* Dynamic Tables
* Auto Suggestions
* Pagination
* Calendar Widgets

### Challenges

* Element attributes change frequently
* Difficult to locate using fixed locators
* May cause test failures

---

## Dynamic XPath

### Definition

Dynamic XPath is used when element attributes change dynamically.

### Example HTML

```html
<input id="user_12345">
```

Next execution:

```html
<input id="user_67890">
```

Using fixed XPath:

```xpath
//input[@id='user_12345']
```

This may fail.

---

## XPath Using contains()

### Definition

Locates elements using partial attribute values.

### Syntax

```xpath
//tag[contains(@attribute,'value')]
```

### Example

```xpath
//input[contains(@id,'user')]
```

### Selenium

```java
driver.findElement(
By.xpath("//input[contains(@id,'user')]")
);
```

---

## XPath Using starts-with()

### Definition

Locates elements whose attributes start with a specific value.

### Syntax

```xpath
//tag[starts-with(@attribute,'value')]
```

### Example

```xpath
//input[starts-with(@id,'user')]
```

### Selenium

```java
driver.findElement(
By.xpath("//input[starts-with(@id,'user')]")
);
```

---

## XPath Using text()

### Definition

Locates elements using visible text.

### Example

```xpath
//button[text()='Login']
```

### Selenium

```java
driver.findElement(
By.xpath("//button[text()='Login']")
);
```

---

## XPath Using normalize-space()

### Definition

Removes extra spaces while matching text.

### Example

```xpath
//button[normalize-space()='Login']
```

---

## Dynamic IDs

### Definition

Some applications generate IDs dynamically every time the page loads.

### Example

```html
<input id="input_34567">
```

Next load:

```html
<input id="input_78945">
```

### Solution

Use:

```xpath
//input[contains(@id,'input')]
```

or

```css
input[id*='input']
```

---

## Handling Dynamic Buttons

### Example

```html
<button id="btn_12345">
    Submit
</button>
```

### XPath

```xpath
//button[contains(@id,'btn')]
```

### Alternative

```xpath
//button[text()='Submit']
```

---

## Dynamic Text

### Example

```html
<span>
Order ID: 12345
</span>
```

### XPath

```xpath
//span[contains(text(),'Order ID')]
```

### Selenium

```java
driver.findElement(
By.xpath(
"//span[contains(text(),'Order ID')]"
)
);
```

---

## Dynamic Tables

### Definition

Tables whose data changes dynamically.

### Example

```html
<table>
<tr>
    <td>John</td>
</tr>
</table>
```

---

## Count Rows

### Example

```java
List<WebElement> rows =
driver.findElements(
By.xpath("//table/tbody/tr")
);

System.out.println(rows.size());
```

---

## Count Columns

### Example

```java
List<WebElement> columns =
driver.findElements(
By.xpath("//table/tbody/tr[1]/td")
);

System.out.println(columns.size());
```

---

## Read Entire Table

### Example

```java
List<WebElement> rows =
driver.findElements(
By.xpath("//table/tbody/tr")
);

for(WebElement row : rows){

    System.out.println(row.getText());
}
```

---

## Search Specific Data in Table

### Example

```java
List<WebElement> rows =
driver.findElements(
By.xpath("//table/tbody/tr")
);

for(WebElement row : rows){

    if(row.getText().contains("John")){

        System.out.println(
        "Record Found"
        );
    }
}
```

---

## Pagination

### Definition

Pagination divides large amounts of data into multiple pages.

### Example

```text
Previous 1 2 3 4 Next
```

---

## Handle Pagination

### Example

```java
while(true){

    List<WebElement> rows =
    driver.findElements(
    By.xpath("//table/tbody/tr")
    );

    for(WebElement row : rows){

        System.out.println(
        row.getText()
        );
    }

    try{

        driver.findElement(
        By.linkText("Next")
        ).click();

    }catch(Exception e){

        break;
    }
}
```

---

## Calendar Handling

### Definition

Calendar widgets are used to select dates.

### Example

```text
May 2026

Sun Mon Tue Wed Thu Fri Sat
```

---

## Simple Date Selection

### Example

```java
driver.findElement(
By.id("date")
).click();

driver.findElement(
By.xpath("//a[text()='25']")
).click();
```

---

## Dynamic Calendar Handling

### Scenario

Select a future month and date.

### Example

```java
while(true){

    String month =
    driver.findElement(
    By.className("month")
    ).getText();

    if(month.equals("June 2026")){

        break;
    }

    driver.findElement(
    By.xpath("//span[text()='Next']")
    ).click();
}
```

### Select Date

```java
driver.findElement(
By.xpath("//a[text()='15']")
).click();
```

---

## Auto Suggestion Handling

### Example

Search field displays suggestions dynamically.

```java
driver.findElement(
By.id("search")
).sendKeys("Selenium");
```

### Select Suggestion

```java
List<WebElement> suggestions =
driver.findElements(
By.xpath("//li")
);

for(WebElement item : suggestions){

    if(item.getText()
           .equals("Selenium Java")){

        item.click();
        break;
    }
}
```

---

## Dynamic Dropdown

### Example

Country → City Selection

### Select Country

```java
driver.findElement(
By.id("country")
).sendKeys("India");
```

### Select City

```java
List<WebElement> cities =
driver.findElements(
By.xpath("//li")
);

for(WebElement city : cities){

    if(city.getText()
           .equals("Bangalore")){

        city.click();
        break;
    }
}
```
---
## Stale Element Reference Exception
### Definition
Occurs when a web element is no longer attached to the DOM.
### Example
```java
WebElement element =
driver.findElement(
By.id("btn")
);

driver.navigate().refresh();
element.click();
```
### Result
```text
StaleElementReferenceException
```
---
## Solution
### Relocate Element

```java
driver.navigate().refresh();

driver.findElement(
By.id("btn")
).click();
```
---
## NoSuchElementException
### Reason
Element not found.
### Solution
Use Explicit Wait.
```java
WebDriverWait wait =
new WebDriverWait(
driver,
Duration.ofSeconds(10)
);
```

---

## Complete Example

### Dynamic Table Search

```java
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class DynamicTableDemo {

    public static void main(String[] args) {

        WebDriver driver =
        new ChromeDriver();

        driver.get("https://example.com");

        List<WebElement> rows =
        driver.findElements(
        By.xpath("//table/tbody/tr")
        );

        for(WebElement row : rows){

            if(row.getText()
                  .contains("John")){

                System.out.println(
                "Record Found"
                );
            }
        }

        driver.quit();
    }
}
```
---
## Best Practices
### Avoid Absolute XPath
Bad:
```xpath
/html/body/div/table/tr
```
Good:
```xpath
//table//tr
```
---
### Use Explicit Wait
```java
WebDriverWait wait =
new WebDriverWait(
driver,
Duration.ofSeconds(10)
);
```
---
### Use contains() for Dynamic Attributes
```xpath
//input[contains(@id,'user')]
```
---
### Relocate Elements After Refresh
Avoid stale element exceptions.

---
---
# Module 17: TestNG Framework

## What is TestNG?

### Definition

TestNG (Test Next Generation) is a testing framework used for test execution, test management, reporting, grouping, prioritization, and parallel execution.

### Why Use TestNG?

* Better test organization
* Supports annotations
* Generates reports
* Supports parallel execution
* Supports parameterization
* Supports grouping and dependencies

### Features

* Annotations
* Assertions
* Test Priorities
* Groups
* Dependencies
* Data Providers
* Parallel Execution
* Reporting

---

## TestNG Installation

### Maven Dependency

```xml
<dependency>
    <groupId>org.testng</groupId>
    <artifactId>testng</artifactId>
    <version>7.11.0</version>
    <scope>test</scope>
</dependency>
```

---

## TestNG Annotations

### Definition

Annotations control the execution flow of test cases.

---

## @Test

### Definition

Marks a method as a test case.

### Example

```java
import org.testng.annotations.Test;

public class DemoTest {

    @Test
    public void loginTest() {

        System.out.println("Login Test");
    }
}
```

---

## @BeforeMethod

### Definition

Executes before every test method.

### Example

```java
@BeforeMethod
public void setup() {

    System.out.println("Browser Open");
}
```

---

## @AfterMethod

### Definition

Executes after every test method.

### Example

```java
@AfterMethod
public void teardown() {

    System.out.println("Browser Close");
}
```

---

## @BeforeClass

### Definition

Executes once before all test methods in a class.

### Example

```java
@BeforeClass
public void beforeClass() {

    System.out.println("Before Class");
}
```

---

## @AfterClass
### Definition
Executes once after all test methods in a class.
### Example

```java
@AfterClass
public void afterClass() {

    System.out.println("After Class");
}
```

---
## @BeforeSuite
### Definition
Executes before the entire TestNG suite.
### Example

```java
@BeforeSuite
public void beforeSuite() {

    System.out.println("Before Suite");
}
```

---

## @AfterSuite

### Definition

Executes after the entire TestNG suite.

### Example

```java
@AfterSuite
public void afterSuite() {

    System.out.println("After Suite");
}
```

---

## Annotation Execution Order

### Flow

```text
@BeforeSuite
@BeforeClass
@BeforeMethod
@Test
@AfterMethod
@AfterClass
@AfterSuite
```

---

## Assertions

### Definition

Assertions are used to validate expected and actual results.

### Package

```java
import org.testng.Assert;
```

---

## assertEquals()

### Definition

Verifies whether two values are equal.

### Example

```java
Assert.assertEquals(
"Google",
"Google"
);
```

---

## assertTrue()

### Definition

Passes if condition is true.

### Example

```java
Assert.assertTrue(true);
```

---

## assertFalse()

### Definition

Passes if condition is false.

### Example

```java
Assert.assertFalse(false);
```

---

## assertNull()

### Definition

Passes if object is null.

### Example

```java
Assert.assertNull(null);
```

---

## assertNotNull()

### Definition

Passes if object is not null.

### Example

```java
Assert.assertNotNull("Selenium");
```

---

## Test Priority

### Definition

Controls execution order of test methods.

### Example

```java
@Test(priority = 1)
public void login() {
}

@Test(priority = 2)
public void search() {
}

@Test(priority = 3)
public void logout() {
}
```

### Execution Order

```text
login
search
logout
```

---

## Groups

### Definition

Groups allow execution of specific sets of test cases.

### Example

```java
@Test(groups = {"smoke"})
public void loginTest() {
}

@Test(groups = {"regression"})
public void searchTest() {
}
```

---

## Execute Group from XML

### Example

```xml
<groups>
    <run>
        <include name="smoke"/>
    </run>
</groups>
```

---

## Dependency Methods

### Definition

A test depends on another test's successful execution.

### Example

```java
@Test
public void login() {
}

@Test(dependsOnMethods = "login")
public void search() {
}
```

### Flow

```text
login
↓
search
```

---

## Invocation Count

### Definition

Runs the same test multiple times.

### Example

```java
@Test(invocationCount = 3)
public void loginTest() {

    System.out.println("Executed");
}
```

### Output

```text
Executed
Executed
Executed
```

---

## Parameterization

### Definition

Pass values to test methods through XML.

### Example

```java
@Parameters({"browser"})
@Test
public void launch(String browser) {

    System.out.println(browser);
}
```

---

## TestNG XML Parameter

### Example

```xml
<parameter
name="browser"
value="chrome"/>
```

---

## DataProvider

### Definition

Used to execute a test multiple times with different data.

### Example

```java
@DataProvider(name = "loginData")

public Object[][] data() {

    return new Object[][] {

        {"admin","admin123"},
        {"user","user123"}
    };
}
```

---

## Use DataProvider

### Example

```java
@Test(dataProvider = "loginData")

public void login(
String username,
String password
){

    System.out.println(username);
}
```

---

## TestNG XML

### Definition

Controls execution of test classes and suites.

### Example

```xml
<!DOCTYPE suite SYSTEM
"https://testng.org/testng-1.0.dtd">

<suite name="Suite">

    <test name="Test">

        <classes>

            <class
            name="tests.LoginTest"/>

        </classes>

    </test>

</suite>
```

---

## Parallel Execution

### Definition

Runs multiple tests simultaneously.

### Example

```xml
<suite
name="Suite"
parallel="tests"
thread-count="2">
```

### Benefits

* Faster execution
* Better resource utilization

---

## TestNG Reports

### Definition

TestNG automatically generates reports after execution.

### Location

```text
test-output
```

### Files

```text
test-output
│
├── emailable-report.html
├── index.html
```

---

## Complete Example

### TestNG Test Class

```java
import org.testng.Assert;
import org.testng.annotations.Test;

public class LoginTest {

    @Test

    public void login() {

        String title = "Google";

        Assert.assertEquals(
        title,
        "Google"
        );
    }
}
```

---

## Common TestNG Annotations

| Annotation    | Purpose           |
| ------------- | ----------------- |
| @Test         | Test Method       |
| @BeforeMethod | Before Each Test  |
| @AfterMethod  | After Each Test   |
| @BeforeClass  | Before Class      |
| @AfterClass   | After Class       |
| @BeforeSuite  | Before Suite      |
| @AfterSuite   | After Suite       |
| @DataProvider | Provide Test Data |
| @Parameters   | XML Parameters    |

---

## Common Assertion Methods

| Method          | Purpose           |
| --------------- | ----------------- |
| assertEquals()  | Compare values    |
| assertTrue()    | Validate true     |
| assertFalse()   | Validate false    |
| assertNull()    | Validate null     |
| assertNotNull() | Validate not null |

---

## Best Practices

### Use Assertions for Validation

```java
Assert.assertEquals(actual, expected);
```

---

### Use DataProvider for Multiple Data Sets

Avoid hardcoding test data.

---

### Use Groups

```java
@Test(groups={"smoke"})
```

---

### Use Dependencies Carefully

Avoid long dependency chains.

---

### Use TestNG XML for Suite Management

Makes execution easier and more organized.

---
---
# Module 18: Maven

## What is Maven?

### Definition

Maven is a build automation and dependency management tool used primarily for Java projects.

### Purpose

* Manage project dependencies
* Build projects automatically
* Standardize project structure
* Run tests
* Generate reports
* Package applications

### Features

* Dependency Management
* Build Automation
* Plugin Support
* Project Standardization
* Reporting

---

## Why Maven in Selenium?

### Advantages

* Automatically downloads Selenium libraries
* Manages dependencies easily
* Reduces manual JAR management
* Integrates with TestNG and Jenkins
* Supports build automation

---

## Maven Architecture

### Flow

```text
Project
   │
   ▼
pom.xml
   │
   ▼
Maven Repository
   │
   ▼
Dependencies Downloaded
   │
   ▼
Build Project
```

---

## Maven Project Structure

### Standard Structure

```text
Project
│
├── src
│   ├── main
│   │   └── java
│   │
│   └── test
│       └── java
│
├── target
│
└── pom.xml
```

---

## pom.xml

### Definition

POM stands for Project Object Model.

### Purpose

* Stores project information
* Stores dependencies
* Stores plugins
* Controls build configuration

### Basic Structure

```xml
<project>

    <modelVersion>4.0.0</modelVersion>

    <groupId>com.demo</groupId>

    <artifactId>SeleniumProject</artifactId>

    <version>1.0</version>

</project>
```

---

## Maven Coordinates

### groupId

#### Definition

Identifies the organization or company.

### Example

```xml
<groupId>com.demo</groupId>
```

---

### artifactId

#### Definition

Project name.

### Example

```xml
<artifactId>SeleniumProject</artifactId>
```

---

### version

#### Definition

Project version number.

### Example

```xml
<version>1.0</version>
```

---

## Dependencies

### Definition

External libraries required by the project.

### Example

Selenium Library

```xml
<dependency>

    <groupId>org.seleniumhq.selenium</groupId>

    <artifactId>selenium-java</artifactId>

    <version>4.33.0</version>

</dependency>
```

---

## Adding TestNG Dependency

### Example

```xml
<dependency>

    <groupId>org.testng</groupId>

    <artifactId>testng</artifactId>

    <version>7.11.0</version>

    <scope>test</scope>

</dependency>
```

---

## Complete Dependencies Example

```xml
<dependencies>

    <dependency>

        <groupId>org.seleniumhq.selenium</groupId>

        <artifactId>selenium-java</artifactId>

        <version>4.33.0</version>

    </dependency>

    <dependency>

        <groupId>org.testng</groupId>

        <artifactId>testng</artifactId>

        <version>7.11.0</version>

    </dependency>

</dependencies>
```

---

## Maven Repository

### Definition

A central storage location for Maven dependencies.

### Purpose

Downloads required libraries automatically.

### Example

Search:

```text
Selenium Java Maven Dependency
```

Copy dependency and paste into `pom.xml`.

---

## Local Repository

### Definition

Dependencies downloaded by Maven are stored locally.

### Default Location

```text
C:\Users\User\.m2\repository
```

---

## Maven Build Lifecycle

### Definition

A sequence of phases executed during project build.

### Main Phases

```text
validate
compile
test
package
verify
install
deploy
```

---

## validate

### Purpose

Validates project structure and configuration.

### Command

```bash
mvn validate
```

---

## compile

### Purpose

Compiles source code.

### Command

```bash
mvn compile
```

---

## test

### Purpose

Runs test cases.

### Command

```bash
mvn test
```

---

## package

### Purpose

Creates JAR or WAR file.

### Command

```bash
mvn package
```

---

## install

### Purpose

Installs package into local repository.

### Command

```bash
mvn install
```

---

## clean

### Definition

Deletes previous build files.

### Command

```bash
mvn clean
```

### Removes

```text
target/
```

---

## Common Maven Commands

### Clean Project

```bash
mvn clean
```

---
### Compile Project
```bash
mvn compile
```
---
### Run Tests
```bash
mvn test
```
---
### Create Package
```bash
mvn package
```
---
### Install Project
```bash
mvn install
```
---
## Maven Plugins
### Definition
Plugins provide additional functionality.
### Examples
* Compiler Plugin
* Surefire Plugin
* Jar Plugin

---

## Maven Compiler Plugin

### Purpose

Compiles Java source code.

### Example

```xml
<plugin>

    <groupId>
    org.apache.maven.plugins
    </groupId>

    <artifactId>
    maven-compiler-plugin
    </artifactId>

    <version>3.14.0</version>

</plugin>
```

---

## Maven Surefire Plugin

### Purpose

Executes TestNG and JUnit tests.

### Example

```xml
<plugin>

    <groupId>
    org.apache.maven.plugins
    </groupId>

    <artifactId>
    maven-surefire-plugin
    </artifactId>

</plugin>
```

---

## Running TestNG Using Maven

### Command

```bash
mvn test
```

### Output

```text
BUILD SUCCESS
```

---

## Dependency Scope

### Definition

Determines where a dependency is available.

### Common Scopes

| Scope    | Purpose                 |
| -------- | ----------------------- |
| compile  | Default scope           |
| test     | Test execution only     |
| provided | Provided by server      |
| runtime  | Required during runtime |

---

## Effective POM

### Definition

Final POM generated after combining all Maven configurations.

### Command

```bash
mvn help:effective-pom
```

---

## Maven Profiles

### Definition

Used to run different configurations for different environments.

### Example

```xml
<profiles>

    <profile>

        <id>qa</id>

    </profile>

    <profile>

        <id>prod</id>

    </profile>

</profiles>
```

---

## Activate Profile

### Command

```bash
mvn test -Pqa
```

---

## Complete pom.xml Example

```xml
<project>

    <modelVersion>4.0.0</modelVersion>

    <groupId>com.demo</groupId>

    <artifactId>SeleniumProject</artifactId>

    <version>1.0</version>

    <dependencies>

        <dependency>

            <groupId>
            org.seleniumhq.selenium
            </groupId>

            <artifactId>
            selenium-java
            </artifactId>

            <version>
            4.33.0
            </version>

        </dependency>

        <dependency>

            <groupId>
            org.testng
            </groupId>

            <artifactId>
            testng
            </artifactId>

            <version>
            7.11.0
            </version>

        </dependency>

    </dependencies>

</project>
```

---

## Common Maven Terms

| Term       | Meaning                     |
| ---------- | --------------------------- |
| POM        | Project Object Model        |
| Dependency | External Library            |
| Repository | Storage of Libraries        |
| Plugin     | Additional Functionality    |
| Build      | Project Compilation Process |
| Lifecycle  | Build Execution Stages      |

---

## Best Practices

### Use Maven for Dependency Management

Avoid manually downloading JAR files.

---

### Keep Dependencies Updated

Use stable versions.

---

### Use Maven Standard Structure

Improves maintainability.

---

### Run Clean Before Build

```bash
mvn clean install
```

---

### Avoid Unused Dependencies

Reduces project size.

---
---
# Module 19: Page Object Model (POM)

## What is Page Object Model (POM)?

### Definition

Page Object Model (POM) is a design pattern used in Selenium automation to separate web element locators and page actions from test scripts.

### Purpose

* Improve code reusability
* Improve maintainability
* Reduce code duplication
* Easy updates when UI changes

### Without POM

```java
driver.findElement(By.id("username"))
      .sendKeys("admin");

driver.findElement(By.id("password"))
      .sendKeys("admin123");

driver.findElement(By.id("loginBtn"))
      .click();
```

### Problem

* Locators scattered everywhere
* Difficult maintenance
* Repeated code

---

## POM Architecture

### Structure

```text
Project
│
├── pageobjects
│     ├── LoginPage.java
│     ├── HomePage.java
│
├── testcases
│     ├── LoginTest.java
│
└── utilities
```

### Flow

```text
Test Class
      │
      ▼
Page Class
      │
      ▼
Web Elements
```

---

## Page Class

### Definition

A Page Class contains:

* Locators
* Page Actions
* Reusable Methods

### Example

```java
public class LoginPage {

}
```

---

## Creating Login Page

### Locators

```java
By username =
By.id("username");

By password =
By.id("password");

By loginButton =
By.id("loginBtn");
```

---

### Constructor

### Definition

Used to initialize WebDriver.

### Example

```java
WebDriver driver;

public LoginPage(WebDriver driver){

    this.driver = driver;
}
```

---

## Page Methods

### Enter Username

```java
public void enterUsername(
String user
){

    driver.findElement(username)
          .sendKeys(user);
}
```

---

### Enter Password

```java
public void enterPassword(
String pass
){

    driver.findElement(password)
          .sendKeys(pass);
}
```

---

### Click Login

```java
public void clickLogin(){

    driver.findElement(loginButton)
          .click();
}
```

---

## Complete Login Page

### Example

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPage {

    WebDriver driver;

    By username =
    By.id("username");

    By password =
    By.id("password");

    By loginButton =
    By.id("loginBtn");

    public LoginPage(
    WebDriver driver
    ){

        this.driver = driver;
    }

    public void enterUsername(
    String user
    ){

        driver.findElement(username)
              .sendKeys(user);
    }

    public void enterPassword(
    String pass
    ){

        driver.findElement(password)
              .sendKeys(pass);
    }

    public void clickLogin(){

        driver.findElement(loginButton)
              .click();
    }
}
```

---

## Using Page Class in Test

### Example

```java
WebDriver driver =
new ChromeDriver();

driver.get(
"https://example.com"
);

LoginPage login =
new LoginPage(driver);

login.enterUsername(
"admin"
);

login.enterPassword(
"admin123"
);

login.clickLogin();
```
---
## Advantages of POM
### Reusability
Methods can be reused across multiple test cases.
### Maintainability
Locator changes only need updates in one place.
### Readability
Test scripts become easier to understand.
### Scalability
Supports large automation frameworks.

---

## Page Factory

### Definition

Page Factory is an advanced implementation of POM that uses annotations to initialize web elements.

### Package

```java
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
```

---

## @FindBy Annotation

### Definition

Used to locate web elements.

### Example

```java
@FindBy(id="username")

WebElement txtUsername;
```

---

## PageFactory.initElements()

### Definition

Initializes web elements.

### Example

```java
PageFactory.initElements(
driver,
this
);
```

---

## Login Page Using Page Factory

### Example

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    WebDriver driver;

    public LoginPage(
    WebDriver driver
    ){

        this.driver = driver;

        PageFactory.initElements(
        driver,
        this
        );
    }

    @FindBy(id="username")
    WebElement txtUsername;

    @FindBy(id="password")
    WebElement txtPassword;

    @FindBy(id="loginBtn")
    WebElement btnLogin;

    public void enterUsername(
    String user
    ){

        txtUsername.sendKeys(user);
    }

    public void enterPassword(
    String pass
    ){

        txtPassword.sendKeys(pass);
    }

    public void clickLogin(){

        btnLogin.click();
    }
}
```

---

## Page Factory Test Example

```java
LoginPage login =
new LoginPage(driver);

login.enterUsername(
"admin"
);

login.enterPassword(
"admin123"
);

login.clickLogin();
```

---

## POM with TestNG

### Example

```java
@Test

public void loginTest(){

    LoginPage login =
    new LoginPage(driver);

    login.enterUsername(
    "admin"
    );

    login.enterPassword(
    "admin123"
    );

    login.clickLogin();
}
```

---

## Reusable Methods

### Definition

Methods used across multiple pages and test cases.

### Example

```java
public void clickElement(
By locator
){

    driver.findElement(locator)
          .click();
}
```

---

## Base Page

### Definition

Parent class containing common methods.

### Example

```java
public class BasePage {

    WebDriver driver;

    public BasePage(
    WebDriver driver
    ){

        this.driver = driver;
    }
}
```

---

## Framework Structure Using POM

### Example

```text
Project
│
├── pageobjects
│     ├── LoginPage.java
│     ├── HomePage.java
│     └── CartPage.java
│
├── testcases
│     ├── LoginTest.java
│     └── SearchTest.java
│
├── utilities
│     ├── ExcelUtils.java
│     └── ScreenshotUtils.java
│
└── base
      └── BaseClass.java
```

---

## POM vs Normal Approach

| Normal Approach       | POM                          |
| --------------------- | ---------------------------- |
| Locators inside tests | Locators inside page classes |
| Difficult maintenance | Easy maintenance             |
| Code duplication      | Reusable code                |
| Less scalable         | Highly scalable              |

---

## Best Practices

### One Page = One Class

Example:

```text
Login Page → LoginPage.java
Home Page → HomePage.java
Cart Page → CartPage.java
```

---

### Keep Locators Private

```java
private By username =
By.id("username");
```

---

### Create Reusable Methods

```java
enterUsername()

enterPassword()

clickLogin()
```

---

### Use Meaningful Method Names

Good:

```java
clickLoginButton()
```

Bad:

```java
btn1()
```

---

### Use Page Factory for Large Projects

Improves readability and maintenance.

---

## Complete POM Workflow

### Flow

```text
Test Case
    │
    ▼
Page Object
    │
    ▼
Locator
    │
    ▼
Action
    │
    ▼
Browser
```

---
---
# Module 20: Data Driven Framework

## What is Data Driven Framework?

### Definition

Data Driven Framework is an automation framework where test data is stored outside the test scripts and supplied dynamically during execution.

### Purpose

* Separate test data from code
* Execute same test with multiple data sets
* Improve maintainability
* Reduce code duplication

### Example

Instead of:

```java
login("admin","admin123");

login("user","user123");

login("guest","guest123");
```

Store data in Excel and execute automatically.

---

## Framework Architecture

### Structure

```text
Test Script
      │
      ▼
Excel File
      │
      ▼
Read Data
      │
      ▼
Execute Test
```
---
## Advantages
### Reusability
Same test script works with multiple data sets.
### Maintainability
Test data can be changed without modifying code.
### Scalability
Supports large volumes of test data.
### Better Coverage
Multiple test scenarios can be executed easily.

---

## Test Data Sources

### Common Sources

* Excel
* CSV
* JSON
* XML
* Database

### Most Common

Excel File

---

## Apache POI

### Definition

Apache POI is a Java library used to read and write Microsoft Excel files.

### Maven Dependency

```xml
<dependency>

    <groupId>
    org.apache.poi
    </groupId>

    <artifactId>
    poi-ooxml
    </artifactId>

    <version>
    5.4.1
    </version>

</dependency>
```

---

## Excel File Structure

### Example

| Username | Password |
| -------- | -------- |
| admin    | admin123 |
| user     | user123  |
| guest    | guest123 |

---

## Reading Excel File

### Required Classes

```java
import java.io.FileInputStream;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import org.apache.poi.xssf.usermodel.XSSFSheet;
```

---

## Open Excel File

### Example

```java
FileInputStream file =
new FileInputStream(
"testdata/LoginData.xlsx"
);
```

---

## Create Workbook

### Example

```java
XSSFWorkbook workbook =
new XSSFWorkbook(file);
```

---

## Access Sheet

### Example

```java
XSSFSheet sheet =
workbook.getSheet("Sheet1");
```

---

## Get Row Count

### Example

```java
int rows =
sheet.getLastRowNum();

System.out.println(rows);
```

---

## Get Cell Data

### Example

```java
String username =
sheet.getRow(1)
     .getCell(0)
     .toString();

System.out.println(username);
```

---

## Read Complete Excel Data

### Example

```java
for(int r=1;
    r<=sheet.getLastRowNum();
    r++){

    String username =
    sheet.getRow(r)
         .getCell(0)
         .toString();

    String password =
    sheet.getRow(r)
         .getCell(1)
         .toString();

    System.out.println(
    username + " " + password
    );
}
```

---

## Writing Data to Excel

### Create Workbook

```java
XSSFWorkbook workbook =
new XSSFWorkbook();
```

---

## Create Sheet

```java
XSSFSheet sheet =
workbook.createSheet(
"Results"
);
```

---

## Create Row

```java
sheet.createRow(0);
```

---

## Create Cell

```java
sheet.getRow(0)
     .createCell(0)
     .setCellValue("PASS");
```

---

## Save Excel File

```java
FileOutputStream file =
new FileOutputStream(
"Results.xlsx"
);

workbook.write(file);
```

---

## Excel Utility Class

### Definition

Reusable class used for reading and writing Excel data.

### Example

```java
public class ExcelUtils {

}
```

---

## Get Row Count Method

### Example

```java
public int getRowCount(
String sheetName
){

    return sheet.getLastRowNum();
}
```

---

## Get Cell Data Method

### Example

```java
public String getCellData(
int row,
int col
){

    return sheet.getRow(row)
                .getCell(col)
                .toString();
}
```

---

## Using Excel Data in Selenium

### Example

```java
String username =
sheet.getRow(1)
     .getCell(0)
     .toString();

String password =
sheet.getRow(1)
     .getCell(1)
     .toString();

driver.findElement(
By.id("username")
).sendKeys(username);

driver.findElement(
By.id("password")
).sendKeys(password);
```

---

## DataProvider with Excel

### Example

```java
@DataProvider(
name="LoginData"
)

public Object[][] getData(){

    return new Object[][]{

        {"admin","admin123"},
        {"user","user123"}
    };
}
```
---
## Use DataProvider

### Example

```java
@Test(
dataProvider="LoginData"
)

public void loginTest(
String user,
String pass
){

    System.out.println(user);
}
```
---
## Parameterization
### Definition
Passing different sets of data to the same test case.
### Example
```text
admin  admin123

user   user123

guest  guest123
```
Single script executes all rows.
---
## Data Driven Login Example
### Excel Data

| Username | Password |
| -------- | -------- |
| admin    | admin123 |
| user     | user123  |

---
### Test Flow

```text
Read Excel
     │
     ▼
Get Username
     │
     ▼
Get Password
     │
     ▼
Login
     │
     ▼
Validate
```
---
## Complete Excel Reading Example
```java
import java.io.FileInputStream;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ExcelDemo {

    public static void main(String[] args)
    throws Exception {

        FileInputStream file =
        new FileInputStream(
        "LoginData.xlsx"
        );

        XSSFWorkbook workbook =
        new XSSFWorkbook(file);

        XSSFSheet sheet =
        workbook.getSheet(
        "Sheet1"
        );

        int rows =
        sheet.getLastRowNum();

        for(int r=1;
            r<=rows;
            r++){

            String username =
            sheet.getRow(r)
                 .getCell(0)
                 .toString();

            String password =
            sheet.getRow(r)
                 .getCell(1)
                 .toString();

            System.out.println(
            username + " " +
            password
            );
        }

        workbook.close();
    }
}
```
---
## Data Driven Framework Structure
### Example

```text
Project
│
├── testdata
│     └── LoginData.xlsx
│
├── utilities
│     └── ExcelUtils.java
│
├── pageobjects
│     └── LoginPage.java
│
└── testcases
      └── LoginTest.java
```
---
## Best Practices
### Keep Test Data Separate
Store data in Excel or external files.
---
### Use Utility Classes
Create reusable Excel methods.
---
### Close Workbook After Use
```java
workbook.close();
```
---
### Avoid Hardcoded Data
Bad:
```java
login(
"admin",
"admin123"
);
```
Good:
```java
Read from Excel
```
---
### Validate Data Before Execution
Ensure cells contain valid values.
---
## Common Exceptions
### FileNotFoundException
#### Reason
Excel file not found.
#### Solution
Verify file path.
---
### NullPointerException
#### Reason
Row or cell does not exist.
#### Solution
Check row and cell before reading.
---
### IOException
#### Reason
Error while reading or writing file.
#### Solution
Verify file permissions.

---
---
