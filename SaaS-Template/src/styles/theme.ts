/**
 * Design System & Theme
 * Central source of truth for colors, typography, spacing
 */

export const colors = {
  // Primary
  primary: '#6366f1',
  primaryLight: '#818cf8',
  primaryDark: '#4f46e5',
  
  // Secondary
  secondary: '#8b5cf6',
  secondaryLight: '#a78bfa',
  secondaryDark: '#7c3aed',
  
  // Accent
  accent: '#ec4899',
  accentLight: '#f472b6',
  accentDark: '#db2777',
  
  // Success
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  
  // Neutral - Light Mode
  white: '#ffffff',
  gray50: '#f9fafb',
  gray100: '#f3f4f6',
  gray200: '#e5e7eb',
  gray300: '#d1d5db',
  gray400: '#9ca3af',
  gray500: '#6b7280',
  gray600: '#4b5563',
  gray700: '#374151',
  gray800: '#1f2937',
  gray900: '#111827',
  
  // Neutral - Dark Mode
  dark50: '#f9fafb',
  dark100: '#f3f4f6',
  dark200: '#e5e7eb',
  dark300: '#d1d5db',
  dark400: '#9ca3af',
  dark500: '#6b7280',
  dark600: '#4b5563',
  dark700: '#374151',
  dark800: '#1f2937',
  dark900: '#0f172a',
};

export const typography = {
  h1: {
    size: 'clamp(2rem, 5vw, 3.5rem)',
    weight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
  },
  h2: {
    size: 'clamp(1.5rem, 4vw, 2.5rem)',
    weight: 600,
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
  },
  h3: {
    size: '1.875rem',
    weight: 600,
    lineHeight: 1.4,
  },
  h4: {
    size: '1.5rem',
    weight: 600,
    lineHeight: 1.5,
  },
  body: {
    size: '1rem',
    weight: 400,
    lineHeight: 1.6,
  },
  small: {
    size: '0.875rem',
    weight: 400,
    lineHeight: 1.5,
  },
  tiny: {
    size: '0.75rem',
    weight: 500,
    lineHeight: 1.4,
    letterSpacing: '0.05em',
  },
};

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '3rem',
  xxxl: '4rem',
  huge: '6rem',
};

export const borderRadius = {
  none: '0',
  sm: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  full: '9999px',
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  xxl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
};

export const transitions = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  base: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
};

export const breakpoints = {
  xs: '0px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px',
};

export const zIndex = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  backdrop: 1040,
  offcanvas: 1050,
  modal: 1060,
  popover: 1070,
  tooltip: 1080,
};
