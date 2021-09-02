import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, RefreshControl} from 'react-native'

import {getSolicitudes} from '../../../api';


import Item from './Item'

export const List = (route) =>{
 const [refreshing, setRefreshing] = React.useState(false);

const [task, setTasks] = useState([]);
console.log(route.id)

const load =async()=>{
  await  loadSchool()
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
    )
}