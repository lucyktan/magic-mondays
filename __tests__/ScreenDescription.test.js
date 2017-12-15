import {View} from 'react-native';
import React from 'react';
import { configure, shallow } from 'enzyme';
import ScreenDescription from '../src/js/ScreenDescription';
import renderer from 'react-test-renderer';

describe('<ScreenDescription />', () => {
  it('Page rendered', () => {

    let navigation = {
    state: {
        key: 'id-1512512594799-2',
        params: {
	      screen: 'Screen Description',
        user: 'prize'
  	  },
        routeName: 'ScreenDescription',
      }
    };
    const rendered = shallow(
    	<ScreenDescription navigation={navigation}/>
    );
    expect(rendered).toMatchSnapshot();
  });
});
