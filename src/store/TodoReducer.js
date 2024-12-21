import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todoList: JSON.parse(localStorage.getItem('list')) || []
}
// Example with an API
export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_TODOS_REQUEST' }); // Dispatch a "loading" action
    try {
      const response = await fetch('/api/todos');
      const todos = await response.json();
      dispatch({ type: 'FETCH_TODOS_SUCCESS', payload: todos });
    } catch (error) {
      dispatch({ type: 'FETCH_TODOS_FAILURE', payload: error.message });
    }
  };
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: uuidv4(),
                text: action.payload,
                completed: false
            }
            state.todoList.push(newTodo);
        },
        editTodo: (state, action) => {
            const { id, text } = action.payload;
            const todoToEdit = state.todoList.find((todo) => todo.id === id);
            if (todoToEdit) {
                todoToEdit.text = text;
            }
        },
        deleteTodo: (state, action) => {
            state.todoList = state.todoList.filter((item) => item.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.todoList.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        clearTodo: (state) => {
            state.todoList = [];
        }
    }
})

export const { addTodo, editTodo, clearTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
