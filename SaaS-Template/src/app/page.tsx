/**
 * Main Landing Page
 * Composes all sections into a complete SaaS landing experience
 */

'use client';

import { Suspense } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { PricingSection } from '@/components/PricingSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CaseStudiesSection } from '@/components/CaseStudiesSection';
import { FAQSection } from '@/components/FAQSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { ScrollProvider } from '@/components/ScrollProvider';
import { ThemeProvider } from '@/components/ThemeProvider';

/**
 * Loading fallback for sections
 */
function SectionFallback() {
  return (
    <div className="h-96 bg-gray-100 dark:bg-gray-800 animate-pulse" />
  );
}

/**
 * Root page component - Main landing page
 */
export default function Home() {
  return (
    <ThemeProvider>
      <ScrollProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          {/* Header Navigation */}
          <Header />

          <main>
            {/* Hero Section */}
            <Suspense fallback={<SectionFallback />}>
              <HeroSection />
            </Suspense>

            {/* Features Section */}
            <Suspense fallback={<SectionFallback />}>
              <FeaturesSection />
            </Suspense>

            {/* Pricing Section */}
            <Suspense fallback={<SectionFallback />}>
              <PricingSection />
            </Suspense>

            {/* Testimonials Section */}
            <Suspense fallback={<SectionFallback />}>
              <TestimonialsSection />
            </Suspense>

            {/* Case Studies Section */}
            <Suspense fallback={<SectionFallback />}>
              <CaseStudiesSection />
            </Suspense>

            {/* FAQ Section */}
            <Suspense fallback={<SectionFallback />}>
              <FAQSection />
            </Suspense>

            {/* Call-to-Action Section */}
            <Suspense fallback={<SectionFallback />}>
              <CTASection />
            </Suspense>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </ScrollProvider>
    </ThemeProvider>
  );
}
