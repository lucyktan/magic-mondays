import {View,Text} from 'react-native';
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
    const rendered = mount(
    	<ScreenDescription navigation={navigation}/>
    );
    // expect(rendered).toMatchSnapshot();
  });

  it('Page shows shoes description', () => {

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

    var node = <View>
          <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 20}}>NEW! 
              <Text style={{fontWeight: 'normal', marginTop: 50, marginLeft: 50}}> FRIENDS & FAMILY EVENT!{"\n"}
              <Text style={{fontWeight: 'normal', fontSize: 8}}>{"\n"}
                  <Text style={{fontWeight: 'bold', fontSize: 18, color: '#CC0000', marginTop: 50, marginLeft: 50}}>EXTRA 30%, 25%, 15% OR 10% OFF!{"\n"}
                  <Text style={{fontWeight: 'normal', fontSize: 8}}>{"\n"}
                    <Text style={{fontWeight: 'normal', fontSize: 10, color: 'gray'}}>Applies to select merchandise. See details & exclusions below.{"\n"}</Text>
                    <Text style={{fontWeight: 'normal', fontSize: 8}}>{"\n"}</Text>
                    <Text style={{fontWeight: 'normal', fontSize: 10, color: 'black', marginTop: 50, marginLeft: 50}}>valid 11/30/2017 - 12/12/2017</Text>
                  </Text>
                  </Text>
              </Text>
              </Text>
            </Text>
          </View>
          <View style={{borderColor: 'black', justifyContent: 'center', alignItems: 'center', borderWidth: 1, marginLeft: 13, marginRight: 13, marginTop: 20}}>
            <Text style={{fontWeight: '500', fontSize: 14, margin: 15}}>Promo code:
              <Text style={{color: '#CC0000', fontWeight: '500', fontSize: 14, margin: 15}}> SHOES
              </Text>
            </Text>
          </View>
          </View>;

    expect(rendered.instance().identifyPrize()).toEqual(node);
  });
  it('Page shows towels description', () => {

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
    rendered.setState({prize: 'towels'});
    var node = <Text style={{fontWeight: 'bold'}}>BUY 1 GET 1 FREE ON TOWELS</Text>;
    expect(rendered.instance().identifyPrize()).toEqual(node);
  });
  it('Page shows giftcard description', () => {

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

    rendered.setState({prize: 'giftcard'});
    var node = <Text style={{fontWeight: 'bold'}}>FREE $10 Gift Card</Text>;
    expect(rendered.instance().identifyPrize()).toEqual(node);
  });
  it('Page shows beautybox description', () => {

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

    rendered.setState({prize: 'beautybox'});
    var node = <View>
          <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 20}}>NEW! 
            <Text style={{fontWeight: 'normal', marginTop: 50, marginLeft: 50}}> CHIC POUCH of 5 DELUXE BEAUTY SAMPLES{"\n"}
            <Text style={{fontWeight: 'normal', fontSize: 8}}>{"\n"}
                <Text style={{fontWeight: 'bold', fontSize: 18, color: '#CC0000', marginTop: 50, marginLeft: 50}}>+ 1 BONUS and $5 OFF YOUR NEXT BEAUTY PURCHASE{"\n"}
                <Text style={{fontWeight: 'normal', fontSize: 8}}>{"\n"}
                  <Text style={{fontWeight: 'normal', fontSize: 10, color: 'gray'}}>Applies to select merchandise. See details & exclusions below.{"\n"}</Text>
                  <Text style={{fontWeight: 'normal', fontSize: 8}}>{"\n"}</Text>
                  <Text style={{fontWeight: 'normal', fontSize: 10, color: 'black', marginTop: 50, marginLeft: 50}}>valid 1/21/2018 - 2/21/2018</Text>
                </Text>
                </Text>
            </Text>
            </Text>
          </Text>
          </View>
          <View style={{borderColor: 'black', justifyContent: 'center', alignItems: 'center', borderWidth: 1, marginLeft: 13, marginRight: 13, marginTop: 20}}>
            <Text style={{fontWeight: '500', fontSize: 14, margin: 15}}>Promo code:
              <Text style={{color: '#CC0000', fontWeight: '500', fontSize: 14, margin: 15}}> BEAUTY
              </Text>
            </Text>
          </View>
          </View>;
    expect(rendered.instance().identifyPrize()).toEqual(node);

  });
  it('Page shows perfume description', () => {

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

    rendered.setState({prize: 'perfume'});
    var node = <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: 20}}>NEW! 
            <Text style={{fontWeight: 'normal', marginTop: 50, marginLeft: 50}}> FREE PERFUME!{"\n"}
            <Text style={{fontWeight: 'normal', fontSize: 8}}>{"\n"}
                <Text style={{fontWeight: 'bold', fontSize: 18, color: '#CC0000', marginTop: 50, marginLeft: 50}}>EXTRA 30%, 25%, 15% OR 10% OFF!{"\n"}
                <Text style={{fontWeight: 'normal', fontSize: 8}}>{"\n"}
                  <Text style={{fontWeight: 'normal', fontSize: 10, color: 'gray'}}>Applies to select merchandise. See details & exclusions below.{"\n"}</Text>
                  <Text style={{fontWeight: 'normal', fontSize: 8}}>{"\n"}</Text>
                  <Text style={{fontWeight: 'normal', fontSize: 10, color: 'black', marginTop: 50, marginLeft: 50}}>valid 11/30/2017 - 12/12/2017</Text>
                </Text>
                </Text>
            </Text>
            </Text>
          </Text>;
    expect(rendered.instance().identifyPrize()).toEqual(node);
  });
  it('Page shows default description', () => {

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
    
    rendered.setState({prize: 'default'});
    var node = <Text style={{fontWeight: 'bold'}}>PRIZE</Text>;
    expect(rendered.instance().identifyPrize()).toEqual(node);
  });
});
