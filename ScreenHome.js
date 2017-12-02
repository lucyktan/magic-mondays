import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { Container, Content, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';


class ScreenHome extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;

    console.log(this.props, "props is here");
    return (
      <Container style={styles.backgroundImage}>
        <TouchableHighlight
          onPress={() => navigate("ScreenSplash", { screen: "Screen Splash" })}
          style={styles.magic}>
          <Image
            source={require('./img/app-background.png')}
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
    paddingTop: 12,
  },
  magic: {
    width: 600,
    height: 300,
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
