import React, {useState} from 'react'
import {View, TextInput, StyleSheet,Dimensions,Image,Alert,TouchableOpacity,Text} from 'react-native'

import {useNavigation} from '@react-navigation/native'

const {width: WIDTH} = Dimensions.get('window')

export default function Login (){
 // const API = 'http://tecnodiaz.es/server-edu'
const API = 'http://10.0.0.10:3000/server-edu'
//const API = 'http://10.0.0.49:3000/server-edu'
//const API = 'http://10.0.0.37:3000/server-edu'


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
          placeholder= "Matrícula"
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'
          onChangeText ={(text)=> handleChange('Matricula', text)}
          value = {data.Matricula}
/>
            
            
         <TextInput  style={styles.input} 
          placeholder= "Contraseña"
          secureTextEntry={true}
           placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'
          onChangeText = {(text) => handleChange('password', text)}
          value = {data.password}

/>
         
<TouchableOpacity 
style={styles.btn}
onPress={()=> validar()}
>
<Text style={styles.btnText}>Iniciar Sesión</Text>
</TouchableOpacity>
            
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
  btn:{
    width: WIDTH -55,
    height: 40,
    borderRadius: 45,
    backgroundColor: '#009387',
    justifyContent: 'center',
    marginTop: 20
  
  },
  btnText:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  },

  logo: {
      width: height_logo,
      height: height_logo
  },
});
