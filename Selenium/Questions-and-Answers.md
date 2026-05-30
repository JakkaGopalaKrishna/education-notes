
### Q) What is Automation Testing?

**A)** Automation Testing is the process of executing test cases using automation tools and scripts instead of manual effort.

---

### Q) What are the advantages of Automation Testing?

**A)** Faster execution, reusability, accuracy, cost effectiveness, and better test coverage.

---

### Q) When should Automation Testing be used?

**A)** For repetitive, regression, smoke, and data-driven testing scenarios.

---

### Q) What is an Automation Framework?

**A)** A structured set of guidelines, standards, and practices used to create and maintain automation scripts.

---

### Q) What are the types of Automation Frameworks?

**A)** Linear, Modular, Data-Driven, Keyword-Driven, and Hybrid Frameworks.

---

### Q) What is Selenium?

**A)** Selenium is an open-source tool used for automating web applications.

---

### Q) What are the components of Selenium?

**A)** Selenium IDE, Selenium WebDriver, and Selenium Grid.

---

### Q) What is Selenium WebDriver?

**A)** Selenium WebDriver is a component that directly communicates with browsers to automate web actions.

---

### Q) What is Selenium Grid?

**A)** Selenium Grid allows parallel execution of test cases across multiple browsers and machines.

---

### Q) Why is Selenium widely used?

**A)** Because it is free, open source, supports multiple browsers, platforms, and programming languages.

### Q) Why is Java commonly used with Selenium?

**A)** Java provides strong community support, easy integration with Selenium tools, and extensive libraries.

---

### Q) What is a variable?

**A)** A variable is a container used to store data values.

---

### Q) What is the difference between primitive and non-primitive data types?

**A)** Primitive types store actual values, while non-primitive types store references to objects.

---

### Q) What is an array?

**A)** An array is a collection of elements of the same data type stored in contiguous memory locations.

---

### Q) What is a method?

**A)** A method is a block of code that performs a specific task.

---

### Q) What is a constructor?

**A)** A constructor is a special method used to initialize objects when they are created.

---

### Q) What are the four OOP concepts?

**A)** Encapsulation, Inheritance, Polymorphism, and Abstraction.

---

### Q) What is Exception Handling?

**A)** Exception Handling is a mechanism to handle runtime errors and maintain normal program flow.

---

### Q) What is ArrayList?

**A)** ArrayList is a dynamic collection that allows storing and manipulating multiple elements.

---

### Q) What is HashMap?

**A)** HashMap is a collection that stores data in key-value pairs.

### Q) What is WebDriver?

**A)** WebDriver is a Selenium component used to automate browser actions by directly communicating with browsers.

---

### Q) What is Maven?

**A)** Maven is a build automation and dependency management tool used in Java projects.

---

### Q) Why do we use Maven in Selenium projects?

**A)** Maven helps manage dependencies, build projects, and maintain a standard project structure.

---

### Q) What is Selenium Manager?

**A)** Selenium Manager automatically downloads and manages browser drivers without manual configuration.

---

### Q) What is the purpose of pom.xml?

**A)** pom.xml is the configuration file that contains project information and dependencies.

---

### Q) What is the difference between close() and quit()?

**A)** close() closes the current browser window, while quit() closes all browser windows and terminates the WebDriver session.

---

### Q) Which browsers are supported by Selenium?

**A)** Chrome, Firefox, Edge, Safari, and other WebDriver-supported browsers.

---

### Q) What is ChromeDriver?

**A)** ChromeDriver is a browser driver that enables Selenium to automate Google Chrome.

---

### Q) What is the role of WebDriver API?

**A)** WebDriver API sends commands from Selenium scripts to browser drivers for execution.

---

### Q) What is the basic flow of Selenium automation?

**A)** Create WebDriver → Launch Browser → Open URL → Perform Actions → Validate Results → Close Browser.

### Q) What is WebDriver?

**A)** WebDriver is a Selenium interface used to automate browser actions.

---

### Q) Which method is used to open a webpage?

**A)** `driver.get("URL");`

---

### Q) What is the difference between get() and navigate().to()?

**A)** Both open URLs, but navigate().to() is part of browser navigation functionality.

---

### Q) Which method returns page title?

