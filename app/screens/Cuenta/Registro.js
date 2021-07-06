import React, {useState, useEffect} from 'react';
import {View,Image ,Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform,} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import DateTimePicker from '@react-native-community/datetimepicker';
import {signup} from "../../../api";

export default function Registro (){

  const handleChange = (name, value) => setData({...data, [name]: value});

  const [data,  setData] = useState({
    Nombre: '',
    Apellido: '',
    Email: '',
    
  })

  const Registrar = (()=>{ 


    const Regis = async () => {
      await signup(data)
    }
  
    const navigation = useNavigation();
  
    return(
    
    <View>
  <TouchableOpacity
        onPress={Regis}
        style={[styles.sesion, {
          backgroundColor:"#EFAF4F"
        }]}>
        <Text style={{ marginTop:11,fontSize: 15, color: '#fff'}}>Continua</Text>
      </TouchableOpacity>
     <View/>
    </View>
    )
  }
  )


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
      value = {data.Apellido}
    />

      <TextInput style={styles.Input}
      placeholder = "Email"
      onChangeText = {(text) => handleChange('Email', text)}
      value={data.Email}
    
    />



  <Calendario/>
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


function Calendario () {

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  
  const showDatepicker = () => {
    showMode('date');
  };
    
  return(
<View>
      <View>
      < TouchableOpacity
          onPress={showDatepicker} 
          style={[styles.sesion, {
            backgroundColor:"#F9D44F"
          }]}
          >
  
  <Text style={{ marginTop:11,fontSize: 15, color: '#fff'}}>
    Fecha de Nacimiento
    </Text>
          </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          display="default"
          onChange={onChange}
        />
      )}
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