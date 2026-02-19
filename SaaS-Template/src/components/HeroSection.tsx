/**
 * HeroSection Component
 * B2B-first landing hero with optional 3D background
 * Dark-first design with full light mode support
 */

'use client';

import { motion } from 'framer-motion';
import { Button } from './Button';
import { HeroCanvas } from './HeroCanvas';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const HeroSection: React.FC = () => {
  const enable3D = true; // Toggle for optional 3D hero
  const variant3D = 'orbs'; // 'orbs' | 'waves' | 'combined'

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Optional 3D Background - React Three Fiber */}
      {enable3D && <HeroCanvas enabled={enable3D} variant={variant3D} />}

      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ x: [0, 40, 0], y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-300 dark:bg-violet-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-200 rounded-full text-sm font-medium">
            ✨ The Future of SaaS
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-indigo-600 to-gray-900 dark:from-white dark:via-indigo-400 dark:to-white bg-clip-text text-transparent"
        >
          Everything You Need to Scale
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Build, launch, and grow your business with our all-in-one platform. Trusted by 10,000+ companies worldwide.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="lg">Start Free Trial</Button>
          <Button variant="outline" size="lg">
            Watch Demo
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 text-gray-600 dark:text-gray-400">
          <p className="mb-4 font-medium">Trusted by leading companies</p>
          <div className="flex justify-center gap-8 flex-wrap">
            {['TechFlow', 'CloudScale', 'DataViz', 'FinTech'].map((company) => (
              <div key={company} className="text-sm font-medium">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
