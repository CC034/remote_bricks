import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'; // Correct import
import todoReducer from './TodoReducer';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Correct middleware setup
});
