'use client';

import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
};

export default function HeroSection() {
    return (
        <section
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                padding: '120px 24px 80px',
            }}
        >
            {/* Background orbs */}
            <div aria-hidden="true">
                <div style={{
                    position: 'absolute', top: '15%', left: '10%',
                    width: '500px', height: '500px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
                    filter: 'blur(40px)', animation: 'pulse-glow 4s ease-in-out infinite',
                }} />
                <div style={{
                    position: 'absolute', bottom: '20%', right: '8%',
                    width: '400px', height: '400px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
                    filter: 'blur(40px)', animation: 'pulse-glow 5s ease-in-out infinite 1s',
                }} />
                <div style={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: '800px', height: '800px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 60%)',
                    filter: 'blur(60px)',
                }} />
            </div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>

                    {/* Left: Text */}
                    <div>
                        <motion.div
                            custom={0} initial="hidden" animate="visible" variants={fadeUp}
                            style={{ marginBottom: '24px' }}
                        >
                            <span className="badge">
                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a855f7', display: 'inline-block', animation: 'pulse-glow 2s infinite' }} />
                                AI-Powered Automation
                            </span>
                        </motion.div>

                        <motion.h1
                            custom={1} initial="hidden" animate="visible" variants={fadeUp}
                            className="display-xl"
                            style={{ marginBottom: '24px' }}
                        >
                            Automate.{' '}
                            <span className="text-gradient">Accelerate.</span>
                            {' '}Dominate.
                        </motion.h1>

                        <motion.p
                            custom={2} initial="hidden" animate="visible" variants={fadeUp}
                            style={{
                                fontSize: '1.125rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.75,
                                marginBottom: '40px',
                                maxWidth: '480px',
                            }}
                        >
                            We help founders like you eliminate repetitive work and scale faster with intelligent AI systems built for your business.
                        </motion.p>

                        <motion.div
                            custom={3} initial="hidden" animate="visible" variants={fadeUp}
                            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
                        >
                            <a href="#services" className="btn btn-primary btn-lg">
                                Start Automating
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                            <a href="#process" className="btn btn-secondary btn-lg">
                                See How It Works
                            </a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            custom={4} initial="hidden" animate="visible" variants={fadeUp}
                            style={{
                                display: 'flex', gap: '40px', marginTop: '56px',
                                paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.06)',
                            }}
                        >
                            {[
                                { value: '200+', label: 'Workflows Automated' },
                                { value: '48%', label: 'Avg. Cost Reduction' },
                                { value: '3x', label: 'Faster Operations' },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.75rem', fontWeight: 700, color: '#f8fafc', letterSpacing: '-0.02em' }}>
                                        {stat.value}
                                    </div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Animated UI Card */}
                    <motion.div
                        className="hero-card"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{ position: 'relative', animation: 'float 6s ease-in-out infinite' }}
                    >
                        {/* Main card */}
                        <div className="glass-card" style={{ padding: '28px', position: 'relative' }}>
                            {/* Card header */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                                <div style={{ display: 'flex', gap: '6px' }}>
                                    {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
                                        <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
                                    ))}
                                </div>
                                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
                                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>protocol_zero.ai</span>
                            </div>

                            {/* Workflow visualization */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {[
                                    { label: 'Lead Capture', status: 'Active', color: '#22c55e' },
                                    { label: 'AI Qualification', status: 'Processing', color: '#a855f7' },
                                    { label: 'CRM Sync', status: 'Active', color: '#22c55e' },
                                    { label: 'Email Sequence', status: 'Scheduled', color: '#3b82f6' },
                                    { label: 'Analytics Report', status: 'Active', color: '#22c55e' },
                                ].map((item, i) => (
                                    <div
                                        key={item.label}
                                        style={{
                                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                            padding: '12px 16px', borderRadius: '10px',
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.05)',
                                            animation: `pulse-glow ${2 + i * 0.3}s ease-in-out infinite ${i * 0.2}s`,
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: item.color, boxShadow: `0 0 8px ${item.color}` }} />
                                            <span style={{ fontSize: '0.875rem', color: '#f8fafc', fontWeight: 500 }}>{item.label}</span>
                                        </div>
                                        <span style={{ fontSize: '0.75rem', color: item.color, fontWeight: 500 }}>{item.status}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom stat */}
                            <div style={{
                                marginTop: '20px', padding: '16px',
                                background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(168,85,247,0.08))',
                                borderRadius: '10px', border: '1px solid rgba(124,58,237,0.2)',
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            }}>
                                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Efficiency gain this week</span>
                                <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: '#a855f7', fontSize: '1.25rem' }}>+34%</span>
                            </div>
                        </div>

                        {/* Floating mini card */}
                        <div
                            className="glass-card"
                            style={{
                                position: 'absolute', bottom: '-24px', left: '-24px',
                                padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px',
                                animation: 'float 4s ease-in-out infinite 1s',
                            }}
                        >
                            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #7c3aed, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
                                🤖
                            </div>
                            <div>
                                <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#f8fafc' }}>AI Agent Active</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Processing 12 tasks</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                style={{
                    position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
                    color: 'var(--text-muted)', fontSize: '0.75rem',
                }}
            >
                <span>Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{ width: '20px', height: '32px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', display: 'flex', justifyContent: 'center', paddingTop: '6px' }}
                >
                    <div style={{ width: '3px', height: '8px', background: 'var(--accent-purple)', borderRadius: '2px' }} />
                </motion.div>
            </motion.div>

        </section>
    );
}
