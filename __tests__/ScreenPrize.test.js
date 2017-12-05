import 'react-native';
import React from 'react';
import ScreenPrize from '../ScreenPrize';
import App from '../App';
import ResponsiveImage from 'react-native-responsive-image';

import {configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<ScreenPrize />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('mimics a touch', () => {
  // const navigation = { navigate: jest.fn() };

  // expect(renderer.create(<Loading store={store} navigation={navigation} />)).toMatchSnapshot();

   let rendered = shallow(<App />);
   rendered.find('TouchableHighlight').forEach(child=> {
       child.simulate('press');
       expect(onPress.called).toEqual(true);
   });
});