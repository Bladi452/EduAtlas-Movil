import React, { useState, useEffect } from "react";
import { Alert} from "react-native";
import Cargando from "../../components/Cargando";
import {conecCargo, getMat} from "../../../api";
import Login from "./Login"

const API = 'http://10.0.0.10:3000/server-edu'
//const API = 'http://10.0.0.49:3000/server-edu'
//const API = 'http://tecnodiaz.es/server-edu'
//const API = 'http://10.0.0.37:3000/server-edu'


const RegistroC = ({route}) => {

const data =  route.params.Info

  const [state, setState] = useState(null)
  const [message, setMessage] = useState(null)
  const signup =  async(newdata) =>{
  const res =  await fetch(`${API}/auth/regis`,{
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(newdata),
    })    
      try {
          const jsonRes = await res.json();
          if (res.status === 200) {
         console.log(jsonRes)
          }  else {
            
              Alert.alert(jsonRes.message)
          }
      } catch (err) {
          console.log(err);
      };
  }
  
 
  



useEffect(() => {
  registrar()
}, [])

 async function registrar (){
   try {
    await signup(data)
    const matnew = await getMat()
    
   const newMat =  await conecCargo(matnew[0].Matricula)
   
   if(newMat.message === 'Se conecto correctamente'){
    
    Alert.alert(`Tu matricula es: ${matnew[0].Matricula} copiala o tomale una captura`)
   
  
   }else{
     
    setMessage(newMat.message)
    Alert.alert(message)
   }
   } 
   catch (error) {
    console.log(error)
   }finally{
    setState(true)
   }
 
   
 


}
if(state === null){
  return <Cargando isVisible={true} text= "Estamos registrándote"/>
   }

  return (
    <Login/>
  );
  
  }
export default RegistroC;