// Replit AI prompt generator
export const generateReplitPrompt = (formData) => {
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

  // Build the core prompt
  let prompt = `I want to create ${projectName ? `a project called "${projectName}"` : `a ${projectType}`}`;
  
  if (technicalStack) {
    prompt += ` using ${technicalStack}`;
  }
  
  prompt += `. Here are the details:

## Project Type
${projectType}

## Core Features
${features}`;

  // Add design constraints if provided
  if (designConstraints) {
    prompt += `

## Design Guidelines
${designConstraints}`;
  }

  // Add authentication requirements
  if (userAuthentication !== 'no') {
    prompt += `

## Authentication
${
  userAuthentication === 'simple' ? 'Simple user login/registration system' :
  userAuthentication === 'social' ? 'Social login options (Google, Facebook, etc.)' :
  userAuthentication === '2fa' ? 'Two-factor authentication for security' :
  'User authentication'
}`;
  }

  // Add data storage requirements
  if (dataStorage !== 'no') {
    prompt += `

## Data Storage
${
  dataStorage === 'local' ? 'Local storage/cookies for client-side data' :
  dataStorage === 'firebase' ? 'Firebase for data storage and real-time updates' :
  dataStorage === 'database' ? 'Database for persistent data storage' :
  'Data storage solution'
}`;
  }

  // Add API integration requirements
  if (apiIntegration !== 'no') {
    prompt += `

## API Integration
${
  apiIntegration === 'rest' ? 'REST API endpoints for data access' :
  apiIntegration === 'graphql' ? 'GraphQL API for flexible data querying' :
  apiIntegration === 'third-party' ? 'Integration with third-party APIs' :
  'API integration'
}`;
  }

  // Add target platform if specified
  if (targetPlatform) {
    prompt += `

## Target Platform
${targetPlatform}`;
  }

  // Add existing codebase details if applicable
  if (existingCodebase !== 'no' && codebaseDetails) {
    prompt += `

## Existing Codebase Details
${codebaseDetails}`;
  }

  // Add compliance requirements if provided
  if (complianceRequirements) {
    prompt += `

## Compliance Requirements
${complianceRequirements}`;
  }

  // Add specific instructions for Replit AI
  prompt += `

Please help me implement this project with clean, maintainable code. Start by creating a detailed project structure and implementing the core functionality first.

For this project, please:
1. Set up a well-organized project structure
2. Create essential files with proper code organization
3. Implement the core features one by one
4. Add comments explaining complex logic
5. Ensure the code follows best practices for ${technicalStack || 'the chosen technology'}
6. Include instructions on how to run and extend the project

Let's start with the project setup and main implementation files.`;

  return prompt;
};