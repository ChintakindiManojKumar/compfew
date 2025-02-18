import React from 'react';
import MoodTracker from '../features/MoodTracker';
import QuickTools from '../features/QuickTools';
import ProgressInsights from '../features/ProgressInsights';

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-white p-4 border-r border-gray-200 h-screen overflow-y-auto">
      <h2 className="text-xl font-bold mb-4 text-purple-600">MindfulAI</h2>
      <MoodTracker />
      <QuickTools />
      <ProgressInsights />
    </div>
  );
};

export default Sidebar;