**A)** `driver.getTitle();`

---

### Q) Which method returns current webpage URL?

**A)** `driver.getCurrentUrl();`

---

### Q) Which method returns page source?

**A)** `driver.getPageSource();`

---

### Q) How do you refresh a webpage?

**A)**

```java
driver.navigate().refresh();
```

---

### Q) How do you maximize a browser window?

**A)**

```java
driver.manage().window().maximize();
```

---

### Q) What is the difference between close() and quit()?

**A)** close() closes the current window, while quit() closes all browser windows and ends the WebDriver session.

---

### Q) Why is Thread.sleep() not recommended in Selenium?

**A)** It causes unnecessary waiting and slows test execution. Explicit Wait is preferred.

### Q) What are locators?

**A)** Locators are used to identify and find web elements on a webpage.

---

### Q) Which locator is the fastest?

**A)** ID locator.

---

### Q) What is the difference between findElement() and findElements()?

**A)** findElement() returns a single element, while findElements() returns a list of matching elements.

---

### Q) What is XPath?

**A)** XPath is a locator strategy used to locate elements using the DOM structure.

---

### Q) What is the difference between Absolute XPath and Relative XPath?

**A)** Absolute XPath starts from the root node, while Relative XPath starts from anywhere in the DOM using `//`.

---

### Q) What is CSS Selector?

**A)** CSS Selector is a locator strategy that uses CSS syntax to locate web elements.

---

### Q) When should contains() be used in XPath?

**A)** When part of the attribute value is known and the complete value may change dynamically.

---

### Q) What is normalize-space() in XPath?

**A)** It removes extra spaces before matching text.

---

### Q) Which is preferred: CSS Selector or XPath?

**A)** CSS Selector is generally faster, but XPath is more powerful for complex element identification.

---

### Q) Can Selenium locate elements using visible text?

**A)** Yes, using `linkText()`, `partialLinkText()`, and XPath `text()` function.

### Q) What is WebElement?

**A)** WebElement is an interface that represents an HTML element on a webpage.

---

### Q) Which method is used to click a button?

**A)**

```java
element.click();
```

---

### Q) Which method is used to enter text into a textbox?

**A)**

```java
element.sendKeys("text");
```

---

### Q) What is the purpose of clear()?

**A)** It removes existing text from an input field.

---

### Q) What is getText() used for?

**A)** It retrieves the visible text of an element.

---

### Q) What is getAttribute() used for?

**A)** It retrieves the value of an HTML attribute.

---

### Q) What does isDisplayed() return?

**A)** It returns `true` if the element is visible, otherwise `false`.

---

### Q) What does isEnabled() return?

**A)** It returns `true` if the element is enabled, otherwise `false`.

---

### Q) What does isSelected() return?

**A)** It returns `true` if a checkbox, radio button, or option is selected.

---

### Q) What is the difference between getText() and getAttribute()?

**A)** getText() returns visible text, while getAttribute() returns the value of an HTML attribute.

### Q) What are waits in Selenium?

**A)** Waits are synchronization mechanisms used to pause script execution until a condition is met.

---

### Q) Why are waits required?

**A)** Because web elements may load dynamically and may not be immediately available.

---

### Q) What are the types of waits in Selenium?

**A)** Thread.sleep(), Implicit Wait, Explicit Wait, and Fluent Wait.

---

### Q) What is Implicit Wait?

**A)** Implicit Wait tells Selenium to wait for a specified time while searching for elements.

---

### Q) What is Explicit Wait?

**A)** Explicit Wait waits for a specific condition before proceeding.

---

### Q) What class is used for Explicit Wait?

**A)** WebDriverWait.

---

### Q) What is ExpectedConditions?

**A)** A utility class containing predefined conditions used with Explicit Wait.

---

### Q) What is Fluent Wait?

**A)** Fluent Wait is an advanced wait that allows custom polling intervals and exception handling.

---

### Q) Why is Thread.sleep() not recommended?

**A)** It waits for the full duration even if the element becomes available earlier, making tests slower.

---

### Q) Which wait is most commonly used in real-time Selenium projects?

**A)** Explicit Wait.

### Q) How do you enter text into a textbox?

**A)**

```java
driver.findElement(By.id("username"))
      .sendKeys("admin");
```

