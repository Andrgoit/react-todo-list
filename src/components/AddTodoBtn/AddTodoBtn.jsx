import { useState } from "react";
import { Modal } from "@/components";

import styles from "@/components/AddTodoBtn/AddTodoBtn.module.css";

export default function AddTodoBtn({ AddTodo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const isDesabledButton =
    title.trim() !== "" && text.length <= 100 && text.length > 0;

  const CloseModal = () => {
    setIsOpen(!isOpen);
  };
  const ResetForm = () => {
    setTitle("");
    setText("");
  };

  const HandlerSubmit = (e) => {
    const id = new Date().getTime();
    e.preventDefault();
    AddTodo({ id, title, text, completed: false });
    ResetForm();
    CloseModal();
  };

  return (
    <div className={styles.buttonWrapper}>
      <button onClick={CloseModal} className={styles.button}>
        Add task
      </button>
      {isOpen && (
        <Modal CloseModal={CloseModal}>
          <div className={styles.formWrapper}>
            <form onSubmit={HandlerSubmit} className={styles.form}>
              <input
                type="text"
                name="title"
                autoFocus
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className={styles.formInput}
              />
              <textarea
                placeholder="Write a message..."
                name="meassage"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className={styles.formTextarea}
              />
              <span
                className={
                  text.length <= 100
                    ? `${styles.formSpan}`
                    : `${styles.formFailSpan}`
                }
              >
                {text.length}/100
              </span>
              <button
                disabled={!isDesabledButton}
                type="submit"
                className={
                  !isDesabledButton
                    ? `${styles.disabledButton}`
                    : `${styles.button}`
                }
              >
                Create task
              </button>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
}
