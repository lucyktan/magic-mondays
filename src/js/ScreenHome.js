import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { Container} from 'native-base';
import promoImage from '../img/app-home-with-promo.jpg';

class ScreenHome extends Component {

  render() {
    const { navigate } = this.props.navigation;

    console.log(this.props.navigation.state.routeName, "props is here");
    return (
      <Container style={styles.container}>
        <TouchableHighlight
          onPress={() => navigate("ScreenSplash", { screen: "Screen Splash" })}>
          <Image
            source={promoImage}
            style={styles.backgroundImage}
          />
        </TouchableHighlight>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0%'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain'
  }
});
export default ScreenHome;