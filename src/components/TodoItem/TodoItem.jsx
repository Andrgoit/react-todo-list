import { useState } from "react";
import { Modal } from "@/components";
import { FiEdit, FiTrash, FiCheckSquare } from "react-icons/fi";

import styles from "@/components/TodoItem/TodoItem.module.css";

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

  const isDesabledButton =
    newTitle.trim() !== "" && newText.length <= 100 && newText.length > 0;

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
    <div className={styles.itemWrapper}>
      <div className={styles.itemIndicator}></div>
      <div className={styles.itemTextWrapper}>
        <p className={styles.itemTitile}>{title ? title : "No title"}</p>
        <p className={styles.itemMessage}>{text ? text : "No message"}</p>
        <p>{completed ? "Completed!" : ""}</p>
      </div>
      <div className={styles.itemButtonsWrapper}>
        <button
          className={styles.editButton}
          onClick={CloseModal}
          title="Edit task"
        >
          <FiEdit size={28} />
        </button>
        <button
          className={styles.deleteButton}
          onClick={() => DeleteTodo(id)}
          title="Delete task"
        >
          <FiTrash size={28} />
        </button>
        <button
          className={styles.completedButton}
          onClick={() => CompletedTodo(id)}
          title="Task completed!"
        >
          <FiCheckSquare size={28} />
        </button>
      </div>

      {isOpen && (
        <Modal CloseModal={CloseModal}>
          <div className={styles.formWrapper}>
            <form className={styles.form}>
              <input
                type="text"
                autoFocus
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Title"
                className={styles.formInput}
              />
              <textarea
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className={styles.formTextarea}
              />
              <span
                className={
                  newText.length <= 100
                    ? `${styles.formSpan}`
                    : `${styles.formFailSpan}`
                }
              >
                {newText.length}/100
              </span>
              <label className={styles.formCheckbox}>
                Completed!
                <input
                  type="checkbox"
                  name="completed"
                  checked={newCompleted}
                  onChange={() => setNewCompleted(!newCompleted)}
                />
              </label>

              <button
                onClick={HandlerSubmit}
                className={
                  !isDesabledButton
                    ? `${styles.disabledButton}`
                    : `${styles.button}`
                }
                disabled={!isDesabledButton}
              >
                Save changes
              </button>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
}
