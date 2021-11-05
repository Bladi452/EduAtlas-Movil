import React, {useState}from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, Alert, ScrollView, Image } from 'react-native';
import { AddEvent } from '../../../api';

 const Registrar = ({eventsAdd})=>{ 
      //AddEvent(data)
    
        return(
        
        <View>
      <TouchableOpacity
        onPress={eventsAdd}
        style={[styles.sesion, {
              backgroundColor:"#2DD090"
            }]}>
            <Text style={{ marginTop:7,fontSize: 15, color: '#fff'}}>Agregar Eventos</Text>
            
          </TouchableOpacity>
         <View/>
        </View>
        )
      }
     

const AddEvents = (rou) => {
    const handleChange = (name, value) => setData({...data, [name]: value});

    const [data,  setData] = useState({
      Nombre: '',
      Fecha_Ini: '',
      Descripcion: '',
      Codigo_Escuelas: rou.route.params.rou
    });

 
    async function eventsAdd(){
        await AddEvent(data)
         Alert.alert('Evento Agregado')
     }
   

    return (
            <ScrollView>



        <View style={{alignItems: 'center'}} >
        
            <Image source={require("../../../assets/colegio.png")}        style={{
                
                marginTop:10, 
                width:'50%',
                height:200
    }}/>

    <Text>Eventos</Text>

        <TextInput style={styles.Input}
        placeholder='Nombre'
        onChangeText={(text) => handleChange('Nombre', text)}
        value={data.Nombre}
            />


    <Text>Fecha De Inicio</Text>
        <TextInput style={styles.Input}
        placeholder='02-03-2000'
        onChangeText={(text)=> handleChange('Fecha_Ini', text)}
        value={data.Fecha_Ini}
        />
            
            <Text>Descripcion</Text>

        <TextInput 
            multiline={true}    
            numberOfLines={5}
            style={styles.InputDescripcion}
            placeholder='La hora de partida es 8:00PM, el precio del viaje: $200, La hora de volver es a las 5'
            onChangeText={(text)=> handleChange('Descripcion', text)}
            value={data.Descripcion}
        />        
        <Registrar eventsAdd={eventsAdd}/>    
        </View>
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    Input:{
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#1e1e1e",
        marginTop: 10,
        backgroundColor: "#ffffff",
        width: '80%',
        height: 30, 
        borderRadius: 8
    },
    sesion:{
        alignItems:"center",
        height:35,
        width:200,
        borderRadius:20,
        alignSelf:"center",
        marginTop:15
    },

    InputDescripcion:{
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#1e1e1e",
        marginTop: 10,
        backgroundColor: "#ffffff",
        width: '80%',
        borderRadius: 10
    }
})

export default AddEvents;
