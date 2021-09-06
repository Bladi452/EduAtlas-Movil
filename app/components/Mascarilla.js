import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

function Mascarilla(){
    return (
        <View style={{flex:1, flexDirection:"row", flexWrap:"wrap"}}>
            <View style={{marginTop:20, marginLeft:10, marginRight:10}}>
            <Image source={require("../../assets/mascarilla-medica.png")}
        style={{
            marginTop:0, 
            width:60,
            height:60,
}}
         />
            </View>
                <View style={{ marginLeft:"6%",alignItems:"center"}} >
            <Text style={{marginTop:3, fontSize: 19, fontWeight:'bold', color:"#ffffff"}}>Aviso importante</Text>
            <Text style={{marginTop:10, color:"#ffffff" }}>No te olvides de usar tu mascarilla</Text>
        </View>
        </View>
    )
}

export default Mascarilla
