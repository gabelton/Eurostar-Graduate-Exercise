import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/todos')
      .then(res => this.setState({
        todos: res.data.sort((a,b) => (a.id < b.id) ? 1 : -1),
        completed: res.data.filter(todo => todo.completed)
      }))
  }
  render() {
    console.log(this.state)
    if (this.state.todos.length === 0) return <h1>Loading...</h1>
    return (
      <div>
        <h1>Hello World!</h1>

        {this.state.todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
        <p>{this.state.completed.length}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
