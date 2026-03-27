import { useState } from "react";
import { Footer, Header, AddTodoBtn, TodoList } from "@/components";
import "./index.css";

import { ToastContainer, Bounce, toast } from "react-toastify";

function App() {
  const [todos, setTodos] = useState([]);

  const AddTodo = async (todo) => {
    try {
      setTodos((prev) => [...prev, todo]);
      toast.success("The task added!");
    } catch (error) {
      toast.error(`${error.message}`);
      console.error("Error adding todo:", error);
    }
  };

  const UpdateTodo = async (id, newTodo) => {
    try {
      setTodos((prev) => prev.map((todo) => (todo.id === id ? newTodo : todo)));
      toast.info("The task updated!");
    } catch (error) {
      toast.error(`${error.message}`);
      console.error("Error changing todo:", error);
    }
  };

  const DeleteTodo = async (id) => {
    try {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
      toast.info("The task deleted!");
    } catch (error) {
      toast.error(`${error.message}`);
      console.error("Error deleting todo:", error);
    }
  };

  const CompleteTodo = async (id) => {
    try {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, completed: true } : todo,
        ),
      );
      toast.success("Congratulation! The task is completed!");
    } catch (error) {
      toast.error(`${error.message}`);
      console.error("Error completing todo:", error);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
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
            CompleteTodo={CompleteTodo}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
