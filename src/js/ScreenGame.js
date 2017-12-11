import React, { Component } from 'react';
import {Platform,Dimensions,Animated,Easing,TouchableHighlight,Button,Image,StyleSheet, Text, View } from 'react-native';

//Our stuff
import Wheel from './components/Wheel';
import Modal from 'react-native-modal'
import TickerImage from '../img/Ticker.png';
import Background from '../img/background-without-logo.png';
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
          <Image style={{flex: 1,resizeMode: 'cover',justifyContent:'center',alignItems:'center',height:Dimensions.get('screen').height,width:Dimensions.get('screen').width}} source={Background}/> 
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.titleText}> Macy's Mondays </Text>
          <Button title={'How to Play'} onPress={this._showModal} />
        </View>
        <Modal style={{ height: 100 , width: 344}} onBackdropPress = {this._hideModal} isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1, justifyContent:'center',alignItems:'center',backgroundColor:'white' }}>
            <Text>Hello!</Text>
          </View>
        </Modal>
        <View style={styles.wheelContainer}>    

          <Wheel 
            onDone = {this.done}
            navigate = {navigate} buttonClick={this.state.click} />
          <Image source={TickerImage} resizeMode="contain" style={{top: -225,alignSelf:'center',position: 'absolute',height: 84, width: 127}}/>

          <Button style={styles.button} title={'SPIN'}  onPress={ this.handlePressSpin}/>
          
        </View>
      </View>
    );
  }
};



const styles = StyleSheet.create({
  wheelContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: 400
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: 100
  },
  titleText: {
    fontSize: 36,
    fontFamily: (Platform.OS === 'ios')? 'Helvetica Neue' : 'Roboto',

  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  button: {
    borderRadius: 20,
    borderColor: 'black',
    height: 50,
    flex: 2,
    margin: 10,
    justifyContent: 'center',
    backgroundColor: 'white',
    fontFamily: (Platform.OS === 'ios')? 'Helvetica Neue' : 'Roboto',

  }
});
export default ScreenGame;