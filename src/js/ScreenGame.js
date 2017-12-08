import React, { Component } from 'react';
import {Dimensions,Animated,Easing,TouchableHighlight,Button,Image,StyleSheet, Text, View } from 'react-native';

//Our stuff
import Wheel from './components/Wheel';
import Modal from 'react-native-modal'

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
      
      <View style={{height: Dimensions.get('screen').height, width: Dimensions.get('screen').width}}>
        <View style={styles.container}>    
          <Text> Macy's Mondays </Text>
          <Button title={'How to Play'} onPress={this._showModal} />
          <Modal style={{ height: 100 , width: 344}} onBackdropPress = {this._hideModal} isVisible={this.state.isModalVisible}>
            <View style={{ flex: 1, justifyContent:'center',alignItems:'center',backgroundColor:'white' }}>
              <Text>Hello!</Text>
            </View>
          </Modal>
          <Wheel 
            onDone = {this.done}
            navigate = {navigate} buttonClick={this.state.click} />
          
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
    alignItems: 'center'
  },
  titleText: {
    fontSize: 22
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
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