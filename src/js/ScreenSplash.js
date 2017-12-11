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
import couponPage from '../img/coupon-page.jpg'

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
      <Image 
        source={couponPage}
        style={styles.container}>

        <View style={styles.container}>
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
                style={[styles.button, {backgroundColor: 'white'}]}>
                <Text style={styles.buttonText}>Play Now!</Text>
              </TouchableHighlight>
              : 
              <TouchableHighlight
                style={[styles.button, {backgroundColor: 'white'}]}>
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
    height: null,
    width: null,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: '#cc0000',
    fontFamily: (Platform.OS === 'ios')? 'Helvetica Neue' : 'Roboto',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 50,
    paddingBottom: 20,
    textAlign: 'center'
  },
  checkTerms: {
    flexWrap: 'wrap',
    color: 'black',
  },
  checkboxContainerStyle: {
    paddingTop: 600,
    justifyContent: 'center',
    alignItems: 'center',
  },
  basicText: {
    paddingTop: 20,
    paddingBottom: 25,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonContainer: {
    height: 100,
    paddingTop: 0,
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
    color: '#cc0000',
    alignSelf: 'center',
    fontSize: 18
  }
});
export default ScreenSplash;