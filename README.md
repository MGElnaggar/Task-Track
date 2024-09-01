# Task Track Project

Welcome to my Task Track Project. This project allows users to manage tasks with a dynamic todo list, fetch data using a custom useFetch hook, and register with a validated form, ensuring efficient task tracking and data management.

## Features

### 1. Dynamic Todo List
- **Form to Add Todos**: Includes fields for title and description.
- **Todo List**: Display todos with options to mark them as completed or delete them.
- **Filter Options**: View all todos, only completed todos, or only incomplete todos.
- **Local Storage**: Persist todos so they are retained after a page refresh.
- **Validation**: Basic validation to ensure both title and description are provided before adding a todo.

### 2. Custom Hook - `useFetch`
- **Data Fetching**: Handles data fetching from a public API using `fetch`.
- **Loading and Error States**: Provides loading indicators and error messages based on the state.

### 3. Responsive Navigation Menu
- **Navigation Links**: Includes Home, About, Contact, and Registration links.
- **Responsive Design**: Hamburger menu for smaller screens and logo or title for larger screens.
- **CSS Modules**: Used for styling to ensure scoped and maintainable styles.

### 4. Registration Form with Validation
- **Fields**: Full Name, Email, Password (with confirmation), and Agree to Terms checkbox.
- **Client-Side Validation**: Ensures Full Name is not empty, Email is valid, Passwords match, and Terms checkbox is checked before submission.

### 5. Performance Optimization
- **Component Optimization**: Improved rendering performance for components with a large list of items or expensive computations using `React.memo`, `useMemo`, or `useCallback`.
- **Performance Analysis**: Explanation of optimizations and comparison of performance metrics.

## Component Breakdown

### 1. `TodoList.tsx`
- **Technologies Used**:
  - **useState, useEffect**: For managing state and side effects.
  - **useCallback**: To memoize functions (`handleToggleComplete`, `handleDeleteTodo`) to avoid unnecessary re-renders.
  - **useMemo**: To optimize the filtering of todos based on the selected filter.
- **Why These Technologies**:
  - **React Hooks**: Simplify state management and side effects.
  - **useCallback & useMemo**: Enhance performance by avoiding unnecessary re-renders and recalculations.

### 2. `Registration.tsx`
- **Technologies Used**:
  - **useState**: For managing form inputs and validation states.
  - **useNavigate**: For programmatic navigation after form submission.
  - **Regular Expressions**: For validating email and password formats.
- **Why These Technologies**:
  - **React Hooks**: Manage form state and handle input changes efficiently.
  - **Regular Expressions**: Ensure email and password adhere to required formats.
  - **useNavigate**: Allows navigation to different routes upon successful form submission.

### 3. `NavigationMenu.tsx`
- **Technologies Used**:
  - **useState**: To manage the state of the hamburger menu (open/closed).
  - **useNavigate**: For routing navigation when links are clicked.
- **Why These Technologies**:
  - **React Hooks**: Manage menu state and navigation in a functional component.

### 4. `PostsList.tsx`
- **Technologies Used**:
  - **useFetch**: Custom hook for data fetching.
- **Why These Technologies**:
  - **useFetch**: Encapsulates data fetching logic and state management, making the component cleaner and easier to maintain.

### 5. `useFetch.tsx`
- **Technologies Used**:
  - **useState, useEffect**: For managing data fetching state and side effects.
  - **fetch API**: For retrieving data from an external API.
- **Why These Technologies**:
  - **useState & useEffect**: Manage the data fetching lifecycle and handle asynchronous operations.
  - **fetch API**: Provides a straightforward method for making HTTP requests and handling responses.
