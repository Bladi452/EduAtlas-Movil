import React,{useState, useEffect} from 'react';
import {Text,Button,View, StyleSheet,FlatList,Platform } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { uploadImg, getUser } from '../../../api';
import axios from'axios';

const API = 'http://10.0.0.11:3000'

const uploadFile = ({route}) =>{
  
  const [state, setstate] = useState()
//aqui se guarda la uri
  const [docsImage, setdocsImage] = useState('');
 

  useEffect(() => {
    getUs()
  },[])

  const getUs = async()=>{
  
   const [row] = await getUser(route.params.id)
   
    setstate(row)
  }

 const chooseFile = async()=>{


  let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("Permission to access camera roll is required!");
    return;
  }

  let pickerResult = await ImagePicker.launchImageLibraryAsync();

  setdocsImage(pickerResult.uri)

  const path = await normalizePath(pickerResult.uri)

  console.log(pickerResult)
  console.log(path);

  
 
}

 async function normalizePath(path){
   if(Platform.OS==='ios' || Platform.OS==='android'){
     const filePrefix = 'file://'
     if(path.startsWith(filePrefix)){
       path=path.substring(filePrefix.length)
       try {
         path=decodeURI(path)
       } catch (error) {
         
       }
     }
   }
   return path
 }
 //el formData llega dentro del req
 const uploadImage = async () => {
  const formData = new FormData();
  formData.append('docs', {
    name: new Date() + '.jpg',
    uri: docsImage,
    type: 'image/jpg',
  });
 

 try {
  const obj ={
    escu: state.Codigo_Escuelas ,
    id: state.Matricula
    
  }
  
  const res = await axios.post(`${API}/document/${obj.id}/${obj.escu}`,formData,{
    method: "POST",
    headers:{
        Accept: 'application/json',
        "Content-Type": 'multipart/form-data',
    },
  
});
 } catch (error) {
   console.log(error);
 }
}

return (
    <View>
      <Text>Upload Files & Render In Component</Text>
    <View>
      <Button
      onPress={chooseFile}
      title="choose"/>
            <FlatList/>
                <Text>List Item 1</Text>
                <Button
                onPress={uploadImage}
                title="upload"/>
    </View>
</View>

)
const style = StyleSheet({})
}

export default uploadFile