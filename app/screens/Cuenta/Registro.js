import React, {useState, useEffect} from 'react';
import {View,Image ,Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform,Alert} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Registro (){

  const handleChange = (name, value) => setData({...data, [name]: value});
  const [data,  setData] = useState({
    Nombre: '',
    Apellidos: '',
    Email: '',
    password: '',
    nivel: '1',
    date: '',
    confirmpassword:''
  });

  const Registrar = ()=>{ 


    const handleSubmit = async () => {
      const {password, confirmpassword} = data
      if (password !== confirmpassword) {
        Alert.alert('Error', 'Las contraseñas no coinciden')
        return  false 
      } else {
      
        navigation.navigate('RegistroC', {Info: data})
          
      
      }
    
    }
  
    const navigation = useNavigation();
  
    return(
    
    <View>
  <TouchableOpacity
  disabled={!data.Nombre,!data.Apellidos,!data.Email,!data.password}
        onPress={handleSubmit}
        style={[styles.sesion, {
          backgroundColor:"#EFAF4F"
        }]}>
        <Text style={{ marginTop:11,fontSize: 15, color: '#fff'}}>Registrate</Text>
        
      </TouchableOpacity>
     <View/>
    </View>
    )
  }
  

  return(
    
<ScrollView style={styles.vista}>
    <View>
      
  <View>
    <Fotos/>
    <Text style={styles.text}>Estudiantes</Text>
  </View>


      <TextInput style={styles.Input}
      placeholder = "Nombre"
      onChangeText = {(text) => handleChange('Nombre', text)}
      value ={data.Nombre}
    />

      <TextInput style={styles.Input}
      placeholder = "Apellidos"
      onChangeText = {(text) => handleChange('Apellidos', text)}
      value = {data.Apellidos}
    />

      <TextInput style={styles.Input}
      placeholder = "Email"
      onChangeText = {(text) => handleChange('Email', text)}
      value={data.Email}
    
    />

<TextInput style={styles.Input}
      placeholder = "Contraseña"
      secureTextEntry={true}
      onChangeText = {(text) => handleChange('password', text)}
      value={data.password}
    
    />

<TextInput style={styles.Input}
      placeholder = "Confirmar contraseña"
      secureTextEntry={true}
      onChangeText = {(text) => handleChange('confirmpassword', text)}
      value={data.confirmpassword}
    
    />

<TextInput style={styles.Input}
      placeholder = "DD/MM/AAAA"
      secureTextEntry={true}
      onChangeText = {(text) => handleChange('date', text)}
      value={data.date}
    />

<Registrar/>
    </View>
    </ScrollView>
  )

}


function Fotos (){
  return(
      <View >
    <Image source={require('../../../assets/undraw_Scrum_board_re_wk7v.png')}
        style={styles.logo}
              resizeMode="contain"
        />
      </View>
    )
  }



const styles = StyleSheet.create({
 Input:{
   backgroundColor:"#ffffff",
   borderColor:"#777777",
   borderWidth:1,
   marginTop:40,
   alignSelf:"center",
   width:341,
   height:28.3,
    borderRadius:4,
  },

  sesion:{
    alignItems:"center",
    height:45,
    width:200,
    borderRadius:8,
    alignSelf:"center",
    marginTop:15
  },

  sesionC:{
    alignItems:"center",
    height:45,
    width:200,
    borderRadius:8,
    alignSelf:"center",
    marginTop:15
  },

  logo: {
    marginTop:0, 
    width: 170,
    height: 170,
    alignSelf :"center",
  },
  vista:{
    backgroundColor:"#08D5B9"
  },
  text:{
    textAlign:"center",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 30,
  },
})