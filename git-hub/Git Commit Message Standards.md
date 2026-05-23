# Git Commit Message Standards & Conventions
# Full-Stack Git Commit Master Reference

### I. Structural Elements
`<type>(<scope>): <description>`

[optional body: Why this change? What alternatives were considered?]

[optional footer: BREAKING CHANGE markers, Issue references]

---

### II. Impact & Versioning (SemVer)
Commit messages directly impact your app's versioning via automation (like Semantic Release):
- **MAJOR (`!`)**: Breaking changes (e.g., `feat(auth)!: remove deprecated legacy login`).
- **MINOR (`feat`)**: New backward-compatible functionality.
- **PATCH (`fix`, `perf`)**: Backward-compatible bug fixes or speed improvements.

---

### III. Professional Standards
1. **Imperative Present Tense**: Use "Add" not "Added". "Fix" not "Fixes".
2. **Atomic Commits**: One logical change per commit. Avoid "updated navbar and fixed auth".
3. **The 50/72 Rule**: Keep the subject under 50 characters; wrap the body at 72.
4. **Reference Issues**: Always link your ticket ID (e.g., `Closes #123`) in the footer.

---

### IV. Pro Tips for High-Level Developers
- **Git Tags**: Use annotated tags (`git tag -a v1.0.0`) for release milestones.
- **Commit Templates**: Set a global template: `git config --global commit.template ~/.gitmessage`.
- **Hooks**: Use `commitlint` and `husky` to force your team to follow these rules.

### 1. The 50/72 Rule
*   **Subject Line:** Limit to **50 characters**. It should be a concise summary.
*   **Body:** Wrap at **72 characters**. Use this to explain the "what" and "why" (not "how").

### 2. Standard Structure
[type]([optional scope]): [description]

[optional body]

[optional footer(s)]

---

### 3. Common Commit Types (Conventional Commits)
*   **feat**: A new feature for the user.
*   **fix**: A bug fix for the user.
*   **docs**: Changes to the documentation.
*   **style**: Formatting, missing semi-colons, etc; no production code change.
*   **refactor**: Refactoring production code, e.g. renaming a variable.
*   **perf**: Code changes that improve performance.
*   **test**: Adding missing tests, refactoring tests; no production code change.
*   **build**: Changes that affect the build system or external dependencies.
*   **ci**: Changes to CI configuration files and scripts.
*   **chore**: Updating grunt tasks etc; no production code change.
*   **revert**: Reverts a previous commit.

---

### 4. Golden Rules for Writing
1.  **Use the Imperative Mood:** "Add feature" instead of "Added feature" or "Adds feature".
2.  **Capitalize the First Letter:** Start the subject line with a capital letter.
3.  **No Period at the End:** Do not end the subject line with a period.
4.  **Blank Line:** Always leave a blank line between the subject and the body.

### 5. Example Commit
feat(auth): add google oauth2 login integration

Implemented the passport-google-oauth20 strategy to allow users 
to sign in using their Google accounts. Updated the user schema 
to store the Google ID.

Fixes #104
# 🌐 THE ULTIMATE FULL-STACK GIT ENGINEERING BIBLE
> The definitive 1,000-line standard for professional software version control.

---

