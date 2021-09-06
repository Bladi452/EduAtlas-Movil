import React, {useEffect} from 'react'
import { Text, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Icon} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
import Mascarilla from '../components/Mascarilla';

import uploadFile from '../screens/Docs/DocsEstatus'

import Chatne from './ChatStack'
import {AdMobInterstitial } from 'expo-ads-admob';

const interstial = async () =>{
  await AdMobInterstitial.setAdUnitID('ca-app-pub-3127095758669759/3880389007');

  try {
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
    await AdMobInterstitial.showAdAsync(); 
  } catch (error) {
    console.log(error)
  }
}

const Tab = createBottomTabNavigator()


export default function HomeStack (route) {

useEffect(() => {
  interstial();
}, [])

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
  initialParams={route}
/>

<Tab.Screen
    name="Home"
    component={HomeScreen}
    options={{title:"Home"}}
    initialParams={route}
/>

<Tab.Screen 
  name="Docs" 
  component={uploadFile} 
  initialParams={route}
  />

        </Tab.Navigator>

  )
}

function HomeScreen() {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"#ffffff" }}>
    <View style={styles.Vista2}>
      <Mascarilla/>
    </View>
    <View style={styles.Vista}>
      <Text style={styles.titulo}>Requisitos de inscripción</Text>
      <Text>Acta de nacimiento</Text>
      <Text>Acta de culminación de estudios básicos</Text>
      <Text>Fotos 2x2</Text>
      <Text>Certificado Médico</Text>
      <Text>Copia de cédula de ambos padres</Text>
      <Text>Teléfonos actualizados</Text>
      <Text>Record de notas</Text>
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
},
Vista2:{
  marginBottom:90,
  height:"14%",
  width: "95%",
  backgroundColor:"#F7D000",
  alignSelf:"center",
  borderRadius:10
}
})