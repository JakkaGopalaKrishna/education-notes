Redux Toolkit (RTK) is the modern standard for writing Redux logic
. Beyond basic store setup and slices, it includes several advanced features designed to handle real-world application needs like async data fetching, performance optimization, and debugging. 

1. **Handling Async Logic (createAsyncThunk) :**
While createSlice is for synchronous updates, createAsyncThunk is used for "side effects" like fetching data from an API. 

    What it does: It automatically dispatches actions for the three stages of a request: pending, fulfilled, and rejected.
    How to use it: You define the thunk outside your slice and handle its results in the extraReducers field of your createSlice. 

2. **RTK Query (Advanced Data Fetching)**
RTK Query is an optional but powerful tool built into the package that eliminates the need to write most thunks or reducers for API calls. 

    Features: It provides automatic caching, loading/error state tracking, and auto-refetching.
    Benefit: Instead of manual state management, you define your API endpoints, and it automatically generates React hooks (like useGetUsersQuery) for you to use in components. 

3. **Redux DevTools Integration**
RTK automatically configures the Redux DevTools Extension. 

    Time-Travel Debugging: You can see every action dispatched, inspect the payload, and "step back" in time to see exactly how your state changed at any moment. 

4. **Normalized Data (createEntityAdapter)**
For complex apps with nested data (like lists of posts and users), createEntityAdapter helps manage your state like a database. 

    CRUD Operations: It provides pre-built "case reducers" for common tasks like addOne, removeOne, and setAll, keeping your state flat and fast to query. 

5. **Memoized Selectors (createSelector)**
RTK re-exports createSelector from the Reselect library. 

    Performance: These selectors only recalculate when the specific part of the state they watch actually changes, preventing unnecessary re-renders in large applications. 

Would you like to see a code example of createAsyncThunk for fetching data from an API?


---
---
Got it 👍 — you want **simple + clear flow**:
👉 **How to CREATE Redux → INTEGRATE → USE in React**

---

# ⚛️ Step 1: Install Redux

Use **Redux Toolkit + React Redux**

```bash
npm install @reduxjs/toolkit react-redux
```

---

# 🏗️ Step 2: Create Store

```js
// store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

---

# 🧠 Step 3: Create Slice

```js
// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

---

# 🔗 Step 4: Integrate with React

Wrap your app using **Provider**

```js
// main.jsx or index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

👉 Now Redux is connected to your app ✅

---

# ⚙️ Step 5: Use Redux in Component

```js
// App.jsx
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>
        +
      </button>

      <button onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
}

export default App;
```

---

# 🔁 Full Flow (Very Important)

1. Click button
2. `dispatch(increment())`
3. Slice reducer updates state
4. Store updates
5. `useSelector` gets new value
6. UI re-renders

---

# 🧩 One-Line Understanding

* **createSlice → define logic**
* **store → combine all slices**
* **Provider → connect React**
* **useSelector → read data**
* **useDispatch → update data**

---

# 🚀 Ultra Short Summary

```text
Install → Create Slice → Create Store → Wrap Provider → Use in Component
```

---
---
Perfect 🔥 — now you’re entering **real-world Redux**
Let’s learn **API calls using `createAsyncThunk`** in the cleanest way.

---

# ⚛️ What is `createAsyncThunk`?

👉 From Redux Toolkit

It helps you:

* Call APIs 🌐
* Handle loading ⏳
* Handle success ✅
* Handle error ❌

---

# 🧠 Goal Example

We will:
👉 Fetch users from API
👉 Store in Redux
👉 Show in UI

API:

```id="9z96tq"
https://jsonplaceholder.typicode.com/users
```

---

# 🏗️ Step 1: Create Async Thunk

```js id="e0g3r8"
// userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 🔥 API CALL
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.json();
  }
);
```

---

# 🧩 Step 2: Create Slice with extraReducers

```js id="4mjmlq"
const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},

  // 🔥 HANDLE API STATES
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch users";
      });
  },
});

export default userSlice.reducer;
```

---

# 🏗️ Step 3: Add to Store

```js id="j6yzq0"
// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
```

---

# ⚙️ Step 4: Use in React Component

```js id="hyc8xt"
// Users.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

export default function Users() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.users
  );

  // 🔥 CALL API
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
```

---

# 🔁 Full Flow (VERY IMPORTANT)

```text
dispatch(fetchUsers())
        ↓
pending → loading = true
        ↓
API call happens
        ↓
fulfilled → data stored
        ↓
UI updates
```

---

# 🧠 Key Understanding

### 🔹 `createAsyncThunk` creates 3 actions:

* `pending`
* `fulfilled`
* `rejected`

👉 You handle them in **extraReducers**

---

# ⚡ Pro Tips

✅ Always store:

* `loading`
* `error`
* `data`

✅ Use `useEffect` to call API once

✅ Keep API logic inside thunk (clean code)

---

# 🚀 Real Project Use (Important for YOU)

For your **GitHub Explorer project**, you can:

```js id="c3g7kl"
export const fetchRepos = createAsyncThunk(
  "repos/fetchRepos",
  async (username) => {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    return res.json();
  }
);
```

---

# 🧩 Ultra Short Summary

```text
createAsyncThunk → API call
extraReducers → handle states
dispatch → trigger API
useSelector → get data
```

---
---

## ✅ 1. MUTATING methods (safe directly in state)

> These modify the original array → Immer tracks them ✅

* ✔ You can use directly:
```javascript
state.cart.push(item)
state.cart.pop()
state.cart.splice(index, 1)
state.cart.shift()
state.cart.unshift(item)
state.cart.sort()
state.cart.reverse()
```

> 👉 These are best for Redux Toolkit