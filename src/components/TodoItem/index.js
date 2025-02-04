import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo} = props
  const {title, id} = todo
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
