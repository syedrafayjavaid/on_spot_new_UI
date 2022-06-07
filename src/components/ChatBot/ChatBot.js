import React from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import logo from "assets/images/bot.jpg"


const ChatBot = () => {

  const handleNewUserMessage = (newMessage) => {

    fetch('http://192.168.1.105:5000/predict', {
      method: 'POST',
      body: JSON.stringify({ message: newMessage }),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },

    }).then(r => r.json())
      .then(r => {
        addResponseMessage(r.answer);
      }).catch((err) => {
        console.log(err);
        const errorMessage = "Sorry I have ran into a problem please try again after sometime"
        addResponseMessage(errorMessage);
      });
    // Now send the message throught the backend API
    //  const  response = "Urta loru"
    //   addResponseMessage(response);
  };
  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar={logo}
        emojis
        title="Welcome to OnSpot Bot"
        subtitle="I am available here for you 24/7"

      />
    </div>
  )
}

export default ChatBot;


