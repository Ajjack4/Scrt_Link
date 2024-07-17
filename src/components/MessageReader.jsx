// src/components/MessageReader.jsx
import  { useEffect, useState } from 'react';
import { db } from '../firebase';
import { useParams } from 'react-router-dom';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';

const MessageReader = () => {
  const { id } = useParams();
  const [message, setMessage] = useState('');

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
    <div>
      <p>{message}</p>
    </div>
  );
};

export default MessageReader;
