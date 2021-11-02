import React, {useState, useEffect} from 'react';
import {View,Text,StyleSheet, FlatList, RefreshControl, TouchableOpacity} from 'react-native'

import {getEvents} from '../../../api';
import {useNavigation} from '@react-navigation/native'

import Item from './ItemAd'

export const ListAd = (route2) =>{
  const navigation = useNavigation()
    const [refreshing, setRefreshing] = React.useState(false);
   
   const [tas, setTask] = useState([]);
  

   
   const load =async()=>{
     await loadEvents()

   }
   
   const onRefresh = React.useCallback(async () => {
       setRefreshing(true);
        await loadEvents();
        setRefreshing(false);
    }, [refreshing]);

    useEffect(() => {
      
        load()  
          
     }, []);
   
   const loadEvents = async()=>{
       const events = await getEvents(route2.id)
        setTask(...events)
   }
 
   
   const renderItem =({item}) =>{
       return <Item task = {item}/>
          
   }
   function form(){
    navigation.navigate('AddEvents', {rou : route2.id})
   }
   
   return(
   <View style={{ width: '100%', alignItems: 'center'}}>
<TouchableOpacity style={[styles.Boton]}
onPress={form}
>
    <Text style={{ marginTop:11,fontSize: 15, color: '#fff'}} >Agregar Eventos</Text>
    </TouchableOpacity>
   <FlatList
       style={{ width: '100%', marginBottom: 90}}
   data ={tas}
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
    Boton: {
      marginTop: 20,
      backgroundColor: "#EFAF4F",
      alignItems:"center",
      height:45,
      width:300,
      borderRadius:8
   
  }
})