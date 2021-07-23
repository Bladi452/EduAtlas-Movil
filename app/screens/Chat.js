import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import {getMessage, sendMessage} from '../../api'

export default function Chat ({route}){
  const [messagesOrigin, setMessagesOrigin] = useState([]);
  const [messages, setMessage] = useState([]);

console.log(route)
useEffect(() => {
  getMess()
    }, [])

  class object {
    constructor(id, text, fecha ,id2) {

      let fechaN = new Date(fecha);

      this._id = id,
        this.text = text,
        this.createdAt = fechaN,
        this.user = {
          _id: id2,
        };
    }
  }

  const getMess = async()=>{
   const messages = await getMessage(route.params.Id_sala_User);
   let i = 0
   let messagesArray = []
    let messagesArrayCom =[]
while(i < messages.length){
  let id =  messages[i].id;
  let text = messages[i].mensaje;
  let fecha = messages[i].fecha;
  let user = messages[i++].Matricula;
    let messagesArrayCom = new object(id, text, fecha ,user  )
    messagesArray.push(messagesArrayCom)
  }
  setMessage(messagesArray)
  }

const sendMess = async(newMessage)=>{
  let convert = [{
    mensaje: newMessage[0].text,
    id_Sala: route.params.Id_sala_User,
    Matricula: newMessage[0].user._id,
    fecha: newMessage[0].createdAt
  }]
  const row = await sendMessage(convert[0])
  console.log(row)
}

const onSend = useCallback((messagess = []) => {
  setMessagesOrigin(previousMessages => GiftedChat.append(previousMessages, messagess))

 sendMess(messagess)
 getMess();  
}, [])
  
 
return (
        <GiftedChat
          messages={messages}
          onSend={(messagess) => onSend(messagess)}
         user={{
            _id: route.params.Matricula
          }}
        />
      )
}