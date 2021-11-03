import React, {useEffect} from 'react'
import { BackHandler,Text, View, StyleSheet, Alert} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Icon} from 'react-native-elements'

import Mascarilla from '../components/Mascarilla';
import Events from '../screens/events/Events'
import Profile from '../screens/Profile'

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
  const backAction = () => {
    Alert.alert("Oh", "quieres cerrar la aplicacion, presiona cerrar?", [
      {
        text: "Cancelar",
        onPress: () => null,
        style: "cancel"
      },
      { text: "Si", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    backAction
  );

  return () => backHandler.remove();
}, [])

 
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
  name="Evento"
  component={Events}
  initialParams={route}
/>

<Tab.Screen
    name="Home"
    component={HomeScreen}
    options={{title:"Home"}}
    initialParams={route}
/>
<Tab.Screen
    name="Profile"
    component={Profile}
    options={{title:"Perfil"}}
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
    case "Evento":
      iconName = "calendar-multiple";
      break;
    case "Profile":
      iconName = "account-circle";
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
        width:"90%",
        alignSelf:"center",
        marginTop:10,
        marginBottom:10,
        backgroundColor:"#ffffff",
        borderRadius:10,
        padding:10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
      
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
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