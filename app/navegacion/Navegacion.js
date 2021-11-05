import React,{useState, useEffect} from 'react';

import Espera from '../screens/Inscripcion/Espera';
import Home from '../screens/Home';
import HomeAdmin from './HomeStackAdmin';
import Seleccion from '../screens/Inscripcion/Seleccion';
import { getSolicitud} from '../../api'

import Cargando from '../components/Cargando';

const Navegacion = (({route})=>{  
const Usuario = route.params.datos[0]

    const [cargo, setCargo] = useState(null)
    const [escu, setEscu] = useState(null)
    const [solicitud, setSolicitud] = useState(null)
    const [Dene, setDene] = useState(false)


const seCargo =()=>{
     if(Usuario.Nivel >=107){
         setCargo(false)
     }else{
         setCargo(true)
     }
 }

const solid =()=>{
     if(Usuario.Codigo_Escuelas === null){
         setEscu(false)
     }else{
         setEscu(true)
     }
 }

 const solic = async()=>{
    const user = await getSolicitud(Usuario.Matricula)
   
    if(user.length === 0){
        setSolicitud(false)
    }else{
        setSolicitud(true) 
        if(user[0].Estatus === 'Denegado'){
        setDene(true)
 }
}
}
 useEffect(() => {
    seCargo()
    solid()
    solic()
},[])

 if(cargo === null || escu === null || solicitud === null){
return <Cargando isVisible={true} text= "Está iniciando sesión"/>
 }

 return(
  (cargo ? <HomeAdmin id = {Usuario.Matricula} Escuela = {Usuario.Codigo_Escuelas}/>:
      escu ?  <Home id = {Usuario.Matricula}/> :
    solicitud ? <Espera denegado={Dene} id = {Usuario.Matricula}/>: <Seleccion id = {Usuario.Matricula}/>
    ) 
)
})


export default Navegacion