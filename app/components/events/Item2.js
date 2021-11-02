import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

 const Item2 =({task})=>{

    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity style={{ width: '100%'}}>
          <Text style={styles.itemTitle}>{task.Nombre}</Text>
          <Text style={{ color: "#000000" }}>{task.Descripcion}</Text>
          <Text style={styles.itemFecha}>{task.Fecha_Ini}</Text>
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
    textAlign: 'center'
  },
  itemFecha: {
    fontWeight: 'bold',
    textAlign: "right",
    color:"#009387"
  }
});
  export default Item2;