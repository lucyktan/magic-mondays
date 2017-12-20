import {View} from 'react-native';
import React from 'react';
import { mount,configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ScreenSplash from '../src/js/ScreenSplash';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import { NativeModules } from 'react-native';


describe('Screen Splash', () => {
  it('renders correctly', () => {

    let navigation = {
    state: {
        key: 'id-1512512594799-2',
        params: {
	      screen: 'Screen Splash',
        user: 'prize'
  	  },
        routeName: 'ScreenSplash',
      },
    navigate: jest.fn()
    };
    const tree = renderer.create(<ScreenSplash navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('returns the state properly', () => {

    let navigation = {
    state: {
        key: 'id-1512512594799-2',
        params: {
	      screen: 'Screen Splash',
        user: 'prize'
  	  },
        routeName: 'ScreenSplash',
      },
    navigate: jest.fn()
    };
    const rendered = mount(
    	<ScreenSplash navigation={navigation}/>
    );
    expect(rendered.state('isChecked')).toEqual(false);
    rendered.instance().checkbox();
    expect(rendered.state('isChecked')).toBe(true);
    rendered.instance().checkbox();
    expect(rendered.state('isChecked')).toBe(false);
    

  });
  it('Clicks the checkbox', () => {

    let navigation = {
    state: {
        key: 'id-1512512594799-2',
        params: {
	      screen: 'Screen Splash',
        user: 'prize'
  	  },
        routeName: 'ScreenSplash',
      },
    navigate: jest.fn()
    };
    const rendered = mount(
    	<ScreenSplash navigation={navigation}/>
    );
    expect(rendered.state('isChecked')).toEqual(false);
    rendered.find('CheckBox').first().props().onChange();
    expect(rendered.state('isChecked')).toBe(true);
    

  });
  it('Presses to the next page', () => {

    let navigation = {
    state: {
        key: 'id-1512512594799-2',
        params: {
	      screen: 'Screen Splash',
        user: 'prize'
  	  },
        routeName: 'ScreenSplash',
      },
      navigate: jest.fn()

    };
    const rendered = mount(
    	<ScreenSplash navigation={navigation}/>
    );
    expect(rendered.state('isChecked')).toEqual(false);
    expect(rendered.setState({isChecked: true}));
    rendered.find('TouchableHighlight').last().props().onPress();
    expect(navigation.navigate).toBeCalled();
  });
  it('Doesnt press to the next page', () => {

    let navigation = {
    state: {
        key: 'id-1512512594799-2',
        params: {
	      screen: 'Screen Splash',
        user: 'prize'
  	  },
        routeName: 'ScreenSplash',
      },
      navigate: jest.fn()

    };
    const rendered = mount(
    	<ScreenSplash navigation={navigation}/>
    );
    expect(rendered.state('isChecked')).toEqual(false);
    rendered.find('TouchableHighlight').first().props().onPress();
    expect(navigation.navigate).not.toBeCalled();
  });
});
