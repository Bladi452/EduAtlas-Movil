import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, RefreshControl} from 'react-native'

import {getEvents} from '../../../api';


import Item from './Item'

export const List = (route) =>{
    const [refreshing, setRefreshing] = React.useState(false);
   
   const [task, setTasks] = useState([]);
   console.log(route.id)
   
   const load =async()=>{
     await loadEvents()
   }
   
   const onRefresh = React.useCallback(async () => {
       setRefreshing(true);
       load()
       setRefreshing(false);
     }, []);
   
   const loadEvents = async()=>{
       const task = await getEvents(route.id)
       console.log(task)
       setTasks(task);
   }
   
   useEffect(() => {
       loadEvents();
   },[])
   
   const renderItem =({item}) =>{
       return <Item task = {item}/>
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