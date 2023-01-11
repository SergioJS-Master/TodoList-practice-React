import classNames from 'classnames'
import { useTodoListMethodsContext } from '../../contexts/TodoListContextProvider'
import styles from './todoItem.module.css'

export function TodoItem({
  title,
  id,
  index,
  completed,
}) {
  const { changeStatusTodo, deleteTodo } = useTodoListMethodsContext()

  const completeHandler = () => {
    changeStatusTodo(id)
  }

  const deleteHandler = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className={completed ? styles.done : ''}>
        {index + 1}
        .
        {title}
      </span>

      <div>
        <button
          onClick={completeHandler}
          type="button"
          className={classNames(
            'btn',
            'mx-2',
            { 'btn-primary': !completed },
            { 'btn-success': completed },
          )}
        >
          {completed ? 'Выполнено' : 'Не выполнено'}
        </button>
        <button
          onClick={deleteHandler}
          type="button"
          className="btn btn-danger"
        >
          Удалить
        </button>
      </div>
    </li>
  )
}
