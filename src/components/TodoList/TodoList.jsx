import { TodoItem } from "@/components";
import styles from "@/components/TodoList/TodoList.module.css";

export default function TodoList({
  todos,
  ChangeTodo,
  DeleteTodo,
  CompletedTodo,
}) {
  console.log("todos", todos);

  const elements = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      ChangeTodo={ChangeTodo}
      DeleteTodo={DeleteTodo}
      CompletedTodo={CompletedTodo}
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
