# 🚀 Step 7.1: What are Collections?

> A **collection** is a framework in Java used to **store and manage multiple objects dynamically**.

👉 Think like:

* Array → fixed size ❌
* Collection → dynamic size ✅

---

## 🔹 Why Collections?

### ❌ Problem with Arrays

```java
int[] arr = new int[3];
```

* Fixed size
* No built-in methods (sort, search, etc.)

---

### ✅ Solution: Collections

```java
import java.util.*;

ArrayList<Integer> list = new ArrayList<>();
list.add(10);
list.add(20);
list.add(30);
```

👉 Benefits:

* Dynamic size
* Built-in methods
* Easy to use

---

## 🔹 Collection Framework Structure

```text
Collection (interface)
 ├── List
 ├── Set
 └── Queue

Map (separate, not part of Collection)
```

👉 Important:

* `List`, `Set`, `Queue` → under Collection
* `Map` → separate hierarchy

---

## 🔹 Key Features

| Feature   | Explanation                |
| --------- | -------------------------- |
| Dynamic   | Size changes automatically |
| Generic   | Type-safe (`<Integer>`)    |
| Reusable  | Ready-made classes         |
| Efficient | Optimized internally       |

---

## 🔹 Real Example (Why Useful?)

👉 Suppose:

* Store user names
* Remove duplicates
* Sort them

With collections → easy:

```java
List<String> names = new ArrayList<>();
names.add("Krishna");
names.add("Ram");

Collections.sort(names);
```

---

## 🔹 Most Used Classes

| Interface | Common Class  |
| --------- | ------------- |
| List      | ArrayList     |
| Set       | HashSet       |
| Queue     | PriorityQueue |
| Map       | HashMap       |

👉 These 4 are used **90% in real projects**

---

# ⚠️ Important Note

👉 Always use generics:

```java
ArrayList<Integer> list = new ArrayList<>();
```

❌ Avoid:

```java
ArrayList list = new ArrayList(); // unsafe
```

---
---

# 🚀 Step 7.2: List (ArrayList Focus)

---

# 🔹 1. What is List?

A **List** is a collection that:

* Maintains **order** ✅
* Allows **duplicates** ✅
* Supports **index-based access** ✅

---

## 🔹 Example

```java 
import java.util.*;

List<Integer> list = new ArrayList<>();

list.add(10);
list.add(20);
list.add(10);

System.out.println(list); // [10, 20, 10]
```

---

# 🔹 2. ArrayList (Most Important)

## ✅ Why ArrayList?

* Fast access (index-based)
* Dynamic resizing
* Easy to use

---

## 🔹 Common Methods

### ➤ add()

```java id="rf1ykb"
list.add(30);
```

---

### ➤ get()

```java
System.out.println(list.get(0)); // 10
```

---

### ➤ set() (update)

```java id="5r9z5v"
list.set(1, 50);
```

---

### ➤ remove()

```java id="qkk98g"
list.remove(0); // remove index
```

---

### ➤ size()

```java id="br5n7f"
System.out.println(list.size());
```

---

### ➤ contains()

```java id="w3q1u9"
System.out.println(list.contains(10));
```

---

# 🔹 3. Looping List

## ✅ for loop

```java id="8k4b66"
for (int i = 0; i < list.size(); i++) {
    System.out.println(list.get(i));
}
```

---

## ✅ for-each loop

```java id="b6bm47"
for (int num : list) {
    System.out.println(num);
}
```

---

# 🔹 4. Important Points

| Feature                | ArrayList  |
| ---------------------- | ---------- |
| Order                  | Maintained |
| Duplicates             | Allowed    |
| Access                 | Fast       |
| Insert/Delete (middle) | Slow       |

---

# 🔹 5. When to Use ArrayList?

👉 Use when:

* You need fast access (`get`)
* Mostly reading data
* Not many insert/delete in middle

---

# 🔹 6. ArrayList vs LinkedList (Quick Idea)

| Feature       | ArrayList | LinkedList |
| ------------- | --------- | ---------- |
| Access        | Fast      | Slow       |
| Insert/Delete | Slow      | Fast       |

👉 We’ll go deep into LinkedList later.

---


# ⚠️ Common Mistakes

* Confusing `remove(index)` vs `remove(value)`
* Forgetting `list.size()` in loop
* Not using generics

---

# 🧠 Pro Insight

👉 In real projects:

