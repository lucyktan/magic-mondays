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
import Background from '../img/background-without-logo.png';
import mainImage from '../img/asset-box.png'; 
import logo from '../img/logo.png';
import backgroundImage from '../img/background-without-logo.png';
import macysLogo from '../img/macys-logo-white.png';
import tc from '../img/info.png';
import Modal from 'react-native-modal';
import CheckBox from 'react-native-checkbox';

class ScreenSplash extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: `Welcome ${navigation.state.params.screen}`,
    }
  };
  constructor (prop, context) {
    super(prop, context);
    this.state = {
      isChecked: false,
      isModalVisible: false,
    };
  }

  _showModal = () => this.setState({ isModalVisible: true });

  _hideModal = () => this.setState({ isModalVisible: false });


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

         <View style={styles.checkboxterms}> 
          <CheckBox
            label='I agree to the Terms & Conditions'
            labelStyle={styles.checkTerms}
            
            checked={this.state.isChecked}
            onChange={(checked) => this.setState({ isChecked: !checked })}
            {...console.log('Terms box checked', this.state.isChecked)}/>
          <TouchableHighlight style={styles.termsHi} onPress={() => {this._showModal()}}>
              <View>
              <Image source={tc} style={styles.tc}/>
              </View>  
            </TouchableHighlight>
          </View>

          <Modal style={styles.modalContainer2} onBackdropPress = {this._hideModal} isVisible={this.state.isModalVisible}>
            <Image style={styles.modalImage} source={backgroundImage} >
            <Image style={styles.logoModalImage} source={macysLogo}></Image>
              <Text style={styles.titleText}>
                          Lorem ipsum dolor sit amet, consectetur wer
                          adipiscing elit. Morbi eu dignissim tellus. 
                          Phasellus dui tortor, pulvinar eget felis id, 
                          dictum dapibus ligula. Bleep Bleep Bloop.
              </Text>
            </Image>
          </Modal>

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
    top: 40
  },
  tc: {
    flex:1,
    height: 20,
    width: 20,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -18,
  },
  termsHi:{
    flex: 1,
    width: 20,
    height: 20,
    right: -14,
    position: 'absolute',
    backgroundColor: 'transparent',

  },
  checkboxterms: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    bottom: 5,
  },
  checkTerms: {
    flexWrap: 'wrap',
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'grey',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1,
  },
  basicText: {
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 4,
    letterSpacing: 2,
    paddingTop: 5,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    color: 'black',
    marginLeft: 10,
    marginTop: 15,
    marginRight: 10
  },
  logo: {
    flex: 2,
    resizeMode: 'center',
  },
  image: {
    flex: 5,
    width: '100%',
    height: '100%',
    resizeMode: 'center',
    overflow: 'visible',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 75,
    paddingVertical: 5,
    paddingBottom: 65
  },
  button: {
    alignItems: 'center',
    paddingHorizontal: 65, 
    paddingVertical: 10
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18
  },
  modalImage: {
    resizeMode: 'stretch',
    width: '85%',
    height: '65%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  modalContainer2: {
    flex: 0.95,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  logoModalImage: {
    flex: .25,
    marginTop: 0,
    resizeMode: 'contain',
    marginBottom: 20
  },
});
export default ScreenSplash;