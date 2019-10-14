import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import './style.scss'
import {GoCheck, GoX} from 'react-icons/go'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: [],
      completed: [],
      showAll: true,
      showCompleted: false,
      showIncomplete: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/todos')
      .then(res => this.setState({
        todos: res.data.sort((a,b) => (a.id < b.id) ? 1 : -1),
        completed: res.data.filter(todo => todo.completed)
      })
      )
  }

  handleClick(e) {
    this.setState({
      showAll: false,
      showCompleted: false,
      showIncomplete: false,
      [e.target.value]: true
    })
  }

  render() {
    console.log(this.state)
    if (this.state.todos.length === 0) return <h1>Loading...</h1>
    return (
      <div>
        <h1>To Do List</h1>
        <p>Total: {this.state.todos.length}</p>
        <p>Completed: {this.state.completed.length}</p>

        {!this.state.showAll ? <button value="showAll" onClick={this.handleClick}>Show all</button> : null}

        {!this.state.showCompleted ? <button value="showCompleted" onClick={this.handleClick}>Show completed tasks</button> : null}

        {!this.state.showIncomplete ? <button value="showIncomplete" onClick={this.handleClick}>Show still to complete</button> : null}

        {this.state.todos.map(todo =>
          <div key={todo.id} className={(todo.completed ? 'complete' : 'incomplete')} style={{display: this.state.showCompleted && !todo.completed || this.state.showIncomplete && todo.completed ? 'none' : null }}>
            <li key={todo.id} >{todo.title} </li>
            {(todo.completed ? <GoCheck /> : <GoX /> )}
          </div>
        )}

      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
