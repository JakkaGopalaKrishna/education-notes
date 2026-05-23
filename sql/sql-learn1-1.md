# 1. Introduction to SQL

## What is SQL?

SQL stands for:

> **Structured Query Language**

It is used to:

* Store data
* Retrieve data
* Update data
* Delete data
* Manage databases

SQL works with **Relational Databases**.

Examples:

* MySQL
* PostgreSQL
* Oracle Database
* SQLite

---

# Real Life Example

Think about:

* Instagram users
* Bank accounts
* Student records
* Amazon orders

All this data is stored in databases using SQL.

---

# Database Terminology

## 1. Database

A database is a collection of related data.

Example:

```text
College Database
```

Inside it:

* students table
* teachers table
* marks table

---

# 2. Table

A table stores data in rows and columns.

Example:

| id | name    | age |
| -- | ------- | --- |
| 1  | Krishna | 21  |
| 2  | Ram     | 22  |

Table Name:

```text
students
```

---

# 3. Row (Record)

Each horizontal entry is called a row.

Example:

```text
1 | Krishna | 21
```

One student's complete data.

---

# 4. Column (Field)

Each vertical part is a column.

Example:

* id
* name
* age

Each column stores one type of information.

---

# 5. Primary Key

A column that uniquely identifies each row.

Example:

```text
id
```

Why?
Because:

* No duplicates
* No NULL values

Example:

```text
1 → Krishna
2 → Ram
```

Two students cannot have same ID.

---

# 6. Foreign Key

A column that connects two tables.

Example:

## students table

| id | name    |
| -- | ------- |
| 1  | Krishna |

## marks table

| mark_id | student_id | marks |
| ------- | ---------- | ----- |
| 1       | 1          | 95    |

Here:

```text
student_id
```

is a Foreign Key.

It connects:

```text
marks → students
```

---

# DBMS vs RDBMS

| DBMS                 | RDBMS                  |
| -------------------- | ---------------------- |
| Stores data          | Stores relational data |
| No relationships     | Supports relationships |
| Less secure          | More secure            |
| Example: File system | Example: MySQL         |

---

# Types of SQL Commands

SQL commands are divided into 5 categories.

---

# 1. DDL (Data Definition Language)

Used to define database structure.

Commands:

* CREATE
* ALTER
* DROP
* TRUNCATE

Example:

```sql id="w8drdh"
CREATE TABLE students(
    id INT,
    name VARCHAR(50)
);
```

---

# 2. DML (Data Manipulation Language)

Used to manipulate data.

Commands:

* INSERT
* UPDATE
* DELETE

Example:

```sql id="dcbw4v"
INSERT INTO students
VALUES(1, 'Krishna');
```

---

# 3. DQL (Data Query Language)

Used to fetch data.

Command:

* SELECT

Example:

```sql id="0xqz4d"
SELECT * FROM students;
```

---

# 4. TCL (Transaction Control Language)

Used for transactions.

Commands:

* COMMIT
* ROLLBACK
* SAVEPOINT

---

# 5. DCL (Data Control Language)

Used for permissions.

Commands:

* GRANT
* REVOKE

---

# First SQL Program

## Step 1: Create Database

```sql id="n5z7nk"
CREATE DATABASE college;
```

---

## Step 2: Use Database

```sql id="1v5e0j"
USE college;
```

---

## Step 3: Create Table

```sql id="w1m0yb"
CREATE TABLE students(
    id INT,
    name VARCHAR(50),
    age INT
);
```

---

## Step 4: Insert Data

```sql id="4l5aqg"
INSERT INTO students
VALUES(1, 'Krishna', 21);
```

---

## Step 5: View Data

```sql id="3on7mz"
SELECT * FROM students;
```

Output:

| id | name    | age |
| -- | ------- | --- |
| 1  | Krishna | 21  |

---

# Important Notes

## SQL is NOT Case Sensitive

These are same:

```sql id="vbjlwm"
SELECT * FROM students;
```

```sql id="8fpxk9"
select * from students;
```

But best practice:

* SQL keywords → UPPERCASE
* Table/column names → lowercase

---

# Semicolon (;)

Semicolon means:

```text
statement ended
```

Example:

```sql id="5mbmyl"
SELECT * FROM students;
```

---

# Comments in SQL

## Single Line

```sql id="0gn9fc"
-- this is comment
SELECT * FROM students;
```

## Multi Line

```sql id="8g5wzx"
/*
multi line
comment
*/
SELECT * FROM students;
```

---
---
# 2. Data Types in SQL

Data Types define:

> What kind of data a column can store.

Example:

* age → numbers
* name → text
* salary → decimal values
* joining_date → date

---

# Why Data Types Are Important

They help:

* save memory
* improve performance
* validate data
* avoid errors

Example:

```sql id="k4m7v8"
age INT
```

Only numbers can be stored.

---

# Categories of Data Types

1. Numeric Data Types
2. String Data Types
3. Date & Time Data Types
4. Boolean Data Types

---

# 1. Numeric Data Types

Used for numbers.

---

# INT

Stores whole numbers.

Example:

```sql id="q4uw4u"
age INT
```

Allowed:

```text id="1j4b2o"
10
25
100
```

Not Allowed:

```text id="2af74s"
10.5
abc
```

Example Table:

```sql id="7ltq2e"
CREATE TABLE students(
    id INT,
    age INT
);
```

---

# BIGINT

Used for very large numbers.

Example:

```sql id="mn0ib5"
phone BIGINT
```

Used for:

* phone numbers
* large IDs

---

# DECIMAL

Stores exact decimal values.

Syntax:

```sql id="zbhjv0"
DECIMAL(total_digits, digits_after_decimal)
```

Example:

```sql id="rjlwm9"
salary DECIMAL(10,2)
```

Meaning:

* total 10 digits
* 2 digits after decimal

Allowed:

```text id="im5g8o"
25000.75
99999999.99
```

Best for:

* money
* banking systems

---

# FLOAT / DOUBLE

Stores approximate decimal values.

Example:

```sql id="f8m32n"
height FLOAT
```

Used for:

* scientific values
* measurements

Not preferred for money calculations.

---

# Difference: DECIMAL vs FLOAT

| DECIMAL        | FLOAT                 |
| -------------- | --------------------- |
| Exact value    | Approximate value     |
| Good for money | Good for measurements |
| Slower         | Faster                |

Example:

```text id="ibce1k"
DECIMAL → 99.99 exact
FLOAT → 99.989999
```

---

# 2. String Data Types

Used for text.

---

# CHAR

Fixed-length string.

Example:

```sql id="7xgcvl"
gender CHAR(1)
```

Stores:

```text id="9p0lbz"
M
F
```

If size is 5:

```sql id="o5e0wa"
CHAR(5)
```

Value:

```text id="5yzy34"
Hi
```

Stored internally as:

```text id="c0zqfx"
Hi___
```

(extra spaces added)

---

# VARCHAR

Variable-length string.

Example:

```sql id="jlwmf0"
name VARCHAR(50)
```

Stores only required memory.

If:

```text id="1mxm7d"
Krishna
```

Only needed space is used.

---

# Difference: CHAR vs VARCHAR

| CHAR                | VARCHAR               |
| ------------------- | --------------------- |
| Fixed size          | Variable size         |
| Faster              | Flexible              |
| Wastes memory       | Saves memory          |
| Good for fixed data | Good for dynamic data |

---

# Real-World Usage

| Data         | Type         |
| ------------ | ------------ |
| Gender       | CHAR(1)      |
| Name         | VARCHAR(100) |
| Email        | VARCHAR(255) |
| Country Code | CHAR(3)      |

---

# TEXT

Used for large text.

Example:

```sql id="g6uxvc"
description TEXT
```

Used for:

* blog content
* comments
* long descriptions

---

# 3. Date & Time Data Types

---

# DATE

Stores only date.

Format:

```text id="w2ecgx"
YYYY-MM-DD
```

Example:

```sql id="5ykm93"
dob DATE
```

Value:

```text id="nyo9j5"
2003-07-10
```

---

# TIME

Stores only time.

Example:

```sql id="b5vt5t"
start_time TIME
```

Value:

```text id="y68e1m"
10:30:00
```

---

# DATETIME

Stores date + time.

Example:

```sql id="0wt0wl"
created_at DATETIME
```

Value:

```text id="o1v2dr"
2026-05-09 10:30:00
```

---

# TIMESTAMP

Also stores date + time.

Special feature:

* automatically updates time

Mostly used for:

* created_at
* updated_at

Example:

```sql id="br6g1k"
updated_at TIMESTAMP
```

---

# Difference: DATETIME vs TIMESTAMP

| DATETIME           | TIMESTAMP          |
| ------------------ | ------------------ |
| Stores given value | Can auto-update    |
| Larger range       | Smaller range      |
| Manual handling    | Automatic handling |

---

# 4. BOOLEAN

Stores:

```text id="t6cc8o"
TRUE / FALSE
```

Example:

```sql id="m7qf6e"
is_active BOOLEAN
```

Internally:

```text id="mw17ql"
TRUE  → 1
FALSE → 0
```

---

# Example Full Table

