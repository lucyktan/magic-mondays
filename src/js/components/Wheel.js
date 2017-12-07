
import React , {Component} from 'react';
import {PanResponder, TouchableOpacity, Easing, Animated, Image, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

import circleImage from '../../../img/macys.gif';

export default class Wheel extends Component {
  constructor(props){

    super(props);
    this.state = {
      spinValue: new Animated.Value(0),
      buttonClicked: false
    }
  }
  
  componentWillReceiveProps(newProps){

    if(newProps.buttonClick){
      spinAnimation(this.state.spinValue, 100* (Math.random() *50),this.props.onDone);      
    }
  }

  componentWillMount(){
    this.state.spinValue = new Animated.Value(0);
    this._value = 0;

    // Gesture Responder system
    this.state.spinValue.addListener((value)=> this._value = value);
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      // Sets offset for inital location
      onPanResponderGrant: (e, gestureState) => {
        this.state.spinValue.setOffset(this._value);
      },
      //Animates based on y (tracks on right side of circle)
      onPanResponderMove: 
          Animated.event([null, {dy: this.state.spinValue}])

      ,
      // After swipe down, gets distance from initial location and animates the spin
      onPanResponderRelease: (evt,gestureState) => {
        spinAnimation(this.state.spinValue, gestureState.dy* (Math.random() *50),this.props.onDone);
      }
    });
  }
  componentWillUnmout(){
    this.state.spinValue.removeEventListener()
  }

  render() {
    return (
        <View style={styles.circle} {...this._panResponder.panHandlers}>
            <Animated.Image source={circleImage} style={{transform:[{rotate: this.state.spinValue.interpolate({inputRange: [0,180], outputRange: ["0deg","180deg"]})}]}} >
            </Animated.Image>
        </View>
    );
  };
}

function spinAnimation(initial, final,callback){
  Animated.timing(
    initial,
    {
      toValue: final,
      duration: 6000,
      easing: Easing.bezier(.12,.91,.18,.93),
      useNativeDriver: false
    }).start(callback);    
}

const styles = StyleSheet.create({
  circle:{
    height: 344,
    width: 344, 
    justifyContent:'center',
    alignItems: 'center'
  }
});