* API responses → stored in `List`
* Database results → stored in `List`

---
---

# 🚀 Step 7.3: Set (Unique Elements)

---

# 🔹 1. What is a Set?

A **Set** is a collection that:

* ❌ **Does NOT allow duplicates**
* ❌ **Does NOT guarantee order** (in most cases)
* ✅ Stores **unique elements only**

---

## 🔹 Example

```java id="l6m3ks"
import java.util.*;

Set<Integer> set = new HashSet<>();

set.add(10);
set.add(20);
set.add(10); // duplicate ignored

System.out.println(set); // [10, 20]
```

👉 Duplicate `10` is ignored automatically.

---

# 🔹 2. HashSet (Most Used)

## ✅ Features

* No duplicates
* Unordered
* Fast operations (add, remove, search)

---

## 🔹 Common Methods

### ➤ add()

```java 
set.add(30);
```

---

### ➤ remove()

```java id="5q6i9q"
set.remove(10);
```

---

### ➤ contains()

```java id="a7r3tt"
System.out.println(set.contains(20));
```

---

### ➤ size()

```java id="p0v1m4"
System.out.println(set.size());
```

---

# 🔹 3. Looping Set

```java id="dl8jyb"
for (int num : set) {
    System.out.println(num);
}
```

👉 No index access like list ❌

---

# 🔹 4. Important Types of Set

## ✅ HashSet

* Fast
* No order

---

## ✅ LinkedHashSet

* Maintains insertion order

```java id="e3j9o0"
Set<Integer> set = new LinkedHashSet<>();
```

---

## ✅ TreeSet

* Sorted automatically

```java id="0gq5d2"
Set<Integer> set = new TreeSet<>();
```

---

# 🔹 5. Real Use Case (IMPORTANT)

## ✅ Remove duplicates from array

```java id="6rg0xg"
int[] arr = {1, 2, 2, 3, 3};

Set<Integer> set = new HashSet<>();

for (int num : arr) {
    set.add(num);
}

System.out.println(set); // [1,2,3]
```

---

# 🔹 6. List vs Set

| Feature      | List       | Set            |
| ------------ | ---------- | -------------- |
| Duplicates   | Allowed    | Not allowed    |
| Order        | Maintained | Not guaranteed |
| Index access | Yes        | No             |

---

# ⚠️ Common Mistakes

* Expecting order in `HashSet` ❌
* Trying to use index ❌
* Forgetting Set removes duplicates automatically

---

# 🧠 Pro Insight

👉 Set is heavily used in:

* Removing duplicates
* Checking existence (fast lookup)
* Data validation

---
---

# 🚀 Step 7.4: Queue & Stack

---

# 🔹 1. Queue (FIFO – First In First Out)

👉 Like a **line in a ticket counter**
First person enters → first person leaves

---

## ✅ Example using `PriorityQueue`

```java id="n8v0o2"
import java.util.*;

Queue<Integer> q = new PriorityQueue<>();

q.add(10);
q.add(5);
q.add(20);

System.out.println(q.poll()); // 5 (smallest first)
```

---

## 🔹 Common Methods

### ➤ add() / offer()

```java id="ql4u1s"
q.add(30);
```

---

### ➤ poll() (remove)

```java id="whtc8z"
q.poll();
```

---

### ➤ peek() (view front)

```java id="u4l0qf"
q.peek();
```

---

## ⚠️ Important

👉 `PriorityQueue`:

* Does **NOT follow insertion order**
* Follows **priority (min by default)**

---

## 🔹 If you want normal FIFO:

```java id="r8z1rq"
Queue<Integer> q = new LinkedList<>();
```

---

# 🔹 2. Stack (LIFO – Last In First Out)

👉 Like a **stack of plates**

Last added → first removed

---

## ✅ Example

```java id="m6sxy3"
Stack<Integer> stack = new Stack<>();

stack.push(10);
stack.push(20);

System.out.println(stack.pop()); // 20
```

---

## 🔹 Common Methods

### ➤ push()

```java id="76kl7p"
stack.push(30);
```

---

### ➤ pop()

```java id="9jq1l5"
stack.pop();
```

---

### ➤ peek()

```java id="0b3yru"
stack.peek();
```

---

# 🔹 3. Queue vs Stack

| Feature | Queue | Stack |
| ------- | ----- | ----- |
| Order   | FIFO  | LIFO  |
| Add     | end   | top   |
| Remove  | front | top   |

