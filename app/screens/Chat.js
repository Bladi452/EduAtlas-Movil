import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import {getMessage, sendMessage} from '../../api'

export default function Chat ({route}){
  const [messagesOrigin, setMessagesOrigin] = useState([]);
  const [messages, setMessage] = useState([]);

useEffect(() => {
  getMess()
    }, [])

  class object {
    constructor(id, text, fecha ,id2, nameV) {

      let fechaN = new Date(fecha);

      this._id = id,
        this.text = text,
        this.createdAt = fechaN,
        this.user = {
          _id: id2,
          name: nameV
        };
    }
  }
console.log(route.params.Matricula)
  const getMess = async()=>{

    const message = await getMessage(route.params.Id_sala_User);
   console.log(message)
    let i = 0
   let messagesArray = []
    let messagesArrayCom =[]
while(i < message.length){
  let id =  message[i].id;
  let text = message[i].mensaje;
  let fecha = message[i].fecha;
  let nameV = message[i].NomCom;
  let user = message[i++].Matricula;
    let messagesArrayCom = new object(id, text, fecha ,user, nameV )
console.log(messagesArrayCom)
    messagesArray.push(messagesArrayCom)
  }
  setMessage(messagesArray)
  }

const sendMess = async(newMessage)=>{
  let convert = [{
    mensaje: newMessage[0].text,
    Matricula: newMessage[0].user._id,
    id_Sala: route.params.Id_sala_User,
    fecha: newMessage[0].createdAt
  }]
  const row = await sendMessage(convert[0])
  getMess()
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
          renderUsernameOnMessage={true}
          user={{
            _id: parseInt(route.params.Matricula)
          }}
        />
      )
}