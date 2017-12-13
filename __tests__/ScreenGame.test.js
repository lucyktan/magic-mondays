import React from 'react';
import {Animated,Easing,TouchableOpacity,Button,Image,StyleSheet, Text, View } from 'react-native';
jest.mock("Dimensions");
import ScreenGame from '../src/js/ScreenGame';
import renderer from 'react-test-renderer';
import {configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});

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

  const rendered = renderer.create(<ScreenGame navigation={navigation}/>).toJSON();
  expect(rendered).toBeTruthy();
});

// it('should click the button',() => {
//   // const onClick = jest.fn();
//   let state = {
// 	  key: 'id-1512512594799-2',
// 	  params: {
// 	    screen: 'Screen Game',
//   	},
//      routeName: 'ScreenGame',
//    };
//   let rendered = shallow(<ScreenGame navigation={state} />);
//   rendered.find('Button').forEach(child=> {
//     child.simulate('press');
//     expect(child.onPress).toBeCalled();
//   });
//   // expect(rendered).toMatchSnapshot();
// })
