import React from 'react'
import {View,Text, TextInput, StyleSheet,Dimensions} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Button} from 'react-native-elements'


const {width: WIDTH} = Dimensions.get('window')
export default function Login (){
    return (
        <View style={styles.container}>
      
         <TextInput  style={styles.input}
          placeholder= "Username"
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'/>
            
            
         <TextInput  style={styles.input} 
          placeholder= "Password"
                 
          secureTextEntry={true}
           placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'/>
         
          
            <BotonForm/>
            
        </View>
    )
}

function BotonForm(){
const navigate = useNavigation();
    return(
      
        <Button style={styles.btnlogin}
        title="Login"
        onPress={()=>navigate.navigate("Seleccion")}
    />

    )
}
const styles = StyleSheet.create({
  input: {
    
    width: WIDTH -55,
    height: 40,
    margin: 12,
   borderRadius: 45,
fontSize: 16,
paddingLeft: 45,
backgroundColor: 'rgba(0, 0, 0, 0.35)',
color: 'rgba(255, 255, 255, 0.7)',
marginHorizontal: 25
  },
  
  container:{
    flex:1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center"
  },
  btnlogin:{
    width: WIDTH -55,
    height: 45,
     borderRadius: 25,
 
     justifyContent:'center',
     marginTop:20


  }
});