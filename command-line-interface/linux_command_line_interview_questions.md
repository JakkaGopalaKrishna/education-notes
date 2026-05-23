# Linux Command Line Interview Questions

## 1. How do you Create, Read, Update, Delete, and Move files & folders from the command line?

### Answer
Files and folders are managed using basic commands like `touch` and `mkdir` to create files and directories, `cat` or `less` to read files, editors like `nano` to update files, `rm` to delete files or folders, and `mv` to move or rename them.

These commands together cover the complete CRUD operations from the terminal.

---

## 2. How do you check disk status in Linux?

### Answer
Disk status is checked using the following command:

```bash
df -h
```

It shows:
- Total disk size
- Used space
- Available space
- Usage percentage

The `-h` flag displays sizes in a human-readable format.

---

## 3. How do you check running processes and extract process IDs?

### Answer
Running processes are checked using:

```bash
ps
```

To extract process IDs, commands like `awk`, `grep`, and pipes `|` are used.

Example:

```bash
ps -ef | grep nginx
```

This helps filter and identify process IDs (PIDs).

---

## 4. How do you find the most senior parent process?

### Answer
The most senior parent process usually has:

```text
PID 1
```

It is the root process from which other processes originate.

Example:

```bash
ps -p 1
```

---

## 5. How do you change file permissions and explain numerical permissions?

### Answer
File permissions are changed using:

```bash
chmod
```

Ownership is changed using:

```bash
chown
```

### Numerical Permissions

| Permission | Value |
|------------|-------|
| Read       | 4     |
| Write      | 2     |
| Execute    | 1     |

Example:

```bash
chmod 755 file.txt
```

Meaning:
- Owner → read, write, execute
- Group → read, execute
- Others → read, execute

---

## 6. How do you extract last X lines, count words, and search for a word in a file?

### Answer

### Extract Last Lines

```bash
tail -n 10 file.txt
```

### Search for a Word

```bash
grep "word" file.txt
```

### Count Words or Lines

```bash
wc file.txt
```

Tools like `sed` and `awk` are also useful for advanced text processing.

---

## 7. What are the basics of sed and awk?

### Answer

### sed
A stream editor used mainly for:
- Search
- Replace
- Edit text

Example:

```bash
sed 's/old/new/g' file.txt
```

### awk
A text-processing tool used for:
- Extracting columns
- Filtering records
- Formatting output

Example:

```bash
awk '{print $1}' file.txt
```

---

## 8. What is the difference between absolute and relative paths?

### Answer

### Absolute Path
- Starts from root directory `/`
- Full location of a file or folder

Example:

```bash
/home/user/docs/file.txt
```

### Relative Path
- Based on current directory
- Depends on current location

Example:

```bash
docs/file.txt
```

---

## 9. How do you practice using absolute and relative paths?

### Answer
Practice by navigating directories using:

### Absolute Path

```bash
cd /home/user/projects
```

### Relative Path

```bash
cd ../projects
```

Use `.` and `..` to move between directories.

---

## 10. How do you use the find command?

### Answer
The `find` command searches for files and directories recursively.

Example:

```bash
find /home -name "file.txt"
```

It can search by:
- Name
- Type
- Size
- Time

---

## 11. What are the 5 most commonly used ls flags and how do you combine them?

### Answer

| Flag | Purpose |
|------|---------|
| -a | Show hidden files |
| -t | Sort by time |
| -r | Reverse sorting |
| -h | Human-readable sizes |
| -l | Detailed listing |

### Combined Example

```bash
ls -altrh
```

---

## 12. What are terminal control codes like Ctrl+C, Ctrl+D, Ctrl+Z?

### Answer

| Shortcut | Purpose |
|----------|---------|
| Ctrl+C | Stops a running process |
| Ctrl+D | End-of-input / logout |
| Ctrl+Z | Suspends a process |

These shortcuts help control terminal behavior efficiently.

---

## 13. What is the difference between Ctrl+C and Ctrl+Z?

### Answer

### Ctrl+C
- Terminates the process completely

### Ctrl+Z
- Pauses/suspends the process
- Sends it to background
- Can be resumed later

---

## 14. How do you use Ctrl+R?

### Answer
`Ctrl+R` performs a reverse search through command history.

Usage:
1. Press `Ctrl+R`
2. Type part of a previous command
3. Matching command appears automatically

Useful for recalling long commands quickly.

---

## 15. What is tab autocompletion?

### Answer
Tab autocompletion automatically completes:
- Commands
- File names
- Directory names

Benefits:
- Faster typing
- Fewer spelling mistakes
- Better productivity

---

## 16. How do you use arrow keys in the terminal?

### Answer

| Key | Function |
|----|----------|
| Up Arrow | Previous command |
| Down Arrow | Next command |
| Left Arrow | Move cursor left |
| Right Arrow | Move cursor right |

Arrow keys help quickly edit and reuse commands.
