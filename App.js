import 'react-native-gesture-handler';
import React from 'react';
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

//Ya funciona, sigue desde esa parte
// Desde seleccion inicia
//Y ese error
// Eso ya paso, eso fue cuando yo intentaba hacer una cosa, tranquilo
// Ahora el deberia estar imprimiendome lo que le estamos pasando pero no lo hace, voy a ver por que