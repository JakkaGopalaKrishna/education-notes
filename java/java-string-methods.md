# Java String Methods Complete Reference

## What is String in Java?

A `String` is a sequence of characters.

```java
String name = "Krishna";
```

---

# Important Notes

```java
String -> immutable
```

Means:
- Original string cannot be changed
- Methods return new strings

---

# Creating Strings

## Literal

```java
String s = "Hello";
```

## Using new

```java
String s = new String("Hello");
```

---

# 1. length()

## Syntax

```java
str.length()
```

## Purpose
Returns total number of characters.

## Return Type

```java
int
```

## Example

```java
String str = "Krishna";

System.out.println(str.length());
```

## Output

```java
7
```

---

# 2. charAt()

## Syntax

```java
str.charAt(index)
```

## Purpose
Returns character at given index.

## Return Type

```java
char
```

## Example

```java
String str = "Hello";

System.out.println(str.charAt(1));
```

## Output

```java
e
```

---

# 3. equals()

## Syntax

```java
str1.equals(str2)
```

## Purpose
Compares string contents.

## Return Type

```java
boolean
```

## Example

```java
String a = "java";
String b = "java";

System.out.println(a.equals(b));
```

## Output

```java
true
```

---

# 4. equalsIgnoreCase()

## Syntax

```java
str1.equalsIgnoreCase(str2)
```

## Purpose
Compares strings ignoring case.

## Return Type

```java
boolean
```

## Example

```java
String a = "JAVA";
String b = "java";

System.out.println(a.equalsIgnoreCase(b));
```

## Output

```java
true
```

---

# 5. compareTo()

## Syntax

```java
str1.compareTo(str2)
```

## Purpose
Lexicographical comparison.

## Return Type

```java
int
```

## Example

```java
String a = "apple";
String b = "banana";

System.out.println(a.compareTo(b));
```

## Output

```java
negative number
```

---

# 6. contains()

## Syntax

```java
str.contains(value)
```

## Purpose
Checks substring existence.

## Return Type

```java
boolean
```

## Example

```java
String str = "Hello Java";

System.out.println(str.contains("Java"));
```

## Output

```java
true
```

---

# 7. substring()

## Syntax

```java
str.substring(start)
str.substring(start, end)
```

## Purpose
Extracts part of string.

## Return Type

```java
String
```

## Example

```java
String str = "Krishna";

System.out.println(str.substring(0, 3));
```

## Output

```java
Kri
```

---

# 8. indexOf()

## Syntax

```java
str.indexOf(value)
```

## Purpose
Returns first occurrence index.

## Return Type

```java
int
```

## Example

```java
String str = "banana";

System.out.println(str.indexOf('a'));
```

## Output

```java
1
```

---

# 9. lastIndexOf()

## Syntax

```java
str.lastIndexOf(value)
```

## Purpose
Returns last occurrence index.

## Return Type

```java
int
```

## Example

```java
String str = "banana";

System.out.println(str.lastIndexOf('a'));
```

## Output

```java
5
```

---

# 10. toUpperCase()

## Syntax

```java
str.toUpperCase()
```

## Purpose
Converts to uppercase.

## Return Type

```java
String
```

## Example

```java
String str = "java";

System.out.println(str.toUpperCase());
```

## Output

```java
JAVA
```

---

# 11. toLowerCase()

## Syntax

```java
str.toLowerCase()
```

## Purpose
Converts to lowercase.

## Return Type

```java
String
```

## Example

```java
String str = "JAVA";

System.out.println(str.toLowerCase());
```

## Output

```java
java
```

---

# 12. trim()

## Syntax

```java
str.trim()
```

## Purpose
Removes leading and trailing spaces.

## Return Type

```java
String
```

## Example

```java
String str = "  Java  ";

System.out.println(str.trim());
```

## Output

```java
Java
```

---

# 13. replace()

## Syntax

```java
str.replace(old, new)
```

## Purpose
Replaces characters.

## Return Type

```java
String
```

## Example

```java
String str = "banana";

System.out.println(str.replace('a', 'x'));
```

## Output

```java
bxnxnx
```

---

# 14. replaceAll()

## Syntax

```java
str.replaceAll(regex, newValue)
```

## Purpose
Replaces using regex.

## Return Type

```java
String
```

## Example

```java
String str = "a1b2c3";

System.out.println(str.replaceAll("\\d", ""));
```

## Output

```java
abc
```

---

# 15. startsWith()

## Syntax

```java
str.startsWith(value)
```

## Purpose
Checks beginning of string.

## Return Type

```java
boolean
```

## Example

