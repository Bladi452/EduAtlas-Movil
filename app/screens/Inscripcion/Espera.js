import React, {useEffect} from 'react';
import {Image, StyleSheet,Button,ScrollView , View, Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import { AdMobInterstitial } from 'expo-ads-admob';

const interstial = async () =>{
  await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ID, Replace with your-admob-unit-id

  try {
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
    await AdMobInterstitial.showAdAsync(); 
  } catch (error) {
    console.log(error)
  }
}


export default function Seleccion (){
   const navigate = useNavigation()
    
   useEffect(()=>{
    interstial();
      },[])

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