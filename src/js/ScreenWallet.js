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
      case 'shoes':
        return (
          <Text style={{fontWeight: 'bold'}}>NEW! 
            <Text style={{fontWeight: 'normal'}}> MACY'S MONDAYS OFFER!{"\n"}
                <Text style={{fontWeight: 'bold', color: '#CC0000'}}>10% OFF MEN'S & WOMEN'S SHOES{"\n"}
                  <Text style={{fontWeight: 'normal', fontSize: 10, color: 'black'}}>valid 1/22/2018 - 1/28/2018</Text>
                </Text>
            </Text>
          </Text>
          );
      case 'towels':
        return (
          <Text style={{fontWeight: 'bold'}}>NEW! 
            <Text style={{fontWeight: 'normal'}}> MACY'S MONDAYS OFFER!{"\n"}
                <Text style={{fontWeight: 'bold', color: '#CC0000'}}>15% OFF ANY BED & BATH PURCHASE{"\n"}
                  <Text style={{fontWeight: 'normal', fontSize: 10, color: 'black'}}>valid 1/22/2018 - 1/28/2018</Text>
                </Text>
            </Text>
          </Text>          
          );
      case 'giftcard':
        return (
          <Text style={{fontWeight: 'bold'}}>NEW! 
            <Text style={{fontWeight: 'normal'}}> MACY'S MONDAYS OFFER!{"\n"}
                <Text style={{fontWeight: 'bold', color: '#CC0000'}}>$10 GIFTCARD TOWARD YOUR NEXT PURCHASE OF $50 OR MORE{"\n"}
                  <Text style={{fontWeight: 'normal', fontSize: 10, color: 'black'}}>valid 1/22/2018 - 1/28/2018</Text>
                </Text>
            </Text>
          </Text>          
          );
      case 'beautybox':
        return (
          <Text style={{fontWeight: 'bold'}}>NEW! 
            <Text style={{fontWeight: 'normal'}}> MACY'S MONDAYS OFFER!{"\n"}
                <Text style={{fontWeight: 'bold', color: '#CC0000'}}>ONE FREE MONTH OF BEAUTY BOX SUBSCRIPTION{"\n"}
                  <Text style={{fontWeight: 'normal', fontSize: 10, color: 'black'}}>valid 1/22/2018 - 1/28/2018</Text>
                </Text>
            </Text>
          </Text>
          );
      case 'perfume':
        return (
          <Text style={{fontWeight: 'bold'}}>NEW! 
            <Text style={{fontWeight: 'normal'}}> MACY'S MONDAYS OFFER!{"\n"}
                <Text style={{fontWeight: 'bold', color: '#CC0000'}}>10% OFF ANY CLINIQUE PRODUCT PURCHASE{"\n"}
                  <Text style={{fontWeight: 'normal', fontSize: 10, color: 'black'}}>valid 1/22/2018 - 1/28/2018</Text>
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
              <ListItem onPress={() => navigation.navigate("ScreenDescription", { screen: "Screen Description", prize: this.props.navigation.state.params.prize })}>
                <View>
                  { this.props.navigation.state.params.prize ? this.identifyPrize() : null }
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

            // <ListView  style={{height: 100}}
            //   dataSource={listData}

            //     renderRow={(record) => 
            //             <View>
            //               <ListItem onPress={() => navigation.navigate("ScreenDescription", { screen: "Screen Screen  Description" })}>
            //                 <View>
            //                   <Text>{this.props.navigation.state.params.prize}{record.id}</Text>
            //                 </View>
            //               </ListItem>
            //             </View>
            //     }
            //     renderLeftHiddenRow={item => null}
            //     renderRightHiddenRow={(item) => null}
            // />

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
  tabBackground: {
   backgroundColor: (Platform.OS === 'ios')? '#FFFFFF' : '#FFFFFF'
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