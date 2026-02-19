'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const plans = [
    {
        name: 'Starter',
        monthlyPrice: 490,
        annualPrice: 390,
        description: 'Essential tools for founders starting their automation journey.',
        features: [
            'Basic workflow automation (up to 5 flows)',
            'AI chatbot setup (1 channel)',
            '60 AI content requests/month',
            'Email support',
            '1 strategy call/month',
            'Standard integrations',
        ],
        cta: 'Get Started',
        highlighted: false,
    },
    {
        name: 'Professional',
        monthlyPrice: 990,
        annualPrice: 790,
        description: 'Advanced capabilities for growing businesses ready to scale.',
        features: [
            'Advanced workflow automation (unlimited)',
            'AI chatbot (multi-channel)',
            '200 AI content requests/month',
            'Priority email & chat support',
            '3 strategy calls/month',
            'Advanced integrations + API access',
        ],
        cta: 'Get Started',
        highlighted: true,
    },
    {
        name: 'Enterprise',
        monthlyPrice: null,
        annualPrice: null,
        description: 'Custom solutions for large-scale business transformation.',
        features: [
            'Custom workflow architecture',
            'Dedicated AI agent team',
            'Unlimited content generation',
            '24/7 priority support',
            'Unlimited strategy sessions',
            'White-label options available',
        ],
        cta: 'Schedule a Call',
        highlighted: false,
    },
];

export default function PricingSection() {
    const [annual, setAnnual] = useState(false);

    return (
        <section id="plans" className="section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="badge">Pricing</span>
                    <h2 className="display-lg" style={{ marginTop: '16px', marginBottom: '16px' }}>
                        Flexible Plans <span className="text-gradient">for Growth</span>
                    </h2>
                    <p>Transparent pricing designed to fit your requirements.</p>

                    {/* Toggle */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '32px' }}>
                        <span style={{ fontSize: '0.9rem', color: !annual ? '#f8fafc' : 'var(--text-secondary)', fontWeight: !annual ? 600 : 400, transition: 'all 0.2s' }}>Monthly</span>
                        <button
                            onClick={() => setAnnual(!annual)}
                            style={{
                                width: '52px', height: '28px', borderRadius: '14px',
                                background: annual ? 'linear-gradient(135deg, #7c3aed, #a855f7)' : 'rgba(255,255,255,0.1)',
                                border: 'none', cursor: 'pointer', position: 'relative', transition: 'background 0.3s',
                            }}
                            aria-label="Toggle billing period"
                        >
                            <motion.div
                                animate={{ x: annual ? 24 : 2 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                style={{
                                    position: 'absolute', top: '3px', width: '22px', height: '22px',
                                    borderRadius: '50%', background: '#fff',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                                }}
                            />
                        </button>
                        <span style={{ fontSize: '0.9rem', color: annual ? '#f8fafc' : 'var(--text-secondary)', fontWeight: annual ? 600 : 400, transition: 'all 0.2s' }}>
                            Annual
                            <span style={{ marginLeft: '6px', padding: '2px 8px', borderRadius: '9999px', background: 'rgba(34,197,94,0.15)', color: '#22c55e', fontSize: '0.75rem', fontWeight: 600 }}>
                                Save 20%
                            </span>
                        </span>
                    </div>
                </motion.div>

                <div className="pricing-grid">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            style={{
                                padding: '32px',
                                borderRadius: '16px',
                                background: plan.highlighted ? 'rgba(13,13,22,0.9)' : 'var(--bg-card)',
                                border: plan.highlighted ? '1px solid rgba(124,58,237,0.5)' : '1px solid var(--border-card)',
                                backdropFilter: 'blur(20px)',
                                boxShadow: plan.highlighted ? '0 0 40px rgba(124,58,237,0.2), inset 0 1px 0 rgba(255,255,255,0.05)' : 'none',
                                position: 'relative',
                                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                            }}
                            whileHover={{ y: -4 }}
                        >
                            {plan.highlighted && (
                                <div style={{
                                    position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                                    padding: '4px 16px', borderRadius: '9999px',
                                    background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                                    fontSize: '0.75rem', fontWeight: 700, color: '#fff', whiteSpace: 'nowrap',
                                }}>
                                    Most Popular
                                </div>
                            )}

                            <div style={{ marginBottom: '24px' }}>
                                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.25rem', marginBottom: '8px', color: '#f8fafc' }}>
                                    {plan.name}
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                                    {plan.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div style={{ marginBottom: '28px' }}>
                                <AnimatePresence mode="wait">
                                    {plan.monthlyPrice ? (
                                        <motion.div
                                            key={annual ? 'annual' : 'monthly'}
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}
                                        >
                                            <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '2.5rem', fontWeight: 700, color: '#f8fafc', letterSpacing: '-0.02em' }}>
                                                ${annual ? plan.annualPrice : plan.monthlyPrice}
                                            </span>
                                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>/month</span>
                                        </motion.div>
                                    ) : (
                                        <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '2rem', fontWeight: 700, color: '#f8fafc' }}>
                                            Custom
                                        </div>
                                    )}
                                </AnimatePresence>
                                {plan.monthlyPrice && annual && (
                                    <p style={{ fontSize: '0.8rem', color: '#22c55e', marginTop: '4px' }}>
                                        Billed annually — save ${(plan.monthlyPrice - (plan.annualPrice ?? 0)) * 12}/yr
                                    </p>
                                )}
                            </div>

                            {/* CTA */}
                            <a
                                href="#contact"
                                className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`}
                                style={{ width: '100%', justifyContent: 'center', marginBottom: '28px' }}
                            >
                                {plan.cta}
                            </a>

                            {/* Features */}
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {plan.features.map((feature) => (
                                    <li key={feature} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '2px', color: '#a855f7' }}>
                                            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
}
