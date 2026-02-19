/**
 * Scroll Provider Component
 * Provides scroll animation helpers via context
 */

'use client';

import { ReactNode, createContext } from 'react';
import React from 'react';

interface ScrollContextType {
  // Placeholder for future scroll state
  scrollY: number;
}

export const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  return (
    <ScrollContext.Provider value={{ scrollY: 0 }}>
      {children}
    </ScrollContext.Provider>
  );
};
