import React from 'react';
import { ChevronRight } from 'lucide-react';

const ToolSelection = ({ selectedTool, onSelect }) => {
  const tools = [
    {
      id: 'replitai',
      name: 'Replit AI',
      description: 'Generate and modify code directly in Replit editor',
      icon: '🤖'
    },
    {
      id: 'v0',
      name: 'v0.dev',
      description: 'Create UI components and full web applications',
      icon: '🎨'
    },
    {
      id: 'lovable',
      name: 'Lovable Helper',
      description: 'Create full-stack applications with a human-like touch',
      icon: '❤️'
    },
    {
      id: 'bolt',
      name: 'Bolt.new',
      description: 'Generate full-stack web applications in seconds',
      icon: '⚡'
    },
    {
      id: 'auto',
      name: 'Auto-select',
      description: 'We\'ll choose the best tool based on your requirements',
      icon: '🤔'
    }
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Select an AI Development Tool</h1>
      <p className="text-gray-600 mb-6">
        Choose which AI-assisted development tool you want to generate a prompt for.
        Each tool has different strengths and capabilities.
      </p>
      
      <div className="space-y-4">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 hover:shadow-md ${
              selectedTool === tool.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
            }`}
            onClick={() => onSelect(tool.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="text-2xl mr-3">{tool.icon}</div>
                <div>
                  <h3 className="font-medium text-gray-900">{tool.name}</h3>
                  <p className="text-sm text-gray-500">{tool.description}</p>
                </div>
              </div>
              <ChevronRight className={`h-5 w-5 ${selectedTool === tool.id ? 'text-blue-500' : 'text-gray-400'}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolSelection;