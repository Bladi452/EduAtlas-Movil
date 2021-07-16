import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'

import CuentaStack from './app/navegacion/CuentaStack';
import HomeStack from './app/navegacion/HomeStack';
import Navegacion from './app/navegacion/Navegacion'

export default function App() {
  
  return (
      <NavigationContainer>
        <CuentaStack/>
    </NavigationContainer>
  );

}
