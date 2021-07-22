import { useNavigation ,useIsFocused } from '@react-navigation/native';
import React,{useEffect, useState} from 'react';
import { View, Text } from 'react-native'
import {getSolicitud} from '../../../api'


import Espera from '../../screens/Inscripcion/Espera'
import Seleccion from '../../screens/Inscripcion/Seleccion'

const CheckEstatus = ({id}) => {
const isFocused = useIsFocused()
    
const [solicitud, setSolicitud] = useState()

useEffect(()=>{
        Solic();
    }, [isFocused]);

    const Solic = async()=>{
        const user = await getSolicitud(id)
        if(user[0].length <= 0 || user[0].Estatus == 'Denegado'){
            setSolicitud(true)
        } else if(user[0].Estatus === 'null'){
            setSolicitud(false)
        }
     }

    
       

    return (
        (solicitud ? <Seleccion id = {id}/> : <Espera/>)
     )
}

export default CheckEstatus