import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator,} from 'react-navigation';

import ScreenHome from './ScreenHome';
import ScreenSplash from './ScreenSplash';
import ScreenGame from './ScreenGame';
import ScreenPrize from './ScreenPrize';
import ScreenWallet from './ScreenWallet';

const App = StackNavigator({
  ScreenHome: {screen: ScreenHome},
  ScreenSplash: {screen: ScreenSplash},
  ScreenGame: {screen: ScreenGame},
  ScreenPrize: {screen: ScreenPrize},
  ScreenWallet: {screen: ScreenWallet},
});
export default App;
