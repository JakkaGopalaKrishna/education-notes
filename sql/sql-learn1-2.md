# 12. JOINS (Most Important SQL Topic)

Joins are used to combine data from multiple tables.

This is the heart of:

```text id="m1x8q4"
relational databases
```

Without joins:

```text id="u5m2v7"
tables are isolated
```

With joins:

```text id="q8m4x1"
related data can be connected
```

---

# Why JOINS Needed

Example:

## students

| id | name    |
| -- | ------- |
| 1  | Krishna |
| 2  | Ram     |

## marks

| student_id | marks |
| ---------- | ----- |
| 1          | 95    |
| 2          | 80    |

To get:

```text id="r9m4v2"
student name + marks together
```

we use:

```text id="k6m1x8"
JOIN
```

---

# Types of JOINS

1. INNER JOIN
2. LEFT JOIN
3. RIGHT JOIN
4. FULL JOIN
5. CROSS JOIN
6. SELF JOIN

---

# Example Tables

---

# students

| id | name    |
| -- | ------- |
| 1  | Krishna |
| 2  | Ram     |
| 3  | Sita    |

---

# marks

| student_id | marks |
| ---------- | ----- |
| 1          | 95    |
| 2          | 80    |
| 4          | 70    |

---

# INNER JOIN

Returns:

```text id="x2m7q5"
only matching rows
```

---

# Syntax

```sql id="p4m1v7"
SELECT columns
FROM table1
INNER JOIN table2
ON table1.column = table2.column;
```

---

# Example

```sql id="u7m3q2"
SELECT students.name,
       marks.marks
FROM students
INNER JOIN marks
ON students.id = marks.student_id;
```

---

# Output

| name    | marks |
| ------- | ----- |
| Krishna | 95    |
| Ram     | 80    |

---

# Why Sita Missing?

Because:

```text id="v9x1m4"
no matching marks row
```

---

# Why student_id 4 Missing?

Because:

```text id="k6m2v8"
no matching student
```

---

# INNER JOIN Diagram

```text id="n1m7q5"
only intersection area
```

---

# LEFT JOIN

Returns:

* all rows from LEFT table
* matching rows from RIGHT table

Non-matching values become:

```text id="f8x2m4"
NULL
```

---

# Syntax

```sql id="r5m9q1"
SELECT columns
FROM table1
LEFT JOIN table2
ON condition;
```

---

# Example

```sql id="u3x7m8"
SELECT students.name,
       marks.marks
FROM students
LEFT JOIN marks
ON students.id = marks.student_id;
```

---

# Output

| name    | marks |
| ------- | ----- |
| Krishna | 95    |
| Ram     | 80    |
| Sita    | NULL  |

---

# Why Sita Appears?

Because:

```text id="m6q2v4"
LEFT table rows always included
```

---

# RIGHT JOIN

Opposite of LEFT JOIN.

Returns:

* all rows from RIGHT table
* matching rows from LEFT table

---

# Example

```sql id="x1m8q7"
SELECT students.name,
       marks.marks
FROM students
RIGHT JOIN marks
ON students.id = marks.student_id;
```

---

# Output

| name    | marks |
| ------- | ----- |
| Krishna | 95    |
| Ram     | 80    |
| NULL    | 70    |

---

# Why NULL Appears?

Because:

```text id="p7m4x2"
student_id 4
```

has no matching student.

---

# FULL JOIN

Returns:

```text id="k2x8m5"
all matching + non-matching rows
```

from both tables.

---

# Example

```sql id="v5m1q9"
SELECT students.name,
       marks.marks
FROM students
FULL JOIN marks
ON students.id = marks.student_id;
```

---

# Output

| name    | marks |
| ------- | ----- |
| Krishna | 95    |
| Ram     | 80    |
| Sita    | NULL  |
| NULL    | 70    |

---

# Important Note

Some databases like:

* MySQL

do NOT directly support:

```text id="q3m7x1"
FULL JOIN
```

Need workaround using:

```text id="u8m2v6"
UNION
```

---

# CROSS JOIN

Returns:

```text id="f1m9q4"
cartesian product
```

Every row combines with every row.

---

# Example

## colors

| color |
| ----- |
| Red   |
| Blue  |

## sizes

| size |
| ---- |
| S    |
| M    |

Query:

```sql id="x7m3v2"
SELECT *
FROM colors
CROSS JOIN sizes;
```

---

# Output

| color | size |
| ----- | ---- |
| Red   | S    |
| Red   | M    |
| Blue  | S    |
| Blue  | M    |

---

# Total Rows Formula

```text id="m4q8x1"
rows1 × rows2
```

---

# SELF JOIN

Joining table with itself.

Used for:

* employee-manager relation
* hierarchical data

---

# Example Table

## employees

| id | name    | manager_id |
| -- | ------- | ---------- |
| 1  | Krishna | NULL       |
| 2  | Ram     | 1          |
| 3  | Sita    | 1          |

---

# Query

```sql id="u1m5v7"
SELECT e.name AS employee,
       m.name AS manager
FROM employees e
LEFT JOIN employees m
ON e.manager_id = m.id;
```

---

# Output

| employee | manager |
| -------- | ------- |
| Krishna  | NULL    |
| Ram      | Krishna |
| Sita     | Krishna |

---

# Table Aliases

Very important in joins.

Example:

```sql id="r8x2m4"
students s
marks m
```

---

# Cleaner Query

```sql id="k6m1q9"
SELECT s.name,
       m.marks
FROM students s
INNER JOIN marks m
ON s.id = m.student_id;
```

---

# Why Aliases Important

Without aliases:

```sql id="p9x4m2"
students.id
marks.student_id
```

With aliases:

```sql id="x5m7v1"
s.id
m.student_id
```

Cleaner and readable.

---

# JOIN Execution Internally

SQL roughly:

1. takes first table
2. compares rows
3. matches ON condition
4. creates combined rows

---

# Multiple JOINS

Possible.

---

# Example

```sql id="u2m8q5"
SELECT s.name,
       m.marks,
       d.department_name
FROM students s
JOIN marks m
ON s.id = m.student_id
JOIN departments d
ON s.dept_id = d.id;
```

---

# Real-World Examples

---

# E-Commerce

## orders + customers

```sql id="n7x3m1"
SELECT customers.name,
       orders.amount
FROM customers
JOIN orders
ON customers.id = orders.customer_id;
```

---

# Banking System

## accounts + transactions

```sql id="m3q9v7"
SELECT a.account_number,
       t.amount
FROM accounts a
JOIN transactions t
ON a.id = t.account_id;
```

---

# Social Media

## users + posts

```sql id="x6m1q4"
SELECT users.username,
       posts.content
FROM users
JOIN posts
ON users.id = posts.user_id;
```

---

# School System

## students + marks + subjects

```sql id="u5x2m8"
SELECT s.name,
       sub.subject_name,
       m.marks
FROM students s
JOIN marks m
ON s.id = m.student_id
JOIN subjects sub
ON sub.id = m.subject_id;
```

---

# Common Mistakes

---

# Missing ON Condition

Dangerous:

```sql id="f4m9q1"
SELECT *
FROM students
JOIN marks;
```

Creates:

```text id="r1x7m5"
cross join accidentally
```

Huge result set.

---

# Wrong Join Condition

Wrong:

```sql id="k8m2v4"
ON students.age = marks.student_id
```

Can produce incorrect data.

---

# Ambiguous Columns

Wrong:

```sql id="q6x1m9"
SELECT id
FROM students
JOIN marks
```

Which `id`?

Use:

```sql id="m7v3q2"
students.id
```

---

# Performance Notes

Joins on huge tables can be expensive.

Indexes help on:

* foreign keys
* join columns

Especially:

```text id="u1x5m8"
id columns
```

---

# Important Interview Questions

## Difference between INNER and LEFT JOIN?

| INNER        | LEFT          |
| ------------ | ------------- |
| Only matches | All left rows |

---

## Which join returns unmatched rows?

LEFT / RIGHT / FULL

---

## What is CROSS JOIN?

Cartesian product.

---

## Why aliases used?

For:

* readability
* shorter queries
* self joins

---

# Best Practices

---

# Always Use Explicit JOIN Syntax

Better:

```sql id="x3q7m5"
INNER JOIN
LEFT JOIN
```

instead of old comma joins.

---

# Always Specify ON Condition

Avoid accidental cross joins.

---

# Use Aliases

Readable:

```sql id="m6v1q8"
students s
marks m
```

---

# Index Join Columns

Improves performance significantly.

---
---
# 13. Subqueries

A subquery is:

```text id="m1x8q4"
query inside another query
```

Also called:

```text id="u5m2v7"
nested query
```

---

# Why Subqueries Used

Used when:

* one query depends on another query result
* filtering based on calculated values
* comparing against dynamic data

---

# Basic Structure

```sql id="q8m4x1"
SELECT columns
FROM table
WHERE column operator (
    SELECT ...
);
```

---

# Example Table

## employees

| id | name    | department | salary |
| -- | ------- | ---------- | ------ |
| 1  | Krishna | IT         | 50000  |
| 2  | Ram     | HR         | 40000  |
| 3  | Sita    | IT         | 60000  |
| 4  | Arjun   | Sales      | 45000  |

---

# Simple Subquery

Find employees with salary greater than average salary.

---

# Step 1

Average salary:

```sql id="r9m4v2"
SELECT AVG(salary)
FROM employees;
```

Result:

```text id="k6m1x8"
48750
```