```sql id="6x7rjj"
CREATE TABLE employees(
    id INT,
    name VARCHAR(100),
    gender CHAR(1),
    salary DECIMAL(10,2),
    description TEXT,
    joining_date DATE,
    created_at TIMESTAMP,
    is_active BOOLEAN
);
```

---

# How SQL Chooses Memory

Example:

```sql id="0d4i9v"
VARCHAR(50)
```

Does NOT mean:

```text id="m1gjl8"
always 50 chars
```

It means:

```text id="q29g5v"
maximum 50 chars
```

---

# Common Mistakes

## Using INT for phone numbers

Wrong:

```sql id="r3e0m3"
phone INT
```

Better:

```sql id="9x4q2t"
phone VARCHAR(15)
```

Because:

* phone numbers are not used in calculations
* may contain +91

---

## Using FLOAT for salary

Wrong:

```sql id="vz5t3r"
salary FLOAT
```

Better:

```sql id="e2o9cl"
salary DECIMAL(10,2)
```

---

# Best Practices

| Use Case   | Best Type |
| ---------- | --------- |
| ID         | INT       |
| Name       | VARCHAR   |
| Fixed code | CHAR      |
| Money      | DECIMAL   |
| Long text  | TEXT      |
| Date       | DATE      |
| Timestamp  | TIMESTAMP |

---

# Important Interview Questions

* Difference between CHAR and VARCHAR?

* Difference between DATE and DATETIME?

* Why DECIMAL preferred for money?

* Difference between FLOAT and DOUBLE?

* Difference between DATETIME and TIMESTAMP?

---
---

# 3. Constraints in SQL

Constraints are rules applied on columns.

They help:

* maintain data integrity
* avoid invalid data
* enforce rules automatically

Example:

* prevent duplicate IDs
* prevent NULL values
* restrict invalid ages

---

# Types of Constraints

1. PRIMARY KEY
2. FOREIGN KEY
3. UNIQUE
4. NOT NULL
5. DEFAULT
6. CHECK
7. AUTO_INCREMENT

---

# 1. PRIMARY KEY

A Primary Key:

* uniquely identifies each row
* cannot contain NULL
* cannot contain duplicates

Example:

```sql id="ezhvl9"
CREATE TABLE students(
    id INT PRIMARY KEY,
    name VARCHAR(50)
);
```

Valid:

| id | name    |
| -- | ------- |
| 1  | Krishna |
| 2  | Ram     |

Invalid:

| id | name |
| -- | ---- |
| 1  | A    |
| 1  | B    |

Duplicate ID not allowed.

---

# Important Rules

A table can have:

```text id="nd4y9g"
only ONE primary key
```

But that primary key can contain:

* one column
* multiple columns

---

# Composite Primary Key

Using multiple columns together as primary key.

Example:

```sql id="b0fxkx"
CREATE TABLE attendance(
    student_id INT,
    subject_id INT,
    PRIMARY KEY(student_id, subject_id)
);
```

Combination must be unique.

---

# 2. FOREIGN KEY

Used to create relationships between tables.

Example:

## students table

| id | name    |
| -- | ------- |
| 1  | Krishna |
| 2  | Ram     |

## marks table

| mark_id | student_id | marks |
| ------- | ---------- | ----- |
| 1       | 1          | 90    |

Here:

```text id="r0h67r"
student_id
```

references:

```text id="v6y6j5"
students.id
```

---

# Creating Foreign Key

```sql id="jlwmz0"
CREATE TABLE students(
    id INT PRIMARY KEY,
    name VARCHAR(50)
);
```

```sql id="fjyn7t"
CREATE TABLE marks(
    mark_id INT PRIMARY KEY,
    student_id INT,
    marks INT,
    FOREIGN KEY(student_id)
    REFERENCES students(id)
);
```

---

# Why Foreign Keys Matter

Without foreign key:

```text id="k8h3w0"
student_id = 999
```

could exist even if student doesn't exist.

Foreign key prevents invalid references.

---

# Parent Table vs Child Table

| Table    | Role   |
| -------- | ------ |
| students | Parent |
| marks    | Child  |

---

# Foreign Key Rules

Child table value must exist in parent table.

Example:

```text id="w2sctg"
students.id = 1
```

Allowed:

```text id="86d3lu"
student_id = 1
```

Not allowed:

```text id="8s7v0q"
student_id = 100
```

if 100 not present.

---

# 3. UNIQUE Constraint

Ensures all values are unique.

Example:

```sql id="h0f6gq"
CREATE TABLE users(
    id INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE
);
```

Allowed:

```text id="wnzkgw"
a@gmail.com
b@gmail.com
```

Not allowed:

```text id="6c1lmr"
a@gmail.com
a@gmail.com
```

---

# Difference: PRIMARY KEY vs UNIQUE

| PRIMARY KEY        | UNIQUE           |
| ------------------ | ---------------- |
| No NULL allowed    | NULL allowed     |
| Only one per table | Multiple allowed |
| Unique values      | Unique values    |

---

# 4. NOT NULL

Prevents NULL values.

Example:

```sql id="njckya"
CREATE TABLE employees(
    id INT,
    name VARCHAR(50) NOT NULL
);
```

Invalid:

```text id="4a3y9t"
name = NULL
```

---

# NULL vs Empty String

| NULL     | Empty String           |
| -------- | ---------------------- |
| No value | Value exists but empty |

Example:

```text id="8d9h0j"
NULL
''
```

Both are different.

---

# 5. DEFAULT Constraint

Provides default value automatically.

Example:

```sql id="1g8nvc"
CREATE TABLE users(
    id INT,
    country VARCHAR(50) DEFAULT 'India'
);
```

Insert:

```sql id="8jv1ks"
INSERT INTO users(id)
VALUES(1);
```

Result:

| id | country |
| -- | ------- |
| 1  | India   |

---

# 6. CHECK Constraint

Restricts values based on condition.

Example:

```sql id="ez7kqa"
CREATE TABLE students(
    id INT,
    age INT CHECK(age >= 18)
);
```

Allowed:

```text id="8c6eb9"
20
25
```

Not allowed:

```text id="8vwy88"
15
```

---

# Multiple CHECK Conditions

```sql id="xwq8dz"
CHECK(age >= 18 AND age <= 60)
```

---

# 7. AUTO_INCREMENT

Automatically increases numbers.

Mostly used for IDs.

Example:

```sql id="z29xmo"
CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)
);
```

Insert:

```sql id="3y6n2t"
INSERT INTO users(name)
VALUES('Krishna');
```

Result:

| id | name    |
| -- | ------- |
| 1  | Krishna |

Next insert:

| id | name |
| -- | ---- |
| 2  | Ram  |

---

# Why AUTO_INCREMENT Important

Without it:

```text id="g19mq9"
you manually manage IDs
```

With it:

```text id="wl20i4"
database handles automatically
```

---

# Combining Constraints

```sql id="j4z1v2"
CREATE TABLE employees(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INT CHECK(age >= 18),
    country VARCHAR(50) DEFAULT 'India'
);
```

---

# Table-Level Constraints

Constraints can be written separately.

Example:

```sql id="j0ps8x"
CREATE TABLE users(
    id INT,
    email VARCHAR(100),
    CONSTRAINT unique_email UNIQUE(email)
);
```

---

# Constraint Naming

```sql id="nby6s5"
CONSTRAINT unique_email UNIQUE(email)
```

Useful when:

* modifying constraints
* deleting constraints
* debugging

---

# ON DELETE CASCADE

Very important with foreign keys.

Example:

```sql id="8bmmgr"
FOREIGN KEY(student_id)
REFERENCES students(id)
ON DELETE CASCADE
```

Meaning:
If student deleted →
related marks also deleted automatically.

---

# ON UPDATE CASCADE

If parent ID changes →
child table updates automatically.

---

# Example Full Schema

```sql id="0p9pwt"
CREATE TABLE departments(
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50)
);
```

```sql id="pov4o5"
CREATE TABLE employees(
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INT CHECK(age >= 18),
    dept_id INT,
    FOREIGN KEY(dept_id)
    REFERENCES departments(dept_id)
);
```

---

# Important Interview Questions

* Difference between PRIMARY KEY and UNIQUE?

* Can PRIMARY KEY contain NULL?

Answer: No

---

* Can UNIQUE contain NULL?

Answer:
Yes
(depends on database)

---

* Why use FOREIGN KEY?

To maintain: 
referential integrity

---

* Difference between CHECK and NOT NULL?

| CHECK               | NOT NULL           |
| ------------------- | ------------------ |
| Validates condition | Prevents NULL only |

---

# Common Mistakes

## Forgetting WHERE in UPDATE

Dangerous:

```sql id="0dldmd"
UPDATE users
SET age = 25;
```

Updates entire table.

---

## Using email without UNIQUE

Can create duplicate accounts.

---

## Missing Foreign Keys

Leads to invalid data relationships.

---
---
# 4. DDL Commands (Data Definition Language)

DDL commands are used to define and manage database structure.

They work on:

* databases
* tables
* columns
* constraints

---

# Main DDL Commands

1. CREATE
2. ALTER
3. DROP
4. TRUNCATE
5. RENAME
6. DESCRIBE

