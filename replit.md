# Harshit Patidar Portfolio

## Overview

A personal portfolio website for Harshit Patidar, showcasing his role as Founder & CEO of Xenovo AI, Co-Founder of SirCBSE, and Founding Member at Zythorix Technologies. The site features a dark futuristic design with glassmorphism UI, animated code mockups, interactive badges, and smooth scroll animations inspired by modern developer portfolios.

The application is a full-stack TypeScript project with a React frontend and Express backend, designed to present professional information, projects, and provide a contact form for visitor engagement.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling**
- **React 18** with TypeScript for component-based UI development
- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for lightweight client-side routing (only Home and NotFound pages currently)
- **TanStack Query (React Query)** for server state management and data fetching
- **Framer Motion** for declarative animations and transitions throughout the site

**UI Component System**
- **shadcn/ui** component library based on Radix UI primitives for accessible, unstyled components
- **Tailwind CSS** for utility-first styling with custom theme configuration
- **Class Variance Authority (CVA)** for managing component variants
- Custom design tokens defined in CSS variables for colors, spacing, and shadows
- Dark mode only design with blue/purple accent colors

**Design Approach**
- Glassmorphism aesthetic with backdrop blur, transparency effects, and glowing accents
- Dotted grid background pattern with gradient overlays for depth
- Custom components: FloatingBadge, CodeMockup, ProjectCard, TimelineItem, DottedBackground
- Typography: Poppins/Inter fonts for general text, Fira Code/JetBrains Mono for code snippets
- Responsive layout with mobile-first considerations

**Form Handling**
- **React Hook Form** for performant form state management
- **Zod** for runtime validation via `@hookform/resolvers`
- Contact form with validated fields (name, email, message)

### Backend Architecture

**Server Framework**
- **Express.js** server with TypeScript
- Custom middleware for request logging and JSON body parsing
- Development mode with Vite middleware integration for HMR
- Production mode serves static built assets

**API Design**
- RESTful endpoints:
  - `POST /api/contact` - Submit contact form
  - `GET /api/contacts` - Retrieve all contact submissions (admin functionality)
- Request validation using Zod schemas shared between client and server
- JSON response format with success/error structure

**Data Layer**
- Currently using **in-memory storage** via `MemStorage` class
- Database schema defined using **Drizzle ORM** with PostgreSQL dialect
- Schema location: `shared/schema.ts` for type sharing across client/server
- Database configuration ready for Neon Postgres via `@neondatabase/serverless`
- Migration setup configured in `drizzle.config.ts`

**Storage Interface Pattern**
- `IStorage` interface defines contract for data operations
- `MemStorage` implementation stores contact submissions in a Map with UUID keys
- Design allows easy swap to database-backed storage (DrizzleStorage) without changing API routes

### External Dependencies

**UI & Component Libraries**
- **@radix-ui/* packages**: Comprehensive set of accessible UI primitives (accordion, dialog, dropdown, popover, tabs, toast, etc.)
- **lucide-react**: Icon library for consistent iconography
- **cmdk**: Command menu component for potential search functionality
- **embla-carousel-react**: Carousel/slider functionality
- **vaul**: Drawer component library

**Animation & Interaction**
- **framer-motion**: Animation library for page transitions, hover effects, scroll animations

**Data Fetching & State**
- **@tanstack/react-query**: Async state management with built-in caching and refetching strategies
- Custom `queryClient` configured with disabled auto-refetch and infinite stale time

**Form & Validation**
- **react-hook-form**: Efficient form state management with minimal re-renders
- **zod**: Schema validation for both client-side forms and server-side API requests
- **drizzle-zod**: Integration between Drizzle ORM schemas and Zod validators

**Database & ORM**
- **drizzle-orm**: Type-safe ORM for PostgreSQL
- **@neondatabase/serverless**: Serverless Postgres client for Neon database
- **drizzle-kit**: CLI tool for migrations and schema management
- **connect-pg-simple**: PostgreSQL session store (available but not actively used)

**Development Tools**
- **@replit/vite-plugin-***: Replit-specific plugins for runtime error overlay, cartographer, and dev banner
- **tsx**: TypeScript execution for running server in development
- **esbuild**: Fast bundler for server-side production builds

**Utility Libraries**
- **date-fns**: Date manipulation and formatting
- **clsx & tailwind-merge**: Utility for merging Tailwind classes
- **class-variance-authority**: Component variant management

**Build & Styling**
- **PostCSS** with Tailwind CSS and Autoprefixer
- **@jridgewell/trace-mapping**: Source map support for better debugging