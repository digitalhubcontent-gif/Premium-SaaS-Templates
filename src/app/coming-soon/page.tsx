'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

function useCountdown(targetDate: Date) {
    const [timeLeft, setTimeLeft] = useState(() => {
        const diff = targetDate.getTime() - Date.now();
        if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
        };
    });

    useEffect(() => {
        const calc = () => {
            const diff = targetDate.getTime() - Date.now();
            if (diff <= 0) return;
            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            });
        };
        const id = setInterval(calc, 1000);
        return () => clearInterval(id);
    }, [targetDate]);

    return timeLeft;
}

export default function ComingSoonPage() {
    const launchDate = useMemo(() => new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), []);
    const { days, hours, minutes, seconds } = useCountdown(launchDate);
    const [email, setEmail] = useState('');
    const [joined, setJoined] = useState(false);

    return (
        <div style={{
            minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: '#050508', padding: '24px 20px', position: 'relative', overflow: 'hidden',
        }}>
            {/* Orbs */}
            <div aria-hidden="true">
                <div style={{ position: 'absolute', top: '20%', left: '15%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)', filter: 'blur(40px)' }} />
                <div style={{ position: 'absolute', bottom: '20%', right: '15%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }} />
            </div>

            <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.125rem', marginBottom: '48px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #a855f7)', boxShadow: '0 0 12px rgba(124,58,237,0.8)', display: 'inline-block' }} />
                        PROTOCOL_ZERO
                    </div>

                    <span className="badge" style={{ marginBottom: '24px', display: 'inline-flex' }}>Something Big Is Coming</span>

                    <h1 className="display-lg" style={{ marginBottom: '20px', color: '#f8fafc' }}>
                        We&apos;re <span className="text-gradient">Launching Soon</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.7, marginBottom: '48px' }}>
                        We&apos;re putting the finishing touches on something extraordinary. Join the waitlist to be first in line.
                    </p>

                    {/* Countdown */}
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '48px', flexWrap: 'wrap' }}>
                        {[
                            { value: days, label: 'Days' },
                            { value: hours, label: 'Hours' },
                            { value: minutes, label: 'Minutes' },
                            { value: seconds, label: 'Seconds' },
                        ].map((item) => (
                            <div key={item.label} style={{
                                padding: '16px 12px', minWidth: '72px', flex: '1 1 60px', maxWidth: '120px',
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-card)',
                                borderRadius: 'var(--radius-lg)',
                                backdropFilter: 'blur(20px)',
                            }}>
                                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1.4rem, 5vw, 2rem)', fontWeight: 700, color: '#f8fafc', letterSpacing: '-0.02em' }}>
                                    {String(item.value).padStart(2, '0')}
                                </div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Email form */}
                    {joined ? (
                        <div className="glass-card" style={{ padding: '24px', display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
                            <span style={{ fontSize: '1.5rem' }}>🎉</span>
                            <span style={{ color: '#f8fafc', fontWeight: 500 }}>You&apos;re on the list! We&apos;ll notify you at launch.</span>
                        </div>
                    ) : (
                        <form
                            onSubmit={(e) => { e.preventDefault(); setJoined(true); }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '440px', margin: '0 auto' }}
                        >
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    width: '100%', padding: '14px 18px', borderRadius: '9999px',
                                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                                    color: '#f8fafc', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box',
                                }}
                            />
                            <button type="submit" className="btn btn-primary" style={{ whiteSpace: 'nowrap', justifyContent: 'center' }}>
                                Notify Me
                            </button>
                        </form>
                    )}

                    <div style={{ marginTop: '48px' }}>
                        <a href="/" style={{ color: 'var(--text-muted)', fontSize: '0.875rem', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2px' }}>
                            ← Back to Home
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
