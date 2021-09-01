import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native'

import {getSolicitudes} from '../../../api';


import Item from './Item'

export const List = (route) =>{

const [task, setTasks] = useState([]);
console.log(route.id)

const loadSchool = async()=>{
    const task = await getSolicitudes(route.id)
    console.log(task)
    setTasks(task);
}

useEffect(() => {
    loadSchool();
},[])

const renderItem =({item}) =>{
    return <Item task = {item} />
}

return(
<FlatList
    style={{ width: '100%'}}
data ={task}
keyExtractor= {item => item.Id_Solicitud + ''}
renderItem={renderItem}
/>
    )
}