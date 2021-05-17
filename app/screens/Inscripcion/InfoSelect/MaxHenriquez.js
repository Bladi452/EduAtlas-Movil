import React from 'react'
import { ScrollView } from 'react-native'
import {View, Text, Image,StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'

export default function MaxHenriquez (){
   const navigate = useNavigation()
    

 return(
    <ScrollView style={styles.container}>
        <View>

<Text style={styles.titulo}>EduAtlas</Text>

<Image source={require("../../../../assets/Imagen.png")}
    style={styles.logo}
/>
            
        <Text 
        style={[styles.textsec,{
    fontSize:18,
    color:"#ffffff",
    marginTop:11,
    marginBottom:20,
}]}>Politécnico Max Henriquez Ureña</Text>
    
    <Text style={[styles.textsec,{
      fontSize:14,
      marginTop:11,
      marginBottom:20,
    }]}>El centro se encuentra operando desde el año 2000, nos enfocamos en dar excelencia en nuestros estudiantes capacitandolos en las siguientes areas Tecnicas:</Text>
            <Text style={[styles.textsec,{fontSize:15, color:"#ffffff"}]}>Electricidad.</Text>
            <Text style={[styles.textsec,{fontSize:15, color:"#ffffff"}]}>Refrigeracion.</Text>
            <Text style={[styles.textsec,{fontSize:15, color:"#ffffff"}]}>Informatica.</Text>
            <Text style={[styles.textsec,{fontSize:15, color:"#ffffff"}]}>Logistica.</Text>
            <Text style={[styles.textsec,{fontSize:15, color:"#ffffff"}]}>Contabilidad.</Text>
            <Text style={[styles.textsec,{fontSize:15, color:"#ffffff"}]}>Electronica.</Text>
            
        <Text style={[styles.textsec,{
      backgroundColor:"#ffffff",
      fontSize:16,
      marginTop:11,
      marginBottom:22,
    }]}>Ubicacion</Text>
        </View>
    </ScrollView>
)
}
const styles = StyleSheet.create({

textsec:{
    textAlign:"center",
    fontWeight:"bold",
  },
  container:{
    backgroundColor:"#08D5B9",
    height:"100%"
  },

  logo: {
    width:122.1,
    height: 125,
    alignSelf :"center",
  },

  titulo:{
    fontSize:62,
    color:"#ffffff",
    alignSelf:"center",
    fontWeight:"bold",
    marginBottom:4
  }
})