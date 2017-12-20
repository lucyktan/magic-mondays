
import React , {Component} from 'react';
import {PanResponder, Easing, Animated, Image, StyleSheet, View} from 'react-native';

import circleImage from '../../img/Wheel2.png';

class Wheel extends Component {
  constructor(props){

    super(props);
    this.state = {
      spinValue: new Animated.Value(0),
      buttonClicked: false
    }
    this.spinAnimation = this.spinAnimation.bind(this);
  }
  
  componentWillReceiveProps(newProps){

    if(newProps.buttonClick){
      var rngVal = 100* (Math.random() *50);
      this.spinAnimation(this.state.spinValue, rngVal,this.props.onDone(rngVal));  
    
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
        var rngVal = gestureState.dy* (Math.random() *50);
        this.spinAnimation(this.state.spinValue, rngVal,this.props.onDone(rngVal));
      }
    });
  }
  componentWillUnmount(){
    // this.state.spinValue.removeEventListener()
  }

  spinAnimation(initial, final,callback){
    Animated.timing(
      initial,
      {
        toValue: final,
        duration: 6000,
        easing: Easing.bezier(.12,.91,.18,.93),
        useNativeDriver: false
      }).start(callback);    
  }

  render() {
    return (
        <View style={styles.circle} {...this._panResponder.panHandlers}>
          
          <Animated.Image source={circleImage} style={{height: 344, width: 344,transform:[{rotate: this.state.spinValue.interpolate({inputRange: [0,180], outputRange: ["0deg","180deg"]})}]}} >
          </Animated.Image>
           
        </View>
    );
  };
}

const styles = StyleSheet.create({
  circle:{
    height: 344,
    width: 344, 
    justifyContent:'center',
    alignItems: 'center'
  }
});

export default Wheel;