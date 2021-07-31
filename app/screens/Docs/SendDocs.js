import React from 'react'
import {List} from '../../components/Docs/List'
import {View, Text} from 'react-native'
export default function SendDocs ({route}) {
console.log(route.params.id)
  return(
<List id = {route.params.id} />
  )
    }