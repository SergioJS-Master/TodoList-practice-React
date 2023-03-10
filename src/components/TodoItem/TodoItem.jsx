/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from "classnames";
import { useState } from "react";
import { useTodoListMethodsContext } from "../../contexts/TodoListContextProvider";
import { DeleteTodoModal } from "./Modals/DeleteTodoModal/DeleteTodoModal";
import { EditTodoModal } from "./Modals/EditTodoModal/EditTodoModal";
import styles from "./todoItem.module.css";

export function TodoItem({ title, id, index, completed }) {
  const { changeStatusTodo } = useTodoListMethodsContext();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openDeleteModalHandler = () => {
    setIsDeleteModalOpen(true);
  };

  const openEditModalHandler = () => {
    setIsEditModalOpen(true);
  };

  const completeHandler = () => {
    changeStatusTodo(id);
  };

  return (
    <li className={styles.listGroupItem}>
      <span className={completed ? styles.done : ""}>
        {index + 1}. {title}
      </span>
      <div>
        <button
          onClick={openEditModalHandler}
          type="button"
          className={classNames("btn", "mx-2", "btn-warning")}
        >
          Редактировать задачу
        </button>
        <button
          onClick={completeHandler}
          type="button"
          className={classNames(
            "btn",
            "mx-2",
            { "btn-success": completed },
            { "btn-primary": !completed }
          )}
        >
          {completed ? "Завершена" : "Не завершена"}
        </button>
        <button
          onClick={openDeleteModalHandler}
          type="button"
          className="btn btn-danger"
        >
          Удалить
        </button>
      </div>
      <DeleteTodoModal
        isOpen={isDeleteModalOpen}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        title={title}
        id={id}
      />
      <EditTodoModal
        isOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        title={title}
        id={id}
      />
    </li>
  );
}
