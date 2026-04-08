import { useTodosStore } from "@/zustand/store";

export const useTodos = () => useTodosStore((state) => state.todos);
export const useAddTodo = () => useTodosStore((state) => state.addTodo);
export const useUpdateTodo = () => useTodosStore((state) => state.updateTodo);
export const useDeleteTodo = () => useTodosStore((state) => state.deleteTodo);
export const useCompleteTodo = () =>
  useTodosStore((state) => state.completeTodo);
