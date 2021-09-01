import React,{useState, useEffect} from 'react';
import { Text } from 'react-native-elements';
import Cuenta from '../screens/Cuenta/Cuenta';
import Espera from '../screens/Inscripcion/Espera';
import Home from '../screens/Home';
import HomeAdmin from './HomeStackAdmin';
import Seleccion from '../screens/Inscripcion/Seleccion';
import {getUser, getSolicitud} from '../../api'
import HomeStack from './HomeStack';
import { set } from 'react-native-reanimated';

const Navegacion = (({route})=>{  
const Usuario = route.params.datos[0]

    const [Cargo, setCargo] = useState(null)
    const [Escu, setEscu] = useState(null)
    const [solicitud, setSolicitud] = useState(null)
    const [Dene, setDene] = useState(false)


const SeCargo =()=>{
     if(Usuario.Nivel >=107){
         setCargo(false)
     }else{
         setCargo(true)
     }
 }

const Solid =()=>{
     if(Usuario.Codigo_Escuelas === null){
         setEscu(false)
     }else{
         setEscu(true)
     }
 }

 const Solic = async()=>{
    const user = await getSolicitud(Usuario.Matricula)
    console.log(user.length)
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
    SeCargo()
    Solid()
    Solic()
},[])

 if(Cargo === null || Escu === null){
return <Text>Cargando...</Text>
 }

 return(
  (Cargo ? <HomeAdmin id = {Usuario.Matricula} Escuela = {Usuario.Codigo_Escuelas}/>:
      Escu ?  <Home id = {Usuario.Matricula}/> :
    solicitud ? <Espera denegado={Dene} id = {Usuario.Matricula}/>: <Seleccion id = {Usuario.Matricula}/>
    ) 
)
})


export default Navegacion