---

### Q) How do you clear a textbox?

**A)**

```java
element.clear();
```

---

### Q) How do you verify whether a checkbox is selected?

**A)**

```java
element.isSelected();
```

---

### Q) Which class is used to handle dropdowns?

**A)** `Select` class.

---

### Q) How do you select a dropdown value by visible text?

**A)**

```java
dropdown.selectByVisibleText("India");
```

---

### Q) How do you count links on a webpage?

**A)**

```java
driver.findElements(By.tagName("a")).size();
```

---

### Q) How do you retrieve data from a table?

**A)** Using XPath and `getText()`.

---

### Q) What is an Auto Suggestion Dropdown?

**A)** It displays matching values dynamically as the user types.

---

### Q) What is a Dynamic Dropdown?

**A)** A dropdown whose values are loaded dynamically based on user actions.

---

### Q) How do you verify whether an element is enabled?

**A)**

```java
element.isEnabled();
```

### Q) What is the Actions class?

**A)** Actions class is used to perform advanced mouse and keyboard interactions.

---

### Q) How do you perform Mouse Hover?

**A)**

```java
actions.moveToElement(element)
       .perform();
```

---

### Q) How do you perform Right Click?

**A)**

```java
actions.contextClick(element)
       .perform();
```

---

### Q) How do you perform Double Click?

**A)**

```java
actions.doubleClick(element)
       .perform();
```

---

### Q) How do you perform Drag and Drop?

**A)**

```java
actions.dragAndDrop(source, target)
       .perform();
```

---

### Q) What is the purpose of perform()?

**A)** It executes the action.

---

### Q) What is the purpose of build()?

**A)** It creates a sequence of multiple actions before execution.

---

### Q) How do you press a keyboard key using Actions class?

**A)**

```java
actions.keyDown(Keys.CONTROL)
       .perform();
```

---

### Q) What is Context Click?

**A)** Context Click is another name for Right Click.

---

### Q) Which Selenium class is used for advanced mouse and keyboard operations?

**A)** Actions class.

### Q) What is an Alert in Selenium?

**A)** An Alert is a browser-generated popup that displays messages or requests user input.

---

### Q) Which interface is used to handle alerts?

**A)** Alert interface.

---

### Q) How do you switch to an alert?

**A)**

```java
Alert alert =
driver.switchTo().alert();
```

---

### Q) Which method clicks the OK button?

**A)**

```java
alert.accept();
```

---

### Q) Which method clicks the Cancel button?

**A)**

```java
alert.dismiss();
```

---

### Q) Which method retrieves alert text?

**A)**

```java
alert.getText();
```

---

### Q) Which method is used to enter text into a prompt alert?

**A)**

```java
alert.sendKeys("text");
```

---

### Q) What is Authentication Popup?

**A)** A popup that requests username and password before accessing a webpage.

---

### Q) How do you handle Authentication Popup?

**A)**

```java
driver.get(
"https://username:password@url"
);
```

---

### Q) What is the difference between Alert and Hidden Division Popup?

**A)** Alerts are browser-generated and require `switchTo().alert()`, while Hidden Division Popups are normal web elements handled using Selenium locators.

### Q) What is a Frame?

**A)** A Frame is an HTML element that embeds one webpage inside another webpage.

---

### Q) Why is frame switching required?

**A)** Selenium cannot access elements inside a frame without switching to that frame.

---

### Q) How do you switch to a frame by index?

**A)**

```java
driver.switchTo().frame(0);
```

---

### Q) How do you switch back to the main page?

**A)**

```java
driver.switchTo().defaultContent();
```

---

### Q) What is a Nested Frame?

**A)** A Frame inside another Frame.

---

### Q) What is a Window Handle?

**A)** A unique identifier assigned to a browser window.

---

### Q) Which method returns the current window ID?

**A)**

```java
driver.getWindowHandle();
```

---

### Q) Which method returns all window IDs?

**A)**

```java
driver.getWindowHandles();
```

---

### Q) How do you switch to another window?

**A)**

```java
driver.switchTo().window(windowID);
```

---

### Q) What is the difference between Frame and Window?

**A)** A Frame is embedded inside a webpage, while a Window is a separate browser page with its own unique handle.


