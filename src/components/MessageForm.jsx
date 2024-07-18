// src/components/MessageForm.jsx
import { useState } from 'react';
import { db, serverTimestamp } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import './MessageForm.css';
import scrt_logo from "../assets/logo-transparent.svg";
import Link from "./Link.jsx";

const MessageForm = () => {
  const [message, setMessage] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      const docRef = await addDoc(collection(db, 'messages'), {
        message,
        createdAt: serverTimestamp()
      });
      setLink(`${window.location.origin}/message/${docRef.id}`);
      setMessage('');
    }
  };

  return (
    <div className='container'>
      <div  className={`hero ${!link ? '':'linkcomp'}`}>
        <div>
          <img src={scrt_logo} alt="Secret Link Logo" />
          <h1>Share a secret</h1>
          <p>…with a link that only works one time and then self-destructs.</p>
        </div>
        <div className="formfield">
          {!link ? (
            <form onSubmit={handleSubmit}>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Write your secret here...'></textarea>
              <button type="submit">Generate Link</button>
            </form>
          ) : (
            <div className='linkdiv'><Link link={link} /></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
