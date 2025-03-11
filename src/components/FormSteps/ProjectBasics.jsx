import React from 'react';
import { getSuggestedFeatures } from '../../utils/featureSuggestions';

const ProjectBasics = ({ formData, onChange, onNext }) => {
  const projectTypes = [
    'Web Application',
    'Mobile App',
    'Landing Page',
    'Dashboard',
    'E-commerce Site',
    'Portfolio',
    'Blog',
    'Social Network',
    'Tool/Utility',
    'Game',
    'Other'
  ];

  const techStacks = [
    'React',
    'Next.js',
    'Vue.js',
    'Angular',
    'Svelte',
    'HTML/CSS/JavaScript',
    'React Native',
    'Flutter',
    'Node.js',
    'Python/Django',
    'Ruby on Rails',
    'PHP/Laravel',
    'MERN Stack',
    'MEAN Stack',
    'Other'
  ];

  // Function to suggest features based on project type
  const handleProjectTypeChange = (e) => {
    const { name, value } = e.target;
    onChange(e);
    
    // If the features field is empty, suggest features based on project type
    if (formData.features.trim() === '') {
      const suggestedFeatures = getSuggestedFeatures(value);
      
      // Create a fake event object to update the features field
      const featuresEvent = {
        target: {
          name: 'features',
          value: suggestedFeatures
        }
      };
      
      onChange(featuresEvent);
    }
  };

  const isFormValid = () => {
    return (
      formData.projectName.trim() !== '' &&
      formData.projectType.trim() !== '' &&
      formData.technicalStack.trim() !== '' &&
      formData.features.trim() !== ''
    );
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Project Basics</h1>
      <p className="text-gray-600 mb-6">
        Define the core aspects of your project to generate an effective prompt.
      </p>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-1">
            Project Name
          </label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={onChange}
            placeholder="e.g., Task Manager, Photo Gallery, etc."
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleProjectTypeChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select a project type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="technicalStack" className="block text-sm font-medium text-gray-700 mb-1">
            Technical Stack
          </label>
          <select
            id="technicalStack"
            name="technicalStack"
            value={formData.technicalStack}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select a technical stack</option>
            {techStacks.map((stack) => (
              <option key={stack} value={stack}>{stack}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="features" className="block text-sm font-medium text-gray-700 mb-1">
            Core Features
          </label>
          <textarea
            id="features"
            name="features"
            value={formData.features}
            onChange={onChange}
            placeholder="List the main features of your project, separated by commas"
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <p className="mt-1 text-xs text-gray-500">
            Tip: Be specific about the key functionality you need.
          </p>
        </div>
        
        <div className="pt-4">
          <button
            type="button"
            onClick={onNext}
            disabled={!isFormValid()}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              isFormValid() 
                ? 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500' 
                : 'bg-blue-300 cursor-not-allowed'
            }`}
          >
            Continue to Advanced Specifications
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectBasics;