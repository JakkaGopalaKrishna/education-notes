# Module 21: Hybrid Framework

## What is a Hybrid Framework?

### Definition

A Hybrid Framework is an automation framework that combines multiple framework types such as:

* Page Object Model (POM)
* Data Driven Framework
* Keyword Driven Framework
* TestNG Framework

### Purpose

* Improve maintainability
* Increase reusability
* Support large projects
* Reduce code duplication

---

## Why Hybrid Framework?

### Problems with Simple Frameworks

* Difficult to scale
* Limited reusability
* Hard maintenance

### Solution

Combine the advantages of multiple frameworks into one framework.

---

## Hybrid Framework Architecture

### Structure

```text
Project
│
├── src/test/java
│
├── pageobjects
│
├── testcases
│
├── utilities
│
├── testdata
│
├── reports
│
├── screenshots
│
├── config
│
└── pom.xml
```

---

## Framework Components

### Page Object Model

Stores:

* Locators
* Page methods
* Page actions

### Example

```java
public class LoginPage {

}
```

---

### Data Driven Framework

Stores test data externally.

### Example

```text
LoginData.xlsx
```

---

### TestNG

Controls:

* Test execution
* Reporting
* Grouping
* Parallel execution

### Example

```java
@Test
public void loginTest(){

}
```

---

### Utilities

Contains reusable helper methods.

### Examples

* Excel Utility
* Screenshot Utility
* Wait Utility
* Config Utility

---

## Framework Folder Structure

### Complete Structure

```text
Project
│
├── src/test/java
│
├── pageobjects
│     ├── LoginPage.java
│     ├── HomePage.java
│     └── CartPage.java
│
├── testcases
│     ├── LoginTest.java
│     ├── SearchTest.java
│     └── CartTest.java
│
├── utilities
│     ├── ExcelUtils.java
│     ├── ScreenshotUtils.java
│     ├── WaitUtils.java
│     └── ConfigReader.java
│
├── testdata
│     └── LoginData.xlsx
│
├── screenshots
│
├── reports
│
├── config
│     └── config.properties
│
└── pom.xml
```

---

## Base Class

### Definition

Base Class contains common setup and teardown methods used by all test classes.

### Purpose

* Browser launch
* Browser close
* Common configuration

### Example

```java
public class BaseClass {

    WebDriver driver;

}
```

---

## Browser Setup

### Example

```java
public void setup(){

    driver =
    new ChromeDriver();

    driver.manage()
          .window()
          .maximize();
}
```

---

## Browser Close

### Example

```java
public void teardown(){

    driver.quit();
}
```

---

## TestNG Integration

### Example

```java
@BeforeMethod

public void setup(){

}
```

```java
@AfterMethod

public void teardown(){

}
```

---

## Config File

### Definition

Stores framework configuration values.

### Example

```properties
browser=chrome

url=https://example.com

username=admin

password=admin123
```

---

## Config Reader Class

### Purpose

Reads values from properties file.

### Example

```java
Properties prop =
new Properties();
```

---

## Load Config File

### Example

```java
FileInputStream file =
new FileInputStream(
"config.properties"
);

prop.load(file);
```

---

## Read Property

### Example

```java
String browser =
prop.getProperty(
"browser"
);
```

---

## Excel Utility Class

### Purpose

Read data from Excel files.

### Example

```java
public class ExcelUtils {

}
```

---

## Screenshot Utility

### Purpose

Capture screenshots during execution.

### Example

```java
public static void capture(){

}
```

---

## Wait Utility

### Purpose

Centralized wait handling.

### Example

```java
public static void waitForElement(){

}
```

---

## Login Page Example

### Locators

```java
By username =
By.id("username");

By password =
By.id("password");

By loginBtn =
By.id("login");
```

---

### Methods

```java
public void enterUsername(
String user
){

}
```

```java
public void enterPassword(
String pass
){

}
```

```java
public void clickLogin(){

}
```

---

## Login Test Example

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

## Data Driven Login Test

### Example

```java
@Test(
dataProvider="LoginData"
)

public void loginTest(
String user,
String pass
){

    LoginPage login =
    new LoginPage(driver);

    login.enterUsername(user);

    login.enterPassword(pass);

    login.clickLogin();
}
```

---

## Framework Execution Flow

### Flow

```text
TestNG XML
     │
     ▼
Base Class
     │
     ▼
Test Case
     │
     ▼
Page Object
     │
     ▼
Excel Data
     │
     ▼
Browser
```

---

## Logging

### Definition

Logging records framework execution details.

### Example

```java
System.out.println(
"Login Successful"
);
```

---

### Real Framework Logging

Using Log4j:

```java
logger.info(
"Login Successful"
);
```

---

## Reporting

### Definition

Reports display execution results.

### Examples

* TestNG Report
* Extent Report
* Allure Report

---

## Screenshots on Failure

### Example

```java
if(testFailed){

    captureScreenshot();

}
```

---

## Reusable Components

### Definition

Methods that can be used across multiple tests.

### Examples

```java
click()
```

```java
type()
```

```java
waitForElement()
```

```java
captureScreenshot()
```

---

## Advantages of Hybrid Framework

### Reusability

Code can be reused across tests.

### Scalability

Suitable for large applications.

### Maintainability

Easy updates and modifications.

### Readability

Organized framework structure.

### Flexibility

Supports multiple framework techniques.

---

## Hybrid Framework vs Data Driven Framework

| Data Driven       | Hybrid Framework             |
| ----------------- | ---------------------------- |
| Focus on data     | Combines multiple frameworks |
| Limited structure | Complete framework structure |
| Less scalable     | Highly scalable              |
| Smaller projects  | Enterprise projects          |

