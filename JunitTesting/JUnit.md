# JUnit Assertions and Annotations

# 1. Annotations in JUnit Testing

## Definition

Annotations in JUnit are special symbols used to control the execution flow of test methods.

They tell JUnit:

* Which method is a test
* What should run before or after tests
* Which tests to ignore

---

## Syntax

```java
@Test
public void testMethod() {

}
```

---

## Example

```java
import org.junit.Test;

public class DemoTest {

    @Test
    public void loginTest() {

        System.out.println("Login Test Executed");
    }
}
```

---

# Common JUnit Annotations

| Annotation     | Purpose                    |
| -------------- | -------------------------- |
| `@Test`        | Marks a test method        |
| `@Before`      | Runs before every test     |
| `@After`       | Runs after every test      |
| `@BeforeClass` | Runs once before all tests |
| `@AfterClass`  | Runs once after all tests  |
| `@Ignore`      | Skips a test method        |

---

# 2. assertEquals()

## Definition

`assertEquals()` checks whether the expected value and actual value are equal.

If both values are equal → Test Pass

If not equal → Test Fail

---

## Syntax

```java
assertEquals(expected, actual);
```

---

## Example

```java
import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class AssertionTest {

    @Test
    public void additionTest() {

        int expected = 10;
        int actual = 5 + 5;

        assertEquals(expected, actual);
    }
}
```

---

# 3. assertTrue()

## Definition

`assertTrue()` checks whether a condition is true.

If condition is true → Test Pass

If false → Test Fail

---

## Syntax

```java
assertTrue(condition);
```

---

## Example

```java
import static org.junit.Assert.assertTrue;
import org.junit.Test;

public class TrueTest {

    @Test
    public void checkValue() {

        int age = 20;

        assertTrue(age > 18);
    }
}
```

---

# 4. assertFalse()

## Definition

`assertFalse()` checks whether a condition is false.

If condition is false → Test Pass

If true → Test Fail

---

## Syntax

```java
assertFalse(condition);
```

---

## Example

```java
import static org.junit.Assert.assertFalse;
import org.junit.Test;

public class FalseTest {

    @Test
    public void verifyCondition() {

        boolean result = false;

        assertFalse(result);
    }
}
```

---

# 5. assertNull()

## Definition

`assertNull()` checks whether an object value is null.

If value is null → Test Pass

If not null → Test Fail

---

## Syntax

```java
assertNull(object);
```

---

## Example

```java
import static org.junit.Assert.assertNull;
import org.junit.Test;

public class NullTest {

    @Test
    public void checkNull() {

        String value = null;

        assertNull(value);
    }
}
```

---

# 6. assertNotNull()

## Definition

`assertNotNull()` checks whether an object value is NOT null.

If value is not null → Test Pass

If null → Test Fail

---

## Syntax

```java
assertNotNull(object);
```

---

## Example

```java
import static org.junit.Assert.assertNotNull;
import org.junit.Test;

public class NotNullTest {

    @Test
    public void checkObject() {

        String name = "Krishna";

        assertNotNull(name);
    }
}
```

---

# Summary Table

| Assertion         | Purpose                            |
| ----------------- | ---------------------------------- |
| `assertEquals()`  | Compare expected and actual values |
| `assertTrue()`    | Verify condition is true           |
| `assertFalse()`   | Verify condition is false          |
| `assertNull()`    | Verify object is null              |
| `assertNotNull()` | Verify object is not null          |

---

# Real-Time Example

```java
import static org.junit.Assert.*;
import org.junit.Test;

public class LoginValidation {

    @Test
    public void loginTest() {

        String username = "admin";

        assertEquals("admin", username);

        assertTrue(username.equals("admin"));

        assertFalse(username.isEmpty());

        assertNotNull(username);
    }
}
```
