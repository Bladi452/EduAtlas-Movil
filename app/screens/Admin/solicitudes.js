import React, {useState, useEffect} from 'react';
import {List} from '../../components/solicitud/List'
import {View, Text} from 'react-native'
import {getUser} from '../../../api';
import { useIsFocused } from "@react-navigation/native";
import Cargando from '../../components/Cargando';

export default function solicitudes ({route}) {

  const isFocused = useIsFocused();

async function codicEscuAdmin(){
  const user = await getUser(route.params.id)
  setCodigo(user[0].Codigo_Escuelas)
}
useEffect(() => {
  codicEscuAdmin() 
},[isFocused])
const [codigo, setCodigo] = useState(null)

if (codigo === null) {
return <Cargando isVisible={true} text= "Cargando Solicitudes" />
}

return(
 <List id = {codigo}/>
  )
    }