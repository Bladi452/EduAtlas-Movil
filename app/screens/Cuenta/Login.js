import React, {useState} from 'react'
import {View, TextInput, StyleSheet,Dimensions,Image,Alert} from 'react-native'
import {Button} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'

const {width: WIDTH} = Dimensions.get('window')

export default function Login (){
 // const API = 'http://tecnodiaz.es/server-edu'
 const API = 'http://10.0.0.8:3000/server-edu'

const navigation = useNavigation()

  const handleChange = (name, value) => setData({...data, [name]: value});
  const [data, setData] = useState({
    Matricula: '',
    password: ''
  })





    const signIn =  (newdata) =>{

     fetch(`${API}/auth/login`,{
              method: 'POST',
              headers:{
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                 
              },  body: JSON.stringify(newdata)   

          })
          .then(res => res.json())  
          .then(res => {
            
            
            if(res.message === 'Usuario validado'){
             
              navigation.navigate('Navegacion', {datos : res.user})

            }else{
              
              Alert.alert(res.message)
            } 
          })  .catch(error => {
            console.log(error)
          }
        )
      }

   const validar =()=>{
          if(data.Matricula === '' || data.password === ''){
            Alert.alert('Todos los campos son obligatorios')
   }
    else{
      signIn(data)
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
         
<Button style={styles.btnlogin}
            title="Iniciar sesión
            "
            onPress={
              validar
              
            }

        />
            
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
