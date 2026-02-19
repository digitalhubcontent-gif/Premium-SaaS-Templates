'use client';

import { motion } from 'framer-motion';

const services = [
    {
        icon: '🤖',
        title: 'AI Chatbots',
        description: 'Deploy intelligent chatbots that handle customer queries 24/7, qualify leads, and book meetings — all without human intervention.',
        tags: ['NLP', 'Multi-channel', '24/7'],
    },
    {
        icon: '✍️',
        title: 'Content Generation',
        description: 'Produce high-quality, on-brand content at scale — blog posts, social media, emails, and ad copy — powered by advanced language models.',
        tags: ['SEO-ready', 'Multi-format', 'Brand voice'],
    },
    {
        icon: '🎯',
        title: 'Lead Generation',
        description: 'Identify, target, and engage high-quality prospects automatically. Our AI enriches data and personalizes outreach for maximum conversion.',
        tags: ['Enrichment', 'Scoring', 'Outreach'],
    },
    {
        icon: '📊',
        title: 'Data Analytics',
        description: 'Transform raw business data into actionable insights with AI-powered dashboards, anomaly detection, and predictive forecasting.',
        tags: ['Real-time', 'Predictive', 'Visual'],
    },
    {
        icon: '⚡',
        title: 'Workflow Automation',
        description: 'Connect your tools and automate complex multi-step processes. Eliminate manual work and let your team focus on what matters.',
        tags: ['No-code', 'Integrations', 'Triggers'],
    },
    {
        icon: '🧠',
        title: 'AI Consulting',
        description: 'Work with our experts to design a custom AI roadmap. We audit your operations and identify the highest-ROI automation opportunities.',
        tags: ['Strategy', 'Roadmap', 'ROI-focused'],
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="badge">What We Do</span>
                    <h2 className="display-lg" style={{ marginTop: '16px', marginBottom: '16px' }}>
                        Intelligent Services <span className="text-gradient">for Growth</span>
                    </h2>
                    <p>Tailored AI solutions to streamline, innovate, and scale your business.</p>
                </motion.div>

                <div className="grid-3col services-grid" style={{ gap: '20px' }}>
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="glass-card"
                            style={{ padding: '28px', cursor: 'default' }}
                        >
                            <div style={{
                                width: '52px', height: '52px', borderRadius: '14px',
                                background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(168,85,247,0.1))',
                                border: '1px solid rgba(124,58,237,0.2)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '1.5rem', marginBottom: '20px',
                            }}>
                                {service.icon}
                            </div>

                            <h3 style={{
                                fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600,
                                fontSize: '1.0625rem', marginBottom: '10px', color: '#f8fafc',
                            }}>
                                {service.title}
                            </h3>

                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '20px' }}>
                                {service.description}
                            </p>

                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                {service.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        style={{
                                            padding: '4px 10px', borderRadius: '9999px',
                                            fontSize: '0.75rem', fontWeight: 500,
                                            background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            color: 'var(--text-secondary)',
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
