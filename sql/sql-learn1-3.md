# 22. Normalization

Normalization is the process of:

```text id="m1x8q4"
organizing database tables properly
```

to reduce:

* redundancy
* duplicate data
* anomalies

---

# Why Normalization Important

Without normalization:

* duplicate data increases
* updates become difficult
* inconsistent data appears
* storage wasted

---

# Goals of Normalization

1. Reduce redundancy
2. Improve consistency
3. Avoid anomalies
4. Improve database design

---

# Real-Life Example

Bad table:

| student_id | student_name | course | teacher |
| ---------- | ------------ | ------ | ------- |
| 1          | Krishna      | Java   | Ravi    |
| 1          | Krishna      | SQL    | Ravi    |

Problem:

```text id="u5m2v7"
Krishna repeated
Ravi repeated
```

Redundant data.

---

# Types of Anomalies

1. Insert Anomaly
2. Update Anomaly
3. Delete Anomaly

---

# 1. Insert Anomaly

Cannot insert data without unrelated data.

Example:

```text id="q8m4x1"
cannot add new teacher
without student/course
```

---

# 2. Update Anomaly

Need to update same data multiple times.

Example:

```text id="r9m4v2"
teacher name changes
```

Must update many rows.

Risk:

```text id="k6m1x8"
inconsistent data
```

---

# 3. Delete Anomaly

Deleting one row accidentally removes important data.

Example:

```text id="x2m7q5"
delete last student row
```

Teacher info also lost.

---

# Normal Forms

1. 1NF
2. 2NF
3. 3NF
4. BCNF

---

# 1NF (First Normal Form)

Rules:

1. Atomic values only
2. No repeating groups
3. Each column stores single value

---

# Bad Table

| id | name    | subjects  |
| -- | ------- | --------- |
| 1  | Krishna | Java, SQL |

Problem:

```text id="p4m1v7"
multiple values in one column
```

---

# Correct 1NF

| id | name    | subject |
| -- | ------- | ------- |
| 1  | Krishna | Java    |
| 1  | Krishna | SQL     |

---

# Atomic Value Meaning

One cell:

```text id="u7m3q2"
one value only
```

---

# 2NF (Second Normal Form)

Rules:

1. Must be in 1NF
2. No partial dependency

---

# Partial Dependency Meaning

Non-key column depends on:

```text id="v9x1m4"
part of composite key
```

instead of whole key.

---

# Example Table

| student_id | course_id | student_name | course_name |
| ---------- | --------- | ------------ | ----------- |

Composite key:

```text id="k6m2v8"
(student_id, course_id)
```

Problem:

```text id="n1m7q5"
student_name depends only on student_id
course_name depends only on course_id
```

Partial dependency exists.

---

# Solution for 2NF

Split tables.

---

# students

| student_id | student_name |
| ---------- | ------------ |

---

# courses

| course_id | course_name |
| --------- | ----------- |

---

# enrollments

| student_id | course_id |
| ---------- | --------- |

---

# Benefits

No repeated:

```text id="f8x2m4"
student/course data
```

---

# 3NF (Third Normal Form)

Rules:

1. Must be in 2NF
2. No transitive dependency

---

# Transitive Dependency Meaning

Non-key column depends on:

```text id="r5m9q1"
another non-key column
```

---

# Example Table

| emp_id | emp_name | dept_id | dept_name |
| ------ | -------- | ------- | --------- |

Problem:

```text id="u3x7m8"
dept_name depends on dept_id
```

NOT directly on:

```text id="m6q2v4"
emp_id
```

---

# Solution for 3NF

Split into:

---

# employees

| emp_id | emp_name | dept_id |
| ------ | -------- | ------- |

---

# departments

| dept_id | dept_name |
| ------- | --------- |

---

# Benefits

Department info stored:

```text id="x1m8q7"
only once
```

---

# BCNF (Boyce-Codd Normal Form)

Stronger version of 3NF.

Rule:

```text id="p7m4x2"
every determinant must be candidate key
```

---

# Determinant

Column determining another column.

---

# BCNF usually needed in:

```text id="k2x8m5"
advanced database design
```

Less common in beginner projects.

---

# Normalization Flow

