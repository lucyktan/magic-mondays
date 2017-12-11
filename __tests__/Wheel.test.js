import React from 'react';
import Wheel from '../src/js/components/Wheel';
import {configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import renderer from 'react-test-renderer';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const rendered = renderer.create(<Wheel />).toJSON();
  expect(rendered).toBeTruthy();
});

it('animates', () => {
  Math.random = jest.fn(() => 1);
  let wheelComponent = shallow(<Wheel />);
  wheelComponent.setState({ buttonClicked: true});
  // expect(wheelComponent).toBeTruthy();
})