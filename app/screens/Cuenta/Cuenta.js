import React from 'react';
import {View,Text,StyleSheet, Image,TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Cuenta() {

  return (

<View style={[styles.container]}>
      <View style={{ flex: 3, backgroundColor:"#03BFD3",
}}>
        <Fotos/>
      </View>
      <View style={{flex:2, backgroundColor:"#03BFD3",}}>
        <Registrar style={styles.inferior} />
      </View>
    </View>
    )
}

function Fotos (){
return(
    <View >
  <Image source={require('../../../assets/avatar.png')}
      style={styles.logo}
            resizeMode="contain"
      />
    </View>
  )
}

function Registrar () {

    const navigation = useNavigation();
    return(
    
    <View style={styles.inferior}>
  <Text style={styles.textsec} >¿Estás Registrado?</Text>
  <TouchableOpacity
        onPress={()=>navigation.navigate("Login")}
        style={[styles.sesion, {
          backgroundColor:"#EFAF4F"
        }]}>
        <Text style={{ marginTop:11,fontSize: 15, color: '#fff'}}>Continúa tu aventura</Text>
      </TouchableOpacity>
     <View/>
 
  <Text style= {styles.textsec} >¿Aún no lo haces?</Text>
  <TouchableOpacity
        onPress={()=>navigation.navigate("Registro")}
        style={[styles.sesion, {
          backgroundColor:"#3C5A9C"
        }]}>
        <Text style={{ marginTop:11,fontSize: 15, color: '#fff'}}>Comienza tu aventura</Text>
      </TouchableOpacity>  
    </View>
    )
}


const styles = StyleSheet.create({
  
  container: {
    flex: 1, 
    width:"100%",
    height:"100%"
  },
  
  logo: {
    marginTop:0, 
    width: wp('50%'),
    height: hp('50%'),
    alignSelf :"center",
  },
  
  text:{
    textAlign:"center",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: wp('10%'),
  },
  
  inferior:{
    backgroundColor:"#ffffff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems:"center",
    width:"100%",
    height:"100%"
  },
  textsec:{
    backgroundColor:"#ffffff",
    alignSelf:"center",
    marginTop:11,
    marginBottom:20,
    fontSize:18
  },
  sesion:{
    alignItems:"center",
    height:45,
    width:300,
    borderRadius:8
  }
})