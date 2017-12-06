import React, { Component } from 'react';
import {Animated,Easing,TouchableHighlight,Button,Image,StyleSheet, Text, View } from 'react-native';
import Wheel from './components/Wheel';
import * as circle from './img/macys.gif';
class ScreenGame extends Component {

  render() {
    
    const { state, navigate } = this.props.navigation;
    if(this.state.val){
      navigate("ScreenPrize", {screen: "Screen Prize"})
    }
    return (
      <View style={styles.container}>    
        <Wheel 
          /*onDone={this.done} */
          navigate = {navigate} buttonClick={this.state.click} />
        
        { (this.state.click) ? <Button title={'Next Page'} onPress={() =>navigate("ScreenPrize", {screen: "Screen Prize"})} /> : <Button style={styles.button} title={'SPIN'}  onPress={() => this.setState({click: true})}/>
        }
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