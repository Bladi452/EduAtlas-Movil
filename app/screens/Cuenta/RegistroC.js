import React, { useState, useEffect } from "react";
import {useNavigation} from '@react-navigation/native';
import { View, Picker, StyleSheet, Image, Text, TouchableOpacity ,Alert} from "react-native";
import Cargando from "../../components/Cargando";
import {ConecCargo, getMat} from "../../../api";
import Login from "./Login"

//const API = 'http://10.0.0.37:3000/server-edu'

const API = 'http://tecnodiaz.es/server-edu'

const RegistroC = ({route}) => {

const data =  route.params.Info
console.log(route.params.Info)
  const [state, setstate] = useState(null)
  const [Message, setMessage] = useState([]);
  const signup =  async(newdata) =>{
    await fetch(`${API}/auth/regis`,{
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(newdata),
    })    .then(async res => { 
      try {
          const jsonRes = await res.json();
          if (res.status === 200) {
              setMessage(jsonRes.message);
          }
      } catch (err) {
          console.log(err);
      };
  })
  .catch(err => {
      console.log(err);
  });
};

useEffect(() => {
  registrar()
}, [])

 async function registrar (){
  await signup(data)
  const matnew = await getMat()
 await ConecCargo(matnew[0].Matricula)
 setstate(true)
  Alert.alert(`Tu matricula es: ${matnew[0].Matricula} copiala o tomale una captura`)
}
if(state === null){
  return <Cargando isVisible={true} text= "Estamos registrándote"/>
   }

return(
  <Login/>
  )
}
export default RegistroC;