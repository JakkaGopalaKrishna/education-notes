# CORE-JAVA LEARNING-1

# Step 1: Data Types & Variables

## 🔹 1. What is a Variable?

A **variable** is a container to store data.

```java
int age = 22;
String name = "Krishna";
```

* `int` → type
* `age` → variable name
* `22` → value

---

## 🔹 2. Data Types in Java

Java has **2 main types**:

### ✅ 1. Primitive Types (store actual values)

| Type    | Example    | Size    |
| ------- | ---------- | ------- |
| int     | 10         | 4 bytes |
| float   | 10.5f      | 4 bytes |
| double  | 10.55      | 8 bytes |
| char    | 'A'        | 2 bytes |
| boolean | true/false | 1 bit   |
| byte    | 100        | 1 byte  |
| short   | 1000       | 2 bytes |
| long    | 100000L    | 8 bytes |

Example:

```java
int a = 10;
double price = 99.99;
char grade = 'A';
boolean isPass = true;
```

---

### ✅ 2. Reference Types (store address)

These refer to objects.

```java
String name = "Krishna";
int[] arr = {1, 2, 3};
```

👉 They don’t store actual data directly — they store a reference (memory address).

---

## 🔹 3. Key Difference

| Primitive    | Reference       |
| ------------ | --------------- |
| Stores value | Stores address  |
| Faster       | Slightly slower |
| Fixed size   | Dynamic         |

---

## 🔹 4. Type Conversion

### ✅ Implicit (Automatic)

Small → big (safe)

```java
int a = 10;
double b = a;  // int → double
```

---

### ❗ Explicit (Casting)

Big → small (manual)

```java
double d = 10.5;
int a = (int) d;  // data loss (10)
```

---

## 🔹 5. Arrays

Store multiple values of same type.

```java
int[] arr = {1, 2, 3, 4};
System.out.println(arr[0]); // 1
```

OR

```java
int[] arr = new int[3];
arr[0] = 10;
```

---
---

# 🚀 Step 2: Operators in Java

Operators are used to **perform operations on variables and values**.

---

# 🔹 1. Arithmetic Operators

Used for math operations.

```java
int a = 10, b = 3;

System.out.println(a + b); // 13
System.out.println(a - b); // 7
System.out.println(a * b); // 30
System.out.println(a / b); // 3
System.out.println(a % b); // 1 (remainder)
```

👉 Important:

* `/` → division
* `%` → remainder (VERY useful in logic)

---

# 🔹 2. Relational (Comparison) Operators

Used to compare values → result is **true/false**

```java
int a = 10, b = 20;

System.out.println(a > b);   // false
System.out.println(a < b);   // true
System.out.println(b <= a);  // false (20 is not less than or equal to 10)
System.out.println(a >= b);  // false (10 is not greater than or equal to 20)
System.out.println(a == b);  // false
System.out.println(a != b);  // true
```

---

# 🔹 3. Boolean (Logical) Operators

Used to combine conditions.

```java
int age = 20;

System.out.println(age > 18 && age < 30); // true
System.out.println(age > 18 || age < 10); // true
System.out.println(!(age > 18));          // false
```

👉 Operators:

* `&&` → AND
* `||` → OR
* `!` → NOT

---

# 🔹 4. Bitwise Operators (Important for interviews)

Operate on binary values.

```java
int a = 5;  // 101
int b = 3;  // 011

System.out.println(a & b); // 1 (001)
System.out.println(a | b); // 7 (111)
System.out.println(a ^ b); // 6 (110)
```

👉 Quick idea:

* `&` → AND
* `|` → OR
* `^` → XOR

---

# 🔹 5. Ternary Operator

Shortcut for `if-else`

```java
int age = 18;

String result = (age >= 18) ? "Adult" : "Minor";
System.out.println(result);
```

👉 Syntax:

```
condition ? value_if_true : value_if_false
```

---

