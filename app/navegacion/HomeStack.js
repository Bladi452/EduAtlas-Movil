import React from 'react'
import { Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Icon} from 'react-native-elements'

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
    initialRouteName="Home"
      tabBarOptions={{
        inactiveTintColor:"#646464",
        activeTintColor: "#00a680"
      }}
      screenOptions={({route})=>({
        tabBarIcon: ({color}) => screenOptions(route, color),
      })}
    >

<Tab.Screen name="Chat" component={Chat} />

<Tab.Screen
    name="Home"
    component={HomeScreen}
    options={{title:"Home"}}
/>

<Tab.Screen name="Docs" component={Docs} />



        </Tab.Navigator>

  )
}

function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "Home":
      iconName = "home";
      break;
    case "Chat":
      iconName = "chat-outline";
      break;
    case "Docs":
      iconName = "cloud-upload";
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
