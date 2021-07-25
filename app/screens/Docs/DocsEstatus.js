import React from 'react';
import {Text,Button,View, StyleSheet,FlatList } from 'react-native'
import DocumentPicker from 'react-native-document-picker'

const uploadFile = () =>{

 const chooseFile = async()=>{

  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.images],
    });
    console.log(
      res.uri,
      res.type, // mime type
      res.name,
      res.size
    );
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      // User cancelled the picker, exit any dialogs or menus and move on
    } else {
      throw err;
    }
  }
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