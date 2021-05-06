import React from 'react'
import { ScrollView } from 'react-native'
import {View, Text} from 'react-native'
import {Button} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
export default function Seleccion (){
   const navigate = useNavigation()
    
    return(
    <ScrollView>
        <View>
            <Text>Espera</Text>
             <Button
            title="Home"
            onPress={()=>navigate.navigate("Home")}
            />
        </View>
    </ScrollView>
)
}