---

## Best Practices

### Use Page Object Model

Keep locators separate from tests.

---

### Use Utility Classes

Avoid duplicate code.

---

### Keep Test Data External

Use Excel or databases.

---

### Use Config Files

Avoid hardcoded URLs and credentials.

---

### Capture Screenshots on Failure

Improves debugging.

---

### Use Reporting Tools

Generate detailed execution reports.

---

## Real-Time Hybrid Framework Structure

### Example

```text
AutomationFramework
│
├── pageobjects
├── testcases
├── utilities
├── testdata
├── config
├── reports
├── screenshots
├── logs
└── pom.xml
```

---
---
# Module 22: Selenium Grid

## What is Selenium Grid?

### Definition

Selenium Grid is a tool used to execute Selenium test cases on multiple browsers, operating systems, and machines simultaneously.

### Purpose

* Parallel Execution
* Cross Browser Testing
* Cross Platform Testing
* Faster Test Execution

---

## Why Selenium Grid?

### Without Selenium Grid

```text
Test Case 1
      ↓
Test Case 2
      ↓
Test Case 3
```

Execution is sequential and takes more time.

---

### With Selenium Grid

```text
Test Case 1 → Chrome
Test Case 2 → Firefox
Test Case 3 → Edge
```

Execution happens simultaneously.

---

## Benefits of Selenium Grid

### Parallel Execution

Multiple test cases execute at the same time.

### Faster Execution

Reduces total execution time.

### Cross Browser Testing

Run tests on different browsers.

### Cross Platform Testing

Run tests on Windows, Linux, and macOS.

### Distributed Testing

Run tests across multiple machines.

---

## Selenium Grid Architecture

### Components

* Hub
* Node

### Architecture Diagram

```text
                Hub
                 │
        ┌────────┼────────┐
        │        │        │
      Node1    Node2    Node3
        │        │        │
     Chrome   Firefox   Edge
```

---

## Hub

### Definition

Hub is the central server that receives test requests and distributes them to available nodes.

### Responsibilities

* Receive test execution requests
* Manage nodes
* Route tests to nodes

---

## Node

### Definition

Node is a machine connected to the Hub where tests actually execute.

### Responsibilities

* Run test cases
* Execute browser actions
* Return results to Hub

---

## Selenium Grid 4 Architecture

### Definition

Selenium Grid 4 combines Hub and Node functionality into a simplified architecture.

### Structure

```text
Client
   │
   ▼
Selenium Grid
   │
   ▼
Browsers
```

### Benefits

* Simpler setup
* Better scalability
* Improved performance

---

## Selenium Grid Setup

### Download Selenium Server

Download Selenium Server JAR file.

### Verify Java

```bash
java -version
```

### Verify Selenium Server

```bash
java -jar selenium-server.jar --help
```

---

## Start Selenium Grid

### Command

```bash
java -jar selenium-server.jar standalone
```

### Output

```text
Selenium Grid started successfully
```

---

## Grid URL

### Default URL

```text
http://localhost:4444
```

### Grid Console

Open:

```text
http://localhost:4444
```

in the browser.

---

## Create RemoteWebDriver

### Definition

RemoteWebDriver sends commands to Selenium Grid instead of directly to a local browser.

### Package

```java
import org.openqa.selenium.remote.RemoteWebDriver;
```

---

## Chrome Options

### Example

```java
ChromeOptions options =
new ChromeOptions();
```

---

## Connect to Grid

### Example

```java
URL gridURL =
new URL(
"http://localhost:4444"
);

WebDriver driver =
new RemoteWebDriver(
gridURL,
options
);
```

---

## Execute Test on Chrome

### Example

```java
import java.net.URL;

import org.openqa.selenium.WebDriver;

import org.openqa.selenium.chrome.ChromeOptions;

import org.openqa.selenium.remote.RemoteWebDriver;

ChromeOptions options =
new ChromeOptions();

WebDriver driver =
new RemoteWebDriver(

new URL(
"http://localhost:4444"
),

options
);

driver.get(
"https://www.google.com"
);

driver.quit();
```

---

## Execute Test on Firefox

### Example

```java
FirefoxOptions options =
new FirefoxOptions();

WebDriver driver =
new RemoteWebDriver(

new URL(
"http://localhost:4444"
),

options
);
```

---

## Execute Test on Edge

### Example

```java
EdgeOptions options =
new EdgeOptions();

WebDriver driver =
new RemoteWebDriver(

new URL(
"http://localhost:4444"
),

options
);
```

---

## Browser Options

### Chrome

```java
ChromeOptions options =
new ChromeOptions();
```

---

### Firefox

```java
FirefoxOptions options =
new FirefoxOptions();
```

---

### Edge

```java
EdgeOptions options =
new EdgeOptions();
```

---

## Parallel Testing with TestNG

### TestNG XML

```xml
<suite
name="GridSuite"
parallel="tests"
thread-count="3">

</suite>
```

### Purpose

Runs multiple tests simultaneously.

---

## Parallel Browser Example

### Chrome Test

```java
@Test

public void chromeTest(){

}
```

### Firefox Test

```java
@Test

public void firefoxTest(){

}
```

### Edge Test

```java
@Test

public void edgeTest(){

}
```

All tests execute simultaneously.

---

## Grid Execution Flow

### Flow

```text
TestNG
   │
   ▼
RemoteWebDriver
   │
   ▼
Selenium Grid
   │
   ▼
Browser
```

---

## Desired Capabilities

### Definition

Used to specify browser configuration.

### Example

```java
ChromeOptions options =
new ChromeOptions();

options.setBrowserVersion(
"latest"
);
```

