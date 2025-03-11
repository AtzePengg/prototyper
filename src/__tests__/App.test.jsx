import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../components/App';

// Mock the lucide-react icons
jest.mock('lucide-react', () => ({
  ChevronRight: () => <div data-testid="chevron-icon">→</div>
}));

// Mock the prompt generators
jest.mock('../utils/promptGenerators', () => ({
  determineBestTool: jest.fn(() => 'v0'),
  generatePrompt: jest.fn(() => 'This is a mock generated prompt')
}));

describe('App', () => {
  test('renders the application header', () => {
    render(<App />);
    expect(screen.getByText('AI Prompt Engineer')).toBeInTheDocument();
  });

  test('shows the tool selection step initially', () => {
    render(<App />);
    expect(screen.getByText('Select an AI Development Tool')).toBeInTheDocument();
  });
});