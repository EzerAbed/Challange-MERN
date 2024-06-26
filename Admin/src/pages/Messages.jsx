// React Component
import React, { useState, useEffect } from 'react';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/contact/')
      .then(response => response.json())
      .then(data => {
        setMessages(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDeleteMessage = (messageId) => {
    fetch(`http://localhost:8000/contact/${messageId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
    },
    })
      .then(response => response.json())
      .then(() => {
        setMessages(messages.filter(message => message._id !== messageId));
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1 style={{margin:'5vh 10vw'}}>Messages</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table style={{width:'100%',textAlign:'center'}}>
          <thead>
            <tr>
                <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message._id}>
                <td>{message._id}</td>
                <td>{message.name}</td>
                <td>{message.mail}</td>
                <td>{message.phone}</td>
                <td>{message.message}</td>
                <td>
                  <button onClick={() => handleDeleteMessage(message._id)}>Mark as read</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Messages;