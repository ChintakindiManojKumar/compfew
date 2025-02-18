import React from 'react';
import Sidebar from './components/Layout/Sidebar';
import ChatContainer from './components/Chat/ChatContainer';
import Navbar from './components/Navbar/Navbar';
const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Navbar/>
      <ChatContainer />
    </div>
  );
};

export default App;