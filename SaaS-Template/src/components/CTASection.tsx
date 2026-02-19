/**
 * CTASection Component
 */

'use client';

import { motion } from 'framer-motion';
import { Button } from './Button';

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-12 sm:p-16 text-center text-white"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Join thousands of companies using our platform to accelerate their growth. Start your free 14-day trial today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg">
            Start Free Trial
          </Button>
          <Button
            variant="outline"
            size="lg"
            style={{ borderColor: 'white', color: 'white' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = '#6366f1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'white';
            }}
          >
            Schedule Demo
          </Button>
        </div>
        <p className="text-sm mt-8 opacity-75">No credit card required. Instant access to all features.</p>
      </motion.div>
    </section>
  );
};
