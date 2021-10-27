import React,{useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import { List } from '../../components/events/List';
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
return <Cargando isVisible={true} text= "Cargando Eventos" />
}

return(
 <List id = {codigo}/>
  )
    }