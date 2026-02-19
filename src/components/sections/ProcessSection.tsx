'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        number: '01',
        title: 'Discovery & Analysis',
        description: 'We dive deep into your workflows, identify bottlenecks, and map out the highest-impact automation opportunities for your business.',
        icon: '🔍',
        code: `analyze_workflow(\n  business_ops,\n  bottlenecks=True\n)`,
    },
    {
        number: '02',
        title: 'Build & Test',
        description: 'Our team crafts custom AI solutions tailored to your goals, rigorously testing every component for reliability, speed, and accuracy.',
        icon: '⚙️',
        code: `deploy_agent(\n  model="gpt-4",\n  accuracy=0.99\n)`,
    },
    {
        number: '03',
        title: 'Launch & Scale',
        description: 'We deploy your automation seamlessly into your existing stack and provide ongoing monitoring, optimization, and support.',
        icon: '🚀',
        code: `scale_operations(\n  efficiency="+48%",\n  cost="-32%"\n)`,
    },
];

export default function ProcessSection() {
    return (
        <section id="process" className="section" style={{ background: 'rgba(10,10,18,0.5)' }}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="badge">How It Works</span>
                    <h2 className="display-lg" style={{ marginTop: '16px', marginBottom: '16px' }}>
                        Your Path to <span className="text-gradient">Excellence</span>
                    </h2>
                    <p>A simple, effective approach to deliver results that last.</p>
                </motion.div>

                <div className="grid-3col" style={{ gap: '24px', position: 'relative' }}>
                    <div
                        aria-hidden="true"
                        className="process-connector"
                        style={{
                            position: 'absolute',
                            top: '60px',
                            left: 'calc(16.67% + 12px)',
                            right: 'calc(16.67% + 12px)',
                            height: '1px',
                            background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(168,85,247,0.5), transparent)',
                            zIndex: 0,
                        }}
                    />

                    {steps.map((step, i) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="glass-card"
                            style={{ padding: '32px', position: 'relative', zIndex: 1 }}
                        >
                            {/* Step number */}
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '50%',
                                background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '0.875rem',
                                color: '#fff', marginBottom: '24px',
                                boxShadow: '0 0 20px rgba(124,58,237,0.4)',
                            }}>
                                {step.number}
                            </div>

                            <div style={{ fontSize: '1.75rem', marginBottom: '12px' }}>{step.icon}</div>
                            <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '1.125rem', marginBottom: '12px', color: '#f8fafc' }}>
                                {step.title}
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '24px' }}>
                                {step.description}
                            </p>

                            {/* Code snippet */}
                            <div
                                className="process-code"
                                style={{
                                    background: 'rgba(0,0,0,0.4)', borderRadius: '8px', padding: '14px',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    fontFamily: 'monospace', fontSize: '0.8rem', color: '#a855f7',
                                    whiteSpace: 'pre',
                                }}>
                                {step.code}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
}
