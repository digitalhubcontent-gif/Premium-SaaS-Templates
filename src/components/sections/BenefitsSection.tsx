'use client';

import { motion } from 'framer-motion';

const benefits = [
    {
        icon: '💰',
        title: 'Significant Cost Reduction',
        description: 'Automate repetitive tasks and streamline operations to cut overhead costs by an average of 48% within the first 90 days.',
        stat: '48%',
        statLabel: 'Average cost savings',
    },
    {
        icon: '📈',
        title: 'Improved Business Outcomes',
        description: 'Leverage data-driven AI insights to make smarter decisions, reduce errors, and consistently hit your growth targets.',
        stat: '3.2x',
        statLabel: 'Better decision accuracy',
    },
    {
        icon: '⚡',
        title: 'Massive Productivity Gains',
        description: 'Free your team from manual, repetitive work. Redirect their energy toward high-value tasks that drive real business growth.',
        stat: '10x',
        statLabel: 'Faster task completion',
    },
];

const logos = [
    'TechFlow', 'NexGen', 'FutureSync', 'AlphaEdge', 'BrightPath', 'Innolystic',
    'Farmland', 'CoreAI', 'DataPulse', 'VelocityX', 'Quantum Labs', 'Apex Systems',
];

export default function BenefitsSection() {
    return (
        <section id="benefits" className="section" style={{ background: 'rgba(10,10,18,0.5)' }}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="badge">Why Choose Us</span>
                    <h2 className="display-lg" style={{ marginTop: '16px', marginBottom: '16px' }}>
                        Maximize Efficiency <span className="text-gradient">& Impact</span>
                    </h2>
                    <p>Discover the key advantages of partnering with PROTOCOL_ZERO.</p>
                </motion.div>

                {/* Benefit cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '80px' }}>
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            className="glass-card"
                            style={{ padding: '32px' }}
                        >
                            <div style={{ fontSize: '2rem', marginBottom: '20px' }}>{benefit.icon}</div>

                            {/* Big stat */}
                            <div style={{
                                fontFamily: 'Space Grotesk, sans-serif', fontSize: '2.5rem', fontWeight: 700,
                                background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text', marginBottom: '4px',
                            }}>
                                {benefit.stat}
                            </div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '20px', fontWeight: 500 }}>
                                {benefit.statLabel}
                            </div>

                            <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '1.0625rem', marginBottom: '12px', color: '#f8fafc' }}>
                                {benefit.title}
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7 }}>
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Client logos marquee */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '32px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Trusted by innovative companies
                    </p>
                    <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)' }}>
                        <div style={{ display: 'flex', gap: '48px', animation: 'marquee 20s linear infinite', width: 'max-content' }}>
                            {[...logos, ...logos].map((logo, i) => (
                                <div
                                    key={i}
                                    style={{
                                        padding: '12px 28px', borderRadius: '9999px',
                                        border: '1px solid rgba(255,255,255,0.07)',
                                        background: 'rgba(255,255,255,0.02)',
                                        color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 600,
                                        whiteSpace: 'nowrap', letterSpacing: '0.05em',
                                        fontFamily: 'Space Grotesk, sans-serif',
                                    }}
                                >
                                    {logo}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

        </section>
    );
}