### Q) Which class is used to handle dropdowns in Selenium?

**A)** Select class.

---

### Q) How do you create a Select object?

**A)**

```java
Select dropdown =
new Select(driver.findElement(By.id("country")));
```

---

### Q) What are the three methods used to select dropdown values?

**A)**

* selectByVisibleText()
* selectByValue()
* selectByIndex()

---

### Q) Which method retrieves the selected option?

**A)**

```java
dropdown.getFirstSelectedOption();
```

---

### Q) Which method returns all dropdown options?

**A)**

```java
dropdown.getOptions();
```

---

### Q) How do you verify whether a dropdown supports multiple selection?

**A)**

```java
dropdown.isMultiple();
```

---

### Q) Which method returns all selected options?

**A)**

```java
dropdown.getAllSelectedOptions();
```

---

### Q) Can Select class handle Bootstrap Dropdowns?

**A)** No. Bootstrap Dropdowns must be handled using normal Selenium locators.

---

### Q) What is a Multi-Select Dropdown?

**A)** A dropdown that allows users to select multiple values.

---

### Q) Which method removes all selected options from a multi-select dropdown?

**A)**

```java
dropdown.deselectAll();
```

### Q) What is JavaScriptExecutor?

**A)** JavaScriptExecutor is an interface used to execute JavaScript code directly in the browser.

---

### Q) Why do we use JavaScriptExecutor?

**A)** To handle hidden elements, scrolling, clicking difficult elements, and executing JavaScript code.

---

### Q) How do you create a JavaScriptExecutor object?

**A)**

```java
JavascriptExecutor js =
(JavascriptExecutor) driver;
```

---

### Q) How do you click an element using JavaScript?

**A)**

```java
js.executeScript(
"arguments[0].click();",
element
);
```

---

### Q) How do you scroll down a webpage?

**A)**

```java
js.executeScript(
"window.scrollBy(0,500)"
);
```

---

### Q) How do you scroll to a specific element?

**A)**

```java
js.executeScript(
"arguments[0].scrollIntoView();",
element
);
```

---

### Q) How do you highlight an element?

**A)**

```java
js.executeScript(
"arguments[0].style.border='3px solid red'",
element
);
```

---

### Q) How do you generate an alert using JavaScript?

**A)**

```java
js.executeScript(
"alert('Hello')"
);
```

---

### Q) How do you get the page title using JavaScript?

**A)**

```java
js.executeScript(
"return document.title;"
);
```

---

### Q) When should JavaScriptExecutor be used?

**A)** When normal Selenium methods fail or when browser-level JavaScript execution is required.

### Q) How do you upload a file in Selenium?

**A)**

```java
driver.findElement(By.id("uploadFile"))
      .sendKeys("C:\\Files\\resume.pdf");
```

---

### Q) Which method is commonly used for file upload?

**A)** `sendKeys()`

---

### Q) What is Robot Class?

**A)** Robot Class is a Java class used to automate native OS-level keyboard and mouse actions.

---

### Q) Why is Robot Class used in Selenium?

**A)** To handle native file upload dialogs that Selenium cannot directly control.

---

### Q) How do you verify a downloaded file?

**A)**

```java
file.exists();
```

---

### Q) Which Java class is used to verify downloaded files?

**A)** `File` class.

---

### Q) How do you check file size?

**A)**

```java
file.length();
```

---

### Q) How do you change Chrome's download directory?

**A)** Using `ChromeOptions` and browser preferences.

---

### Q) Can Selenium directly interact with Windows file upload dialogs?

**A)** No. Robot Class or other tools are required.

---

### Q) Which approach is preferred for file upload?

**A)** Using `sendKeys()` on the file input element.

### Q) Which interface is used to capture screenshots in Selenium?

**A)** `TakesScreenshot`

---

### Q) How do you create a TakesScreenshot object?

**A)**

```java id="vbz7tl"
TakesScreenshot ts =
(TakesScreenshot) driver;
```

---

### Q) Which method captures a screenshot?

**A)**

```java id="c1e06f"
getScreenshotAs()
```

---

### Q) How do you capture a screenshot as a file?

**A)**

```java id="efvsvd"
ts.getScreenshotAs(
OutputType.FILE
);
```

