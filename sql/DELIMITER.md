# ✅ Definition of `DELIMITER`

`DELIMITER` is used in MySQL to change the default statement-ending symbol temporarily.

By default, MySQL uses:

```sql
;
```

as the end of a SQL statement.

When creating:

* procedures
* functions
* triggers

multiple semicolons are used inside the block, so `DELIMITER` helps MySQL identify where the entire block ends.

---

# ✅ Simple Definition

```
DELIMITER changes the symbol used to end a SQL statement temporarily.
```

---

# ✅ Example

```sql 
DELIMITER //

CREATE PROCEDURE test()
BEGIN
   SELECT 'Hello';
END //

DELIMITER ;
```

Here:

* `//` becomes temporary ending symbol
* procedure ends at `END //`

After that:

```sql 
DELIMITER ;
```

restores normal behavior.
