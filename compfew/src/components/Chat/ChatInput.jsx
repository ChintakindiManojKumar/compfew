import React, { useState } from 'react';

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="bg-white p-4 border-t border-gray-200">
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <button type="button" className="p-2 hover:bg-gray-100 rounded transition-colors duration-200">
          <span>🎭</span>
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
        />
        <button type="button" className="p-2 hover:bg-gray-100 rounded transition-colors duration-200">
          <span>🎙️</span>
        </button>
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInput;