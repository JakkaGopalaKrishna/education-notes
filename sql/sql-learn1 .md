# SQL Topics Roadmap

## 1. Introduction to SQL

* What is SQL?
* DBMS vs RDBMS
* Database, Table, Row, Column
* Primary Key, Foreign Key
* SQL Commands Types

  * DDL
  * DML
  * DQL
  * DCL
  * TCL

---

# 2. Database & Table Operations (DDL)

## Create Database

```sql
CREATE DATABASE company;
```

## Use Database

```sql
USE company;
```

## Create Table

```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    salary DECIMAL(10,2)
);
```

## Alter Table

```sql
ALTER TABLE employees ADD email VARCHAR(100);
```

## Rename Table

```sql
RENAME TABLE employees TO staff;
```

## Drop Table

```sql
DROP TABLE staff;
```

## Truncate Table

```sql
TRUNCATE TABLE staff;
```

---

# 3. Data Types

## Numeric

* INT
* BIGINT
* FLOAT
* DOUBLE
* DECIMAL

## String

* CHAR
* VARCHAR
* TEXT

## Date & Time

* DATE
* TIME
* DATETIME
* TIMESTAMP

## Boolean

* BOOLEAN

---

# 4. Constraints

* PRIMARY KEY
* FOREIGN KEY
* UNIQUE
* NOT NULL
* DEFAULT
* CHECK
* AUTO_INCREMENT

Example:

```sql
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INT CHECK(age >= 18)
);
```

---

# 5. Insert Data

```sql
INSERT INTO students(name, email, age)
VALUES ('Krishna', 'k@gmail.com', 21);
```

## Insert Multiple Rows

```sql
INSERT INTO students(name, age)
VALUES
('A',20),
('B',22),
('C',25);
```

---

# 6. Select Query (DQL)

## Select All

```sql
SELECT * FROM students;
```

## Select Specific Columns

```sql
SELECT name, age FROM students;
```

## DISTINCT

```sql
SELECT DISTINCT age FROM students;
```

## Alias

```sql
SELECT name AS student_name FROM students;
```

---

# 7. WHERE Clause

```sql
SELECT * FROM students
WHERE age > 20;
```

## Operators

* =
* !=
* .>
* <
* .> =
* <=

## Logical Operators

* AND
* OR
* NOT

Example:

```sql
SELECT * FROM students
WHERE age > 20 AND city = 'Bangalore';
```

---

# 8. Sorting

## ORDER BY

```sql
SELECT * FROM students
ORDER BY age DESC;
```

* ASC
* DESC

---

# 9. LIMIT

```sql
SELECT * FROM students
LIMIT 5;
```

---

# 10. Pattern Matching

## LIKE

```sql
SELECT * FROM students
WHERE name LIKE 'K%';
```

Patterns:

* `%` → multiple chars
* `_` → single char

---

# 11. NULL Handling

```sql
SELECT * FROM students
WHERE email IS NULL;
```

```sql
SELECT * FROM students
WHERE email IS NOT NULL;
```

---

# 12. UPDATE

```sql
UPDATE students
SET age = 23
WHERE id = 1;
```

---

# 13. DELETE

```sql
DELETE FROM students
WHERE id = 1;
```

---

# 14. Aggregate Functions

* COUNT()
* SUM()
* AVG()
* MAX()
* MIN()

Example:

```sql
SELECT AVG(salary) FROM employees;
```

---

# 15. GROUP BY

```sql
SELECT department, COUNT(*)
FROM employees
GROUP BY department;
```

---

# 16. HAVING

```sql
SELECT department, AVG(salary)
FROM employees
GROUP BY department
HAVING AVG(salary) > 50000;
```

---

# 17. Joins

## INNER JOIN

```sql
SELECT e.name, d.dept_name
FROM employees e
INNER JOIN departments d
ON e.dept_id = d.id;
```

## LEFT JOIN

## RIGHT JOIN

## FULL JOIN

## SELF JOIN

## CROSS JOIN

---

# 18. Keys

* Primary Key
* Foreign Key
* Composite Key
* Candidate Key
* Super Key

---

# 19. Subqueries

```sql
SELECT name
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);
```

---

# 20. Views

```sql
CREATE VIEW high_salary AS
SELECT * FROM employees
WHERE salary > 50000;
```

---

# 21. Indexes

```sql
CREATE INDEX idx_name
ON employees(name);
```

---

# 22. Stored Procedures

```sql
DELIMITER //

CREATE PROCEDURE getEmployees()
BEGIN
    SELECT * FROM employees;
END //

DELIMITER ;
```

Call:

```sql
CALL getEmployees();
```

---

# 23. Functions

```sql
CREATE FUNCTION squareNum(x INT)
RETURNS INT
DETERMINISTIC
BEGIN
    RETURN x * x;
END;
```

---

# 24. Triggers

```sql
CREATE TRIGGER before_insert
BEFORE INSERT ON employees
FOR EACH ROW
SET NEW.salary = NEW.salary + 1000;
```

---

# 25. Transactions (TCL)

* COMMIT
* ROLLBACK
* SAVEPOINT

Example:

```sql
START TRANSACTION;

UPDATE accounts
SET balance = balance - 1000
WHERE id = 1;

UPDATE accounts
SET balance = balance + 1000
WHERE id = 2;

COMMIT;
```

---

# 26. User Permissions (DCL)

## GRANT

```sql
GRANT SELECT ON company.* TO 'user1';
```

## REVOKE

```sql
REVOKE SELECT ON company.* FROM 'user1';
```

---

# 27. Normalization

* 1NF
* 2NF
* 3NF
* BCNF

---

# 28. Advanced SQL

* CTE (WITH)
* Recursive CTE
* Window Functions
* ROW_NUMBER()
* RANK()
* DENSE_RANK()
* PARTITION BY
* CASE Statement
* UNION / UNION ALL
* EXISTS
* ANY / ALL

Example:

```sql
SELECT name,
ROW_NUMBER() OVER(ORDER BY salary DESC) AS rank_num
FROM employees;
```

---

# 29. SQL Optimization

* Indexing
* Query Optimization
* Explain Plan
* Avoid SELECT *
* Proper Joins

---

# 30. Real-World Practice Topics

* Employee Management System
* Banking System
* E-commerce Database
* IPL Dataset Queries
* Library Management
* Hospital Management

---

# Best Order to Learn

1. Basics + SELECT
2. WHERE + Operators
3. INSERT UPDATE DELETE
4. Aggregate Functions
5. GROUP BY + HAVING
6. Joins
7. Subqueries
8. Constraints & Keys
9. Views & Indexes
10. Procedures & Triggers
11. Transactions
12. Advanced SQL

---

# Important SQL Interview Topics

* Joins
* GROUP BY vs HAVING
* DELETE vs DROP vs TRUNCATE
* Primary Key vs Unique Key
* Normalization
* Subqueries
* Window Functions
* Indexes
* Transactions
* ACID Properties

---

# Practice Websites

* [LeetCode SQL](https://leetcode.com/problemset/database/?utm_source=chatgpt.com)
* [HackerRank SQL](https://www.hackerrank.com/domains/sql?utm_source=chatgpt.com)
* [SQLBolt](https://sqlbolt.com/?utm_source=chatgpt.com)
* [W3Schools SQL](https://www.w3schools.com/sql/?utm_source=chatgpt.com)