# 🔹 6. Operator Precedence

Which operator runs first?

Example:

```java
int result = 10 + 5 * 2;
System.out.println(result); // 20
```

👉 Why?

* `*` runs before `+`

---

# 🔹 7. Parentheses (VERY IMPORTANT)

Used to control execution.

```java
int result = (10 + 5) * 2;
System.out.println(result); // 30
```

👉 Always use parentheses when unsure.

---
---

# 🚀 Step 3: Control Statements

Control statements decide **how your program flows**.

---

# 🔹 1. Selection Statements (Decision Making)

## ✅ if Statement

```java
int age = 20;

if (age >= 18) {
    System.out.println("Adult");
}
```

---

## ✅ if-else

```java
int age = 16;

if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}
```

---

## ✅ else-if ladder

```java
int marks = 85;

if (marks >= 90) {
    System.out.println("A");
} else if (marks >= 75) {
    System.out.println("B");
} else {
    System.out.println("C");
}
```

---

## ✅ switch (Cleaner alternative)

```java
int day = 2;

switch (day) {
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

👉 `break` is important to stop fall-through.

---

# 🔹 2. Iteration Statements (Loops)

## ✅ for loop (fixed iterations)

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
```

👉 Best when you know **how many times**

---

## ✅ while loop (condition-based)

```java
int i = 0;

while (i < 5) {
    System.out.println(i);
    i++;
}
```

👉 Runs while condition is true

---

## ✅ do-while loop (runs at least once)

```java
int i = 0;

do {
    System.out.println(i);
    i++;
} while (i < 5);
```

👉 Executes **at least once** even if condition is false

---

# 🔹 3. Jump Statements

## ✅ break

Stops loop immediately

```java
for (int i = 0; i < 5; i++) {
    if (i == 3) break;
    System.out.println(i);
}
```

👉 Output: `0 1 2`

---

## ✅ continue

Skips current iteration

```java
for (int i = 0; i < 5; i++) {
    if (i == 3) continue;
    System.out.println(i);
}
```

👉 Output: `0 1 2 4`

---

## ✅ return

Exits method

```java
public static int sum() {
    return 10;
}
```

---
---

# 🚀 Step 4: Object-Oriented Programming (OOP)

Java is built on OOP. Everything revolves around **objects and classes**.

---

# 🔹 1. What is a Class?

A **class** is a blueprint.

```java
class Student {
    String name;
    int age;
}
```

---

# 🔹 2. What is an Object?

An **object** is an instance of a class.

```java
Student s1 = new Student();
s1.name = "Krishna";
s1.age = 22;
```

👉 Class = blueprint   
👉 Object = real-world entity

---

# 🧱 4 Pillars of OOP

---

# 🔹 1. Encapsulation (Data Hiding)

Wrap data + methods together.

```java
class Student {
    private int age;

    public void setAge(int a) {
        age = a;
    }

    public int getAge() {
        return age;
    }
}
```

👉 Use `private` + getters/setters   
👉 Protects data

---

# 🔹 2. Inheritance (Code Reuse)

Child class gets properties of parent.

```java
class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}
```

👉 `extends` keyword

---

# 🔹 3. Polymorphism (Many Forms)

## ✅ Method Overloading (Compile-time)

```java
class MathOps {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
}
```

---

## ✅ Method Overriding (Runtime)

```java
class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}
```

---

# 🔹 4. Abstraction (Hide Details)

Show only necessary info.

## ✅ Using abstract class

```java
abstract class Vehicle {
    abstract void start();
}

class Car extends Vehicle {
    void start() {
        System.out.println("Car starts with key");
    }
}
```

---

## ✅ Using interface

```java
interface Animal {
    void sound();
}

class Dog implements Animal {
    public void sound() {
        System.out.println("Bark");
    }
}
```

---

# 🧠 Key Difference