---

# 🔹 4. Real Use Cases

## ✅ Queue

* BFS (graph)
* Task scheduling
* Printer queue

---

## ✅ Stack

* Undo/Redo
* Expression evaluation
* DFS (graph)

---

# ⚠️ Common Mistakes

* Using `PriorityQueue` thinking it's FIFO ❌
* Confusing `peek()` vs `poll()`
* Misunderstanding LIFO/FIFO

---

# 🧠 Pro Insight

👉 Stack & Queue are **core for DSA**
Without them → difficult to solve problems

---
---

# 🚀 Step 7.5: Map (Key–Value Pair)

# 🔹 1. What is a Map?

A **Map** stores data in **key → value pairs**

👉 Like a dictionary:

* Key → unique
* Value → can be duplicate

---

## 🔹 Example

```java id="1xk3nv"
import java.util.*;

Map<String, Integer> map = new HashMap<>();

map.put("A", 10);
map.put("B", 20);
map.put("A", 30); // replaces old value

System.out.println(map); // {A=30, B=20}
```

---

# 🔹 2. Important Rules

* Keys must be **unique** ✅
* Values can repeat ✅
* No index ❌

---

# 🔹 3. HashMap (Most Used)

## ✅ Features

* Fast
* Unordered
* Allows one null key

---

## 🔹 Common Methods

### ➤ put()

```java id="6hf06f"
map.put("C", 40);
```

---

### ➤ get()

```java id="xpr7vp"
System.out.println(map.get("A")); // 30
```

---

### ➤ remove()

```java id="v35c5y"
map.remove("B");
```

---

### ➤ containsKey()

```java id="03ox7c"
map.containsKey("A");
```

---

### ➤ size()

```java id="2u6t2k"
map.size();
```

---

# 🔹 4. Looping Map

## ✅ Using keySet()

```java id="kj2mhg"
for (String key : map.keySet()) {
    System.out.println(key + " " + map.get(key));
}
```

---

## ✅ Using entrySet() (BEST)

```java id="o6v7jx"
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + " " + entry.getValue());
}
```

---

# 🔹 5. Other Map Types

## ✅ LinkedHashMap

* Maintains insertion order

---

## ✅ TreeMap

* Sorted by keys

---

# 🔹 6. Real Use Case (VERY IMPORTANT)

## ✅ Count frequency of elements

```java id="72m3rq"
int[] arr = {1, 2, 2, 3, 1};

Map<Integer, Integer> map = new HashMap<>();

for (int num : arr) {
    map.put(num, map.getOrDefault(num, 0) + 1);
}

System.out.println(map);
```

👉 Output:

```
{1=2, 2=2, 3=1}
```

---

# 🔹 7. Map vs Set vs List

| Feature    | List         | Set           | Map         |
| ---------- | ------------ | ------------- | ----------- |
| Duplicates | Yes          | No            | Keys No     |
| Order      | Yes          | No            | No          |
| Structure  | Single value | Unique values | Key → Value |

---

# ⚠️ Common Mistakes

* Confusing key vs value ❌
* Using `get()` without checking null ❌
* Not using `getOrDefault()`

---

# 🧠 Pro Insight

👉 `HashMap` is used everywhere:

* Backend APIs
* Caching
* Counting problems
* Database mapping

---
---

# 🚀 Step 7.6: LinkedList

---

## 🔹 1. What is a LinkedList?

A **LinkedList** is a collection where:

👉 Each element (node) contains:

* Data
* Reference (link) to next element

---

## 🔹 Visual Idea