```text id="v5m1q9"
1NF
→ remove repeating groups

2NF
→ remove partial dependency

3NF
→ remove transitive dependency

BCNF
→ stronger dependency rules
```

---

# Denormalization

Opposite of normalization.

Used to:

```text id="q3m7x1"
improve performance
```

by adding some redundancy intentionally.

---

# Example

Instead of joins:

```text id="u8m2v6"
store repeated department_name
```

for faster reads.

---

# Tradeoff

| Normalization   | Denormalization  |
| --------------- | ---------------- |
| Less redundancy | Faster reads     |
| More joins      | More duplication |

---

# Real-World Example

---

# E-Commerce

Normalized tables:

* customers
* orders
* products
* payments

---

# Banking

Separate:

* accounts
* branches
* customers
* transactions

---

# Social Media

Separate:

* users
* posts
* comments
* likes

---

# School System

Separate:

* students
* teachers
* courses
* enrollments

---

# Why Over-Normalization Can Be Problem

Too many tables:

```text id="f1m9q4"
too many joins
```

May reduce performance.

---

# Practical Industry Approach

Usually:

* normalized design
* selective denormalization for performance

---

# Common Mistakes

---

# Storing Multiple Values in One Column

Wrong:

```text id="x7m3v2"
Java, SQL, Python
```

in single column.

---

# Repeating Same Data Everywhere

Creates update anomalies.

---

# Too Many Joins

Over-normalized systems can become slow.

---

# Ignoring Relationships

Leads to inconsistent database structure.

---

# Important Interview Questions

## What is Normalization?

Reducing redundancy and improving structure.

---

## What are anomalies?

* insert
* update
* delete anomalies

---

## Difference between 2NF and 3NF?

| 2NF | Removes partial dependency    |
| --- | ----------------------------- |
| 3NF | Removes transitive dependency |

---

## What is transitive dependency?

Non-key depends on non-key.

---

## Why normalization important?

* consistency
* reduced redundancy
* easier maintenance

---

## What is denormalization?

Adding redundancy intentionally for performance.

---

# Best Practices

---

# Normalize Core Data

Especially:

* banking
* inventory
* finance systems

---

# Avoid Multi-Value Columns

Keep atomic values.

---

# Use Foreign Keys Properly

Maintain relationships.

---

# Balance Normalization and Performance

Too much normalization can hurt speed.

---
---
# 23. Advanced SQL Optimization

SQL Optimization means:

```text id="m1x8q4"
making queries faster and more efficient
```

Goal:

* reduce execution time
* reduce memory usage
* reduce CPU usage
* improve scalability

---

# Why Optimization Important

Small tables:

```text id="u5m2v7"
queries seem fast
```

But production databases may contain:

```text id="q8m4x1"
millions or billions of rows
```

Bad queries become:

* slow
* expensive
* system bottlenecks

---

# Main Optimization Areas

1. Query Optimization
2. Index Optimization
3. Execution Plans
4. Join Optimization
5. Partitioning
6. Caching
7. Denormalization
8. Database Design

---

# 1. Query Optimization

---

# Avoid SELECT *

Bad:

```sql id="r9m4v2"
SELECT *
FROM employees;
```

Why bad?

* fetches unnecessary columns
* increases network transfer
* wastes memory

Better:

```sql id="k6m1x8"
SELECT id, name
FROM employees;
```

---

# Use WHERE Properly

Bad:

```sql id="x2m7q5"
SELECT *
FROM employees;
```

Better:

```sql id="p4m1v7"
SELECT *
FROM employees
WHERE department = 'IT';
```

Filters fewer rows.

---

# Avoid Functions on Indexed Columns

Bad:

```sql id="u7m3q2"
SELECT *
FROM users
WHERE LOWER(email) = 'a@gmail.com';
```

Why bad?

```text id="v9x1m4"
index may not be used
```

Better:

```sql id="k6m2v8"
WHERE email = 'a@gmail.com'
```

---

# Avoid Leading Wildcards

Bad:

```sql id="n1m7q5"
WHERE name LIKE '%krishna'
```

Index usually ignored.

Better:

```sql id="f8x2m4"
WHERE name LIKE 'krishna%'
```

---

# Use LIMIT When Needed

Bad:

```sql id="r5m9q1"
SELECT *
FROM logs;
```

