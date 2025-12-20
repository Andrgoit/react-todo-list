import { useEffect, useState } from "react";
import { Footer, Header, AddTodoBtn, TodoList } from "@/components";
import "./index.css";

import getTodos from "@/api/getTodos";
import addTodo from "@/api/addTodo";
import deleteTodo from "@/api/deleteTodo";
import updateTodo from "@/api/updateTodo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchingTodos = async () => {
      try {
        const data = await getTodos();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchingTodos();
  }, []);

  const AddTodo = async (todo) => {
    try {
      const response = await addTodo(todo);
      setTodos((prev) => [...prev, response]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const UpdateTodo = async (id, newTodo) => {
    try {
      const response = await updateTodo(id, newTodo);
      setTodos((prev) =>
        prev.map((todo) => (todo.id === response.id ? response : todo)),
      );
    } catch (error) {
      console.error("Error changing todo:", error);
    }
  };

  const DeleteTodo = async (id) => {
    try {
      const response = await deleteTodo(id);
      setTodos((prev) => prev.filter((todo) => todo.id !== response.id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
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
            UpdateTodo={UpdateTodo}
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
