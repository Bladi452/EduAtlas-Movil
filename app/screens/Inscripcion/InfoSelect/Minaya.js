import React from 'react'
import { ScrollView } from 'react-native'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import MapView,{Marker} from 'react-native-maps'

export default function Minaya (){
   const navigation = useNavigation()

 return(
    <ScrollView style={styles.container}>
        <View>

<Text style={styles.titulo}>EduAtlas</Text>

<Image source={require("../../../../assets/10580839_470034759834609_118104629834084973_o.jpg")}
    style={styles.logo}
/>
            
        <Text 
        style={[styles.textsec,{
    fontSize:18,
    color:"#ffffff",
    marginTop:11,
    marginBottom:20,
}]}>Politécnico Prof. Virgilio Casilla Minaya</Text>
    
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
      color:"#000000",
      fontSize:18,
      marginTop:11,
      marginBottom:13,
    }]}>Ubicacion</Text>

<MapView style={styles.map} initialRegion={{latitude:18.531510573503265, longitude:-70.03993634693603, latitudeDelta:0.03,
    longitudeDelta:0.03 }}>
<Marker
  coordinate={{ latitude : 18.531510573503265 , longitude : -70.03993634693603 }} title="Virgilio Casilla Minaya"
/>

</MapView>

    <TouchableOpacity
        onPress={()=>navigation.navigate("Espera")}
        style={[styles.sesion, {
          backgroundColor:"#FCAD6D"
        }]}>
        <Text style={{ marginTop:11,fontSize: 15, color: '#fff'}}>Enviar Solicitud</Text>
      </TouchableOpacity>
  
        </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
con:{
  position:'absolute',
  top:0,
  left:0,
  right:0,
  bottom:0
},

map:{
  width: 312.5,
  height: 103.3,
  alignSelf:"center"
},

sesion:{
  alignItems:"center",
  height:45,
  width:300,
  borderRadius:8,
  alignSelf:"center",
  marginTop: 20
},

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
    marginBottom:2
  }
})