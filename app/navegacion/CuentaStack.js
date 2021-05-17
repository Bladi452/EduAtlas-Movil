import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Registro from '../screens/Cuenta/Registro'
import Cuenta from '../screens/Cuenta/Cuenta'
import Login from '../screens/Cuenta/Login'
import RegistroC from '../screens/Cuenta/RegistroC' 

import Seleccion from '../screens/Inscripcion/Seleccion';
import JuanRamon from '../screens/Inscripcion/InfoSelect/JuanRamon';
import MaxHenriquez from '../screens/Inscripcion/InfoSelect/MaxHenriquez';
import Minaya from '../screens/Inscripcion/InfoSelect/Minaya';
import Espera from '../screens/Inscripcion/Espera';
import Home from '../screens/Home'

const Stack = createStackNavigator();

export default function CuentaStack() {
 
    return(
        <Stack.Navigator screenOptions={{
           headerStyle:{
          backgroundColor:'#009387'
        },
        headerTintColor:
          '#fff',
        headerTitleStyle:{
          fontWeight:'bold'
        
        },
        }}>
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
            name="RegistroC"
            component={RegistroC}
            options={{title:"Registro"}}
        />
        <Stack.Screen
            name="Seleccion"
            component={Seleccion}
            options={{title:"Elige la escuela"}}
        />

            <Stack.Screen
            name="Juan"
            component={JuanRamon}
            options={{title:"Informacion de la escuela"}}
        />
        
        <Stack.Screen
            name="Union"
            component={MaxHenriquez}
            options={{title:"Informacion de la escuela"}}
        />
        <Stack.Screen
            name="Minaya"
            component={Minaya}
            options={{title:"Informacion de la escuela"}}
        />


        <Stack.Screen
        name="Espera"
        component={Espera}
        options={{title:"Espera"}}
        />
         
         <Stack.Screen
        name="Home"
        component={Home}
        options={{title:"Home",
       
        }}
        />
        
        
        </Stack.Navigator>
        )
}