import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';

class ScreenPrize extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
          <Image
            source={require('./img/congratulations.gif')}
            style={{flex: 1, width: 300, height: 100, position: 'absolute', top: 20}}
          />

          <Image
            source={require('./img/prize_beautybox.png')}
            style={{flex: 2, width: 300, height: 340, position: 'absolute'}}
          />

          <Text style={{fontSize: 13, color: 'gray', position: 'absolute', marginLeft: 20, marginRight: 20, bottom: 90}}>A chic pouch of 5 deluxe beauty samples + 1 bonus and $5 off your next beauty purchase</Text>


        <View style={styles.buttonContainer}>
          <TouchableHighlight
            onPress={() => navigation.navigate("ScreenWallet", { screen: "Screen Wallet" })}
            style={[styles.button, {backgroundColor: '#E22130'}]}>
            <Text style={styles.buttonText}>Save Prize to Wallet</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 300
  },
  titleText: {
    fontSize: 22
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    position: 'absolute',
    bottom: 20
  },
  button: {
    height: 50,
    flex: 2,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18
  }
});
export default ScreenPrize;