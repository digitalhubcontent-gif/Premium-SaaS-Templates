'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: 'What types of processes can be automated with AI?',
        answer: 'Almost any repetitive, rule-based process — lead qualification, customer support, content creation, data entry, email outreach, reporting, and more. We start with a discovery session to identify your highest-ROI opportunities.',
    },
    {
        question: 'How long does it take to implement AI automation?',
        answer: 'Simple automations can be live within 1–2 weeks. More complex, multi-system workflows typically take 4–8 weeks from discovery to launch. We work in sprints so you see results quickly.',
    },
    {
        question: 'Will AI automation disrupt my current operations?',
        answer: 'No — we design all automations to integrate seamlessly with your existing tools. We run parallel testing before going live and provide full handover documentation.',
    },
    {
        question: 'Do I need technical knowledge to use your solutions?',
        answer: 'Not at all. We handle all technical implementation. Your team interacts with simple dashboards. We also provide training so your team can manage day-to-day operations independently.',
    },
    {
        question: 'What is the typical ROI of AI automation?',
        answer: 'Our clients typically see 30–50% cost reduction and 3–10x productivity gains within the first 90 days. The exact ROI depends on the complexity and volume of processes automated.',
    },
    {
        question: 'What happens after the automation is deployed?',
        answer: 'We provide ongoing monitoring, optimization, and support as part of all plans. You also get regular reports showing efficiency gains and cost savings.',
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="badge">FAQ</span>
                    <h2 className="display-lg" style={{ marginTop: '16px', marginBottom: '16px' }}>
                        Common <span className="text-gradient">Questions</span>
                    </h2>
                    <p>Everything you need to know before getting started.</p>
                </motion.div>

                <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.06 }}
                            style={{
                                borderRadius: '12px',
                                border: `1px solid ${openIndex === i ? 'rgba(124,58,237,0.35)' : 'rgba(255,255,255,0.07)'}`,
                                background: openIndex === i ? 'rgba(124,58,237,0.05)' : 'rgba(13,13,22,0.5)',
                                overflow: 'hidden',
                                transition: 'border-color 0.25s ease, background 0.25s ease',
                            }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                style={{
                                    width: '100%', padding: '20px 24px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                    background: 'transparent', border: 'none', cursor: 'pointer',
                                    textAlign: 'left', gap: '16px',
                                }}
                            >
                                <span style={{ fontWeight: 600, fontSize: '0.9375rem', color: '#f8fafc', fontFamily: 'Inter, sans-serif' }}>
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    style={{
                                        width: '24px', height: '24px', borderRadius: '50%', flexShrink: 0,
                                        background: openIndex === i ? 'linear-gradient(135deg, #7c3aed, #a855f7)' : 'rgba(255,255,255,0.07)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#f8fafc', fontSize: '1.1rem', lineHeight: 1,
                                    }}
                                >
                                    +
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <div style={{ padding: '0 24px 20px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.75 }}>
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
