import React from 'react';

const QuickTools = () => {
  const tools = [
    { icon: '🫧', label: 'Breathing Exercise', action: () => {} },
    { icon: '📝', label: 'Gratitude Journal', action: () => {} },
    { icon: '🎵', label: 'Calming Sounds', action: () => {} },
    { icon: '🎯', label: 'Goal Setting', action: () => {} },
    { icon: '📊', label: 'Mood Analytics', action: () => {} }
  ];

  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold mb-2">Quick Tools</h3>
      <div className="space-y-2">
        {tools.map((tool) => (
          <button
            key={tool.label}
            onClick={tool.action}
            className="w-full text-left p-2 hover:bg-purple-50 rounded flex items-center transition-colors duration-200"
          >
            <span className="mr-2">{tool.icon}</span>
            {tool.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickTools;