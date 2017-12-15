import React from 'react';
import {Animated,Easing,TouchableOpacity,Button,Image,StyleSheet, Text, View } from 'react-native';
jest.mock("Dimensions");
import ScreenGame from '../src/js/ScreenGame';
import renderer from 'react-test-renderer';
import {mount,configure, shallow } from 'enzyme';


it('renders without crashing', () => {
  let navigation = {
    state: {
        key: 'id-1512512594799-2',
        params: {
	      screen: 'Screen Game',
  	  },
        routeName: 'ScreenGame',
      }
    };

  // const rendered = renderer.create(<ScreenGame navigation={navigation}/>).toJSON();
  const wrapper = shallow(<ScreenGame navigation={navigation}/>);
  wrapper.instance().done(729);
  wrapper.instance().done(73);
  wrapper.instance().done(145);
  wrapper.instance().done(217);
  wrapper.instance().done(289);

  // wrapper.find('TouchableHighlight').first().simulate('click');
  expect(wrapper).toMatchScreenshot();
});
