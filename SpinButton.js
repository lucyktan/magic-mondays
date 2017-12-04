import React , {Component} from 'react';
import {Button, TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';
// import {Button} from 'native-base';

export default class SpinButton extends Component {
  render() {
const fontSize = 128;
const width = 200;
const height = 200;
    
    return (       
      <TouchableOpacity>
        <View style={styles.circleButton}> 
          <Text
            fill="white"
            fontFamily="Helvetica"
            fontWeight="bold"
            fontSize={fontSize}
            textAnchor="middle"
            x={width / 2}
            y={(height / 2) - (fontSize / 2)}
            height={fontSize}
            dy={fontSize * -0.25}
          >
            SPIN
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
}
const styles = StyleSheet.create({
  circleButton: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#841584',
    width: 75,
    height: 75,
    borderRadius: 50
    
  },
});
