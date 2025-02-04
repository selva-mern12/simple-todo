import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here deleteTodo

class SimpleTodos extends Component {
  state = {userTodoList: initialTodosList}

  deleteTodo = id => {
    const {userTodoList} = this.state
    const filterTodo = userTodoList.filter(eachTodo => eachTodo.id !== id)
    this.setState({userTodoList: filterTodo})
    console.log(id)
  }

  render() {
    const {userTodoList} = this.state
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1>Simple Todos</h1>
          <ul>
            {userTodoList.map(todo => (
              <TodoItem
                todo={todo}
                key={todo.id}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
