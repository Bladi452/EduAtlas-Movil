import React,{useState, useEffect} from 'react';
import {Text,Button,View, StyleSheet,FlatList,Platform,TouchableOpacity, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import {Picker} from '@react-native-community/picker'
import { uploadImg, getUser } from '../../../api';
import axios from'axios';

const API = 'http://10.0.0.3:3000'

const documentos ={

}

const uploadFile = ({route}) =>{

  const [picker, setpicker] = useState({
    Nombre:'1'
  })

  const [state, setstate] = useState()
//aqui se guarda la uri
  const [docsImage, setdocsImage] = useState('');
 
  const handleChange = (name, value) => setpicker({...state, [name] : value});

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
    type: 'image/jpg'
  });
 

 try {
  const obj ={
    escu: state.Codigo_Escuelas ,
    id: state.Matricula
    
  }

  const res = await axios.post(`${API}/document/${obj.id}/${obj.escu}/${picker.Nombre}`,formData ,{
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
    <Picker
        selectedValue={picker.Nombre}
        style={{ height: 50, width: 150 }}
        onValueChange ={(itemValue)=> handleChange('Nombre', itemValue)}
>
        <Picker.Item label="Acta de nacimiento" value="Acta de nacimiento" />
        <Picker.Item label="Record de nota" value="Record de nota" />
        <Picker.Item label="Fotos 2x2" value="Fotos 2x2" />
        <Picker.Item label="Certificado Medico" value="Certificado Medico" />
        <Picker.Item label="Cedula de los padres" value="Cedula de los padres" />
        <Picker.Item label="Documentos especificados por la escuela" value="Documentos especificados por la escuela" />

      </Picker>
      <TouchableOpacity
      onPress={chooseFile}
      title="choose"
      style={styles.uploadBtnContainer}>
{docsImage ? (
            <Image
              source={{ uri: docsImage }}
              style={{ width: '100%', height: '100%' }}
            />
          ) : (
            <Text style={styles.uploadBtn}>Upload Profile Image</Text>
          )}
        </TouchableOpacity>

{docsImage ? (
          <Text
            onPress={uploadImage}
            style={[
              styles.skip,
              { backgroundColor: 'green', color: 'white', borderRadius: 8 },
            ]}
          >
            Upload
          </Text>
        ) : null}



    </View>
</View>

)}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadBtnContainer: {
    height: 125,
    width: 125,
    borderRadius: 125 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    overflow: 'hidden',
  },
  uploadBtn: {
    textAlign: 'center',
    fontSize: 16,
    opacity: 0.3,
    fontWeight: 'bold',
  },
  skip: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    opacity: 0.5,
  },
})

export default uploadFile