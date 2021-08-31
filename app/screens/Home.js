import React from 'react'
import { Text } from 'react-native-elements'
import HomeStack from '../navegacion/HomeStack'

export default function Home (route){
console.log(route.id)
    return(
          <HomeStack id = {route.id} />
    )
}