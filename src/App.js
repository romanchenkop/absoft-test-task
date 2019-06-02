import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import './styles/App.css';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute'

class App extends Component {



  render() {
    return (
      <div className="login-form-block">
        <Route path="/" component={LoginForm} />
        <img
          className="background-image"
          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/full%20page/img(11).jpg"
          alt="nature-background" />
        <Route exact path="/protected" component={ProtectedRoute} />
      </div>
    )
  }
}

export default App;