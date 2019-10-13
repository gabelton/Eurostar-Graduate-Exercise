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
      .then(res => this.setState({todos: res.data}))
  }
  render() {
    console.log(this.state)
    return (
      <h1>Hello World!</h1>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
