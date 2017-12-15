import {View} from 'react-native';
import React from 'react';
import { configure, shallow } from 'enzyme';
import ScreenWallet from '../src/js/ScreenWallet';
import renderer from 'react-test-renderer';

describe('<ScreenWallet />', () => {
  it('Page rendered', () => {

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
    const rendered = shallow(
    	<ScreenWallet navigation={navigation}/>
    );
    expect(rendered).toMatchSnapshot();
  });
});
// describe('<ScreenWallet />', () => {
//   it('Page rendered', () => {
//     const rendered = shallow(
//      <ScreenWallet/>
//     );
//     expect(rendered).toBeTruthy();
//   });
// });