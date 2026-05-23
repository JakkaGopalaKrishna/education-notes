Here’s a **real-world React project folder structure** (used in production apps) with **utils, config, services, etc.** explained clearly 👇

---

# 🚀 📁 Standard React Folder Structure

```bash
src/
│
├── assets/
├── components/
├── features/
├── pages/
├── hooks/
├── context/
├── services/
├── utils/
├── config/
├── constants/
├── routes/
├── styles/
├── App.jsx
├── main.jsx
```

---

# 🧠 1. `assets/`

👉 Static files

```bash
assets/
  images/
  icons/
  fonts/
```

✔️ Example:

```js
import logo from "../assets/images/logo.png";
```

---

# 🧩 2. `components/`

👉 Reusable UI components

```bash
components/
  Button/
    Button.jsx
    Button.css
  Input/
  Modal/
```

✔️ Used everywhere
✔️ No business logic

---

# 🎯 3. `features/` (VERY IMPORTANT)

👉 Feature-based structure (modern approach)

```bash
features/
  auth/
    AuthSlice.js
    Login.jsx
    authService.js
  counter/
    Counter.jsx
    counterUtils.js
```

✔️ Keeps related logic together
✔️ Best for scalability

---

# 📄 4. `pages/`

👉 Route-level components

```bash
pages/
  Home.jsx
  About.jsx
  Dashboard.jsx
```

✔️ Used in routing

---

# 🔁 5. `hooks/`

👉 Custom hooks

```bash
hooks/
  useFetch.js
  useDebounce.js
  useAuth.js
```

✔️ Reusable logic

Example:

```js
function useCounter() {
  const [count, setCount] = useState(0);
  return { count, setCount };
}
```

---

# 🌐 6. `context/`

👉 Global state using React Context

```bash
context/
  AuthContext.jsx
  ThemeContext.jsx
```

---

# 🔌 7. `services/`

👉 API calls / backend interaction

```bash
services/
  api.js
  userService.js
  productService.js
```

Example:

```js
export const getUsers = () => fetch("/api/users");
```

---

# 🧰 8. `utils/`

👉 Helper functions (pure logic)

```bash
utils/
  formatDate.js
  validateNumber.js
  debounce.js
```

✔️ No React here
✔️ Reusable everywhere

---

# ⚙️ 9. `config/`

👉 App configuration

```bash
config/
  apiConfig.js
  env.js
```

Example:

```js
export const API_BASE_URL = "https://api.example.com";
```

---

# 📌 10. `constants/`

👉 Static values

```bash
constants/
  routes.js
  appConstants.js
```

Example:

```js
export const MAX_LIMIT = 1000;
```

---

# 🧭 11. `routes/`

👉 Routing setup (using React Router)

```bash
routes/
  AppRoutes.jsx
```

---

# 🎨 12. `styles/`

👉 Global styles

```bash
styles/
  global.css
  variables.css
```

---

# 🏁 13. Entry Files

### `main.jsx`

👉 App entry point

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

---

### `App.jsx`

👉 Root component

```js
function App() {
  return <div>App</div>;
}
```

---

# 🔥 Two Popular Patterns

## 1. 📦 Layer-Based (what we saw above)

* utils, services, components separate

## 2. 🧱 Feature-Based (BEST for large apps)

```bash
features/
  auth/
    components/
    hooks/
    services/
    utils/
```

👉 Everything related to auth in one place

---

# ⚡ Pro Tips

✔️ Small project → simple structure
✔️ Large project → feature-based
✔️ Keep:

* `utils` → pure functions
* `services` → API calls
* `config` → environment setup

---

# 🎯 Summary

| Folder     | Purpose          |
| ---------- | ---------------- |
| components | reusable UI      |
| pages      | screens          |
| features   | grouped logic    |
| hooks      | reusable logic   |
| services   | API              |
| utils      | helper functions |
| config     | app settings     |
| constants  | fixed values     |

---
