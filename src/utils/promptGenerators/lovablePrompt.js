// Lovable Helper prompt generator
export const generateLovablePrompt = (formData) => {
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

  // Lovable Helper works well with detailed, conversational prompts
  let prompt = `I want to build ${projectName ? `a ${projectType.toLowerCase()} called "${projectName}"` : `a ${projectType.toLowerCase()}`} with the following specifications:

## Project Overview
I'm looking to create a ${projectType.toLowerCase()} that ${getProjectPurposeByType(projectType)}.`;

  // Technology stack details
  prompt += `
  
## Technical Stack
${technicalStack || 'I\'m open to your recommendations, but prefer modern frameworks and libraries'}`;

  // Features section - format as detailed list
  prompt += `

## Key Features
`;
  const featureItems = features.split(',').map(item => item.trim());
  featureItems.forEach(feature => {
    prompt += `- ${feature}\n`;
  });

  // Design section
  if (designConstraints) {
    prompt += `
## Design Requirements
${designConstraints}`;
  }

  // Authentication requirements with more detail for Lovable
  if (userAuthentication !== 'no') {
    prompt += `

## User Authentication
${getUserAuthDescription(userAuthentication)}`;
  }

  // Data storage with more detail
  if (dataStorage !== 'no') {
    prompt += `

## Data Storage Requirements
${getDataStorageDescription(dataStorage)}`;
  }

  // API integration with more specifics
  if (apiIntegration !== 'no') {
    prompt += `

## API Integration
${getApiIntegrationDescription(apiIntegration)}`;
  }

  // Target platform details
  if (targetPlatform) {
    prompt += `

## Target Platform
${getTargetPlatformDescription(targetPlatform)}`;
  }

  // Existing codebase information
  if (existingCodebase !== 'no' && codebaseDetails) {
    prompt += `

## Existing Codebase Context
${getExistingCodebaseDescription(existingCodebase)}
${codebaseDetails}`;
  }

  // Compliance requirements
  if (complianceRequirements) {
    prompt += `

## Compliance Requirements
The application needs to comply with ${complianceRequirements} standards.`;
  }

  // Add specific guidance for implementation
  prompt += `

## Development Preferences
- I prefer clean, well-organized code with appropriate comments
- Use modern best practices for ${technicalStack || 'the chosen stack'}
- Implement proper error handling and validation
- Focus on creating a responsive, user-friendly experience
- Consider scalability and maintainability in the architecture

Please help me build this application with a thoughtful architecture and implementation plan. I'd appreciate if you could outline the major components and their interactions, followed by actual implementation of the core features.`;

  return prompt;
};

// Helper functions for different sections
function getProjectPurposeByType(projectType) {
  const purposes = {
    'Web Application': 'provides value to users through interactive features and services',
    'Mobile App': 'delivers a streamlined mobile experience with essential functionality',
    'Landing Page': 'effectively communicates the value proposition and converts visitors',
    'Dashboard': 'visualizes important data and provides actionable insights',
    'E-commerce Site': 'allows users to browse and purchase products online',
    'Portfolio': 'showcases my work and skills in a professional manner',
    'Blog': 'presents content in an organized and readable format',
    'Social Network': 'connects users and facilitates social interactions',
    'Tool/Utility': 'solves a specific problem or performs a useful function',
    'Game': 'provides an engaging and entertaining experience',
  };
  
  return purposes[projectType] || 'meets the needs of my target audience';
}

function getUserAuthDescription(authType) {
  switch(authType) {
    case 'simple':
      return 'Implement email/password authentication with secure password storage, account verification, and password reset functionality.';
    case 'social':
      return 'Implement social login options (Google, Facebook, etc.) alongside traditional email/password login. Handle user profile data from different providers consistently.';
    case '2fa':
      return 'Implement two-factor authentication for enhanced security. Support methods like SMS verification codes or authenticator apps.';
    default:
      return 'Implement user authentication with secure practices.';
  }
}

function getDataStorageDescription(storageType) {
  switch(storageType) {
    case 'local':
      return 'Store user preferences and non-critical data locally in the browser. Implement proper data expiration and size management.';
    case 'firebase':
      return 'Use Firebase for real-time data storage, authentication, and backend services. Structure the data model efficiently for querying and updates.';
    case 'database':
      return 'Implement a database solution with proper schema design, indexing, and query optimization. Consider data validation, relationships, and migration strategies.';
    default:
      return 'Implement appropriate data storage solutions for the application needs.';
  }
}

function getApiIntegrationDescription(apiType) {
  switch(apiType) {
    case 'rest':
      return 'Create RESTful API endpoints with proper resource naming, status codes, and documentation. Implement authentication, rate limiting, and error handling.';
    case 'graphql':
      return 'Implement a GraphQL API with well-designed schemas, resolvers, and proper error handling. Consider query complexity, caching, and performance optimizations.';
    case 'third-party':
      return 'Integrate with third-party APIs securely. Handle authentication, rate limits, and api versioning appropriately. Implement proper error handling for API failures.';
    default:
      return 'Implement API integration with best practices for security and reliability.';
  }
}

function getTargetPlatformDescription(platform) {
  switch(platform) {
    case 'Web':
      return 'Optimize for web browsers with responsive design and cross-browser compatibility.';
    case 'iOS':
      return 'Design and build for iOS devices, following Apple\'s Human Interface Guidelines.';
    case 'Android':
      return 'Design and build for Android devices, following Material Design principles.';
    case 'Cross-platform':
      return 'Create a consistent experience across multiple platforms while respecting platform-specific conventions.';
    case 'Desktop':
      return 'Optimize for desktop use with appropriate layouts and interaction patterns.';
    case 'PWA':
      return 'Implement as a Progressive Web App with offline capabilities, installability, and app-like experience.';
    default:
      return `Target the ${platform} platform with appropriate optimizations.`;
  }
}

function getExistingCodebaseDescription(codebaseType) {
  switch(codebaseType) {
    case 'boilerplate':
      return 'I\'ll be using a boilerplate/starter project as the foundation. Key details:';
    case 'legacy':
      return 'I need to modify an existing project. Here are the important aspects of the current codebase:';
    default:
      return 'Additional context about the code:';
  }
}