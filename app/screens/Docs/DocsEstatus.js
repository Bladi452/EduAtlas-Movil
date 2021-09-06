import React,{useState, useEffect} from 'react';
import {Text,Button,View, StyleSheet,FlatList,Platform,TouchableOpacity, Image,Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import {Picker} from '@react-native-community/picker'
import { uploadImg, getUser } from '../../../api';
import axios from'axios';
import {useNavigation} from '@react-navigation/native'
import { AdMobInterstitial } from 'expo-ads-admob';

const API = 'http://10.0.0.37:3000'



const uploadFile = ({route}) =>{

  const [picker, setpicker] = useState({
    Nombre:'1'
  })

  const [state, setstate] = useState()
//aqui se guarda la uri
  const [docsImage, setdocsImage] = useState('');
 
  const handleChange = (name, value) => setpicker({...state, [name] : value});

  useEffect(() => {
    getUs();
  },[])

  const navigation = useNavigation()
  const getUs = async()=>{
  
   const [row] = await getUser(route.params.id)
   
    setstate(row)
  }

 const chooseFile = async()=>{


  let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("La aplicacion necesita acceso a camara y a galeria para subir imagenes");
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
Alert.alert(`Se subio el ${picker.Nombre}`)
 } catch (error) {
   console.log(error);
 }
}

return (
    <View>
      <Text style={
              styles.skip
             
            }>Subir documentos </Text>
    <View>
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
            <Text style={styles.uploadBtn}>Selecciona la imagen</Text>
          )}
        </TouchableOpacity>

    <Picker
        selectedValue={picker.Nombre}
        style={styles.picker}
        onValueChange ={(itemValue)=> handleChange('Nombre', itemValue)}
>
        <Picker.Item label="Acta de nacimiento" value="Acta de nacimiento" />
        <Picker.Item label="Record de nota" value="Record de nota" />
        <Picker.Item label="Fotos 2x2" value="Fotos 2x2" />
        <Picker.Item label="Certificado Medico" value="Certificado Medico" />
        <Picker.Item label="Cedula de los padres" value="Cedula de los padres" />
        <Picker.Item label="Documentos especificados por la escuela" value="Documentos especificados por la escuela" />

      </Picker>
      

{docsImage ? (
          <Text
            onPress={uploadImage}
            style={[
              styles.skip,
              { backgroundColor: '#00a680', color: 'white', borderRadius: 8 },
            ]}
          >
            Subir documento
          </Text>
        ) : null}

            <TouchableOpacity
            
            onPress={() => navigation.navigate("SendDocs", { id: route.params.id })}
            >
              <Text   style={[
              styles.skip,
              { backgroundColor: 'teal', color: 'white', borderRadius: 8, marginTop: 10},
            ]}>Ver documentos subidos</Text>
            </TouchableOpacity>
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
    height: 225,
    width: 225,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    overflow: 'hidden',
    alignSelf :"center",
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
    justifyContent: 'center'
  },
  picker:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 70, 
    width: 250,
    alignSelf :"center",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 10,

  }
})

export default uploadFile