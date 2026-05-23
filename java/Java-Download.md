## ✅ Step 1: Download the Correct File

From Oracle Corporation site, download:

👉 **x64 Debian Package (.deb)**
(File name like: `jdk-26_linux-x64_bin.deb`)

It will go to your **Downloads** folder.

---

## ✅ Step 2: Open Terminal

Shortcut:

```bash
Ctrl + Alt + T
```

---

## ✅ Step 3: Go to Downloads Folder

```bash
cd ~/Downloads
```

---

## ✅ Step 4: Install the JDK

```bash
sudo dpkg -i jdk-26_linux-x64_bin.deb
```

👉 Enter your system password when asked

---

## ✅ Step 5: Fix Dependencies (if error comes)

If you see any error, run:

```bash
sudo apt-get install -f
```

---

## ✅ Step 6: Verify Installation

```bash
java -version
javac -version
```

👉 You should see Java version output

---

## ✅ Step 7 (Optional but Good): Set JAVA_HOME

Check path:

```bash
update-alternatives --config java
```

Then add:

```bash
sudo nano /etc/environment
```

Add this line at end:

```bash
JAVA_HOME="/usr/lib/jvm/jdk-26"
```

Save:

* Press `Ctrl + X`
* Press `Y`
* Press `Enter`

Apply:

```bash
source /etc/environment
```

Check:

```bash
echo $JAVA_HOME
```

---
---

## 🎯 Done!

Now Java is fully installed ✅

---
Great—now let’s **run Java in VS Code step-by-step** 🚀

---

## ✅ Step 1: Open VS Code

Launch Visual Studio Code

---

## ✅ Step 2: Install Java Extension Pack

1. Press **Ctrl + Shift + X**
2. Search: **Java Extension Pack**
3. Install the one by Microsoft

---

## ✅ Step 3: Create Java File

1. Click **File → New File**
2. Save as:

```
HelloWorld.java
```

3. Paste this code:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Krishna!");
    }
}
```

---

## ✅ Step 4: Run the Code (Easy Way)

After saving:

* You will see **▶ Run** button (top right)
* Click it

👉 Output will appear in terminal:

```
Hello, Krishna!
```

---

## ✅ Step 5: Run Using Terminal (Important)

Open terminal inside VS Code:

```
Ctrl + `
```

Run:

```bash
javac HelloWorld.java
java HelloWorld
```

---

## ⚠️ If Run Button Not Showing

Do this:

* Press **Ctrl + Shift + P**
* Type: `Java: Create Java Project`
* Select **No build tools**
* Then create file inside that project

---

## 🔥 Common Issues

### ❌ Java not detected

Run:

```bash
java -version
```

If not working → installation issue

---

### ❌ Class name error

Make sure:

```
File name = HelloWorld.java
Class name = HelloWorld
```

---

## 🎯 You are now ready!

You can:

* Write programs
* Compile & run
* Debug

---

## 👉 Next (Recommended)

I can teach you:

1. Java basics (variables, loops)
2. OOP concepts (important for interviews)
3. Practice problems

Just tell: **“teach java basics”** 👍








# install intellij idea
1. open terminal enter 
```bash
snap find "intellij"

sudo snap install intellij-idea-community --classic
```
2. open Intellij idea in your laptop

