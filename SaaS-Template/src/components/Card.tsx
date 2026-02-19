/**
 * Card Component
 * Reusable card container
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  hoverable?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, hoverable = true, className = '' }) => {
  return (
    <motion.div
      whileHover={hoverable ? { y: -4 } : undefined}
      className={`
        bg-white dark:bg-gray-900
        border border-gray-200 dark:border-gray-800
        rounded-lg p-6
        shadow-md hover:shadow-xl
        transition-all duration-200
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};
