'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="contact" className="section" style={{ background: 'rgba(10,10,18,0.5)' }}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="badge">Get In Touch</span>
                    <h2 className="display-lg" style={{ marginTop: '16px', marginBottom: '16px' }}>
                        Let&apos;s Build Something <span className="text-gradient">Great</span>
                    </h2>
                    <p>Have questions or ready to start? Reach out and we&apos;ll respond within 24 hours.</p>
                </motion.div>

                <div className="contact-grid">
                    {/* Contact info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {[
                                { icon: '✉️', label: 'Email', value: 'hello@protocolzero.ai' },
                                { icon: '📞', label: 'Phone', value: '+1 (555) 000-0000' },
                                { icon: '📍', label: 'Location', value: 'San Francisco, CA' },
                                { icon: '🕐', label: 'Response Time', value: 'Within 24 hours' },
                            ].map((item) => (
                                <div key={item.label} className="glass-card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <div style={{
                                        width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                                        background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(168,85,247,0.1))',
                                        border: '1px solid rgba(124,58,237,0.2)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem',
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '2px', fontWeight: 500 }}>{item.label}</div>
                                        <div style={{ fontSize: '0.9375rem', color: '#f8fafc', fontWeight: 500 }}>{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="glass-card"
                        style={{ padding: '36px' }}
                    >
                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '40px 0' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '1.25rem', marginBottom: '12px', color: '#f8fafc' }}>
                                    Message Sent!
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                    We&apos;ll get back to you within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div className="form-row">
                                    {[
                                        { id: 'name', label: 'Full Name', placeholder: 'John Smith', type: 'text' },
                                        { id: 'email', label: 'Email Address', placeholder: 'john@company.com', type: 'email' },
                                    ].map((field) => (
                                        <div key={field.id}>
                                            <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                                                {field.label}
                                            </label>
                                            <input
                                                type={field.type}
                                                placeholder={field.placeholder}
                                                required
                                                value={formData[field.id as keyof typeof formData]}
                                                onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                                                style={{
                                                    width: '100%', padding: '12px 16px', borderRadius: '10px',
                                                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                                                    color: '#f8fafc', fontSize: '0.9rem', outline: 'none',
                                                    transition: 'border-color 0.2s ease',
                                                }}
                                                onFocus={(e) => (e.target.style.borderColor = 'rgba(124,58,237,0.5)')}
                                                onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                                        Company (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your Company"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        style={{
                                            width: '100%', padding: '12px 16px', borderRadius: '10px',
                                            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                                            color: '#f8fafc', fontSize: '0.9rem', outline: 'none',
                                        }}
                                        onFocus={(e) => (e.target.style.borderColor = 'rgba(124,58,237,0.5)')}
                                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                                        Message
                                    </label>
                                    <textarea
                                        placeholder="Tell us about your project and automation goals..."
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        style={{
                                            width: '100%', padding: '12px 16px', borderRadius: '10px',
                                            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                                            color: '#f8fafc', fontSize: '0.9rem', outline: 'none', resize: 'vertical',
                                        }}
                                        onFocus={(e) => (e.target.style.borderColor = 'rgba(124,58,237,0.5)')}
                                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', padding: '14px' }}>
                                    Send Message
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                    </svg>
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>

        </section>
    );
}
