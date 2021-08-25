import React,{useEffect, useState} from 'react'
import { Text, View, Button, StyleSheet, FlatList } from 'react-native';
import { Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection} from '../styles/messageChatList.js'

  import {useNavigation} from '@react-navigation/native'
  import { getChat } from '../../api.js';
  
export default function Chatne({route}) {

  useEffect(() => {
    newChat()
  },[])
  const navigation = useNavigation()
  
  const [Chat, setChat] = useState([])
  
  
    const newChat = async ()=>{
       const chats = await getChat(route.params.id);
       setChat(chats)
    }
  
  return (
    <Container>
    <FlatList 
      data={Chat}
      keyExtractor={item => item.Id.toString()}
      renderItem={({item}) => (
        <Card onPress={() => navigation.navigate('chat', {Id_sala_User: item.Id_Sala, Matricula: item.Matricula})}>
          <UserInfo>
            <UserImgWrapper>
              <UserImg source={item.userImg} />
            </UserImgWrapper>
            <TextSection>
              <UserInfoText>
                <UserName>{item.Nombre}</UserName>
                <PostTime>{item.Fecha}</PostTime>
              </UserInfoText>
              <MessageText>{item.Matricula}</MessageText>
            </TextSection>
          </UserInfo>
        </Card>
      )}
    />
    </Container>
    );
};
