import React from 'react';

const ChatMessage = ({ message, isUser }) => {
  if (isUser) {
    return (
      <div className="flex items-start justify-end max-w-xl ml-auto">
        <div className="bg-purple-600 p-3 rounded-lg shadow-sm">
          <p className="">{message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start max-w-xl">
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
        🤖
      </div>
      <div className="ml-3 bg-white p-3 rounded-lg shadow-sm">
        <p className="text-gray-800">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;