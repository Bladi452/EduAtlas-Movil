import React,{useState, useEffect, ReactDOM} from 'react';
import Cuenta from '../screens/Cuenta/Cuenta';
import Espera from '../screens/Inscripcion/Espera';
import Home from '../screens/Home';
import Seleccion from '../screens/Inscripcion/Seleccion';
import {getUser, getSolicitud} from '../../api'

const Navegacion = (({route})=>{  
    const [Escu, setEscu] = useState(false)
    const [solicitud, setSolicitud] = useState(false)
    const [Dene, setDene] = useState(false)

const Solid = async()=>{
    const user = await getUser(route.params.id)
 
     if(user[0].Codigo_Escuelas === null){
         setEscu(false)
     }else{
         setEscu(true)
     }
 }

 const Solic = async()=>{
    const user = await getSolicitud(route.params.id)
    if(user.length === 0){
        setSolicitud(false)
    }else if(user[0].Estatus === 'Denegado'){
        setDene(true)
    }
    else if(user[0].Estatus === null ){
        setSolicitud(true)
    }
 }
 Solid()
 Solic()

return(
    (Escu ?  <Home id = {route.params.id}/> :
    solicitud ? <Espera denegado={Dene} id = {route.params.id}/>: <Seleccion id = {route.params.id}/>
    )
)

})


export default Navegacion