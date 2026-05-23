# Linux Network, System & Shell Commands Notes

# 🌐 Network Commands

## ipconfig
This command is mainly used in Windows systems to display network configuration details. It shows information such as:
- IP address
- Subnet mask
- Default gateway

It is commonly used to troubleshoot network-related issues.

> In Linux systems, this command is replaced by the `ip` command.

---

## ip -4 addr
Displays IPv4 address information of all network interfaces.

### Usage
```bash
ip -4 addr
```

Useful for:
- Checking IPv4 address
- Verifying network interface status

---

## ip -6 addr
Displays IPv6 address details of network interfaces.

### Usage
```bash
ip -6 addr
```

Useful for:
- Verifying IPv6 configuration
- Checking IPv6 connectivity

---

## netstat
Displays:
- Network connections
- Routing tables
- Interface statistics
- Port information

### Usage
```bash
netstat
```

> Modern Linux systems often use `ss` instead.

---

## netstat -a
Shows all active and listening connections.

```bash
netstat -a
```

---

## netstat -at
Displays only TCP connections.

```bash
netstat -at
```

---

## netstat -l
Lists all listening ports.

```bash
netstat -l
```

---

## netstat -u
Shows UDP connections.

```bash
netstat -u
```

---

# 🌍 curl Commands

## curl https://techwithtim.net
Fetches webpage content directly in terminal.

```bash
curl https://techwithtim.net
```

---

## curl -X POST http://techwithtim.net
Sends an HTTP POST request.

```bash
curl -X POST http://techwithtim.net
```

---

## curl -X POST -data "p1=value1 & p2=value2" http://techwithtim.net
Sends POST request with data.

```bash
curl -X POST -data "p1=value1 & p2=value2" http://techwithtim.net
```

---

## curl -o response https://techwithtim.net
Downloads and saves content into a file.

```bash
curl -o response https://techwithtim.net
```

---

## curl --help
Displays curl help documentation.

```bash
curl --help
```

---

## curl with Headers
Sends POST request with custom headers.

```bash
curl --header "Content-type:application/json" -X POST -data "p1=value1 & p2=value2" http://techwithtim.net
```

---

## ping google.com
Checks network connectivity.

```bash
ping google.com
```

Useful for:
- Testing internet connection
- Measuring response time

---

# 🖥️ Input & Output Commands

## Taking Input

### Simple Input
```bash
read x
```

### Input with Prompt
```bash
read -p "enter a number: " x
```

---

## Printing Output

### Print Text
```bash
echo "hello world"
```

### Print Variable
```bash
echo "$x"
```

### Display File Content
```bash
cat filename.txt
```

---

## File Writing

### Overwrite File
```bash
echo "jgk" > filename.txt
```

### Append to File
```bash
echo "jgk" >> filename.txt
```

---

# 📁 Folder & File Commands

## mkdir – Create Folders

### Single Folder
```bash
mkdir folder_name
```

### Multiple Folders
```bash
mkdir folder1 folder2 folder3
```

### Folder Structure
```bash
mkdir -p project/src/components
```

---

## mv – Move/Rename Files

### Move File
```bash
mv file.txt folder/
```

### Rename File
```bash
mv old.txt new.txt
```

---

## cp – Copy Files/Folders

### Copy File
```bash
cp file.txt copy.txt
```

### Copy Folder
```bash
cp -r folder1 folder2
```

---

# 📋 ls Command Flags

| Command | Description |
|---------|-------------|
| ls -l | Long format |
| ls -a | Hidden files |
| ls -h | Human readable |
| ls -t | Sort by time |
| ls -r | Reverse order |

### Combined Example
```bash
ls -altrh
```

---

## pwd – Present Working Directory

```bash
pwd
```

---

## rm – Remove Files/Folders

### Remove File
```bash
rm file.txt
```

### Remove Folder
```bash
rm -r folder
```

### Force Remove (Dangerous)
```bash
rm -rf folder
```

---

## touch – Create Empty Files

### Single File
```bash
touch file.txt
```

### Multiple Files
```bash
touch a.txt b.txt c.txt
```

---

# 📄 File Viewing Commands

## cat
Displays file content.

```bash
cat file.txt
```

---

## less
View large files.

