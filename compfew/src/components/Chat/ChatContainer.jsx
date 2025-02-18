import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from "./ChatInput"

import "./ChatContainer.css"

const ChatContainer = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm here to listen and support you. How are you feeling today?", isUser: false }
  ]);

  return (
    <div className="flex-1 flex flex-col h-screen bg-gray-50 dark:bg-gray-900 parent-flex">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ChatMessage message={message.text} isUser={message.isUser} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className='bottom-content'>
      <ChatInput onSendMessage={(text) => {
        setMessages([...messages, { id: Date.now(), text, isUser: true }]);
      }} />
      </div>
    </div>
  );
};
export default ChatContainer