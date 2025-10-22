# Developer Portfolio Website

## Overview

This is a modern, content-first developer portfolio website built as a full-stack application. The project showcases professional experience, projects, blog posts, and technical skills with a dark-mode-native design inspired by chanhdai.com, Linear's typography, and Vercel's minimalism. The architecture follows a monorepo structure with a React frontend and Express backend, designed to be deployed on Replit with support for future database integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server with HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing (alternative to React Router)
- **TanStack Query** (React Query) for server state management and data fetching

**UI Component System:**
- **shadcn/ui** component library built on Radix UI primitives for accessible, unstyled components
- **Tailwind CSS** for utility-first styling with custom design tokens
- **class-variance-authority (CVA)** for managing component variants
- Custom theme system supporting dark/light modes with localStorage persistence

**Design Philosophy:**
- Content-first, professional minimalism approach
- Dark mode as primary theme with light mode complement
- Custom color palette defined in CSS variables with HSL values
- Typography uses Inter font family with responsive type scale
- Single-column focus with generous vertical rhythm

**State Management:**
- React Context for theme management (ThemeProvider)
- TanStack Query for API data fetching and caching
- Local component state with React hooks

### Backend Architecture

**Server Framework:**
- **Express.js** as the HTTP server framework
- Custom middleware for request logging with timing metrics
- JSON body parsing with raw body preservation for webhook support
- Development mode with Vite middleware integration for SSR-like experience

**Storage Layer:**
- In-memory storage implementation (`MemStorage`) for development
- Storage interface (`IStorage`) designed for easy swapping to database implementation
- Schema defined with Drizzle ORM for future PostgreSQL integration
- Uses `@neondatabase/serverless` for serverless PostgreSQL support

**Server Architecture Decisions:**
- Separation of concerns: routes, storage, and Vite setup in separate modules
- Type-safe route handling with TypeScript
- API routes prefixed with `/api` for clear client/server boundary
- Static file serving handled by Vite in development, build artifacts in production

### Build & Deployment

**Development Workflow:**
- `npm run dev`: Runs Express server with Vite middleware in development mode
- TypeScript compilation via `tsx` for server code
- Vite handles client-side HMR and React Fast Refresh

**Production Build:**
- `npm run build`: Bundles client with Vite and server with esbuild
- Client output: `dist/public` directory
- Server output: `dist/index.js` as ESM bundle
- `npm start`: Runs production server from bundled code

**Replit Integration:**
- Custom Vite plugins for Replit-specific features (error modal, cartographer, dev banner)
- Environment-aware plugin loading (disabled in production)

### Database Architecture (Configured but Not Yet Implemented)

**ORM & Migrations:**
- **Drizzle ORM** for type-safe database queries
- **Drizzle Kit** for schema migrations
- Schema location: `shared/schema.ts` for sharing between client and server
- Migration output: `./migrations` directory

**Database Configuration:**
- PostgreSQL dialect configured
- Expects `DATABASE_URL` environment variable
- Uses Neon serverless driver for connection pooling
- Schema includes user table with UUID primary keys

**Current Schema:**
- `users` table with id (UUID), username (unique), and password fields
- Zod schemas generated from Drizzle tables for validation
- Type exports for insert and select operations

### Module Organization

**Project Structure:**
- `/client`: React frontend application
  - `/src/components`: Reusable UI components
  - `/src/pages`: Route-level page components
  - `/src/lib`: Utility functions and configurations
  - `/src/hooks`: Custom React hooks
- `/server`: Express backend
  - `index.ts`: Server entry point
  - `routes.ts`: API route definitions
  - `storage.ts`: Data access layer
  - `vite.ts`: Development server setup
- `/shared`: Code shared between client and server
  - `schema.ts`: Database schema and types
- Path aliases configured via TypeScript and Vite:
  - `@/*`: Client source files
  - `@shared/*`: Shared code
  - `@assets/*`: Static assets

**Key Architectural Patterns:**
- Monorepo with shared TypeScript configuration
- Type safety enforced across full stack
- Component-driven UI development
- API-first backend ready for expansion
- Storage abstraction for database flexibility

## External Dependencies

### Frontend Libraries
- **@radix-ui/react-***: Accessible component primitives (accordion, dialog, dropdown, tabs, etc.)
- **@tanstack/react-query**: Server state management (v5.60.5)
- **wouter**: Lightweight routing library
- **react-hook-form** with **@hookform/resolvers**: Form handling and validation
- **zod**: Schema validation and TypeScript type inference
- **react-icons**: Icon library (Simple Icons, Font Awesome)
- **lucide-react**: Icon system
- **embla-carousel-react**: Carousel component
- **date-fns**: Date manipulation and formatting
- **cmdk**: Command palette component
- **vaul**: Drawer component

### Styling & Design
- **tailwindcss**: Utility-first CSS framework
- **autoprefixer**: CSS vendor prefixing
- **class-variance-authority**: Component variant management
- **clsx** + **tailwind-merge**: Class name utilities
- **@fontsource** or Google Fonts CDN: Inter font family

### Backend Dependencies
- **express**: Web server framework
- **drizzle-orm**: TypeScript ORM
- **drizzle-zod**: Zod schema generation from Drizzle tables
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)

### Build Tools
- **vite**: Frontend build tool and dev server
- **@vitejs/plugin-react**: React support for Vite
- **esbuild**: Backend bundler for production
- **tsx**: TypeScript execution for development
- **drizzle-kit**: Database migration tool
- **typescript**: Type system and compiler

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Code navigation
- **@replit/vite-plugin-dev-banner**: Development banner

### Asset Management
- Static assets stored in `attached_assets/generated_images/`
- Images referenced via Vite aliases (`@assets`)
- Placeholder images for avatars, company logos, project thumbnails, blog posts

### Future Integration Points
- Database connection via `DATABASE_URL` environment variable
- Session management infrastructure in place but not activated
- Authentication ready to be implemented via user schema
- API routes structure prepared for REST endpoints