```bash
less logfile.log
```

---

## tail

### Last Lines
```bash
tail file.log
```

### Last N Lines
```bash
tail -n 20 file.log
```

### Live Monitoring
```bash
tail -f file.log
```

`-f` means live monitoring.

---

# 🔍 grep – Search Text

### Case Sensitive
```bash
grep "word" file.txt
```

### Ignore Case
```bash
grep -i "word" file.txt
```

### Recursive Search
```bash
grep -r "TODO" .
```

### Recursive + Ignore Case
```bash
grep -ir "TODO" .
```

---

# 🔄 rsync – Remote Sync

## Sync Folders
```bash
rsync -av --delete folder1/ backup/
```

Features:
- Fast delta transfer
- Preserves metadata
- Resume support
- Remote sync via SSH

---

## Safe Testing
```bash
rsync -av --delete --dry-run folder1/ folder2/
```

---

# 🔎 find Command

## By Name
```bash
find . -name "photo.jpg"
find . -iname "photo.jpg"
find . -name "*.pdf"
```

---

## By Type
```bash
find . -type f
find . -type d
```

---

## By Size
```bash
find . -size +100M
find . -size -1k
```

---

## By Time
```bash
find . -mtime -1
find . -mtime +30
```

---

## Combined Example
```bash
find ~/Downloads -type f -name "*.zip" -size +50M
```

---

# 📊 sort Command

```bash
sort file.txt
sort -r file.txt
sort -n numbers.txt
```

---

# 📅 date Command

```bash
date
date +"%d-%m-%Y"
date +"%H:%M:%S"
```

---

# 🌳 tree Command

## Install
```bash
sudo apt install tree
```

## Show Structure
```bash
tree folder_name
```

## Limit Levels
```bash
tree -L 2
```

---

# 🔢 wc – Word Count

```bash
wc file.txt
wc -l file.txt
wc -w file.txt
```

---

# 🔐 chmod – Change Permissions

## Permission Values

| Permission | Value |
|------------|-------|
| Read | 4 |
| Write | 2 |
| Execute | 1 |

### Example
```bash
chmod 755 script.sh
```

### Add Execute Permission
```bash
chmod +x run.sh
```

---

# 👤 chown – Change Ownership

### Change User
```bash
chown user file.txt
```

### Change User & Group
```bash
chown user:group file.txt
```

### Recursive Ownership
```bash
chown -R user folder
```

---

# 🛡️ sudo – Superuser Commands

```bash
sudo apt update
sudo rm file
```

---

# 📦 apt – Package Manager

```bash
sudo apt update
sudo apt install git
sudo apt remove git
sudo apt upgrade
```

---

# ⚙️ OS / Process Related Commands

## ps
Shows running processes.

```bash
ps aux
```

---

## top
Displays live system activity.

```bash
top
```

---

## df
Shows disk usage.

```bash
df -h
```

---

## uname
Displays system information.

```bash
uname -a
```

---

## free
Shows memory usage.

```bash
free -h
```

---

## lspci
Lists PCI hardware devices.

```bash
lspci
```

---

## kill
Stops a running process.

```bash
kill 1234
kill -9 1234
```

---

# 🌐 Network Related Commands

## ping
Checks connectivity.

```bash
ping google.com
```

---

## ifconfig
Displays network interface details.

```bash
ifconfig
```

> Modern systems use `ip a`.

---

## ssh
Secure remote login.

```bash
ssh user@server_ip
```

---

# 🐚 Bash / Shell Related Commands

## xargs
Passes output as input to another command.

```bash
find . -name "*.txt" | xargs rm
```

---

## printenv
Displays environment variables.

```bash
printenv
```

---

## nano
Terminal-based text editor.

```bash
nano file.txt
```

---

## awk
Text processing tool.

```bash
awk '{print $1}' file.txt
```

---

## sed
Stream editor for modifying text.

```bash
sed 's/old/new/g' file.txt
```

---

## Pipe Operator |

Connects commands together.

### Example
```bash
ps aux | grep python | wc -l
```

---

# 🧠 Final Tip

Linux commands become more powerful when combined together.

### Example
```bash
ps aux | grep python | wc -l
```

This command:
1. Lists all processes
2. Filters Python processes
3. Counts them