---

## Cross Browser Testing

### Definition

Executing the same test case on multiple browsers.

### Example

```text
Chrome
Firefox
Edge
Safari
```

### Benefit

Ensures application compatibility.

---

## Cross Platform Testing

### Definition

Executing tests on different operating systems.

### Example

```text
Windows
Linux
macOS
```

---

## Common Selenium Grid Commands

### Start Grid

```bash
java -jar selenium-server.jar standalone
```

---

### Check Grid Status

Open:

```text
http://localhost:4444
```

---

### Stop Grid

```bash
Ctrl + C
```

---

## Selenium Grid vs Local Execution

| Local Execution      | Selenium Grid      |
| -------------------- | ------------------ |
| Single machine       | Multiple machines  |
| Single browser       | Multiple browsers  |
| Sequential execution | Parallel execution |
| Slower               | Faster             |
| Limited scalability  | Highly scalable    |

---

## Common Exceptions

### SessionNotCreatedException

#### Reason

Browser version mismatch.

#### Solution

Update browser and Selenium.

---

### UnreachableBrowserException

#### Reason

Grid server unavailable.

#### Solution

Verify Grid is running.

---

### MalformedURLException

#### Reason

Invalid Grid URL.

#### Example

```java
new URL(
"wrong-url"
);
```

#### Solution

Verify URL format.

---

## Best Practices

### Use Selenium Grid for Regression Suites

Large test suites execute much faster.

---

### Use Parallel Execution

```xml
parallel="tests"
```

Improves execution speed.

---

### Keep Browser Versions Updated

Avoid compatibility issues.

---

### Use RemoteWebDriver

Required for Grid execution.

---

### Monitor Grid Console

Verify nodes and browser availability.

---

## Real-Time Use Cases

### Regression Testing

Execute hundreds of test cases quickly.

### Cross Browser Validation

Verify application behavior across browsers.

### CI/CD Pipelines

Execute tests automatically after deployments.

### Large Automation Projects

Reduce execution time significantly.

---
---
# Module 23: Logging and Reporting

## What is Logging?

### Definition

Logging is the process of recording information about test execution, application behavior, and framework activities.

### Purpose

* Track test execution flow
* Debug failures
* Monitor framework behavior
* Maintain execution history

### Example

```java id="h8r4pw"
System.out.println(
"Login Successful"
);
```

---

## Problems with System.out.println()

### Limitations

* No log levels
* Difficult to manage
* Not suitable for large projects
* No log files generated

### Example

```java id="s8hkdi"
System.out.println(
"Browser Opened"
);
```

---

## What is Log4j?

### Definition

Log4j is a Java logging framework used to generate structured logs.

### Benefits

* Log levels
* Log files
* Easy debugging
* Professional logging

---

## Log4j Maven Dependency

### Example

```xml id="xvl8np"
<dependency>

    <groupId>
    org.apache.logging.log4j
    </groupId>

    <artifactId>
    log4j-core
    </artifactId>

    <version>
    2.25.1
    </version>

</dependency>
```

---

## Logger Class

### Import

```java id="cikvse"
import org.apache.logging.log4j.Logger;

import org.apache.logging.log4j.LogManager;
```

---

## Create Logger Object

### Example

```java id="yibf0y"
Logger logger =
LogManager.getLogger(
this.getClass()
);
```

---

## Log Levels

### TRACE

Detailed execution information.

### DEBUG

Developer debugging information.

### INFO

General execution information.

### WARN

Warning messages.

### ERROR

Error messages.

### FATAL

Critical failures.

---

## Log Level Examples

### INFO

```java id="72ck3s"
logger.info(
"Login Successful"
);
```

---

### DEBUG

```java id="a7trqd"
logger.debug(
"Button Clicked"
);
```

---

### WARN

```java id="m1d8gf"
logger.warn(
"Element Not Visible"
);
```

---

### ERROR

```java id="udvby4"
logger.error(
"Login Failed"
);
```

---

### FATAL

```java id="6h0ty0"
logger.fatal(
"Application Crashed"
);
```

---

## Log4j Configuration File

### File Name

```text id="e3xq0e"
log4j2.xml
```

---

## Basic Configuration

### Example

```xml id="mbgmti"
<?xml version="1.0"?>

<Configuration>

</Configuration>
```

---

## Log File Location

### Example

```text id="4mgtbt"
logs
│
└── execution.log
```

---

## Logging in Selenium Test

### Example

```java id="i6vk0e"
logger.info(
"Browser Launched"
);

driver.get(
"https://example.com"
);

logger.info(
"Application Opened"
);

logger.info(
"Login Successful"
);
```

---

## Advantages of Logging

### Better Debugging

Easy identification of failures.

### Execution Tracking

Track complete execution flow.

### Historical Records

Maintain log history.

### Professional Framework

Industry standard approach.

---

## What is Reporting?

### Definition

Reporting is the process of generating execution results in a readable format.

### Purpose

* Show test results
* Track pass/fail status
* Share execution details
* Support analysis

---

## Types of Reports

### TestNG Reports

Generated automatically by TestNG.

### Extent Reports

Interactive HTML reports.

### Allure Reports

Advanced reporting framework.

---

## TestNG Reports

### Definition

Default reports generated after TestNG execution.

### Location

```text id="6hv8wp"
test-output
```

### Files

```text id="wxwl7v"
test-output
│
├── index.html
├── emailable-report.html
```

---

## View TestNG Report

### Open

```text id="mjlwm5"
emailable-report.html
```

in a browser.

---

## Extent Reports

### Definition

Extent Reports generate attractive and detailed HTML reports.

### Features