---

### Q) Can Selenium capture screenshots of specific elements?

**A)** Yes, using:

```java id="tmjlwm"
element.getScreenshotAs(
OutputType.FILE
);
```

---

### Q) Why are screenshots captured on test failure?

**A)** To help identify and debug issues.

---

### Q) What is OutputType.BASE64 used for?

**A)** To store screenshots in Base64 format, commonly used in reports.

---

### Q) Which class is used to save screenshot files?

**A)** `FileHandler`

---

### Q) What is the advantage of dynamic screenshot names?

**A)** Prevents file overwriting and improves identification.

---

### Q) What is the difference between full-page and element screenshots?

**A)** Full-page screenshots capture the entire page, while element screenshots capture only a specific web element.

### Q) What are Dynamic Web Elements?

**A)** Elements whose attributes or properties change during runtime.

---

### Q) Which XPath function is commonly used for dynamic elements?

**A)** `contains()`

---

### Q) How do you handle dynamic IDs?

**A)** Use partial matching with `contains()` or `starts-with()`.

---

### Q) What is Pagination?

**A)** Pagination divides large datasets into multiple pages.

---

### Q) How do you read data from a dynamic table?

**A)** Using `findElements()` and looping through rows.

---

### Q) What is a Dynamic Calendar?

**A)** A calendar whose dates and months are loaded dynamically.

---

### Q) What is StaleElementReferenceException?

**A)** It occurs when Selenium tries to interact with an element that is no longer attached to the DOM.

---

### Q) How do you handle StaleElementReferenceException?

**A)** Locate the element again before interacting with it.

---

### Q) What is the advantage of using contains() in XPath?

**A)** It helps locate elements when only part of the attribute value is known.

---

### Q) Why should Absolute XPath be avoided?

**A)** Because UI changes can easily break the locator.

### Q) What is TestNG?

**A)** TestNG is a testing framework used for test execution, reporting, grouping, parameterization, and parallel execution.

---

### Q) What is the purpose of @Test annotation?

**A)** It marks a method as a test case.

---

### Q) Which annotation executes before every test method?

**A)** `@BeforeMethod`

---

### Q) Which annotation executes after every test method?

**A)** `@AfterMethod`

---

### Q) What are Assertions?

**A)** Assertions validate expected and actual results.

---

### Q) What is the purpose of assertEquals()?

**A)** It verifies whether two values are equal.

---

### Q) What is DataProvider?

**A)** DataProvider is used to run the same test with multiple sets of data.

---

### Q) What is Parameterization?

**A)** Passing values to test methods through TestNG XML.

---

### Q) What is Parallel Execution?

**A)** Running multiple tests simultaneously to reduce execution time.

---

### Q) Where are TestNG reports generated?

**A)** Inside the `test-output` folder.

### Q) What is Maven?

**A)** Maven is a build automation and dependency management tool for Java projects.

---

### Q) What is pom.xml?

**A)** pom.xml is Maven's configuration file containing project information, dependencies, and plugins.

---

### Q) What are Maven dependencies?

**A)** External libraries required by the project.

---

### Q) What is the purpose of Maven Repository?

**A)** It stores and provides project dependencies.

---

### Q) What is the default location of Maven Local Repository?

**A)**

```text
C:\Users\User\.m2\repository
```

---

### Q) Which command compiles a Maven project?

**A)**

```bash
mvn compile
```

---

### Q) Which command runs TestNG tests?

**A)**

```bash
mvn test
```

---

### Q) Which command removes previous build files?

**A)**

```bash
mvn clean
```

---

### Q) What is Maven Surefire Plugin?

**A)** It is used to execute TestNG and JUnit test cases.

---

### Q) What is the purpose of Maven Profiles?

**A)** To manage different configurations for different environments such as QA, UAT, and Production.

### Q) What is Page Object Model?

**A)** Page Object Model is a design pattern that separates web elements and page actions from test scripts.

---

### Q) Why do we use POM?

**A)** To improve maintainability, readability, and reusability of automation scripts.

---

### Q) What is a Page Class?

**A)** A class that contains locators and methods related to a specific webpage.

---

### Q) What is the role of a constructor in POM?

**A)** It initializes the WebDriver instance.

---

### Q) What is Page Factory?

**A)** Page Factory is an advanced implementation of POM that uses annotations to locate elements.

---

### Q) Which annotation is used in Page Factory?

**A)** `@FindBy`

---

### Q) What is the purpose of PageFactory.initElements()?

**A)** It initializes all web elements defined using `@FindBy`.

---

### Q) What are reusable methods?

**A)** Methods that can be used across multiple test cases and pages.

---

### Q) What is the advantage of POM over normal Selenium scripts?

**A)** Better maintainability, readability, scalability, and reduced code duplication.

---

### Q) Is POM used in real-time automation frameworks?

**A)** Yes, POM is one of the most widely used design patterns in Selenium automation frameworks.

### Q) What is a Data Driven Framework?

**A)** A framework where test data is stored externally and supplied dynamically to test scripts.

---

### Q) Why do we use a Data Driven Framework?

**A)** To separate test data from code and execute tests with multiple data sets.

---

### Q) Which library is commonly used for Excel handling in Selenium?

**A)** Apache POI.

---

### Q) What is Apache POI?

**A)** A Java library used to read and write Microsoft Excel files.

---

### Q) Which class is used to open an Excel workbook?

**A)**

```java
XSSFWorkbook
```

---

### Q) Which class is used to access an Excel sheet?

**A)**

```java
XSSFSheet
```

---

### Q) What is Parameterization?

**A)** Passing different sets of data to the same test case.

---

### Q) What is the benefit of storing data in Excel?

**A)** Easy maintenance and execution of multiple test scenarios.

---

### Q) What is DataProvider?

**A)** A TestNG feature used to provide multiple data sets to a test method.

---

### Q) What is the main advantage of a Data Driven Framework?

**A)** Reusability of test scripts with different input data.

### Q) What is a Hybrid Framework?

**A)** A framework that combines multiple automation framework approaches such as POM, Data Driven, and TestNG.

---

### Q) Why is Hybrid Framework widely used?

**A)** Because it provides scalability, maintainability, and reusability.

---

### Q) What are the main components of a Hybrid Framework?

**A)** POM, Data Driven Framework, TestNG, Utilities, Config Files, Reporting, and Logging.

---

### Q) What is the purpose of a Base Class?

**A)** To manage browser setup, teardown, and common framework functionality.

---

### Q) Why do we use Config Files?

**A)** To store configurable values such as URLs, browser names, and credentials.

---

### Q) What are Utility Classes?

**A)** Reusable classes that perform common tasks such as reading Excel files, waits, and screenshots.

---

### Q) What is the advantage of externalizing test data?

**A)** It improves maintainability and allows multiple test scenarios.

---

### Q) What is the role of TestNG in a Hybrid Framework?

**A)** Test execution, reporting, grouping, parameterization, and parallel execution.

---

### Q) Why are screenshots captured on failures?

**A)** To help identify and debug test failures.

---

### Q) Is Hybrid Framework suitable for real-time projects?

**A)** Yes, it is the most commonly used framework structure in real-world Selenium automation projects.

### Q) What is Selenium Grid?

**A)** Selenium Grid is a tool used to execute Selenium tests on multiple browsers and machines simultaneously.

---

### Q) What are the main components of Selenium Grid?

**A)** Hub and Node.

---

### Q) What is a Hub?

**A)** Hub is the central server that receives test requests and distributes them to nodes.

---

### Q) What is a Node?

**A)** Node is a machine where browser tests are executed.

---

### Q) What is the purpose of Selenium Grid?

**A)** Parallel execution, cross-browser testing, and cross-platform testing.

---

### Q) Which driver is used with Selenium Grid?

**A)** `RemoteWebDriver`

---

### Q) What is the default Selenium Grid URL?

**A)**

```text
http://localhost:4444
```

---

### Q) What is Cross Browser Testing?

**A)** Running the same test case on multiple browsers.

---

### Q) What is Parallel Execution?

**A)** Running multiple test cases simultaneously.

---

### Q) Why is Selenium Grid used in real projects?

**A)** To reduce execution time and support testing across multiple browsers and environments.

### Q) What is Logging?

**A)** Logging is the process of recording execution details for debugging and monitoring.

---

### Q) What is Log4j?

