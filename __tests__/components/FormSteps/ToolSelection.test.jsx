import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ToolSelection from '../../../src/components/FormSteps/ToolSelection';
import { ChevronRight } from 'lucide-react';

// Mock the lucide-react icon
jest.mock('lucide-react', () => ({
  ChevronRight: () => <div data-testid="chevron-icon">→</div>
}));

describe('ToolSelection', () => {
  const mockOnSelect = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders all tool options', () => {
    render(<ToolSelection selectedTool="" onSelect={mockOnSelect} />);
    
    // Check for tool headings
    expect(screen.getByText('Replit AI')).toBeInTheDocument();
    expect(screen.getByText('v0.dev')).toBeInTheDocument();
    expect(screen.getByText('Lovable Helper')).toBeInTheDocument();
    expect(screen.getByText('Bolt.new')).toBeInTheDocument();
    expect(screen.getByText('Auto-select')).toBeInTheDocument();
  });

  test('calls onSelect with the correct tool id when clicked', () => {
    render(<ToolSelection selectedTool="" onSelect={mockOnSelect} />);
    
    // Click on the v0.dev option
    const v0Option = screen.getByText('v0.dev').closest('div');
    fireEvent.click(v0Option);
    
    expect(mockOnSelect).toHaveBeenCalledWith('v0');
  });

  test('highlights the selected tool', () => {
    render(<ToolSelection selectedTool="bolt" onSelect={mockOnSelect} />);
    
    // The Bolt.new option should have the selected class
    const boltOption = screen.getByText('Bolt.new').closest('div');
    expect(boltOption).toHaveClass('border-blue-500');
  });
});