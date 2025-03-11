import React, { useState } from 'react';
import ToolSelection from './FormSteps/ToolSelection';
import ProjectBasics from './FormSteps/ProjectBasics';
import AdvancedSpecs from './FormSteps/AdvancedSpecs';
import GeneratedPrompt from './FormSteps/GeneratedPrompt';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { ChevronRight } from 'lucide-react';
import { determineBestTool, generatePrompt } from '../utils/promptGenerators';

const App = () => {
  const [step, setStep] = useState(1);
  const [selectedTool, setSelectedTool] = useState('');
  const [formData, setFormData] = useState({
    projectName: '',
    projectType: '',
    technicalStack: '',
    features: '',
    designConstraints: '',
    userAuthentication: 'no',
    dataStorage: 'no',
    apiIntegration: 'no',
    targetPlatform: '',
    existingCodebase: 'no',
    codebaseDetails: '',
    complianceRequirements: ''
  });
  const [generatedPrompt, setGeneratedPrompt] = useState('');

  const handleToolSelect = (tool) => {
    setSelectedTool(tool);
    setStep(2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // If auto-select is chosen, determine the best tool based on project requirements
    let toolToUse = selectedTool;
    
    if (selectedTool === 'auto') {
      toolToUse = determineBestTool(formData);
    }
    
    // Generate the prompt based on the selected tool and form data
    const prompt = generatePrompt(toolToUse, formData);
    setGeneratedPrompt(prompt);
    setSelectedTool(toolToUse); // Update the selected tool if auto was chosen
    setStep(4);
  };

  const renderStepContent = () => {
    switch(step) {
      case 1:
        return <ToolSelection 
                 selectedTool={selectedTool} 
                 onSelect={handleToolSelect} 
               />;
      case 2:
        return <ProjectBasics 
                 formData={formData} 
                 onChange={handleInputChange} 
                 onNext={handleNext} 
               />;
      case 3:
        return <AdvancedSpecs 
                 formData={formData} 
                 onChange={handleInputChange} 
                 onBack={handleBack} 
                 onSubmit={handleSubmit} 
               />;
      case 4:
        return <GeneratedPrompt 
                 selectedTool={selectedTool} 
                 formData={formData} 
                 generatedPrompt={generatedPrompt} 
                 onBack={handleBack} 
               />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-500" 
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span className={step >= 1 ? 'text-blue-500 font-medium' : ''}>Select Tool</span>
              <span className={step >= 2 ? 'text-blue-500 font-medium' : ''}>Project Basics</span>
              <span className={step >= 3 ? 'text-blue-500 font-medium' : ''}>Advanced Specs</span>
              <span className={step >= 4 ? 'text-blue-500 font-medium' : ''}>Generated Prompt</span>
            </div>
          </div>
          
          {renderStepContent()}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;