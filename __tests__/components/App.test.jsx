import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../src/components/App';

// Mock the lucide-react icons
jest.mock('lucide-react', () => ({
  ChevronRight: () => <div data-testid="chevron-icon">→</div>
}));

// Mock the prompt generators
jest.mock('../../src/utils/promptGenerators', () => ({
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
    fireEvent.click(v0Option.closest('div'));
    
    // Check if we moved to the project basics step
    expect(screen.getByText('Project Basics')).toBeInTheDocument();
  });

  test('project basics form validation works', async () => {
    render(<App />);
    
    // Select a tool first
    const toolOption = screen.getByText('Replit AI');
    fireEvent.click(toolOption.closest('div'));
    
    // Continue button should be disabled initially
    const continueButton = screen.getByText('Continue to Advanced Specifications');
    expect(continueButton).toBeDisabled();
    
    // Fill out the required fields
    fireEvent.change(screen.getByLabelText('Project Name'), { target: { value: 'Test Project' } });
    
    // Select project type
    const projectTypeSelect = screen.getByLabelText('Project Type');
    fireEvent.change(projectTypeSelect, { target: { value: 'Web Application' } });
    
    // Select tech stack
    const techStackSelect = screen.getByLabelText('Technical Stack');
    fireEvent.change(techStackSelect, { target: { value: 'React' } });
    
    // Add features
    const featuresInput = screen.getByLabelText('Core Features');
    fireEvent.change(featuresInput, { target: { value: 'Feature 1, Feature 2' } });
    
    // Now the button should be enabled
    expect(continueButton).not.toBeDisabled();
    
    // Click continue and check if we moved to the advanced specs
    fireEvent.click(continueButton);
    expect(screen.getByText('Advanced Specifications')).toBeInTheDocument();
  });
});