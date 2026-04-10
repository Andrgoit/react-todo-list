import { Footer, Header, AddTodoBtn, TodoList } from "@/components";
import { ToastContainer, Bounce } from "react-toastify";
import "./index.css";

function App() {
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
            <AddTodoBtn />
          </div>
          <TodoList />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
