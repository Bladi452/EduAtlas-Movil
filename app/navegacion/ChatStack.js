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
  
export default function Chatne(props) {

console.log(props)

  const navigation = useNavigation()
  
  const [Chat, setChat] = useState([])
  
  useEffect(() => {
    
  },)
  
    const newChat = async ()=>{
       const chats = await getChat()
       console.log()
    }
  
  return (
    <Container>
    <FlatList 
      data={Chat}
      keyExtractor={item=>item.id}
      renderItem={({item}) => (
        <Card onPress={() => navigation.navigate('chat', {userName: item.userName})}>
          <UserInfo>
            <UserImgWrapper>
              <UserImg source={item.userImg} />
            </UserImgWrapper>
            <TextSection>
              <UserInfoText>
                <UserName>{item.userName}</UserName>
                <PostTime>{item.messageTime}</PostTime>
              </UserInfoText>
              <MessageText>{item.messageText}</MessageText>
            </TextSection>
          </UserInfo>
        </Card>
      )}
    />
  </Container>
    );
};
