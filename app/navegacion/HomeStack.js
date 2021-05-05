import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import HomeStack3 from './HomeStack'
import DocsStack from './DocsStack'
import ChatStack from './ChatStack'

const Tab = createBottomTabNavigator()

export default function HomeStack () {
    return(
<Tab.Navigator
        initialRouteName="buscar"
        tabBarOptions={{
            inactiveTinColor:"#646464",
            activeTintColor: "#00a680"
        }}
        >
<Tab.Screen
    name="Home"
    component={HomeStack3}
    options={{title:"Home"}}
/>

        </Tab.Navigator>


)
}