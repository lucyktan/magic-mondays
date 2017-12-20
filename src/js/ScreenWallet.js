//Vendor stuff
import React, { Component } from 'react';
import { Button, Container, Header, Content, Icon, List, ListItem, Left, Body, Right, Separator, Switch, Thumbnail, Tab, Tabs } from 'native-base';
import {
  Image,
  ListView,
  Platform,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

//Our Stuff
import arrowImage from '../img/back_arrow_black.png';

const dataBlob = {
  "List1": [{'id': '1'}, {'id': '2'}, {'id': '3'}]
};


class ScreenWallet extends Component {
  constructor(props){
    super(props);
    this.state = {prize: this.props.navigation.state.params.prize};
  }
  identifyPrize(){
    switch (this.state.prize) {
      case 'shoes':
        return (
          <Text style={{fontWeight: 'bold'}}>50% OFF YOUR NEXT PURCHASE OF SHOES</Text>
          );
      case 'towels':
        return (
          <Text style={{fontWeight: 'bold'}}>BUY 1 GET 1 FREE ON TOWELS</Text>
          );
      case 'giftcard':
        return (
          <Text style={{fontWeight: 'bold'}}>FREE $10 Gift Card</Text>
          );
      case 'beautybox':
        return (
          <Text style={{fontWeight: 'bold'}}>CHIC POUCH of 5 DELUXE BEAUTY SAMPLES{"\n"}
            <Text style={{fontWeight: 'bold', color: '#CC0000'}}>+ 1 BONUS and $5 OFF YOUR NEXT BEAUTY{"\n"}
                                             PURCHASE{"\n"}
              <Text style={{fontWeight: 'normal', fontSize: 10, color: 'black'}}>valid 1/21/2018 - 2/21/2018
              </Text>
            </Text>
          </Text>
          );
      case 'perfume':
        return (
          <Text style={{fontWeight: 'bold'}}>CLINIQUE PERFUME{"\n"}
            <Text style={{fontWeight: 'bold', color: '#CC0000'}}>+ 1 BONUS and $5 OFF{"\n"}
                                             PURCHASE{"\n"}
              <Text style={{fontWeight: 'normal', fontSize: 10, color: 'black'}}>valid 1/21/2018 - 2/21/2018
              </Text>
            </Text>
          </Text>
          );
      default:
        return (
          <Text style={{fontWeight: 'bold'}}>PRIZE</Text>
          );
      }
  };

  render() {
    
    const state = this.props.navigation.state;
    const navigation = this.props.navigation;


    return (
      <Container>

        <View >
            {Platform.OS === 'ios' && <View style={screenWalletStyle.statusBar} />}
            <View style={screenWalletStyle.toolbarContainer} >
                <TouchableOpacity>
                    <Image style={screenWalletStyle.backImg} source={arrowImage} />
                </TouchableOpacity>
                <Text style={screenWalletStyle.titleText} >My Offers</Text>
            </View>
        </View>


        <Tabs initialPage={0} tabBarUnderlineStyle={{height: 2, backgroundColor: '#CC0000'}}>
          <Tab heading="RECENTLY ADDED" activeTabStyle={screenWalletStyle.tabBackground} tabStyle={screenWalletStyle.tabBackground}
               textStyle={{fontSize: 12, color: 'gray'}}
               activeTextStyle={{fontSize: 12, color: 'black'}}>
            <View style={{height: 200}}>
            <List>
              <ListItem onPress={() => navigation.navigate("ScreenDescription", { screen: "Screen Description", prize: "shoes" })}>
                <Text style={{fontWeight: 'bold'}}>NEW! 
                  <Text style={{fontWeight: 'normal'}}> FRIENDS & FAMILY EVENT!{"\n"}
                      <Text style={{fontWeight: 'bold', color: '#CC0000'}}>EXTRA 30%, 25%, 15% OR 10% OFF!{"\n"}
                        <Text style={{fontWeight: 'normal', fontSize: 10, color: 'black'}}>valid 11/30/2017 - 12/12/2017</Text>
                      </Text>
                  </Text>
                </Text>
              </ListItem>
              <ListItem onPress={() => navigation.navigate("ScreenDescription", { screen: "Screen Description", prize: "beautybox" })}>
                <Text style={{fontWeight: 'bold'}}>CHIC POUCH of 5 DELUXE BEAUTY SAMPLES{"\n"}
                  <Text style={{fontWeight: 'bold', color: '#CC0000'}}>+ 1 BONUS and $5 OFF YOUR NEXT BEAUTY{"\n"}
                                                   PURCHASE{"\n"}
                    <Text style={{fontWeight: 'normal', fontSize: 10, color: 'black'}}>valid 1/21/2018 - 2/21/2018
                    </Text>
                  </Text>
                </Text>
              </ListItem>
              <ListItem onPress={() => navigation.navigate("ScreenDescription", { screen: "Screen Description", prize: this.state.prize })}>
                <View>
                  { this.state.prize ? this.identifyPrize() : null }
                </View>
              </ListItem>
            </List>
            </View>
            <View>
            <TouchableHighlight style={{height: 30, width: 125, marginLeft: 125, marginTop: 65, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center'}}
              onPress={() => navigation.navigate("ScreenPrize", { screen: "Screen Prize" })}>
              <Text style={{fontWeight: 'normal', fontSize: 12, color: 'white'}}>ADD AN OFFER</Text>
            </TouchableHighlight>
            </View>
          </Tab>


          <Tab heading="EXPIRING SOON"  activeTabStyle={screenWalletStyle.tabBackground} tabStyle={screenWalletStyle.tabBackground}
               textStyle={{fontSize: 12, color: 'gray'}}
               activeTextStyle={{fontSize: 12, color: 'black'}}>
            <View style={{height: 200}}>
            <List>
              <ListItem>
                <Text style={{fontWeight: 'bold'}}>NEW! 
                  <Text style={{fontWeight: 'normal'}}> FRIENDS & FAMILY EVENT!{"\n"}
                      <Text style={{fontWeight: 'bold', color: '#CC0000'}}>EXTRA 30%, 25%, 15% OR 10% OFF!{"\n"}
                        <Text style={{fontWeight: 'normal', fontSize: 10, color: 'black'}}>valid 11/30/2017 - 12/12/2017</Text>
                      </Text>
                  </Text>
                </Text>
              </ListItem>
            </List>
            </View>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const screenWalletStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabBackground: {
    backgroundColor: (Platform.OS === 'ios')? '#FFFFFF' : '#FFFFFF'
  },
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 20,
  },
  button: {
    alignSelf: 'stretch',
    marginRight: 25,
    marginLeft: 25,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#C56EE0',
    height: 50,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center'
  },
  indicatorContainer: {
      backgroundColor: 'white',
      height: 48,
  },
  statusBar: {
      height: 24,
      backgroundColor: 0x00000044
  },
  toolbarContainer: {
      height: 56,
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1
  },
  backImg: {
      width: 16,
      height: 17,
  },
  titleTxt: {
      marginLeft: 36,
      color: 'black',
      fontSize: 20
  }
});

export default ScreenWallet;