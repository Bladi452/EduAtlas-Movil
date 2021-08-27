import React, {useState, useEffect} from 'react'
import { Text } from 'react-native'
import {List} from '../../components/select/List'
export default function Seleccion ({id, route}) {

 const [Matricula, setMatricula] = useState()

 useEffect(() => {
 pick1()
}, [0])


function pick1(){
if (id === undefined) {
  setMatricula(route.params.id)
} else {
  setMatricula(id)
  }
}

 
  console.log(Matricula)
  return(
  <List id = {Matricula}/>
  )
    }