import { generateReplitPrompt } from './replitPrompt';
import { generateV0Prompt } from './v0Prompt';
import { generateLovablePrompt } from './lovablePrompt';
import { generateBoltPrompt } from './boltPrompt';
import { determineBestTool } from '../toolSelector';

// Main prompt generator function that chooses the appropriate template
export const generatePrompt = (toolType, formData) => {
  switch(toolType) {
    case 'replitai':
      return generateReplitPrompt(formData);
    case 'v0':
      return generateV0Prompt(formData);
    case 'lovable':
      return generateLovablePrompt(formData);
    case 'bolt':
      return generateBoltPrompt(formData);
    default:
      return generateBoltPrompt(formData); // Default to Bolt if unknown
  }
};

// Re-export the tool selector
export { determineBestTool };