**A)** Log4j is a Java logging framework used to generate structured logs.

---

### Q) What are Log Levels?

**A)** TRACE, DEBUG, INFO, WARN, ERROR, and FATAL.

---

### Q) What is Reporting?

**A)** Reporting is the process of generating execution results in a readable format.

---

### Q) Where are TestNG reports generated?

**A)** Inside the `test-output` folder.

---

### Q) What is Extent Report?

**A)** Extent Report is an HTML reporting framework that provides detailed execution reports.

---

### Q) Which method generates the Extent Report?

**A)**

```java id="hslz0g"
extent.flush();
```

---

### Q) What is Allure Report?

**A)** Allure is an advanced reporting framework that generates rich and interactive reports.

---

### Q) What is the difference between Logging and Reporting?

**A)** Logging records execution details, while Reporting displays execution results.

---

### Q) Why are screenshots added to reports?

**A)** To provide visual evidence of failures and simplify debugging.

### Q) What is Jenkins?

**A)** Jenkins is an open-source CI/CD tool used to automate build, test, and deployment processes.

---

### Q) Why is Jenkins used in Selenium?

**A)** To automate test execution, scheduling, reporting, and CI/CD integration.

---

### Q) What is Continuous Integration?

**A)** Automatically building and testing code whenever changes are committed.

---

### Q) What is Continuous Delivery?

**A)** Automatically preparing applications for deployment after successful testing.

---

### Q) Which command is commonly used to execute Selenium tests in Jenkins?

**A)**

```bash
mvn test
```

---

### Q) What is a Jenkins Pipeline?

**A)** A script-based CI/CD workflow defined in a Jenkinsfile.

---

### Q) What is the default Jenkins URL?

**A)**

```text
http://localhost:8080
```

---

### Q) What is a Freestyle Project?

**A)** A basic Jenkins job used to execute builds and tests.

---

### Q) What is the purpose of Build Triggers?

**A)** To determine when Jenkins should execute a job.

---

### Q) Why is Jenkins important in real-time automation projects?

**A)** It enables automated, scheduled, and continuous execution of Selenium test suites within CI/CD pipelines.

### Q) What is Cucumber?

**A)** Cucumber is a BDD tool used to write automation test scenarios in simple English language.

---

### Q) What is BDD?

**A)** Behavior Driven Development is an approach where requirements are written in a human-readable format.

---

### Q) What language is used in Cucumber feature files?

**A)** Gherkin language.

---

### Q) What are the main Gherkin keywords?

**A)** Feature, Scenario, Given, When, Then, And, But.

---

### Q) What is a Feature File?

**A)** A file that contains business-readable test scenarios written in Gherkin language.

---

### Q) What is a Step Definition?

**A)** Java methods that implement Gherkin steps.

---

### Q) What is a Scenario Outline?

**A)** A feature that allows the same scenario to run with multiple data sets.

---

### Q) What is the purpose of Hooks?

**A)** To execute setup and teardown methods before and after scenarios.

---

### Q) What is the role of the Runner Class?

**A)** It executes feature files and connects them with step definitions.

---

### Q) Why is Cucumber used in Selenium projects?

**A)** It makes test cases easy to understand, improves collaboration, and supports BDD-based automation.

### Q) What is Git?

**A)** Git is a distributed version control system used to track source code changes.

---

### Q) What is GitHub?

**A)** GitHub is a cloud platform used to host Git repositories.

---

### Q) What is the difference between Git and GitHub?

**A)** Git is a version control tool, while GitHub is a platform that hosts Git repositories.

---

### Q) Which command initializes a Git repository?

**A)**

```bash
git init
```

---

### Q) Which command checks repository status?

**A)**

```bash
git status
```

---

### Q) Which command uploads code to GitHub?

**A)**

```bash
git push
```

---

### Q) What is a branch in Git?

**A)** A branch is an independent line of development.

---

### Q) What is a Pull Request?

**A)** A request to merge changes from one branch into another.

---

### Q) What is a merge conflict?

**A)** It occurs when Git cannot automatically merge changes from different branches.

---

### Q) Why is Git important in Selenium automation projects?

**A)** It helps manage code versions, collaborate with teams, integrate with Jenkins, and maintain automation frameworks efficiently.
