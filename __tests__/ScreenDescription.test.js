import {View} from 'react-native';
import React from 'react';
import { mount, shallow } from 'enzyme';
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
        },
      navigate: jest.fn()
    };
    const rendered = shallow(
    	<ScreenDescription navigation={navigation}/>
    );
    expect(rendered).toMatchSnapshot();
  });

  it('Page shows different prizes', () => {

    let navigation = {
      state: {
          key: 'id-1512512594799-2',
          params: {
          screen: 'Screen Description',
          user: 'prize'
        },
          routeName: 'ScreenDescription',
        },
      navigate: jest.fn()
    };
    const rendered = mount(
    	<ScreenDescription navigation={navigation}/>
    );
    rendered.setState({prize: 'shoes'});
    rendered.setState({prize: 'towels'});
    rendered.setState({prize: 'giftcard'});
    rendered.setState({prize: 'beautybox'});
    rendered.setState({prize: 'perfume'});
    rendered.setState({prize: ''});

    rendered.find('TouchableHighlight').forEach((child)=>{
      if(child.props().onPress !== undefined)
        child.props().onPress();
    });
    rendered.find('TouchableOpacity').first().props().onPress();
 //   expect(rendered).toMatchSnapshot();
  });
});
