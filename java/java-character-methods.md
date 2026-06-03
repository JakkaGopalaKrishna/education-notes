# Java Character Methods Complete Reference

## What is Character in Java?

A `char` stores a single character.

```java
char ch = 'A';
```

Java provides the `Character` class to perform operations on characters.

```java
Character.methodName(...)
```

---

# Character Class Methods

## 1. isLetter()

### Syntax

```java
Character.isLetter(ch)
```

### Purpose

Checks whether character is a letter.

### Return Type

```java
boolean
```

### Example

```java
char ch = 'A';

System.out.println(Character.isLetter(ch));
```

### Output

```java
true
```

---

## 2. isDigit()

### Syntax

```java
Character.isDigit(ch)
```

### Purpose

Checks whether character is a digit.

### Return Type

```java
boolean
```

### Example

```java
char ch = '5';

System.out.println(Character.isDigit(ch));
```

### Output

```java
true
```

---

## 3. isLetterOrDigit()

### Syntax

```java
Character.isLetterOrDigit(ch)
```

### Purpose

Checks letter or digit.

### Return Type

```java
boolean
```

### Example

```java
Character.isLetterOrDigit('A');
Character.isLetterOrDigit('7');
```

### Output

```java
true
true
```

---

## 4. isUpperCase()

### Syntax

```java
Character.isUpperCase(ch)
```

### Purpose

Checks uppercase character.

### Return Type

```java
boolean
```

### Example

```java
Character.isUpperCase('A');
```

### Output

```java
true
```

---

## 5. isLowerCase()

### Syntax

```java
Character.isLowerCase(ch)
```

### Purpose

Checks lowercase character.

### Return Type

```java
boolean
```

### Example

```java
Character.isLowerCase('a');
```

### Output

```java
true
```

---

## 6. toUpperCase()

### Syntax

```java
Character.toUpperCase(ch)
```

### Purpose

Converts character to uppercase.

### Return Type

```java
char
```

### Example

```java
Character.toUpperCase('a');
```

### Output

```java
A
```

---

## 7. toLowerCase()

### Syntax

```java
Character.toLowerCase(ch)
```

### Purpose

Converts character to lowercase.

### Return Type

```java
char
```

### Example

```java
Character.toLowerCase('A');
```

### Output

```java
a
```

---

## 8. isWhitespace()

### Syntax

```java
Character.isWhitespace(ch)
```

### Purpose

Checks spaces, tabs, newlines.

### Return Type

```java
boolean
```

### Example

```java
Character.isWhitespace(' ');
```

### Output

```java
true
```

---

## 9. isAlphabetic()

### Syntax

```java
Character.isAlphabetic(ch)
```

### Purpose

Checks alphabetic character.

### Return Type

```java
boolean
```

### Example

```java
Character.isAlphabetic('K');
```

### Output

```java
true
```

---

## 10. isJavaIdentifierStart()

### Syntax

```java
Character.isJavaIdentifierStart(ch)
```

### Purpose

Checks valid first character for variable name.

### Return Type

```java
boolean
```

### Example

```java
Character.isJavaIdentifierStart('_');
```

### Output

```java
true
```

---

## 11. isJavaIdentifierPart()

### Syntax

```java
Character.isJavaIdentifierPart(ch)
```

### Purpose

Checks valid character in variable name.

### Return Type

```java
boolean
```

### Example

```java
Character.isJavaIdentifierPart('5');
```

### Output

```java
true
```

---

## 12. getNumericValue()

### Syntax

```java
Character.getNumericValue(ch)
```

### Purpose

Converts numeric character to integer.

### Return Type

```java
int
```

### Example

```java
Character.getNumericValue('8');
```

### Output

```java
8
```

---

## 13. compare()

### Syntax

```java
Character.compare(ch1, ch2)
```

### Purpose

Compares two characters.

### Return Type

```java
int
```

### Example

```java
Character.compare('A', 'B');
```

### Output

```java
-1
```

---

## 14. hashCode()

### Syntax

```java
Character.hashCode(ch)
```

### Purpose

Returns hash code.

### Return Type

```java
int
```

### Example

```java
Character.hashCode('A');
```

### Output

```java
65
```

---

## 15. valueOf()

### Syntax

```java
Character.valueOf(ch)
```

### Purpose

Converts primitive char to Character object.

### Return Type

```java
Character
```

### Example

```java
Character c = Character.valueOf('A');
```

---

# Common Interview Programs

## Check Vowel

```java
char ch = 'a';

if ("aeiouAEIOU".indexOf(ch) != -1) {
  System.out.println("Vowel");
}
```

---

## Count Digits in String

```java
String str = "abc123";

int count = 0;

for (int i = 0; i < str.length(); i++) {
  if (Character.isDigit(str.charAt(i))) {
    count++;
  }
}

System.out.println(count);
```

---

## Count Letters

```java
String str = "Java123";

int count = 0;

for (char ch : str.toCharArray()) {
  if (Character.isLetter(ch)) {
    count++;
  }
}

System.out.println(count);
```

---

## Toggle Case

```java
char ch = 'a';

if (Character.isLowerCase(ch))
  ch = Character.toUpperCase(ch);
else
  ch = Character.toLowerCase(ch);

System.out.println(ch);
```

---

# ASCII Values

| Character | ASCII |
| --------- | ----- |
| A         | 65    |
| Z         | 90    |
| a         | 97    |
| z         | 122   |
| 0         | 48    |
| 9         | 57    |
| Space     | 32    |

---

# Important Notes

## Primitive char

```java
char ch = 'A';
```

## Wrapper Character

```java
Character ch = 'A';
```

---

## Convert char to String

```java
String str = String.valueOf(ch);
```

---

## Convert String to char

```java
char ch = str.charAt(0);
```

---

# Quick Revision

| Method            | Return    |
| ----------------- | --------- |
| isLetter()        | boolean   |
| isDigit()         | boolean   |
| isUpperCase()     | boolean   |
| isLowerCase()     | boolean   |
| toUpperCase()     | char      |
| toLowerCase()     | char      |
| isWhitespace()    | boolean   |
| isAlphabetic()    | boolean   |
| getNumericValue() | int       |
| compare()         | int       |
| hashCode()        | int       |
| valueOf()         | Character |

---
---
