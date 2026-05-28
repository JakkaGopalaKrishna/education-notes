# Complete JUnit Example Using All Annotations and Assertion Methods

```java
import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Ignore;
import org.junit.Test;

public class JUnitAllMethodsExample {

    // Runs only once before all test methods
    @BeforeClass
    public static void beforeClassMethod() {

        System.out.println("BeforeClass - Database Connection Opened");
    }

    // Runs before every test method
    @Before
    public void beforeMethod() {

        System.out.println("Before - Browser Opened");
    }

    // Test Method 1
    @Test
    public void testAssertEquals() {

        System.out.println("Running assertEquals Test");

        int expected = 100;
        int actual = 50 + 50;

        assertEquals(expected, actual);
    }

    // Test Method 2
    @Test
    public void testAssertTrue() {

        System.out.println("Running assertTrue Test");

        int age = 25;

        assertTrue(age > 18);
    }

    // Test Method 3
    @Test
    public void testAssertFalse() {

        System.out.println("Running assertFalse Test");

        boolean result = false;

        assertFalse(result);
    }

    // Test Method 4
    @Test
    public void testAssertNull() {

        System.out.println("Running assertNull Test");

        String value = null;

        assertNull(value);
    }

    // Test Method 5
    @Test
    public void testAssertNotNull() {

        System.out.println("Running assertNotNull Test");

        String name = "Krishna";

        assertNotNull(name);
    }

    // Ignored Test Method
    @Ignore
    @Test
    public void skippedTest() {

        System.out.println("This Test Will Be Ignored");
    }

    // Runs after every test method
    @After
    public void afterMethod() {

        System.out.println("After - Browser Closed");
    }

    // Runs only once after all test methods
    @AfterClass
    public static void afterClassMethod() {

        System.out.println("AfterClass - Database Connection Closed");
    }
}
```

---

# Output Flow

```text
BeforeClass - Database Connection Opened

Before - Browser Opened
Running assertEquals Test
After - Browser Closed

Before - Browser Opened
Running assertTrue Test
After - Browser Closed

Before - Browser Opened
Running assertFalse Test
After - Browser Closed

Before - Browser Opened
Running assertNull Test
After - Browser Closed

Before - Browser Opened
Running assertNotNull Test
After - Browser Closed

AfterClass - Database Connection Closed
```

---

# Explanation of Each Annotation

| Annotation     | Purpose                               |
| -------------- | ------------------------------------- |
| `@BeforeClass` | Executes once before all test methods |
| `@Before`      | Executes before every test method     |
| `@Test`        | Marks a method as test method         |
| `@Ignore`      | Skips the test method                 |
| `@After`       | Executes after every test method      |
| `@AfterClass`  | Executes once after all test methods  |

---

# Explanation of Assertions

| Assertion         | Purpose                           |
| ----------------- | --------------------------------- |
| `assertEquals()`  | Checks expected and actual values |
| `assertTrue()`    | Checks condition is true          |
| `assertFalse()`   | Checks condition is false         |
| `assertNull()`    | Checks object is null             |
| `assertNotNull()` | Checks object is not null         |

---

# Maven Dependency (JUnit 4)

```xml
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
    <scope>test</scope>
</dependency>
```
