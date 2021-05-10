import React from 'react';
import { ScrollView, View,Text,StyleSheet,Dimensions } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-elements'
const {width: WIDTH} = Dimensions.get('window')
export default function Cuenta() {
   return (
      <ScrollView style={styles.container}>
  <View>
        <Registrar/>
        </View>
</ScrollView>
    )
}

function Registrar () {

    const navigation = useNavigation();
    return(
    
    <View>
        <Button style={styles.sesion}
        onPress={()=>navigation.navigate("Login")}
        title='Iniciar sesion'  />
 <View/>
 
        <Button style={styles.sesion}
        onPress={()=>navigation.navigate("Registro")}
        title='Registrate'
        Registrate />
    
    </View>
    )
}
const styles = StyleSheet.create({
  sesion: {
    width: WIDTH -55,
    height: 45,
     borderRadius: 25,
 
     justifyContent:'center',
     marginTop:20


  },
  container:{
    flex:1,
//    justifyContent:"center",
//    alignItems:"center"
  }
  
})