* Pass/Fail status
* Screenshots
* Charts
* Execution details

---

## Extent Report Dependency

### Example

```xml id="4v4n9z"
<dependency>

    <groupId>
    com.aventstack
    </groupId>

    <artifactId>
    extentreports
    </artifactId>

    <version>
    5.1.2
    </version>

</dependency>
```

---

## Create Extent Report

### Example

```java id="dw6a3g"
ExtentSparkReporter reporter =
new ExtentSparkReporter(
"./reports/report.html"
);
```

---

## Create ExtentReports Object

### Example

```java id="pvzjmu"
ExtentReports extent =
new ExtentReports();

extent.attachReporter(
reporter
);
```

---

## Create Test Entry

### Example

```java id="5cgkhz"
ExtentTest test =
extent.createTest(
"Login Test"
);
```

---

## Log Test Status

### PASS

```java id="yb7m3j"
test.pass(
"Login Successful"
);
```

---

### FAIL

```java id="9xwlkw"
test.fail(
"Login Failed"
);
```

---

### INFO

```java id="jqvrvw"
test.info(
"Browser Opened"
);
```

---

## Generate Report

### Example

```java id="ow06lu"
extent.flush();
```

### Purpose

Creates the final HTML report.

---

## Complete Extent Report Example

### Example

```java id="z3ij0y"
ExtentSparkReporter reporter =
new ExtentSparkReporter(
"./reports/report.html"
);

ExtentReports extent =
new ExtentReports();

extent.attachReporter(
reporter
);

ExtentTest test =
extent.createTest(
"Login Test"
);

test.pass(
"Login Successful"
);

extent.flush();
```

---

## Add Screenshot to Report

### Example

```java id="4mylfd"
test.addScreenCaptureFromPath(
"./screenshots/login.png"
);
```

---

## Allure Reports

### Definition

Allure is an advanced reporting tool used for generating professional reports.

### Features

* Rich UI
* Screenshots
* Test history
* Trend analysis

---

## Allure Dependency

### Example

```xml id="t4tlyv"
<dependency>

    <groupId>
    io.qameta.allure
    </groupId>

    <artifactId>
    allure-testng
    </artifactId>

    <version>
    2.29.1
    </version>

</dependency>
```

---

## Allure Annotation

### Example

```java id="9l17jc"
@Description(
"Verify Login Functionality"
)
```

---

## Reporting Flow

### Flow

```text id="5y5k6u"
Test Execution
      │
      ▼
Pass / Fail
      │
      ▼
Screenshot
      │
      ▼
Generate Report
```

---

## Logging vs Reporting

| Logging                   | Reporting                  |
| ------------------------- | -------------------------- |
| Records execution details | Displays execution results |
| Used for debugging        | Used for analysis          |
| Generates log files       | Generates HTML reports     |
| Developer-focused         | User-focused               |

---

## Framework Structure

### Example

```text id="xg0v75"
Project
│
├── logs
│     └── execution.log
│
├── reports
│     └── report.html
│
├── screenshots
│
└── testcases
```

---

## Best Practices

### Use Log4j Instead of System.out.println()

Professional and scalable.

---

### Capture Screenshots on Failure

Helps debugging.

---

### Generate Reports After Every Execution

Provides visibility into results.

---

### Store Logs and Reports Separately

```text id="w8fy2e"
logs/

reports/
```

---

### Use Meaningful Log Messages

Good:

```java id="3rxt44"
logger.info(
"User Logged In Successfully"
);
```

Bad:

```java id="7x0nkh"
logger.info("Done");
```

---

## Real-Time Usage

### Logging

* Browser launch
* Login
* Test execution
* Error handling

### Reporting

* Test summary
* Pass/Fail status
* Screenshots
* Execution history

---
---
# Module 24: Jenkins Integration (CI/CD)

## What is Jenkins?

### Definition

Jenkins is an open-source Continuous Integration (CI) and Continuous Delivery (CD) tool used to automate building, testing, and deployment of applications.

### Purpose

* Automate test execution
* Schedule test runs
* Integrate with Git
* Generate reports
* Support CI/CD pipelines

---

## Why Jenkins in Selenium?

### Benefits

* Automatic test execution
* No manual intervention
* Scheduled execution
* Easy integration with GitHub
* Supports Maven and TestNG
* Generates execution reports

---

## What is Continuous Integration (CI)?

### Definition

Continuous Integration is the practice of automatically building and testing code whenever changes are committed.

### Flow

```text
Developer
    │
    ▼
Git Repository
    │
    ▼
Jenkins Build
    │
    ▼
Execute Tests
    │
    ▼
Generate Report
```

---

## What is Continuous Delivery (CD)?

### Definition

Continuous Delivery automatically prepares applications for deployment after successful testing.

### Flow

```text
Code Commit
    │
    ▼
Build
    │
    ▼
Testing
    │
    ▼
Deployment Ready
```

---

## Jenkins Installation

### Prerequisites

* Java Installed
* Jenkins WAR File

### Verify Java

```bash
java -version
```

---

## Start Jenkins

### Command

```bash
java -jar jenkins.war
```

### Default URL

```text
http://localhost:8080
```

---

## Jenkins Dashboard

### Features

* Create Jobs
* Build Projects
* View Reports
* Configure Pipelines
* Manage Plugins

---

## Create First Jenkins Job

### Steps

1. Open Jenkins
2. Click New Item
3. Enter Job Name
4. Select Freestyle Project
5. Click OK

---

## Freestyle Project

### Definition

A simple Jenkins job used for executing builds and tests.

### Usage

* Selenium Tests
* Maven Builds
* Batch Scripts

---

## Source Code Management

### Git Integration

