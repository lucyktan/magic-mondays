import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native';
import congratulationImage from '../img/congratulations.jpg';
import prizeImage from '../img/prize_beautybox.png';
import streakImage from '../img/streak.png';
import floatingStars from '../assets/floatingstars.mov';
import { Video } from 'expo';

class ScreenPrize extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const navigation = this.props.navigation;
    console.log(this.props.navigation.state.params.prize);
    return (
      <View style={styles.container}>
          <Video
            source={require('../assets/floatingstars.mov')}
            rate={1.0}
            volume={0.0}
            muted={true}
            resizeMode={"cover"}
            shouldPlay
            isLooping
            style={styles.video}
          />

          <Image
            source={congratulationImage}
            style={styles.congratsImage}
          />

          <Image resizeMode = 'cover'
            source={prizeImage}
            style={styles.prizeImage}
          />

          <Text style={styles.prizeDesc}>
            A chic pouch of 5 deluxe beauty samples + 1 bonus and $5 off your next beauty purchase
          </Text>

        <View style={styles.buttonContainer}>
          <TouchableHighlight
            onPress={() => navigation.navigate("ScreenWallet", { screen: "Screen Wallet", user: "Prize",prize: this.props.navigation.state.params.prize})}
            style={[styles.button, {backgroundColor: '#E22130'}]}>
            <Text style={styles.buttonText}>Save Prize to Wallet</Text>
          </TouchableHighlight>
        </View>

        <Image resizeMode = 'cover'
          source = {streakImage}
          style = {styles.streakImage}
        />

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
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  congratsImage: {
    flex: 1, 
    width: 600, 
    height: 200, 
    position: 'absolute', 
    top: 5
  },
  prizeImage: {
    flex: 2, 
    width: 450,
    height: 300,
    position: 'absolute',
    margin: 'auto',
    overflow: 'visible'
  },
  prizeDesc: {
    fontSize: 13, 
    color: 'gray', 
    textAlign: 'center',
    position: 'absolute', 
    marginLeft: 20, 
    marginRight: 20, 
    bottom: 150
  },
  titleText: {
    fontSize: 22
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    position: 'absolute',
    bottom: 80
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
  },
  streakImage: {
    flex: 2,
    width: 350,
    height: 100,
    position: 'absolute', 
    bottom: -20
  }
});
export default ScreenPrize;