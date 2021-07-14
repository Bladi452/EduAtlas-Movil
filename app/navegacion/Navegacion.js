import React from 'react';

import {useNavigation} from '@react-navigation/native'
import CuentaStack from './CuentaStack';
import {getUser, Getsolicitud} from '../../api'

const Navegacion = ((id)=>{

const navegation = useNavigation()

const solicAcept =(async()=>{
    const rows = await Getsolicitud(id)

    if (rows[0].length < 0) {
        return(
            navegation.navigate('Seleccion',  {id: rows[0].Matricula})
           )
    }
    else if(rows[0].Estatus == 'Aceptado'){
        return(
        navegation.navigate('Home',  {id: rows[0].Matricula})
        )
    }
    else if(rows[0].Estatus == 'Denegado'){
        return(
            navegation.navigate('Seleccion',  {id: rows[0].Matricula})
           )
    }
})

const selectAcept = (async()=>{
   const rows = await getUser(id)
   
   if (rows[0].Codigo_Escuelas = null) {
       return(
        navegation.navigate('Seleccion',  {id: rows[0].Matricula})
       )
   } else{
    solicAcept()
   }
})


    if(id.length < 0){
    return(
        <CuentaStack/>
    )
}else if(id.length > 0){
    selectAcept()
}

})

export default Navegacion