import React from 'react'
import { Text } from 'react-native-elements'
import HomeStack from '../navegacion/HomeStack'
import HomeStackAdmin from '../navegacion/HomeStackAdmin'
export default function Home (route){
    return(
          <HomeStack id = {route.id} />
    )
}