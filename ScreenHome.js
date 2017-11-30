import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';


class ScreenHome extends Component {
  static navigationOptions = {
    title: "Welcome"
  }
  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props, "props is here");
    return (
      <View style={styles.container}>
        <Image
          source={require('./img/app-nav.png')}
          style={styles.nav}
        />
        <TouchableHighlight
          onPress={() => navigate("ScreenSplash", {screen: "Screen Splash"})}
          style={styles.magic}>
          <Image
          source={require('./img/magic-promo.png')}
          style={styles.magic}
        />
        </TouchableHighlight>
        <Image
          source={require('./img/promo-ad.png')}
          style={styles.promo}
        />

      </View>
    );
  }
};

const styles = StyleSheet.create({
  nav: {
    width: 405,
    height: 200,
  },
  magic: {
    width: 405,
    height: 100,
  },
  promo: {
    width: 405,
    height: 300,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
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