import React from 'react'
import {View,Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Button} from 'react-native-elements'


export default function Login (){
    return (
        <View>
            <Text>Login</Text>
            <BotonForm/>
        </View>
    )
}

function BotonForm(){
const navigate = useNavigation();
    return(
        
        <Button
        title="Login"
        onPress={()=>navigate.navigate("Seleccion")}
    />

    )
}