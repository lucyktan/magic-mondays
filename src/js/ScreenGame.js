import React, { Component } from 'react';
import {Animated,Easing,TouchableHighlight,Button,Image,StyleSheet, Text, View } from 'react-native';
import Wheel from './components/Wheel';
import * as circle from '../../img/macys.gif';


class ScreenGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      val: false,
      navigate: this.props.navigation.navigate
    };
    this.done = this.done.bind(this); // Binding done for child to communicate to parent
    this.handlePressSpin = this.handlePressSpin.bind(this);    
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Welcome ${navigation.state.params.screen}`,
    }
  };

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
      
      
      <View style={styles.container}>    
        <Text> Macy's Mondays </Text>
        
        <Wheel 
          onDone = {this.done}
          navigate = {navigate} buttonClick={this.state.click} />
        
        <Button style={styles.button} title={'SPIN'}  onPress={ this.handlePressSpin}/>
        
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