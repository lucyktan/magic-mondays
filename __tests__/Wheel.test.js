import React from 'react';
jest.mock('Animated', () => {
  return {
    createTimer: jest.fn(),
    timing: jest.fn(() => {
      return {
        start: jest.fn(),
      };
    }),
    event: jest.fn(),
    Value: jest.fn(() => {
      return {
        interpolate: jest.fn(),
        addListener: jest.fn(),
      };
    }),
  };
});

import Wheel from '../src/js/components/Wheel';
import {mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Wheel />).toJSON();
  expect(rendered).toBeTruthy();
});

// it('animates', () => {
  // const mockMath = Object.create(global.Math);
  // mockMath.random = () => .5;
  // globalMath = mockMath;
  // let wrapper = mount(<Wheel buttonClicked={false}/>);
  // wrapper.setProps({buttonClicked: true})
  // wrapper.instance().spinAnimation(0,7200,() => {});
  // wrapper.instance().componentWillReceiveProps({buttonClicked: true});
  // expect(wrapper).toMatchSnapshot();
// })