---

# 1. CREATE DATABASE

Used to create a new database.

Syntax:

```sql id="q4y8e1"
CREATE DATABASE database_name;
```

Example:

```sql id="ob0c8u"
CREATE DATABASE company;
```

---

# USE Database

After creating database:

```sql id="eh8t9m"
USE company;
```

Now all operations happen inside:

```text id="7lx1ls"
company
```

---

# CREATE TABLE

Used to create tables.

Syntax:

```sql id="1x6f6m"
CREATE TABLE table_name(
    column_name datatype constraints
);
```

Example:

```sql id="vfh6ei"
CREATE TABLE employees(
    id INT PRIMARY KEY,
    name VARCHAR(100),
    salary DECIMAL(10,2)
);
```

---

# Understanding Table Design

Example:

```sql id="8u66x6"
CREATE TABLE employees(
    id INT,
    name VARCHAR(100),
    email VARCHAR(100),
    age INT,
    salary DECIMAL(10,2),
    joining_date DATE
);
```

---

# Column-by-Column Breakdown

## id INT

Employee ID number.

## name VARCHAR(100)

Employee name.

## email VARCHAR(100)

Employee email.

## age INT

Employee age.

## salary DECIMAL(10,2)

Exact money values.

## joining_date DATE

Stores joining date.

---

# Best Practices in CREATE TABLE

---

# Use Meaningful Names

Good:

```text id="u3dn9x"
employees
student_marks
customer_orders
```

Bad:

```text id="81q2l2"
emp1
table1
abc
```

---

# Use Proper Data Types

Wrong:

```sql id="iyhrcv"
phone INT
```

Better:

```sql id="y57x7v"
phone VARCHAR(15)
```

---

# Always Add Primary Key

Good design:

```sql id="bjlwmv"
id INT PRIMARY KEY
```

---

# Realistic Employee Table

```sql id="6wrxku"
CREATE TABLE employees(
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(15),
    gender CHAR(1),
    salary DECIMAL(10,2),
    hire_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# 2. ALTER TABLE

Used to modify existing tables.

You can:

* add columns
* remove columns
* modify columns
* rename columns

---

# ADD Column

Syntax:

```sql id="m0ntqx"
ALTER TABLE table_name
ADD column_name datatype;
```

Example:

```sql id="5c9dn9"
ALTER TABLE employees
ADD department VARCHAR(50);
```

---

# DROP Column

```sql id="mjlwm9"
ALTER TABLE employees
DROP COLUMN department;
```

---

# MODIFY Column

Change datatype or constraints.

Example:

```sql id="0qyy4s"
ALTER TABLE employees
MODIFY salary DECIMAL(12,2);
```

---

# RENAME Column

MySQL newer syntax:

```sql id="4zkjlwm"
ALTER TABLE employees
RENAME COLUMN full_name TO name;
```

---

# Change Table Name

```sql id="qjlwm2"
ALTER TABLE employees
RENAME TO staff;
```

---

# 3. DROP Command

Deletes entire object permanently.

---

# DROP TABLE

```sql id="zq2bco"
DROP TABLE employees;
```

Deletes:

* table structure
* all data

Cannot recover easily.

---

# DROP DATABASE

```sql id="ih0v0y"
DROP DATABASE company;
```

Deletes complete database.

---

# Difference: DELETE vs DROP

| DELETE            | DROP              |
| ----------------- | ----------------- |
| Removes rows      | Removes table     |
| Structure remains | Structure removed |
| Can use WHERE     | No WHERE          |

---

# 4. TRUNCATE

Removes all rows quickly.

Syntax:

```sql id="1b1zq7"
TRUNCATE TABLE employees;
```

---

# Difference: DELETE vs TRUNCATE

| DELETE                 | TRUNCATE                |
| ---------------------- | ----------------------- |
| Removes selected rows  | Removes all rows        |
| WHERE possible         | WHERE not possible      |
| Slower                 | Faster                  |
| Can rollback sometimes | Usually cannot rollback |

---

# Example

Before:

| id | name    |
| -- | ------- |
| 1  | Krishna |
| 2  | Ram     |

After:

```sql id="jlwm3n"
TRUNCATE TABLE employees;
```

Table becomes empty.

---

# 5. RENAME

Used to rename database objects.

---

# Rename Table

```sql 
RENAME TABLE employees TO workers;
```

---

# 6. DESCRIBE

Shows table structure.

Syntax:

```sql 
DESC employees;
```

OR

```sql 
DESCRIBE employees;
```

Output shows:

* column names
* dataTypes
* constraints
* keys

---

# Example Full Flow

---

# Step 1: Create Database

```sql
CREATE DATABASE office;
```

---

# Step 2: Use Database

```sql 
USE office;
```

---

# Step 3: Create Table

```sql 
CREATE TABLE employees(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    salary DECIMAL(10,2)
);
```

---

# Step 4: Add Column

```sql id="4jlwm4"
ALTER TABLE employees
ADD age INT;
```

---

# Step 5: Modify Column

```sql id="5jlwm5"
ALTER TABLE employees
MODIFY age SMALLINT;
```

---

# Step 6: Describe Table

```sql id="6jlwm6"
DESC employees;
```

---

# Step 7: Rename Table

```sql id="7jlwm7"
RENAME TABLE employees TO staff;
```

---

# Step 8: Truncate Data

```sql id="8jlwm8"
TRUNCATE TABLE staff;
```

---

# Step 9: Drop Table

```sql id="9jlwm9"
DROP TABLE staff;
```

---

# Important Interview Questions

* Difference between DROP and TRUNCATE?

| DROP              | TRUNCATE        |
| ----------------- | --------------- |
| Removes structure | Keeps structure |
| Table deleted     | Table remains   |

---

# Common Mistakes

---

# Running DROP accidentally

Dangerous:

```sql id="jlwmde"
DROP TABLE employees;
```

Always verify before execution.

---

# Forgetting Database Selection

```sql id="1jlwmx"
USE company;
```

Otherwise table may create in wrong database.

---

# Wrong Column Modification

Example:

```sql id="2jlwmx"
ALTER TABLE employees
MODIFY age VARCHAR(50);
```

Can create inconsistent data.

---

# Real-World Tip

In companies:

* schema design is extremely important
* altering huge tables can be expensive
* proper naming conventions matter a lot

---
---
# 5. INSERT INTO (DML)

`INSERT INTO` is used to add data into tables.

DML stands for:

```text id="j1k4r8"
Data Manipulation Language
```

---

# Basic Syntax

```sql id="p3m8v2"
INSERT INTO table_name
VALUES(value1, value2, value3);
```

Example:

```sql id="x7f0d1"
INSERT INTO students
VALUES(1, 'Krishna', 21);
```

---

# Important Rule

Values order must match column order.

Example Table:

```sql id="l2q7n5"
CREATE TABLE students(
    id INT,
    name VARCHAR(50),
    age INT
);
```

Correct:

```sql id="r9u4c6"
INSERT INTO students
VALUES(1, 'Krishna', 21);
```

Wrong:

```sql id="v5b1k3"
INSERT INTO students
VALUES('Krishna', 21, 1);
```

Data goes into wrong columns.

---

# Insert Single Row

```sql id="c8m3w7"
INSERT INTO employees
VALUES(1, 'Ram', 50000);
```

---

# Insert Multiple Rows

Very commonly used.

Syntax:

```sql id="f4z9x2"
INSERT INTO table_name
VALUES
(value1, value2),
(value1, value2);
```

Example:

```sql id="n6d1t8"
INSERT INTO students
VALUES
(1, 'Krishna', 21),
(2, 'Ram', 22),
(3, 'Sita', 20);
```

---

# Partial Insert

You can specify only needed columns.

Syntax:

```sql id="k1v8p0"
INSERT INTO table_name(column1, column2)
VALUES(value1, value2);
```

Example:

```sql id="b7y2e4"
INSERT INTO students(name, age)
VALUES('Krishna', 21);
```

Here:

```text id="d4q9m1"
id
```

may become:

* NULL
* AUTO_INCREMENT value
* DEFAULT value

depending on table design.

---

# Why Partial Insert is Important

Suppose table has 20 columns.

You may only need:

* name
* email

instead of writing all 20 values.

---

# Example with AUTO_INCREMENT

```sql id="m5r1u9"
CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)
);
```

Insert:

```sql id="t8x6w3"
INSERT INTO users(name)
VALUES('Krishna');
```

Result:

| id | name    |
| -- | ------- |
| 1  | Krishna |

Database automatically generates ID.

---

# Insert NULL Values

```sql id="u3n5q7"
INSERT INTO students
VALUES(1, 'Krishna', NULL);
```

Allowed only if:

```text id="p9d2l4"
column allows NULL
```

---

# Insert DEFAULT Values

Example Table:

```sql id="y6f1e8"
CREATE TABLE users(
    id INT,
    country VARCHAR(50) DEFAULT 'India'
);
```

Insert:

```sql id="q2k7m9"
INSERT INTO users(id)
VALUES(1);
```

Result:

| id | country |
| -- | ------- |
| 1  | India   |

---

# Insert Current Date

```sql id="g8v3x5"
INSERT INTO employees(name, joining_date)
VALUES('Krishna', CURRENT_DATE);
```

---

# Insert Current Date & Time

```sql id="h4m9z1"
INSERT INTO logs(message, created_at)
VALUES('Login Success', NOW());
```

---

# Insert Strings Correctly

Strings must use:

```text id="r1c8b6"
single quotes
```

Correct:

```sql id="s7p2x4"
INSERT INTO students
VALUES(1, 'Krishna', 21);
```

Wrong:

```sql id="w5d9n3"
INSERT INTO students
VALUES(1, Krishna, 21);
```

SQL thinks:

```text id="j6u4f0"
Krishna
```

is a column name.

---

# Insert Date Correctly

Correct format:

```text id="n8t1y5"
YYYY-MM-DD
```

Example:

```sql id="e2q7m4"
INSERT INTO employees
VALUES(1, 'Ram', '2026-05-09');
```

---

# INSERT INTO SELECT

Used to copy data from another table.

Syntax:

```sql id="k9w3v1"
INSERT INTO table2
SELECT * FROM table1;
```

Example:

```sql id="x4u8n6"
INSERT INTO backup_students
SELECT * FROM students;
```

---

# Copy Specific Columns

```sql id="v2m5r7"
INSERT INTO student_names(name)
SELECT name
FROM students;
```

---

# Real-World Example

Suppose:

* active_users table
* deleted_users table

When user deletes account:

```text id="c1z7d9"
move data to deleted_users
```

using:

```sql id="p6n2y8"
INSERT INTO deleted_users
SELECT *
FROM active_users
WHERE id = 5;
```

---

# Common INSERT Errors

---

# 1. Column Count Doesn't Match

Table:

```text id="o4x9m2"
(id, name, age)
```

Wrong:

```sql id="f7u3w5"
INSERT INTO students
VALUES(1, 'Krishna');
```

Missing:

```text id="i2r6k8"
age
```

---

# 2. Datatype Mismatch

Wrong:

```sql id="a5n1v7"
INSERT INTO students(age)
VALUES('abc');
```

INT column cannot store text.

---

# 3. Duplicate Primary Key

Wrong:

```sql id="l9q4z3"
INSERT INTO students
VALUES(1, 'Krishna');
```

again:

```sql id="d8m2x6"
INSERT INTO students
VALUES(1, 'Ram');
```

Duplicate primary key error.

---

# 4. NOT NULL Violation

Table:

```sql id="u7p5r1"
name VARCHAR(50) NOT NULL
```

Wrong:

```sql id="b3w9k4"
INSERT INTO students(name)
VALUES(NULL);
```

---

# How Database Stores Rows

Example:

```sql id="n5t8y2"
INSERT INTO students
VALUES(1, 'Krishna', 21);
```

Database internally creates:

| Row Number | id | name    | age |
| ---------- | -- | ------- | --- |
| 1          | 1  | Krishna | 21  |

Each INSERT creates a new row.

---

# Best Practices

---

# Always Mention Column Names

Better:

```sql id="q8u1v4"
INSERT INTO students(id, name, age)
VALUES(1, 'Krishna', 21);
```

instead of:

```sql id="e6m3w7"
INSERT INTO students
VALUES(1, 'Krishna', 21);
```

Why?
Because future column changes won't break queries.

---

# Use Bulk Insert for Large Data

Faster:

```sql id="t4n9x1"
INSERT INTO students
VALUES
(1, 'A', 20),
(2, 'B', 21),
(3, 'C', 22);
```

---

# Validate Data Before Insert

Avoid:

* duplicate emails
* invalid ages
* wrong formats

Usually handled using:

* constraints
* backend validation

---

# Important Interview Questions

## Difference between NULL and DEFAULT?

| NULL     | DEFAULT                    |
| -------- | -------------------------- |
| No value | Automatic predefined value |

---

## Why specify column names in INSERT?

To:

* improve readability
* avoid column order dependency

---

## What happens if AUTO_INCREMENT column skipped?

Database automatically generates value.

---
---
# 6. SELECT Statement (Very Important)

`SELECT` is used to retrieve data from tables.

This is the most used SQL command.

---

# Basic Syntax

```sql id="d1q8m2"
SELECT column_name
FROM table_name;
```

---

# Example Table

## students

| id | name    | age | city      |
| -- | ------- | --- | --------- |
| 1  | Krishna | 21  | Bangalore |
| 2  | Ram     | 22  | Chennai   |
| 3  | Sita    | 20  | Hyderabad |

---

# SELECT All Columns

```sql id="p4x7v1"
SELECT *
FROM students;
```

`*` means:

```text id="n9k2w6"
all columns
```

Output:

| id | name    | age | city      |
| -- | ------- | --- | --------- |
| 1  | Krishna | 21  | Bangalore |
| 2  | Ram     | 22  | Chennai   |
| 3  | Sita    | 20  | Hyderabad |

---

# Why `SELECT *` Not Preferred in Real Projects

Problems:

* slower on huge tables
* unnecessary data transfer
* security issues
* poor readability

Better:

```sql id="t5m1y8"
SELECT id, name
FROM students;
```

---

# Select Specific Columns

```sql id="r8v3q9"
SELECT name, age
FROM students;
```

Output:

| name    | age |
| ------- | --- |
| Krishna | 21  |
| Ram     | 22  |
| Sita    | 20  |

---

# Column Order in Output

Output follows:

```text id="c6x2n4"
SELECT order
```

Example:

```sql id="m7u9w1"
SELECT age, name
FROM students;
```

Output:

| age | name    |
| --- | ------- |
| 21  | Krishna |

---

# DISTINCT

Used to remove duplicates.

Example Table:

| city      |
| --------- |
| Bangalore |
| Chennai   |
| Bangalore |

Query:

```sql id="b2q5v7"
SELECT DISTINCT city
FROM students;
```

Output:

| city      |
| --------- |
| Bangalore |
| Chennai   |

---

# DISTINCT on Multiple Columns

```sql id="f9w1m3"
SELECT DISTINCT city, age
FROM students;
```

Uniqueness checked on:

```text id="k4x8n2"
combined values
```

---

# Aliases (AS)

Used to rename column names temporarily.

Syntax:

```sql id="z6t2y9"
SELECT column_name AS alias_name
FROM table_name;
```

Example:

```sql id="u3v7p1"
SELECT name AS student_name
FROM students;
```

Output:

| student_name |
| ------------ |
| Krishna      |

---

# AS Keyword Optional

Both same:

```sql id="w1x4m8"
SELECT name AS student_name
FROM students;
```

```sql id="q7n2v5"
SELECT name student_name
FROM students;
```

But using `AS` improves readability.

---

# Arithmetic Operations in SELECT

Example:

```sql id="e5p9x1"
SELECT salary + 5000
FROM employees;
```

---

# Example Table

| name | salary |
| ---- | ------ |
| Ram  | 50000  |

Query:

```sql id="g8w2m4"
SELECT name, salary + 5000
FROM employees;
```

Output:

| name | salary + 5000 |
| ---- | ------------- |
| Ram  | 55000         |

---

# Alias with Expressions

Better:

```sql id="k1v5n9"
SELECT name,
       salary + 5000 AS updated_salary
