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
*   **Project Purpose**: An elite cybersecurity and AI security testing platform designed for autonomous vulnerability detection, threat modeling, and advanced red team operations.
*   **Target Audience**: Businesses and organizations interested in advanced cybersecurity solutions, AI security, and red team operations.
*   **Core Functionality**: Showcase platform capabilities, provide information about services, engage users with interactive UI, and drive conversions through CTAs.
*   **Main User Flows**: Landing page viewing, exploring platform features, learning about services, team introduction, call to action.
*   **Business Objective**: Marketing and lead generation for the Ryvane AI platform.
*   **Product Category**: Cybersecurity Platform / AI Security Tool
*   **Application Type**: Marketing Website / Landing Page

### 2. Technology Stack:
*   **Frontend**:
    *   **Next.js**: v16.2.6. Used for SSR/SSG, routing, and optimized build process, providing performance and SEO benefits. Integrated via `app` directory and `package.json` scripts.
    *   **React**: v19.2.4. Core library for building component-based user interfaces. All UI elements are React components.
    *   **TypeScript**: v5. Provides static type checking for improved code quality and maintainability. Used throughout the codebase.
    *   **Tailwind CSS**: v4. Utility-first CSS framework for rapid and consistent UI development. Integrated via PostCSS and applied directly in JSX.
    *   **Framer Motion**: v12.40.0. Production-ready motion library for declarative animations and gestures, enhancing user experience.
    *   **Lucide React**: v1.17.0. Provides a collection of customizable SVG icons for a consistent iconographic system.
    *   **Next.js Fonts**: Geist, Geist_Mono. Used for efficient font loading and consistent typography, applied via CSS variables.
    *   **Other Libraries**: Not identifiable from provided project.
*   **Backend**: Not identifiable from provided project. (Appears to be a static/client-side rendered Next.js application).
*   **APIs**: Not identifiable from provided project.

### 3. Dependency Analysis:
*   [DETAILS FROM ANALYSIS - Complete dependency table with purpose, usage, importance, and examples]

### 4. Folder Structure:
*   [DETAILS FROM ANALYSIS - Exact folder hierarchy with purpose, responsibilities, and patterns]

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
