import {useIsFocused} from '@react-navigation/native'

import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native'

import {getSchools} from '../../../api';


import Item from './Item'

export const List = () =>{

const [task, setTasks] = useState([]);

const isFocused = useIsFocused();


const loadSchool = async()=>{
    const task = await getSchools();
    setTasks(task);
}

useEffect(() => {
    loadSchool();
}, [isFocused])

const renderItem =({item}) =>{
    return <Item task = {item} />
};

return(
<FlatList
    style={{ width: '100%'}}
data ={task}
keyExtractor= {item => item.Id_Escuelas + ''}
renderItem={renderItem}
/>
    )
}