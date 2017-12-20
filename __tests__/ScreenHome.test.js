import {View} from 'react-native';
import React from 'react';
import { mount, shallow } from 'enzyme';
import ScreenHome from '../src/js/ScreenHome';
import renderer from 'react-test-renderer';

describe('ScreenHome', () => {
  it('Page rendered', () => {

    let navigation = {
    state: {
        key: 'id-1512512594799-2',
        params: {
	      screen: 'Screen Home',
        user: 'prize'
  	  },
        routeName: 'ScreenHome',
      }
    };
    const rendered = shallow(
    	<ScreenHome navigation={navigation}/>
    );
    expect(rendered).toMatchSnapshot();
  });


  it('Presses to the next page', () => {

    let navigation = {
    state: {
        key: 'id-1512512594799-2',
        params: {
	      screen: 'Screen Home',
        user: 'prize'
  	  },
        routeName: 'ScreenHome',
      },
    navigate: jest.fn()
    };
    const rendered = mount(
    	<ScreenHome navigation={navigation}/>
    );
    rendered.find('TouchableHighlight').first().props().onPress();    
    expect(navigation.navigate).toBeCalled();
  });
});