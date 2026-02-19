/**
 * CaseStudiesSection Component
 */

'use client';

import { motion } from 'framer-motion';
import { Card } from './Card';
import caseStudiesData from '@/data/caseStudies.json';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const CaseStudiesSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Success Stories
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Real results from companies just like yours
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {caseStudiesData.caseStudies.map((study) => (
          <motion.div key={study.id} variants={itemVariants}>
            <Card hoverable>
              <div className="text-5xl mb-4">{study.logo}</div>
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                {study.quote}
              </h3>
              <div className="space-y-4 mt-6">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Challenge</p>
                  <p className="text-gray-900 dark:text-white">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Solution</p>
                  <p className="text-gray-900 dark:text-white">{study.solution}</p>
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    📊 {study.results}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
