/**
 * FAQSection Component
 */

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import faqData from '@/data/faq.json';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const FAQSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Everything you need to know about our platform
        </p>
      </motion.div>

      <motion.div
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {faqData.items.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: idx * 0.05 }}
            className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors"
          >
            <motion.button
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ paddingLeft: 24 }}
            >
              <span className="font-semibold text-gray-900 dark:text-white text-left">
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: openId === item.id ? 180 : 0 }}
                className="text-indigo-600 dark:text-indigo-400 text-xl"
              >
                ▼
              </motion.span>
            </motion.button>

            <AnimatePresence>
              {openId === item.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
