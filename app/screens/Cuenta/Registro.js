import React, {useState} from 'react';
import {View,Image ,Text, TextInput, StyleSheet, TouchableOpacity,ScrollView,Alert} from 'react-native'
import {useNavigation} from '@react-navigation/native'

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
      value = {data.Email}
      keyboardType="email-address"
        


    
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
      onChangeText = {(text) => handleChange('date', text)}
      value={data.date}
      maxLength={10}
      
  


    />

<Registrar data={data}/>
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

  const Registrar = ({data})=>{ 


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



const styles = StyleSheet.create({
 Input:{
  marginTop:10,
  marginBottom:10,
  marginLeft:20,
  marginRight:20,
  borderRadius:10,
  borderWidth:1,
  borderColor:'#EFAF4F',
  height:50,
  fontSize:15,
  paddingLeft:10,
  paddingRight:10,
  color:'#000'
              
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
    backgroundColor:"#fff",
    flex:1,
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:20,
    marginTop:20
  
  },
  text:{
    fontSize:20,
    color:'#EFAF4F',
    marginTop:10,
    marginBottom:10,
    alignSelf:"center",
  fontWeight:"bold" 
    
  },
})