---

# Step 2

Use inside another query:

```sql id="x2m7q5"
SELECT name, salary
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);
```

---

# Output

| name    | salary |
| ------- | ------ |
| Krishna | 50000  |
| Sita    | 60000  |

---

# How SQL Executes

1. Inner query runs first
2. Result returned
3. Outer query executes

---

# Types of Subqueries

1. Scalar Subquery
2. Multiple Row Subquery
3. Multiple Column Subquery
4. Correlated Subquery

---

# 1. Scalar Subquery

Returns:

```text id="p4m1v7"
single value
```

Example:

```sql id="u7m3q2"
SELECT *
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);
```

Inner query returns:

```text id="v9x1m4"
one value
```

---

# 2. Multiple Row Subquery

Returns:

```text id="k6m2v8"
multiple rows
```

Usually used with:

* IN
* ANY
* ALL

---

# Example Table

## departments

| id | dept_name |
| -- | --------- |
| 1  | IT        |
| 2  | HR        |

---

# employees

| name    | dept_id |
| ------- | ------- |
| Krishna | 1       |
| Ram     | 2       |

---

# Query

```sql id="n1m7q5"
SELECT name
FROM employees
WHERE dept_id IN (
    SELECT id
    FROM departments
    WHERE dept_name IN ('IT', 'HR')
);
```

---

# IN with Subquery

Very common.

---

# Example

Find employees in IT department.

```sql id="f8x2m4"
SELECT name
FROM employees
WHERE dept_id IN (
    SELECT id
    FROM departments
    WHERE dept_name = 'IT'
);
```

---

# NOT IN

```sql id="r5m9q1"
SELECT name
FROM employees
WHERE dept_id NOT IN (
    SELECT id
    FROM departments
    WHERE dept_name = 'HR'
);
```

---

# EXISTS

Checks whether subquery returns rows.

Returns:

```text id="u3x7m8"
TRUE or FALSE
```

---

# Example

```sql id="m6q2v4"
SELECT name
FROM employees e
WHERE EXISTS (
    SELECT 1
    FROM departments d
    WHERE d.id = e.dept_id
);
```

---

# Why `SELECT 1` Used?

Because:

```text id="x1m8q7"
actual column not important
```

Only checking:

```text id="p7m4x2"
row existence
```

---

# EXISTS vs IN

| EXISTS                              | IN             |
| ----------------------------------- | -------------- |
| Checks existence                    | Checks values  |
| Faster for large datasets sometimes | Simpler syntax |

---

# Correlated Subquery (Important)

Inner query depends on outer query.

Runs:

```text id="k2x8m5"
for every outer row
```

---

# Example

Find employees earning above department average.

```sql id="v5m1q9"
SELECT e1.name,
       e1.salary,
       e1.department
FROM employees e1
WHERE salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e1.department = e2.department
);
```

---

# How It Works

For each employee:

1. calculate department average
2. compare salary

---

# Example Logic

For IT:

```text id="q3m7x1"
average = 55000
```

Krishna:

```text id="u8m2v6"
50000 > 55000 → FALSE
```

Sita:

```text id="f1m9q4"
60000 > 55000 → TRUE
```

---

# ANY Operator

Compares with:

```text id="x7m3v2"
at least one value
```

---

# Example

```sql id="m4q8x1"
SELECT name
FROM employees
WHERE salary > ANY (
    SELECT salary
    FROM employees
    WHERE department = 'HR'
);
```

---

# ALL Operator

Condition must match:

```text id="u1m5v7"
all values
```

---

# Example

```sql id="r8x2m4"
SELECT name
FROM employees
WHERE salary > ALL (
    SELECT salary
    FROM employees
    WHERE department = 'HR'
);
```

---

# ANY vs ALL

Suppose HR salaries:

```text id="k6m1q9"
35000
40000
```

---

# > ANY

Means:

```text id="p9x4m2"
greater than at least one
```

Equivalent:

```text id="x5m7v1"
> 35000
```

---

# > ALL

Means:

```text id="u2m8q5"
greater than every value
```

Equivalent:

```text id="n7x3m1"
> 40000
```

---

# Subquery in SELECT

Possible.

---

# Example

```sql id="m3q9v7"
SELECT name,
       salary,
       (
           SELECT AVG(salary)
           FROM employees
       ) AS average_salary
FROM employees;
```

---

# Subquery in FROM

Also possible.

---

# Example

```sql id="x6m1q4"
SELECT *
FROM (
    SELECT department,
           AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department
) AS dept_avg;
```

---

# Real-World Examples

---

# E-Commerce

Products priced above average:

```sql id="u5x2m8"
SELECT product_name
FROM products
WHERE price > (
    SELECT AVG(price)
    FROM products
);
```

---

# Banking

Customers with transactions:

```sql id="f4m9q1"
SELECT customer_name
FROM customers c
WHERE EXISTS (
    SELECT 1
    FROM transactions t
    WHERE c.id = t.customer_id
);
```

---

# School System

Students with highest marks:

```sql id="r1x7m5"
SELECT name
FROM students
WHERE marks = (
    SELECT MAX(marks)
    FROM students
);
```

---

# Social Media

Users with more followers than average:

```sql id="k8m2v4"
SELECT username
FROM users
WHERE followers > (
    SELECT AVG(followers)
    FROM users
);
```

---

# Common Mistakes

---

# Subquery Returning Multiple Rows

Wrong:

```sql id="q6x1m9"
WHERE salary = (
    SELECT salary
    FROM employees
)
```

If multiple salaries returned:

```text id="m7v3q2"
error occurs
```

Use:

```text id="u1x5m8"
IN
```

instead.

---

# Forgetting Correlation

Wrong correlated logic can produce:

```text id="x3q7m5"
incorrect results
```

---

# Using NOT IN with NULL

Dangerous.

If subquery contains NULL:

```text id="m6v1q8"
results may become unexpected
```

Prefer:

```text id="u2m9v5"
NOT EXISTS
```

---

# Performance Notes

Subqueries can be:

* slower
* expensive on huge datasets

Sometimes JOINs perform better.

Especially:

```text id="f8x3m1"
correlated subqueries
```

---

# Important Interview Questions

## Difference between JOIN and Subquery?

| JOIN            | Subquery     |
| --------------- | ------------ |
| Combines tables | Nested query |

---

## What is correlated subquery?

Inner query depends on outer query.

---

## Difference between EXISTS and IN?

EXISTS checks:

```text id="x5m7q2"
row existence
```

IN checks:

```text id="m1v9q4"
value matching
```

---

## Which executes first?

Answer:

```text id="u6m2v7"
inner query
```

usually.

---

# Best Practices

---

# Use EXISTS for Existence Checks

Efficient for large datasets.

---

# Avoid Deeply Nested Queries

Hard to debug and optimize.

---

# Use JOINs When Appropriate

Often cleaner and faster.

---

# Be Careful with NULL in NOT IN

Prefer:

```sql id="r4m8x1"
NOT EXISTS
```

---
---
# 14. Set Operations

Set operations combine results from multiple SELECT queries.

Similar to:

```text id="m1x8q4"
mathematical set operations
```

---

# Main Set Operations

1. UNION
2. UNION ALL
3. INTERSECT
4. EXCEPT / MINUS

---

# Important Rules

For set operations:

* Number of columns must match
* Datatypes should be compatible
* Column order should match

---

# Example Tables

## students_2025

| name    |
| ------- |
| Krishna |
| Ram     |
| Sita    |

---

# students_2026

| name  |
| ----- |
| Ram   |
| Arjun |
| Sita  |

---

# UNION

Combines results and removes duplicates.

---

# Syntax

```sql id="u5m2v7"
SELECT column
FROM table1

UNION

SELECT column
FROM table2;
```

---

# Example

```sql id="q8m4x1"
SELECT name
FROM students_2025

UNION

SELECT name
FROM students_2026;
```

---

# Output

| name    |
| ------- |
| Krishna |
| Ram     |
| Sita    |
| Arjun   |

---

# Duplicate Handling

`Ram` and `Sita` appear once only.

Because:

```text id="r9m4v2"
UNION removes duplicates
```

---

# UNION ALL

Combines results:

```text id="k6m1x8"
without removing duplicates
```

---

# Example

```sql id="x2m7q5"
SELECT name
FROM students_2025

UNION ALL

SELECT name
FROM students_2026;
```

---

# Output

| name    |
| ------- |
| Krishna |
| Ram     |
| Sita    |
| Ram     |
| Arjun   |
| Sita    |

---

# Difference: UNION vs UNION ALL

| UNION              | UNION ALL        |
| ------------------ | ---------------- |
| Removes duplicates | Keeps duplicates |
| Slower             | Faster           |

---

# Why UNION Slower

Because database must:

```text id="p4m1v7"
check duplicates
```

---

# INTERSECT

Returns:

```text id="u7m3q2"
common rows
```

between queries.

---

# Example

```sql id="v9x1m4"
SELECT name
FROM students_2025

INTERSECT

SELECT name
FROM students_2026;
```

---

# Output

| name |
| ---- |
| Ram  |
| Sita |

---

# Important Note

Some databases like:

* MySQL

traditionally had limited support for:

```text id="k6m2v8"
INTERSECT
```

depending on version.

---

# EXCEPT / MINUS

Returns rows from:

```text id="n1m7q5"
first query only
```

excluding matches from second query.

---

# Example

```sql id="f8x2m4"
SELECT name
FROM students_2025

EXCEPT

SELECT name
FROM students_2026;
```

---

# Output

| name    |
| ------- |
| Krishna |

---

# Oracle Uses MINUS

Some databases use:

```text id="r5m9q1"
MINUS
```

instead of:

```text id="u3x7m8"
EXCEPT
```

---

# UNION with Multiple Columns

Example Tables:

## employees_current

| name    | department |
| ------- | ---------- |
| Krishna | IT         |
| Ram     | HR         |

---

## employees_old

| name | department |
| ---- | ---------- |
| Sita | IT         |
| Ram  | HR         |

---

# Query

```sql id="m6q2v4"
SELECT name, department
FROM employees_current

UNION

SELECT name, department
FROM employees_old;
```

---

# Duplicate Check Happens On

```text id="x1m8q7"
entire row combination
```

---

# ORDER BY with UNION

ORDER BY applied:

```text id="p7m4x2"
at end
```

---

# Example

```sql id="k2x8m5"
SELECT name
FROM students_2025

UNION

SELECT name
FROM students_2026

ORDER BY name;
```

---

# LIMIT with UNION

Possible:

```sql id="v5m1q9"
SELECT name
FROM students_2025

UNION

SELECT name
FROM students_2026

LIMIT 3;
```

---

# Using Aliases

Column names usually taken from:

```text id="q3m7x1"
first query
```

Example:

```sql id="u8m2v6"
SELECT name AS student_name
FROM students_2025

UNION

SELECT name
FROM students_2026;
```

---

# Real-World Examples

---

# E-Commerce

Combine current + archived orders:

```sql id="f1m9q4"
SELECT order_id
FROM current_orders

UNION

SELECT order_id
FROM archived_orders;
```

---

# Banking

Transactions from two branches:

```sql id="x7m3v2"
SELECT customer_id
FROM branch_a

UNION ALL

SELECT customer_id
FROM branch_b;
```

---

# Social Media

Active + deleted users:

```sql id="m4q8x1"
SELECT username
FROM active_users

UNION

SELECT username
FROM deleted_users;
```

---

# College System

Students in both sports and music:

```sql id="u1m5v7"
SELECT student_id
FROM sports_team

INTERSECT

SELECT student_id
FROM music_club;
```

---

# Common Mistakes

---

# Different Column Counts

Wrong:

```sql id="r8x2m4"
SELECT id, name
FROM students

UNION

SELECT id
FROM teachers;
```

Error occurs.

---

# Datatype Mismatch

Wrong:

```sql id="k6m1q9"
SELECT name
FROM students

UNION

SELECT salary
FROM employees;
```

Text vs number mismatch.

---

# Forgetting UNION Removes Duplicates

Sometimes users expect duplicates.

Use:

```text id="p9x4m2"
UNION ALL
```

instead.

---

# ORDER BY in Middle

Wrong:

```sql id="x5m7v1"
SELECT ...
ORDER BY ...

UNION

SELECT ...
```

ORDER BY should usually be:

```text id="u2m8q5"
at end
```

---

# Performance Notes

---

# UNION ALL Faster

Because:

```text id="n7x3m1"
no duplicate checking
```

---

# UNION Uses Sorting/Hashing

Duplicate removal costs performance.

---

# INTERSECT and EXCEPT

Can be expensive on huge datasets.

Indexes help significantly.

---

# Important Interview Questions

## Difference between UNION and UNION ALL?

| UNION              | UNION ALL        |
| ------------------ | ---------------- |
| Removes duplicates | Keeps duplicates |

---

## Which is faster?

Answer:

```text id="m3q9v7"
UNION ALL
```

---

## Why column count must match?

Because results must form:

```text id="x6m1q4"
single combined table
```

---

## Does UNION sort data automatically?

Not guaranteed.

Use:

```sql id="u5x2m8"
ORDER BY
```

explicitly.

---

# Best Practices

---

## Use UNION ALL When Duplicates Allowed

Better performance.

---

## Keep Column Order Consistent

Readable and safer.

---

## Use ORDER BY at End

Correct structure:

```sql id="f4m9q1"
query1
UNION
query2
ORDER BY column;
```

---

# Avoid Mixing Unrelated Datatypes

Maintain clean query structure.

---
---
# 15. Views

A View is:

```text id="m1x8q4"
virtual table created from a query
```

It does NOT usually store actual data separately.

Instead:

```text id="u5m2v7"
stores SQL query
```

---

# Why Views Used

Views help:

* simplify complex queries
* improve security
* hide sensitive columns
* reuse logic
* create abstraction layer

---

# Basic Syntax

```sql id="q8m4x1"
CREATE VIEW view_name AS
SELECT ...
FROM ...;
```

---

# Example Table

## employees

| id | name    | department | salary |
| -- | ------- | ---------- | ------ |
| 1  | Krishna | IT         | 50000  |
| 2  | Ram     | HR         | 40000  |
| 3  | Sita    | IT         | 60000  |

---

# Create Simple View

```sql id="r9m4v2"
CREATE VIEW employee_basic_info AS
SELECT id, name, department
FROM employees;
```

---

# Using View

```sql id="k6m1x8"
SELECT *
FROM employee_basic_info;
```

Output behaves like:

```text id="x2m7q5"
normal table
```

---

# Important Concept

View stores:

```text id="p4m1v7"
query definition
```

NOT duplicate data.

---

# Real Table vs View

| Table            | View                  |
| ---------------- | --------------------- |
| Stores data      | Stores query          |
| Physical storage | Virtual               |
| Actual rows      | Generated dynamically |

---

# Complex Query Simplification

Without View:

```sql id="u7m3q2"
SELECT department,
       AVG(salary)
FROM employees
GROUP BY department
HAVING AVG(salary) > 45000;
```

Create View:

```sql id="v9x1m4"
CREATE VIEW high_salary_departments AS
SELECT department,
       AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 45000;
```

Now:

```sql id="k6m2v8"
SELECT *
FROM high_salary_departments;
```

Much cleaner.

---

# Updating Views

Some views are:

```text id="n1m7q5"
updatable
```

---

# Example

```sql id="f8x2m4"
CREATE VIEW employee_names AS
SELECT id, name
FROM employees;
```

Update through view:

```sql id="r5m9q1"
UPDATE employee_names
SET name = 'Krishna Kumar'
WHERE id = 1;
```

Actual table also updates.

---

# Why?

Because:

```text id="u3x7m8"
view connected to original table
```

---

# Non-Updatable Views

Views with:

* GROUP BY
* DISTINCT
* aggregate functions
* joins sometimes

may not be updatable.

Example:

```sql id="m6q2v4"
CREATE VIEW dept_salary AS
SELECT department,
       AVG(salary)
FROM employees
GROUP BY department;
```

Cannot directly update:

```text id="x1m8q7"
AVG(salary)
```

---

# CREATE OR REPLACE VIEW

Modify existing view.

```sql id="p7m4x2"
CREATE OR REPLACE VIEW employee_basic_info AS
SELECT id, name
FROM employees;
```

---

# DROP VIEW

Delete view definition.

```sql id="k2x8m5"
DROP VIEW employee_basic_info;
```

Original table remains safe.

---

# View with WHERE

```sql id="v5m1q9"
CREATE VIEW it_employees AS
SELECT *
FROM employees
WHERE department = 'IT';
```

---

# Using View

```sql id="q3m7x1"
SELECT *
FROM it_employees;
```

---

# Security Advantage

Suppose table contains:

| id | name | salary |
| -- | ---- | ------ |

Employees should NOT see:

```text id="u8m2v6"
salary
```

Create view:

```sql id="f1m9q4"
CREATE VIEW public_employee_info AS
SELECT id, name
FROM employees;
```

Users access:

```text id="x7m3v2"
view only
```

---

# View with JOIN

Very common.

---

# Example Tables

## students

| id | name    |
| -- | ------- |
| 1  | Krishna |

## marks

| student_id | marks |
| ---------- | ----- |
| 1          | 95    |

---

# Create View

```sql id="m4q8x1"
CREATE VIEW student_results AS
SELECT s.name,
       m.marks
FROM students s
JOIN marks m
ON s.id = m.student_id;
```

---

# Query View

```sql id="u1m5v7"
SELECT *
FROM student_results;
```

---

# Materialized View (Concept)

Normal view:

```text id="r8x2m4"
query executes every time
```

Materialized view:

```text id="k6m1q9"
stores actual result physically
```

Faster for huge reports.

Supported in some databases like:

* PostgreSQL
* Oracle Database

---

# Advantages of Views

---

1. Simplicity

Hide complex joins and queries.

---

2. Security

Hide sensitive columns.

---

3. Reusability

Write complex query once.

---

4. Abstraction

Applications use views instead of raw tables.

---

5. Consistency

Same business logic reused everywhere.

---

# Disadvantages of Views

---

1. Performance Overhead

Complex views can be slow.

---

2. Nested Views

View inside view:

```text id="p9x4m2"
hard to debug
```

---

3. Some Views Not Updatable

Especially:

* GROUP BY
* aggregates
* DISTINCT

---

# Real-World Examples

---

# Banking

Hide account balances:

```sql id="x5m7v1"
CREATE VIEW customer_info AS
SELECT customer_id, name
FROM customers;
```

---

# HR System

Department reports:

```sql id="u2m8q5"
CREATE VIEW department_summary AS
SELECT department,
       COUNT(*) AS total_employees
FROM employees
GROUP BY department;
```

---

# E-Commerce

Active products only:

```sql id="n7x3m1"
CREATE VIEW active_products AS
SELECT *
FROM products
WHERE is_active = 1;
```

---

# School System

Student report cards:

```sql id="m3q9v7"
CREATE VIEW report_cards AS
SELECT s.name,
       sub.subject_name,
       m.marks
FROM students s
JOIN marks m
ON s.id = m.student_id
JOIN subjects sub
ON sub.id = m.subject_id;
```

---

# Common Mistakes

---

# Thinking Views Store Data

Normal views:

```text id="x6m1q4"
do not store data separately
```

---

# Overusing Complex Views

Can create:

```text id="u5x2m8"
slow queries
```

---

# Updating Non-Updatable Views

Will produce errors.

---

# Forgetting View Depends on Table

If base table changes:

```text id="f4m9q1"
view behavior may break
```

---

# Performance Notes

Simple views:

```text id="r1x7m5"
usually optimized well
```

Complex nested views:

* expensive
* difficult to optimize

Indexes on underlying tables still matter.

---

# Important Interview Questions

## What is a View?

Virtual table based on query.

---

## Does View store data?

Normal view:

```text id="k8m2v4"
No
```

Materialized view:

```text id="q6x1m9"
Yes
```

---

## Why Views Used?

* security
* simplicity
* abstraction

---

## Can Views be updated?

Some can, some cannot.

---

## Difference between Table and View?

| Table       | View         |
| ----------- | ------------ |
| Stores data | Stores query |

---

# Best Practices

---

## Use Views for Repeated Queries

Avoid rewriting complex logic.

---

## Use Views for Security

Expose only needed columns.

---

## Avoid Deeply Nested Views

Hard to maintain.

---

## Name Views Clearly

Good:

```text
active_users
monthly_sales_report
```

Bad:

```text id="u1x5m8"
view1
tempview
```

---
---
# 16. Indexes

Indexes are used to:

```text id="m1x8q4"
speed up data retrieval
```

They improve performance of:

* SELECT
* WHERE
* JOIN
* ORDER BY

Especially on:

```text id="u5m2v7"
large tables
```

---

# Real-Life Analogy

Without index:

```text id="q8m4x1"
reading entire book page by page
```

With index:

```text id="r9m4v2"
using book index directly
```

Much faster.

---

# Problem Without Index

Suppose table has:

```text id="k6m1x8"
10 million rows
```

Query:

```sql id="x2m7q5"
SELECT *
FROM users
WHERE email = 'a@gmail.com';
```

Without index:

```text id="p4m1v7"
database scans every row
```

Called:

```text id="u7m3q2"
Full Table Scan
```

Slow.

---

# With Index

Database can directly locate rows.

Much faster.

---

# Basic Syntax

```sql id="v9x1m4"
CREATE INDEX index_name
ON table_name(column_name);
```

---

# Example

```sql id="k6m2v8"
CREATE INDEX idx_email
ON users(email);
```

Now:

```sql id="n1m7q5"
SELECT *
FROM users
WHERE email = 'a@gmail.com';
```

becomes much faster.

---

# How Index Works Internally

Most databases use:

```text id="f8x2m4"
B-Tree structure
```

Allows fast searching.

Similar to:

```text id="r5m9q1"
binary search
```

---

# CREATE INDEX Example

## employees

| id | name    | department |
| -- | ------- | ---------- |
| 1  | Krishna | IT         |
| 2  | Ram     | HR         |

Create:

```sql id="u3x7m8"
CREATE INDEX idx_department
ON employees(department);
```

Queries filtering:

```text id="m6q2v4"
department
```

become faster.

---

# UNIQUE INDEX

Prevents duplicate values.

---

# Syntax

```sql id="x1m8q7"
CREATE UNIQUE INDEX index_name
ON table_name(column_name);
```

---

# Example

```sql id="p7m4x2"
CREATE UNIQUE INDEX idx_email
ON users(email);
```

Now duplicate emails not allowed.

---

# Composite Index

Index on multiple columns.

---

# Syntax

```sql id="k2x8m5"
CREATE INDEX index_name
ON table_name(column1, column2);
```

---

# Example

```sql id="v5m1q9"
CREATE INDEX idx_city_age
ON students(city, age);
```

Optimizes:

```sql id="q3m7x1"
WHERE city = 'Bangalore'
AND age = 21
```

---

# Important Order Concept

Index:

```sql id="u8m2v6"
(city, age)
```

Works efficiently for:

```sql id="f1m9q4"
city
city + age
```

Not very efficient for:

```sql id="x7m3v2"
age only
```

---

# Primary Key Automatically Indexed

Example:

```sql id="m4q8x1"
id INT PRIMARY KEY
```

Database automatically creates index.

---

# Foreign Keys Often Indexed

Improves:

* JOIN performance
* relationship queries

---

# DROP INDEX

Remove index.

Syntax varies by database.

Example in MySQL:

```sql id="u1m5v7"
DROP INDEX idx_email
ON users;
```

---

# SHOW INDEXES

MySQL:

```sql id="r8x2m4"
SHOW INDEXES
FROM users;
```

---

# Clustered Index

Determines:

```text id="k6m1q9"
physical storage order
```

Usually:

```text id="p9x4m2"
PRIMARY KEY
```

---

# Non-Clustered Index

Separate structure pointing to actual rows.

Most created indexes are:

```text id="x5m7v1"
non-clustered
```

---

# Clustered vs Non-Clustered

| Clustered               | Non-Clustered            |
| ----------------------- | ------------------------ |
| Data physically ordered | Separate index structure |
| Usually one per table   | Multiple possible        |

---

# Queries Benefiting from Indexes

---

# WHERE

```sql id="u2m8q5"
SELECT *
FROM users
WHERE email = 'a@gmail.com';
```

---

# ORDER BY

```sql id="n7x3m1"
SELECT *
FROM employees
ORDER BY salary;
```

---

# JOIN

```sql id="m3q9v7"
SELECT *
FROM orders o
JOIN customers c
ON o.customer_id = c.id;
```

---

# GROUP BY

```sql id="x6m1q4"
SELECT department,
       COUNT(*)
FROM employees
GROUP BY department;
```

---

# Queries NOT Benefiting Much

---

# Small Tables

Indexes unnecessary sometimes.

---

# Frequent INSERT/UPDATE/DELETE

Indexes slow modifications because:

```text id="u5x2m8"
index must also update
```

---

# Leading Wildcards

Bad:

```sql id="f4m9q1"
WHERE name LIKE '%krishna'
```

Index usually not useful.

Better:

```sql id="r1x7m5"
WHERE name LIKE 'krishna%'
```

---

# Too Many Indexes Problem

Indexes improve reading:

```text id="k8m2v4"
but slow writing
```

because every INSERT/UPDATE must maintain indexes.

---

# Example Performance Scenario

Without index:

```text id="q6x1m9"
10 seconds
```

With index:

```text id="m7v3q2"
0.01 seconds
```

Huge difference on large datasets.

---

# EXPLAIN Query

Used to see:

```text id="u1x5m8"
how database executes query
```

Example:

```sql id="x3q7m5"
EXPLAIN
SELECT *
FROM users
WHERE email = 'a@gmail.com';
```

Shows:

* index usage
* scans
* join methods

Very important in optimization.

---

# Real-World Examples

---

# Login System

Index on:

```text id="m6v1q8"
email
```

---

# Banking

Index on:

```text id="u2m9v5"
account_number
```

---

# E-Commerce

Indexes on:

* product_id
* category
* price

---

# Social Media

Indexes on:

* username
* created_at
* user_id

---

# Attendance System

Indexes on:

* student_id
* date

---

# Common Mistakes

---

# Creating Too Many Indexes

Can hurt performance.

---

# Indexing Low-Cardinality Columns

Example:

```text id="f8x3m1"
gender
TRUE/FALSE
```

Poor index usefulness.

---

# Forgetting Composite Index Order

Order matters greatly.

---

# Assuming Index Always Used

Database optimizer decides.

---

# Indexing Tiny Tables

Usually unnecessary.

---

# Performance Notes

Indexes improve:

```text id="x5m7q2"
read speed
```

but reduce:

```text id="m1v9q4"
write speed
```

Tradeoff important.

---

# Important Interview Questions

## What is an Index?

Data structure improving query speed.

---

## Why Indexes Faster?

Avoid full table scans.

---

## Difference between Clustered and Non-Clustered?

| Clustered      | Non-Clustered      |
| -------------- | ------------------ |
| Physical order | Separate structure |

---

## Can too many indexes hurt?

Answer:

```text id="u6m2v7"
Yes
```

---

## Which queries benefit most?

* WHERE
* JOIN
* ORDER BY
* GROUP BY

---

# Best Practices

---

# Index Frequently Searched Columns

Examples:

* email
* id
* foreign keys

---

# Avoid Over-Indexing

Balance read/write performance.

---

# Use Composite Indexes Carefully

Order matters.

---

# Use EXPLAIN for Optimization

Critical in real projects.

---
---
# 17. Transactions (TCL)

Transaction means:

```text id="m1x8q4"
group of SQL operations executed as one unit
```

Either:

```text id="u5m2v7"
all succeed
```

OR

```text id="q8m4x1"
all fail
```

---

# Why Transactions Important

Critical in:

* banking
* payments
* e-commerce
* ticket booking

To avoid:

```text id="r9m4v2"
inconsistent data
```

---

# Real-World Example

Bank Transfer:

```text id="k6m1x8"
A sends ₹1000 to B
```

Steps:

1. deduct from A
2. add to B

If system crashes after step 1:

```text id="x2m7q5"
money lost
```

Transactions prevent this.

---

# Transaction Commands (TCL)

1. START TRANSACTION
2. COMMIT
3. ROLLBACK
4. SAVEPOINT

---

# Example Table

## accounts

| id | name    | balance |
| -- | ------- | ------- |
| 1  | Krishna | 10000   |
| 2  | Ram     | 5000    |

---

# START TRANSACTION

Begins transaction.

```sql id="p4m1v7"
START TRANSACTION;
```

---

# Example Transfer

```sql id="u7m3q2"
START TRANSACTION;

UPDATE accounts
SET balance = balance - 1000
WHERE id = 1;

UPDATE accounts
SET balance = balance + 1000
WHERE id = 2;
```

At this point:

```text id="v9x1m4"
changes temporary
```

---

# COMMIT

Permanently saves changes.

```sql id="k6m2v8"
COMMIT;
```

Now:

```text id="n1m7q5"
transaction completed
```

---

# ROLLBACK

Undo changes since transaction started.

---

# Example

```sql id="f8x2m4"
START TRANSACTION;

UPDATE accounts
SET balance = balance - 1000
WHERE id = 1;

ROLLBACK;
```

Balance returns to original value.

---

# Why ROLLBACK Important

Protects against:

* crashes
* errors
* invalid operations
* failed validations

---

# SAVEPOINT

Creates checkpoint inside transaction.

---

# Example

```sql id="r5m9q1"
START TRANSACTION;

UPDATE accounts
SET balance = balance - 1000
WHERE id = 1;

SAVEPOINT after_deduction;

UPDATE accounts
SET balance = balance + 1000
WHERE id = 2;
```

---

# Rollback to Savepoint

```sql id="u3x7m8"
ROLLBACK TO after_deduction;
```

Only second update undone.

First update remains.

---

# Full Example

```sql id="m6q2v4"
START TRANSACTION;

UPDATE products
SET stock = stock - 1
WHERE id = 10;

SAVEPOINT stock_updated;

INSERT INTO orders(user_id, product_id)
VALUES(1, 10);

COMMIT;
```

---

# ACID Properties (Very Important)

Transactions follow:

```text id="x1m8q7"
ACID
```

---

# A → Atomicity

```text id="p7m4x2"
all or nothing
```

If one operation fails:

```text id="k2x8m5"
entire transaction fails
```

---

# C → Consistency

Database remains:

```text id="v5m1q9"
valid and consistent
```

Rules always maintained.

---

# I → Isolation

Transactions should not interfere with each other.

---

# D → Durability

After COMMIT:

```text id="q3m7x1"
data permanently saved
```

Even after crash/power failure.

---

# Atomicity Example

Transfer:

```text id="u8m2v6"
deduct + add
```

Both must happen together.

---

# Consistency Example

Bank balance should never become:

```text id="f1m9q4"
invalid
```

Constraints maintained.

---

# Isolation Example

Two users booking same seat:

```text id="x7m3v2"
should not conflict
```

---

# Durability Example

After successful payment:

```text id="m4q8x1"
transaction survives restart
```

---

# Auto Commit

Many databases use:

```text id="u1m5v7"
AUTO COMMIT mode
```

Meaning:
every query automatically committed.

---

# Example

```sql id="r8x2m4"
UPDATE users
SET age = 21
WHERE id = 1;
```

Immediately saved.

---

# Disable Auto Commit

MySQL:

```sql id="k6m1q9"
SET autocommit = 0;
```

---

# Transaction Isolation Levels

Controls:

```text id="p9x4m2"
how transactions interact
```

---

# Main Isolation Levels

1. READ UNCOMMITTED
2. READ COMMITTED
3. REPEATABLE READ
4. SERIALIZABLE

---

# 1. READ UNCOMMITTED

Can read:

```text id="x5m7v1"
uncommitted changes
```

May cause:

```text id="u2m8q5"
dirty reads
```

Fast but unsafe.

---

# 2. READ COMMITTED

Reads only:

```text id="n7x3m1"
committed data
```

Most common level.

---

# 3. REPEATABLE READ

Same query returns:

```text id="m3q9v7"
same result inside transaction
```

---

# 4. SERIALIZABLE

Highest isolation.

Transactions behave:

```text id="x6m1q4"
one by one
```

Safest but slowest.

---

# Concurrency Problems

---

# Dirty Read

Reading uncommitted data.

---

# Non-Repeatable Read

Same query gives different result.

---

# Phantom Read

New rows appear during transaction.

---

# Example: Dirty Read

Transaction A:

```sql id="u5x2m8"
UPDATE accounts
SET balance = 0
WHERE id = 1;
```

Not committed yet.

Transaction B reads:

```text id="f4m9q1"
temporary value
```

If rollback occurs:

```text id="r1x7m5"
B read invalid data
```

---

# Real-World Examples

---

# Banking

Money transfers.

---

# E-Commerce

Order placement:

* reduce stock
* create order
* process payment

All inside transaction.

---

# Ticket Booking

Prevent double booking.

---

# Payroll System

Salary processing.

---

# Inventory Management

Maintain stock consistency.

---

# Common Mistakes

---

# Forgetting COMMIT

Changes remain:

```text id="k8m2v4"
uncommitted
```

May disappear.

---

# Long Transactions

Locks resources too long.

Can reduce performance.

---

# Missing Transactions

Dangerous in:

* banking
* payments
* stock systems

---

# Using Wrong Isolation Level

Can create:

* dirty reads
* locking issues

---

# Performance Notes

Higher isolation:

```text id="q6x1m9"
safer but slower
```

Tradeoff important.

---

# Locks

Transactions may lock:

* rows
* tables

Prevent conflicting updates.

---

# Example

```sql id="m7v3q2"
UPDATE accounts
SET balance = balance - 1000
WHERE id = 1;
```

Other transactions may wait.

---

# Important Interview Questions

## What is transaction?

Group of operations executed together.

---

## What are ACID properties?

Atomicity, Consistency, Isolation, Durability.

---

## Difference between COMMIT and ROLLBACK?

| COMMIT       | ROLLBACK     |
| ------------ | ------------ |
| Save changes | Undo changes |

---

## What is SAVEPOINT?

Checkpoint inside transaction.

---

## What is dirty read?

Reading uncommitted data.

---

## Which isolation level safest?

```text id="u1x5m8"
SERIALIZABLE
```

---

# Best Practices

---

# Use Transactions for Critical Operations

Especially:

* payments
* stock updates
* booking systems

---

# Keep Transactions Short

Avoid long locks.

---

# Use Proper Isolation Level

Balance:

* consistency
* performance

---

# Always Handle Errors

Rollback when failure occurs.

---
---
# 18. Stored Procedures & Functions

Stored Procedures and Functions are:

```text id="m1x8q4"
saved SQL programs inside database
```

Used for:

* reusable logic
* automation
* reducing repeated queries
* business rules

---

# Difference Between Procedure and Function

| Procedure                   | Function             |
| --------------------------- | -------------------- |
| Performs operations         | Returns value        |
| Can return multiple results | Returns single value |
| Called using CALL           | Used inside queries  |

---

# Stored Procedure

A stored procedure is:

```text id="u5m2v7"
precompiled SQL code stored in database
```

---

# Why Procedures Used

* reusable
* centralized logic
* faster execution sometimes
* improves security
* reduces application code

---

# Basic Procedure Syntax

Example in:

* MySQL

```sql id="q8m4x1"
DELIMITER //

CREATE PROCEDURE procedure_name()
BEGIN

    SQL statements;

END //

DELIMITER ;
```

---

# Why DELIMITER Used

Normally SQL ends at:

```text id="r9m4v2"
;
```

But procedures contain multiple semicolons.

So we temporarily change delimiter.

---

# Simple Procedure Example

```sql id="k6m1x8"
DELIMITER //

CREATE PROCEDURE getEmployees()
BEGIN

    SELECT *
    FROM employees;

END //

DELIMITER ;
```

---

# Calling Procedure

```sql id="x2m7q5"
CALL getEmployees();
```

---

# Procedure with Parameters

Parameters allow dynamic values.

---

# IN Parameter

Input parameter.

```sql id="p4m1v7"
DELIMITER //

CREATE PROCEDURE getEmployeeById(
    IN empId INT
)
BEGIN

    SELECT *
    FROM employees
    WHERE id = empId;

END //

DELIMITER ;
```

---

# Call Procedure

```sql id="u7m3q2"
CALL getEmployeeById(1);
```

---

# Multiple Parameters

```sql id="v9x1m4"
DELIMITER //

CREATE PROCEDURE getEmployeesByDept(
    IN deptName VARCHAR(50),
    IN minSalary DECIMAL(10,2)
)
BEGIN

    SELECT *
    FROM employees
    WHERE department = deptName
    AND salary >= minSalary;

END //

DELIMITER ;
```

---

# OUT Parameter

Used to return value.

---

# Example

```sql id="k6m2v8"
DELIMITER //

CREATE PROCEDURE getEmployeeCount(
    OUT total INT
)
BEGIN

    SELECT COUNT(*)
    INTO total
    FROM employees;

END //

DELIMITER ;
```

---

# Call OUT Procedure

```sql id="n1m7q5"
CALL getEmployeeCount(@total);

SELECT @total;
```

---

# INOUT Parameter

Acts as:

* input
* output

---

# Example

```sql id="f8x2m4"
DELIMITER //

CREATE PROCEDURE increaseValue(
    INOUT num INT
)
BEGIN

    SET num = num + 10;

END //

DELIMITER ;
```

---

# Call

```sql id="r5m9q1"
SET @x = 5;

CALL increaseValue(@x);

SELECT @x;
```

Result:

```text id="u3x7m8"
15
```

---

# Variables in Procedures

---

# Local Variable

```sql id="m6q2v4"
DECLARE totalSalary DECIMAL(10,2);
```

---

# Example

```sql id="x1m8q7"
DELIMITER //

CREATE PROCEDURE salaryStats()
BEGIN

    DECLARE avgSalary DECIMAL(10,2);

    SELECT AVG(salary)
    INTO avgSalary
    FROM employees;

    SELECT avgSalary;

END //

DELIMITER ;
```

---

# IF ELSE in Procedures

```sql id="p7m4x2"
DELIMITER //

CREATE PROCEDURE checkSalary(
    IN sal DECIMAL(10,2)
)
BEGIN

    IF sal > 50000 THEN
        SELECT 'High Salary';

    ELSE
        SELECT 'Low Salary';

    END IF;

END //

DELIMITER ;
```

---

# Loops in Procedures

---

# WHILE Loop

```sql id="k2x8m5"
DELIMITER //

CREATE PROCEDURE printNumbers()
BEGIN

    DECLARE i INT DEFAULT 1;

    WHILE i <= 5 DO

        SELECT i;

        SET i = i + 1;

    END WHILE;

END //

DELIMITER ;
```

---

# CASE Statement

```sql id="v5m1q9"
CASE
    WHEN salary > 50000 THEN 'High'
    ELSE 'Low'
END
```

---

# Stored Functions

Functions:

```text id="q3m7x1"
must return value
```

---

# Basic Syntax

```sql id="u8m2v6"
DELIMITER //

CREATE FUNCTION function_name(parameters)
RETURNS datatype
DETERMINISTIC

BEGIN

    RETURN value;

END //

DELIMITER ;
```

---

# Simple Function Example

```sql id="f1m9q4"
DELIMITER //

CREATE FUNCTION squareNumber(x INT)
RETURNS INT
DETERMINISTIC

BEGIN

    RETURN x * x;

END //

DELIMITER ;
```

---

# Using Function

```sql id="x7m3v2"
SELECT squareNumber(5);
```

Output:

```text id="m4q8x1"
25
```

---

# Function with Query

```sql id="u1m5v7"
DELIMITER //

CREATE FUNCTION getTotalEmployees()
RETURNS INT
DETERMINISTIC

BEGIN

    DECLARE total INT;

    SELECT COUNT(*)
    INTO total
    FROM employees;

    RETURN total;

END //

DELIMITER ;
```

---

# Call Function

```sql id="r8x2m4"
SELECT getTotalEmployees();
```

---

# Deterministic vs Non-Deterministic

---

# DETERMINISTIC

Same input:

```text id="k6m1q9"
same output
```

Example:

```text id="p9x4m2"
squareNumber(5) → always 25
```

---

# NON-DETERMINISTIC

Output may change.

Example:

```sql id="x5m7v1"
NOW()
RAND()
```

---

# Difference: Procedure vs Function

| Procedure              | Function                    |
| ---------------------- | --------------------------- |
| CALL procedure()       | SELECT function()           |
| May return many values | Returns one value           |
| Can modify data        | Usually calculation-focused |

---

# Real-World Examples

---

# Banking

Procedure:

```text id="u2m8q5"
transfer_money()
```

---

# E-Commerce

Function:

```text id="n7x3m1"
calculate_discount()
```

---

# Payroll

Procedure:

```text id="m3q9v7"
generate_salary()
```

---

# School System

Function:

```text id="x6m1q4"
calculate_grade()
```

---

# Attendance System

Procedure:

```text id="u5x2m8"
mark_attendance()
```

---

# Common Mistakes

---

# Forgetting DELIMITER

Causes syntax errors.

---

# Missing RETURN in Function

Invalid function.

---

# Infinite Loops

Wrong:

```sql id="f4m9q1"
WHILE TRUE DO
```

without exit condition.

---

# Confusing Procedure and Function

Functions:

```text id="r1x7m5"
must return value
```

---

# Performance Notes

Procedures reduce:

* network traffic
* repeated SQL parsing

Good for:

```text id="k8m2v4"
complex business logic
```

---

# Security Advantage

Applications can execute:

```text id="q6x1m9"
procedure only
```

without direct table access.

---

# Important Interview Questions

## Difference between Procedure and Function?

## Why DELIMITER used?

## What are IN, OUT, INOUT parameters?

## Can function modify tables?

Depends on database rules.

---

## What is DETERMINISTIC?

Same input gives same output.

---

# Best Practices

---

# Keep Procedures Focused

Single responsibility.

---

# Avoid Huge Complex Procedures

Hard to debug.

---

# Use Functions for Calculations

Use procedures for workflows.

---

# Name Clearly

Good:

```text id="m7v3q2"
calculateSalary
getEmployeeById
```

Bad:

```text id="u1x5m8"
proc1
func2
```

---
---
# 19. Triggers

A Trigger is:

```text id="m1x8q4"
automatic SQL code executed when an event happens
```

Events:

* INSERT
* UPDATE
* DELETE

---

# Real-Life Analogy

Think:

```text id="u5m2v7"
motion sensor light
```

When motion occurs:

```text id="q8m4x1"
light automatically turns ON
```

Similarly:

```text id="r9m4v2"
database event → trigger executes automatically
```

---

# Why Triggers Used

Used for:

* audit logging
* validation
* automatic updates
* maintaining history
* enforcing business rules

---

# Trigger Events

1. INSERT
2. UPDATE
3. DELETE

---

# Trigger Timing

1. BEFORE
2. AFTER

---

# Types of Triggers

| Type          | Runs                 |
| ------------- | -------------------- |
| BEFORE INSERT | Before inserting row |
| AFTER INSERT  | After insert         |
| BEFORE UPDATE | Before update        |
| AFTER UPDATE  | After update         |
| BEFORE DELETE | Before delete        |
| AFTER DELETE  | After delete         |

---

# Basic Syntax

Example in:

* MySQL

```sql id="k6m1x8"
DELIMITER //

CREATE TRIGGER trigger_name
BEFORE INSERT
ON table_name
FOR EACH ROW

BEGIN

    SQL statements;

END //

DELIMITER ;
```

---

# Important Keywords

---

# FOR EACH ROW

Trigger executes:

```text id="x2m7q5"
for every affected row
```

---

# NEW Keyword

Access:

```text id="p4m1v7"
new values
```

during INSERT/UPDATE.

---

# OLD Keyword

Access:

```text id="u7m3q2"
old values
```

during UPDATE/DELETE.

---

# BEFORE INSERT Trigger

Example Table:

## employees

| id | name | salary |
| -- | ---- | ------ |

---

# Trigger Example

Automatically increase salary before insert.

```sql id="v9x1m4"
DELIMITER //

CREATE TRIGGER before_employee_insert
BEFORE INSERT
ON employees
FOR EACH ROW

BEGIN

    SET NEW.salary = NEW.salary + 1000;

END //

DELIMITER ;
```

---

# Insert Data

```sql id="k6m2v8"
INSERT INTO employees(name, salary)
VALUES('Krishna', 50000);
```

Stored value:

```text id="n1m7q5"
51000
```

---

# AFTER INSERT Trigger

Used after successful insertion.

---

# Example Audit Table

## employee_logs

| id | message |
| -- | ------- |

---

# Trigger

```sql id="f8x2m4"
DELIMITER //

CREATE TRIGGER after_employee_insert
AFTER INSERT
ON employees
FOR EACH ROW

BEGIN

    INSERT INTO employee_logs(message)
    VALUES(CONCAT('Employee added: ', NEW.name));

END //

DELIMITER ;
```

---

# Result

When employee inserted:

```text id="r5m9q1"
log automatically created
```

---

# BEFORE UPDATE Trigger

Used before updating rows.

---

# Example

Prevent negative salary.

```sql id="u3x7m8"
DELIMITER //

CREATE TRIGGER before_salary_update
BEFORE UPDATE
ON employees
FOR EACH ROW

BEGIN

    IF NEW.salary < 0 THEN
        SET NEW.salary = 0;
    END IF;

END //

DELIMITER ;
```

---

# AFTER UPDATE Trigger

Used for:

* audit logs
* history tracking
* notifications

---

# Example

```sql id="m6q2v4"
DELIMITER //

CREATE TRIGGER after_salary_update
AFTER UPDATE
ON employees
FOR EACH ROW

BEGIN

    INSERT INTO employee_logs(message)
    VALUES(
        CONCAT(
            OLD.name,
            ' salary changed from ',
            OLD.salary,
            ' to ',
            NEW.salary
        )
    );

END //

DELIMITER ;
```

---

# OLD vs NEW

| Keyword | Meaning           |
| ------- | ----------------- |
| OLD     | Previous value    |
| NEW     | Updated/new value |

---

# Example

Before update:

```text id="x1m8q7"
salary = 50000
```

After update:

```text id="p7m4x2"
salary = 60000
```

Inside trigger:

```text id="k2x8m5"
OLD.salary → 50000
NEW.salary → 60000
```

---

# BEFORE DELETE Trigger

