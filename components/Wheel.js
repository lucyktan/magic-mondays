
import React , {Component} from 'react';
import {PanResponder, TouchableOpacity, Easing, Animated, Image, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

import * as circle from '../img/macys.gif';

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
          this.state.spinValue.setOffset(this._value);
        },
        onPanResponderMove: 
            Animated.event([null, {dy: this.state.spinValue}])

        ,
        onPanResponderRelease: (evt,gestureState) => {
          Animated.timing(
              this.state.spinValue,
            {
              toValue: gestureState.dy* (Math.random() *50),
              duration: 8000,
              easing: Easing.bezier(.12,.91,.18,.99),
              useNativeDriver: false
            }
          ).start();
        }

      });
  }

  render() {
    if(this.state.buttonClicked){
      Animated.timing(
              this.state.spinValue,
            {
              toValue: 100* (Math.random() *50),
              duration: 6000,
              easing: Easing.bezier(.12,.91,.18,.93),
              useNativeDriver: false
            }
          ).start(
            // this.props.onDone
            );      
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
