import React from 'react';
import LoginForm from '../components/LoginForm';
import { shallow } from 'enzyme'

test("LoginForm renders to DOM without problem", () => {
  shallow(<LoginForm />);
})