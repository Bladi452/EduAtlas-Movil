import React from 'react'
import {List} from '../../components/select/List'
export default function Seleccion ({route}) {

  return(
  <List id = {route.params.id}/>
  )
    }