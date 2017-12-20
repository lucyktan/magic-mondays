import React from 'react';
import {Animated,Easing,TouchableOpacity,Button,Image,StyleSheet, Text, View } from 'react-native';
jest.mock("Dimensions");

import ScreenGame from '../src/js/ScreenGame';
import renderer from 'react-test-renderer';
import {mount,configure, shallow } from 'enzyme';

describe('<ScreenGame />', () => {
  it('renders without crashing', () => {
    let navigation = {
      state: {
          key: 'id-1512512594799-2',
          params: {
          screen: 'Screen Game',
        },
          routeName: 'ScreenGame',
        },
        navigate: jest.fn()
      };

    const wrapper = renderer.create(<ScreenGame navigation={navigation}/>).toJSON();
    expect(wrapper).toBeTruthy();
  });

  it('assigns the correct prizes in the zones', () => {
    let navigation = {
      state: {
          key: 'id-1512512594799-2',
          params: {
          screen: 'Screen Game',
        },
          routeName: 'ScreenGame',
        },
        navigate: jest.fn()
      };

    const wrapper = mount(<ScreenGame navigation={navigation}/>);
    wrapper.instance().done(729);
    expect(wrapper.state().prize).toEqual('shoes');
    wrapper.instance().done(73);
    expect(wrapper.state().prize).toEqual('giftcard');
    wrapper.instance().done(145);
    expect(wrapper.state().prize).toEqual('perfume');
    wrapper.instance().done(217);
    expect(wrapper.state().prize).toEqual('towels');
    wrapper.instance().done(289);
    expect(wrapper.state().prize).toEqual('beautybox');
  });

  it('clicks on the modal', () => {
    let navigation = {
      state: {
          key: 'id-1512512594799-2',
          params: {
          screen: 'Screen Game',
        },
          routeName: 'ScreenGame',
        },
        navigate: jest.fn()
      };

    const wrapper = mount(<ScreenGame navigation={navigation}/>);
    wrapper.find('TouchableHighlight').first().props().onPress();
    expect(wrapper.state().isModalVisible).toEqual(true);
    wrapper.instance()._hideModal();
    expect(wrapper.state().isModalVisible).toEqual(false);

  });
  it('clicks on the spin button', () => {
    let navigation = {
      state: {
          key: 'id-1512512594799-2',
          params: {
          screen: 'Screen Game',
        },
          routeName: 'ScreenGame',
        },
        navigate: jest.fn()
      };

    const wrapper = mount(<ScreenGame navigation={navigation}/>);
    wrapper.find('TouchableHighlight').last().props().onPress();
    wrapper.instance().componentDidUpdate();

   expect(wrapper.state().val).toEqual(true);
  });
});
