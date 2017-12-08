import {View} from 'react-native';
import React from 'react';
import { configure, shallow } from 'enzyme';
import ScreenWallet from '../src/js/ScreenWallet';
import Adapter from 'enzyme-adapter-react-16';

import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

// it('renders correctly', () => {
// 	const tree = renderer.create(<ScreenWallet/>).toJSON();
// 	expect(tree).toMatchSnapshot();
// });

// describe('<ScreenWallet />', () => {
//   it('Page rendered', () => {
//     const rendered = shallow(
//     	<ScreenWallet state="true"/>
//     );
//     expect(rendered).toMatchSnapshot();
//   });
// });
describe('<ScreenWallet />', () => {
  it('Page rendered', () => {
    const rendered = shallow(
     <ScreenWaller/>
    );
    expect(rendered).toBeTruthy();
  });
});