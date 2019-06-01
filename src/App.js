import React, { Component } from 'react'
import LoginForm from './components/LoginForm'
import './styles/App.css'
// import TipsCard from './components/TipsCard'

class App extends Component {
  submit = (values) => {
    console.log(values);
  }
  render() {
    return (

      <div className="login-form-block">
        <LoginForm onSubmit={this.submit} />
        {/* <TipsCard /> */}
        <img className="background-image" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/full%20page/img(11).jpg" alt="nature-background" />
      </div>
    )
  }
}

export default App;