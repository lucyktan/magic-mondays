import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator,} from 'react-navigation';

import ScreenHome from './src/js/ScreenHome';
import ScreenSplash from './src/js/ScreenSplash';
import ScreenGame from './src/js/ScreenGame';
import ScreenPrize from './src/js/ScreenPrize';
import ScreenWallet from './src/js/ScreenWallet';
import ScreenDescription from './src/js/ScreenDescription';

const App = StackNavigator({
  ScreenHome: {screen: ScreenHome},
  ScreenSplash: {screen: ScreenSplash},
  ScreenGame: {screen: ScreenGame},
  ScreenPrize: {screen: ScreenPrize},
  ScreenWallet: {screen: ScreenWallet},
  ScreenDescription: {screen: ScreenDescription},
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});
export default App;
