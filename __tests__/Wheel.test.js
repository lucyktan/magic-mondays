import React from 'react';
import Wheel from '../src/js/components/Wheel';
import {configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Wheel />).toJSON();
  expect(rendered).toBeTruthy();
});

it('animates', () => {
  Math.random = jest.fn(() => 1);
  let wheelComponent = shallow(<Wheel />);
  wheelComponent.setState({ buttonClicked: true});
  expect(wheelComponent).toBeTruthy();
})