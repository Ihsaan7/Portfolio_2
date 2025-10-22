# Portfolio Builder

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. This project showcases a professional portfolio with multiple sections including hero, about, projects, experience, tech stack, blog, contact, and social links.

## Features

- 🎨 **Dark/Light Theme Toggle** - Seamless theme switching with persistent storage
- 📱 **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast & Optimized** - Built with Vite for lightning-fast development and production builds
- 🎯 **Multiple Sections** - Hero, About, Projects, Experience, Tech Stack, Blog, Contact, and Social Links
- 📧 **Contact Form** - Functional contact form for user inquiries
- 🎭 **UI Component Library** - Reusable components built with shadcn/ui
- 📊 **Database Ready** - Drizzle ORM integration for data persistence
- 🌐 **TypeScript** - Full type safety throughout the application

## Tech Stack

### Frontend

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Tanstack Query** - Server state management

### Backend

- **Node.js** - Runtime environment
- **Express** - Web framework (via Vite)
- **Drizzle ORM** - TypeScript ORM

### Development Tools

- **PostCSS** - CSS transformations
- **ESLint** - Code linting
- **TypeScript Compiler** - Type checking

## Project Structure

```
├── client/                    # Frontend application
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── ui/          # Reusable UI components (shadcn/ui)
│   │   │   ├── examples/    # Example component implementations
│   │   │   └── [Sections]   # Page sections
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utility functions and helpers
│   │   ├── App.tsx          # Main application component
│   │   ├── main.tsx         # Application entry point
│   │   └── index.css        # Global styles
│   ├── index.html           # HTML entry point
│   └── public/              # Static assets
├── server/                   # Backend application
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   ├── storage.ts          # Data storage logic
│   └── vite.ts             # Vite integration
├── shared/                   # Shared code
│   └── schema.ts           # Data schemas
├── configuration files       # Config files
│   ├── vite.config.ts
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   ├── drizzle.config.ts
│   ├── postcss.config.js
│   └── package.json
└── documentation
    ├── README.md           # This file
    ├── design_guidelines.md
    └── replit.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Ihsaan7/Portfolio_2.git
cd PortfolioBuilder
```

2. Install dependencies:

```bash
npm install
```

3. Build the project:

```bash
npm run build
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Components Overview

### Page Sections

- **HeroSection** - Welcome banner with call-to-action
- **AboutSection** - Personal introduction and background
- **ExperienceSection** - Work experience and timeline
- **ProjectsSection** - Portfolio projects showcase
- **TechStackSection** - Technology skills and proficiencies
- **BlogSection** - Blog posts or articles
- **ContactSection** - Contact form and information
- **SocialLinksSection** - Social media links
- **Footer** - Footer navigation and information

### Utilities & Hooks

- **useToast** - Toast notifications hook
- **useMobile** - Responsive mobile detection hook
- **utils.ts** - Common utility functions (cn for class names)
- **queryClient.ts** - Tanstack Query client configuration

## Customization

### Theme Configuration

Edit `tailwind.config.ts` to customize colors, fonts, and other design tokens.

### Design Guidelines

Refer to `design_guidelines.md` for detailed design system documentation.

### Component Examples

Check the `components/examples/` directory for reference implementations of all sections.

## Contributing

Feel free to fork this project and submit pull requests for improvements.

## License

This project is open source and available under the MIT License.

## Author

Created by Ihsaan7

## Support

For support, please open an issue on the GitHub repository.

---

**Last Updated:** October 22, 2025
