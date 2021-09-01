import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native';
import {denyReq,approveReq} from '../../../api';
 const Item =({task})=>{
    const navigation = useNavigation()
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity>
          <Text style={styles.itemTitle}>{task.Id_Solicitud}</Text>         
          <Text style={{ color: "#8395a7" }}>{task.Fecha}</Text>
          <Text style={{ color: "#8395a7" }}>{task.Matricula}</Text>
          <Text style={{ color: "#8395a7" }}>{task.Grado}</Text>
          <Text style={{ color: "#8395a7" }}>{task.Escuela}</Text>
          <Text style={{ color: "#8395a7" }}>{task.Nombre}</Text>

          <TouchableOpacity
        style={{ backgroundColor: "#03BB85", padding: 7, borderRadius: 5, marginTop: 15 }}
        onPress={() => approveReq(task.id)}
      >
        <Text style={{ color: "#fff", textAlign:"center" }}>Aceptar</Text>
      </TouchableOpacity>

          <TouchableOpacity
        style={{ backgroundColor: "#ee5253", padding: 7, borderRadius: 5, marginTop: 15 }}
        onPress={() => denyReq(task.id)}
      >
        <Text style={{ color: "#fff", textAlign:"center" }}>Denegar</Text>
      </TouchableOpacity>

        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#333333",
    padding: 20,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
  },
  itemTitle: {
    color: "#ffffff",
  },
});
  export default Item;