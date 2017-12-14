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
      isModalVisable: false,
      spinVal: 0,
      prize: 'shoe'
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

  done = (value) =>{
    var zone = Math.floor((360-(value % 360)) / 72);

    var reward = '';
    switch(zone){
      case 0:
        reward = 'beautybox';
        description = 'beautybox';
        break;
      case 1:
        reward = 'towels';
        description = 'towels';
        break;
      case 2:
        reward = 'perfume';
        description = 'perfume';
        break;
      case 3:
        reward = 'giftcard';
        description = 'gifttext';
        break;
      case 4:
        reward = 'shoes';
        description = 'shoes';
        break;
    }
    this.setState({click: false, val: true,prize: reward, text: description});
  }

  componentDidUpdate() {
    setTimeout( () => {
      if(this.state.val){
        this.setState({val: false});
        this.state.navigate("ScreenPrize", {screen: "Screen Prize", prize: this.state.prize, text: this.state.text});
      }
    }, 6900);
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
            onPress={() => {this._showModal()}}>
          <View style={styles.helpButton}>
            <Text style={styles.buttonText}>Help! I'm so Confused!?!?</Text>
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
            <TouchableHighlight onPress={() => {this.handlePressSpin()}}>
              <View>
              <Image source={spinToWin2} style={styles.spinToWinStyle}/>
              </View>
            </TouchableHighlight>
          </View>
        </View>
    );
  }
};
const styles = StyleSheet.create({
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
    top: -50
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
    top: 450,
    marginBottom: 0,
  },
  ticker: {
    top: -210,
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
  helpButton: {
    height: 30,
    flex: 1,
    borderRadius: 10,
    borderColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 25, 
    paddingVertical: 15,
    marginTop: 80,
    backgroundColor: 'white',
  },
  buttonLarge: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 35, 
    paddingVertical: 15,
    marginTop: 205,
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
    fontSize: 18,
    borderColor: 'white',
  }
});
export default ScreenGame;