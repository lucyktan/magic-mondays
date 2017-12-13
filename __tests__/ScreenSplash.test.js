import {View} from 'react-native';
import React from 'react';
import { configure, shallow } from 'enzyme';
import ScreenSplash from '../src/js/ScreenSplash';
import Adapter from 'enzyme-adapter-react-16';

import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('Screen Splash', () => {
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
    const rendered = shallow(
    	<ScreenSplash navigation={navigation}/>
    );
    expect(rendered).toMatchSnapshot();
  });
});
