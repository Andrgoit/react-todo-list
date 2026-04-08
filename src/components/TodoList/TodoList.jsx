import { TodoItem } from "@/components";
import {
  useTodos,
  useUpdateTodo,
  useDeleteTodo,
  useCompleteTodo,
} from "@/zustand/selectors";
import styles from "@/components/TodoList/TodoList.module.css";

export default function TodoList() {
  const todos = useTodos();
  const updateTodo = useUpdateTodo();
  const deleteTodo = useDeleteTodo();
  const completeTodo = useCompleteTodo();

  const elements = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      UpdateTodo={updateTodo}
      DeleteTodo={deleteTodo}
      CompleteTodo={completeTodo}
    />
  ));

  return (
    <div className={styles.list}>
      {todos.length > 0 ? (
        elements
      ) : (
        <p className="flex flex-1 items-center justify-center text-gray-400">
          No tasks yet
        </p>
      )}
    </div>
  );
}
