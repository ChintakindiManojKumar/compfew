import React from 'react';

const ProgressInsights = () => {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold mb-2">Weekly Progress</h3>
      <div className="bg-purple-50 p-3 rounded">
        <div className="flex justify-between mb-2">
          <span className="text-sm">Mood Trend</span>
          <span className="text-sm text-green-600">↗ Improving</span>
        </div>
        <div className="h-2 bg-gray-200 rounded">
          <div className="h-2 bg-purple-500 rounded transition-all duration-500" style={{ width: '70%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressInsights;