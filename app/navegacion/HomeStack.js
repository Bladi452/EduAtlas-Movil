import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Icon} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'

import Docs from './DocsStack'

import Chatne from './ChatStack'

const Tab = createBottomTabNavigator()


export default function HomeStack (route) {


  const navigation = useNavigation()

return(
<Tab.Navigator
    initialRouteName="Home"
      tabBarOptions={{
        inactiveTintColor:"#646464",
        activeTintColor: "#00a680"
      }}
      screenOptions={({route})=> 
      ({
        tabBarIcon: ({color}) => screenOptions(route, color),
      })}

    >

<Tab.Screen 
  name="Chat" 
  component={Chatne}
   
/>

<Tab.Screen
    name="Home"
    component={HomeScreen}
    options={{title:"Home"}}
/>

<Tab.Screen name="Docs" component={Docs} />



        </Tab.Navigator>

  )
}

function HomeScreen() {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"#ffffff" }}>
    <View style={styles.Vista}>
      <Text style={styles.titulo}>Reglas de los documentos</Text>
      <Text>polque a la banquera le da tanta hambre</Text>
      <Text>no te impoltaa</Text>
      <Text>No e obligao rapai</Text>
      <Text>Polquee</Text>
      <Text>La creta e tu mama</Text>
    </View>
    </View>
  );
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
    <Icon type="material-community" name={iconName} size={22} color={color} id = {route.id} />
  );
}

const styles = StyleSheet.create({
titulo:{
  fontSize:25,
  width:"90%",
  color:"black",
  alignSelf:"center",
  fontWeight:"bold",
  marginBottom:2,
  textAlign:"center"
},

Vista:{
    height:300,
    width: "80%",
    backgroundColor:"#cdcdcd",
    alignSelf:"center",
    borderRadius:10
}
})