import React, { Component } from 'react';
import {Dimensions,Animated,Easing,TouchableHighlight,Button,Image,StyleSheet, Text, View } from 'react-native';

//Our stuff
import Wheel from './components/Wheel';
import Modal from 'react-native-modal';
import backgroundImage from '../img/background-without-logo.png';
import macysLogo from '../img/macys-logo-white.png';
import tickerImage from '../img/Ticker.png';
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
        break;
      case 1:
        reward = 'towels'
        break;
      case 2:
        reward = 'perfume'
        break;
      case 3:
        reward = 'giftcard'
        break;
      case 4:
        reward = 'shoes'
        break;
    }
    this.setState({click: false, val: true,prize: reward});
  }

  componentDidUpdate() {
    setTimeout( () => {
      if(this.state.val){
        this.setState({val: false});
        this.state.navigate("ScreenPrize", {screen: "Screen Prize",prize: this.state.prize});
      }
    }, 6900);
  }

  render() {
    const { state, navigate } = this.props.navigation;
    return (
      
      <View>
        <View style={{position: 'absolute'}}>
          <Image style={{flex: 1,resizeMode: 'cover',justifyContent:'center',alignItems:'center',height:Dimensions.get('screen').height,width:Dimensions.get('screen').width}} source={backgroundImage}/> 
        </View>
        <View style={styles.headerContainer}>    
          <Text> Macys Mondays! </Text>
          <Button title={'How to Play'} onPress={this._showModal} />
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
            <Image source={tickerImage} resizeMode="contain" style={{top: -225,alignSelf:'center',position: 'absolute',height: 84, width: 127}}/>

            <Button style={styles.button} title={'SPIN'}  onPress={ this.handlePressSpin}/>
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
    top: 100
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
    top: 400
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
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  backgroundImage: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    height: 50,
    flex: 2,
    margin: 10,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18
  }
});
export default ScreenGame;