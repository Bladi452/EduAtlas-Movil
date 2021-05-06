import React from 'react'
import { Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'


import Docs from './DocsStack'
import Chat from './ChatStack'

const Tab = createBottomTabNavigator()
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>polque!</Text>
    </View>
  );
}





export default function HomeStack () {
    return(
<Tab.Navigator
     
        >
<Tab.Screen
    name="Home"
    component={HomeScreen}
    options={{title:"Home"}}
/>
<Tab.Screen name="Chat" component={Chat} />
<Tab.Screen name="Docs" component={Docs} />

        </Tab.Navigator>


)
}