FROM employees;
```

---

# Mathematical Operators

| Operator | Meaning        |
| -------- | -------------- |
| +        | Addition       |
| -        | Subtraction    |
| *        | Multiplication |
| /        | Division       |
| %        | Modulus        |

---

# String Concatenation

Used to combine text.

---

# CONCAT()

Example:

```sql id="m3q7x2"
SELECT CONCAT(name, ' lives in ', city)
FROM students;
```

Output:

| CONCAT(...)                |
| -------------------------- |
| Krishna lives in Bangalore |

---

# Alias with CONCAT

```sql id="t9v4w6"
SELECT CONCAT(name, ' - ', city) AS student_info
FROM students;
```

---

# Literal Values in SELECT

You can directly select values.

```sql id="x5m8p2"
SELECT 'Hello World';
```

Output:

| Hello World |
| ----------- |
| Hello World |

---

# Using SELECT Without Table

Possible in many databases.

Example:

```sql id="p2v6n1"
SELECT 10 + 5;
```

Output:

| 10 + 5 |
| ------ |
| 15     |

---

# Selecting Current Date

```sql id="q8w3m7"
SELECT CURRENT_DATE;
```

---

# Selecting Current Time

```sql id="f4n9x6"
SELECT NOW();
```

---

# Eliminating Duplicate Rows Example

Table:

| department |
| ---------- |
| HR         |
| IT         |
| HR         |
| Sales      |

Query:

```sql id="j1m5v8"
SELECT DISTINCT department
FROM employees;
```

Output:

| department |
| ---------- |
| HR         |
| IT         |
| Sales      |

---

# SELECT Execution Flow (Important)

SQL internally processes roughly like this:

```text id="v2p7x9"
FROM → SELECT
```

Meaning:

1. Find table
2. Retrieve columns

Later we will learn full execution order.

---

# Case Sensitivity

SQL keywords:

```text id="d7m1q4"
not case sensitive
```

Same:

```sql id="y6v8p3"
SELECT * FROM students;
```

```sql id="u1x5n7"
select * from students;
```

---

# Formatting Queries Properly

Bad:

```sql id="o4p9m2"
SELECT name,age FROM students;
```

Better:

```sql id="l8v3q1"
SELECT name, age
FROM students;
```

Readable queries are important in companies.

---

# Common Mistakes

---

# Forgetting Quotes for Strings

Wrong:

```sql id="b7m2x4"
SELECT *
FROM students
WHERE name = Krishna;
```

Correct:

```sql id="r5v8n1"
SELECT *
FROM students
WHERE name = 'Krishna';
```

---

# Using SELECT * Everywhere

Bad for:

* performance
* APIs
* production systems

---

# Confusing DISTINCT

This:

```sql id="w9q3m6"
SELECT DISTINCT city, age
FROM students;
```

checks uniqueness on:

```text id="n4x7v2"
(city + age together)
```

NOT city alone.

---

# Real-World Examples

---

# Login System

```sql id="f2v8m5"
SELECT email, password
FROM users;
```

---

# Employee Dashboard

```sql id="z1m4q7"
SELECT name, salary
FROM employees;
```

---

# E-Commerce Product Listing

```sql id="x8v2n9"
SELECT product_name, price
FROM products;
```

---

# Important Interview Questions

* Difference between SELECT * and specific columns?

* What does DISTINCT do?

* Difference between alias and actual column name?

* Can we use arithmetic operations in SELECT?

Answer:

```text id="k6p1x4"
Yes
```

---

# Best Practices

---

# Avoid SELECT *

Use:

```sql id="u7m3v8"
SELECT required_columns
```

---

# Use Meaningful Aliases

Good:

```sql id="c5q9n2"
salary AS monthly_salary
```

Bad:

```sql id="d8v1m6"
salary AS s
```

---

# Format Queries Properly

Use line breaks:

```sql id="n2x7p5"
SELECT name, age
FROM students;
```

---
---
# 7. WHERE Clause (Very Important)

`WHERE` is used to filter rows.

Without `WHERE`:

```text id="w1p8n2"
all rows are returned
```

With `WHERE`:

```text id="q7m4v9"
only matching rows are returned
```

---

# Basic Syntax

```sql id="x2v6m1"
SELECT column_names
FROM table_name
WHERE condition;
```

---

# Example Table

## students

| id | name    | age | city      | marks |
| -- | ------- | --- | --------- | ----- |
| 1  | Krishna | 21  | Bangalore | 95    |
| 2  | Ram     | 22  | Chennai   | 80    |
| 3  | Sita    | 20  | Hyderabad | 90    |
| 4  | Arjun   | 21  | Bangalore | 70    |

---

# Filtering Single Row

```sql id="r8q2m5"
SELECT *
FROM students
WHERE id = 1;
```

Output:

| id | name    | age | city      | marks |
| -- | ------- | --- | --------- | ----- |
| 1  | Krishna | 21  | Bangalore | 95    |

---

# Comparison Operators

| Operator | Meaning               |
| -------- | --------------------- |
| =        | Equal                 |
| != or <> | Not Equal             |
| >        | Greater Than          |
| <        | Less Than             |
| >=       | Greater Than or Equal |
| <=       | Less Than or Equal    |

---

# Equal To (=)

```sql id="m5v8q1"
SELECT *
FROM students
WHERE city = 'Bangalore';
```

---

# Not Equal (!= or <>)

```sql id="k2x7n4"
SELECT *
FROM students
WHERE city != 'Chennai';
```

OR

```sql id="u9m3p6"
SELECT *
FROM students
WHERE city <> 'Chennai';
```

---

# Greater Than (>)

```sql id="d4v1x8"
SELECT *
FROM students
WHERE marks > 80;
```

---

# Less Than (<)

```sql id="f7m2q5"
SELECT *
FROM students
WHERE age < 22;
```

---

# Greater Than or Equal (>=)

```sql id="j1v9n3"
SELECT *
FROM students
WHERE marks >= 90;
```

---

# Less Than or Equal (<=)

```sql id="p6x4m7"
SELECT *
FROM students
WHERE age <= 21;
```

---

# Logical Operators

Used to combine conditions.

1. AND
2. OR
3. NOT

---

# AND Operator

Both conditions must be true.

```sql id="w8m2q4"
SELECT *
FROM students
WHERE city = 'Bangalore'
AND marks > 80;
```

Output:
| Krishna |

Because:

* city = Bangalore
* marks > 80

Both true.

---

# OR Operator

At least one condition must be true.

```sql id="n3v7x1"
SELECT *
FROM students
WHERE city = 'Chennai'
OR marks > 90;
```

---

# NOT Operator

Reverses condition.

```sql id="q5m8p2"
SELECT *
FROM students
WHERE NOT city = 'Bangalore';
```

---

# BETWEEN

Used for ranges.

Syntax:

```sql id="z2x6m9"
WHERE column BETWEEN value1 AND value2
```

Example:

```sql id="v4q1n7"
SELECT *
FROM students
WHERE marks BETWEEN 80 AND 95;
```

Equivalent to:

```sql id="u1m5x3"
WHERE marks >= 80
AND marks <= 95
```

---

# IN Operator

Checks multiple values.

Without IN:

```sql id="p8v2m4"
SELECT *
FROM students
WHERE city = 'Bangalore'
OR city = 'Chennai';
```

Better:

```sql id="f3x7q1"
SELECT *
FROM students
WHERE city IN ('Bangalore', 'Chennai');
```

---

# NOT IN

```sql id="k6m1v8"
SELECT *
FROM students
WHERE city NOT IN ('Bangalore', 'Chennai');
```

---

# LIKE Operator

Used for pattern matching.

---

# Wildcards

| Symbol | Meaning                  |
| ------ | ------------------------ |
| %      | Any number of characters |
| _      | Single character         |

---

# Starts With

```sql id="m9x4q2"
SELECT *
FROM students
WHERE name LIKE 'K%';
```

Matches:

```text id="v7p1m5"
Krishna
Kiran
Kumar
```

---

# Ends With

```sql id="x2m8q6"
SELECT *
FROM students
WHERE name LIKE '%a';
```

---

# Contains

```sql id="u5v1n9"
SELECT *
FROM students
WHERE name LIKE '%sh%';
```

---

# Single Character (_)

```sql id="r3m7x4"
SELECT *
FROM students
WHERE name LIKE '_a%';
```

Meaning:

* first char anything
* second char must be `a`

Matches:

```text id="p1v8m2"
Ram
```

---

# NULL Values

Cannot use:

```sql id="n6q4x1"
WHERE column = NULL
```

Wrong.

---

# IS NULL

```sql id="f8m2v5"
SELECT *
FROM students
WHERE city IS NULL;
```

---

# IS NOT NULL

```sql id="k1x7m3"
SELECT *
FROM students
WHERE city IS NOT NULL;
```

---

# Operator Precedence (Important)

Priority:

1. NOT
2. AND
3. OR

---

# Example

```sql id="w4m8q1"
SELECT *
FROM students
WHERE city = 'Bangalore'
OR city = 'Chennai'
AND marks > 80;
```

Internally:

```text id="x9v2m6"
city = Bangalore
OR
(city = Chennai AND marks > 80)
```

---

# Using Parentheses

Better:

```sql id="u7m1q5"
SELECT *
FROM students
WHERE (city = 'Bangalore'
OR city = 'Chennai')
AND marks > 80;
```

---

# Real-World Examples

---

# Login System

```sql id="r5x2m8"
SELECT *
FROM users
WHERE email = 'a@gmail.com'
AND password = '123';
```

---

# E-Commerce Filters

```sql id="f1m7v3"
SELECT *
FROM products
WHERE price < 500
AND category = 'Shoes';
```

---

# Employee Search

```sql id="z8q4m1"
SELECT *
FROM employees
WHERE department IN ('HR', 'IT');
```

---

# Attendance System

```sql id="x6m2v9"
SELECT *
FROM attendance
WHERE date BETWEEN '2026-05-01'
AND '2026-05-09';
```

---

# Common Mistakes

---

# Forgetting Quotes for Strings

Wrong:

```sql id="m3q8x1"
WHERE city = Bangalore
```

Correct:

```sql id="p9v4m2"
WHERE city = 'Bangalore'
```

---

# Using = with NULL

Wrong:

```sql id="v1m7x5"
WHERE city = NULL
```

Correct:

```sql id="k4q2m8"
WHERE city IS NULL
```

---

# Wrong AND/OR Logic

Always use:

```text id="u2m6v1"
parentheses
```

for clarity.

---

# Case Sensitivity

Depends on database collation.

In many systems:

```text id="d8x3m4"
'krishna' = 'Krishna'
```

may be true.

---

# Performance Tip

Filtering with indexed columns is faster.

Example:

```text id="q1m5v7"
id
email
```

are commonly indexed.

---

# Important Interview Questions

## Difference between WHERE and HAVING?

(Will learn later.)

---

## Difference between IN and BETWEEN?

| IN              | BETWEEN |
| --------------- | ------- |
| Multiple values | Range   |

---

## Why `IS NULL` instead of `= NULL`?

Because NULL means:

```text id="x5m9q3"
unknown value
```

not actual value.

---

# Best Practices

---

# Use Parentheses in Complex Conditions

Good:

```sql id="w2v7m1"
WHERE (city = 'Bangalore'
OR city = 'Chennai')
AND age > 20
```

---

# Use IN for Multiple Equal Conditions

Cleaner:

```sql id="r8m3q5"
WHERE city IN ('A', 'B', 'C')
```

---
---
# 8. ORDER BY + LIMIT

These are used to:

* sort data
* fetch top records
* pagination
* ranking-like queries

---

# ORDER BY

Used to sort rows.

Syntax:

```sql id="x4m8q2"
SELECT columns
FROM table_name
ORDER BY column_name;
```

---

# Example Table

## students

| id | name    | age | marks |
| -- | ------- | --- | ----- |
| 1  | Krishna | 21  | 95    |
| 2  | Ram     | 22  | 80    |
| 3  | Sita    | 20  | 90    |
| 4  | Arjun   | 21  | 70    |

---

# Default Sorting

Default:

```text id="p7m2v5"
ascending order (ASC)
```

Example:

```sql id="u1x8m4"
SELECT *
FROM students
ORDER BY marks;
```

Output:

| marks |
| ----- |
| 70    |
| 80    |
| 90    |
| 95    |

---

# ASC (Ascending)

Small → Large

```sql id="m5q1v8"
SELECT *
FROM students
ORDER BY age ASC;
```

---

# DESC (Descending)

Large → Small

```sql id="r2x7m4"
SELECT *
FROM students
ORDER BY marks DESC;
```

Output:

| marks |
| ----- |
| 95    |
| 90    |
| 80    |
| 70    |

---

# Sorting Strings

```sql id="f8m3q1"
SELECT *
FROM students
ORDER BY name;
```

Output:

```text id="k6v2m9"
Alphabetical order
```

---

# Sorting Dates

```sql id="t4m7x2"
SELECT *
FROM employees
ORDER BY joining_date DESC;
```

Newest dates first.

---

# Multiple Column Sorting

Syntax:

```sql id="q1m5v3"
ORDER BY column1, column2
```

---

# Example

```sql id="n8x2m6"
SELECT *
FROM students
ORDER BY age ASC, marks DESC;
```

Meaning:

1. Sort by age
2. If same age:
   sort by marks DESC

---

# Example Result

| name    | age | marks |
| ------- | --- | ----- |
| Sita    | 20  | 90    |
| Krishna | 21  | 95    |
| Arjun   | 21  | 70    |
| Ram     | 22  | 80    |

---

# ORDER BY Column Position

Possible:

```sql id="v3m8q5"
SELECT name, age, marks
FROM students
ORDER BY 3 DESC;
```

`3` means:

```text id="u7x1m4"
third selected column
```

Here:

```text id="y2m6q8"
marks
```

---

# Why Column Position Not Recommended

Bad readability.

Avoid:

```sql id="k5v2m1"
ORDER BY 2
```

Better:

```sql id="w8m4q7"
ORDER BY age
```

---

# LIMIT

Used to restrict number of rows returned.

Syntax:

```sql id="m1x7q4"
SELECT *
FROM table_name
LIMIT number;
```

---

# Example

```sql id="r5m2v8"
SELECT *
FROM students
LIMIT 2;
```

Output:
Only first 2 rows.

---

# Top N Records

Example:

```sql id="x9m3q1"
SELECT *
FROM students
ORDER BY marks DESC
LIMIT 3;
```

Top 3 students by marks.

---

# LIMIT with OFFSET

Used for pagination.

Syntax:

```sql id="u4m8v2"
LIMIT count OFFSET skip_rows
```

---

# Example

```sql id="q7x1m5"
SELECT *
FROM students
LIMIT 2 OFFSET 2;
```

Meaning:

* skip first 2 rows
* return next 2 rows

---

# Pagination Example

---

# Page 1

```sql id="k2m6q9"
SELECT *
FROM products
LIMIT 10 OFFSET 0;
```

---

# Page 2

```sql id="n5v1m7"
SELECT *
FROM products
LIMIT 10 OFFSET 10;
```

---

# Page 3

```sql id="p8m4x2"
SELECT *
FROM products
LIMIT 10 OFFSET 20;
```

---

# MySQL Shortcut

Equivalent:

```sql id="v1q7m3"
LIMIT offset, count
```

Example:

```sql id="f6m2x8"
SELECT *
FROM students
LIMIT 2, 3;
```

Means:

* skip 2 rows
* fetch next 3 rows

---

# ORDER BY + LIMIT Together

Very common in real projects.

---

# Highest Salary Employee

```sql id="x3m9q5"
SELECT *
FROM employees
ORDER BY salary DESC
LIMIT 1;
```

---

# Latest Users

```sql id="u8m1v4"
SELECT *
FROM users
ORDER BY created_at DESC
LIMIT 5;
```

---

# Cheapest Products

```sql id="m4q7x1"
SELECT *
FROM products
ORDER BY price ASC
LIMIT 10;
```

---

# Execution Order (Important)

SQL internally processes roughly:

```text id="q2m8v6"
FROM
→ SELECT
→ ORDER BY
→ LIMIT
```

---

# Real-World Examples

---

# Instagram Feed

```sql id="n1m5x9"
SELECT *
FROM posts
ORDER BY created_at DESC
LIMIT 20;
```

Newest posts first.

---

# Leaderboard

```sql id="w7m2q4"
SELECT username, score
FROM players
ORDER BY score DESC
LIMIT 10;
```

Top 10 players.

---

# Online Shopping

```sql id="k9x3m1"
SELECT *
FROM products
ORDER BY rating DESC
LIMIT 5;
```

Top-rated products.

---

# Common Mistakes

---

# Using LIMIT Without ORDER BY

Wrong logic:

```sql id="u5m8q2"
SELECT *
FROM students
LIMIT 5;
```

Why?
Because:

```text id="r1m4v7"
database row order not guaranteed
```

Better:

```sql id="f3x9m5"
ORDER BY id
LIMIT 5
```

---

# Confusing ASC and DESC

| ASC           | DESC          |
| ------------- | ------------- |
| Small → Large | Large → Small |

---

# Sorting Text Numerically

If numbers stored as text:

```text id="q6m2x1"
'100'
'20'
```

Sorting becomes incorrect.

Use proper datatypes.

---

# Performance Tip

Sorting huge tables can be expensive.

Indexes improve:

```text id="n8v4m3"
ORDER BY performance
```

especially on:

* id
* created_at
* salary

---

# Important Interview Questions

## Difference between ORDER BY and GROUP BY?

ORDER BY:

```text id="m5x1q8"
sorts rows
```

GROUP BY:

```text id="u2m7v4"
groups rows
```

---

## What happens if ORDER BY omitted?

Order becomes:

```text id="r9m3x6"
unpredictable
```

---

## Which executes first:

ORDER BY or LIMIT?

Answer:

```text id="f1m8q2"
ORDER BY first
LIMIT second
```

---

# Best Practices

---

# Always Use ORDER BY with LIMIT

Good:

```sql id="x7m4v1"
ORDER BY created_at DESC
LIMIT 10
```

---

# Use Explicit ASC/DESC

Readable:

```sql id="k3m9q7"
ORDER BY marks DESC
```

instead of depending on default behavior.

---

# Avoid ORDER BY Position Numbers

Bad:

```sql id="u6x2m5"
ORDER BY 2
```

Better:

```sql id="n4m8q1"
ORDER BY age
```

---
---
# 9. Aggregate Functions

Aggregate functions perform calculations on multiple rows and return:

```text id="m1x8q4"
single result
```

Used for:

* analytics
* reports
* dashboards
* statistics

---

# Main Aggregate Functions

1. COUNT()
2. SUM()
3. AVG()
4. MIN()
5. MAX()

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

# COUNT()

Counts rows.

---

# Count All Rows

```sql id="x5m2q8"
SELECT COUNT(*)
FROM employees;
```

Output:

| COUNT(*) |
| -------- |
| 4        |

---

# COUNT(column_name)

Counts:

```text id="p8m1v4"
non-NULL values
```

Example:

```sql id="u3x7m2"
SELECT COUNT(salary)
FROM employees;
```

If one salary is NULL:

```text id="k6m9q1"
NULL not counted
```

---

# COUNT(DISTINCT)

Counts unique values.

Example:

```sql id="n4v8m5"
SELECT COUNT(DISTINCT department)
FROM employees;
```

Output:

| COUNT(DISTINCT department) |
| -------------------------- |
| 3                          |

Departments:

* IT
* HR
* Sales

---

# SUM()

Adds values.

Example:

```sql id="r2m7x1"
SELECT SUM(salary)
FROM employees;
```

Output:

| SUM(salary) |
| ----------- |
| 195000      |

---

# AVG()

Returns average value.

Example:

```sql id="f8q3m6"
SELECT AVG(salary)
FROM employees;
```

Output:

| AVG(salary) |
| ----------- |
| 48750       |

---

# MIN()

Returns smallest value.

Example:

```sql id="k1m5v9"
SELECT MIN(salary)
FROM employees;
```

Output:

| MIN(salary) |
| ----------- |
| 40000       |

---

# MAX()

Returns largest value.

Example:

```sql id="u7x2m4"
SELECT MAX(salary)
FROM employees;
```

Output:

| MAX(salary) |
| ----------- |
| 60000       |

---

# Aggregate Functions with WHERE

Very common.

---

# Example

```sql id="m9q4x1"
SELECT AVG(salary)
FROM employees
WHERE department = 'IT';
```

Average salary only for:

```text id="v3m8q7"
IT department
```

---

# Multiple Aggregate Functions Together

```sql id="x2m6v8"
SELECT
    COUNT(*) AS total_employees,
    SUM(salary) AS total_salary,
    AVG(salary) AS average_salary,
    MIN(salary) AS minimum_salary,
    MAX(salary) AS maximum_salary
FROM employees;
```

---

# Aliases with Aggregate Functions

Better readability:

```sql id="q5m1x7"
SELECT AVG(salary) AS avg_salary
FROM employees;
```

---

# Aggregate Functions Ignore NULL

Important concept.

Example Table:

| salary |
| ------ |
| 50000  |
| NULL   |
| 60000  |

Query:

```sql id="u8m4q2"
SELECT AVG(salary)
FROM employees;
```

Average becomes:

```text id="n1v7m5"
(50000 + 60000) / 2
```

NOT divide by 3.

---

# COUNT(*) vs COUNT(column)

---

# COUNT(*)

Counts:

```text id="r4m9x2"
all rows
```

including NULL rows.

---

# COUNT(column)

Counts:

```text id="p7x3m1"
only non-NULL values
```

---

# Example

Table:

| id | phone |
| -- | ----- |
| 1  | 999   |
| 2  | NULL  |
| 3  | 888   |

Query:

```sql id="k2m8q6"
SELECT COUNT(*)
FROM users;
```

Output:

```text id="u5m1v9"
3
```

Query:

```sql id="f3x7m4"
SELECT COUNT(phone)
FROM users;
```

Output:

```text id="n8q2m5"
2
```

---

# Aggregate Functions on Strings

MIN and MAX work on text too.

Example:

```sql id="x1m6v3"
SELECT MIN(name), MAX(name)
FROM employees;
```

Based on:

```text id="q4m9x7"
alphabetical order
```

---

# Real-World Examples

---

# Total Revenue

```sql id="m7x2q1"
SELECT SUM(amount)
FROM orders;
```

---

# Total Users

```sql id="u3m8v5"
SELECT COUNT(*)
FROM users;
```

---

# Highest Product Price

```sql id="r9m4x2"
SELECT MAX(price)
FROM products;
```

---

# Lowest Attendance

```sql id="k6v1m8"
SELECT MIN(attendance)
FROM students;
```

---

# Average Rating

```sql id="x5q7m3"
SELECT AVG(rating)
FROM reviews;
```

---

# Aggregate Functions with Expressions

Possible:

```sql id="n2m8v4"
SELECT SUM(salary * 12)
FROM employees;
```

Yearly salary total.

---

# DISTINCT with Aggregates

Example:

```sql id="p4x1m7"
SELECT SUM(DISTINCT salary)
FROM employees;
```

Duplicate salaries counted once.

---

# Important Limitation

Wrong:

```sql id="u9m3q5"
SELECT name, AVG(salary)
FROM employees;
```

Why wrong?
Because:

```text id="r1x8m2"
aggregate + normal column conflict
```

Need:

```text id="f6m4q7"
GROUP BY
```

which is next topic.

---

# Common Mistakes

---

# Using Aggregate Without Understanding NULL

NULL values ignored.

---

# Confusing COUNT(*)

`COUNT(*)` counts rows.

Not:

```text id="v8m2x5"
column values
```

---

# Mixing Aggregates with Normal Columns

Wrong:

```sql id="k3m7q1"
SELECT name, AVG(salary)
FROM employees;
```

Need GROUP BY.

---

# Performance Notes

Aggregate queries on huge tables:

* can be expensive
* indexes may help

Especially:

```text id="m1v9q4"
COUNT()
MAX()
MIN()
```

---

# Important Interview Questions

## Difference between COUNT(*) and COUNT(column)?

## Do aggregate functions ignore NULL?

Answer:

```text id="u4x7m1"
Yes
```

(except COUNT(*))

---

## Can aggregate functions work on strings?

MIN/MAX can.

---

## Which aggregate functions return single value?

All aggregates return:

```text id="n6m2q8"
single result
```

unless GROUP BY used.

---

# Best Practices

---

# Always Use Aliases

Better:

```sql id="q8m5v2"
SELECT AVG(salary) AS average_salary
```

---

# Use WHERE Before Aggregation

Efficient:

```sql id="x3m1q7"
SELECT AVG(salary)
FROM employees
WHERE department = 'IT';
```

---

# Understand NULL Handling

Critical for interviews and real systems.

---
---
# 10. GROUP BY (Very Important)

`GROUP BY` is used to:

```text id="m1x7q4"
group rows having same values
```

Usually used with:

* COUNT()
* SUM()
* AVG()
* MIN()
* MAX()

---

# Why GROUP BY Needed

Without GROUP BY:
aggregate functions return:

```text id="u5m2v8"
single result for entire table
```

With GROUP BY:

```text id="q8m4x1"
separate result for each group
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
| 5  | Ravi    | HR         | 35000  |