Select:

```text
Git
```

Enter Repository URL.

### Example

```text
https://github.com/user/project.git
```

---

## Build Triggers

### Definition

Triggers determine when Jenkins should run a job.

### Common Triggers

* Manual Trigger
* Scheduled Trigger
* GitHub Webhook
* Poll SCM

---

## Build Periodically

### Example

```text
H 9 * * *
```

### Meaning

Run daily at approximately 9 AM.

---

## Poll SCM

### Example

```text
H/5 * * * *
```

### Meaning

Check Git repository every 5 minutes.

---

## Build Step

### Execute Maven Command

```bash
mvn clean test
```

### Purpose

Compile project and run TestNG tests.

---

## Jenkins + Maven

### Configure Maven

Go to:

```text
Manage Jenkins
    │
    ▼
Global Tool Configuration
```

Add Maven installation.

---

## Maven Build Example

### Command

```bash
mvn clean install
```

---

## Jenkins Workspace

### Definition

Location where Jenkins stores project files.

### Example

```text
workspace/
```

---

## Jenkins Console Output

### Definition

Displays build execution logs.

### Example

```text
BUILD SUCCESS
```

---

## Jenkins Build Status

### Success

```text
Blue/Green
```

### Failure

```text
Red
```

---

## Execute Selenium Tests from Jenkins

### Example Build Command

```bash
mvn test
```

### Flow

```text
Jenkins
   │
   ▼
Maven
   │
   ▼
TestNG
   │
   ▼
Selenium
```

---

## TestNG Reports in Jenkins

### Post Build Action

Select:

```text
Publish TestNG Results
```

### Result

TestNG report appears in Jenkins dashboard.

---

## Archive Reports

### Example

```text
test-output/**
```

### Purpose

Store generated reports after execution.

---

## Jenkins Email Notification

### Purpose

Send build results through email.

### Trigger

* Success
* Failure
* Unstable Build

---

## Jenkins Pipeline

### Definition

Pipeline is a script-based way of defining CI/CD processes.

### File

```text
Jenkinsfile
```

---

## Basic Pipeline Example

```groovy
pipeline {

    agent any

    stages {

        stage('Build') {

            steps {

                sh 'mvn clean'
            }
        }

        stage('Test') {

            steps {

                sh 'mvn test'
            }
        }
    }
}
```

---

## Pipeline Stages

### Build

Compile application.

### Test

Execute automation tests.

### Report

Generate reports.

### Deploy

Deploy application.

---

## Jenkinsfile Flow

```text
Build
   │
   ▼
Test
   │
   ▼
Report
   │
   ▼
Deploy
```

---

## Jenkins with GitHub

### Workflow

```text
Developer
    │
    ▼
GitHub Push
    │
    ▼
Webhook
    │
    ▼
Jenkins Trigger
    │
    ▼
Execute Tests
```

---

## Jenkins with Selenium Framework

### Structure

```text
Framework
│
├── pageobjects
├── testcases
├── utilities
├── testdata
├── reports
├── screenshots
├── pom.xml
└── testng.xml
```

---

## Advantages of Jenkins

### Automation

No manual execution required.

### Scheduling

Run tests automatically.

### Reporting

Centralized result tracking.

### CI/CD Support

Integrates with deployment pipelines.

### Scalability

Supports large automation projects.

---

## Jenkins vs Manual Execution

| Manual Execution   | Jenkins               |
| ------------------ | --------------------- |
| User starts tests  | Automatic execution   |
| Time consuming     | Faster                |
| No scheduling      | Scheduled runs        |
| Local execution    | Centralized execution |
| Limited visibility | Detailed reports      |

---

## Best Practices

### Use Maven Commands

```bash
mvn clean test
```

---

### Store Code in Git

Use GitHub or GitLab repositories.

---

### Archive Reports

Store execution history.

---

### Configure Email Alerts

Notify team about failures.

---

### Use Pipelines

Preferred for modern automation projects.

---

## Real-Time Usage

### Nightly Regression

Run every night automatically.

### CI/CD Testing

Run after every code commit.

### Smoke Testing

Run after deployment.

### Cross Browser Execution

Trigger Selenium Grid tests.

---
---
# Module 25: Cucumber (BDD Framework)

## What is Cucumber?

### Definition

Cucumber is a Behavior Driven Development (BDD) tool used to write test scenarios in simple English language.

### Purpose

* Improve collaboration
* Easy understanding
* Business-readable test cases
* Automation with Selenium

### Features

* Gherkin Language
* Feature Files
* Step Definitions
* Data Driven Testing
* Reporting

---

## What is BDD?

### Definition

BDD (Behavior Driven Development) is a software development approach where requirements are written in a human-readable format.

### Example

```text
User opens login page

User enters username

User enters password

User clicks login button

User should login successfully
```

---

## Why Use Cucumber?

### Advantages

* Easy to understand
* Non-technical people can read scenarios
* Better communication
* Reusable steps
* Supports Selenium integration

---

## Cucumber Architecture

### Flow

```text
Feature File
      │
      ▼
Step Definition
      │
      ▼
Selenium Code
      │
      ▼
Browser
```

---

## Gherkin Language

### Definition

Gherkin is the language used to write Cucumber scenarios.

### Keywords

* Feature
* Scenario
* Given
* When
* Then
* And
* But

---

## Feature

### Definition

Represents a functionality of the application.

### Example

```gherkin
Feature: Login Functionality
```

---

## Scenario

### Definition

Represents a test case.

### Example

```gherkin
Scenario: Valid Login
```

---

## Given

### Definition

Represents precondition.

### Example

```gherkin
Given User is on Login Page
```

---

## When

