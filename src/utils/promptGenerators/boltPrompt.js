// Bolt.new prompt generator
export const generateBoltPrompt = (formData) => {
  const {
    projectName,
    projectType,
    technicalStack,
    features,
    designConstraints,
    userAuthentication,
    dataStorage,
    apiIntegration,
    targetPlatform,
    existingCodebase,
    codebaseDetails,
    complianceRequirements
  } = formData;

  // Bolt works well with concise, direct prompts that focus on functionality
  let prompt = `Create ${projectName ? `"${projectName}"` : `a ${projectType.toLowerCase()}`}`;
  
  // Add the tech stack
  if (technicalStack) {
    prompt += ` with ${technicalStack}`;
  }
  
  // Add brief description based on project type
  prompt += `\n\n${getProjectDescription(projectType)}`;
  
  // Add features - this is most important for Bolt
  prompt += `\n\nFeatures:\n`;
  const featureItems = features.split(',').map(item => item.trim());
  featureItems.forEach(feature => {
    prompt += `- ${feature}\n`;
  });
  
  // Add authentication if needed (Bolt works well with auth)
  if (userAuthentication !== 'no') {
    prompt += `\n${getAuthRequirement(userAuthentication)}`;
  }
  
  // Add data storage if needed
  if (dataStorage !== 'no') {
    prompt += `\n${getStorageRequirement(dataStorage)}`;
  }
  
  // Add API integration if needed
  if (apiIntegration !== 'no') {
    prompt += `\n${getApiRequirement(apiIntegration)}`;
  }
  
  // Add design requirements if specified
  if (designConstraints) {
    prompt += `\n\nDesign requirements: ${designConstraints}`;
  }
  
  // Add platform target if specified
  if (targetPlatform) {
    prompt += `\n\nTarget platform: ${targetPlatform}`;
  }
  
  // Add compliance if needed
  if (complianceRequirements) {
    prompt += `\n\nMust comply with ${complianceRequirements}`;
  }
  
  // Add final instruction for Bolt
  prompt += `\n\nGenerate a complete, functional application with clean code and modern best practices.`;
  
  return prompt;
};

// Helper functions for Bolt prompt
function getProjectDescription(projectType) {
  const descriptions = {
    'Web Application': 'A full-featured web application with frontend and backend components.',
    'Mobile App': 'A mobile application with responsive UI and core mobile functionality.',
    'Landing Page': 'A conversion-focused landing page that showcases the key value proposition.',
    'Dashboard': 'An interactive dashboard for visualizing and managing data.',
    'E-commerce Site': 'An online store with product listings, cart functionality, and checkout process.',
    'Portfolio': 'A professional portfolio site to showcase work and skills.',
    'Blog': 'A content-focused blog with articles, categories, and reader engagement features.',
    'Social Network': 'A social platform for user connections and content sharing.',
    'Tool/Utility': 'A focused utility that solves a specific problem.',
    'Game': 'An interactive game with core gameplay mechanics.'
  };
  
  return descriptions[projectType] || 'An application that serves the needs of users.';
}

function getAuthRequirement(authType) {
  switch(authType) {
    case 'simple':
      return 'Include user authentication with signup, login, and password reset.';
    case 'social':
      return 'Include authentication with social login options and email/password.';
    case '2fa':
      return 'Include secure authentication with two-factor verification.';
    default:
      return 'Include user authentication.';
  }
}

function getStorageRequirement(storageType) {
  switch(storageType) {
    case 'local':
      return 'Store user data locally in the browser.';
    case 'firebase':
      return 'Use Firebase for data storage and backend.';
    case 'database':
      return 'Implement database storage for user data and application content.';
    default:
      return 'Implement appropriate data storage.';
  }
}

function getApiRequirement(apiType) {
  switch(apiType) {
    case 'rest':
      return 'Create REST API endpoints for data access.';
    case 'graphql':
      return 'Implement GraphQL for flexible data querying.';
    case 'third-party':
      return 'Integrate with relevant third-party APIs.';
    default:
      return 'Implement API integration.';
  }
}