Runs before deleting row.

---

# Example

Backup deleted records.

```sql id="v5m1q9"
DELIMITER //

CREATE TRIGGER before_employee_delete
BEFORE DELETE
ON employees
FOR EACH ROW

BEGIN

    INSERT INTO deleted_employees(id, name)
    VALUES(OLD.id, OLD.name);

END //

DELIMITER ;
```

---

# AFTER DELETE Trigger

Runs after deletion completed.

---

# Example

```sql id="q3m7x1"
DELIMITER //

CREATE TRIGGER after_employee_delete
AFTER DELETE
ON employees
FOR EACH ROW

BEGIN

    INSERT INTO employee_logs(message)
    VALUES(CONCAT('Deleted employee: ', OLD.name));

END //

DELIMITER ;
```

---

# Real-World Examples

---

# Banking

Log all transactions automatically.

---

# E-Commerce

Reduce inventory after order insert.

---

# Social Media

Track user activity.

---

# HR System

Maintain salary history.

---

# Attendance System

Auto-update attendance percentage.

---

# Trigger with Validation

Example:

```sql id="u8m2v6"
IF NEW.age < 18 THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Age must be >= 18';
END IF;
```

Rejects invalid insert.

---

# DROP Trigger

Delete trigger.

```sql id="f1m9q4"
DROP TRIGGER trigger_name;
```

---

# SHOW Triggers

MySQL:

```sql id="x7m3v2"
SHOW TRIGGERS;
```

---

# Trigger Execution Order

Example:

```text id="m4q8x1"
BEFORE INSERT
→ actual INSERT
→ AFTER INSERT
```

---

# Trigger Recursion Problem

Trigger causing another trigger repeatedly.

Can create:

```text id="u1m5v7"
infinite loop
```

Need careful design.

---

# Performance Notes

Triggers execute automatically:

```text id="r8x2m4"
every time event occurs
```

Too many triggers can:

* slow writes
* complicate debugging

---

# Advantages of Triggers

---

# 1. Automation

Automatic actions.

---

# 2. Data Integrity

Enforce rules centrally.

---

# 3. Auditing

Track changes automatically.

---

# 4. Security

Prevent invalid operations.

---

# Disadvantages of Triggers

---

# 1. Hidden Logic

Hard to debug sometimes.

---

# 2. Performance Cost

Extra operations on every event.

---

# 3. Complex Maintenance

Many triggers become difficult to manage.

---

# Common Mistakes

---

# Infinite Trigger Loops

Triggers updating same table repeatedly.

---

# Heavy Logic Inside Trigger

Can slow application badly.

---

# Forgetting OLD/NEW Context

DELETE:

```text id="k6m1q9"
only OLD exists
```

INSERT:

```text id="p9x4m2"
only NEW exists
```

---

# Important Interview Questions

## What is Trigger?

Automatic SQL execution on database event.

---

## Difference between BEFORE and AFTER trigger?

| BEFORE            | AFTER            |
| ----------------- | ---------------- |
| Runs before event | Runs after event |

---

## Difference between OLD and NEW?

| OLD | Previous value    |
| --- | ----------------- |
| NEW | Updated/new value |

---

## Why triggers used?

* auditing
* validation
* automation

---

## Can triggers affect performance?

Answer:

```text id="x5m7v1"
Yes
```

---

# Best Practices

---

# Keep Triggers Small

Avoid huge business logic.

---

# Use for Auditing & Validation

Best use cases.

---

# Avoid Too Many Triggers

Can create hidden complexity.

---

# Document Trigger Behavior

Important in teams/projects.

---
---
# 20. Window Functions (Advanced SQL)

Window Functions perform calculations across:

```text id="m1x8q4"
related rows
```

WITHOUT:

```text id="u5m2v7"
collapsing rows
```

This is the biggest difference from:

```text id="q8m4x1"
GROUP BY
```

---

# Why Window Functions Important

Used in:

* rankings
* leaderboards
* analytics
* reporting
* dashboards
* salary comparisons
* running totals

Very important in:

* interviews
* data analytics
* real-world SQL

---

# GROUP BY vs Window Function

---

# GROUP BY

Collapses rows.

Example:

```sql id="r9m4v2"
SELECT department,
       AVG(salary)
FROM employees
GROUP BY department;
```

Output:

```text id="k6m1x8"
one row per department
```

---

# Window Function

Keeps original rows.

Example:

```sql id="x2m7q5"
SELECT name,
       department,
       salary,
       AVG(salary) OVER(PARTITION BY department)
FROM employees;
```

Every employee row remains visible.

---

# OVER() Clause

Window functions require:

```text id="p4m1v7"
OVER()
```

This defines:

```text id="u7m3q2"
window of rows
```

---

# Example Table

## employees

| id | name    | department | salary |
| -- | ------- | ---------- | ------ |
| 1  | Krishna | IT         | 50000  |
| 2  | Ram     | HR         | 40000  |
| 3  | Sita    | IT         | 60000  |
| 4  | Arjun   | HR         | 35000  |
| 5  | Ravi    | IT         | 70000  |

---

# ROW_NUMBER()

Assigns:

```text id="v9x1m4"
unique sequential number
```

---

# Example

```sql id="k6m2v8"
SELECT name,
       salary,
       ROW_NUMBER() OVER(
           ORDER BY salary DESC
       ) AS row_num
FROM employees;
```

---

# Output

| name    | salary | row_num |
| ------- | ------ | ------- |
| Ravi    | 70000  | 1       |
| Sita    | 60000  | 2       |
| Krishna | 50000  | 3       |
| Ram     | 40000  | 4       |
| Arjun   | 35000  | 5       |

---

# Ranking Functions

1. ROW_NUMBER()
2. RANK()
3. DENSE_RANK()

---

# Difference Between Them

Suppose salaries:

| salary |
| ------ |
| 100    |
| 100    |
| 90     |

---

# ROW_NUMBER()

```text id="n1m7q5"
1
2
3
```

Always unique.

---

# RANK()

```text id="f8x2m4"
1
1
3
```

Skips numbers after tie.

---

# DENSE_RANK()

```text id="r5m9q1"
1
1
2
```

No skipped numbers.

---

# RANK() Example

```sql id="u3x7m8"
SELECT name,
       salary,
       RANK() OVER(
           ORDER BY salary DESC
       ) AS salary_rank
FROM employees;
```

---

# DENSE_RANK() Example

```sql id="m6q2v4"
SELECT name,
       salary,
       DENSE_RANK() OVER(
           ORDER BY salary DESC
       ) AS dense_rank
FROM employees;
```

---

# PARTITION BY

Very important.

Creates:

```text id="x1m8q7"
separate groups/windows
```

WITHOUT collapsing rows.

---

# Example

```sql id="p7m4x2"
SELECT name,
       department,
       salary,
       AVG(salary) OVER(
           PARTITION BY department
       ) AS dept_avg
FROM employees;
```

---

# Output

| name    | department | salary | dept_avg |
| ------- | ---------- | ------ | -------- |
| Krishna | IT         | 50000  | 60000    |
| Sita    | IT         | 60000  | 60000    |
| Ravi    | IT         | 70000  | 60000    |
| Ram     | HR         | 40000  | 37500    |
| Arjun   | HR         | 35000  | 37500    |

---

# Important Difference

GROUP BY:

```text id="k2x8m5"
reduces rows
```

PARTITION BY:

```text id="v5m1q9"
keeps rows
```

---

# Running Total

Very common in analytics.

---

# Example

```sql id="q3m7x1"
SELECT name,
       salary,
       SUM(salary) OVER(
           ORDER BY id
       ) AS running_total
FROM employees;
```

---

# Example Result

| id | salary | running_total |
| -- | ------ | ------------- |
| 1  | 50000  | 50000         |
| 2  | 40000  | 90000         |
| 3  | 60000  | 150000        |

---

# Moving Average

```sql id="u8m2v6"
SELECT id,
       salary,
       AVG(salary) OVER(
           ORDER BY id
       ) AS moving_avg
FROM employees;
```

---

# FIRST_VALUE()

Returns:

```text id="f1m9q4"
first value in window
```

---

# Example

```sql id="x7m3v2"
SELECT name,
       salary,
       FIRST_VALUE(name) OVER(
           ORDER BY salary DESC
       ) AS highest_paid
FROM employees;
```

---

# LAST_VALUE()

Returns:

```text id="m4q8x1"
last value in window
```

---

# LEAD()

Access next row.

---

# Example

```sql id="u1m5v7"
SELECT name,
       salary,
       LEAD(salary) OVER(
           ORDER BY salary
       ) AS next_salary
FROM employees;
```

---

# LAG()

Access previous row.

---

# Example

```sql id="r8x2m4"
SELECT name,
       salary,
       LAG(salary) OVER(
           ORDER BY salary
       ) AS previous_salary
FROM employees;
```

---

# NTILE()

Divides rows into groups.

---

# Example

```sql id="k6m1q9"
SELECT name,
       salary,
       NTILE(4) OVER(
           ORDER BY salary
       ) AS quartile
FROM employees;
```

---

# Window Frame Concept

Controls:

```text id="p9x4m2"
which rows included in calculation
```

---

# Example

```sql id="x5m7v1"
ROWS BETWEEN
UNBOUNDED PRECEDING
AND CURRENT ROW
```

Used in:

* cumulative sums
* moving averages

---

# Combining PARTITION + ORDER

Very common.

```sql id="u2m8q5"
SELECT name,
       department,
       salary,
       ROW_NUMBER() OVER(
           PARTITION BY department
           ORDER BY salary DESC
       ) AS dept_rank
FROM employees;
```

---

# Result

Separate ranking:

```text id="n7x3m1"
inside each department
```

---

# Real-World Examples

---

# Leaderboard

```sql id="m3q9v7"
SELECT player_name,
       score,
       RANK() OVER(
           ORDER BY score DESC
       ) AS rank
FROM players;
```

---

# Sales Analytics

Running revenue:

```sql id="x6m1q4"
SELECT order_date,
       amount,
       SUM(amount) OVER(
           ORDER BY order_date
       ) AS cumulative_sales
FROM orders;
```

---

# Employee Comparison

Compare with department average:

```sql id="u5x2m8"
SELECT name,
       salary,
       AVG(salary) OVER(
           PARTITION BY department
       ) AS dept_avg
FROM employees;
```

---

# Banking

Previous transaction balance:

```sql id="f4m9q1"
SELECT transaction_id,
       amount,
       LAG(amount) OVER(
           ORDER BY transaction_date
       ) AS previous_amount
FROM transactions;
```

---

# Common Mistakes

---

# Confusing GROUP BY and PARTITION BY

GROUP BY:

```text id="r1x7m5"
collapses rows
```

PARTITION BY:

```text id="k8m2v4"
does not collapse rows
```

---

# Forgetting ORDER BY in Ranking

Without ORDER BY:

```text id="q6x1m9"
ranking meaningless
```

---

# Using Wrong Ranking Function

Need gaps?
Use:

```text id="m7v3q2"
RANK()
```

No gaps?
Use:

```text id="u1x5m8"
DENSE_RANK()
```

---

# Performance Notes

Window functions can be:

* memory intensive
* sorting heavy

Indexes on:

* partition columns
* order columns

can help.

---

# Important Interview Questions

## Difference between RANK and DENSE_RANK?

| RANK          | DENSE_RANK |
| ------------- | ---------- |
| Skips numbers | No skips   |

---

## Difference between GROUP BY and PARTITION BY?

| GROUP BY       | PARTITION BY |
| -------------- | ------------ |
| Collapses rows | Keeps rows   |

---

## What does OVER() do?

Defines calculation window.

---

## What is ROW_NUMBER()?

Sequential numbering.

---

## What is running total?

Cumulative calculation over rows.

---

# Best Practices

---

# Always Use ORDER BY in Ranking

Required for meaningful ranking.

---

# Use PARTITION BY Carefully

Defines logical groups.

---

# Prefer Window Functions Over Complex Subqueries

Often cleaner and faster.

---

# Choose Correct Ranking Function

Depends on tie handling.

---
---
# 21. CTEs (Common Table Expressions)

CTE stands for:

```text id="m1x8q4"
Common Table Expression
```

CTE is:

```text id="u5m2v7"
temporary named result set
```

used inside a query.

---

# Why CTEs Used

CTEs help:

* improve readability
* simplify complex queries
* break queries into steps
* replace nested subqueries
* support recursion

---

# Basic Syntax

```sql id="q8m4x1"
WITH cte_name AS (

    query

)

SELECT *
FROM cte_name;
```

---

# Example Table

## employees

| id | name    | department | salary |
| -- | ------- | ---------- | ------ |
| 1  | Krishna | IT         | 50000  |
| 2  | Ram     | HR         | 40000  |
| 3  | Sita    | IT         | 60000  |
| 4  | Ravi    | HR         | 35000  |

---

# Simple CTE Example

```sql id="r9m4v2"
WITH high_salary_employees AS (

    SELECT *
    FROM employees
    WHERE salary > 45000

)

SELECT *
FROM high_salary_employees;
```

---

# Result

| name    | salary |
| ------- | ------ |
| Krishna | 50000  |
| Sita    | 60000  |

---

# Why Better Than Subquery

Without CTE:

```sql id="k6m1x8"
SELECT *
FROM (
    SELECT *
    FROM employees
    WHERE salary > 45000
) AS temp;
```

CTE:

```text id="x2m7q5"
more readable
```

---

# Multiple CTEs

Possible.

---

# Example

```sql id="p4m1v7"
WITH

it_employees AS (

    SELECT *
    FROM employees
    WHERE department = 'IT'

),

high_salary AS (

    SELECT *
    FROM employees
    WHERE salary > 45000

)

SELECT *
FROM it_employees;
```

---

# CTE with Aggregation

```sql id="u7m3q2"
WITH dept_avg AS (

    SELECT department,
           AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department

)

SELECT *
FROM dept_avg;
```

---

# CTE with JOIN

```sql id="v9x1m4"
WITH dept_salary AS (

    SELECT department,
           AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department

)

SELECT e.name,
       e.salary,
       d.avg_salary
FROM employees e
JOIN dept_salary d
ON e.department = d.department;
```

---

# Recursive CTE (Very Important)

Recursive CTE:

```text id="k6m2v8"
references itself
```

Used for:

* hierarchical data
* trees
* organization structure
* category systems

---

# Basic Recursive Syntax

```sql id="n1m7q5"
WITH RECURSIVE cte_name AS (

    anchor_query

    UNION ALL

    recursive_query

)

SELECT *
FROM cte_name;
```

---

# Recursive CTE Structure

Two parts:

1. Anchor Query

```text id="f8x2m4"
starting rows
```

2. Recursive Query

```text id="r5m9q1"
repeated logic
```

---

# Example: Generate Numbers

```sql id="u3x7m8"
WITH RECURSIVE numbers AS (

    SELECT 1 AS num

    UNION ALL

    SELECT num + 1
    FROM numbers
    WHERE num < 5

)

SELECT *
FROM numbers;
```

---

# Output

| num |
| --- |
| 1   |
| 2   |
| 3   |
| 4   |
| 5   |

---

# How Recursive Query Works

---

# Step 1

Anchor:

```text id="m6q2v4"
1
```

---

# Step 2

Recursive:

```text id="x1m8q7"
1 + 1 = 2
```

---

# Step 3

Again:

```text id="p7m4x2"
2 + 1 = 3
```

Continues until:

```text id="k2x8m5"
condition fails
```

---

# Hierarchical Data Example

## employees

| id | name    | manager_id |
| -- | ------- | ---------- |
| 1  | Krishna | NULL       |
| 2  | Ram     | 1          |
| 3  | Sita    | 1          |
| 4  | Arjun   | 2          |

---

# Recursive CTE

```sql id="v5m1q9"
WITH RECURSIVE employee_hierarchy AS (

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
    JOIN employee_hierarchy eh
    ON e.manager_id = eh.id

)

SELECT *
FROM employee_hierarchy;
```

---

# Purpose

Gets:

```text id="q3m7x1"
entire organization hierarchy
```

---

# CTE vs View

| CTE                  | View         |
| -------------------- | ------------ |
| Temporary            | Permanent    |
| Exists for one query | Stored in DB |

---

# CTE vs Subquery

| CTE                   | Subquery         |
| --------------------- | ---------------- |
| More readable         | Can become messy |
| Reusable inside query | Repeated logic   |

---

# CTE with Window Functions

Very common.

---

# Example

```sql id="u8m2v6"
WITH ranked_employees AS (

    SELECT name,
           salary,
           RANK() OVER(
               ORDER BY salary DESC
           ) AS salary_rank
    FROM employees

)

SELECT *
FROM ranked_employees
WHERE salary_rank <= 3;
```

---

# Real-World Examples

---

# E-Commerce

Top-selling products.

---

# Banking

Transaction hierarchy.

---

# HR System

Employee reporting structure.

---

# Social Media

Comment reply chains.

---

# File Systems

Folder/subfolder hierarchy.

---

# Category Tree Example

Electronics

```text id="f1m9q4"
→ Mobile
→ Laptop
```

Recursive CTE can traverse:

```text id="x7m3v2"
entire tree
```

---

# Common Mistakes

---

# Infinite Recursion

Wrong:

```sql id="m4q8x1"
recursive query without stop condition
```

Can crash query.

---

# Forgetting UNION ALL

Recursive CTE usually needs:

```text id="u1m5v7"
UNION ALL
```

---

# Complex Recursive Logic

Hard to debug.

---

# Performance Issues

Recursive CTEs can become expensive on:

```text id="r8x2m4"
deep hierarchies
```

---

# Performance Notes

CTEs may:

* improve readability
* not always improve performance

Depends on optimizer/database.

Recursive CTEs:

```text id="k6m1q9"
can be costly
```

---

# Important Interview Questions

## What is CTE?

Temporary named query result.

---

## Difference between CTE and View?

| CTE       | View      |
| --------- | --------- |
| Temporary | Permanent |

---

## What is Recursive CTE?

CTE referencing itself.

---

## Why use CTEs?

* readability
* modular queries
* recursion

---

## What are anchor and recursive parts?

| Part      | Purpose         |
| --------- | --------------- |
| Anchor    | Starting rows   |
| Recursive | Repeating logic |

---

# Best Practices

---

# Use CTEs for Readability

Especially for complex queries.

---

# Keep Recursive Queries Safe

Always include:

```text id="p9x4m2"
termination condition
```

---

# Avoid Over-Nesting

Too many CTEs reduce clarity.

---

# Use Meaningful Names

Good:

```text id="x5m7v1"
high_salary_employees
department_stats
```

Bad:

```text id="u2m8q5"
cte1
tempdata
```

---
---