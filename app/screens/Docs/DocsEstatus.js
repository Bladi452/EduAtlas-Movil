import React from 'react';
import {Text,Button,View, StyleSheet,FlatList } from 'react-native'
import * as ImagePicker from 'expo-image-picker';

const uploadFile = () =>{

 const chooseFile = async()=>{
  let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("Permission to access camera roll is required!");
    return;
  }

  let pickerResult = await ImagePicker.launchImageLibraryAsync();
  console.log(pickerResult);
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