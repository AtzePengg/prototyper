// Logic for automatically selecting the best AI tool based on project requirements
export const determineBestTool = (formData) => {
  const {
    projectType,
    technicalStack,
    features,
    userAuthentication,
    dataStorage,
    apiIntegration,
    targetPlatform
  } = formData;
  
  // Tool specialties and strengths
  const toolStrengths = {
    replitai: {
      strengths: ['Tool/Utility', 'Game', 'Node.js', 'Python/Django', 'API integration'],
      targetPlatforms: ['Web', 'Desktop']
    },
    v0: {
      strengths: ['Landing Page', 'Dashboard', 'Portfolio', 'React', 'Next.js', 'Svelte', 'HTML/CSS/JavaScript'],
      targetPlatforms: ['Web']
    },
    lovable: {
      strengths: ['Web Application', 'Social Network', 'Blog', 'Full-stack', 'MERN Stack', 'MEAN Stack', 'Ruby on Rails'],
      targetPlatforms: ['Web', 'PWA']
    },
    bolt: {
      strengths: ['E-commerce Site', 'Dashboard', 'Social Network', 'Authentication', 'Data storage', 'Mobile-friendly'],
      targetPlatforms: ['Web', 'PWA', 'Cross-platform']
    }
  };
  
  // Score each tool based on project requirements
  const scores = {
    replitai: 0,
    v0: 0,
    lovable: 0,
    bolt: 0
  };
  
  // Score based on project type
  Object.keys(toolStrengths).forEach(tool => {
    if (toolStrengths[tool].strengths.includes(projectType)) {
      scores[tool] += 2;
    }
  });
  
  // Score based on technical stack
  Object.keys(toolStrengths).forEach(tool => {
    if (toolStrengths[tool].strengths.includes(technicalStack)) {
      scores[tool] += 2;
    }
  });
  
  // Score based on target platform
  if (targetPlatform) {
    Object.keys(toolStrengths).forEach(tool => {
      if (toolStrengths[tool].targetPlatforms.includes(targetPlatform)) {
        scores[tool] += 1;
      }
    });
  }
  
  // Score based on authentication needs
  if (userAuthentication !== 'no') {
    scores.lovable += 1;
    scores.bolt += 2;
  }
  
  // Score based on data storage needs
  if (dataStorage !== 'no') {
    scores.replitai += 1;
    scores.lovable += 2;
    scores.bolt += 2;
  }
  
  // Score based on API integration
  if (apiIntegration !== 'no') {
    scores.replitai += 2;
    scores.lovable += 1;
    scores.bolt += 1;
  }
  
  // UI-heavy projects favor v0
  if (features.toLowerCase().includes('ui') || 
      features.toLowerCase().includes('design') || 
      features.toLowerCase().includes('interface')) {
    scores.v0 += 3;
  }
  
  // Find the tool with the highest score
  let highestScore = 0;
  let bestTool = 'bolt'; // Default
  
  Object.keys(scores).forEach(tool => {
    if (scores[tool] > highestScore) {
      highestScore = scores[tool];
      bestTool = tool;
    }
  });
  
  return bestTool;
};