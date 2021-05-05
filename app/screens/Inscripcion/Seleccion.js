import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import {Button} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
export default function Seleccion (){
    
    const navigation = useNavigation()

    return(
    <ScrollView>
        <View>
            <Text>Seleccion</Text>
            <Button
                title="Hola"
                onPress={()=> navigation.navigate("Info")}
            />
        </View>
    </ScrollView>
    )

}