| Concept       | Purpose         |
| ------------- | --------------- |
| Encapsulation | Data safety     |
| Inheritance   | Reuse code      |
| Polymorphism  | Flexibility     |
| Abstraction   | Hide complexity |

---
---

# 🚀 Step 5: Exception Handling in Java

---

# 🔹 1. What is an Exception?

An **exception** is an error that occurs during program execution.

Example:

```java
int a = 10 / 0;  // ❌ crash (ArithmeticException)
```

👉 Without handling → program stops   
👉 With handling → program continues safely

---

# 🔹 2. Exception Hierarchy (Basic Idea)

```
Throwable
 ├── Exception (checked)
 └── RuntimeException (unchecked)
```

👉 You don’t need to memorize all — just understand:

* **Checked** → must handle (compile-time)
* **Unchecked** → runtime errors

---

# 🔹 3. Try-Catch Block

Used to handle exceptions.

```java
try {
    int a = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero");
}
```

---

## ✅ Multiple Catch

```java
try {
    int[] arr = new int[2];
    System.out.println(arr[5]);
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Index error");
} catch (Exception e) {
    System.out.println("General error");
}
```

---

## ✅ finally Block

Always runs.

```java
try {
    int a = 10 / 2;
} catch (Exception e) {
    System.out.println("Error");
} finally {
    System.out.println("Always executes");
}
```

---

# 🔹 4. Throwing Exceptions

## ✅ throw keyword

```java
throw new ArithmeticException("Error occurred");
```

---

## ✅ throws keyword

```java
void checkAge(int age) throws Exception {
    if (age < 18) {
        throw new Exception("Not eligible");
    }
}
```

---

# 🔹 5. Common Exceptions

## ❗ Null Pointer Exception (VERY IMPORTANT)

```java
String s = null;
System.out.println(s.length()); // ❌ NPE
```

👉 Happens when accessing null reference

---

## ❗ Array Exception

```java
int[] arr = {1, 2};
System.out.println(arr[5]); // ❌ error
```

---

# 🔹 6. Try-with-Resources (Advanced but useful)

Auto closes resources (files, streams)

```java
try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
    System.out.println(br.readLine());
} catch (Exception e) {
    System.out.println("Error");
}
```

👉 No need to manually close

---
---

# 🚀 Step 6: Generics in Java

---

# 🔹 1. Why Generics?

Before generics:

```java
ArrayList list = new ArrayList();
list.add("Hello");
list.add(10);  // ❌ mixed types (danger)
```

👉 Problem:

* No type safety
* Runtime errors

---

## ✅ With Generics

```java
ArrayList<String> list = new ArrayList<>();
list.add("Hello");
// list.add(10); ❌ compile-time error
```

👉 Benefit:

* Type safety ✅
* No casting needed ✅
* Cleaner code ✅

---

# 🔹 2. Generics and Object

Without generics:

```java
Object obj = "Hello";
String s = (String) obj; // manual casting
```

With generics → no need casting

---

# 🔹 3. Generic Class

You can create your own generic class.

```java
class Box<T> {
    T value;

    void set(T value) {
        this.value = value;
    }

    T get() {
        return value;
    }
}
```

Usage:

```java
Box<Integer> b = new Box<>();
b.set(10);
System.out.println(b.get());
```

---

# 🔹 4. Generic Methods

```java
class Util {
    static <T> void print(T value) {
        System.out.println(value);
    }
    static <T,U> void add(T value1,U value2) {
        System.out.println(value1 + value2);
    }
}
```

Usage:

```java
Util.print("Hello");
Util.print(100);
Util.add(10,20.2);
```

---

# 🔹 5. Type Bounds (Important)

Restrict types using `extends`

```java
class Box<T extends Number> {
    T value;
}
```

👉 Only allows:

* Integer
* Double
* Float   
* ❌ Not String

---

# 🔹 6. Wildcards (Advanced but useful)

## ✅ Unbounded

```java
void printList(List<?> list) {
    System.out.println(list);
}
```

