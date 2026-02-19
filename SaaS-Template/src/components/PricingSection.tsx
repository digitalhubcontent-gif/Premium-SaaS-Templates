/**
 * PricingSection Component
 */

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from './Card';
import { Badge } from './Badge';
import { Button } from './Button';
import pricingData from '@/data/pricing.json';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const PricingSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [isAnnual, setIsAnnual] = useState(false);

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

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Simple, Transparent Pricing
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Choose the perfect plan for your business
        </p>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-4">
          <span className={isAnnual ? 'text-gray-500' : 'font-bold'}>Monthly</span>
          <motion.button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-300 dark:bg-gray-700"
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="inline-block h-6 w-6 transform rounded-full bg-white"
              animate={{ x: isAnnual ? 28 : 4 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </motion.button>
          <span className={!isAnnual ? 'text-gray-500' : 'font-bold'}>Annual</span>
          {isAnnual && <Badge variant="success">Save 20%</Badge>}
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {pricingData.tiers.map((tier) => (
          <motion.div
            key={tier.id}
            variants={itemVariants}
            className={tier.highlighted ? 'md:scale-105' : ''}
          >
            <Card className={tier.highlighted ? 'ring-2 ring-indigo-600 dark:ring-indigo-400' : ''}>
              {tier.badge && (
                <div className="mb-4">
                  <Badge variant="default">{tier.badge}</Badge>
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {tier.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">{tier.description}</p>

              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900 dark:text-white">
                  {tier.price === 'Custom' ? tier.price : `$${tier.price}`}
                </div>
                {tier.period !== 'contact' && (
                  <p className="text-gray-600 dark:text-gray-400">
                    per {tier.period} {isAnnual && tier.period === 'month' ? '(billed annually)' : ''}
                  </p>
                )}
              </div>

              <Button fullWidth className="mb-8">
                {tier.cta}
              </Button>

              <ul className="space-y-3">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                    <span className="text-indigo-600 dark:text-indigo-400 mt-1">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
