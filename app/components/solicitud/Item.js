import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native';
import {denyReq,approveReq} from '../../../api';
 const Item =({task, load})=>{
    const navigation = useNavigation()
const Apro=(id)=>{
  approveReq(id)
  load()
}

const Dene=(id)=>{
  denyReq(id)
  load()
}

    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity style={{ width: '100%'}}>
          <Text style={styles.itemTitle}> Codigo de solicitud: {task.Id_Solicitud}</Text>         
          <Text style={{ color: "#000000" }}> Fecha: {task.Fecha}</Text>
          <Text style={{ color: "#000000" }}> Matricula {task.Matricula}</Text>
          <Text style={{ color: "#000000" }}> Grado: {task.Grado}</Text>
          <Text style={{ color: "#000000" }}> Escuela: {task.Escuela}</Text>
          <Text style={{ color: "#000000" }}> {task.Nombre}</Text>

          <TouchableOpacity
        style={{ backgroundColor: "#03BB85", padding: 7, borderRadius:20, marginTop: 15 }}
        onPress={() => Apro(task.Id_Solicitud)}
      >
        <Text style={{ color: "#fff", textAlign:"center" }}>Aceptar</Text>
      </TouchableOpacity>

          <TouchableOpacity
        style={{ backgroundColor: "#ee5253", padding: 7, borderRadius: 20, marginTop: 15 }}
        onPress={() => Dene(task.Id_Solicitud)}
      >
        <Text style={{ color: "#fff", textAlign:"center" }}>Denegar</Text>
      </TouchableOpacity>

        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#F9F9F9",
    padding: 20,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 31,
    borderWidth: 2,
    borderColor: '#009387'

  },
  itemTitle: {
    fontSize:15,
    fontWeight: 'bold',
    color: "#009387",
    textAlign: 'center'  },
});
  export default Item;