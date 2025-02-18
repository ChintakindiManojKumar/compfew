import React from 'react';

const ChatHeader = () => {
  return (
    <div className="bg-white p-4 border-b border-gray-200">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold">Your Safe Space</h1>
          <p className="text-sm text-gray-600">Feel free to share anything on your mind</p>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded transition-colors duration-200">
            <span className="text-sm">🎨 Theme</span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded transition-colors duration-200">
            <span className="text-sm">📋 Resources</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;