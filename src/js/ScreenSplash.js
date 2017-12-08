import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  Platform
} from 'react-native';
import CheckBox from 'react-native-checkbox';
import couponImage from '../img/coupon.png';

class ScreenSplash extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: `Welcome ${navigation.state.params.screen}`,
    }
  };
  constructor (prop, context) {
    super(prop, context);
    this.state = {
      isChecked: false
    };
  }

  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Happy Macy's Monday!</Text>
        <Text style={styles.basicText}>Play now to unlock your prize!</Text>
        <Image style={styles.image} source={ couponImage }/>
        <CheckBox
          label='I agree to the Terms & Conditions'
          labelStyle={styles.checkTerms}
          containerStyle={styles.checkboxContainerStyle}
          checked={this.state.isChecked}
          onChange={(checked) => this.setState({ isChecked: !checked })}
          {...console.log('Terms box checked', this.state.isChecked)}/>
          
        <View style={styles.buttonContainer}>

        { (this.state.isChecked) ? 
            <TouchableHighlight
            onPress={() => navigate("ScreenGame", {screen: "Screen Game"})} 
            style={[styles.button, {backgroundColor: '#CC0000'}]}>
            <Text style={styles.buttonText}>Play Now!</Text>
          </TouchableHighlight>
          : 
          <TouchableHighlight
            style={[styles.button, {backgroundColor: '#EB9999'}]}>
            <Text style={styles.buttonText}>Play Now!</Text>
          </TouchableHighlight>
        }

        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '15%'
  },
  titleText: {
    color: '#CC0000',
    fontFamily: (Platform.OS === 'ios')? 'Helvetica Neue' : 'Roboto',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 50,
    paddingBottom: 20,
    textAlign: 'center'
  },
  checkTerms: {
    flexWrap: 'wrap'
  },
  checkboxContainerStyle: {
    padding: '15%'
  },
  basicText: {
    paddingTop: 20,
    paddingBottom: 25,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    flex: 1,
    resizeMode: 'contain'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 75,
    paddingVertical: 15
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