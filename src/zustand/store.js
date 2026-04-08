import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-toastify";

const initialState = { todos: [] };

export const useTodosStore = create(
  persist(
    (set) => ({
      ...initialState,
      addTodo: (todo) =>
        set((state) => {
          toast.success("The task added!");
          return { todos: [...state.todos, todo] };
        }),
      updateTodo: (id, newTodo) =>
        set(({ todos }) => {
          toast.info("The task updated!");
          return {
            todos: todos.map((todo) => (todo.id === id ? newTodo : todo)),
          };
        }),
      deleteTodo: (id) =>
        set(({ todos }) => {
          toast.info("The task deleted!");
          return { todos: todos.filter((todo) => todo.id !== id) };
        }),
      completeTodo: (id) =>
        set(({ todos }) => ({
          todos: todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo,
          ),
        })),
    }),
    { name: "todos" },
  ),
);
