# Architecture Documentation

## System Overview

The Portfolio Builder is a full-stack web application following a client-server architecture with a shared code layer.

```
┌─────────────────────────────────────────────────────────────────┐
│                     Client (React + Vite)                       │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ Components (UI, Pages, Sections)                         │   │
│  │ - Reusable shadcn/ui components                          │   │
│  │ - Page sections (Hero, About, Projects, etc.)            │   │
│  │ - Theme provider and toggle                              │   │
│  └──────────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ State Management & Hooks                                 │   │
│  │ - Tanstack Query for server state                        │   │
│  │ - Custom hooks (useMobile, useToast)                     │   │
│  └──────────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ Utilities & Styling                                      │   │
│  │ - Tailwind CSS for styling                               │   │
│  │ - Utility functions (cn, etc.)                           │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              ▲
                              │ HTTP/API
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Shared Layer                               │
│  - Data schemas (TypeScript interfaces)                         │
│  - Shared types and constants                                   │
└─────────────────────────────────────────────────────────────────┘
                              ▲
                              │ REST API
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                   Server (Node.js + Express)                    │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ API Routes                                               │   │
│  │ - REST endpoints for portfolio data                      │   │
│  │ - Form submission handling                               │   │
│  └──────────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ Data Layer                                               │   │
│  │ - Drizzle ORM for database queries                       │   │
│  │ - Storage logic and data persistence                     │   │
│  └──────────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ Middleware & Integration                                 │   │
│  │ - Vite integration for dev/prod modes                    │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

## Directory Structure & Responsibilities

### `/client`

Frontend React application built with Vite.

- **`src/components/`** - React components organized by type:

  - `ui/` - Low-level reusable UI components (shadcn/ui based)
  - Page section components (HeroSection, AboutSection, etc.)
  - `ThemeProvider.tsx` - Theme context and logic
  - `ThemeToggle.tsx` - Dark/light mode toggle component
  - `examples/` - Reference implementations of sections

- **`src/pages/`** - Page components:

  - `Home.tsx` - Main home page
  - `not-found.tsx` - 404 error page

- **`src/hooks/`** - Custom React hooks:

  - `use-toast.ts` - Toast notification management
  - `use-mobile.tsx` - Mobile responsiveness detection

- **`src/lib/`** - Utility modules:

  - `queryClient.ts` - Tanstack Query configuration
  - `utils.ts` - Helper functions (especially `cn()` for class names)

- **`src/App.tsx`** - Root application component with routing
- **`src/main.tsx`** - Application entry point
- **`src/index.css`** - Global styles and Tailwind directives
- **`index.html`** - HTML template
- **`public/`** - Static assets

### `/server`

Backend Node.js/Express server.

- **`index.ts`** - Server entry point and configuration
- **`routes.ts`** - REST API route definitions
- **`storage.ts`** - Data storage and persistence logic
- **`vite.ts`** - Vite middleware integration for dev/prod

### `/shared`

Shared code between client and server.

- **`schema.ts`** - TypeScript interfaces and data schemas
  - Portfolio data types
  - Contact form schemas
  - API request/response types

### Root Configuration Files

| File                 | Purpose                            |
| -------------------- | ---------------------------------- |
| `vite.config.ts`     | Build and dev server configuration |
| `tailwind.config.ts` | Tailwind CSS design tokens         |
| `tsconfig.json`      | TypeScript compilation settings    |
| `postcss.config.js`  | PostCSS plugins (Tailwind)         |
| `drizzle.config.ts`  | Drizzle ORM database config        |
| `package.json`       | Dependencies and scripts           |
| `components.json`    | shadcn/ui configuration            |

## Data Flow

### 1. User Interaction Flow

```
User Action
    ↓
Component Event Handler
    ↓
Update Local State / Call API
    ↓
Render with Updated Data
    ↓
User Sees Changes
```

### 2. API Communication Flow

```
Client Component
    ↓
useQuery/useMutation (Tanstack Query)
    ↓
HTTP Request to Server
    ↓
Express Route Handler
    ↓
Storage/Database Query
    ↓
Response Data
    ↓
Client Cache Update
    ↓
Component Re-render
```

### 3. Theme Management Flow

```
User Clicks Theme Toggle
    ↓
ThemeToggle Component
    ↓
Update Context + localStorage
    ↓
ThemeProvider Updates DOM
    ↓
CSS Classes Applied
    ↓
Visual Theme Changes
```

## Key Technologies & Patterns

### Frontend Architecture

- **Component-Based**: Small, reusable components
- **Hooks-Based**: Functional components with custom hooks
- **Server State Management**: Tanstack Query for API data
- **Context API**: Theme switching across application

### Backend Architecture

- **REST API**: Standard HTTP methods for data operations
- **ORM Pattern**: Drizzle ORM for type-safe database queries
- **Middleware**: Standard Express middleware stack

### Styling Strategy

- **Utility-First CSS**: Tailwind CSS for styling
- **Dark Mode Support**: CSS variables and class-based theming
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Development Workflow

### Local Development

1. Start dev server: `npm run dev`
2. Vite serves client on `http://localhost:5173`
3. Hot Module Replacement enabled for instant feedback
4. TypeScript checking in real-time

### Production Build

1. Run: `npm run build`
2. TypeScript compilation
3. React code splitting and optimization
4. CSS minification
5. Output to `dist/` directory

## Performance Optimizations

- **Code Splitting**: Automatic with Vite
- **Lazy Loading**: React.lazy for route-based splitting
- **Tree Shaking**: Unused code elimination
- **CSS Optimization**: Tailwind purging unused styles
- **Image Optimization**: Asset handling through Vite

## Security Considerations

- **TypeScript**: Type safety prevents many runtime errors
- **Input Validation**: Server-side validation of form data
- **CORS**: Configured as needed for API requests
- **Environment Variables**: Sensitive data isolated

## Extensibility Points

### Adding New Sections

1. Create component in `components/`
2. Define schema in `shared/schema.ts`
3. Add to API routes in `server/routes.ts`
4. Implement storage in `server/storage.ts`
5. Import and use in `App.tsx`

### Adding New API Endpoints

1. Define route in `server/routes.ts`
2. Implement handler with storage logic
3. Add schema to `shared/schema.ts`
4. Update client with useQuery/useMutation

### Styling New Components

1. Use Tailwind classes for styling
2. Reference `design_guidelines.md` for consistency
3. Leverage UI components from `components/ui/`
4. Support both light and dark modes

## Testing Strategy (Future)

- **Unit Tests**: Component and utility function tests
- **Integration Tests**: API endpoint tests
- **E2E Tests**: User workflow tests
- **Type Checking**: TypeScript compilation

## Deployment Considerations

- **Build Artifacts**: Static files + server executable
- **Environment Configuration**: .env variables
- **Database Setup**: Drizzle migrations
- **Static Asset Serving**: Configure public paths
- **Error Handling**: Logging and error boundaries

---

**Last Updated:** October 22, 2025
