import {View} from 'react-native';
import React from 'react';
import { configure, shallow } from 'enzyme';
import ScreenHome from '../src/js/ScreenHome';
import Adapter from 'enzyme-adapter-react-16';

import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

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
});