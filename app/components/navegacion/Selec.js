import { useNavigation ,useIsFocused } from '@react-navigation/native';
import React,{useEffect, useState} from 'react';
import {getUser, getSolicitud} from '../../../api'
import { Text,View } from 'react-native';

import Home from '../../screens/Home'
import CheckEstatus from './CheckEstatus'

const Selec = (({id})=>{

    const isFocused = useIsFocused()

const [Escu, setEscu] = useState()

useEffect(()=>{
    Solid();
}, [isFocused]);


const Solid = async()=>{
   const user = await getUser(id)

    if(user[0].Codigo_Escuelas == null){
        setEscu(true)
    }else{
        setEscu(false)
    }
}


    return(
        (Escu ? <CheckEstatus id = {id}/> : <Home id = {id} />  )
    )
    })

export default Selec