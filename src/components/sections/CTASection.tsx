'use client';

import { motion } from 'framer-motion';

export default function CTASection() {
    return (
        <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background glow */}
            <div aria-hidden="true" style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="cta-box"
                    style={{
                        textAlign: 'center', padding: '80px 40px',
                        borderRadius: '24px',
                        background: 'rgba(13,13,22,0.7)',
                        border: '1px solid rgba(124,58,237,0.2)',
                        backdropFilter: 'blur(20px)',
                        boxShadow: '0 0 80px rgba(124,58,237,0.1)',
                    }}
                >
                    <span className="badge" style={{ marginBottom: '24px', display: 'inline-flex' }}>
                        Ready to Start?
                    </span>
                    <h2 className="display-lg" style={{ marginBottom: '20px' }}>
                        Ready to Transform <span className="text-gradient">Your Business?</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '520px', margin: '0 auto 40px', lineHeight: 1.7 }}>
                        Hop on a free 30-minute call with our team. We&apos;ll map out your biggest automation opportunities — no commitment required.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#contact" className="btn btn-primary btn-lg">
                            Schedule a Free Call
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="#services" className="btn btn-secondary btn-lg">
                            Explore Services
                        </a>
                    </div>
                    <p style={{ marginTop: '20px', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                        ✓ Free consultation &nbsp;·&nbsp; ✓ No credit card required &nbsp;·&nbsp; ✓ Results in 30 days
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
