import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './components/App';

// Mock the lucide-react icons
jest.mock('lucide-react', () => ({
  ChevronRight: () => <div data-testid="chevron-icon">→</div>
}));

// Mock the prompt generators to avoid actual implementation
jest.mock('./utils/promptGenerators', () => ({
  determineBestTool: jest.fn(() => 'v0'),
  generatePrompt: jest.fn(() => 'This is a generated prompt')
}));

describe('App', () => {
  test('renders the application', () => {
    render(<App />);
    expect(screen.getByText('AI Prompt Engineer')).toBeInTheDocument();
    expect(screen.getByText('Select an AI Development Tool')).toBeInTheDocument();
  });
});