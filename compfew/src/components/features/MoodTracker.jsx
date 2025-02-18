import React from 'react';
import { motion } from 'framer-motion';

const MoodTracker = () => {
  const moods = [
    { emoji: '😊', label: 'Happy' },
    { emoji: '😐', label: 'Neutral' },
    { emoji: '😢', label: 'Sad' },
    { emoji: '😰', label: 'Anxious' },
    { emoji: '😴', label: 'Tired' }
  ];

  return (
    <motion.div 
      className="py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-sm font-semibold mb-3">How are you feeling today?</h3>
      <div className="flex space-x-4">
        {moods.map((mood, index) => (
          <motion.button
            key={mood.label}
            className="flex flex-col items-center p-2 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="text-2xl mb-1">{mood.emoji}</span>
            <span className="text-xs text-gray-600 dark:text-gray-300">{mood.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default MoodTracker;