---

# Basic GROUP BY

```sql id="x2m8q5"
SELECT department
FROM employees
GROUP BY department;
```

Output:

| department |
| ---------- |
| IT         |
| HR         |
| Sales      |

---

# GROUP BY with COUNT()

```sql id="p4m1v7"
SELECT department,
       COUNT(*) AS total_employees
FROM employees
GROUP BY department;
```

Output:

| department | total_employees |
| ---------- | --------------- |
| IT         | 2               |
| HR         | 2               |
| Sales      | 1               |

---

# How GROUP BY Works Internally

SQL internally creates groups.

Example:

```text id="u7m3q2"
IT group
HR group
Sales group
```

Then aggregate functions work:

```text id="v9x1m4"
inside each group
```

---

# GROUP BY with SUM()

```sql id="k6m2v8"
SELECT department,
       SUM(salary) AS total_salary
FROM employees
GROUP BY department;
```

Output:

| department | total_salary |
| ---------- | ------------ |
| IT         | 110000       |
| HR         | 75000        |
| Sales      | 45000        |

---

# GROUP BY with AVG()

```sql id="n1m7q5"
SELECT department,
       AVG(salary) AS average_salary
FROM employees
GROUP BY department;
```

---

# GROUP BY with MIN() and MAX()

```sql id="f8x2m4"
SELECT department,
       MIN(salary) AS minimum_salary,
       MAX(salary) AS maximum_salary
FROM employees
GROUP BY department;
```

