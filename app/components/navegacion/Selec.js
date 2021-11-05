
import React,{useEffect, useState} from 'react';
import {getUser} from '../../../api'


import Home from '../../screens/Home'
import CheckEstatus from './CheckEstatus'

const Selec = (({id})=>{


const [Escu, setEscu] = useState()

useEffect(()=>{
    solid();
}, []);


const solid = async()=>{
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