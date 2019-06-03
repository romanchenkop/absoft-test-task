import React from 'react';
import LoginForm from './components/LoginForm';
import './styles/App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ClosureTask from './components/ClosureTask';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/protected" component={ClosureTask} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;