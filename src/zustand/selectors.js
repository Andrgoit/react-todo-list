import { useTodosStore } from "@/zustand/store";

export const useTodos = () => useTodosStore((state) => state.todos);
export const addTodo = () => useTodosStore.getState().addTodo();
export const updateTodo = () => useTodosStore.getState().updateTodo();
export const deleteTodo = () => useTodosStore.getState().deleteTodo();
export const completeTodo = () => useTodosStore.getState().completeTodo();
