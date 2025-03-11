import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-blue-600 text-2xl mr-2">✨</div>
            <h1 className="text-xl font-bold text-gray-900">AI Prompt Engineer</h1>
          </div>
          <div>
            <a
              href="https://github.com/yourusername/ai-prompt-engineer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;