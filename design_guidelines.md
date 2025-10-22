# Design Guidelines: Developer Portfolio Website

## Design Approach
**Reference-Based**: Inspired by chanhdai.com with influences from Linear's typography, Vercel's minimalism, and GitHub's developer-focused aesthetics. This is a content-first, utility-focused portfolio that prioritizes readability, professionalism, and comprehensive information display.

## Core Design Principles
- **Content Supremacy**: Information is the hero - design serves the content
- **Professional Minimalism**: Clean, distraction-free presentation
- **Dark-Mode Native**: Designed primarily for dark mode with light mode as complement
- **Vertical Rhythm**: Consistent, generous spacing throughout
- **Single Column Focus**: No multi-column layouts except for grid-based showcases

## Color Palette

### Dark Mode (Primary)
- **Background**: 9 5% 10% (deep charcoal, nearly black)
- **Surface**: 9 5% 15% (slightly lighter cards/sections)
- **Text Primary**: 0 0% 98% (near white)
- **Text Secondary**: 0 0% 65% (muted gray for labels/metadata)
- **Accent Primary**: 142 76% 36% (vibrant green for CTAs and highlights)
- **Accent Secondary**: 217 91% 60% (soft blue for links and secondary actions)
- **Border**: 0 0% 20% (subtle dividers)

### Light Mode
- **Background**: 0 0% 100%
- **Surface**: 0 0% 98%
- **Text Primary**: 0 0% 10%
- **Text Secondary**: 0 0% 40%
- **Accent Primary**: 142 76% 36% (same green)
- **Accent Secondary**: 217 91% 60% (same blue)
- **Border**: 0 0% 90%

## Typography

### Font Families
- **Primary**: Inter (via Google Fonts CDN) - for body text, labels, metadata
- **Display**: Cal Sans or similar geometric sans (for name/headings) - if unavailable, use Inter with increased letter-spacing

### Type Scale
- **Hero Name**: text-4xl md:text-5xl lg:text-6xl, font-semibold
- **Section Headings**: text-2xl md:text-3xl, font-semibold
- **Subsection Headings**: text-xl md:text-2xl, font-medium
- **Body Large**: text-lg, font-normal
- **Body**: text-base, font-normal
- **Small/Meta**: text-sm, text-secondary
- **Micro**: text-xs, text-secondary

## Layout System

### Spacing Primitives
Use Tailwind units: **4, 6, 8, 12, 16, 20, 24, 32** for consistent rhythm
- Component padding: p-6 md:p-8
- Section spacing: py-16 md:py-24
- Grid gaps: gap-4 md:gap-6
- Element margins: mb-4, mb-6, mb-8, mb-12

### Container Strategy
- **Max Width**: max-w-3xl (centered, single column)
- **Padding**: px-6 md:px-8
- **Section Breaks**: py-16 md:py-20 between major sections

## Component Library

### Hero Section
- Centered layout with pixelated/illustrated avatar (120px-160px, rounded-full or rounded-2xl)
- Large display name with pronunciation helper (small text/icon)
- Tagline in muted color below name
- Overview cards grid (2x2 on desktop, stacked on mobile) showing: role, location, contact, pronouns
- Clean, minimal - no background images

### Social Links Grid
- 2-3 column grid on desktop, single column on mobile
- Each link card: icon (48px), platform name (bold), username/handle (muted)
- Subtle hover lift effect (translate-y-1)
- Border on cards using border color

### About Section
- Full-width text block, max-w-2xl
- Rich paragraph formatting with proper line-height (1.7-1.8)
- Bold keywords/project names
- Inline links in accent color

### Tech Stack Grid
- 4-6 columns on desktop, 3 on tablet, 2 on mobile
- Icon cards (56px icons) with technology name below
- Grayscale icons with color on hover
- Clean, minimal card design with subtle borders

### GitHub Contributions (if applicable)
- Full contribution graph similar to GitHub
- Color-coded squares based on activity
- Month labels above, contribution count below
- Responsive: scrollable on mobile

### Experience Timeline
- Left-aligned company logo (48px-64px, rounded)
- Company name, role title, employment type, dates
- Bullet points for responsibilities
- Skills tags at bottom (pill-shaped, subtle background)
- Visual connector line between entries (optional but elegant)

### Projects Showcase
- Large thumbnail images (16:9 aspect ratio preferred)
- Project logo/icon overlay on thumbnail (top-left or center)
- Title, period, description, technology tags
- "Open Project Link" button with arrow icon
- Grid layout: 1 column on mobile, 2 on desktop for variety

### Blog Preview
- Featured image thumbnails (16:9)
- "New" badge on recent posts (green accent, small text)
- Title, publication date
- 2-column grid on desktop, stack on mobile
- "All Posts" link at bottom

### Footer (Comprehensive)
- Subtle top border
- Copyright text, last updated date
- Quick navigation links (About, Experience, Projects, Blog, Contact)
- Social media icon links
- "Back to top" link/button
- Generous padding (py-12 md:py-16)

## Animations & Interactions
- **Minimal Motion**: Subtle hover states only
- **Hover Effects**: 
  - Links: underline decoration with 200ms transition
  - Cards: slight translate-y lift (2-3px) with shadow increase
  - Buttons: background color shift
- **Page Load**: Gentle fade-in (optional, 300ms)
- **NO**: Parallax, scroll-triggered animations, flashy effects

## Images

### Required Images
1. **Avatar/Profile Photo** (Hero section): Illustrated, pixelated, or professional headshot - 400x400px minimum, webp format
2. **Company Logos** (Experience section): Various sizes, prefer SVG, circular or square format
3. **Project Thumbnails** (Projects section): 1200x675px (16:9), high-quality screenshots or custom graphics
4. **Blog Featured Images** (Blog section): 1200x675px (16:9), relevant visuals
5. **Tech Stack Icons** (Stack section): Use from simpleicons.org or similar, 64x64px SVG

### Image Treatment
- Rounded corners: rounded-lg (8px) for thumbnails, rounded-full for avatars
- Subtle border on all images
- Lazy loading for performance
- webp format preferred, jpg fallback

## Accessibility & Polish
- Maintain WCAG AA contrast ratios (green accent passes on dark background)
- Focus states visible on all interactive elements
- Semantic HTML structure (proper heading hierarchy)
- Alt text for all images
- Responsive typography with fluid scaling
- Theme toggle in header (sun/moon icons)

## Layout Quality Standards
- Generous vertical spacing between sections (16-24 units)
- Consistent card designs throughout (same border radius, padding, hover states)
- Single-column content with grid-based showcases (Stack, Projects, Blog)
- No floating elements - everything grounded and purposeful
- Mobile-first responsive approach with thoughtful breakpoints