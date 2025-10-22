# Contributing Guide

Thank you for your interest in contributing to the Portfolio Builder project! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Welcome all experience levels

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Portfolio_2.git
   cd PortfolioBuilder
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/Ihsaan7/Portfolio_2.git
   ```
4. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
5. **Install dependencies**:
   ```bash
   npm install
   ```

## Development Workflow

### Setting Up Your Development Environment

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# In another terminal, you can run type checking
npm run type-check  # if available

# Run linting
npm run lint
```

### Making Changes

1. **Follow the project structure** - Place new components in appropriate directories
2. **Use TypeScript** - All code should be TypeScript
3. **Follow naming conventions**:
   - Components: PascalCase (e.g., `MyComponent.tsx`)
   - Utilities: camelCase (e.g., `myUtility.ts`)
   - Constants: UPPER_SNAKE_CASE (e.g., `MY_CONSTANT`)
4. **Add type annotations** - No `any` types without justification
5. **Write meaningful comments** for complex logic
6. **Test your changes locally** - Ensure dev server works without errors

### Commit Guidelines

Follow conventional commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

#### Types
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, missing semicolons, etc.)
- `refactor` - Code refactoring without feature changes
- `perf` - Performance improvements
- `test` - Adding or updating tests
- `chore` - Build, dependencies, tooling changes

#### Scope (Optional)
- `client` - Frontend changes
- `server` - Backend changes
- `ui` - UI component changes
- `docs` - Documentation
- `config` - Configuration files

#### Examples
```
feat(client): Add dark theme toggle component
fix(server): Resolve contact form submission error
docs: Update README with new section
refactor(ui): Improve button component accessibility
```

### Commit Best Practices

1. **Make atomic commits** - One logical change per commit
2. **Write descriptive messages** - Be clear about what and why
3. **Reference issues** - Link to related issues: `Fixes #123`
4. **Keep commits small** - Easier to review and revert if needed

Good commit message example:
```
feat(client): Add project filtering by technology

- Allow users to filter projects by selected technologies
- Add filter UI with checkboxes
- Maintain filter state in URL params

Fixes #42
```

## Pull Request Process

1. **Update your branch** with latest upstream changes:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Push your changes** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request** on GitHub:
   - Use a clear, descriptive title
   - Reference related issues
   - Describe changes made
   - Include before/after screenshots for UI changes
   - Ensure all tests pass

4. **PR Description Template**:
   ```markdown
   ## Description
   Brief description of changes

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update

   ## Related Issues
   Fixes #123

   ## Testing
   - [ ] Tested on desktop
   - [ ] Tested on mobile
   - [ ] No console errors

   ## Screenshots (if applicable)
   [Add images if UI changed]

   ## Checklist
   - [ ] My code follows the style guidelines
   - [ ] I've updated documentation
   - [ ] I've added comments where needed
   - [ ] No new warnings generated
   ```

## Code Style Guidelines

### TypeScript/React
```typescript
// Use functional components
export const MyComponent: React.FC<Props> = ({ prop1, prop2 }) => {
  return (
    <div className="flex items-center">
      {prop1}
    </div>
  );
};

// Use descriptive names
const handleUserSubmit = async (data: FormData) => {
  // Logic here
};

// Group related constants
const ANIMATION_DURATION = 300;
const ANIMATION_DELAY = 100;
```

### Styling with Tailwind
```tsx
// Use meaningful class combinations
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
  Click me
</button>

// Extract complex class strings to variables
const buttonClasses = "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700";
<button className={buttonClasses}>Click me</button>
```

### Component Organization
```typescript
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface Props {
  title: string;
  onClose: () => void;
}

export const MyComponent: React.FC<Props> = ({ title, onClose }) => {
  // State
  const [isOpen, setIsOpen] = React.useState(false);

  // Handlers
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Render
  return (
    <div>
      <h1>{title}</h1>
      <Button onClick={handleClick}>Toggle</Button>
      {isOpen && <div>Content</div>}
    </div>
  );
};
```

## Adding New Features

### New Component
1. Create file in `client/src/components/`
2. Use TypeScript and define prop interfaces
3. Support dark mode if applicable
4. Export from index (if using barrel exports)
5. Add to component examples if it's a section

### New Page Section
1. Create component in `client/src/components/`
2. Create example in `client/src/components/examples/`
3. Add to schema in `shared/schema.ts`
4. Implement API endpoint in `server/routes.ts`
5. Add to App.tsx
6. Document in README.md

### New API Endpoint
1. Define types in `shared/schema.ts`
2. Add route in `server/routes.ts`
3. Implement storage in `server/storage.ts`
4. Add client hook with useQuery/useMutation
5. Update documentation

## Testing

### Manual Testing Checklist
- [ ] Feature works as expected
- [ ] Works on desktop (1920px)
- [ ] Works on tablet (768px)
- [ ] Works on mobile (375px)
- [ ] Dark mode works correctly
- [ ] Light mode works correctly
- [ ] No console errors or warnings
- [ ] No TypeScript errors
- [ ] Form validation works
- [ ] Error states handled

## Reporting Issues

When reporting bugs, please include:
1. Clear description of the issue
2. Steps to reproduce
3. Expected behavior
4. Actual behavior
5. Screenshots/videos if applicable
6. Browser and OS information
7. Any error messages from console

## Feature Requests

When suggesting features:
1. Clear description of the feature
2. Use case and why it's useful
3. Possible implementation approach
4. Any relevant mockups or examples

## Questions or Need Help?

- Open an issue with your question
- Check existing issues first
- Look at the ARCHITECTURE.md for system design
- Review examples in `components/examples/`

## Recognition

Contributors will be recognized in:
- Project README
- Git commit history
- GitHub contributors page

Thank you for contributing to make this portfolio website amazing! 🎉

---

**Last Updated:** October 22, 2025
