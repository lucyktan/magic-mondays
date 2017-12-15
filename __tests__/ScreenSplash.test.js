import {View} from 'react-native';
import React from 'react';
import { mount,configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ScreenSplash from '../src/js/ScreenSplash';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import { NativeModules } from 'react-native';

// jest.unmock('ScreenSplash');
// jest.mock('ScreenSplash', ()=> {
//   return {
//     actions: {
//       checkbox: jest.fn(),
//     },
//   }
// })
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
      }
    };
    const tree = renderer.create(<ScreenSplash navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Page rendered', () => {

    let navigation = {
    state: {
        key: 'id-1512512594799-2',
        params: {
	      screen: 'Screen Splash',
        user: 'prize'
  	  },
        routeName: 'ScreenSplash',
      }
    };
    const rendered = mount(
    	<ScreenSplash navigation={navigation}/>
    );
    expect(rendered.state('isChecked')).toEqual(false);
    rendered.instance().checkbox();
    // rendered.find('CheckBox').first().simulate('click');

    // rendered.find('TouchableHighlight').first().simulate('click');
    expect(rendered.state('isClicked')).toBe(true);
    

  });
});
