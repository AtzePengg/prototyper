import React, { useState } from 'react';
import { Copy, CheckCircle } from 'lucide-react';

const GeneratedPrompt = ({ selectedTool, formData, generatedPrompt, onBack }) => {
  const [copied, setCopied] = useState(false);
  
  const toolDisplayNames = {
    'replitai': 'Replit AI',
    'v0': 'v0.dev',
    'lovable': 'Lovable Helper',
    'bolt': 'Bolt.new'
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
  const getToolInstructions = () => {
    switch(selectedTool) {
      case 'replitai':
        return 'Paste this prompt into the Replit AI chat panel in your Replit workspace.';
      case 'v0':
        return 'Visit v0.dev, sign in, and paste this prompt into the input field.';
      case 'lovable':
        return 'Paste this prompt into the Lovable Helper interface in your development environment.';
      case 'bolt':
        return 'Go to bolt.new and paste this prompt into the generator.';
      default:
        return 'Paste this prompt into your chosen AI development tool.';
    }
  };
  
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Generated Prompt</h1>
      
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600 mr-3">
            <span className="text-xl">
              {selectedTool === 'replitai' ? '🤖' : 
               selectedTool === 'v0' ? '🎨' : 
               selectedTool === 'lovable' ? '❤️' : 
               selectedTool === 'bolt' ? '⚡' : '🔧'}
            </span>
          </div>
          <h2 className="text-lg font-medium text-gray-900">
            For {toolDisplayNames[selectedTool] || 'Your AI Development Tool'}
          </h2>
        </div>
        <p className="text-sm text-gray-600">
          {getToolInstructions()}
        </p>
      </div>
      
      <div className="relative mb-6">
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
            {generatedPrompt}
          </pre>
        </div>
        
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Copy to clipboard"
        >
          {copied ? (
            <CheckCircle className="h-5 w-5 text-green-500" />
          ) : (
            <Copy className="h-5 w-5 text-gray-500" />
          )}
        </button>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 mb-6">
        <h3 className="font-medium text-blue-800 mb-2">Tips for Success</h3>
        <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
          <li>If you need to modify the result, be specific about what to change</li>
          <li>For multi-file projects, ask the AI to focus on one file at a time</li>
          <li>Save your prompt for future reference or refinement</li>
          <li>If the result isn't quite right, try adding more details to your specifications</li>
        </ul>
      </div>
      
      <div className="flex">
        <button
          type="button"
          onClick={onBack}
          className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Go Back and Edit
        </button>
      </div>
    </div>
  );
};

export default GeneratedPrompt;