# Master Project Replication Prompt

This prompt is designed to guide an AI in creating a new web project that replicates the architecture, quality, design system, animations, component structure, development patterns, code quality, responsiveness, and performance strategy of the `ryvane-ai` project.

To generate a new project, simply provide the following parameters, and the AI will adapt the existing blueprint:

---

## Project Parameters:

*   **New Project Name**: [Your New Project Name Here]
*   **Copyright Name**: [Your Copyright Name Here]
*   **Brand Colors**:
    *   Primary: [Hex Code or Name]
    *   Secondary: [Hex Code or Name]
    *   Accent: [Hex Code or Name]
    *   Gradients: [Details if applicable]
*   **Content**: [Provide a brief description of the new project's content and purpose. E.g., "A marketing website for a sustainable energy startup, focusing on solar panel solutions."]
*   **Industry**: [e.g., "Sustainable Energy", "Fintech", "Healthcare"]

---

## Replicated Blueprint (Derived from `ryvane-ai` project analysis):

### 1. Project Overview:
*   **Project Purpose**: [DETAILS FROM ANALYSIS]
*   **Target Audience**: [DETAILS FROM ANALYSIS]
*   **Core Functionality**: [DETAILS FROM ANALYSIS]
*   **Main User Flows**: [DETAILS FROM ANALYSIS]
*   **Business Objective**: [DETAILS FROM ANALYSIS]
*   **Product Category**: [DETAILS FROM ANALYSIS]
*   **Application Type**: [DETAILS FROM ANALYSIS]

### 2. Technology Stack:
*   **Frontend**:
    *   **Next.js**: [DETAILS FROM ANALYSIS - Version, rationale, usage]
    *   **React**: [DETAILS FROM ANALYSIS - Version, rationale, usage]
    *   **TypeScript**: [DETAILS FROM ANALYSIS - Version, rationale, usage]
    *   **Tailwind CSS**: [DETAILS FROM ANALYSIS - Version, rationale, usage]
    *   **Framer Motion**: [DETAILS FROM ANALYSIS - Version, rationale, usage]
    *   **Lucide React**: [DETAILS FROM ANALYSIS - Version, rationale, usage]
    *   **Next.js Fonts**: [DETAILS FROM ANALYSIS - Specific fonts, rationale, usage]
    *   **Other Libraries**: [DETAILS FROM ANALYSIS]
*   **Backend**: [DETAILS FROM ANALYSIS - "Not identifiable from provided project." or specific details if found later]
*   **APIs**: [DETAILS FROM ANALYSIS]

### 3. Dependency Analysis:
*   **framer-motion**: `^12.40.0`
    *   **Purpose**: Animation library for React.
    *   **What problem it solves**: Enables declarative, physics-based animations and gestures in React applications, making UIs more dynamic and engaging.
    *   **Usage**: Used for creating smooth transitions, interactive elements, and complex motion sequences.
    *   **Importance**: Critical for the project's interactive and visually rich user experience.
    *   **Example**: `import { motion, Variants } from "framer-motion";`
*   **lucide-react**: `^1.17.0`
    *   **Purpose**: Icon library for React.
    *   **What problem it solves**: Provides a collection of customizable SVG icons, ensuring a consistent and scalable icon system.
    *   **Usage**: Used to display various icons throughout the application.
    *   **Importance**: Critical for UI consistency and visual communication.
    *   **Example**: `import { IconName } from "lucide-react";` (general usage)
*   **next**: `16.2.6`
    *   **Purpose**: React framework for production.
    *   **What problem it solves**: Provides features like server-side rendering, static site generation, routing, API routes, and optimized build processes, enhancing performance, SEO, and developer experience.
    *   **Usage**: The core framework for the entire application.
    *   **Importance**: Critical, as the project is a Next.js application.
    *   **Example**: `import type { Metadata } from "next";`
*   **react**: `19.2.4`
    *   **Purpose**: JavaScript library for building user interfaces.
    *   **What problem it solves**: Enables component-based UI development, promoting reusability and maintainability.
    *   **Usage**: The foundational library for all UI components.
    *   **Importance**: Critical, as the project is a React application.
    *   **Example**: Implicitly used in JSX.
*   **react-dom**: `19.2.4`
    *   **Purpose**: Provides DOM-specific methods for React.
    *   **What problem it solves**: Acts as the glue between React components and the browser's DOM, enabling efficient rendering and updates.
    *   **Usage**: Used by Next.js internally for rendering React components to the DOM.
    *   **Importance**: Critical for rendering the React application in a web browser.
    *   **Example**: Not directly imported in application code, but used by the framework.

**Development Dependencies:**
*   **@tailwindcss/postcss**: `^4`
    *   **Purpose**: PostCSS plugin for Tailwind CSS.
    *   **What problem it solves**: Integrates Tailwind CSS with PostCSS, allowing for processing of CSS with Tailwind directives.
    *   **Usage**: Part of the build pipeline for compiling Tailwind CSS.
    *   **Importance**: Critical for using Tailwind CSS.
    *   **Example**: Configured in `postcss.config.js` (if present) or implicitly handled by Next.js build.
*   **@types/node**: `^20`
    *   **Purpose**: Type definitions for Node.js.
    *   **What problem it solves**: Provides TypeScript type definitions for Node.js APIs, enabling type-safe development for server-side code or build scripts.
    *   **Usage**: Used by TypeScript compiler for type checking.
    *   **Importance**: Critical for TypeScript development.
    *   **Example**: Not directly used in application code, but by the TypeScript compiler.
*   **@types/react**: `^19`
    *   **Purpose**: Type definitions for React.
    *   **What problem it solves**: Provides TypeScript type definitions for React APIs, enabling type-safe development of React components.
    *   **Usage**: Used by TypeScript compiler for type checking.
    *   **Importance**: Critical for TypeScript development with React.
    *   **Example**: `import type { FC } from "react";` (general usage)
*   **@types/react-dom**: `^19`
    *   **Purpose**: Type definitions for React DOM.
    *   **What problem it solves**: Provides TypeScript type definitions for `react-dom` APIs.
    *   **Usage**: Used by TypeScript compiler for type checking.
    *   **Importance**: Critical for TypeScript development with React DOM.
    *   **Example**: Not directly used in application code, but by the TypeScript compiler.
*   **eslint**: `^9`
    *   **Purpose**: Pluggable JavaScript linter.
    *   **What problem it solves**: Enforces code style, identifies potential errors, and promotes best practices, improving code quality and consistency.
    *   **Usage**: Run via `bun run lint` script.
    *   **Importance**: Important for code quality and consistency.
    *   **Example**: Configured in `.eslintrc.json` (if present).
*   **eslint-config-next**: `16.2.6`
    *   **Purpose**: ESLint configuration for Next.js projects.
    *   **What problem it solves**: Provides a recommended ESLint configuration specifically tailored for Next.js applications.
    *   **Usage**: Extends base ESLint configuration.
    *   **Importance**: Important for maintaining Next.js specific code quality.
    *   **Example**: Configured in `.eslintrc.json` (if present).
*   **tailwindcss**: `^4`
    *   **Purpose**: Utility-first CSS framework.
    *   **What problem it solves**: Provides low-level utility classes to build custom designs directly in markup, accelerating UI development.
    *   **Usage**: Used for styling components.
    *   **Importance**: Critical for the project's styling approach.
    *   **Example**: Configured in `tailwind.config.js` (if present).
*   **typescript**: `^5`
    *   **Purpose**: Superset of JavaScript that adds static types.
    *   **What problem it solves**: Enables type-safe development, reducing runtime errors and improving code maintainability.
    *   **Usage**: The primary language for the project's codebase.
    *   **Importance**: Critical for the project's development paradigm.
    *   **Example**: `tsconfig.json` configuration.

### 4. Folder Structure:
```
ryvane-ai/
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── AISecurity.tsx
│       ├── CTASection.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── Navbar.tsx
│       ├── PlatformSpecs.tsx
│       ├── RedTeam.tsx
│       └── TeamSection.tsx
```
*   **`src/`**
    *   **Purpose**: The root directory for all application source code. It encapsulates the main logic, components, and styles, separating them from configuration files and build artifacts.
    *   **Responsibilities**: Contains all development-related files.
    *   **Patterns followed**: Standard practice in modern web development, especially with frameworks like Next.js, to keep source code organized.
*   **`src/app/`**
    *   **Purpose**: This directory is part of Next.js's App Router, which handles routing, layouts, and pages. It defines the application's structure and entry points.
    *   **Responsibilities**: Manages global layout, page-specific content, and metadata.
    *   **Patterns followed**: Next.js App Router convention.
    *   **`favicon.ico`**: The website's favicon.
    *   **`globals.css`**: Global CSS styles, likely where Tailwind CSS directives are imported and custom global styles are defined.
    *   **`layout.tsx`**: Defines the root layout of the application, including HTML structure, font imports, metadata, and the main `<body>` content. It wraps all pages.
    *   **`page.tsx`**: The root page component for the application, serving as the entry point for the main content. It imports and orchestrates various section components.
*   **`src/components/`**
    *   **Purpose**: Houses reusable UI components that can be composed to build pages.
    *   **Responsibilities**: Each file in this directory represents a distinct, self-contained UI component.
    *   **Patterns followed**: Component-based architecture, promoting reusability, maintainability, and separation of concerns.
    *   **`AISecurity.tsx`**: Component likely detailing AI security features.
    *   **`CTASection.tsx`**: Call-to-Action section component.
    *   **`Footer.tsx`**: The website's footer component.
    *   **`Hero.tsx`**: The main hero section component, typically the first visible section on a page.
    *   **`Navbar.tsx`**: The navigation bar component.
    *   **`PlatformSpecs.tsx`**: Component showcasing platform specifications.
    *   **`RedTeam.tsx`**: Component likely detailing red team operations.
    *   **`TeamSection.tsx`**: Component introducing the team members.

### 5. Component Architecture:
*   [DETAILS FROM ANALYSIS - Every component, parent-child relationships, shared components, reusable UI blocks, layout systems, props, state, dependencies, reusability, design patterns]

### 6. Framer Analysis:
*   **Framer Structure**: [DETAILS FROM ANALYSIS - Pages, sections, components, code components, overrides, variants, animations]
*   **Animations**: [DETAILS FROM ANALYSIS - Page transitions, hover, scroll, entrance, stagger effects, micro-interactions, exact behavior]
*   **Motion System**: [DETAILS FROM ANALYSIS - Framer Motion usage, timing, duration, easing, variants, animation architecture]

### 7. Design System Analysis:
*   **Typography**: [DETAILS FROM ANALYSIS - Fonts, sizes, weights, line heights]
*   **Colors**: [DETAILS FROM ANALYSIS - Primary, secondary, accent, gradients]
*   **Spacing System**: [DETAILS FROM ANALYSIS - Margins, padding, grid]
*   **Border Radius**: [DETAILS FROM ANALYSIS]
*   **Shadows**: [DETAILS FROM ANALYSIS]
*   **Layout Rules**: [DETAILS FROM ANALYSIS]
*   **Visual Hierarchy**: [DETAILS FROM ANALYSIS]

### 8. UI Patterns:
*   [DETAILS FROM ANALYSIS - Hero sections, CTA sections, testimonials, pricing, feature grids, FAQ, navigation, footer, explanation of implementation]

### 9. Responsive Design:
*   **Breakpoints**: [DETAILS FROM ANALYSIS]
*   **Mobile Strategy**: [DETAILS FROM ANALYSIS]
*   **Tablet Strategy**: [DETAILS FROM ANALYSIS]
*   **Desktop Strategy**: [DETAILS FROM ANALYSIS]
*   **Layout Adaptations**: [DETAILS FROM ANALYSIS]

### 10. State Management:
*   [DETAILS FROM ANALYSIS - React State, Context, Zustand, Redux, etc., why chosen, data flow, state architecture]

### 11. Data Flow:
*   [DETAILS FROM ANALYSIS - Map user action → component → state → API → response → UI update for major flows]

### 12. API & Integration Analysis:
*   [DETAILS FROM ANALYSIS - External APIs, AI APIs, payment providers, analytics, authentication, email services, purpose, integration method, security considerations]

### 13. Performance Strategy:
*   [DETAILS FROM ANALYSIS - Lazy loading, code splitting, image optimization, memoization, caching, implementation]

### 14. SEO Analysis:
*   [DETAILS FROM ANALYSIS - Metadata, Open Graph, Structured Data, Sitemap, Robots, setup]

### 15. Accessibility Analysis:
*   [DETAILS FROM ANALYSIS - ARIA, keyboard navigation, contrast, screen reader support]

### 16. Development Patterns:
*   [DETAILS FROM ANALYSIS - DRY principles, reusable architecture, custom hooks, service layers, utility functions, coding style]

### 17. Deployment Analysis:
*   [DETAILS FROM ANALYSIS - Hosting platform, build configuration, environment variables, CI/CD setup]

---

## Instructions for AI:

1.  **Adhere Strictly to Blueprint**: Implement the new project following every detail specified in the "Replicated Blueprint" section.
2.  **Utilize Provided Parameters**: Integrate the "Project Parameters" (Name, Copyright, Colors, Content, Industry) seamlessly into the new project, ensuring they align with the established design system and architecture.
3.  **Maintain Quality**: Ensure the generated code adheres to high standards of code quality, maintainability, and best practices as observed in the `ryvane-ai` project.
4.  **No Deviations**: Do not introduce new technologies, architectural patterns, or design elements that are not explicitly defined in the blueprint.
5.  **Error-Free Implementation**: The generated project must be fully functional and free of common development errors.
6.  **Responsiveness & Performance**: The new project must be fully responsive across specified breakpoints and optimized for performance according to the blueprint.
7.  **Framer & Animations**: Replicate the Framer setup and animation behaviors precisely as detailed.