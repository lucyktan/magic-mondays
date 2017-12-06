import React from 'react';
import App from './App';
import ReactTestUtils from 'react-test-utils';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
