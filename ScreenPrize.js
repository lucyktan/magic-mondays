import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';

class ScreenPrize extends Component {
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: `You Won!`,
  //   }
  // };
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

          <Image
            source={require('./images/congratulations.gif')}
            style={{flex: 2, width: 300}}
          />

          <Image
            source={require('./images/prize_beautybox.png')}
            style={{resizeMode: 'contain', height: 340}}
          />

        <View style={styles.buttonContainer}>
          <TouchableHighlight
            onPress={() => navigate("ScreenWallet", { screen: "Screen Wallet" })}
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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  titleText: {
    fontSize: 22
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20
  },
  button: {
    // borderRadius: 20,
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