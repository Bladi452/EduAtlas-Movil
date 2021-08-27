import {useIsFocused } from '@react-navigation/native';
import React,{useState, useEffect, ReactDOM} from 'react';
import Cuenta from '../screens/Cuenta/Cuenta';
import Espera from '../screens/Inscripcion/Espera';
import Home from '../screens/Home';
import Seleccion from '../screens/Inscripcion/Seleccion';
import {getUser, getSolicitud} from '../../api'
/*function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Intentar cambiando isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
); */

const Navegacion = (({route})=>{  
    const [Escu, setEscu] = useState(false)
    const [solicitud, setSolicitud] = useState(true)

    const isFocused = useIsFocused()


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
        setSolicitud(true)
    } else{
        setSolicitud(false)
    }
 }
 Solid()
 Solic()
/*
 function Greeting() {    
    Solid()
    Solic()
    if(Escu) {
        console.log('Home')
      return  <Home id = {route.params.id}/>
    }else{
        console.log('prueba2')
        if(solicitud){
            console.log('seleccion')
           return <Seleccion id = {route.params.id}/>
        }else{
            console.log('espera si')
            return <Espera/>
        }
    }
}

 a == 5 ? ‘Cinco’ :
                    a == 7 ? ‘Siete’:
                    a == 11 ? ‘Once’:
                    a == 15 ? ‘Quince’:
                    'Otro Número;*/ 

return(
    (Escu ?  <Home id = {route.params.id}/> :
    solicitud ? <Seleccion id = {route.params.id}/>: <Espera/>
    )
)

})


export default Navegacion