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


const dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
    sectionHeaderHasChanged : (s1, s2) => s1 !== s2
});

const dataBlob = {
  "List1": [{'id': '1'}, {'id': '2'}, {'id': '3'}]
};


class ScreenWallet extends Component {

    identifyPrize(){
      switch (this.props.navigation.state.params.prize) {
        case 'beauty':
          return (
            <Text style={{fontWeight: 'bold'}}>50% OFF YOUR NEXT PURCHASE OF SHOES</Text>
            );
        case 'towel':
          return (
            <Text style={{fontWeight: 'bold'}}>BUY 1 GET 1 FREE ON TOWELS</Text>
            );
        case 'giftcard':
          return (
            <Text style={{fontWeight: 'bold'}}>FREE $10 Gift Card</Text>
            );
        case 'shoe':
          return (
            <Text style={{fontWeight: 'bold'}}>CHIC POUCH of 5 DELUXE BEAUTY SAMPLES{"\n"}
              <Text style={{fontWeight: 'bold', color: '#CC0000'}}>+ 1 BONUS and $5 OFF YOUR NEXT BEAUTY{"\n"}
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
    const listData = dataSource.cloneWithRowsAndSections(
        dataBlob,
        Object.keys(dataBlob)
    );
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
          <Tab heading="RECENTLY ADDED" tabStyle={{backgroundColor:"#FFFFFF"}} 
               textStyle={{fontSize: 12, color: 'gray'}}
               activeTextStyle={{fontSize: 12, color: 'black'}}>
            <View style={{height: 200}}>
            <List>
              <ListItem onPress={() => navigation.navigate("ScreenDescription", { screen: "Screen Description" })}>
                <Text style={{fontWeight: 'bold'}}>NEW! 
                  <Text style={{fontWeight: 'normal'}}> FRIENDS & FAMILY EVENT!{"\n"}
                      <Text style={{fontWeight: 'bold', color: '#CC0000'}}>EXTRA 30%, 25%, 15% OR 10% OFF!{"\n"}
                        <Text style={{fontWeight: 'normal', fontSize: 10, color: 'black'}}>valid 11/30/2017 - 12/12/2017</Text>
                      </Text>
                  </Text>
                </Text>
              </ListItem>
              <ListItem onPress={() => navigation.navigate("ScreenDescription", { screen: "Screen Description", prize: this.props.navigation.state.params.prize })}>
                <View>
                  { this.props.navigation.state.params.prize == 'shoe' ? this.identifyPrize() : null }
                </View>
              </ListItem>
            </List>
            <ListView  style={{height: 100}}
              dataSource={listData}

                renderRow={(record) => 
                        <View>
                          <ListItem onPress={() => navigation.navigate("ScreenDescription", { screen: "Screen Screen  Description" })}>
                            <View>
                              <Text>{this.props.navigation.state.params.prize}{record.id}</Text>
                            </View>
                          </ListItem>
                        </View>
                }
                renderLeftHiddenRow={item => null}
                renderRightHiddenRow={(item) => null}
            />
            </View>
            <View>
            <TouchableHighlight style={{height: 30, width: 125, marginLeft: 125, marginTop: 15, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center'}}
              onPress={() => navigation.navigate("ScreenPrize", { screen: "Screen Prize" })}>
              <Text style={{fontWeight: 'normal', fontSize: 12, color: 'white'}}>ADD AN OFFER</Text>
            </TouchableHighlight>
            </View>
          </Tab>


          <Tab heading="EXPIRING SOON"  tabStyle={{backgroundColor:"#FFFFFF"}}
               textStyle={{fontSize: 12, color: 'gray'}}
               activeTextStyle={{fontSize: 12, color: 'black'}}>
            <View style={{height: 200}}>
            <List>
              <ListItem onPress={() => navigation.navigate("ScreenPrize", { screen: "Screen Prize" })}>
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
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 20
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