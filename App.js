import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'

import CuentaStack from './app/navegacion/CuentaStack';
import HomeStack from './app/navegacion/HomeStack';
import Seleccion from './app/screens/Inscripcion/Seleccion'


export default function App() {
  
  return (
      <NavigationContainer>
        <CuentaStack/>
 
    </NavigationContainer>
  );

}
