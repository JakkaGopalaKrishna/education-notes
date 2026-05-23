```bash
npm create vite@latest ReactReview
cd ReactReview
npm install
npm run dev
Ctrl+c 
npm install antd --save
npm install tailwindcss @tailwindcss/vite
npm install axios
npm install react-router-dom
```

```javaScript
//vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
})
```
```CSS
//index.css
@import "tailwindcss";
/* Define the order: Reset < AntD < Utilities */
@layer tailwind-base, antd, tailwind-utilities;

@layer tailwind-base {
  @tailwind base;
}

@tailwind components;

@layer tailwind-utilities {
  @tailwind utilities;
}

```

import { createSlice } from "@reduxjs/toolkit";
import {configureStore} from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { Drawer,Badge, Button, Flex } from 'antd';
