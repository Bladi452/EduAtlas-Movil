import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, RefreshControl, View, Text} from 'react-native'

import {getSolicitudes, getSchoolLenght} from '../../../api';


import Item from './Item'

export const List = (route) =>{
 const [refreshing, setRefreshing] = React.useState(false);
 const [cantidad, setcantidad] = useState(null);

const [task, setTasks] = useState([]);
console.log(route.id)

const load =async()=>{
  await lengthEstudents()
  await  loadSchool()
}

const lengthEstudents = async()=>{
 const asds = await getSchoolLenght(route.id)
 setcantidad(asds)
}

const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    load()
    setRefreshing(false);
  }, []);

const loadSchool = async()=>{
    const task = await getSolicitudes(route.id)
    console.log(task)
    setTasks(task);
}

useEffect(() => {
    loadSchool();
},[])

const renderItem =({item}) =>{
    return <Item task = {item} load ={load} />
}

return(
<View style={{ width: '100%', alignItems: "center"}}>

<Text style={styles.CantidadTitle}>Estudiantes Registrados:</Text>
<Text style={styles.Cantidad} >{cantidad}</Text>


<FlatList
    style={{ width: '100%'}}
data ={task}
renderItem={renderItem}
keyExtractor= {item => item.Id_Solicitud + ''}
refreshControl={
    <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
      colors={["#78e08f"]}
      progressBackgroundColor="#0a3d62"
    />
  }
/>
</View>
    )
}

const styles = StyleSheet.create({
  Cantidad: {
    marginTop: 10,
    marginBottom: 20,
    color: "#009387",
    fontWeight: "bold",
    fontSize: 25
  },
  CantidadTitle: {
    marginTop: 10,
    color: "#000000",
    fontWeight: "bold",
    fontSize: 15

  }
});