Huge result set.

Better:

```sql id="u3x7m8"
SELECT *
FROM logs
LIMIT 100;
```

---

# 2. Index Optimization

Indexes are powerful:

```text id="m6q2v4"
but must be used correctly
```

---

# Index Frequently Searched Columns

Good candidates:

* email
* id
* foreign keys
* created_at

---

# Avoid Too Many Indexes

Every INSERT/UPDATE:

```text id="x1m8q7"
must update indexes too
```

Too many indexes:

```text id="p7m4x2"
slow writes
```

---

# Composite Index Order Matters

Index:

```sql id="k2x8m5"
(city, age)
```

Efficient for:

```text id="v5m1q9"
city
city + age
```

Not efficient for:

```text id="q3m7x1"
age only
```

---

# Covering Index

If all required columns exist in index:

```text id="u8m2v6"
database may avoid table lookup
```

Very fast.

---

# Example

Index:

```sql id="f1m9q4"
(email, name)
```

Query:

```sql id="x7m3v2"
SELECT email, name
FROM users
WHERE email = 'a@gmail.com';
```

Can be resolved fully from index.

---

# 3. Execution Plan

Very important for optimization.

---

# EXPLAIN

Shows:

```text id="m4q8x1"
how database executes query
```

---

# Example

```sql id="u1m5v7"
EXPLAIN
SELECT *
FROM employees
WHERE department = 'IT';
```

---

# EXPLAIN Helps Detect

* full table scans
* missing indexes
* expensive joins
* sorting operations

---

# Important Terms

---

# Full Table Scan

Database checks:

```text id="r8x2m4"
every row
```

Usually slow.

---

# Index Scan

Database uses:

```text id="k6m1q9"
index structure
```

Much faster.

---

# 4. Join Optimization

Joins can become expensive.

---

# Index Join Columns

Very important.

Example:

```sql id="p9x4m2"
orders.customer_id
customers.id
```

should usually be indexed.

---

# Filter Before Joining

Bad:

```sql id="x5m7v1"
JOIN huge tables first
```

Better:

```text id="u2m8q5"
filter rows early
```

---

# Example

Better:

```sql id="n7x3m1"
SELECT *
FROM orders o
JOIN customers c
ON o.customer_id = c.id
WHERE o.amount > 1000;
```

---

# Avoid Unnecessary Joins

Extra joins:

* increase memory
* increase sorting
* slow execution

---

# 5. Partitioning

Partitioning splits huge table into:

```text id="m3q9v7"
smaller logical pieces
```

---

# Example

Orders table partitioned by:

```text id="x6m1q4"
year
```

Partitions:

```text id="u5x2m8"
orders_2024
orders_2025
orders_2026
```

---

# Benefit

Query:

```sql id="f4m9q1"
WHERE year = 2026
```

only scans:

```text id="r1x7m5"
one partition
```

---

# Types of Partitioning

1. Range Partitioning
2. Hash Partitioning
3. List Partitioning
4. Composite Partitioning

---

# Range Partition Example

```text id="k8m2v4"
2024 data
2025 data
2026 data
```

---

# 6. Caching

Caching stores:

```text id="q6x1m9"
frequently used results
```

Avoids repeated execution.

---

# Types

* query cache
* application cache
* Redis cache

Example:

* homepage products
* trending posts
* dashboard metrics

---

# 7. Denormalization

Sometimes:

```text id="m7v3q2"
redundancy added intentionally
```

to reduce joins.

---

# Example

Instead of joining:

```text id="u1x5m8"
department table
```

store:

```text id="x3q7m5"
department_name directly
```

for faster reads.

---

# Tradeoff

| Normalized      | Denormalized    |
| --------------- | --------------- |
| More joins      | Faster reads    |
| Less redundancy | More redundancy |

---

# 8. Batch Operations

Bad:

```text id="m6v1q8"
1000 individual inserts
```

Better:

```text id="u2m9v5"
bulk insert
```

---

# Example

Better:

```sql id="f8x3m1"
INSERT INTO students
VALUES
(1, 'A'),
(2, 'B'),
(3, 'C');
```

---

# 9. Avoid N+1 Query Problem

Common in applications.

---

# Bad Pattern

