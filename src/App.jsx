import { useState } from "react";
import { Footer, Header, AddTodoBtn, TodoList } from "./components";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);

  const AddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const ChangeTodo = (newTodo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === newTodo.id ? newTodo : todo)),
    );
  };

  const DeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const CompletedTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: true };
        }
      }),
    );
  };

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <AddTodoBtn AddTodo={AddTodo} />
        </div>
        <TodoList
          todos={todos}
          ChangeTodo={ChangeTodo}
          DeleteTodo={DeleteTodo}
          CompletedTodo={CompletedTodo}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
