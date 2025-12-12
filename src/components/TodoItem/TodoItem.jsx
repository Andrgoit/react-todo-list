import { Modal } from "@/components";
import { useState } from "react";

export default function TodoItem({
  todo,
  ChangeTodo,
  DeleteTodo,
  CompletedTodo,
}) {
  const { id, title, text, completed } = todo;
  const [isOpen, setIsOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(() => title);
  const [newText, setNewText] = useState(() => text);
  const [newCompleted, setNewCompleted] = useState(() => completed);

  const CloseModal = () => {
    setIsOpen(!isOpen);
  };

  const HandlerSubmit = (e) => {
    e.preventDefault();

    const updatedTodo = {
      id,
      title: newTitle,
      text: newText,
      completed: newCompleted,
    };

    ChangeTodo(updatedTodo);
    CloseModal();
  };

  return (
    <div className="border p-1">
      <p>Title: {title ? title : "no title"}</p>
      <p>Text: {text ? text : "no text"}</p>
      <p>completed:{completed ? "true" : "false"}</p>
      <button className="border p-1" onClick={CloseModal}>
        Edit
      </button>
      <button className="border p-1" onClick={() => DeleteTodo(id)}>
        Delete
      </button>
      <button className="border p-1" onClick={() => CompletedTodo(id)}>
        Completed!
      </button>
      {isOpen && (
        <Modal CloseModal={CloseModal}>
          <form className="flex flex-col bg-white">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="title"
            />
            <input
              type="text"
              placeholder="message"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
            <input
              type="checkbox"
              name="completed"
              checked={newCompleted}
              onChange={() => setNewCompleted(!newCompleted)}
            />
            <button onClick={HandlerSubmit}>Apply</button>
          </form>
        </Modal>
      )}
    </div>
  );
}
