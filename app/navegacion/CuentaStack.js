import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Registro from '../screens/Cuenta/Registro'
import Cuenta from '../screens/Cuenta/Cuenta'
import Login from '../screens/Cuenta/Login'
import RegistroC from '../screens/Cuenta/RegistroC' 

import Events from '../screens/events/Events'
import HomeStackAdmin from './HomeStackAdmin'
import Seleccion from '../screens/Inscripcion/Seleccion';
import solicitudes from '../screens/Admin/solicitudes';
import MaxHenriquez from '../screens/Inscripcion/InfoSelect/MaxHenriquez';
import Espera from '../screens/Inscripcion/Espera';
import Home from '../screens/Home'
import Navegacion from './Navegacion'
import CheckEstatus from '../components/navegacion/CheckEstatus'
import Valid from '../components/navegacion/Valid'
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
        options={{title:'Tecno Atlas', headerTitleAlign: 'center'}}
        />

 <Stack.Screen
            name="Events"
            component={Events}
        options={{title:'Tecno Atlas', headerTitleAlign: 'center'}}
        />

 <Stack.Screen
            name="Navegacion"
            component={Navegacion}
            options={{title:'Tecno Atlas', headerLeft: null, headerTitleAlign: 'center'}}
        />
        <Stack.Screen
            name="vali"
            component={Valid}
            options={{title:"", headerLeft: null}}
/>

<Stack.Screen
            name="HomeStackAdmin"
            component={HomeStackAdmin}
            options={{title:"", headerLeft: null}}
/>


<Stack.Screen
            name="solicitudes"
            component={solicitudes}
            options={{title:"Soliticudes"}}
/>




        <Stack.Screen
            name="check"
            component={CheckEstatus}
        />
 
        <Stack.Screen
            name="Login"
            component={Login}
            options={{title:"Login", headerLeft: null}
            
           }
        />
 

         <Stack.Screen
            name="Seleccion"
            component={Seleccion}
            options={{title:"Elige la escuela",headerLeft: null}}
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
            name="Union"
            component={MaxHenriquez}
            options={{title:"Informacion de la escuela"}}
        />

        <Stack.Screen
        name="Espera"
        component={Espera}
        options={{title:"Espera",headerLeft: null}}
        />
         <Stack.Screen
        name="Home"
        component={Home}
        options={{title:"Home",
        headerLeft: null
        }}
        />
        </Stack.Navigator>
        )
}