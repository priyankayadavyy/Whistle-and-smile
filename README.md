# Whistle and Smile - Landing Page

A responsive landing page for Whistle and Smile, an invisible aligners dental service. Built with React, TypeScript, and Plain CSS.

## Features

- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Dynamic API Integration** - Fetches and displays user data from [dummyjson.com](https://dummyjson.com/users)
- **Interactive Yes/No Selection** - Radio button interaction that triggers user data display
- **Loading States** - Skeleton loaders while fetching data
- **Error States** - Error handling with retry functionality
- **Reusable Components** - Button, Input, RadioGroup, Checkbox, UserCard, and more
- **Smooth Animations** - CSS animations for page load, hover effects, and transitions
- **Sticky Header & Bottom Bar** - Fixed navigation elements
- **FAQ Accordion** - Expandable/collapsible FAQ section

## Tech Stack

- React 19 (Functional Components + Hooks)
- TypeScript
- Vite (Build Tool)
- Plain CSS (No UI Libraries)
- React Router
- Lucide React (Icons)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Button.tsx       # Button with variants
│   ├── Input.tsx        # Form input with label
│   ├── RadioGroup.tsx   # Yes/No radio buttons
│   ├── Checkbox.tsx     # Consent checkbox
│   ├── LoadingSpinner.tsx # Loading states
│   ├── ErrorMessage.tsx # Error display
│   ├── UserCard.tsx     # User data card
│   └── SectionTitle.tsx # Section heading
├── sections/            # Page sections
│   ├── Header.tsx       # Fixed navbar
│   ├── PromoBanner.tsx  # Promo banner
│   ├── HeroSection.tsx  # Hero with image
│   ├── BookingForm.tsx  # Form + API integration
│   ├── Partnership.tsx  # Clove Dental card
│   ├── StatsSection.tsx # Stats display
│   ├── ResultsSection.tsx # Results gallery
│   ├── WhyWhistleSection.tsx # Features
│   ├── ComparisonSection.tsx # Comparison table
│   ├── ProcessSection.tsx # How it works
│   ├── DoctorSection.tsx # Doctor trust
│   ├── TestimonialsSection.tsx # Reviews
│   ├── FAQSection.tsx   # Accordion FAQ
│   ├── Footer.tsx       # Site footer
│   └── StickyBottomBar.tsx # Fixed bottom CTA
├── hooks/               # Custom hooks
│   ├── useUsers.ts      # API fetching hook
│   └── useScrollPosition.ts # Scroll tracking
├── types/               # TypeScript types
│   └── index.ts         # All type definitions
├── pages/
│   └── Home.tsx         # Home page
├── App.tsx              # Root component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## Key Features Implementation

### Yes/No Interaction
- Radio buttons for "Do you have Teeth Gaps or Crooked Teeth?"
- Selecting "Yes" fetches and displays user data from API
- Selecting "No" hides the user data section

### API Integration
- Uses `https://dummyjson.com/users?limit=10` endpoint
- Displays users in a responsive grid with filtering (All/Male/Female)
- Loading skeleton shown during fetch
- Error message with retry button on failure

### Responsive Design
- Mobile-first CSS approach
- Breakpoints at 768px and 1024px
- Grid layouts collapse to single column on mobile

### Animations
- Fade-in animations on page load
- Hover effects on buttons and cards
- Smooth FAQ accordion transitions
- Sticky bar slide-up animation

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## License

MIT