```java
String str = "Java Programming";

System.out.println(str.startsWith("Java"));
```

## Output

```java
true
```

---

# 16. endsWith()

## Syntax

```java
str.endsWith(value)
```

## Purpose
Checks ending of string.

## Return Type

```java
boolean
```

## Example

```java
String str = "file.pdf";

System.out.println(str.endsWith(".pdf"));
```

## Output

```java
true
```

---

# 17. split()

## Syntax

```java
str.split(regex)
```

## Purpose
Splits string into array.

## Return Type

```java
String[]
```

## Example

```java
String str = "a,b,c";

String[] arr = str.split(",");

for (String s : arr) {
  System.out.println(s);
}
```

## Output

```java
a
b
c
```

---

# 18. isEmpty()

## Syntax

```java
str.isEmpty()
```

## Purpose
Checks if string length is 0.

## Return Type

```java
boolean
```

## Example

```java
String str = "";

System.out.println(str.isEmpty());
```

## Output

```java
true
```

---

# 19. isBlank()

## Syntax

```java
str.isBlank()
```

## Purpose
Checks empty or spaces only.

## Return Type

```java
boolean
```

## Example

```java
String str = "   ";

System.out.println(str.isBlank());
```

## Output

```java
true
```

---

# 20. concat()

## Syntax

```java
str1.concat(str2)
```

## Purpose
Joins strings.

## Return Type

```java
String
```

## Example

```java
String a = "Hello ";
String b = "Java";

System.out.println(a.concat(b));
```

## Output

```java
Hello Java
```

---

# 21. repeat()

## Syntax

```java
str.repeat(count)
```

## Purpose
Repeats string.

## Return Type

```java
String
```

## Example

```java
String str = "Hi ";

System.out.println(str.repeat(3));
```

## Output

```java
Hi Hi Hi
```

---

# 22. toCharArray()

## Syntax

```java
str.toCharArray()
```

## Purpose
Converts string to char array.

## Return Type

```java
char[]
```

## Example

```java
String str = "Java";

char[] arr = str.toCharArray();

for (char c : arr) {
  System.out.println(c);
}
```

---

# 23. valueOf()

## Syntax

```java
String.valueOf(value)
```

## Purpose
Converts other datatype to string.

## Return Type

```java
String
```

## Example

```java
int num = 100;

String str = String.valueOf(num);

System.out.println(str);
```

## Output

```java
100
```

---

# 24. join()

## Syntax

```java
String.join(delimiter, values)
```

## Purpose
Joins multiple strings.

## Return Type

```java
String
```

## Example

```java
String result = String.join("-", "Java", "Python", "C");

System.out.println(result);
```

## Output

```java
Java-Python-C
```

---

# 25. matches()

## Syntax

```java
str.matches(regex)
```

## Purpose
Checks regex match.

## Return Type

```java
boolean
```

## Example

```java
String str = "12345";

System.out.println(str.matches("\\d+"));
```

## Output

```java
true
```

---

# Common Interview Programs

## Reverse String

```java
String str = "Java";

for (int i = str.length() - 1; i >= 0; i--) {
  System.out.print(str.charAt(i));
}
```

---

## Palindrome String

```java
String str = "madam";
String rev = "";

for (int i = str.length() - 1; i >= 0; i--) {
  rev += str.charAt(i);
}

System.out.println(str.equals(rev));
```

---

## Count Vowels

```java
String str = "Krishna";
int count = 0;

for (int i = 0; i < str.length(); i++) {

  char c = Character.toLowerCase(str.charAt(i));

  if (c == 'a' || c == 'e' || c == 'i'
      || c == 'o' || c == 'u') {

    count++;
  }
}

System.out.println(count);
```

---

# StringBuilder Important Methods

## append()

```java
StringBuilder sb = new StringBuilder("Java");

sb.append(" Programming");
```

---

## reverse()

```java
StringBuilder sb = new StringBuilder("Java");

System.out.println(sb.reverse());
```

---

## delete()

```java
sb.delete(1, 3);
```

---

## insert()

```java
sb.insert(0, "Hi ");
```

---

# Difference Table

| Type | Syntax |
|---|---|
| Array | arr.length |
| String | str.length() |
| ArrayList | list.size() |
| String char | str.charAt(i) |

---

# Important Notes

## String Equality

```java
.equals()
```

NOT:

```java
==
```

---

## String is Immutable

Methods return new strings.

```java
String str = "java";

str.toUpperCase();

System.out.println(str);
```

## Output

```java
java
```

Correct:

```java
str = str.toUpperCase();
```

---

# End of Document

