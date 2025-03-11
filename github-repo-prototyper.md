# AI Prompt Engineer

A comprehensive application that helps users create optimized prompts for AI-assisted development tools, ensuring high success rates and functional prototypes in one go.

## Repository Structure

```
ai-prompt-engineer/
├── .github/
│   ├── workflows/
│   │   ├── ci.yml                 # CI workflow for tests and linting
│   │   └── deploy.yml             # CD workflow for deployment
│   └── ISSUE_TEMPLATE/
│       ├── bug_report.md
│       └── feature_request.md
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   ├── robots.txt
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── App.jsx                # Main application component
│   │   ├── FormSteps/
│   │   │   ├── ToolSelection.jsx  # Step 1: Tool selection
│   │   │   ├── ProjectBasics.jsx  # Step 2: Project basics
│   │   │   ├── AdvancedSpecs.jsx  # Step 3: Advanced specifications
│   │   │   └── GeneratedPrompt.jsx # Step 4: Result
│   │   ├── UI/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── ProgressBar.jsx
│   │   │   └── FormFields.jsx
│   │   └── Layout/
│   │       ├── Header.jsx
│   │       └── Footer.jsx
│   ├── utils/
│   │   ├── promptGenerators/
│   │   │   ├── index.js           # Export all prompt generators
│   │   │   ├── replitPrompt.js    # Replit AI prompt generator
│   │   │   ├── v0Prompt.js        # v0.dev prompt generator
│   │   │   ├── lovablePrompt.js   # Lovable Helper prompt generator
│   │   │   └── boltPrompt.js      # Bolt.new prompt generator
│   │   ├── toolSelector.js        # Logic for auto-selecting tools
│   │   └── featureSuggestions.js  # Feature recommendations by project type
│   ├── hooks/
│   │   ├── useMultiStepForm.js    # Custom hook for multi-step form
│   │   └── useLocalStorage.js     # Persist form data
│   ├── context/
│   │   └── FormContext.js         # Global form state
│   ├── styles/
│   │   └── tailwind.css           # Tailwind CSS file
│   ├── index.jsx                  # Entry point
│   └── App.test.jsx               # Tests
├── .eslintrc.js                   # ESLint configuration
├── .prettierrc                    # Prettier configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── jest.config.js                 # Jest configuration
├── package.json                   # Dependencies and scripts
├── README.md                      # Project documentation
├── LICENSE                        # License file
└── .gitignore                     # Git ignore file
```

## Key Files

### 1. `package.json`

```json
{
  "name": "ai-prompt-engineer",
  "version": "1.0.0",
  "description": "App that creates optimized prompts for AI development tools",
  "main": "src/index.jsx",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview",
    "lint": "eslint src --ext .js,.jsx",
    "test": "jest",
    "format": "prettier --write \"src/**/*.{js,jsx}\""
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "autoprefixer": "^10.4.14",
    "eslint": "^8.43.0",
    "eslint-config-prettier": "^8.8.0",
    "eslint-plugin-react": "^7.32.2",
    "jest": "^29.5.0",
    "postcss": "^8.4.24",
    "prettier": "^2.8.8",
    "tailwindcss": "^3.3.2",
    "vite": "^4.3.9"
  },
  "license": "MIT"
}
```

### 2. `README.md`

```markdown
# AI Prompt Engineer

AI Prompt Engineer is a tool that helps developers create optimized prompts for AI-assisted development tools, ensuring high success rates and fully functional prototypes in one go.

## Features

- Guides users through creating AI prompts based on project requirements
- Supports multiple AI development tools: Replit AI, v0.dev, Lovable Helper, and Bolt.new
- Auto-suggests technical stacks and features based on project type
- Generates comprehensive, detailed prompts following best practices
- Helps achieve higher success rates with AI-generated prototypes

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ai-prompt-engineer.git
   cd ai-prompt-engineer
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## How It Works

The application guides you through a 4-step process:

1. **Select Tool**: Choose which AI development tool you want to generate a prompt for (or let the AI select the best one)
2. **Project Basics**: Define your project name, type, technical stack, and core features
3. **Advanced Specifications**: Add design constraints, authentication, data storage, and other specific requirements
4. **Generated Prompt**: Get your optimized prompt that you can copy and use with your chosen AI tool

## Technologies Used

- React
- Tailwind CSS
- Vite
- Lucide Icons

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Research on prompt engineering best practices
- The AI developer tool community
```

### 3. `src/components/App.jsx`

```jsx
import React, { useState } from 'react';
import ToolSelection from './FormSteps/ToolSelection';
import ProjectBasics from './FormSteps/ProjectBasics';
import AdvancedSpecs from './FormSteps/AdvancedSpecs';
import GeneratedPrompt from './FormSteps/GeneratedPrompt';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { ChevronRight } from 'lucide-react';

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
```

### 4. GitHub Workflows

#### `.github/workflows/ci.yml`

```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run linter
      run: npm run lint
      
    - name: Run tests
      run: npm test
      
    - name: Build
      run: npm run build
```

#### `.github/workflows/deploy.yml`

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Best Practices Implemented

1. **Project Structure**
   - Organized component-based architecture
   - Separation of concerns (UI components, logic, data)
   - Clear folder organization

2. **Code Quality**
   - ESLint and Prettier for consistent code style
   - Jest for testing
   - Modern React practices with hooks

3. **Documentation**
   - Comprehensive README
   - Code comments
   - Issue templates

4. **DevOps**
   - CI/CD pipelines
   - Automated testing
   - Easy deployment

5. **Performance**
   - Vite for fast builds and HMR
   - Component modularization

## Deployment Instructions

1. Create a new GitHub repository.
2. Initialize the repository locally and push the code:

```bash
git init
git add .
git commit -m "Initial commit: AI Prompt Engineer app"
git branch -M main
git remote add origin https://github.com/yourusername/ai-prompt-engineer.git
git push -u origin main
```

3. Set up GitHub Pages in repository settings.

4. GitHub Actions will automatically build and deploy your app on each push to main.
