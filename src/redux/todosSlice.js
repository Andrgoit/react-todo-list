import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      toast.success("The task added!");
      state.push(payload);
    },
    deleteTodo: (state, { payload }) => {
      toast.info("The task deleted!");
      return state.filter((todo) => todo.id !== payload);
    },
    updateTodo: (state, { payload }) => {
      toast.info("The task updated!");
      const id = payload.id;
      const newTodo = payload;
      return state.map((todo) => (todo.id === id ? newTodo : todo));
    },
    completeTodo: (state, { payload }) => {
      return state.map((todo) =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
      );
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, completeTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
