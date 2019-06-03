import React from 'react';
import { shallow } from 'enzyme';
import ClosureTask from '../components/ClosureTask';

describe("Component works fine", () => {
  it("Render ClosureTask to DOM", () => {
    shallow(<ClosureTask />)
  });
})