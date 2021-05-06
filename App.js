
import 'react-native-gesture-handler';
import React from 'react';
import {Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import CuentaStack from './app/navegacion/CuentaStack';
import HomeStack from './app/navegacion/HomeStack';

export default function App() {
  
  return (
      <NavigationContainer>
        <CuentaStack/>
 
    </NavigationContainer>
  );

}
