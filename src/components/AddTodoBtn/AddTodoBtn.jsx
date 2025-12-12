import { useState } from "react";
import { Modal } from "@/components";

export default function AddTodoBtn({ AddTodo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const CloseModal = () => {
    setIsOpen(!isOpen);
  };
  const ResetForm = () => {
    setTitle("");
    setText("");
  };

  const HandlerSubmit = (e) => {
    const date = new Date();
    e.preventDefault();
    AddTodo({ id: date.getTime(), title, text, completed: false });
    ResetForm();
    CloseModal();
  };

  return (
    <div className="flex justify-center">
      <button onClick={CloseModal} className="border bg-green-500">
        Add TODO
      </button>
      {isOpen && (
        <Modal CloseModal={CloseModal}>
          <form
            onSubmit={HandlerSubmit}
            className="flex flex-col bg-white p-10"
          >
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="title"
            />
            <input
              type="text"
              placeholder="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Create TODO</button>
          </form>
        </Modal>
      )}
    </div>
  );
}
