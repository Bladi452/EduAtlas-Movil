import React from 'react'
import { ScrollView } from 'react-native'
import {View, Text} from 'react-native'
import {Button} from 'react-native-elements'
export default function InfoSelect (){
    
    return(
    <ScrollView>
        <View>
            <Text>Info</Text>
            <Button
            title="Espera"
            />
        </View>
    </ScrollView>
)
}