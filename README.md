# Argos UI

Argos UI front end project with React JS + TS.

## Usage

To install the required dependencies, run:

```bash
npm i
```

To run the project on port 5173:

```bash
npm run dev
```

Open `http://localhost:5173`

To run the tests:

```bash
npm test
```

**Format Code**

To automatically format the code according to Prettier's rules, run:

```bash
npm run prettier:write
```

## Project Structure

Folder Structure:

```
argosui/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── setupTests.ts
│   ├── vite-env.d.ts
├── .eslintrc.json
├── .prettierrc
├── tsconfig.json
├── package.json
└── README.md
```

### 1. Components

For components that will be reused

Component Structure:

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   ├── Button.module.css
│   │   └── index.ts
│   ├── Header/
│   │   ├── Header.tsx
│   │   ├── Header.test.tsx
│   │   ├── Header.module.css
│   │   └── index.ts
```

Component Example:

```tsx
// src/components/Button/Button.tsx
import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled = false }) => (
  <button className={styles.button} onClick={onClick} disabled={disabled}>
    {text}
  </button>
);

export default Button;
```

### 2. Pages

For route-specific components or page components.

Page Structure:

```
src/
├── pages/
│   ├── Home/
│   │   ├── Home.tsx
│   │   ├── Home.test.tsx
│   │   ├── Home.module.css
│   │   └── index.ts
│   ├── About/
│   │   ├── About.tsx
│   │   ├── About.test.tsx
│   │   ├── About.module.css
│   │   └── index.ts
```

### 3. Hooks

For custom hooks with reusable login

Hooks Structure:

```
src/
├── hooks/
│   ├── useFetch.ts
│   ├── useAuth.ts
```

Custom Hook Example:

```ts
// src/hooks/useFetch.ts
import { useState, useEffect } from "react";

const useFetch = <T>(
  url: string,
): { data: T | null; error: string | null; loading: boolean } => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
```

### 4. Services

For API calls and other external services.

Services Structure:

```
src/
├── services/
│   ├── api.ts
```

Service Example:

```ts
// src/services/api.ts
const API_URL = "https://api.example.com";

export const fetchUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
```

### 5. Types

To define and export TypeScript types in the types directory.

Types Structure:

```
src/
├── types/
│   ├── index.ts
```

Types Example:

```ts
// src/types/index.ts
export interface User {
  id: number;
  name: string;
  email: string;
}
```

### 6. Utilities

For utility functions and helpers in the utils directory.

Utilities Structure:

```
src/
├── utils/
│   ├── formatDate.ts
│   ├── calculateAge.ts
```

Utility Example:

```ts
// src/utils/formatDate.ts
export const formatDate = (date: Date): string => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
```

### 7. Styling

Use CSS Modules for component-specific styles and organize global styles in a separate directory.

CSS Module Example:

```css
/* src/components/Button/Button.module.css */
.button {
  background-color: blue;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
}
```

Global Styles:

```
src/
├── assets/
│   ├── styles/
│   │   ├── global.css
```
