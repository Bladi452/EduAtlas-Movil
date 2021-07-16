import React from 'react'
import {Image, StyleSheet,Button,ScrollView , View, Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'
export default function Seleccion (){
   const navigate = useNavigation()
    
    return(
    <ScrollView style={styles.vista}>
        <View>
            <Image style={styles.logo} 
            source={require("../../../assets/Meditar.png")}/>
            
            <Text style={styles.text}>Tu solicitud ya fue enviada, espera con paciencia tu respuesta, aun la solicitud esta pendiente</Text>
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    vista:{
        backgroundColor:"#ffffff",
        height:"100%"
    },
  logo: {
    marginTop:80,
    width: 200,
    height: 200,
    alignSelf :"center",
    },
    text:{
        marginTop:50,
        marginBottom:40,
        textAlign:"center",
        fontSize:28,
        fontWeight:"bold",
        color:"#0C99E6"
    }
})