### Definition

Represents an action.

### Example

```gherkin
When User enters username and password
```

---

## Then

### Definition

Represents expected result.

### Example

```gherkin
Then User should login successfully
```

---

## And

### Definition

Used to continue Given, When, or Then statements.

### Example

```gherkin
And User clicks Login button
```

---

## Feature File

### Example

```gherkin
Feature: Login Functionality

Scenario: Valid Login

Given User is on Login Page

When User enters username

And User enters password

And User clicks Login button

Then User should login successfully
```

---

## Cucumber Maven Dependencies

### Example

```xml
<dependency>

    <groupId>io.cucumber</groupId>

    <artifactId>cucumber-java</artifactId>

    <version>7.23.0</version>

</dependency>
```

```xml
<dependency>

    <groupId>io.cucumber</groupId>

    <artifactId>cucumber-testng</artifactId>

    <version>7.23.0</version>

</dependency>
```

---

## Feature File Location

### Structure

```text
src/test/resources

    └── features

         └── Login.feature
```

---

## Step Definition

### Definition

Contains Java code corresponding to Gherkin steps.

### Example

```java
import io.cucumber.java.en.Given;

@Given(
"User is on Login Page"
)

public void openLoginPage(){

    System.out.println(
    "Login Page Opened"
    );
}
```

---

## @When Annotation

### Example

```java
@When(
"User enters username"
)

public void enterUsername(){

}
```

---

## @Then Annotation

### Example

```java
@Then(
"User should login successfully"
)

public void verifyLogin(){

}
```

---

## Complete Step Definition Example

```java
import io.cucumber.java.en.*;

public class LoginSteps {

    @Given(
    "User is on Login Page"
    )
    public void openLoginPage(){

        System.out.println(
        "Login Page Opened"
        );
    }

    @When(
    "User enters username"
    )
    public void enterUsername(){

        System.out.println(
        "Username Entered"
        );
    }

    @When(
    "User enters password"
    )
    public void enterPassword(){

        System.out.println(
        "Password Entered"
        );
    }

    @Then(
    "User should login successfully"
    )
    public void verifyLogin(){

        System.out.println(
        "Login Successful"
        );
    }
}
```

---

## Test Runner Class

### Definition

Runner class executes feature files.

### Example

```java
import io.cucumber.testng.AbstractTestNGCucumberTests;

import io.cucumber.testng.CucumberOptions;

@CucumberOptions(

features =
"src/test/resources/features",

glue =
"stepdefinitions"

)

public class TestRunner
extends
AbstractTestNGCucumberTests {

}
```

---

## tags

### Definition

Used to execute specific scenarios.

### Example

```gherkin
@smoke

Scenario: Valid Login
```

---

## Execute Tagged Scenario

### Example

```java
@CucumberOptions(

tags="@smoke"

)
```

---

## Scenario Outline

### Definition

Used for Data Driven Testing.

### Example

```gherkin
Scenario Outline: Login

Given User enters "<username>"

And User enters "<password>"

Then Login should be successful

Examples:

| username | password |
|-----------|-----------|
| admin | admin123 |
| user | user123 |
```

---

## Step Definition for Parameters

### Example

```java
@Given(
"User enters {string}"
)

public void enterData(
String value
){

    System.out.println(value);
}
```

---

## Hooks

### Definition

Hooks execute before or after scenarios.

---

## @Before

### Example

```java
@Before

public void setup(){

    System.out.println(
    "Browser Open"
    );
}
```

---

## @After

### Example

```java
@After

public void teardown(){

    System.out.println(
    "Browser Close"
    );
}
```

---

## Cucumber Report

### Definition

Cucumber generates execution reports automatically.

### Example

```java
@CucumberOptions(

plugin = {

"pretty",

"html:target/report.html"

}

)
```

---

## Cucumber with Selenium

### Example

```java
@Given(
"User opens application"
)

public void openApplication(){

    driver.get(
    "https://example.com"
    );
}
```

---

## Framework Structure

### Example

```text
Project
│
├── src/test/java
│
├── stepdefinitions
│
├── runners
│
├── pageobjects
│
├── utilities
│
└── features
      └── Login.feature
```

---

## Cucumber vs TestNG

| Cucumber          | TestNG                |
| ----------------- | --------------------- |
| Business-readable | Developer-focused     |
| Uses Gherkin      | Uses Java annotations |
| Feature files     | Test classes          |
| BDD approach      | Testing framework     |

---

## Best Practices

### Keep Feature Files Simple

Write business-readable scenarios.

---

### Reuse Step Definitions

Avoid duplicate steps.

---

### Use POM with Cucumber

Separate locators from step definitions.

---

### Use Tags

Execute required scenarios only.

---

### Keep Scenarios Independent

One scenario should not depend on another.

---

## Real-Time Usage

### Acceptance Testing

Validate business requirements.

### Regression Testing

Execute automation suites.

### Agile Projects

Improve collaboration between teams.

### Client Demonstrations

Readable test scenarios.

---
---
# Module 26: Git and GitHub

## What is Git?

### Definition

Git is a distributed version control system used to track changes in source code during software development.

### Purpose

* Track code changes
* Manage project versions
* Collaborate with team members
* Maintain code history

### Features

* Version Control
* Branching
* Merging
* Collaboration
* Code Backup

---

## What is GitHub?

### Definition

GitHub is a cloud-based platform that hosts Git repositories.

### Purpose

* Store code online
* Team collaboration
* Code reviews
* CI/CD integration

### Flow

```text
Developer
    │
    ▼
Git
    │
    ▼
GitHub Repository
```

---

## Why Git for Selenium Projects?

### Benefits

* Track framework changes
* Team collaboration
* Backup automation code
* Integration with Jenkins
* Manage releases

---

## Git Installation

### Verify Installation

```bash
git --version
```

### Output

```text
git version 2.x.x
```

---

## Configure Git

### Set Username

```bash
git config --global user.name "Krishna"
```

### Set Email

```bash
git config --global user.email "krishna@example.com"
```

### Verify Configuration

```bash
git config --list
```

---

## Create Repository

### Initialize Git Repository

```bash
git init
```

### Result

```text
Initialized empty Git repository
```

---

## Git Workflow

### Flow

```text
Working Directory
        │
        ▼
     Staging
        │
        ▼
      Commit
        │
        ▼
      GitHub
```

---

## Check Status

### Command

```bash
git status
```

### Purpose

Shows modified, staged, and untracked files.

---

## Add Files

### Add Single File

```bash
git add LoginTest.java
```

### Add All Files

```bash
git add .
```

---

## Commit Changes

### Definition

A commit saves a snapshot of changes.

### Syntax

```bash
git commit -m "Added login test"
```

### Example

```bash
git commit -m "Created POM framework"
```

---

## View Commit History

### Command

```bash
git log
```

### Output

```text
commit abc123
Author: Krishna
Message: Added Login Test
```

---

## Connect to GitHub

### Add Remote Repository

```bash
git remote add origin
https://github.com/user/project.git
```

### Verify Remote

```bash
git remote -v
```

---

## Push Code

### First Push

```bash
git push -u origin main
```

### Regular Push

```bash
git push
```

---

## Clone Repository

### Definition

Downloads a GitHub repository to local machine.

### Command

```bash
git clone
https://github.com/user/project.git
```

---

## Pull Latest Changes

### Command

```bash
git pull
```

### Purpose

Downloads latest changes from GitHub.

---

## Fetch Changes

### Command

```bash
git fetch
```

### Purpose

Downloads changes without merging.

---

## Branches

### Definition

A branch is an independent line of development.

### Default Branch

```text
main
```

---

## View Branches

### Command

```bash
git branch
```

---

## Create Branch

### Command

```bash
git branch feature-login
```

---

## Switch Branch

### Command

```bash
git checkout feature-login
```

### Alternative

```bash
git switch feature-login
```

---

## Create and Switch Branch

### Command

```bash
git checkout -b feature-login
```

---

## Merge Branch

### Command

```bash
git merge feature-login
```

### Flow

```text
main
  ▲
  │
merge
  │
feature-login
```

---

## Delete Branch

### Command

```bash
git branch -d feature-login
```

---

## Undo Changes

### Discard Changes

```bash
git restore LoginTest.java
```

---

### Remove From Staging

```bash
git restore --staged LoginTest.java
```

---

## Git Ignore

### Definition

Used to exclude files and folders from Git tracking.

### File Name

```text
.gitignore
```

### Example

```text
target/

logs/

reports/

screenshots/
```

---

## Useful Selenium .gitignore

### Example

```text
target/

test-output/

logs/

screenshots/

.idea/

*.log
```

---

## Pull Request (PR)

### Definition

A request to merge changes from one branch into another.

### Workflow

```text
Feature Branch
      │
      ▼
Pull Request
      │
      ▼
Code Review
      │
      ▼
Merge
```

---

## Merge Conflict

### Definition

Occurs when Git cannot automatically merge changes.

### Example

Two developers modify the same line of code.

### Solution

* Review conflict
* Keep required code
* Commit changes

---

## Git Commands Summary

| Command       | Purpose               |
| ------------- | --------------------- |
| git init      | Initialize repository |
| git status    | Check status          |
| git add .     | Add files             |
| git commit -m | Commit changes        |
| git push      | Upload code           |
| git pull      | Download latest code  |
| git clone     | Copy repository       |
| git branch    | View branches         |
| git checkout  | Switch branch         |
| git merge     | Merge branch          |
| git log       | View history          |

---

## GitHub Workflow for Selenium Framework

### Example

```text
Create Framework
       │
       ▼
git add .
       │
       ▼
git commit
       │
       ▼
git push
       │
       ▼
GitHub
       │
       ▼
Jenkins Build
```

---

## Best Practices

### Commit Frequently

Small commits are easier to manage.

---

### Write Meaningful Commit Messages

Good:

```text
Added Login Page Object
```

Bad:

```text
Updated code
```

---

### Use Feature Branches

```text
feature-login

feature-cart

feature-search
```

---

### Keep .gitignore Updated

Avoid uploading unnecessary files.

---

### Pull Before Push

```bash
git pull
```

Prevents conflicts.

---

## Real-Time Usage

### Selenium Framework Development

Store framework code safely.

### Team Collaboration

Multiple testers work together.

### Jenkins Integration

Automatic builds from GitHub.

### Release Management

Track framework versions.

---
---
# Module 27: Real-Time Selenium Automation Framework Project

## Project Overview

### Objective

Build a complete Selenium Automation Framework using:

* Selenium WebDriver
* Java
* TestNG
* Maven
* Page Object Model (POM)
* Data Driven Framework
* Hybrid Framework
* Log4j
* Extent Reports
* Jenkins
* Git & GitHub

---

## Project Structure

### Folder Structure

```text
AutomationFramework
│
├── src/test/java
│
├── pageobjects
│
├── testcases
│
├── utilities
│
├── testdata
│
├── config
│
├── reports
│
├── screenshots
│
├── logs
│
├── testng.xml
│
└── pom.xml
```

---

## Framework Components

### Page Objects

Contains:

* Locators
* Page Methods
* Page Actions

### Example

```java
LoginPage.java

HomePage.java

CartPage.java
```

