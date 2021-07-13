import React from 'react';

import {useNavigation} from '@react-navigation/native'
import CuentaStack from './CuentaStack';
import {getUser} from '../../api'

const Navegacion = ((id)=>{

const navegation = useNavigation()

const selectAcept = (async()=>{
   const rows = await getUser(id)
   
   if (rows[0].Id_Escuelas = null) {
       return(
        navegation.navigate('Seleccion',  {id: rows[0].Id_Escuelas})
       )
   } else if (condicion) {
       
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