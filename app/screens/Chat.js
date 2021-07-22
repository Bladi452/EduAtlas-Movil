import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import {getMessage} from '../../api'

export default function Chat ({route}){
    const [messages, setMessages] = useState([]);

useEffect(() => {
  getMess()
    }, [])

  const getMess = async()=>{
   const messages = await getMessage(route.params.Id_sala_User);
   setMessages(messages)
 
  }

const correr = ()=>{
  console.log(messages.Matricula)
  return [messages].Matricula
  }

correr()

const ne = messages.map(correr)
console.log(ne)
const new1 =[]


const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])
  
 
return (
        <GiftedChat
          messages={new1}
          onSend={(new1) => onSend(new1)}
          user={{
            _id: 20211013,
          }}
        />
      )
}