// src/components/MessageReader.jsx
import  { useEffect, useState } from 'react';
import { db } from '../firebase';
import { useParams } from 'react-router-dom';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import './MessageReader.css'
import scrt_logo from "../assets/logo-transparent.svg";
import copy from "../assets/copy.png"
const MessageReader = () => {
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const handleClick=()=>{
    navigator.clipboard.writeText(message);
    alert("Link copied to clipboard!");
    }
  useEffect(() => {
    const fetchMessage = async () => {
      const docRef = doc(db, 'messages', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setMessage(docSnap.data().message);
        await deleteDoc(docRef);
      } else {
        setMessage('Message not found or already deleted.');
      }
    };

    fetchMessage();
  }, [id]);

  return (
    <div className='container'>
      <div className='hero'>
       
        <img src={scrt_logo}/>
        <h1>Share a secret</h1>
        <p>U received a secret.</p>
      
       <div className="messagecontainer">
        <div className="mesg">{message}</div>
        
        <div className="imgcontainer"><img src={copy} onClick={handleClick}/></div>
        </div>
        </div>
    </div>
  );
};

export default MessageReader;
