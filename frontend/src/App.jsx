import { useEffect, useState } from "react";
import { Footer, Header, AddTodoBtn, TodoList } from "@/components";
import "./index.css";

import { ToastContainer, Bounce, toast } from "react-toastify";

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
        toast.error(`${error.message}`);
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
      toast.error(`${error.message}`);
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
      toast.error(`${error.message}`);
      console.error("Error changing todo:", error);
    }
  };

  const DeleteTodo = async (id) => {
    try {
      const response = await deleteTodo(id);
      setTodos((prev) => prev.filter((todo) => todo.id !== response.id));
    } catch (error) {
      toast.error(`${error.message}`);
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
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
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
            CompletedTodo={CompletedTodo}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
