import React from 'react';
import TipsCard from '../components/TipsCard';
import { shallow } from 'enzyme';
import Card from '../components/Card';

describe("TipsCard renders without warnings", () => {
  it("render Component to DOM", () => {
    shallow(<TipsCard />)
  })

  it("renders Card", () => {
    const wrapper = shallow(<TipsCard />);
    expect(wrapper).toContainReact(<Card />);
  })
})