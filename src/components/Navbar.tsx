'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { label: 'Process', href: '#process' },
    { label: 'Services', href: '#services' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Plans', href: '#plans' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <nav
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    padding: '0 24px',
                    transition: 'all 0.3s ease',
                    background: scrolled
                        ? 'rgba(5, 5, 8, 0.85)'
                        : 'transparent',
                    backdropFilter: scrolled ? 'blur(20px)' : 'none',
                    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
                }}
            >
                <div
                    style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        height: '72px',
                    }}
                >
                    {/* Logo */}
                    <a
                        href="/"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontFamily: 'Space Grotesk, sans-serif',
                            fontWeight: 700,
                            fontSize: '1.125rem',
                            letterSpacing: '-0.02em',
                            color: '#f8fafc',
                        }}
                    >
                        <span
                            style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                                boxShadow: '0 0 12px rgba(124,58,237,0.8)',
                                display: 'inline-block',
                            }}
                        />
                        PROTOCOL_ZERO
                    </a>

                    {/* Desktop Nav */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                        }}
                        className="desktop-nav"
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                style={{
                                    padding: '8px 16px',
                                    borderRadius: '9999px',
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    color: 'rgba(248,250,252,0.7)',
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'color 0.2s ease',
                                    fontFamily: 'Inter, sans-serif',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#f8fafc')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248,250,252,0.7)')}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* CTA */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <button
                            onClick={() => handleNavClick('#contact')}
                            className="btn btn-primary"
                            style={{ padding: '10px 22px', fontSize: '0.875rem' }}
                        >
                            Get Started
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            style={{
                                display: 'none',
                                flexDirection: 'column',
                                gap: '5px',
                                padding: '8px',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                            className="mobile-menu-btn"
                            aria-label="Toggle menu"
                        >
                            <span style={{ width: '22px', height: '2px', background: '#f8fafc', display: 'block', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
                            <span style={{ width: '22px', height: '2px', background: '#f8fafc', display: 'block', transition: 'all 0.3s', opacity: mobileOpen ? 0 : 1 }} />
                            <span style={{ width: '22px', height: '2px', background: '#f8fafc', display: 'block', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: 'fixed',
                            top: '72px',
                            left: 0,
                            right: 0,
                            zIndex: 999,
                            background: 'rgba(5, 5, 8, 0.97)',
                            backdropFilter: 'blur(20px)',
                            borderBottom: '1px solid rgba(255,255,255,0.06)',
                            padding: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                        }}
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                style={{
                                    padding: '14px 16px',
                                    borderRadius: '12px',
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    color: '#f8fafc',
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    fontFamily: 'Inter, sans-serif',
                                    transition: 'background 0.2s ease',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(124,58,237,0.1)')}
                                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                            >
                                {link.label}
                            </button>
                        ))}
                        <button
                            onClick={() => handleNavClick('#contact')}
                            className="btn btn-primary"
                            style={{ marginTop: '8px', justifyContent: 'center' }}
                        >
                            Get Started
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
}
