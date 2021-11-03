import React, {useEffect} from 'react'
import {BackHandler ,Text, View, StyleSheet, Alert } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Icon} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
import solicitudes from '../screens/Admin/solicitudes';
import Mascarilla from '../components/Mascarilla';
import EventsAd from '../screens/Admin/events/EventsAd'
import Profile from '../screens/Profile'

const Tab = createBottomTabNavigator()


export default function HomeStackAdmin (route) {


  useEffect(() => {
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
    name="Home"
    component={HomeScreen}
    options={{title:"Home"}}
    initialParams={route}
/>

<Tab.Screen 
  name="Evento" 
  component={EventsAd}
  initialParams={route}
/>

<Tab.Screen
    name="Solictud"
    component={solicitudes}
    options={{title:"Solicitud"}}
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
      <Text style={styles.titulo}>Bienvenidos a Edu-Atlas</Text>
      <Text>Recuerda revisar las solicitudes</Text>
      <Text>Que tengas un excelente día</Text>
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
      case "Solictud":
        iconName = "format-list-bulleted-type";
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