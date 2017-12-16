import 'react-native';
import React from 'react';
jest.mock('NativeModules', () => {
  return {
    UIManager: {
      Constants:{
        ScaleNone: 0
      }
    }
  };
});
// import {Video} from 'expo';
import ScreenPrize from '../src/js/ScreenPrize';

import {configure, shallow, mount } from 'enzyme';

import renderer from 'react-test-renderer';

it('renders correctly', () => {

    let navigation = {
    state: {
        key: 'id-1512512594799-2',
        params: {
	      screen: 'Screen Prize',
        user: 'prize'
  	  },
        routeName: 'ScreenPrize',
      }
    };
  const tree = renderer.create(<ScreenPrize navigation={navigation} />).toJSON();
  expect(tree).toMatchSnapshot();
});



  it('Presses to the next page', () => {

    let navigation = {
      state: {
          key: 'id-1512512594799-2',
          params: {
          screen: 'Screen Prize',
          user: 'prize'
        },
          routeName: 'ScreenPrize',
        },
      navigate: jest.fn()
    };

    
    const rendered = mount(
    	<ScreenPrize navigation={navigation}/>
    );
    rendered.find('TouchableHighlight').first().props().onPress();    
    
  });