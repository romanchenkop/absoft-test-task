import React, { Component } from 'react'
import LoginForm from './components/LoginForm'

class App extends Component {
  submit = (values) => {
    console.log(values);
  }
  render() {
    return (
      <div>
        <LoginForm onSubmit={this.submit} />
      </div>
    )
  }
}

export default App;