1 query:

```text id="x5m7q2"
get users
```

then:

```text id="m1v9q4"
1 query per user
```

Very inefficient.

---

# Better

Use JOIN:

```sql id="u6m2v7"
SELECT users.name,
       posts.title
FROM users
JOIN posts
ON users.id = posts.user_id;
```

---

# 10. Database Connection Pooling

Opening DB connections repeatedly:

```text id="r4m8x1"
expensive
```

Connection pools reuse:

```text id="k1m5v9"
existing connections
```

Very important in backend systems.

---

# Real-World Optimization Examples

---

# E-Commerce

Indexes on:

* product_id
* category
* price

Caching:

* trending products
* homepage data

---

# Banking

Partition:

* transactions by month/year

Indexes:

* account_number
* transaction_id

---

# Social Media

Indexes:

* user_id
* created_at

Caching:

* feeds
* recommendations

---

# Logging Systems

Partition logs:

```text id="m7q2x4"
by date
```

to avoid huge scans.

---

# Common Mistakes

---

# Over-Indexing

Too many indexes hurt writes.

---

# Using SELECT *

Wasteful.

---

# Ignoring EXPLAIN

Optimization becomes guesswork.

---

# Large Transactions

Can lock resources.

---

# Deep Nested Queries

Hard to optimize.

---

# Not Limiting Result Sets

Huge memory/network usage.

---

# Performance Checklist

---

# Query Level

* avoid SELECT *
* filter early
* use LIMIT
* avoid unnecessary joins

---

# Index Level

* index search columns
* avoid over-indexing
* optimize composite index order

---

# Database Level

* partition huge tables
* use caching
* maintain normalization balance

---

# Important Interview Questions

## What is query optimization?

Making queries faster and efficient.

---

## What is EXPLAIN?

Shows execution plan.

---

## Why indexes improve performance?

Avoid full table scans.

---

## What is partitioning?

Splitting large table into smaller parts.

---

## What is N+1 query problem?

Too many repeated queries.

---

## Why SELECT * bad?

Unnecessary data retrieval.

---

# Best Practices

---

# Measure Before Optimizing

Use:

```text id="x5m7q2"
EXPLAIN
profiling tools
```

---

# Optimize Biggest Bottlenecks First

Not tiny queries.

---

# Use Proper Index Strategy

Balanced indexing.

---

# Keep Queries Simple

Readable + maintainable.

---

# Monitor Production Queries

Critical in real systems.

---
---
# 24. SQL Interview & Real-World Patterns

These are the most commonly asked:

* interview problems
* production query patterns
* analytical SQL questions

Very important for:

* placements
* backend jobs
* data analyst roles

---

# Example Table

## employees

| id | name    | department | salary |
| -- | ------- | ---------- | ------ |
| 1  | Krishna | IT         | 50000  |
| 2  | Ram     | HR         | 40000  |
| 3  | Sita    | IT         | 60000  |
| 4  | Arjun   | HR         | 40000  |
| 5  | Ravi    | Sales      | 70000  |

---

# 1. Find Highest Salary

```sql id="m1x8q4"
SELECT MAX(salary)
FROM employees;
```

---

# 2. Find Employee with Highest Salary

```sql id="u5m2v7"
SELECT *
FROM employees
WHERE salary = (
    SELECT MAX(salary)
    FROM employees
);
```

---

# 3. Second Highest Salary

Using subquery:

```sql id="q8m4x1"
SELECT MAX(salary)
FROM employees
WHERE salary < (
    SELECT MAX(salary)
    FROM employees
);
```

---

# Using DENSE_RANK()

Better modern approach:

```sql id="r9m4v2"
SELECT name,
       salary
FROM (

    SELECT name,
           salary,
           DENSE_RANK() OVER(
               ORDER BY salary DESC
           ) AS rnk
    FROM employees

) ranked

WHERE rnk = 2;
```

---

# 4. Nth Highest Salary

Example:

```text id="k6m1x8"
3rd highest salary
```

```sql id="x2m7q5"
SELECT name,
       salary
FROM (

    SELECT name,
           salary,
           DENSE_RANK() OVER(
               ORDER BY salary DESC
           ) AS rnk
    FROM employees

) ranked

WHERE rnk = 3;
```

