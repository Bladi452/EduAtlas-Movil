import React, {useState} from 'react';
import {View,Text, TextInput, StyleSheet, TouchableOpacity,KeyboardAvoidingView,ScrollView,Platform} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Button} from 'react-native-elements'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Input } from 'react-native-elements/dist/input/Input';

export default function Registro (){

  return(
<ScrollView>    
    <View style={styles.vista}>
      <TextInput style={styles.Input}
      placeholder = "Nombre"
    
    />

      <TextInput style={styles.Input}
      placeholder = "Apellidos"
    
    />

      <TextInput style={styles.Input}
      placeholder = "Email"
    
    />
  <Calendario/>
    </View>
    </ScrollView>
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
            backgroundColor:"#EFAF4F"
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
   borderColor:"#000000",
   borderWidth:1,
   marginTop:40,
   alignSelf:"center",
   width:300,
   height:30,
    borderRadius:10
  },

  sesion:{
    alignItems:"center",
    height:45,
    width:300,
    borderRadius:8,
    alignSelf:"center",
    marginTop:15
  },
  vista:{
    backgroundColor:"#08D5B9"
  }
  
})

/*
const {width: WIDTH} = Dimensions.get('window')
export default function Login (){
  
    return (
      <KeyboardAvoidingView behavior= "padding">
        <ScrollView style={styles.container}>
      <View>
             <TextInput  style={styles.input}
          placeholder= "Nombres"
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'/>
            
              <TextInput  style={styles.input}
          placeholder= "Apellidos"
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'/>
            
              <TextInput  style={styles.input}
          placeholder= "Email"
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'/>
              <TextInput  style={styles.input}
          placeholder= "Curso"
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'/>
                <TextInput  style={styles.input}
          placeholder= "Fecha de nacimiento"
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'
          keyboardType='numeric'
          />
           
            
         <TextInput  style={styles.input} 
          placeholder= "Contrasena"
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'
          secureTextEntry={true}
           />
            <TextInput  style={styles.input} 
          placeholder= "Contrasena"
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'
          secureTextEntry={true}
           />
        
            <BotonForm/>
            </View>
        </ScrollView>
         </KeyboardAvoidingView>
    )
}

function BotonForm(){
const navigate = useNavigation();
    return(
      
        <Button style={styles.btnlogin}
        title="Completar"
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
 //   justifyContent: "center",
 //   alignItems: "center"
  },
  btnlogin:{
    width: WIDTH -55,
    height: 45,
     borderRadius: 25,
 //     justifyContent:'center',
 //    alignItems: "center",
     marginTop:20
  }
});

*/