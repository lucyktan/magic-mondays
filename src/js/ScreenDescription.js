import React, { Component } from 'react';
import { Button, Container, Header, Content, Icon, List, ListItem, Left, Body, Right, Separator, Switch, Thumbnail, Tab, Tabs } from 'native-base';
import {
  Image,
  ListView,
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

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
      case 'shoe':
        return (
          <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: 20}}>NEW! 
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
          );
      case 'towel':
        return (
          <Text style={{fontWeight: 'bold'}}>BUY 1 GET 1 FREE ON TOWELS</Text>
          );
      case 'giftcard':
        return (
          <Text style={{fontWeight: 'bold'}}>FREE $10 Gift Card</Text>
          );
      case 'beauty':
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
    //const state = this.props.navigation.state;
    //const navigation = this.props.navigation;
    //const goBack = this.props.navigation;
    const { state, navigate, goBack } = this.props.navigation;
    return (
      <Container style={{backgroundColor: 'white'}}>
        <View >
            {Platform.OS === 'ios' && <View style={styles.statusBar} />}
            <View style={styles.toolbarContainer} >
                <TouchableOpacity onPress={() => goBack()}>
                    <Image style={styles.backImg} source={require('../img/back_arrow_black.png')} />
                </TouchableOpacity>
                <Text style={styles.titleText} >Offer Details</Text>
            </View>
        </View>
        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        { this.props.navigation.state.params.prize == 'shoe' ? this.identifyPrize() : null }
        </View>
        <View style={{borderColor: 'black', justifyContent: 'center', alignItems: 'center', borderWidth: 1, marginLeft: 13, marginRight: 13, marginTop: 20}}>
          <Text style={{fontWeight: '500', fontSize: 14, margin: 15}}>Promo code:
            <Text style={{color: '#CC0000', fontWeight: '500', fontSize: 14, margin: 15}}> FRIEND
            </Text>
          </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#D3D3D3', padding: 20}}>
          <TouchableHighlight style={{height: 30, width: 350, marginTop: 15, backgroundColor: '#CC0000', justifyContent: 'center', alignItems: 'center'}}
            onPress={() => navigation.navigate("ScreenPrize", { screen: "Screen Prize" })}>
            <Text style={{fontWeight: '600', fontSize: 12, color: 'white'}}>SHOP NOW</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{height: 30, width: 350, marginTop: 10, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center'}}
            onPress={() => navigation.navigate("ScreenPrize", { screen: "Screen Prize" })}>
            <Text style={{fontWeight: '600', fontSize: 12, color: 'white'}}>REMOVE FROM WALLET</Text>
          </TouchableHighlight>
        </View>
        <List>
          <ListItem>
            <Text style={{color: 'gray', fontWeight: '700'}}>TO REDEEM:{"\n"}
              <Text style={{color: 'black', fontWeight: '200'}}>If you haven't already, add a credit card to your wallet.
              </Text>
            </Text>
          </ListItem>
        </List>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
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
})

export default ScreenWallet;