![Image](https://images.openai.com/static-rsc-4/eeo_phZwABAJxW3h9BNXYaHgnM1WiP_6rJ7l4vOs7ksW2ybGN9aZACaBB7gdfBKmiyPxNVks9zm4N7hDibEP-D1uzSuYLX_E0gjqFE7VSPoMeGznCgNqoh5AGPRWj1mawFUWKPKWg4dfscaM9MZvYhQoYGSydnEMOpE1qTLL437CZqv6tWyYzVor-6NeG1Yq?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/J2gcXCpTyPvXehqm49RcjLA_TJpvkzy8xqaG3vlSO9JeS2zSiDUXo4G6XwIIpS03AYHj-R_JWG4wEtW7PjorYqGpmK6CWE9jttwWQx-V2In0ylWD6MdGh79PGS_W6Ykm6WapzK7hDiFwTdY9i8p2jXO6MqxO4u_EKA-vtC-NMMEkvCFX62ux3AL3-BLRnweb?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/6u3WGqX2PuIjE_ugZsMEjxhwy7wtuAWmp-LtH9C-CRG8yWdjP9-wM8-zHevG8cFoKcutm7fY33nLN_r20-dMvxTWYt-23OO6HCmaf-ahXITRAs1JCLMgl6mzRVIyswWahSeRqe63xUgicpYFxeR3t4YkEQxxprGT2BZjm50XFW3qkzZeX5C2roViotr-APul?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/DUZGN3axqVAM42XQHhC_6nsB6N-KMlFLEYjLCZJuRrxJ-zv7a8-PPkFzanUEhV0_sh8jzAS57EzQMmDo-Id3fGx6RMJTUaVHkNzb_pAl2i3reXm1EXNsdorOMFy6hDoTlK7C5ypa3Tfyv0oJWkBJ48m0d8Q9wmesEeo661YbAykXq8b5IE1Aslirp88Wz7Dx?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/mm1nYqAyQcDExRg2a8BC6TRhZrW2IivAWJJwdzgQX0N0Y1UnWQ4VHSusxnFBGJ7sBPQS4__oZH3p1GH-3eJ4C3foDxrYFv44l8jracBj0qaw-0ArxM8tgAE6IBW_JHOQFpIT0wXXzJRKLf4c-oOihBCges0G7cAnvbNd4Ghg6u6RhpX9uSfOwSJ5lXRw0ZVn?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/GxZdx6d3Kelg2yN2BK5fRI2SFpVa9jdqa3Vj-0sjXSToyQ8WNJsr_sSskTQrTb5TZQSmB82UOPi1qPJiRPxcU6MrRrE-dkps0YBJPmR1ATZe3grt6jLmbh5TZB1Rhp2pWgp6CzSmcZSR2jxuhGn8viDe6gcShHEQ5NyUuUsKMPljvZr2xpYnPfvsALM_BDyK?purpose=fullsize)

👉 Unlike ArrayList:

* Not stored in continuous memory
* Elements are connected via links

---

## 🔹 2. Basic Example

```java
import java.util.*;

LinkedList<Integer> list = new LinkedList<>();

list.add(10);
list.add(20);
list.add(30);

System.out.println(list);
```

---

## 🔹 3. Special Methods (Important)

### ➤ addFirst()

```java
list.addFirst(5); // [5, 10, 20, 30]
```

---

### ➤ addLast()

```java
list.addLast(40);
```

---

### ➤ removeFirst()

```java
list.removeFirst();
```

---

### ➤ removeLast()

```java
list.removeLast();
```

---

### ➤ getFirst() / getLast()

```java
list.getFirst();
list.getLast();
```

---

## 🔹 4. Performance Difference

| Operation              | ArrayList | LinkedList |
| ---------------------- | --------- | ---------- |
| Access (get)           | Fast ⚡    | Slow 🐢    |
| Insert/Delete (middle) | Slow 🐢   | Fast ⚡     |

---

## 🔹 5. When to Use LinkedList?

👉 Use when:

* Frequent insert/delete
* Less random access
* Queue/Deque operations

---

## 🔹 6. LinkedList as Queue

```java
Queue<Integer> q = new LinkedList<>();
q.add(10);
q.add(20);
System.out.println(q.poll());
```

---

## 🔹 7. LinkedList as Stack

```java
Deque<Integer> stack = new LinkedList<>();
stack.push(10);
stack.push(20);
System.out.println(stack.pop());
```

---

## 🔹 8. Key Insight

👉 LinkedList internally = **nodes + pointers**
👉 ArrayList internally = **dynamic array**

---
# ⚠️ Common Mistakes

* Using LinkedList for random access ❌
* Not understanding internal structure
* Using it when ArrayList is better

---

# 🧠 Pro Insight

👉 In real-world:

* LinkedList is used less than ArrayList
* But important for **DSA + interview questions**

---
---

# 🚀 Step 7.7: Iterator & Iterable

---

# 🔹 1. What is Iterable?

👉 `Iterable` is an **interface** that allows an object to be used in a loop.

```java
public interface Iterable<T> {
    Iterator<T> iterator();
}
```

👉 Any collection (List, Set, etc.) implements **Iterable**

That’s why this works:

```java id="h2d9ls"
List<Integer> list = new ArrayList<>();

for (int num : list) {
    System.out.println(num);
}
```

👉 This **for-each loop internally uses Iterator**

---

# 🔹 2. What is Iterator?

👉 `Iterator` is used to **traverse elements one by one**

---

## 🔹 Basic Example

```java id="nq0c0f"
import java.util.*;

List<Integer> list = Arrays.asList(10, 20, 30);

Iterator<Integer> it = list.iterator();

while (it.hasNext()) {
    System.out.println(it.next());
}
```

---

# 🔹 3. Important Methods

| Method      | Meaning                 |
| ----------- | ----------------------- |
| `hasNext()` | Check if element exists |
| `next()`    | Get next element        |
| `remove()`  | Remove element          |

---

## 🔹 remove() Example

```java id="6q1c9m"
Iterator<Integer> it = list.iterator();

while (it.hasNext()) {
    int num = it.next();
    if (num == 20) {
        it.remove();
    }
}
```

👉 Safe way to remove while iterating

---

# 🔹 4. Why Not Use Normal Loop?

❌ This causes error:

```java id="v3r0r6"
for (int num : list) {
    if (num == 20) {
        list.remove(num); // ❌ ConcurrentModificationException
    }
}
```

👉 Use **Iterator.remove()** instead ✅

---

# 🔹 5. Iterable vs Iterator

| Feature | Iterable          | Iterator            |
| ------- | ----------------- | ------------------- |
| Role    | Provides iterator | Traverses elements  |
| Method  | `iterator()`      | `next(), hasNext()` |

---

# 🔹 6. Behind the Scenes

👉 This:

```java id="bzqk0q"
for (int num : list)
```

👉 Is actually:

```java id="sq9snq"
Iterator<Integer> it = list.iterator();

while (it.hasNext()) {
    int num = it.next();
}
```

---

# ⚠️ Common Mistakes

* Removing elements directly ❌
* Forgetting `hasNext()`
* Confusing Iterable vs Iterator

---

# 🧠 Pro Insight

👉 Iterator is used in:

* Collections internally
* Streams (advanced Java)
* Frameworks

---
---

# 🚀 Step 7.8: Collections Utility Class

---

## 🔹 1. What is `Collections`?

👉 `Collections` is a **utility class** (all static methods)
Used to perform operations on collections like:

* Sorting
* Reversing
* Searching
* Shuffling

---

## 🔹 Example Setup

```java id="9y7v4f"
import java.util.*;

List<Integer> list = new ArrayList<>();
list.add(3);
list.add(1);
list.add(2);
```

---

# 🔹 2. Sorting (VERY IMPORTANT)

## ✅ sort()

```java id="h3cbf8"
Collections.sort(list);
System.out.println(list); // [1, 2, 3]
```

---

## ✅ Reverse Order

```java id="k0e3a1"
Collections.sort(list, Collections.reverseOrder());
```

---

# 🔹 3. Reverse List

```java id="xq8y2c"
Collections.reverse(list);
```

👉 Turns `[1,2,3]` → `[3,2,1]`

---

# 🔹 4. Shuffle (Random order)

```java id="p6p9mb"
Collections.shuffle(list);
```

👉 Useful in:

* Games
* Random selection

---

# 🔹 5. Find Max / Min

```java id="cw1jmb"
Collections.max(list);
Collections.min(list);
```

---

# 🔹 6. Frequency (IMPORTANT)

```java id="xxy7c0"
Collections.frequency(list, 2);
```

👉 Count occurrences of element

---

# 🔹 7. Binary Search (Sorted list only ⚠️)

```java id="xk3cps"
Collections.binarySearch(list, 2);
```

👉 Returns index of element

---

# 🔹 8. Fill & Copy

## ✅ fill()

```java id="xg7bne"
Collections.fill(list, 0);
```

👉 All elements → 0

---

## ✅ copy()

```java id="g9m1zz"
Collections.copy(destList, srcList);
```

---

# 🔹 9. Key Insight

👉 `Collections` works on:

* List
* Set (limited)

👉 Not directly on Map ❌

---
# ⚠️ Common Mistakes

* Using `binarySearch` on unsorted list ❌
* Confusing `reverse()` vs `reverseOrder()`
* Using `Collections` instead of `Collection`

---

# 🧠 Pro Insight

👉 `Collections` is used everywhere:

* Sorting API responses
* Ranking systems
* Data processing

---
---