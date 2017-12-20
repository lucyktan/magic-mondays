import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableHighlight,
  Platform
} from 'react-native';
import CheckBox from 'react-native-checkbox';
import Background from '../img/background-without-logo.png';
import mainImage from '../img/asset-box.png'; 
import logo from '../img/logo.png';

class ScreenSplash extends Component {

  constructor (prop, context) {
    super(prop, context);
    this.state = {
      isChecked: false
    };
  }

  checkbox = () => {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <Image
        style={{
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
        source={Background}
      >
        <View style={styles.container}>
          <Image style={styles.logo} source={logo}/>
          <Text style={styles.basicText}>Play now to unlock your prize!</Text>
          <Image style={styles.image} source={ mainImage }/>
          <CheckBox
            label='I agree to the Terms & Conditions'
            labelStyle={styles.checkTerms}
            containerStyle={styles.checkboxContainerStyle}
            checked={this.state.isChecked}
            onChange={this.checkbox}
           />
            
          <View style={styles.buttonContainer}>
            { (this.state.isChecked) ? 
                <TouchableHighlight
                onPress={() => navigate("ScreenGame", {screen: "Screen Game"})} 
                style={[styles.button, {backgroundColor: '#45A2C4'}]}>
                <Text style={styles.buttonText}>Play Now!</Text>
              </TouchableHighlight>
              : 
              <TouchableHighlight
                style={[styles.button, {backgroundColor: '#cbe5ef'}]}>
                <Text style={styles.buttonText}>Play Now!</Text>
              </TouchableHighlight>
            }
          </View>
        </View>
      </Image>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: 50
  },
  checkTerms: {
    flexWrap: 'wrap',
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  checkboxContainerStyle: {
    paddingTop: 25
  },
  basicText: {
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    letterSpacing: 2,
    paddingTop: 20,
    //paddingBottom: 15,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  logo: {
    flex: 1,
    resizeMode: 'center',
    paddingBottom: 35
  },
  image: {
    flex: 1,
    width: 300,
    height: 300,
    paddingBottom: 190
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 75,
    paddingVertical: 15,
    paddingBottom: 65
  },
  button: {
    alignItems: 'center',
    paddingHorizontal: 65, 
    paddingVertical: 15
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18
  }
});
export default ScreenSplash;