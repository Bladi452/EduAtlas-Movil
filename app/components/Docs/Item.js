import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {getDownload} from '../../../api'
import {useNavigation} from '@react-navigation/native';


 const Item =({task, id_Usu})=>{
    const navigation = useNavigation()
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity>
          <Text style={styles.itemTitle}>{task.Nombre}</Text>
         
          <Text style={{ color: "#8395a7" }}>{task.Estado}</Text>

          <TouchableOpacity
        style={{ backgroundColor: "#ee5253", padding: 7, borderRadius: 5 }}
        onPress={() => getDownload(task.id)}
      >
        <Text style={{ color: "#fff" }}>Delete</Text>
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