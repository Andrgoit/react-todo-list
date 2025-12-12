import { TodoItem } from "@/components";

export default function TodoList({
  todos = [],
  ChangeTodo,
  DeleteTodo,
  CompletedTodo,
}) {
  const elements = todos.map((todo) => (
    <TodoItem
      key={todo}
      todo={todo}
      ChangeTodo={ChangeTodo}
      DeleteTodo={DeleteTodo}
      CompletedTodo={CompletedTodo}
    />
  ));

  return <div>{elements}</div>;
}
