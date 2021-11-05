import { useNavigation} from '@react-navigation/native';
import React,{useEffect, useState} from 'react';
import { View, Text } from 'react-native'
import {getSolicitud} from '../../../api'

import Home from '../../screens/Home'
import Espera from '../../screens/Inscripcion/Espera'

const Valid = ({route}) => {
  


  useEffect(()=>{
    soli();
}, []);

    
    const [sol, setSol] = useState()

    const soli = async()=>{
        const user = await getSolicitud(route.params.id)
        if(user[0].Estatus === 'null'){
            setSol(true)
        } else if(user[0].Estatus === 'Aprobado'){
            setSol(false)
        }
     }


    return (
        (sol ? <Espera id = {route.params.id}/> : <Home id = {route.params.id} />)
        )
}

export default Valid
