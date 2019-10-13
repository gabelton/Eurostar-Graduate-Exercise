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
      .then(res => this.setState({todos: res.data.sort((a,b) => (a.id < b.id) ? 1 : -1)}))
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Hello World!</h1>

        {this.state.todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
