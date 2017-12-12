import React, { Component } from 'react';
import {Dimensions,Animated,Easing,TouchableHighlight,Button,Image,StyleSheet, Text, View } from 'react-native';

//Our stuff
import Wheel from './components/Wheel';
import Modal from 'react-native-modal';
import backgroundLogoImage from '../img/background-with-logo.png';
import backgroundImage from '../img/background-without-logo.png';
import macysLogo from '../img/macys-logo-white.png';
import tickerImage from '../img/Ticker.png';
import spinToWin from '../img/Spin-To-Win-Skinny.png';
import spinToWin2 from '../img/Spin-To-Win-Wide.png';

class ScreenGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      val: false,
      navigate: this.props.navigation.navigate,
      isModalVisable: false
    };
    this.done = this.done.bind(this); // Binding done for child to communicate to parent
    this.handlePressSpin = this.handlePressSpin.bind(this);  
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Welcome ${navigation.state.params.screen}`,
    }
  };
  _showModal = () => this.setState({ isModalVisible: true });

  _hideModal = () => this.setState({ isModalVisible: false });

  handlePressSpin() {
    this.setState({click: !this.state.click});
    
  }

  done = () =>{
    this.setState({click: false, val: true });
  }

  componentDidUpdate() {
    setTimeout( () => {
      if(this.state.val){
        this.setState({val: false});
        this.state.navigate("ScreenPrize", {screen: "Screen Prize"});
      }
    }, 900);
  }

  render() {
    const { state, navigate } = this.props.navigation;
    return (
      
      <View>
        <View style={{position: 'absolute'}}>
           <Image style={{flex: 1,resizeMode: 'cover',justifyContent:'center',alignItems:'center',height:Dimensions.get('screen').height,width:Dimensions.get('screen').width}} source={backgroundLogoImage}/> 
        </View>
        <View style={styles.headerContainer}>    
          <Image style={styles.logoModalImage} source={macysLogo}></Image>
          <TouchableHighlight
            style={styles.buttonLarge}
            onPress={() => {this._showModal()}}>
            <Text style={styles.buttonText}>I'm so Confused!?!?</Text>
          </TouchableHighlight>

        </View>
          <Modal style={styles.modalContainer2} onBackdropPress = {this._hideModal} isVisible={this.state.isModalVisible}>
            <Image style={styles.modalImage} source={backgroundImage} >
            <Image style={styles.logoModalImage} source={macysLogo}></Image>
              <Text style={styles.titleText}>
                          Lorem ipsum dolor sit amet, consectetur wer
                          adipiscing elit. Morbi eu dignissim tellus. 
                          Phasellus dui tortor, pulvinar eget felis id, 
                          dictum dapibus ligula.Lorem ipsum dolor sit 
                          amet, consectetur. Morbi eu dignissim tellus.
                          Phasellus dui tortor, pulvinar eget felis id, 
                          dictum dapibus ligula.Lorem ipsum dolor sit 
                          amet, consectetur.
              </Text>
            </Image>
          </Modal>
          <View style={styles.wheelContainer}>

            <Wheel 
              onDone = {this.done}
              navigate = {navigate} buttonClick={this.state.click} />
            <Image source={tickerImage} resizeMode="contain" style={styles.ticker}/>

            <TouchableHighlight
              style={styles.buttonSmall}
              onPress={() => {this.handlePressSpin()}}>
              <Image source={spinToWin2} style={styles.spinToWinStyle}/>
              
            </TouchableHighlight>
          </View>
        </View>
    );
  }
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: 100,

  },
  spinToWinStyle: {
    width: 300,
    resizeMode: 'contain',
  },
  smallContainer: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer2: {
    flex: 0.95,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  wheelContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: 455,
  },
  ticker: {
    top: -218,
    alignSelf:'center',
    position: 'absolute',
    height: 84, 
    width: 127
  },
  modalImage: {
    resizeMode: 'stretch',
    width: '85%',
    height: '65%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

  },
  logoModalImage: {
    flex: .25,
    marginTop: 0,
    resizeMode: 'contain',
    marginBottom: 20
  },
  modalContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderRadius: 5,
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
  backgroundImage: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 150,
  },
  buttonSmall: {
    height: 50,
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: 45, 
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonLarge: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 35, 
    paddingVertical: 15,
    marginTop: 190,
  },
  buttonTextBlankBackground: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 48,
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#cc0000',
    alignSelf: 'center',
    fontSize: 18
  }
});
export default ScreenGame;