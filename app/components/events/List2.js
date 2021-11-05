import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, RefreshControl} from 'react-native'

import {getEvents} from '../../../api';


import Item2 from './Item2'

 const List2 = (route) =>{

  const [refreshing, setRefreshing] = React.useState(false);
  const [events, setEvents] = useState([]);
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await loadEvents();
     setRefreshing(false);
 }, [refreshing]);
  
 


 
 const loadEvents =async()=>{
 
  try {
    const data = await getEvents(route.codigo);
   
    setEvents(data);
      
  
 
  
    
  } catch (error) {
    console.log(error);
  }



 }
    
 const load =async()=>{
  await loadEvents()

}
 

  useEffect(() => {
 load()

   }, []);
   
   //id generator that takes the last id and adds 1

    const idGenerator = (id) =>{
      let newId = id + 1
      return newId
    }
    
    return (
      <FlatList
        data={events}
        renderItem={({ item }) => <Item2 task={item} />}
        keyExtractor={item =>  idGenerator(item.Id_Eventos)}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh}
          colors={["#78e08f"]}
          progressBackgroundColor="#0a3d62"
           />
        }     
    />
  );
       

}
const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center'

},
loading: {
  marginTop: 20,
  alignItems: 'center',
},
button: {
  marginTop: 20,
    backgroundColor: "#EFAF4F",
    alignItems:"center",
    height:45,
    width:300,
    borderRadius:8  
},
buttonText: {
  color: '#fff',
  fontWeight: 'bold',
},
});

export default List2;

