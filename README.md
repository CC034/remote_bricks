
# Todo List and Employee List Application with React and Redux

This project is a simple web application built with React, Redux, React Router, and Material UI. It fulfills the following assignment requirements:

**Assignment Objectives:**

Create a web application with two main features:

1.  **Todo List:** A fully functional todo list application allowing users to add, view, edit, delete, toggle completion status, and clear all todo items. The todo list's state should be managed using Redux and Redux Thunk.
2.  **Employee List:** A page that displays a list of employees fetched from a public API using `axios`.

**Technologies Used:**

*   **React:** A JavaScript library for building user interfaces.
*   **React Router:** A standard library for routing in React applications.
*   **Redux:** A predictable state container for JavaScript apps.
*   **Redux Toolkit:** Simplifies Redux development with utilities for store setup, reducer creation, and more.
*   **Redux Thunk:** A middleware for Redux that allows writing action creators that return functions (thunks), enabling asynchronous logic.
*   **Material UI (MUI):** A popular React UI framework that provides pre-designed components and styling.
*   **Axios:** A promise-based HTTP client for making API requests.

**Features Implemented (with Code Locations):**

**Todo List (Implemented in `Todo.jsx` and `store/TodoReducer.js`):**

*   **Add Todo:**
    *   **Implementation:** The `handleSubmit` function in `Todo.jsx` dispatches the `addTodo` action (defined in `store/TodoReducer.js`).
    *   **Code Location:** `Todo.jsx` (handleSubmit function), `store/TodoReducer.js` (addTodo reducer)
*   **View Todos:**
    *   **Implementation:** The `todoList` is accessed from the Redux store using `useSelector` in `Todo.jsx` and mapped over to render list items.
    *   **Code Location:** `Todo.jsx` (JSX rendering the list), `store/TodoReducer.js` (initial state and updates)
*   **Edit Todo:**
    *   **Implementation:** The `handleEdit` function sets the `isEditing` state and populates the input field. The `handleSubmit` function dispatches the `editTodo` action.
    *   **Code Location:** `Todo.jsx` (handleEdit and handleSubmit functions), `store/TodoReducer.js` (editTodo reducer)
*   **Delete Todo:**
    *   **Implementation:** The `handleDelete` function dispatches the `deleteTodo` action.
    *   **Code Location:** `Todo.jsx` (handleDelete function), `store/TodoReducer.js` (deleteTodo reducer)
*   **Toggle Completion:**
    *   **Implementation:** The `handleToggle` function dispatches the `toggleTodo` action.
    *   **Code Location:** `Todo.jsx` (handleToggle function), `store/TodoReducer.js` (toggleTodo reducer)
*   **Clear All:**
    *   **Implementation:** The "Clear All" button's `onClick` handler dispatches the `clearTodo` action.
    *   **Code Location:** `Todo.jsx` (button onClick), `store/TodoReducer.js` (clearTodo reducer)
*   **Local Storage Persistence:**
    *   **Implementation:** The `useEffect` hook in `Todo.jsx` saves the `todoList` to local storage whenever it changes.
    *   **Code Location:** `Todo.jsx` (useEffect hook)
*   **Redux State Management:**
    *   **Implementation:** All todo state is managed by the Redux store and the `todoReducer`.
    *   **Code Location:** `store/Store.js`, `store/TodoReducer.js`
*   **Redux Thunk Middleware:**
    *   **Implementation:** Thunk middleware is configured in `store/Store.js`.
    *   **Code Location:** `store/Store.js`

**Employee List (Implemented in `components/EmployeeList.jsx`):**

*   **API Data Fetching:**
    *   **Implementation:** `axios.get` is used in a `useEffect` hook to fetch data.
    *   **Code Location:** `components/EmployeeList.jsx` (useEffect hook)
*   **Display Employee List:**
    *   **Implementation:** The fetched employee data is mapped over and rendered using MUI components.
    *   **Code Location:** `components/EmployeeList.jsx` (JSX rendering the list)
*   **Loading State:**
    *   **Implementation:** A loading indicator (`CircularProgress`) is displayed while fetching data.
    *   **Code Location:** `components/EmployeeList.jsx` (conditional rendering)
*   **Error Handling:**
    *   **Implementation:** An error message is displayed if the API request fails.
    *   **Code Location:** `components/EmployeeList.jsx` (conditional rendering)

**Routing (Implemented in `App.js`):**

*   **Implementation:** `react-router-dom`'s `BrowserRouter`, `Routes`, and `Route` components are used to define routes. `Link` components are used for navigation.
*   **Code Location:** `App.js`
**Features Implemented:**

**Todo List:**

*   **Add Todo:** Users can add new todo items by typing text in the input field and clicking the "Add" button (or pressing Enter).
*   **View Todos:** All added todo items are displayed in a list.
*   **Edit Todo:** Users can edit existing todo items by clicking the edit icon, modifying the text, and submitting the change.
*   **Delete Todo:** Users can delete todo items by clicking the delete icon.
*   **Toggle Completion:** Users can mark todo items as complete or incomplete by clicking the checkboxes.
*   **Clear All:** Users can clear all todo items from the list by clicking the "Clear All" button.
*   **Local Storage Persistence:** The todo list is saved to local storage, so it persists across page refreshes.
*   **Redux State Management:** The state of the todo list is managed using Redux and Redux Toolkit.
*   **Redux Thunk Middleware:** Redux Thunk is configured in the store for handling asynchronous actions (although the current todo operations are synchronous).

**Employee List:**

*   **API Data Fetching:** Employee data is fetched from the Random User API (`https://randomuser.me/api/?results=10`) using `axios`.
*   **Display Employee List:** The fetched employee data (name, email, picture) is displayed in a list using MUI components.
*   **Loading State:** A loading indicator is displayed while the data is being fetched.
*   **Error Handling:** An error message is displayed if the API request fails.

**Routing:**

*   The application uses React Router to navigate between the "Todo List" (path `/`) and the "Employee List" (path `/employees`).

**Setup and Usage:**

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd <project-directory>
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

4.  **Start the development server:**

    ```bash
    npm start
    # or
    yarn start
    ```

5.  Open your browser at `http://localhost:3000`.

**Key Improvements and Corrections:**

*   Corrected import/export issues between components, reducer, and store.
*   Used Redux Toolkit's `configureStore` and `getDefaultMiddleware` for proper store setup and middleware application (including Redux Thunk).
*   Corrected file paths and naming inconsistencies.
*   Added loading state handling in the `Todo` component to prevent errors when the Redux store is initially empty.
*   Improved the `handleEdit` function in the `Todo` component to correctly populate the text input during editing.

