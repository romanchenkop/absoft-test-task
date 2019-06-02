import LoginForm from '../components/LoginForm'
import React from 'react';
import ReactDOM from 'react-dom';

it("renders without any errors", () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginForm />, div);
})