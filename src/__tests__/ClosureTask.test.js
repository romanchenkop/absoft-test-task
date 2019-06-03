import React from 'react';
import { shallow } from 'enzyme';
import ClosureTask from '../components/ClosureTask';


test("ClosureTask Page renders to DOM", () => {
  shallow(<ClosureTask />)
})