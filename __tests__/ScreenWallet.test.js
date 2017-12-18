import {View} from 'react-native';
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
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
    rendered.setState({params: {prize: 'shoes'}});
    rendered.instance().identifyPrize();
    expect(rendered).toMatchSnapshot();
  });
});

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
  rendered.setState({params: {prize: 'perfume'}});
  rendered.instance().identifyPrize();
  expect(rendered).toMatchSnapshot();
});

it('Presses to the next page', () => {

  let navigation = {
  state: {
      key: 'id-1512512594799-2',
      params: {
      screen: 'Screen Wallet',
      prize: 'shoe'
    },
      routeName: 'ScreenWallet',
    },
  navigate: jest.fn()
  };
  const rendered = mount(
    <ScreenWallet navigation={navigation}/>
  );
  rendered.find('TouchableHighlight').first().props().onPress();    

});

it('Presses to the next page', () => {

  let navigation = {
  state: {
      key: 'id-1512512594799-2',
      params: {
      screen: 'Screen Wallet',
      prize: 'shoe'
    },
      routeName: 'ScreenWallet',
    },
  navigate: jest.fn()
  };
  const rendered = shallow(
    <ScreenWallet navigation={navigation}/>
  );
  //rendered.find('Text').exists()).to.equal(true);

  expect(rendered).toMatchSnapshot();
});

it('Presses to the next page for list item', () => {

  let navigation = {
  state: {
      key: 'id-1512512594799-2',
      params: {
      screen: 'Screen Wallet',
      prize: 'shoe'
    },
      routeName: 'ScreenWallet',
    },
  navigate: jest.fn()
  };
  const rendered = mount(
    <ScreenWallet navigation={navigation}/>
  );

  rendered.find('ListItem');

  rendered.find('TouchableHighlight').forEach((child)=>{
    if(child.props().onPress !== undefined)
      child.props().onPress();
  });

  rendered.find('Text').forEach((child)=>{
    if(child.props() !== undefined)
      child.props().exists();
  });
  //rendered.find('ListItem').first().props().onPress();
  //rendered.find('ListItem').last().props().onPress();

  expect(rendered).toMatchSnapshot();
});
