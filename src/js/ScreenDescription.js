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
      case 'shoes':
        return (
          <View>
          <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 20}}>NEW! 
            <Text style={{fontWeight: 'normal', marginTop: 50, marginLeft: 50}}> MACY'S MONDAYS OFFER!{"\n"}
            <Text style={{fontWeight: 'normal', fontSize: 8}}>{"\n"}
                <Text style={{fontWeight: 'bold', fontSize: 18, color: '#CC0000', marginTop: 50, marginLeft: 50}}>10% OFF MEN'S & WOMEN'S SHOES{"\n"}
                <Text style={{fontWeight: 'normal', fontSize: 8}}>{"\n"}
                  <Text style={{fontWeight: 'normal', fontSize: 10, color: 'gray'}}>Applies to select merchandise. See details & exclusions below.{"\n"}</Text>
                  <Text style={{fontWeight: 'normal', fontSize: 8}}>{"\n"}</Text>
                  <Text style={{fontWeight: 'normal', fontSize: 10, color: 'black', marginTop: 50, marginLeft: 50}}>valid 1/22/2018 - 1/28/2018</Text>
                </Text>
                </Text>
            </Text>
            </Text>
          </Text>
          </View>
          <View style={{borderColor: 'black', justifyContent: 'center', alignItems: 'center', borderWidth: 1, marginLeft: 13, marginRight: 13, marginTop: 20}}>
            <Text style={{fontWeight: '500', fontSize: 14, margin: 15}}>Promo code:
              <Text style={{color: '#CC0000', fontWeight: '500', fontSize: 14, margin: 15}}> SHOES5OWN3
              </Text>
            </Text>
          </View>
          </View>
          );
      case 'towels':
        return (
          <View>
          <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 20}}>NEW! 
            <Text style={{fontWeight: 'normal', marginTop: 50, marginLeft: 50}}> MACY'S MONDAYS OFFER!{"\n"}
            <Text style={{fontWeight: 'normal', fontSize: 8}}>{"\n"}
                <Text style={{fontWeight: 'bold', fontSize: 18, color: '#CC0000', marginTop: 50, marginLeft: 50}}>15% OFF ANY BED & BATH PURCHASE{"\n"}
                <Text style={{fontWeight: 'normal', fontSize: 8}}>{"\n"}
                  <Text style={{fontWeight: 'normal', fontSize: 10, color: 'gray'}}>Applies to select merchandise. See details & exclusions below.{"\n"}</Text>
                  <Text style={{fontWeight: 'normal', fontSize: 8}}>{"\n"}</Text>
                  <Text style={{fontWeight: 'normal', fontSize: 10, color: 'black', marginTop: 50, marginLeft: 50}}>valid 1/22/2018 - 1/28/2018</Text>
                </Text>
                </Text>
            </Text>
            </Text>
          </Text>
          </View>
          <View style={{borderColor: 'black', justifyContent: 'center', alignItems: 'center', borderWidth: 1, marginLeft: 13, marginRight: 13, marginTop: 20}}>
            <Text style={{fontWeight: '500', fontSize: 14, margin: 15}}>Promo code:
              <Text style={{color: '#CC0000', fontWeight: '500', fontSize: 14, margin: 15}}> BEDBATH5IVJ9
              </Text>
            </Text>
          </View>
          </View>
          );
      case 'giftcard':
        return (
          <View>
          <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 20}}>NEW! 
            <Text style={{fontWeight: 'normal', marginTop: 50, marginLeft: 50}}> MACY'S MONDAYS OFFER!{"\n"}
            <Text style={{fontWeight: 'normal', fontSize: 8}}>{"\n"}
                <Text style={{fontWeight: 'bold', fontSize: 18, color: '#CC0000', marginTop: 50, marginLeft: 50}}>$10 GIFTCARD TOWARD YOUR NEXT PURCHASE OF $50 OR MORE{"\n"}
                <Text style={{fontWeight: 'normal', fontSize: 8}}>{"\n"}
                  <Text style={{fontWeight: 'normal', fontSize: 10, color: 'gray'}}>Applies to select merchandise. See details & exclusions below.{"\n"}</Text>
                  <Text style={{fontWeight: 'normal', fontSize: 8}}>{"\n"}</Text>
                  <Text style={{fontWeight: 'normal', fontSize: 10, color: 'black', marginTop: 50, marginLeft: 50}}>valid 1/22/2018 - 1/28/2018</Text>
                </Text>
                </Text>
            </Text>
            </Text>
          </Text>
          </View>
          <View style={{borderColor: 'black', justifyContent: 'center', alignItems: 'center', borderWidth: 1, marginLeft: 13, marginRight: 13, marginTop: 20}}>
            <Text style={{fontWeight: '500', fontSize: 14, margin: 15}}>Promo code:
              <Text style={{color: '#CC0000', fontWeight: '500', fontSize: 14, margin: 15}}> GIFTCARD3BDN8
              </Text>
            </Text>
          </View>
          </View>
          );
      case 'beautybox':
        return (
          <View>
          <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 20}}>NEW! 
            <Text style={{fontWeight: 'normal', marginTop: 50, marginLeft: 50}}> MACY'S MONDAYS OFFER!{"\n"}
            <Text style={{fontWeight: 'normal', fontSize: 8}}>{"\n"}
                <Text style={{fontWeight: 'bold', fontSize: 18, color: '#CC0000', marginTop: 50, marginLeft: 50}}>ONE FREE MONTH OF BEAUTY BOX SUBSCRIPTION{"\n"}
                <Text style={{fontWeight: 'normal', fontSize: 8}}>{"\n"}
                  <Text style={{fontWeight: 'normal', fontSize: 10, color: 'gray'}}>Applies to select merchandise. See details & exclusions below.{"\n"}</Text>
                  <Text style={{fontWeight: 'normal', fontSize: 8}}>{"\n"}</Text>
                  <Text style={{fontWeight: 'normal', fontSize: 10, color: 'black', marginTop: 50, marginLeft: 50}}>valid 1/22/2018 - 1/28/2018</Text>
                </Text>
                </Text>
            </Text>
            </Text>
          </Text>
          </View>
          <View style={{borderColor: 'black', justifyContent: 'center', alignItems: 'center', borderWidth: 1, marginLeft: 13, marginRight: 13, marginTop: 20}}>
            <Text style={{fontWeight: '500', fontSize: 14, margin: 15}}>Promo code:
              <Text style={{color: '#CC0000', fontWeight: '500', fontSize: 14, margin: 15}}> BEAUTY8UFG2
              </Text>
            </Text>
          </View>
          </View>
          );
      case 'perfume':
        return (
          <View>
          <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 20}}>NEW! 
            <Text style={{fontWeight: 'normal', marginTop: 50, marginLeft: 50}}> MACY'S MONDAYS OFFER!{"\n"}
            <Text style={{fontWeight: 'normal', fontSize: 8}}>{"\n"}
                <Text style={{fontWeight: 'bold', fontSize: 18, color: '#CC0000', marginTop: 50, marginLeft: 50}}>10% OFF ANY CLINIQUE PRODUCT PURCHASE{"\n"}
                <Text style={{fontWeight: 'normal', fontSize: 8}}>{"\n"}
                  <Text style={{fontWeight: 'normal', fontSize: 10, color: 'gray'}}>Applies to select merchandise. See details & exclusions below.{"\n"}</Text>
                  <Text style={{fontWeight: 'normal', fontSize: 8}}>{"\n"}</Text>
                  <Text style={{fontWeight: 'normal', fontSize: 10, color: 'black', marginTop: 50, marginLeft: 50}}>valid 1/22/2018 - 1/28/2018</Text>
                </Text>
                </Text>
            </Text>
            </Text>
          </Text>
          </View>
          <View style={{borderColor: 'black', justifyContent: 'center', alignItems: 'center', borderWidth: 1, marginLeft: 13, marginRight: 13, marginTop: 20}}>
            <Text style={{fontWeight: '500', fontSize: 14, margin: 15}}>Promo code:
              <Text style={{color: '#CC0000', fontWeight: '500', fontSize: 14, margin: 15}}> PERFUME7VGC6
              </Text>
            </Text>
          </View>
          </View>
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
        <View>
        { this.props.navigation.state.params.prize ? this.identifyPrize() : null }
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