---

## Test Cases

### Purpose

Contains actual automation scenarios.

### Example

```java
LoginTest.java

SearchTest.java

CartTest.java
```

---

## Utilities

### Purpose

Reusable helper classes.

### Example

```java
ExcelUtils.java

ScreenshotUtils.java

WaitUtils.java

ConfigReader.java
```

---

## Test Data

### Purpose

Store external test data.

### Example

```text
LoginData.xlsx

UserData.xlsx
```

---

## Configuration File

### Example

```properties
browser=chrome

url=https://example.com

username=admin

password=admin123
```

---

## Base Class

### Purpose

Common setup and teardown methods.

### Example

```java
public class BaseClass {

    WebDriver driver;

}
```

---

## Browser Setup

### Example

```java
@BeforeMethod

public void setup(){

    driver =
    new ChromeDriver();

    driver.manage()
          .window()
          .maximize();

    driver.get(url);
}
```

---

## Browser Teardown

### Example

```java
@AfterMethod

public void teardown(){

    driver.quit();
}
```

---

## Login Page Example

### Locators

```java
By txtUsername =
By.id("username");

By txtPassword =
By.id("password");

By btnLogin =
By.id("login");
```

---

### Methods

```java
public void enterUsername(
String username
){

    driver.findElement(
    txtUsername
    ).sendKeys(username);
}
```

```java
public void enterPassword(
String password
){

    driver.findElement(
    txtPassword
    ).sendKeys(password);
}
```

```java
public void clickLogin(){

    driver.findElement(
    btnLogin
    ).click();
}
```

---

## Login Test

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

## Data Driven Login

### DataProvider

```java
@DataProvider

public Object[][] loginData(){

    return new Object[][]{

        {"admin","admin123"},
        {"user","user123"}
    };
}
```

---

### Test Case

```java
@Test(
dataProvider="loginData"
)

public void loginTest(
String user,
String pass
){

    LoginPage login =
    new LoginPage(driver);

    login.enterUsername(user);

    login.enterPassword(pass);

    login.clickLogin();
}
```

---

## Screenshot Utility

### Example

```java
public static void captureScreenshot(
WebDriver driver,
String fileName
){

}
```

---

## Logging

### Example

```java
logger.info(
"Browser Opened"
);

logger.info(
"Login Successful"
);
```

---

## Reporting

### Extent Report

```java
ExtentTest test =
extent.createTest(
"Login Test"
);

test.pass(
"Login Successful"
);
```

---

## TestNG XML

### Example

```xml
<suite name="Suite">

    <test name="Login">

        <classes>

            <class
            name=
            "testcases.LoginTest"
            />

        </classes>

    </test>

</suite>
```

---

## Maven Execution

### Command

```bash
mvn test
```

---

## Jenkins Integration

### Build Command

```bash
mvn clean test
```

### Flow

```text
GitHub
   │
   ▼
Jenkins
   │
   ▼
Maven
   │
   ▼
TestNG
   │
   ▼
Selenium
```

---

## Git Workflow

### Example

```bash
git add .

git commit -m
"Added Login Test"

git push
```

---

## Complete Framework Flow

### Flow

```text
TestNG XML
     │
     ▼
Base Class
     │
     ▼
Test Case
     │
     ▼
Page Object
     │
     ▼
Excel Data
     │
     ▼
Selenium
     │
     ▼
Report
```

---

## Real-Time Interview Questions

### Q) Explain your Selenium Framework Architecture.

**A)** My framework follows a Hybrid Framework approach using Selenium, Java, TestNG, Maven, Page Object Model, Data Driven Framework, Log4j, Extent Reports, Git, and Jenkins.

---

### Q) Why did you use POM?

**A)** To separate locators and page actions from test scripts, improving maintainability and reusability.

---

### Q) How do you handle test data?

**A)** Using Excel files with Apache POI and TestNG DataProviders.

---

### Q) How do you generate reports?

**A)** Using Extent Reports and TestNG Reports.

---

### Q) How do you capture screenshots on failure?

**A)** Using the `TakesScreenshot` interface inside failure handling methods or listeners.

---

### Q) How do you manage dependencies?

**A)** Using Maven and the `pom.xml` file.

---

### Q) How do you execute tests automatically?

**A)** Using Jenkins jobs and pipelines.

---

### Q) How do you maintain logs?

**A)** Using Log4j logging framework.

---

### Q) How do you run tests on multiple browsers?

**A)** Using Selenium Grid and TestNG parameterization.

---

### Q) What framework is commonly used in real projects?

**A)** Hybrid Framework with POM, Data Driven Testing, TestNG, Maven, Reporting, Logging, Git, and Jenkins integration.

---

## Selenium Automation Learning Roadmap

```text
Java
 │
 ▼
Manual Testing
 │
 ▼
Selenium WebDriver
 │
 ▼
Locators
 │
 ▼
XPath
 │
 ▼
Waits
 │
 ▼
Actions
 │
 ▼
Frames
 │
 ▼
Alerts
 │
 ▼
Dropdowns
 │
 ▼
JavaScript Executor
 │
 ▼
TestNG
 │
 ▼
Maven
 │
 ▼
POM
 │
 ▼
Data Driven Framework
 │
 ▼
Hybrid Framework
 │
 ▼
Selenium Grid
 │
 ▼
Reporting
 │
 ▼
Jenkins
 │
 ▼
Git & GitHub
 │
 ▼
Cucumber
 │
 ▼
Real-Time Automation Framework
```

---

### Congratulations 🎉

You have now completed the complete Selenium Automation Testing syllabus from basics to advanced framework development and CI/CD integration.