---

# 5. Find Duplicate Records

Example:
duplicate emails.

```sql id="p4m1v7"
SELECT email,
       COUNT(*) AS total
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
```

---

# 6. Delete Duplicate Rows

Using ROW_NUMBER():

```sql id="u7m3q2"
DELETE FROM users
WHERE id IN (

    SELECT id
    FROM (

        SELECT id,
               ROW_NUMBER() OVER(
                   PARTITION BY email
                   ORDER BY id
               ) AS rn
        FROM users

    ) temp

    WHERE rn > 1
);
```

---

# 7. Employees Earning More Than Department Average

```sql id="v9x1m4"
SELECT name,
       department,
       salary
FROM employees e
WHERE salary > (

    SELECT AVG(salary)
    FROM employees
    WHERE department = e.department

);
```

---

# 8. Count Employees Per Department

```sql id="k6m2v8"
SELECT department,
       COUNT(*) AS total_employees
FROM employees
GROUP BY department;
```

---

# 9. Find Departments with More Than 5 Employees

```sql id="n1m7q5"
SELECT department,
       COUNT(*) AS total
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;
```

---

# 10. Pagination Query

---

# Page 1

```sql id="f8x2m4"
SELECT *
FROM employees
LIMIT 10 OFFSET 0;
```

---

# Page 2

```sql id="r5m9q1"
SELECT *
FROM employees
LIMIT 10 OFFSET 10;
```

---

# 11. Running Total

```sql id="u3x7m8"
SELECT id,
       salary,
       SUM(salary) OVER(
           ORDER BY id
       ) AS running_total
FROM employees;
```

---

# 12. Top 3 Highest Salaries

```sql id="m6q2v4"
SELECT *
FROM employees
ORDER BY salary DESC
LIMIT 3;
```

---

# 13. Rank Employees by Salary

```sql id="x1m8q7"
SELECT name,
       salary,
       RANK() OVER(
           ORDER BY salary DESC
       ) AS salary_rank
FROM employees;
```

---

# 14. Find Employees Without Department

Using LEFT JOIN:

```sql id="p7m4x2"
SELECT e.name
FROM employees e
LEFT JOIN departments d
ON e.department_id = d.id
WHERE d.id IS NULL;
```

---

# 15. Find Common Records

Using INTERSECT:

```sql id="k2x8m5"
SELECT employee_id
FROM project_a

INTERSECT

SELECT employee_id
FROM project_b;
```

---

# 16. Pivoting Data

Convert rows into columns.

Example:

| department | total |
| ---------- | ----- |
| IT         | 10    |
| HR         | 5     |

Into:

| IT | HR |
| -- | -- |
| 10 | 5  |

---

# Example

```sql id="v5m1q9"
SELECT

SUM(CASE
    WHEN department = 'IT'
    THEN 1
    ELSE 0
END) AS IT,

SUM(CASE
    WHEN department = 'HR'
    THEN 1
    ELSE 0
END) AS HR

FROM employees;
```

---

# 17. Unpivoting

Convert columns into rows.

Advanced reporting usage.

---

# 18. Gaps and Islands Problem

Very famous interview topic.

Used for:

* consecutive dates
* streaks
* attendance tracking

---

# Example

Find consecutive login streaks.

Usually solved using:

* ROW_NUMBER()
* date arithmetic

---

# 19. Recursive Hierarchy Query

Manager hierarchy:

```sql id="q3m7x1"
WITH RECURSIVE hierarchy AS (

    SELECT id,
           name,
           manager_id
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    SELECT e.id,
           e.name,
           e.manager_id
    FROM employees e
    JOIN hierarchy h
    ON e.manager_id = h.id

)

SELECT *
FROM hierarchy;
```

---

# 20. Find Missing IDs

Example:
IDs:

```text id="u8m2v6"
1
2
4
5
```

Missing:

```text id="f1m9q4"
3
```

---

# Example

```sql id="x7m3v2"
SELECT t1.id + 1 AS missing_id
FROM numbers t1
LEFT JOIN numbers t2
ON t1.id + 1 = t2.id
WHERE t2.id IS NULL;
```

---

# 21. Find Latest Record Per User

