import React, {useState, useEffect} from 'react';
import {View,Image ,Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform,Alert} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import DateTimePicker from '@react-native-community/datetimepicker';
import {ConecCargo, getMat} from "../../../api";

const API = 'http://10.0.0.49:3000'
export default function Registro (){

  const handleChange = (name, value) => setData({...data, [name]: value});
  const [Message, setMessage] = useState([]);
  const [data,  setData] = useState({
    Nombre: '',
    Apellidos: '',
    Email: '',
    password: '',
    nivel: '1',
    date: '',
    confirmpassword:''
  })

const signup =  async(newdata) =>{
    await fetch(`${API}/auth/regis`,{
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(newdata),
    })    .then(async res => { 
      try {
          const jsonRes = await res.json();
          if (res.status === 200) {
              setMessage(jsonRes.message);
          }
      } catch (err) {
          console.log(err);
      };
  })
  .catch(err => {
      console.log(err);
  });
};

  const Calendario = (()=> {

    const [date, setDate] = useState(new Date());
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
            value={ data.date = date}
            mode={mode}
            display="default"
            onChange = {onChange}
            onChangeText = {(text) => handleChange('date', text)}

            />
        )}
      </View>
    )
  }
)

  const Registrar = ()=>{ 


    const handleSubmit = async () => {
      const {password, confirmpassword} = data
      if (password !== confirmpassword) {
        Alert.alert('Clave incorrecta')
      } else {
        await signup(data)
      const matnew = await getMat()
     await ConecCargo(matnew[0].Matricula)
      Alert.alert(`Tu matricula es: ${matnew[0].Matricula} copiala o tomale una captura`)
      
        navigation.navigate('Login')
      
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
        <Text style={{ marginTop:11,fontSize: 15, color: '#fff'}}>Continúa</Text>
        
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