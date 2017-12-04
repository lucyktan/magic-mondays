import React from 'react';
// <<<<<<< Updated upstream
// import { StyleSheet, Text, View } from 'react-native';
// import {StackNavigator,} from 'react-navigation';

// import ScreenHome from './ScreenHome';
// import ScreenSplash from './ScreenSplash';
// import ScreenGame from './ScreenGame';
// import ScreenPrize from './ScreenPrize';
// import ScreenWallet from './ScreenWallet';

// const App = StackNavigator({
//   ScreenHome: {screen: ScreenHome},
//   ScreenSplash: {screen: ScreenSplash},
//   ScreenGame: {screen: ScreenGame},
//   ScreenPrize: {screen: ScreenPrize},
//   ScreenWallet: {screen: ScreenWallet},
// =======
import {Animated,Easing,TouchableOpacity,Button,Image,StyleSheet, Text, View } from 'react-native';
import Wheel from './Wheel';
import SpinButton from './SpinButton';
import * as circle from './macys.gif';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      click: false,
    };

    
  }
  


  render() {
    var min = 540;
    var max = 5400;
    var value = Math.random() *(max - min);
    var dur = Math.abs((1000/(value-500) * 1000)+ 5000);
    return (
      <View style ={styles.container}>        
        <Wheel buttonClick={this.state.click} />
        
        <Button style={styles.button}title={'SPIN'}  onPress={() => this.setState({click: true})}/>
         
      </View>
    );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  button: {
    height: 200,
    width: 200,
    backgroundColor: 'green'
  }
});
// >>>>>>> Stashed changes
// });

// export default App;
