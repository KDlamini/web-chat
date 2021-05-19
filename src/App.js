import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import './App.css';
import ChatFeed from './components/ChatFeed'

function App() {
  return (
    <ChatEngine 
      height="100vh"
      projectID="102306df-2b9c-46d4-8d7c-60bea7a7bf63"
      userName="simo-nkosi"
      userSecret="Willies1992"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
