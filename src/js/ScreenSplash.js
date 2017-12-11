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
        style={{
          backgroundColor: '#ccc',
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
        source={Background}
      >
        <View style={styles.container}>
          <Text style={styles.titleText}>Happy Macy's Monday!</Text>
          <Text style={styles.basicText}>Play now to unlock your prize!</Text>
          <Image style={styles.image} source={ mainImage }/>
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
                style={[styles.button, {backgroundColor: 'blue'}]}>
                <Text style={styles.buttonText}>Play Now!</Text>
              </TouchableHighlight>
              : 
              <TouchableHighlight
                style={[styles.button, {backgroundColor: 'lightblue'}]}>
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
    top: 80
  },
  titleText: {
    color: 'white',
    fontFamily: (Platform.OS === 'ios')? 'Helvetica Neue' : 'Roboto',
    fontSize: 30,
    fontWeight: 'bold',
    //paddingTop: 65,
    paddingBottom: 20,
    textAlign: 'center'
  },
  checkTerms: {
    flexWrap: 'wrap',
    color: 'black',
    fontWeight: 'bold',
  },
  checkboxContainerStyle: {
    paddingTop: 25
  },
  basicText: {
    paddingTop: 20,
    //paddingBottom: 25,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    flex: 1,
    width: 300,
    height: 300,
    paddingBottom: 85
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