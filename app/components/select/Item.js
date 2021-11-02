import React, {useEffect} from 'react';
import {View, Text, StyleSheet,BackHandler, TouchableOpacity } from 'react-native'

import {useNavigation} from '@react-navigation/native';




 const Item =({task, id_Usu})=>{



  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', () => true);
    };    
  
  }, []);

    const navigation = useNavigation()
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Union", { id: task.Codigo_Escuelas, usu : id_Usu.id })}
        >
          <Text style={styles.itemTitle}>{task.Nombre}</Text>
         
          <Text style={{ color: "#8395a7" }}>{task.Tanda}</Text>
          
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