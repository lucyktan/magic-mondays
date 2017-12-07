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
import couponImage from '../../img/coupon.png';

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
    alignItems: 'center'
  },
  titleText: {
    color: '#CC0000',
    fontFamily: (Platform.OS === 'ios')? 'Helvetica Neue' : 'Roboto',
    fontSize: 30,
    paddingTop: 50,
    paddingBottom: 20,
    textAlign: 'center'
  },
  checkTerms: {
    // flexDirection: 'column',
    flexWrap: 'wrap'
  },
  checkboxContainerStyle: {
    padding: '5%',
    //width:'80%'
  },
  basicText: {
    paddingTop: 15,
    paddingBottom: 15,
    color: '#666666',
    fontSize: 20,
    textAlign: 'center'
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    paddingLeft: 20,
    paddingRight: 20
  },
  buttonContainer: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    height: 100,
    width: 100
  },
  button: {
    margin: 10,
    justifyContent: 'center',
    width: 100
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18
  }
});
export default ScreenSplash;