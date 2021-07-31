import {useIsFocused} from '@react-navigation/native'

import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native'

import {getDocs} from '../../../api';


import Item from './Item'

export const List = (route) =>{

const [task, setTasks] = useState([]);

const isFocused = useIsFocused();


const loadSchool = async()=>{
    const task = await getDocs(route.id);
    console.log(task)
    setTasks(task);
}

useEffect(() => {
    loadSchool();
}, [isFocused])

const renderItem =({item}) =>{
    return <Item task = {item} id_Usu = {id} />
};

return(
<FlatList
    style={{ width: '100%'}}
data ={task}
keyExtractor= {item => item.Codigo_Escuelas + ''}
renderItem={renderItem}
/>
    )
}