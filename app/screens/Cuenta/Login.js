import React, {useState} from 'react'
import {View, TextInput, StyleSheet,Dimensions,Image,Alert} from 'react-native'
import {Button} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
import { showMessage, hideMessage } from "react-native-flash-message";
import { Message } from 'react-native-gifted-chat';
const {width: WIDTH} = Dimensions.get('window')

export default function Login (){
  const API = 'http://10.0.0.49:3000'

const navigation = useNavigation()

  const handleChange = (name, value) => setData({...data, [name]: value});
  const [data, setData] = useState({
    Matricula: '',
    password: ''
  })

var nuevo
var message
const BotonForm = (()=>{
        return(
          
            <Button style={styles.btnlogin}
            title="Iniciar sesión
            "
            onPress={
              validar
              
            }

        />

        )
    })



    const signIn = async (newdata) =>{

      await  fetch(`${API}/auth/login`,{
              method: 'POST',
              headers:{
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(newdata),
          }).then(async res =>{
        try {
            const jsonRes = await res.json();
            if (res.status !==200) {
              nuevo = 0
              console.log('no existe')
            }else{
              nuevo = 1
              console.log('existe')
              message = jsonRes.message
            }
        } catch (err) {
            console.log(err)
        };
      })
      .catch(err =>{
          console.log(err)
      })
  }

   const validar =async()=>{
    
await signIn(data);

  if (nuevo == 1) {
    navigation.navigate('Navegacion', {datos : message})
  nuevo = 0
 }else{
   Alert.alert('Usuario o contraseña inválidos')
   console.log(nuevo)
 }
 
    }



  return (
        <View style={styles.container}>
      <Image source={require('../../../assets/avatar.png')}
      style={styles.logo}
            resizeMode="stretch"
      />
         <TextInput  style={styles.input}
          placeholder= "matrícula"
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'
          onChangeText ={(text)=> handleChange('Matricula', text)}
          value = {data.Matricula}
/>
            
            
         <TextInput  style={styles.input} 
          placeholder= "contraseña"
          secureTextEntry={true}
           placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'
          onChangeText = {(text) => handleChange('password', text)}
          value = {data.password}
/>
         
          
            <BotonForm/>
            
        </View>
    )
}


const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;
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
  },

  logo: {
      width: height_logo,
      height: height_logo
  },
});
