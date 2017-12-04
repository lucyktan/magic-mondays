
import React , {Component} from 'react';
import {PanResponder, TouchableOpacity, Easing, Animated, Image, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

import * as circle from './macys.gif';

export default class Wheel extends Component {
  constructor(props){

    super(props);
    this.state = {
      spinValue: new Animated.Value(0),
      buttonClicked: false
    }
    
  }
  
  componentWillReceiveProps(newProps){
    this.setState({buttonClicked: newProps.buttonClick});
  }

  componentWillMount(){
      this.state.spinValue = new Animated.Value(0);
      this._value = 0;
      this.state.spinValue.addListener((value)=> this._value = value);
      this._panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
        onPanResponderGrant: (e, gestureState) => {
          console.log(gestureState,'2');
          this.state.spinValue.setOffset(this._value);
         this.state.spinValue.setValue(0);

        },
        onPanResponderMove: 
            Animated.event([null, {dy: this.state.spinValue}])
        ,
        onPanResponderRelease: (evt,gestureState) => {
          animateSpin(this.state.spinValue,gestureState.dy* (Math.random() *50),true)
        }
      });
  }

  render() {
    if(this.state.buttonClicked){
      animateSpin(this.state.spinValue,100*(Math.random()* 50),false);
      
    }
    return (
      
        <View {...this._panResponder.panHandlers}>
            <Animated.Image source={circle.default} style={{transform:[{rotate: this.state.spinValue.interpolate({inputRange: [0,180], outputRange: ["0deg","180deg"]})}], flexDirection: 'column',height: 300, width: 300, justifyContent:'center',alignItems: 'center',}} >
            </Animated.Image>
        </View>
    );
  };
}

const styles = StyleSheet.create({
  circle:{
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    // backgroundColor: 'teal',
    width: 300,
    height: 300,
    borderRadius: 150
  }
});

function animateSpin(initial, final,useNativeDrivers){
  var animation = Animated.timing(
              initial,
            {
              toValue: final,
              duration: 8000,
              easing: Easing.bezier(.12,.91,.18,.93),
              useNativeDriver: useNativeDrivers
            }
          ).start();
  return animation;
}