```sql id="m4q8x1"
SELECT *
FROM (

    SELECT *,
           ROW_NUMBER() OVER(
               PARTITION BY user_id
               ORDER BY created_at DESC
           ) AS rn
    FROM orders

) temp

WHERE rn = 1;
```

---

# 22. Detect Duplicate Emails

```sql id="u1m5v7"
SELECT email
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
```

---

# 23. Find Users with No Orders

```sql id="r8x2m4"
SELECT u.name
FROM users u
LEFT JOIN orders o
ON u.id = o.user_id
WHERE o.id IS NULL;
```

---

# 24. Self Join Example

Employee-manager relationship:

```sql id="k6m1q9"
SELECT e.name AS employee,
       m.name AS manager
FROM employees e
LEFT JOIN employees m
ON e.manager_id = m.id;
```

---

# 25. Dynamic Ranking by Department

```sql id="p9x4m2"
SELECT name,
       department,
       salary,
       DENSE_RANK() OVER(
           PARTITION BY department
           ORDER BY salary DESC
       ) AS dept_rank
FROM employees;
```

---

# 26. CASE Statement Pattern

```sql id="x5m7v1"
SELECT name,

CASE
    WHEN salary > 50000 THEN 'High'
    WHEN salary > 40000 THEN 'Medium'
    ELSE 'Low'
END AS salary_level

FROM employees;
```

---

# 27. Top N Per Group

Example:
top 2 salaries per department.

```sql id="u2m8q5"
SELECT *
FROM (

    SELECT name,
           department,
           salary,
           ROW_NUMBER() OVER(
               PARTITION BY department
               ORDER BY salary DESC
           ) AS rn
    FROM employees

) temp

WHERE rn <= 2;
```

---

# 28. Find Odd and Even Rows

```sql id="n7x3m1"
SELECT *
FROM employees
WHERE MOD(id, 2) = 0;
```

Even rows.

---

# 29. Swap Column Values

```sql id="m3q9v7"
UPDATE students
SET gender = CASE
    WHEN gender = 'M' THEN 'F'
    ELSE 'M'
END;
```

---

# 30. Find Max Salary Per Department

```sql id="x6m1q4"
SELECT department,
       MAX(salary)
FROM employees
GROUP BY department;
```

---

# Most Asked Interview Topics

---

# Beginner

* joins
* group by
* having
* subqueries
* normalization

---

# Intermediate

* indexes
* transactions
* views
* stored procedures

---

# Advanced

* window functions
* recursive CTEs
* optimization
* ranking queries
* gaps/islands

---

# Common Interview Theory Questions

## Difference between DELETE, DROP, TRUNCATE?

## Difference between WHERE and HAVING?

## Difference between RANK and DENSE_RANK?

## Difference between INNER and LEFT JOIN?

## What is normalization?

## What are ACID properties?

## What is indexing?

---

# Real-World SQL Skills Companies Expect

* writing optimized joins
* using indexes properly
* pagination queries
* aggregation/reporting
* debugging slow queries
* handling transactions
* analytics using window functions

---

# Best Practice for Interviews

---

# Understand Logic, Not Memorization

Interviewers care about:

```text id="u5x2m8"
problem solving
```

---

# Practice Writing Queries Manually

Typing improves speed.

---

# Learn Execution Order

Critical for debugging.

---

# Focus on Window Functions + Joins

Very high interview frequency.

---

# Use Proper Formatting

Readable SQL matters professionally.

---

# Final SQL Mastery Checklist

You should now know:

* DDL
* DML
* DQL
* TCL
* DCL
* Constraints
* Joins
* Subqueries
* Set operations
* Views
* Indexes
* Transactions
* Procedures
* Triggers
* Window functions
* CTEs
* Normalization
* Optimization
* Real-world SQL patterns

---

# Recommended Practice Platforms

* [LeetCode SQL Problems](https://leetcode.com/problemset/database/?utm_source=chatgpt.com)
* [HackerRank SQL](https://www.hackerrank.com/domains/sql?utm_source=chatgpt.com)
* [SQLBolt Interactive Lessons](https://sqlbolt.com/?utm_source=chatgpt.com)
* [W3Schools SQL Reference](https://www.w3schools.com/sql/?utm_source=chatgpt.com)

---
---