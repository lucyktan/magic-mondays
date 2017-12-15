import 'react-native';
import React from 'react';
import {Video} from 'expo';
import ScreenPrize from '../src/js/ScreenPrize';
import App from '../App';

import {configure, shallow, mount } from 'enzyme';

import renderer from 'react-test-renderer';

it('renders correctly', () => {

    let navigation = {
    state: {
        key: 'id-1512512594799-2',
        params: {
	      screen: 'Screen Game',
        user: 'prize'
  	  },
        routeName: 'ScreenGame',
      }
    };
  const tree = renderer.create(<ScreenPrize navigation={navigation} />).toJSON();
  expect(tree).toMatchSnapshot();
});
