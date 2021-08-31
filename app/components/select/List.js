
import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native'

import {getSchools} from '../../../api';


import Item from './Item'

export const List = (id) =>{


const [task, setTasks] = useState([]);



const loadSchool = async()=>{
    const task = await getSchools();
    setTasks(task);
}

useEffect(() => {
    loadSchool();
}, [])

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