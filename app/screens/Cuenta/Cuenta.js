import React from 'react';
import { ScrollView, View,Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Login from './Login';
export default function Cuenta() {
   return (
       <ScrollView>
    <View>
        <Registrar/>
    </View>
</ScrollView>
    )
}

function Registrar () {

    const navigation = useNavigation();
    return(
    
    <Text>
        <Text
        onPress={()=>navigation.navigate("Login")}
        >Iniciar Sesion   </Text>
 
        <Text
        onPress={()=>navigation.navigate("Registro")}
        >Registrate </Text>
    
    </Text>
    )
}