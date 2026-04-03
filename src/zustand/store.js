import { create } from "zustand";
import { toast } from "react-toastify";

const initialState = { todos: [] };

export const useTodosStore = create((set) => ({
  ...initialState,
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  updateTodo: () => set({ bears: 0 }),
  deleteTodo: (newBears) => set({ bears: newBears }),
  completeTodo: (newBears) => set({ bears: newBears }),
}));
