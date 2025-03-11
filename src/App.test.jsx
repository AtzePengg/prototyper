import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './components/App';

// Mock the lucide-react icons
jest.mock('lucide-react', () => ({
  ChevronRight: () => <div data-testid="chevron-icon">→</div>
}));

// Mock the prompt generators
jest.mock('./utils/promptGenerators', () => ({
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

  test('advances to project basics when a tool is selected', () => {
    render(<App />);
    
    // Find and click the v0.dev tool option
    const v0Option = screen.getByText('v0.dev');
    fireEvent.click(v0Option.closest('div[role="button"]'));
    
    // Check if we moved to the project basics step
    expect(screen.getByText('Project Basics')).toBeInTheDocument();
  });

  test('project basics form validation works', async () => {
    render(<App />);
    
    // Select a tool first
    const toolOption = screen.getByText('Replit AI');
    fireEvent.click(toolOption.closest('div[role="button"]'));
    
    // Continue button should be disabled initially
    const continueButton = screen.getByText('Continue to Advanced Specifications');
    expect(continueButton).toBeDisabled();
    
    // Fill out the required fields
    fireEvent.change(screen.getByLabelText('Project Name'), { target: { value: 'Test Project' } });
    fireEvent.change(screen.getByLabelText('Project Type'), { target: { value: 'Web Application' } });
    fireEvent.change(screen.getByLabelText('Technical Stack'), { target: { value: 'React' } });
    fireEvent.change(screen.getByLabelText('Core Features'), { target: { value: 'Feature 1, Feature 2' } });
    
    // Now the button should be enabled
    expect(continueButton).not.toBeDisabled();
    
    // Click continue and check if we moved to the advanced specs
    fireEvent.click(continueButton);
    expect(screen.getByText('Advanced Specifications')).toBeInTheDocument();
  });
});