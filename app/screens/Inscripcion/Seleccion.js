import React, {useState} from 'react'
import {View, Text, StatusBar,ScrollView, TouchableOpacity, StyleSheet, Image} from 'react-native'
import {useNavigation} from '@react-navigation/native';

export default function Seleccion () {
        
    const navigation = useNavigation();
    
    return(
        
        <View style={styles.container}>
      <Text style={styles.textsec}>Elige tu institución</Text>
    
      <TouchableOpacity
            onPress={()=>navigation.navigate("Union")}
    style={styles.sesion}>
            <Text style={{ marginTop:11,fontSize: 15, color: '#fff'}}>Politécnico Max Henríquez Ureña</Text>
          </TouchableOpacity>
         <View/>
     
      <TouchableOpacity
            onPress={()=>navigation.navigate("Minaya")}
            style={styles.sesion}>
            <Text style={{ marginTop:11,fontSize: 15, color: '#fff'}}>Virgilio Casilla Minaya</Text>
          </TouchableOpacity>  

          <TouchableOpacity
    onPress={()=>navigation.navigate("Juan")}
    style={styles.sesion}>
    <Text style={{ marginTop:11,fontSize: 15, color: '#fff'}}>Juan Ramón Nuñez Castillo</Text>
  </TouchableOpacity>  
</View>
        )
    }

    const styles = StyleSheet.create({
  
        container: {
          width:"100%",
          height:"100%",
        },
        textsec:{
          alignSelf:"center",
          marginTop:11,
          marginBottom:20,
          fontWeight:"bold",
          fontSize:18,
        },
        sesion:{
        backgroundColor:"#009387",
        alignItems:"center",
          height:45,
          width:"90%",
          borderRadius:8,
          marginTop: 13 ,
        alignSelf:"center"    
        }
      })