# 🌐 Network Commands – Learning Notes

## 📌 ipconfig
Used in Windows to display network configuration details like:
- IP address
- Subnet mask
- Default gateway  

👉 Used for troubleshooting network issues.  
👉 In Linux, use `ip` command instead.

---

## 📌 ip -4 addr
Displays IPv4 addresses of all network interfaces in Linux.

---

## 📌 ip -6 addr
Displays IPv6 addresses of network interfaces.

---

## 📌 netstat
Shows:
- Network connections
- Routing tables
- Interface stats  

⚠️ Deprecated → replaced by `ss`.

### Variants:
- `netstat -a` → All connections
- `netstat -at` → TCP only
- `netstat -l` → Listening ports
- `netstat -u` → UDP connections

---

## 📌 curl Commands

```bash
curl https://techwithtim.net
```

```bash
curl -X POST http://techwithtim.net
```

```bash
curl -X POST -data "p1=value1 & p2=value2" http://techwithtim.net
```

```bash
curl -o response https://techwithtim.net
```

```bash
curl --help
```

```bash
curl --header "Content-type:application/json" -X POST -data "p1=value1 & p2=value2" http://techwithtim.net
```

---

## 📌 ping
```bash
ping google.com
```

---

# 🐚 Bash Basics

## Input
```bash
read x
read -p "enter a number: " x
```

## Output
```bash
echo "hello world"
echo "$x"
cat filename.txt
```

## File Writing
```bash
echo "jgk" > file.txt
echo "jgk" >> file.txt
```

---

# 📁 Folder Commands
```bash
mkdir folder_name
mkdir folder1 folder2
mkdir -p project/src/components
```

## Move / Rename
```bash
mv file.txt folder/
mv old.txt new.txt
```

## Copy
```bash
cp file.txt copy.txt
cp -r folder1 folder2
```

---

# 📂 File Listing
```bash
ls -l
ls -a
ls -h
ls -t
ls -r
```

---

## 📍 Directory
```bash
pwd
```

---

## ❌ Delete
```bash
rm file.txt
rm -r folder
rm -rf folder
```

---

## 📄 Create Files
```bash
touch file.txt
touch a.txt b.txt
```

---

## 📖 View Files
```bash
cat file.txt
less file.log
```

---

## 📊 tail
```bash
tail file.log
tail -n 20 file.log
tail -f file.log
```

---

## 🔍 grep
```bash
grep "word" file.txt
grep -i "word" file.txt
grep -r "TODO" .
grep -ir "TODO" .
```

---

## 🔄 rsync
```bash
rsync -av --delete folder1/ backup/
rsync -av --delete --dry-run folder1/ folder2/
```

---

# 🔎 find Command
```bash
find . -name "file.txt"
find . -iname "file.txt"
find . -type f
find . -type d
find . -size +100M
find . -mtime -1
```

---

# 📊 Other Utilities

## sort
```bash
sort file.txt
sort -r file.txt
sort -n numbers.txt
```

## date
```bash
date
date +"%d-%m-%Y"
date +"%H:%M:%S"
```

## tree
```bash
tree folder
tree -L 2
```

## wc
```bash
wc file.txt
wc -l file.txt
wc -w file.txt
```

---

# 🔐 Permissions
```bash
chmod 755 script.sh
chmod +x run.sh
```

## Ownership
```bash
chown user file.txt
chown user:group file.txt
chown -R user folder
```

---

# ⚙️ System Commands

## Process
```bash
ps aux
top
kill 1234
kill -9 1234
```

## Disk / Memory
```bash
df -h
free -h
```

## System Info
```bash
uname -a
lspci
```

---

# 🌐 Networking
```bash
ping google.com
ifconfig
ip a
ssh user@server_ip
```

---

# 🐚 Shell Tools

## xargs
Pass output as input.

## printenv
Show environment variables.

## nano
Simple text editor.

## awk
Text processing.

## sed
Search & replace.

## Pipe Operator
```bash
command1 | command2
```

---

# 🧠 Final Tip
```bash
ps aux | grep python | wc -l
```
