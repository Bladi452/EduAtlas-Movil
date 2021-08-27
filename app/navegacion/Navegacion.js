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

return(
    (Escu ?  <Home id = {route.params.id}/> :
    solicitud ? <Seleccion id = {route.params.id}/>: <Espera/>
    )
)

})


export default Navegacion