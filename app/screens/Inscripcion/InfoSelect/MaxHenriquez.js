import React,{useState, useEffect} from 'react'
import { ScrollView } from 'react-native'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import {Picker} from '@react-native-community/picker'
import {useNavigation} from '@react-navigation/native'
import MapView,{Marker} from 'react-native-maps'
import {getSchool, solicitud} from '../../../../api'

export default function MaxHenriquez ({route}){
  const navigation = useNavigation()

  const handleChange = (name, value) => setstate({...state, [name] : value});

   const [state, setstate] = useState({
     Estatus: 'null',
     Codigo_Escuelas : route.params.id,
     id_Usu : route.params.usu,
     id_curso : '1'
   })


   const [task, setTask] = useState([])

const traer = ( async()=>{
  const task = await getSchool(route.params.id)
  setTask(task[0]);
})

const unir =async()=>{  
 await solicitud(state)
 navigation.navigate('Espera')
}

useEffect(() => {
traer()
}, [])

return(
    <ScrollView style={styles.container}>
        <View>

<Text style={styles.titulo}>EduAtlas</Text>

<Image source={require("../../../../assets/Imagen.png")}
    style={styles.logo}
/>
            
        <Text 
        style={[styles.textsec,{
    fontSize:18,
    color:"#ffffff",
    marginTop:11,
    marginBottom:20,
}]}>{task.Nombre}</Text>
    
    <Text style={[styles.textsec,{
      fontSize:14,
      marginTop:11,
      marginBottom:20,
    }]}>{task.Descripcion}</Text>
            <Text style={[styles.textsec,{fontSize:15, color:"#ffffff"}]}>{task.Modalidad}</Text>

        <Text style={[styles.textsec,{
      color:"#000000",
      fontSize:18,
      marginTop:11,
      marginBottom:13,
    }]}>Ubicacion</Text>

    <MapView style={styles.map} initialRegion={{latitude:18.526341919411482, longitude:-70.05271297194588, latitudeDelta:0.09, longitudeDelta:0.0921 }}>
<Marker
  coordinate={{ latitude : 18.525286036836068 , longitude : -70.05256742347363 }} title="Max Henriquez"
/>
    </MapView>
    <Text style={{ marginTop:11, marginBottom:12, fontWeight:"bold" ,fontSize: 15, color: '#EFAF4F'}}>
            Selecciona el curso al que aplicaras
        </Text>

        <Picker
        selectedValue={state.id_curso}
        style={{ height: 50, width: 150 }}
        onValueChange ={(itemValue)=> handleChange('id_curso', itemValue)}
>
        <Picker.Item label="Primero" value="1" />
        <Picker.Item label="Segundo" value="2" />
        <Picker.Item label="Tercero" value="3" />
        <Picker.Item label="Cuarto" value="4" />
        <Picker.Item label="Quinto" value="5" />
        <Picker.Item label="Sexto" value="6" />

      </Picker>
      <Text>{state.id_curso}</Text>
    
    <TouchableOpacity
        onPress={unir}
        style={[styles.sesion, {
          backgroundColor:"#FCAD6D"
        }]}>
        <Text style={{ marginTop:11,fontSize: 15, color: '#fff'}}>Enviar Solicitud</Text>
      </TouchableOpacity>
  
        </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
con:{
  position:'absolute',
  top:0,
  left:0,
  right:0,
  bottom:0
},

map:{
  width: 312.5,
  height: 103.3,
  alignSelf:"center"
},

sesion:{
  alignItems:"center",
  height:45,
  width:300,
  borderRadius:8,
  alignSelf:"center",
  marginTop: 20
},

textsec:{
    textAlign:"center",
    fontWeight:"bold",
  },

container:{
    backgroundColor:"#08D5B9",
    height:"100%"
  },

logo: {
    width:122.1,
    height: 125,
    alignSelf :"center",
  },

  titulo:{
    fontSize:62,
    color:"#ffffff",
    alignSelf:"center",
    fontWeight:"bold",
    marginBottom:2
  },

text:{
  textAlign:"center",
  color: "#08D5B9",
  fontWeight: "bold",
  fontSize: 30,
},
sesion:{
  alignItems:"center",
  height:45,
  width:200,
  borderRadius:8,
  alignSelf:"center",
  marginTop:15
}
})