---

# Important Rule (Very Important)

Every selected column must be:

1. inside aggregate function
   OR
2. inside GROUP BY

---

# Correct Query

```sql id="r5m9q1"
SELECT department,
       AVG(salary)
FROM employees
GROUP BY department;
```

---

# Wrong Query

```sql id="u3x7m8"
SELECT name,
       AVG(salary)
FROM employees;
```

Why wrong?

Because:

```text id="m6q2v4"
name not grouped
```

SQL doesn't know:

```text id="x1m8q7"
which name to show
```

---

# Multiple Column GROUP BY

Syntax:

```sql id="p7m4x2"
GROUP BY column1, column2
```

---

# Example Table

| name    | department | city      |
| ------- | ---------- | --------- |
| Krishna | IT         | Bangalore |
| Ram     | HR         | Chennai   |
| Sita    | IT         | Bangalore |

Query:

```sql id="k2x8m5"
SELECT department, city,
       COUNT(*) AS total
FROM employees
GROUP BY department, city;
```

Groups formed by:

```text id="v5m1q9"
(department + city)
```

---

# GROUP BY with WHERE

Important:

```text id="q3m7x1"
WHERE executes BEFORE grouping
```

---

# Example

```sql id="u8m2v6"
SELECT department,
       AVG(salary)
FROM employees
WHERE salary > 40000
GROUP BY department;
```

---

# Execution Order (Important)

SQL roughly executes like:

```text id="f1m9q4"
FROM
→ WHERE
→ GROUP BY
→ SELECT
→ ORDER BY
→ LIMIT
```

---

# GROUP BY with ORDER BY

```sql id="x7m3v2"
SELECT department,
       COUNT(*) AS total
FROM employees
GROUP BY department
ORDER BY total DESC;
```

---

# GROUP BY with LIMIT

```sql id="m4q8x1"
SELECT department,
       SUM(salary) AS total_salary
FROM employees
GROUP BY department
ORDER BY total_salary DESC
LIMIT 1;
```

Department with highest salary expense.

---

# Real-World Examples

---

# Count Users by Country

```sql id="u1m5v7"
SELECT country,
       COUNT(*) AS users
FROM users
GROUP BY country;
```

---

# Total Sales Per Product

```sql id="r8x2m4"
SELECT product_id,
       SUM(amount) AS total_sales
FROM orders
GROUP BY product_id;
```