---

## ✅ Upper Bound

```java
void printNumbers(List<? extends Number> list)
```

---

## ✅ Lower Bound

```java
void addNumbers(List<? super Integer> list)
```

---

# 🧠 Key Idea

| Concept   | Meaning          |
| --------- | ---------------- |
| `<T>`     | Type placeholder |
| `extends` | Upper bound      |
| `?`       | Wildcard         |

---

# ⚠️ Common Mistakes

* Using raw types (`ArrayList list`) ❌
* Confusing `extends` with inheritance
* Misusing wildcards

---

# 🧠 Pro Insight

👉 Generics are heavily used in:

* Collections (`List`, `Map`)
* APIs
* Frameworks (Spring, Hibernate)

---
---

# 🚀 Step 7: Collections Framework
[-> In Detail Explain](CollectionsFramework.md)

# 🔹 1. What are Collections?

Collections are used to **store and manage groups of data dynamically**.

👉 Unlike arrays:

* Size is dynamic ✅
* More powerful operations ✅

---

# 🔹 2. Main Interfaces

```text
Collection
 ├── List
 ├── Set
 └── Queue
Map (separate hierarchy)
```

---

# 🔹 3. List (Ordered, allows duplicates)

## ✅ ArrayList

```java
import java.util.*;

ArrayList<String> list = new ArrayList<>();
list.add("A");
list.add("B");
list.add("A"); // allowed

System.out.println(list);
```

👉 Features:

* Ordered
* Allows duplicates
* Fast access

---

## ✅ LinkedList

```java 
LinkedList<Integer> list = new LinkedList<>();
list.add(10);
list.add(20);
```

👉 Better for insert/delete

---

# 🔹 4. Set (No duplicates)

## ✅ HashSet

```java
HashSet<Integer> set = new HashSet<>();
set.add(1);
set.add(1); // ignored
set.add(2);

System.out.println(set);
```

👉 Features:

* No duplicates
* Unordered

---

# 🔹 5. Queue (FIFO)

## ✅ PriorityQueue

```java id="7oh33t"
PriorityQueue<Integer> pq = new PriorityQueue<>();
pq.add(10);
pq.add(5);
pq.add(20);

System.out.println(pq.poll()); // smallest first
```

---

## ✅ Stack (LIFO)

```java id="78geu4"
Stack<Integer> stack = new Stack<>();
stack.push(10);
stack.push(20);

System.out.println(stack.pop()); // 20
```

---

# 🔹 6. Map (Key-Value Pair)

## ✅ HashMap

```java id="w5ybd6"
HashMap<String, Integer> map = new HashMap<>();

map.put("A", 10);
map.put("B", 20);

System.out.println(map.get("A")); // 10
```

👉 Features:

* Key → Value
* No duplicate keys

---

# 🔹 7. Iterator

Used to traverse collections.

```java
Iterator<Integer> it = list.iterator();

while (it.hasNext()) {
    System.out.println(it.next());
}
```

---

# 🔹 8. Collections Utility Class

```java
Collections.sort(list);
Collections.reverse(list);
```

👉 Useful methods:

* sort
* reverse
* shuffle

---

# 🧠 When to Use What?

| Use Case             | Collection |
| -------------------- | ---------- |
| Ordered + duplicates | List       |
| Unique values        | Set        |
| Key-value            | Map        |
| FIFO                 | Queue      |
| LIFO                 | Stack      |

---

# ⚠️ Common Mistakes

* Confusing List vs Set
* Forgetting generics (`<>`)
* Using wrong collection type

---
---

# 🚀 Step 8: Multithreaded Programming

# 🔹 1. What is a Thread?

A **thread** is a lightweight unit of execution.

👉 Example:

* One thread → normal program
* Multiple threads → do multiple tasks at same time

---

# 🔹 2. Creating Threads

## ✅ Method 1: Extend `Thread`

