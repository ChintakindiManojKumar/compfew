import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MoodTracker from '../features/MoodTracker';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <motion.h1 
              className="text-xl font-bold text-purple-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              MindfulAI
            </motion.h1>
          </div>

          {/* Navigation Items */}
          <div className="flex space-x-8">
            <NavItem 
              icon="😊" 
              label="Mood"
              isActive={activeTab === 'mood'}
              onClick={() => setActiveTab(activeTab === 'mood' ? null : 'mood')}
            />
            <NavItem 
              icon="📈" 
              label="Progress"
              isActive={activeTab === 'progress'}
              onClick={() => setActiveTab(activeTab === 'progress' ? null : 'progress')}
            />
           
          </div>
        </div>

        {/* Expandable Content */}
        <motion.div
          initial={false}
          animate={{ height: activeTab ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {activeTab === 'mood' && <MoodTracker />}
        
        </motion.div>
      </div>
    </nav>
  );
};

const NavItem = ({ icon, label, isActive, onClick }) => (
  <motion.button
    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium
      ${isActive 
        ? 'text-purple-600 bg-purple-50 dark:bg-purple-900 dark:text-purple-200' 
        : 'text-gray-600 hover:text-purple-600 dark:text-gray-300'
      }`}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="mr-2">{icon}</span>
    {label}
  </motion.button>
);
export default Navbar