---

# Average Rating Per Movie

```sql id="k6m1q9"
SELECT movie_id,
       AVG(rating) AS average_rating
FROM reviews
GROUP BY movie_id;
```

---

# Employees Per Department

```sql id="p9x4m2"
SELECT department,
       COUNT(*) AS employee_count
FROM employees
GROUP BY department;
```

---

# Highest Paid Department

```sql id="x5m7v1"
SELECT department,
       AVG(salary) AS avg_salary
FROM employees
GROUP BY department
ORDER BY avg_salary DESC
LIMIT 1;
```

---

# GROUP BY vs DISTINCT

---

# DISTINCT

Removes duplicate rows.

```sql id="u2m8q5"
SELECT DISTINCT department
FROM employees;
```

---

# GROUP BY

Creates groups for aggregation.

```sql id="n7x3m1"
SELECT department,
       COUNT(*)
FROM employees
GROUP BY department;
```

---

# NULL Handling in GROUP BY

NULL values form:

```text id="m3q9v7"
their own group
```

Example:

| department |
| ---------- |
| IT         |
| NULL       |
| NULL       |

GROUPS:

```text id="x6m1q4"
IT
NULL
```

---

# Common Mistakes

---

# Selecting Non-Grouped Columns

Wrong:

```sql id="u5x2m8"
SELECT name, department
FROM employees
GROUP BY department;
```

---

# Forgetting GROUP BY

Wrong:

```sql id="f4m9q1"
SELECT department, COUNT(*)
FROM employees;
```

Need:

```sql id="r1x7m5"
GROUP BY department
```

---

# Confusing WHERE and GROUP BY

WHERE filters:

```text id="k8m2v4"
rows before grouping
```

GROUP BY creates:

```text id="q6x1m9"
groups after filtering
```

---

# Performance Notes

Grouping huge datasets:

* expensive operation
* may use sorting/hashing internally

Indexes help especially on:

```text id="m7v3q2"
grouped columns
```

---

# Important Interview Questions

## Difference between GROUP BY and DISTINCT?

## Can GROUP BY work without aggregate functions?

Answer:

```text id="u1x5m8"
Yes
```

---

## Which executes first:

WHERE or GROUP BY?

Answer:

```text id="r9m4q7"
WHERE
```

---

## Why non-grouped columns not allowed?

Because SQL cannot determine:

```text id="f2m8x1"
which row value to display
```

---

# Best Practices

---

# Always Use Aliases

Readable:

```sql id="x3q7m5"
COUNT(*) AS total_users
```

---

# Filter Early Using WHERE

Efficient:

```sql 
WHERE salary > 40000
```

before grouping.

---

# Avoid Unnecessary Grouping

Grouping large tables is costly.

---
---
# 11. HAVING Clause

`HAVING` is used to filter:

```text id="m1q8x4"
groups after GROUP BY
```

---

# Why HAVING Needed

`WHERE` cannot filter:

```text id="u5m2v7"
aggregate results
```

Example:

```sql id="x3m7q1"
AVG(salary)
COUNT(*)
SUM(amount)
```

For these:

```text id="r9m4v2"
HAVING is required
```

---

# Basic Syntax

```sql id="k6m1x8"
SELECT column_name,
       aggregate_function(column)
FROM table_name
GROUP BY column_name
HAVING condition;
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
| 5  | Ravi    | HR         | 35000  |

---

# HAVING with COUNT()

```sql id="u2m7q5"
SELECT department,
       COUNT(*) AS total_employees
FROM employees
GROUP BY department
HAVING COUNT(*) > 1;
```

Output:

| department | total_employees |
| ---------- | --------------- |
| IT         | 2               |
| HR         | 2               |

Sales removed because:

```text id="f8m1v4"
COUNT = 1
```

---

# HAVING with AVG()

```sql id="x5m9q2"
SELECT department,
       AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 45000;
```

---

# HAVING with SUM()

```sql id="p4x7m1"
SELECT department,
       SUM(salary) AS total_salary
FROM employees
GROUP BY department
HAVING SUM(salary) > 80000;
```

---

# HAVING with MIN/MAX

```sql id="n1m8v5"
SELECT department,
       MAX(salary) AS highest_salary
FROM employees
GROUP BY department
HAVING MAX(salary) > 50000;
```

---

# WHERE vs HAVING (Very Important)

| WHERE                    | HAVING                  |
| ------------------------ | ----------------------- |
| Filters rows             | Filters groups          |
| Executes before GROUP BY | Executes after GROUP BY |
| Cannot use aggregates    | Can use aggregates      |

---

# WHERE Example

```sql id="r6m2q9"
SELECT *
FROM employees
WHERE salary > 40000;
```

Filters:

```text id="u3x7m1"
individual rows
```

---

# HAVING Example

```sql id="k9m4v2"
SELECT department,
       AVG(salary)
FROM employees
GROUP BY department
HAVING AVG(salary) > 45000;
```

Filters:

```text id="x1m8q5"
groups
```

---

# WHERE + HAVING Together

Very common.

---

# Example

```sql id="f5m1x7"
SELECT department,
       AVG(salary) AS avg_salary
FROM employees
WHERE salary > 35000
GROUP BY department
HAVING AVG(salary) > 45000;
```

---

# How This Executes

---

# Step 1 → WHERE

Remove rows:

```text id="m7v2q4"
salary <= 35000
```

---

# Step 2 → GROUP BY

Create department groups.

---

# Step 3 → HAVING

Remove groups:

```text id="r1m9x6"
AVG <= 45000
```

---

# Execution Order (Important)

SQL roughly executes:

```text id="u4m8q1"
FROM
→ WHERE
→ GROUP BY
→ HAVING
→ SELECT
→ ORDER BY
→ LIMIT
```

---

# HAVING Without GROUP BY

Possible.

Example:

```sql id="x8m3q5"
SELECT COUNT(*)
FROM employees
HAVING COUNT(*) > 3;
```

Entire table treated as:

```text id="k2m7v1"
single group
```

---

# HAVING with Aliases

Some databases allow:

```sql id="n5m1x8"
SELECT department,
       AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING avg_salary > 45000;
```

But safer:

```sql id="p9x4m2"
HAVING AVG(salary) > 45000
```

for compatibility.

---

# Real-World Examples

---

# Countries with More Than 100 Users

```sql id="u1m6q7"
SELECT country,
       COUNT(*) AS users
FROM users
GROUP BY country
HAVING COUNT(*) > 100;
```

---

# Products with High Revenue

```sql id="r4x8m1"
SELECT product_id,
       SUM(amount) AS revenue
FROM orders
GROUP BY product_id
HAVING revenue > 100000;
```

---

# Movies with High Ratings

```sql id="k7m2v5"
SELECT movie_id,
       AVG(rating) AS avg_rating
FROM reviews
GROUP BY movie_id
HAVING AVG(rating) >= 4.5;
```

---

# Departments with Large Teams

```sql id="m3q9x2"
SELECT department,
       COUNT(*) AS employee_count
FROM employees
GROUP BY department
HAVING COUNT(*) >= 10;
```

---

# Top Performing Stores

```sql id="x6m1v4"
SELECT store_id,
       SUM(sales) AS total_sales
FROM sales
GROUP BY store_id
HAVING total_sales > 500000;
```

---

# Common Mistakes

---

# Using Aggregate in WHERE

Wrong:

```sql id="u8m4q2"
SELECT department,
       AVG(salary)
FROM employees
WHERE AVG(salary) > 40000
GROUP BY department;
```

Why wrong?
Because:

```text id="r2m7x5"
WHERE executes before aggregation
```

Correct:

```sql id="f1m9v3"
HAVING AVG(salary) > 40000
```

---

# Forgetting GROUP BY

Wrong:

```sql id="k5x2m8"
SELECT department,
       COUNT(*)
FROM employees
HAVING COUNT(*) > 1;
```

Usually needs:

```sql id="n7m4q1"
GROUP BY department
```

---

# Confusing WHERE and HAVING

Remember:

```text id="p3m8v6"
WHERE → rows
HAVING → groups
```

---

# Performance Notes

`WHERE` is usually:

```text id="x9m1q4"
faster than HAVING
```

because filtering happens:

```text id="u6m2v7"
before grouping
```

Best practice:

* use WHERE whenever possible
* use HAVING only for aggregate filtering

---

# Important Interview Questions

## Difference between WHERE and HAVING?

## Can HAVING work without GROUP BY?

Answer:

```text id="r4m8x1"
Yes
```

---

## Which executes first:

WHERE or HAVING?

Answer:

```text id="k1m5v9"
WHERE
```

---

## Why aggregate functions not allowed in WHERE?

Because:

```text id="m7q2x4"
aggregation not done yet
```

---

# Best Practices

---

# Use WHERE for Row Filtering

Efficient:

```sql id="u2m9v5"
WHERE salary > 30000
```

---

# Use HAVING Only for Group Filtering

Correct:

```sql id="f8x3m1"
HAVING AVG(salary) > 50000
```

---

# Use Meaningful Aliases

Readable:

```sql id="x5m7q2"
COUNT(*) AS total_orders
```

---
---