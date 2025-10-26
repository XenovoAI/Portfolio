# Design Guidelines: Harshit Patidar Portfolio

## Design Approach
**Reference-Based**: Replicating the dark futuristic style of Oahid Zihad's portfolio with glassmorphism UI, animated code mockups, and interactive badges.

## Core Visual Identity

### Dark Futuristic Theme
- **Dark mode only** with dotted grid background pattern
- **Color palette**: Blue and purple glowing accents on dark base
- **Design style**: Glassmorphism with transparency effects and backdrop blur
- **Atmosphere**: High-tech, innovative, forward-thinking

### Typography
- **Primary font**: Poppins or Inter (futuristic, clean)
- **Hierarchy**:
  - Hero title: Extra large, bold (5xl-7xl)
  - Section headings: Large, semi-bold (3xl-4xl)
  - Subheadings: Medium, medium weight (xl-2xl)
  - Body text: Regular, light weight (base-lg)
  - Code snippets: Monospace font (Fira Code/JetBrains Mono)

### Spacing & Layout
- Use Tailwind units: **4, 8, 12, 16, 24** for consistent rhythm
- Section padding: py-20 to py-32 for desktop, py-12 to py-16 for mobile
- Container: max-w-7xl with px-6 to px-8
- Component spacing: gap-8 to gap-12 between major elements

## Section-Specific Design

### Home/Hero Section
**Layout**: Two-column split on desktop (text left, code mockup right)
- Left side: Hero text, animated floating badges, description, button set
- Right side: Glowing animated code editor mockup showing profile object
- **Floating badges**: "Welcome to my universe", "Innovation", "AI Magic", "Clean Code", "Building the Future" with subtle float animation
- **Buttons**: Primary (View My Projects) and Secondary (Contact Me) with glow effects
- Background: Dotted grid pattern with subtle gradient overlay

### About Section
**Layout**: Single column centered with role badges
- Description paragraph with max-w-3xl
- Timeline badges display in grid (3 columns on desktop, stacked on mobile)
- Each badge: Glassmorphism card with company logo placeholder, role title, and company name

### Projects Section
**Layout**: Grid cards (2 columns on desktop, 1 on mobile)
- Each project card: Glassmorphism background with hover lift effect
- Card content: Project icon/emoji, title, description, link button
- Hover state: Increase glow, slight scale transform, enhanced shadow

### Achievements/Timeline Section
**Layout**: Vertical animated timeline
- Timeline line with milestone markers
- Each entry: Year badge + achievement text
- Stagger animation on scroll reveal

### Vision Section
**Layout**: Centered card with glassmorphism
- Large quote-style text with max-w-4xl
- Decorative glow elements around the text

### Contact Section
**Layout**: Centered glassmorphism card
- Form fields: Name, Email, Message (textarea)
- Contact info badges: Email, LinkedIn, GitHub, Website
- Social icons with glow hover effects

## Component Library

### Glassmorphism Cards
- Background: rgba with low opacity (10-20%)
- Backdrop blur: 12-16px
- Border: 1px solid with gradient or rgba white (20% opacity)
- Shadow: Soft glow using box-shadow with brand colors

### Animated Badges/Tags
- Pill-shaped with border and subtle background
- Gentle float/pulse animation
- Hover: Increase glow intensity

### Code Mockup
- Dark editor background (near-black)
- Syntax highlighting with blue/purple/green accents
- Line numbers on left
- Subtle glow effect around entire mockup
- Typing animation for code content

### Buttons
- Primary: Solid background with glow, hover brightens
- Secondary: Border-only with transparent background, hover fills
- All buttons: Smooth transitions, rounded corners

## Animations (Framer Motion)

### Page Load
- Fade-in with slide-up for hero content
- Stagger children for badges
- Code mockup types in sequentially

### Scroll Animations
- Sections fade-in and slide-up on scroll into view
- Timeline entries reveal progressively
- Project cards stagger entrance

### Hover/Interactive
- Cards lift and glow on hover
- Badges pulse subtly
- Buttons brighten and scale slightly

### Floating Elements
- Badges have gentle continuous float (y-axis movement)
- Slow, smooth, infinite animation

## Responsive Behavior
- Desktop (lg+): Two-column hero, multi-column grids
- Tablet (md): Single column hero, 2-column project grid
- Mobile (base): All single column, stacked layouts
- Maintain glassmorphism and animations across all breakpoints

## Background & Atmosphere
- **Base background**: Very dark (#0a0a0a or similar)
- **Dotted grid**: Small dots in subtle blue/purple with low opacity
- **Gradient overlays**: Radial gradients with blue/purple centered on key sections
- **Glow spots**: Positioned behind hero and major sections for depth

## Images
No photographic images required. The design relies on:
- Code mockup visualization (text-based)
- Icon placeholders for projects (emoji or simple SVG icons)
- Decorative gradient glows and geometric patterns