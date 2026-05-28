## What is JUnit?

JUnit is a **Java testing framework** used to write and run **test cases** for Java applications.

It helps developers and testers:

* Check whether code works correctly
* Find bugs automatically
* Run tests repeatedly
* Validate expected output

---

## Why JUnit is Used

* Automates testing
* Saves time
* Improves code quality
* Easy to integrate with Selenium
* Used in real-time automation projects

---

## Basic JUnit Structure

```java
import org.junit.Test;

public class DemoTest {

    @Test
    public void testMethod() {
        System.out.println("Test Executed");
    }
}
```

---

## Important Annotations in JUnit

| Annotation     | Purpose                    |
| -------------- | -------------------------- |
| `@Test`        | Marks a test method        |
| `@Before`      | Runs before every test     |
| `@After`       | Runs after every test      |
| `@BeforeClass` | Runs once before all tests |
| `@AfterClass`  | Runs once after all tests  |
| `@Ignore`      | Skips the test             |


---

## Assertions in JUnit

Assertions are used to compare **expected** and **actual** results.

```java
import static org.junit.Assert.assertEquals;

@Test
public void testAddition() {

    int expected = 10;
    int actual = 5 + 5;

    assertEquals(expected, actual);
}
```

---

## Example with Selenium + JUnit

```java
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class GoogleTest {

    @Test
    public void openGoogle() {

        WebDriver driver = new ChromeDriver();

        driver.get("https://www.google.com");

        System.out.println(driver.getTitle());

        driver.quit();
    }
}
```

---

## Types of Assertions

| Assertion         | Purpose                  |
| ----------------- | ------------------------ |
| `assertEquals()`  | Compare values           |
| `assertTrue()`    | Check condition is true  |
| `assertFalse()`   | Check condition is false |
| `assertNull()`    | Check object is null     |
| `assertNotNull()` | Check object is not null |

---

## JUnit Interview Questions

### 1. What is JUnit?

JUnit is a Java framework used for unit testing.

### 2. What is unit testing?

Testing individual methods or components of an application.

### 3. What is `@Test` annotation?

Used to identify a test method.

### 4. Difference between `@Before` and `@BeforeClass`?

* `@Before` → Runs before every test method
* `@BeforeClass` → Runs only once before all test methods

### 5. What is assertion?

Verification of expected and actual results.

---

## JUnit Execution Flow

```text
@BeforeClass
    ↓
@Before
    ↓
@Test
    ↓
@After
    ↓
(repeats for all tests)
    ↓
@AfterClass
```

---

## Common Maven Dependency

For JUnit 4:

```xml
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
    <scope>test</scope>
</dependency>
```

For JUnit 5:

```xml
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.10.2</version>
    <scope>test</scope>
</dependency>
```

---

## JUnit vs TestNG

| JUnit               | TestNG                     |
| ------------------- | -------------------------- |
| Simpler             | More advanced              |
| Less annotations    | More annotations           |
| Basic reporting     | Better reporting           |
| Mostly unit testing | Unit + integration testing |

---

## Real-Time Usage

JUnit is commonly used with:

* Selenium Automation
* API Testing
* Backend Java Applications
* CI/CD pipelines like Jenkins

---