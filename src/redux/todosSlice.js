import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      console.log("payload", payload);
    },
    deleteTodo: (state, { payload }) => {
      console.log("payload", payload);
    },
    updateTodo: (state, { payload }) => {
      console.log("payload", payload);
    },
    completeTodo: (state, { payload }) => {
      console.log("payload", payload);
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, completeTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
