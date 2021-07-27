import React,{useState, useEffect} from 'react';
import {Text,Button,View, StyleSheet,FlatList,Platform } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { uploadImg, getUser } from '../../../api';

const uploadFile = ({route}) =>{
  
  const [state, setstate] = useState()

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
  const path = await normalizePath(pickerResult.uri)
  console.log(pickerResult)
  console.log(path);
const obj ={
  escu: state.Codigo_Escuelas ,
  id: state.Matricula,
  pick: path
}
  uploadImg(obj);
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

return (
    <View>
      <Text>Upload Files & Render In Component</Text>
    <View>
      <Button
      onPress={chooseFile}
      title="Upload"/>
            <FlatList/>
                <Text>List Item 1</Text>
    </View>
</View>

)
const style = StyleSheet({})
}

export default uploadFile