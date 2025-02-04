import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    completed: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    completed: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    completed: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    completed: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    completed: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    completed: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    completed: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    completed: false,
  },
]

// Write your code here deleteTodo

class SimpleTodos extends Component {
  state = {
    userTodoList: [],
    addTodo: false,
    userTodo: '',
    showMsg: true,
  }

  componentDidMount() {
    const savedTodo = localStorage.getItem('todo-list')
    if (!savedTodo) {
      localStorage.setItem('todo-list', JSON.stringify(initialTodosList))
      this.setState({userTodoList: initialTodosList})
    } else {
      this.setState({userTodoList: JSON.parse(savedTodo)})
    }
    setTimeout(() => this.setState({showMsg: false}), 5000)
  }

  componentDidUpdate(prevState) {
    const {userTodoList} = this.state
    if (userTodoList !== prevState.userTodoList) {
      localStorage.setItem('todo-list', JSON.stringify(userTodoList))
    }
  }

  deleteTodo = id => {
    const {userTodoList} = this.state
    const filterTodo = userTodoList.filter(eachTodo => eachTodo.id !== id)
    this.setState({
      userTodoList: filterTodo.map(todo =>
        todo.id > id ? {...todo, id: todo.id - 1} : todo,
      ),
    })
    console.log(id)
  }

  editTodo = (id, userText) => {
    this.setState(prevState => ({
      userTodoList: prevState.userTodoList.map(item =>
        item.id === id ? {...item, title: userText} : item,
      ),
    }))
  }

  saveTodo = () => {
    const {userTodo, userTodoList} = this.state
    if (userTodo !== '') {
      const id = userTodoList.length + 1
      const title = userTodo
      this.setState(prevState => ({
        userTodoList: [
          ...prevState.userTodoList,
          {id, title, completed: false},
        ],
        addTodo: false,
        userTodo: '',
      }))
    }
  }

  completeTase = id =>
    this.setState(prevState => ({
      userTodoList: prevState.userTodoList.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      ),
    }))

  render() {
    const {userTodoList, addTodo, userTodo, showMsg} = this.state
    // userTodoList.length > 0 && userTodoList.sort((a, b) => b.id - a.id)

    return (
      <div className="bg-container">
        <div className="todo-bg">
          <div className="main-container">
            <div className="heading">
              <p className="empty"> </p>
              <h1>Simple Todos</h1>
              <div className="add-todo-container">
                {addTodo ? (
                  <>
                    <input
                      className="add-todo"
                      type="text"
                      value={userTodo}
                      placeholder="Add your Task..."
                      onChange={event =>
                        this.setState({userTodo: event.target.value})
                      }
                    />

                    <button
                      type="button"
                      className="add-todo-button save-todo"
                      onClick={this.saveTodo}
                    >
                      Save Todo
                    </button>
                  </>
                ) : (
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    {showMsg && (
                      <p className="intro-msg">
                        (Sample Todos here), Add to your task
                      </p>
                    )}
                    <button
                      type="button"
                      className="add-todo-button"
                      onClick={() => this.setState({addTodo: true})}
                    >
                      Add Todo
                    </button>
                  </div>
                )}
              </div>
            </div>
            <ul className="todo-list">
              {userTodoList?.map(todo => (
                <TodoItem
                  todo={todo}
                  key={todo.id}
                  deleteTodo={this.deleteTodo}
                  editTodo={this.editTodo}
                  completeTase={this.completeTase}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
