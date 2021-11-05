
import React,{useEffect, useState} from 'react';

import {getSolicitud} from '../../../api'


import Espera from '../../screens/Inscripcion/Espera'
import Seleccion from '../../screens/Inscripcion/Seleccion'

const CheckEstatus = ({id}) => {
    
const [solicitud, setSolicitud] = useState()

useEffect(()=>{
        solic();
    }, []);

    const solic = async()=>{
        const user = await getSolicitud(id)
        if(user.length === 0 || user[0].Estatus === 'Denegado'){
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