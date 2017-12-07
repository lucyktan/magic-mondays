import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { Container, Button} from 'native-base';
import promoImage from '../../img/app-home-with-promo.jpg';

class ScreenHome extends Component {

  render() {
    const { navigate } = this.props.navigation;

    console.log(this.props.navigation.state.routeName, "props is here");
    return (
      <Container style={styles.backgroundImage}>
        <TouchableHighlight
          onPress={() => navigate("ScreenSplash", { screen: "Screen Splash" })}
          style={styles.magic}>
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
  backgroundImage: {
    width: 414,
    height: 715,
    paddingTop: 5,
  },
  magic: {
    width: 600,
    height: 300,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignSelf: 'stretch',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center'
  }
});
export default ScreenHome;