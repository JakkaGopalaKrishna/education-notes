# Git Interview Questions and Answers

## 1. How to check whether Git is already initialized in a directory?

### Answer
You can check if Git is initialized by looking for the `.git` folder.

### Commands

```bash
ls -a
```

If you see a `.git` directory, Git is already initialized.

OR

```bash
git status
```

- If initialized → shows branch and status
- If not → shows:

```bash
fatal: not a git repository
```

---

## 2. How to set up Git config details (username and email) globally?

### Answer
Git uses username and email to identify commits.

### Commands

```bash
git config --global user.name "Your Name"

git config --global user.email "youremail@example.com"
```

### Verify Configuration

```bash
git config --global --list
```

These settings apply to all repositories on your system.

---

## 3. What are the different stages in Git? How to revert between them?

### Answer
Git has three main stages:

### 1. Working Area
- Files you are editing
- Not tracked or modified

### 2. Staging Area (Index)
- Files marked for commit

### 3. Commit Area (Repository)
- Files permanently saved in Git history

### Move Between Stages

#### Working → Staging

```bash
git add file.txt
```

#### Staging → Commit

```bash
git commit -m "message"
```

#### Staging → Working (Unstage)

```bash
git restore --staged file.txt
```

#### Commit → Working (Undo commit, keep changes)

```bash
git reset HEAD~1
```

---

## 4. What is a branch? How to change the default branch? How to create and switch branches?

### Answer
A branch is a parallel line of development in Git.

### Create a Branch

```bash
git branch feature-branch
```

### Switch to a Branch

```bash
git checkout feature-branch
```

OR (Modern Way)

```bash
git switch feature-branch
```

### Create and Switch Together

```bash
git checkout -b feature-branch
```

### Change Default Branch (Example: master → main)

```bash
git branch -m master main
```

---

## 5. How to merge different branches?

### Answer
Merging combines changes from one branch into another.

### Steps

```bash
git checkout main
git merge feature-branch
```

- If no conflicts → merge completes automatically
- If conflicts → manual resolution required

---

## 6. What are merge conflicts and how to resolve them?

### Answer
A merge conflict happens when:
- Same file
- Same lines
- Modified differently in two branches

Git cannot decide which change to keep.

### Resolve Merge Conflict Steps

Open the conflicted file.

Look for markers:

```text
<<<<<<< HEAD
your changes
=======
other branch changes
>>>>>>> branch-name
```

### Steps
1. Edit the file manually
2. Remove conflict markers
3. Save the file

### Add and Commit

```bash
git add file.txt
git commit -m "Resolved merge conflict"
```

---

## 7. How to add origin? How to remove origin?

### Answer

### Add Remote Origin

```bash
git remote add origin <repo-url>
```

### Check Remotes

```bash
git remote -v
```

### Remove Origin

```bash
git remote remove origin
```

---

## 8. How to create a repository on GitHub / GitLab?

### Answer

### Steps
1. Login to GitHub/GitLab
2. Click **New Repository**
3. Enter repository name
4. Choose **Public** or **Private**
5. Click **Create Repository**

You will get a remote repository URL.

---

## 9. How to push code to GitHub / GitLab?

### Answer

### First Push

```bash
git push -u origin main
```

### Next Pushes

```bash
git push
```

### Explanation
- `origin` → remote name
- `main` → branch name
- `-u` → sets upstream

---

## 10. What is git pull?

### Answer
`git pull` is used to fetch and merge changes from a remote repository into the local branch.

### Command

```bash
git pull origin main
```

### Internally, It Does

```bash
git fetch
git merge
```

### Used When
- Teammates push new code
- You want latest updates locally

---

# Conventional Commit Examples

```bash
feat: add login functionality
fix: resolve merge conflict issue
docs: update Git interview notes
style: format markdown content
refactor: improve branch switching logic
test: add unit tests for Git utilities
chore: update project dependencies
```
