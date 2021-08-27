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


export default function Seleccion (route){
console.log(route)
  const navigation = useNavigation()
    
   useEffect(()=>{
    interstial();
      },[])
      
    return(
    <ScrollView style={styles.vista}>
        <View>
            <Image style={styles.logo} 
            source={require("../../../assets/Meditar.png")}/>
            
            
            {route.denegado
          ?           <Text
          onPress={() => navigation.navigate("Seleccion", {id : route.id})}
          style={[
            styles.skip,
            { backgroundColor: '#00a680', color: 'white', borderRadius: 8 },
          ]}
        >
          Tu solicitud fue denegada, presiona aqui y envia otra a una escuela diferente
        </Text>
          : <Text style={styles.text}>Tu solicitud ya fue enviada, espera con paciencia tu respuesta, aún  la solicitud está pendiente</Text>}

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
    skip: {
      marginTop:50,
      textAlign: 'center',
      padding: 10,
      fontSize: 16,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 2,
      justifyContent: 'center'
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