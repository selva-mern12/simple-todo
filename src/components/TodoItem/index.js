import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo, editTodo, completeTase} = props
  const {title, id, completed} = todo
  const [todoEdit, setTodoEdit] = useState(false)
  const [userText, setUserEdit] = useState(title)
  const todoSave = () => {
    setTodoEdit(prevTodo => !prevTodo)
    editTodo(id, userText)
  }
  return (
    <li>
      {!todoEdit ? (
        <div className="checkbox-task">
          <input
            type="checkbox"
            id={`checkbox-${id}`}
            checked={completed}
            onChange={() => completeTase(id)}
          />
          <label
            htmlFor={`checkbox-${id}`}
            className={completed ? 'complete' : ''}
          >
            <p>{title}</p>
          </label>
        </div>
      ) : (
        <input
          className="user-input"
          type="text"
          value={userText}
          onChange={event => setUserEdit(event.target.value)}
        />
      )}
      <div className="todo-buttons">
        {!todoEdit ? (
          <button
            type="button"
            onClick={() => setTodoEdit(prevTodo => !prevTodo)}
            className="delete-button edit-button"
          >
            Edit
          </button>
        ) : (
          <button
            type="button"
            onClick={todoSave}
            className="delete-button edit-button"
          >
            Save
          </button>
        )}
        <button
          type="button"
          onClick={() => deleteTodo(id)}
          className="delete-button"
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
