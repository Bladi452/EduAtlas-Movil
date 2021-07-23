import React from 'react';
import {Text,ListItem,List,Content,Right ,Icon,Button,Body,Header,Container, StyleSheet} from 'react-native'
import DocumentPicker from 'react-native-document-picker'
const DocsEstatus = () =>{

 const chooseFile = async()=>{

try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
    });
    console.log(
      res.uri,
      res.type,
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
    <Container>
        <Header>
            <Body style ={{flex: 1, alignItems: 'center'}}>
                <Title>Upload Files & Render In Component</Title>
            </Body>
            <Right style={{flex: 0.2}}>
<Button transparent onPress={} >
    <Icon name="cloud-upload" type="MaterialIcons" />
</Button>
            </Right>
        </Header>
    <Content>
        <List>
            <ListItem>
                <Text>List Item 1</Text>
            </ListItem>
        </List>
    </Content>
</Container>

)
const styler = StyleSheet({})
}

export default DocsEstatus