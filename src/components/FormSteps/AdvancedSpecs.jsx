import React from 'react';

const AdvancedSpecs = ({ formData, onChange, onBack, onSubmit }) => {
  const platforms = ['Web', 'iOS', 'Android', 'Cross-platform', 'Desktop', 'PWA'];
  
  const isFormValid = () => {
    // All fields in the advanced section are optional
    return true;
  };
  
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Advanced Specifications</h1>
      <p className="text-gray-600 mb-6">
        Add additional details to make your generated prompt more specific and effective.
        These fields are optional but will improve the AI's understanding of your needs.
      </p>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="designConstraints" className="block text-sm font-medium text-gray-700 mb-1">
            Design Constraints
          </label>
          <textarea
            id="designConstraints"
            name="designConstraints"
            value={formData.designConstraints}
            onChange={onChange}
            placeholder="e.g., Minimalist design, Dark mode, Accessible UI, Mobile-first"
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="userAuthentication" className="block text-sm font-medium text-gray-700 mb-1">
              User Authentication
            </label>
            <select
              id="userAuthentication"
              name="userAuthentication"
              value={formData.userAuthentication}
              onChange={onChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="no">No authentication needed</option>
              <option value="simple">Simple login/register</option>
              <option value="social">Social login options</option>
              <option value="2fa">Two-factor authentication</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="dataStorage" className="block text-sm font-medium text-gray-700 mb-1">
              Data Storage
            </label>
            <select
              id="dataStorage"
              name="dataStorage"
              value={formData.dataStorage}
              onChange={onChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="no">No data storage needed</option>
              <option value="local">Local storage only</option>
              <option value="firebase">Firebase</option>
              <option value="database">Database (SQL/NoSQL)</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="apiIntegration" className="block text-sm font-medium text-gray-700 mb-1">
              API Integration
            </label>
            <select
              id="apiIntegration"
              name="apiIntegration"
              value={formData.apiIntegration}
              onChange={onChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="no">No API integration</option>
              <option value="rest">REST API endpoints</option>
              <option value="graphql">GraphQL integration</option>
              <option value="third-party">Third-party APIs</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="targetPlatform" className="block text-sm font-medium text-gray-700 mb-1">
              Target Platform
            </label>
            <select
              id="targetPlatform"
              name="targetPlatform"
              value={formData.targetPlatform}
              onChange={onChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a platform</option>
              {platforms.map((platform) => (
                <option key={platform} value={platform}>{platform}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="existingCodebase" className="block text-sm font-medium text-gray-700 mb-1">
            Existing Codebase
          </label>
          <select
            id="existingCodebase"
            name="existingCodebase"
            value={formData.existingCodebase}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="no">Start from scratch</option>
            <option value="boilerplate">Use boilerplate/starter</option>
            <option value="legacy">Modify existing project</option>
          </select>
        </div>
        
        {formData.existingCodebase !== 'no' && (
          <div>
            <label htmlFor="codebaseDetails" className="block text-sm font-medium text-gray-700 mb-1">
              Codebase Details
            </label>
            <textarea
              id="codebaseDetails"
              name="codebaseDetails"
              value={formData.codebaseDetails}
              onChange={onChange}
              placeholder="Describe your existing code structure, important files, etc."
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        )}
        
        <div>
          <label htmlFor="complianceRequirements" className="block text-sm font-medium text-gray-700 mb-1">
            Compliance Requirements
          </label>
          <input
            type="text"
            id="complianceRequirements"
            name="complianceRequirements"
            value={formData.complianceRequirements}
            onChange={onChange}
            placeholder="e.g., GDPR, WCAG, HIPAA, etc."
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="flex justify-between space-x-4 pt-4">
          <button
            type="button"
            onClick={onBack}
            className="w-1/2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Back
          </button>
          
          <button
            type="button"
            onClick={onSubmit}
            disabled={!isFormValid()}
            className={`w-1/2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              isFormValid() 
                ? 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500' 
                : 'bg-blue-300 cursor-not-allowed'
            }`}
          >
            Generate Prompt
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSpecs;