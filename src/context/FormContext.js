import React, { createContext, useContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

// Create context
const FormContext = createContext(undefined);

// Default form values
const defaultFormValues = {
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
};

export const FormProvider = ({ children }) => {
  // Use local storage to persist form data
  const [formData, setFormData] = useLocalStorage('promptEngineerForm', defaultFormValues);
  const [selectedTool, setSelectedTool] = useLocalStorage('selectedTool', '');
  const [generatedPrompt, setGeneratedPrompt] = useState('');

  // Update form field
  const updateFormField = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Reset form to default values
  const resetForm = () => {
    setFormData(defaultFormValues);
    setSelectedTool('');
    setGeneratedPrompt('');
  };

  // Generate the prompt based on form data
  const generatePrompt = (generatorFunction) => {
    const prompt = generatorFunction(formData);
    setGeneratedPrompt(prompt);
    return prompt;
  };

  // Value object to be provided to consumers
  const value = {
    formData,
    setFormData,
    updateFormField,
    resetForm,
    selectedTool,
    setSelectedTool,
    generatedPrompt,
    setGeneratedPrompt,
    generatePrompt
  };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook for using the form context
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

export default FormContext;