## TABLE OF CONTENTS
1.  [The Philosophy of Version Control](#1-philosophy)
2.  [Anatomy of a Perfect Commit](#2-anatomy)
3.  [The Conventional Commits Standard (Deep Dive)](#3-conventional)
4.  [Advanced Scoping for Full-Stack Architecture](#4-scoping)
5.  [Breaking Changes & SemVer Impact](#5-semver)
6.  [Git Hooks: Automating the Standard](#6-hooks)
7.  [Branching Strategies for Enterprise](#7-branching)
8.  [The Art of the Rebase & Squash](#8-rebase)
9.  [Disaster Recovery & History Rewriting](#9-recovery)
10. [CI/CD Integration & Automated Changelogs](#10-cicd)
11. [Git Internals: The Content Addressable Filesystem](#11-internals)
12. [The "Never-Do" List for Senior Devs](#12-never-do)

---

## 1. THE PHILOSOPHY OF VERSION CONTROL <a name="1-philosophy"></a>
In a professional environment, Git is not a backup tool; it is a communication tool.

### 1.1 The Atomic Commit Principle
An atomic commit is a single unit of work.
- **Rule:** If a commit contains "and", it should likely be two commits.
- **Benefit:** Reverting is surgical. If a feature breaks the build, you can roll back the specific feature without losing unrelated bug fixes.

### 1.2 The Narrative History
A developer should be able to read the `git log` and understand the project's history without opening a single source file.

---

## 2. ANATOMY OF A PERFECT COMMIT <a name="2-anatomy"></a>
A commit message must satisfy the 50/72 rule.

### 2.1 The Subject Line (The "What")
- **Limit:** 50 Characters.
- **Format:** Imperative mood ("Add", not "Added").
- **Case:** Sentence case (Capitalize first letter).
- **Punctuation:** No trailing period.

### 2.2 The Body (The "Why")
- **Limit:** 72 Character wrap.
- **Content:** Focus on the motivation for the change. Contrast it with previous behavior.

---

## 3. THE CONVENTIONAL COMMITS STANDARD <a name="3-conventional"></a>
The industry standard for automated workflows.

### 3.1 Essential Types
- `feat`: A brand new feature for the end-user.
- `fix`: A bug fix for the end-user.
- `docs`: Documentation-only changes.
- `style`: Formatting, semi-colons, white-space (No logic change).
- `refactor`: Code change that neither fixes a bug nor adds a feature.
- `perf`: A code change that improves performance.
- `test`: Adding missing tests or correcting existing tests.
- `build`: Changes that affect the build system or external dependencies.
- `ci`: Changes to CI configuration files and scripts.
- `chore`: Other changes that don't modify src or test files.
- `revert`: Reverts a previous commit.

---

## 4. ADVANCED SCOPING FOR FULL-STACK <a name="4-scoping"></a>
Scopes help categorize where the change happened in the stack.

### 4.1 Frontend Scopes
- `feat(ui):` Design system or component changes.
- `feat(ux):` User flow changes.
- `feat(css):` Styling updates.
- `feat(redux):` State management logic.

### 4.2 Backend Scopes
- `feat(api):` Endpoint changes.
- `feat(db):` Migration scripts or schema changes.
- `feat(auth):` Authentication/Authorization logic.
- `feat(worker):` Background tasks or cron jobs.

### 4.3 DevOps Scopes
- `ci(actions):` GitHub Actions updates.
- `build(deps):` Dependency updates (e.g., package.json).
- `ops(k8s):` Kubernetes manifest changes.

---

## 5. BREAKING CHANGES & SEMVER <a name="5-semver"></a>
Semantic Versioning (SemVer) is driven by your commit messages.

### 5.1 The Exclamation Mark (!)
Adding a `!` after the type/scope signals a breaking change.
`feat(api)!: remove support for legacy XML response`

### 5.2 The Footer
A `BREAKING CHANGE:` footer is the loudest way to communicate a major version bump.

---

## 6. GIT HOOKS: AUTOMATING THE STANDARD <a name="6-hooks"></a>
Don't trust humans to remember rules. Use Husky.

### 6.1 Husky + Commitlint Setup
```bash
# Install
npm i -D @commitlint/config-conventional @commitlint/cli husky

# Initialize
npx husky install
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
# 🌐 THE ULTIMATE FULL-STACK GIT ENGINEERING BIBLE
> Version: 1.0.0 | Role: Student to Lead Engineer | Documentation for Students
```
---

## TABLE OF CONTENTS
1.  **The Philosophy of Version Control**
2.  **Anatomy of a Perfect Commit Message**
3.  **The Conventional Commits Standard (Deep Dive)**
4.  **Advanced Scoping for Full-Stack Architecture**
5.  **Breaking Changes & Semantic Versioning**
6.  **Automating Quality with Git Hooks (Husky & Commitlint)**
7.  **Enterprise Branching Strategies (GitFlow vs Trunk Based)**
8.  **The Art of the Rebase, Squash, and Amend**
9.  **Disaster Recovery & History Rewriting (Reflog)**
10. **CI/CD Integration & Automated Changelogs**
11. **Git Internals: The Content Addressable Filesystem**
12. **The "Never-Do" List for Senior Developers**
13. **Practical Examples and Checklists**

---

## 1. THE PHILOSOPHY OF VERSION CONTROL

In a professional environment, Git is not just a backup tool; it is a vital communication system and a narrative of your project's evolution.

### 1.1 The Atomic Commit Principle
Each commit must represent a single, logical, self-contained unit of work.
- **Rule:** If a commit message contains the word "and" (e.g., "Updated UI and fixed auth bug"), it should likely be two separate commits.
- **Benefit:** If one logical change breaks the build, it can be reverted surgically using `git revert` without losing unrelated work, which is crucial for debugging with tools like `git bisect`.

### 1.2 The Narrative History
Your commit history should tell a clear story. Future developers should be able to read the `git log` and understand the "what" and "why" behind every change without needing to open the source files.

---

## 2. ANATOMY OF A PERFECT COMMIT MESSAGE

A standardized format ensures readability for both humans and automation tools.


### 2.1 The Subject Line (The "Headline")
*   **Limit:** Keep it to **50 characters or less**. This ensures it displays properly in various Git tools and command-line outputs (like `git log --oneline`).
*   **Format:** Use the **imperative mood** ("Fix bug" not "Fixed bug" or "Fixes bug").
*   **Case & Punctuation:** Capitalize the first letter and do not end with a period.

### 2.2 The Body (The "Why")
*   **Limit:** Wrap the text at **72 characters** per line.
*   **Content:** This section is optional for trivial changes but essential for complex ones. It should explain:
    *   **Motivation:** The problem the commit solves.
    *   **Impact:** How the change affects the system.
    *   **Alternatives:** Briefly mention other approaches considered and rejected, and why.

### 2.3 The Footer (Metadata)
*   **Content:** Used for metadata, such as referencing issue ticket numbers or tracking information.
*   **Keywords:** Use keywords like `Fixes #123`, `Closes #456`, or `Refs #789`. GitHub, GitLab, etc., automatically create links to issues when these are used.

---

## 3. THE CONVENTIONAL COMMITS STANDARD (DEEP DIVE) <a name="3-conventional"></a>
The Conventional Commits specification is a lightweight set of rules that creates an explicit commit history, which in turn enables automated tools to parse commit messages for tasks like generating changelogs and determining semantic versioning.

### 3.1 Comprehensive Type Directory
| Type | Description | SemVer Impact | Example Subject Line |
| :--- | :--- | :--- | :--- |
| **feat** | A new feature or capability for the user. | `MINOR` | `feat(auth): add google oauth login` |
| **fix** | A bug patch or correction for the user. | `PATCH` | `fix(api): correct null pointer crash` |
| **perf** | Code change that improves performance. | `PATCH` | `perf: optimize guest database search` |
| **refactor** | Restructuring code without changing external behavior or fixing a bug. | None | `refactor(db): use async/await for queries` |
| **docs** | Documentation changes only (README, comments, Swagger). | None | `docs(readme): update CI instructions` |
| **style** | Formatting, white-space, missing semi-colons (No logic change). | None | `style: format code according to linting rules` |
| **test** | Adding missing tests or correcting existing tests. | None | `test(ui): add unit tests on dates formatting` |
| **build** | Changes affecting the build system or external dependencies (e.g., npm, Webpack). | None | `build(deps): bump React version to 18.0.0` |
| **ci** | Changes to CI configuration files and scripts (e.g., GitHub Actions, Jenkins). | None | `ci: add vault stage to gitlab pipeline` |
| **chore** | Routine maintenance tasks that don't change source or test files (e.g., updating `.gitignore`). | None | `chore: clean up unused dependencies` |
| **revert** | Reverting a previous commit. | Depends | `revert: feat(sidebar): accidental commit` |
| **ops** | Operational components like infrastructure, deployment, backup, or recovery. | Depends | `ops(k8s): update production replica count` |

---

## 4. ADVANCED SCOPING FOR FULL-STACK ARCHITECTURE <a name="4-scoping"></a>
Scopes clarify which part of a large codebase the commit affects. They are entirely flexible and team-dependent.

### 4.1 Frontend Scopes
*   `feat(ui):` Design system or component changes.
*   `feat(ux):` User flow changes.
*   `feat(css):` Styling updates.
*   `feat(redux):` State management logic.

### 4.2 Backend Scopes
*   `feat(api):` Endpoint changes or new controllers.
*   `feat(db):` Migration scripts or schema changes.
*   `feat(auth):` Authentication/Authorization logic.

---

## 5. BREAKING CHANGES & SEMANTIC VERSIONING <a name="5-semver"></a>
Your commit messages should drive your version numbers automatically.

### 5.1 The Exclamation Mark (!)
Adding a `!` after the type/scope signals a breaking change that will trigger a MAJOR version bump.

`feat(api)!: remove support for v1 endpoints`

### 5.2 The Footer (Loud & Clear)
A `BREAKING CHANGE:` footer is a more verbose way to communicate a major version bump, often used for detailed migration instructions.

```text
feat: add two-factor authentication support

This change introduces TOTP and recovery codes. The previous 2FA method 
is no longer supported and needs to be migrated.

BREAKING CHANGE: The /api/v1/auth/2fa-legacy endpoint has been removed.


# 1. Install dependencies
npm install --save-dev @commitlint/config-conventional @commitlint/cli husky

# 2. Configure commitlint (add this to commitlint.config.js file)
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js

# 3. Activate hooks
npx husky install
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'

