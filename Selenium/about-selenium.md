# Selenium

## Definition

**Selenium** is an open-source automation testing tool used to automate web applications. It allows testers and developers to perform automated testing on different browsers and operating systems.

## Why Selenium?

* Automates repetitive testing tasks
* Supports multiple browsers
* Supports multiple programming languages
* Reduces testing time
* Improves test accuracy

## Features

* Open Source
* Cross Browser Testing
* Cross Platform Support
* Multiple Language Support
* Parallel Execution
* Integration with TestNG, JUnit, Maven, Jenkins

## Components of Selenium

### 1. Selenium IDE

* Record and Playback tool
* No coding required
* Suitable for beginners

### 2. Selenium WebDriver

* Automates browser actions directly
* Most widely used Selenium component
* Supports Java, Python, C#, JavaScript, etc.

### 3. Selenium Grid

* Executes tests on multiple machines and browsers simultaneously
* Used for Parallel Testing

## Selenium Architecture

```text
Test Script
     ↓
WebDriver API
     ↓
Browser Driver
(ChromeDriver, EdgeDriver, GeckoDriver)
     ↓
Browser
```

## Advantages

* Free and Open Source
* Supports multiple browsers
* Supports multiple operating systems
* Easy integration with frameworks
* Large community support

## Disadvantages

* Only supports web application testing
* No built-in reporting
* No built-in test management
* Requires programming knowledge

## Supported Browsers

* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Safari
* Opera

## Supported Languages

* Java
* Python
* C#
* JavaScript
* Ruby
* Kotlin

## Basic Selenium WebDriver Example (Java)

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class SeleniumDemo {
    public static void main(String[] args) {

        WebDriver driver = new ChromeDriver();

        driver.get("https://www.google.com");

        System.out.println(driver.getTitle());

        driver.quit();
    }
}
```

## Common WebDriver Methods

| Method               | Description                  |
| -------------------- | ---------------------------- |
| get()                | Open URL                     |
| getTitle()           | Get page title               |
| getCurrentUrl()      | Get current URL              |
| getPageSource()      | Get page source              |
| close()              | Close current browser window |
| quit()               | Close all browser windows    |
| navigate().back()    | Go back                      |
| navigate().forward() | Go forward                   |
| navigate().refresh() | Refresh page                 |

## Interview Questions

### Q) What is Selenium?

**A)** Selenium is an open-source automation testing tool used to automate web applications.

---

### Q) What are the components of Selenium?

**A)** Selenium IDE, Selenium WebDriver, and Selenium Grid.

---

### Q) What is WebDriver?

**A)** WebDriver is a Selenium component used to automate browser actions directly.

---

### Q) What is Selenium Grid?

**A)** Selenium Grid is used to execute tests on multiple browsers and machines in parallel.

---

### Q) Why is Selenium popular?

**A)** Because it is free, open source, supports multiple browsers, platforms, and programming languages.
