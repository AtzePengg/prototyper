// v0.dev prompt generator
export const generateV0Prompt = (formData) => {
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

  // Build the core prompt - v0.dev works best with concise, UI-focused prompts
  let prompt = `A ${projectType.toLowerCase()} ${projectName ? `called "${projectName}"` : ''} with the following features:`;
  
  // Format features as a list
  const featureList = features.split(',').map(feature => feature.trim());
  featureList.forEach(feature => {
    prompt += `\n- ${feature}`;
  });
  
  // Add tech stack preference
  if (technicalStack && technicalStack !== 'Other') {
    prompt += `\n\nBuilt using ${technicalStack}.`;
  }
  
  // Add design preferences
  if (designConstraints) {
    prompt += `\n\nDesign requirements:\n`;
    const designItems = designConstraints.split(',').map(item => item.trim());
    designItems.forEach(item => {
      prompt += `- ${item}\n`;
    });
  } else {
    // Add default design guidance for better results
    prompt += `\n\nDesign requirements:
- Modern, clean UI
- Responsive design for all screen sizes
- Intuitive navigation
- Clear visual hierarchy`;
  }
  
  // Add authentication if needed
  if (userAuthentication !== 'no') {
    prompt += `\n\nInclude UI for ${
      userAuthentication === 'simple' ? 'simple login and registration' :
      userAuthentication === 'social' ? 'social login options' :
      userAuthentication === '2fa' ? 'two-factor authentication' :
      'user authentication'
    }.`;
  }
  
  // Specify platform for responsive design guidance
  if (targetPlatform) {
    prompt += `\n\nOptimized for ${targetPlatform} platforms.`;
  }
  
  // Add compliance needs
  if (complianceRequirements) {
    prompt += `\n\nEnsure the design complies with ${complianceRequirements} requirements.`;
  }
  
  // Specific instructions for v0.dev
  prompt += `\n\nPlease provide a high-fidelity UI design with:
- Realistic content and data (not lorem ipsum)
- Professional color scheme
- Consistent UI components
- Good use of whitespace
- Proper visual hierarchy`;

  return prompt;
};