import { useState } from "react";
import { Footer, Header, AddTodoBtn, TodoList } from "@/components";
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
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <>
      <Header />
      <main className="bg-[#030712]">
        <div className="container flex flex-1 flex-col items-center">
          <div className="mb-3 mt-3 flex justify-center">
            <AddTodoBtn AddTodo={AddTodo} />
          </div>

          <TodoList
            todos={todos}
            ChangeTodo={ChangeTodo}
            DeleteTodo={DeleteTodo}
            CompletedTodo={CompletedTodo}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
