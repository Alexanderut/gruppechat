import React, {useState, useEffect} from 'react'
import { db } from '../firebase/firebase'
import { collection, addDoc, query, limit, orderBy, onSnapshot } from 'firebase/firestore'
import styled from 'styled-components'
import { formatDistanceToNow } from 'date-fns';




export default function Hjem() {

const [nickname, setNickname] = useState('');
const [message, setMessage] = useState('');
const [messages, setMessages] = useState([]);

const DEFAULTBILDE = "https://firebasestorage.googleapis.com/v0/b/gruppechat3101.appspot.com/o/defaultBilder%2Fanonym.png?alt=media&token=b04fefc7-5938-4791-948a-bedce39f3bf0"

useEffect(()=>{
    const messageRef = collection(db, 'messages')
    const q = query(messageRef, orderBy('timestamp', 'desc'))

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const messages = querySnapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                ...data,
            };
        });
        console.log(messages)
        setMessages(messages);
    });

    return () => unsubscribe();
},[])

const sendMessage = async () =>{
    if(message !== '' && nickname !== ""){
        await addDoc(collection(db, 'messages'),{
            nickname: nickname,
            text: message,
            timestamp: new Date()
        });
        setMessage('')
    }
}

const dateFixer = (dato) =>{
    const fixDate = new Date(dato * 1000)
    return formatDistanceToNow(fixDate, {addSuffix: true})
}

  return (
    <Container>
    <h1>Gruppechat3101</h1>
    <p>Ikke skriv stygge ting til hverandre selv om dere er anonyme! :)</p>

    <InputName 
        type="text"
        value={nickname}
        onChange={e=> setNickname(e.target.value)}
        placeholder="Skriv ditt navn her"
    />

    <Textarea 
        value={message}
        onChange= {e=> setMessage(e.target.value)}
        placeholder="skriv din melding her"
    /> 
    
    { message !== "" && nickname !== "" ?    <Button onClick={sendMessage}>Send melding</Button> : <DangerButton disabled={true}>Du må skrive navn og en melding</DangerButton> }
    

    <MessageArea>
    <div>

        {
            messages.map((msg)=>(
                <Message key={msg.id}>
                    <img src={DEFAULTBILDE} alt="bukerIcon" className='defaultBilde'/>
                    <strong>{msg.nickname}:</strong>
                    {msg.text}
                    <span>{dateFixer(msg.timestamp.seconds)}</span>
                </Message>
            ))
        }

    </div>
    </MessageArea>
    
    
    </Container>
  )
}


const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;


const InputName = styled.input`
  width: 300px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Textarea = styled.textarea`
  min-width: 300px;
  width: 50%;
  height: 100px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: none;
`;


const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }

`;

const DangerButton = styled.button`
padding: 10px 20px;
background-color: red;
color: white;
border: none;
border-radius: 5px;
cursor: not-allowed;
&:hover {
  background-color: darkred;
}

`;

const MessageArea = styled.div`
  width: 100%;
  min-height: 400px;
  overflow-y: auto;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  background-color: #f8f9fa;
`;

const Message = styled.div`
  background-color: #e9ecef;
  padding: 8px;
  border-radius: 5px;
  margin: 5px 0;
  white-space: pre-wrap; // Preserves whitespace and line breaks
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    margin-left: auto;  // Pushes the span to the far right
    display: flex;
    align-items: flex-end;
    font-size:12px;
    font-weight:200 ;
  }

  .defaultBilde{
    width:30px;
    border-radius:50%;
  }

  .defaultBilde{
    width:35px;
    border-radius:50%;
  }
`;