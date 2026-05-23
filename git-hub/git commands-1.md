# Git Commands Cheat Sheet

Learn more about Conventional Commits:  
> [this is site to learn a comments to commit](https://www.conventionalcommits.org/en/v1.0.0/)

---

# Basic Commands

## 1. git init
Initializes a new Git repository.

```bash
git init
```

---

## 2. git clone
Clones a repository into a new directory.

```bash
git clone <repository-url>
```

---

## 3. git status
Displays the state of the working directory and the staging area.

```bash
git status
```

---

## 4. git add
Adds file contents to the index (staging area).

```bash
git add <file-name>
```

---

## 5. git commit
Records changes to the repository.

```bash
git commit -m "commit message"
```

---

## 6. git push
Updates remote refs along with associated objects.

```bash
git push <remote-name> <branch-name>
```

---

## 7. git pull
Fetches from and integrates with another repository or a local branch.

```bash
git pull <remote-name> <branch-name>
```

---

## 8. git fetch
Downloads objects and refs from another repository.

```bash
git fetch <remote-name>
```

---

# Branching and Merging

## 1. git branch
Lists, creates, or deletes branches.

```bash
git branch             # List branches
git branch <name>      # Create a new branch
git branch -d <name>   # Delete a branch
```

---

## 2. git checkout
Switches branches or restores working tree files.

```bash
git checkout <branch-name>      # Switch branches
git checkout -b <branch-name>   # Create and switch to a new branch
```

---

## 3. git merge
Joins two or more development histories together.

```bash
git merge <branch-name>
```

---

# Remote Repositories

## 1. git remote
Manages set of tracked repositories.

```bash
git remote -v
git remote add <name> <url>
```

---

## 2. git remote remove
Removes a remote repository.

```bash
git remote remove <name>
```

---

# Undoing Changes

## 1. git reset
Resets current HEAD to the specified state.

```bash
git reset --soft <commit>
git reset --mixed <commit>
git reset --hard <commit>
```

---

## 2. git revert
Creates a new commit that undoes the changes made by an earlier commit.

```bash
git revert <commit>
```

---

## 3. git stash
Stashes changes in the working directory.

```bash
git stash
git stash apply
```

---

# Viewing History

## 1. git log
Shows the commit logs.

```bash
git log
```

---

## 2. git diff
Shows changes between commits, commit and working tree, etc.

```bash
git diff
```

---

## 3. git show
Shows various types of objects.

```bash
git show <commit>
```

---

# Conventional Commit Examples

```bash
feat: add user login feature
fix: resolve navbar alignment issue
docs: update README with Git commands
style: format code using prettier
refactor: improve authentication logic
test: add unit tests for login service
chore: update dependencies
```