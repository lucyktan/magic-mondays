import {View} from 'react-native';
import React from 'react';
import { configure, shallow } from 'enzyme';
import ScreenWallet from '../src/js/ScreenWallet';
import Adapter from 'enzyme-adapter-react-16';

import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('<ScreenWallet />', () => {
  it('Page rendered', () => {

    let navigation = {
    state: {
        key: 'id-1512512594799-2',
        params: {
	      screen: 'Screen Game',
        user: 'test'
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