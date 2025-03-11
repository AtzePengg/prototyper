import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} AI Prompt Engineer. All rights reserved.</p>
          <p className="mt-1">
            A tool designed to optimize prompts for AI-assisted development.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;