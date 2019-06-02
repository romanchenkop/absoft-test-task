import React from 'react';
import LoginForm from './components/LoginForm';
import './styles/App.css';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'
import ClosureTask from './components/ClosureTask';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <ProtectedRoute exact path="/protected" component={ClosureTask} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
}

export default App;