```java 
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running");
    }
}

MyThread t1 = new MyThread();
t1.start();
```

---

## ✅ Method 2: Implement `Runnable` (Recommended)

```java id="2z1kn9"
class MyTask implements Runnable {
    public void run() {
        System.out.println("Task running");
    }
}

Thread t1 = new Thread(new MyTask());
t1.start();
```

👉 Better because Java supports **multiple inheritance via interfaces**

---

# 🔹 3. Thread Lifecycle (Basic)

```text id="i9bo42"
New → Runnable → Running → Terminated
```

---

# 🔹 4. Synchronization (VERY IMPORTANT)

Used to avoid **race conditions** (multiple threads accessing same data).

```java id="vw27nd"
class Counter {
    int count = 0;

    synchronized void increment() {
        count++;
    }
}
```

👉 `synchronized` ensures only one thread at a time

---

# 🔹 5. Executors (Modern Way 🔥)

Instead of manually creating threads:

```java 
import java.util.concurrent.*;

ExecutorService executor = Executors.newFixedThreadPool(2);

executor.submit(() -> {
    System.out.println("Task executed");
});

executor.shutdown();
```

👉 Benefits:

* Thread reuse
* Better performance
* Cleaner code

---

# 🔹 6. Thread-Safe Collections

Normal collections are **not thread-safe** ❌

Use:

```java id="6ib97o"
List<Integer> list = Collections.synchronizedList(new ArrayList<>());
```

OR

```java id="5uzj7v"
ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
```

---

# 🧠 Key Concepts

| Concept         | Meaning               |
| --------------- | --------------------- |
| Thread          | Independent execution |
| Runnable        | Task definition       |
| Synchronization | Safe access           |
| Executor        | Manage threads        |

---
# ⚠️ Common Mistakes

* Calling `run()` instead of `start()` ❌
* Ignoring synchronization
* Overusing threads

---
---

# 🚀 Step 9: Other Important Topics

---

# 🔹 1. Enumerations (enum)

Used for **fixed set of constants**

```java 
enum Day {
    MONDAY, TUESDAY, WEDNESDAY
}

Day d = Day.MONDAY;
System.out.println(d);
```

👉 Use when values are predefined (days, roles, status)

---

# 🔹 2. AutoBoxing & Unboxing

Convert primitive ↔ object automatically

```java id="w91cmc"
int a = 10;
Integer obj = a;  // autoBoxing

int b = obj;      // unboxing
```

👉 Important in collections (`List<Integer>`)

---

# 🔹 3. String Handling (VERY IMPORTANT)

## ✅ String (Immutable)

```java 
String s = "Hello";
s.concat(" World");

System.out.println(s); // Hello (unchanged)
```

---

## ✅ StringBuilder (Mutable)

```java id="sny6d1"
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");

System.out.println(sb); // Hello World
```

👉 Use `StringBuilder` for performance

---

# 🔹 4. Lambda Expressions (Java 8+ 🔥)

Short way to write functions

```java 
Runnable r = () -> {
    System.out.println("Running");
};

new Thread(r).start();
```

---

## ✅ With Collections

```java
List<Integer> list = Arrays.asList(1, 2, 3);

list.forEach(n -> System.out.println(n));
```

---

# 🔹 5. Annotations (Metadata)

Provide info to compiler/framework

```java id="3m5cvn"
@Override
void run() {
}
```

👉 Common:

* `@Override`
* `@Deprecated`
* `@SuppressWarnings`

---

# 🔹 6. Reflection (Advanced ⚠️)

Inspect classes at runtime

```java id="x3lsg8"
Class<?> cls = String.class;
System.out.println(cls.getMethods());
```

👉 Used in frameworks (Spring, Hibernate)

---

# 🔹 7. Types of References

Java memory references:

* Strong (default)
* Weak
* Soft
* Phantom

👉 Mostly used in:

* Garbage collection
* Caching systems

---
---