import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import {
  Image,
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

class ScreenWallet extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Welcome ${navigation.state.params.screen}`
  });

  render() {
    const { params } = this.props.navigation.state;
    return (
      <Container>
        <View >
            {Platform.OS === 'ios' && <View style={styles.statusBar} />}
            <View style={styles.toolbarContainer} >
                <TouchableOpacity onPress={() => this.props.navigator.pop()} >
                    <Image style={styles.backImg} source={require('./images/back_arrow_black.png')} />
                </TouchableOpacity>
                <Text style={styles.titleTxt} >My Offers</Text>
            </View>
        </View>
        <Tabs initialPage={2} tabBarUnderlineStyle={{height: 3, backgroundColor: '#CC0000'}}>
          <Tab heading="RECENTLY ADDED" tabStyle={{backgroundColor:"#FFFFFF"}} 
               textStyle={{fontSize: 14, color: 'gray'}}
               activeTextStyle={{fontSize: 14, color: 'black'}}>
            <Text>"asdf"</Text>
          </Tab>
          <Tab heading="EXPIRING SOON"  tabStyle={{backgroundColor:"#FFFFFF"}}
               textStyle={{fontSize: 14, color: 'gray'}}
               activeTextStyle={{fontSize: 14, color: 'black'}}>
            <Text>"asdf"</Text>
          </Tab>
        </Tabs>
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
    fontSize: 22
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