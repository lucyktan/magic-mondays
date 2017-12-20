import {View,Text} from 'react-native';
import React from 'react';
import sinon from 'sinon';
import {shallow, mount } from 'enzyme';
import ScreenWallet from '../src/js/ScreenWallet';
import renderer from 'react-test-renderer';

describe('<ScreenWallet />', () => {
  it('contains the shoe prize', () => {

    let navigation = {
    state: {
        key: 'id-1512512594799-2',
        params: {
	      screen: 'Screen Wallet',
        user: 'prize'
  	  },
        routeName: 'ScreenWallet',
      },
    navigate: jest.fn()
    };
    const rendered = mount(
    	<ScreenWallet navigation={navigation}/>
    );
    rendered.setState({prize: 'shoes'});
    var node = <Text style={{fontWeight: 'bold'}}>50% OFF YOUR NEXT PURCHASE OF SHOES</Text>;
    expect(rendered.instance().identifyPrize()).toEqual(node);
  });
  it('contains the towels prize', () => {

    let navigation = {
    state: {
        key: 'id-1512512594799-2',
        params: {
	      screen: 'Screen Wallet',
        user: 'prize'
  	  },
        routeName: 'ScreenWallet',
      },
    navigate: jest.fn()
    };
    const rendered = mount(
    	<ScreenWallet navigation={navigation}/>
    );
    rendered.setState({prize: 'towels'});
    var node = <Text style={{fontWeight: 'bold'}}>BUY 1 GET 1 FREE ON TOWELS</Text>;
    expect(rendered.instance().identifyPrize()).toEqual(node);
  });
  it('contains the giftcard prize', () => {

    let navigation = {
    state: {
        key: 'id-1512512594799-2',
        params: {
	      screen: 'Screen Wallet',
        user: 'prize'
  	  },
        routeName: 'ScreenWallet',
      },
    navigate: jest.fn()
    };
    const rendered = mount(
    	<ScreenWallet navigation={navigation}/>
    );
    rendered.setState({prize: 'giftcard'});
    var node = <Text style={{fontWeight: 'bold'}}>FREE $10 Gift Card</Text>;
    expect(rendered.instance().identifyPrize()).toEqual(node);
  });
  it('contains the beautybox prize', () => {

    let navigation = {
    state: {
        key: 'id-1512512594799-2',
        params: {
	      screen: 'Screen Wallet',
        user: 'prize'
  	  },
        routeName: 'ScreenWallet',
      },
    navigate: jest.fn()
    };
    const rendered = mount(
    	<ScreenWallet navigation={navigation}/>
    );
    rendered.setState({prize: 'beautybox'});
    var node = <Text style={{fontWeight: 'bold'}}>CHIC POUCH of 5 DELUXE BEAUTY SAMPLES{"\n"}
            <Text style={{fontWeight: 'bold', color: '#CC0000'}}>+ 1 BONUS and $5 OFF YOUR NEXT BEAUTY{"\n"}
                                             PURCHASE{"\n"}
              <Text style={{fontWeight: 'normal', fontSize: 10, color: 'black'}}>valid 1/21/2018 - 2/21/2018
              </Text>
            </Text>
          </Text>;
    expect(rendered.instance().identifyPrize()).toEqual(node);
  });
  it('contains the perfume prize', () => {

    let navigation = {
    state: {
        key: 'id-1512512594799-2',
        params: {
	      screen: 'Screen Wallet',
        user: 'prize'
  	  },
        routeName: 'ScreenWallet',
      },
    navigate: jest.fn()
    };
    const rendered = mount(
    	<ScreenWallet navigation={navigation}/>
    );
    rendered.setState({prize: 'perfume'});
    var node = <Text style={{fontWeight: 'bold'}}>CLINIQUE PERFUME{"\n"}
            <Text style={{fontWeight: 'bold', color: '#CC0000'}}>+ 1 BONUS and $5 OFF{"\n"}
                                             PURCHASE{"\n"}
              <Text style={{fontWeight: 'normal', fontSize: 10, color: 'black'}}>valid 1/21/2018 - 2/21/2018
              </Text>
            </Text>
          </Text>;
    expect(rendered.instance().identifyPrize()).toEqual(node);
  });
  it('contains the default prize', () => {

    let navigation = {
    state: {
        key: 'id-1512512594799-2',
        params: {
	      screen: 'Screen Wallet',
        user: 'prize'
  	  },
        routeName: 'ScreenWallet',
      },
    navigate: jest.fn()
    };
    const rendered = mount(
    	<ScreenWallet navigation={navigation}/>
    );
    rendered.setState({prize: 'default'});
    var node = <Text style={{fontWeight: 'bold'}}>PRIZE</Text>;
    expect(rendered.instance().identifyPrize()).toEqual(node);
  });

  it('to go to the next page', () => {

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
    rendered.setState({prize: 'shoes'});

    rendered.find('TouchableHighlight').forEach((child)=>{
      if(child.props().onPress !== undefined)
        child.props().onPress();
    });
    expect(navigation.navigate).toBeCalled();
  });
});

