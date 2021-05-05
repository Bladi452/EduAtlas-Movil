import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Registro from '../screens/Cuenta/Registro'
import Cuenta from '../screens/Cuenta/Cuenta'
import Login from '../screens/Cuenta/Login'

import Seleccion from '../screens/Inscripcion/Seleccion';
import InfoSelect from '../screens/Inscripcion/InfoSelect';
import Espera from '../screens/Inscripcion/Espera';


const Stack = createStackNavigator();

export default function CuentaStack() {
 
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Cuenta"
            component={Cuenta}
        />
 
        <Stack.Screen
            name="Login"
            component={Login}
            options={{title:"Login"}}
        />
 
        <Stack.Screen
            name="Registro"
            component={Registro}
            options={{title:"Registro"}}
        />
 
        <Stack.Screen
            name="Seleccion"
            component={Seleccion}
            options={{title:"Elige la escuela"}}
        />

            <Stack.Screen
            name="Info"
            component={InfoSelect}
            options={{title:"Informacion de la escuela"}}
        />

        <Stack.Screen
        name="Espera"
        component={Espera}
        options={{title:"Espera"}}
        />
        
        
        </Stack.Navigator>
        )
}