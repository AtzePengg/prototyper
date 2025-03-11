# CLAUDE.md - AI Prompt Engineer

## Build & Test Commands
- Development: `npm run dev`
- Build: `npm run build`
- Preview: `npm run serve`
- Lint: `npm run lint`
- Test (all): `npm test`
- Test (single): `npm test -- -t "test name pattern"`
- Format code: `npm run format`

## Code Style Guidelines
- **Language**: React/JSX with modern hooks
- **Formatting**: Prettier with 2-space indentation
- **Imports**: Group React, then external libraries, then local components/utils
- **Components**: Function components with explicit prop types
- **State**: Use React hooks (useState, useContext) for state management
- **Naming**:
  - React components: PascalCase (FormField.jsx)
  - Utilities/hooks: camelCase (useMultiStepForm.js)
  - Constants: UPPER_SNAKE_CASE
- **Error Handling**: Try/catch with appropriate user feedback
- **CSS**: Tailwind CSS with utility classes
- **File Structure**: Group by feature/component type, not technology

## Project Organization
Application guides users through creating AI prompts using a 4-step wizard interface.
Uses Vite, React 18, and Tailwind CSS for a modern development experience.