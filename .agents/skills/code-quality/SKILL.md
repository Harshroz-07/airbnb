---
name: airbnb-code-quality
description: Code quality, accessibility, and architectural standards for the Airbnb Clone project.
---

# Code Quality & Accessibility Standards

## Core Principles
1. **Semantic HTML5**: Always use appropriate tags (`<header>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<dialog>`, `<button>`).
2. **Keyboard Navigation & ARIA Focus Management**:
   - All interactive components (Modals, Lightbox, DatePicker, Dropdowns) must support keyboard navigation (`Escape`, `ArrowLeft`, `ArrowRight`, `Tab`).
   - Lightbox modal must handle `ArrowLeft` for previous photo, `ArrowRight` for next photo, and `Escape` for closing.
   - Use `aria-modal="true"`, `role="dialog"`, and `aria-label` for all modals.
3. **Behavioral Parity & Motion Design**:
   - Micro-interactions on buttons, scale/glow hover effects.
   - Smooth slide-in/fade motion transitions using Framer Motion (`AnimatePresence`).
4. **Clean Component Architecture**:
   - Keep components modular, strongly typed with TypeScript interfaces.
   - Decouple view state from rendering logic.
