'use client';

import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "PROTOCOL_ZERO transformed how we handle lead generation. Our pipeline grew 3x in just 60 days with zero extra headcount.",
        name: "Dean Watson",
        role: "Managing Director",
        company: "Farmland Co.",
        initials: "DW",
        color: "#7c3aed",
    },
    {
        quote: "The AI chatbot they built handles 80% of our customer queries automatically. Our support team now focuses on complex issues only.",
        name: "Emily Zhang",
        role: "CEO",
        company: "FutureSync",
        initials: "EZ",
        color: "#3b82f6",
    },
    {
        quote: "Their workflow automation saved us 40+ hours per week. The ROI was clear within the first month of deployment.",
        name: "James Carter",
        role: "Marketing Director",
        company: "Innolystic",
        initials: "JC",
        color: "#a855f7",
    },
    {
        quote: "Working with PROTOCOL_ZERO has been seamless. Their solutions are both innovative and incredibly practical for our operations.",
        name: "Liam Walker",
        role: "Product Manager",
        company: "BrightPath",
        initials: "LW",
        color: "#06b6d4",
    },
    {
        quote: "Thanks to their AI content system, we publish 10x more content without increasing our team size. Game-changing.",
        name: "Miguel Torres",
        role: "IT Consultant",
        company: "AlphaEdge",
        initials: "MT",
        color: "#f59e0b",
    },
    {
        quote: "The data analytics dashboard they built gives us insights we never had before. Decision-making has never been faster.",
        name: "Priya Sharma",
        role: "Founder",
        company: "NexGen",
        initials: "PS",
        color: "#10b981",
    },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
    return (
        <div
            className="glass-card"
            style={{
                padding: '28px', minWidth: '340px', maxWidth: '340px',
                flexShrink: 0, cursor: 'default',
            }}
        >
            {/* Stars */}
            <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                ))}
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '24px', fontStyle: 'italic' }}>
                &ldquo;{testimonial.quote}&rdquo;
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: `linear-gradient(135deg, ${testimonial.color}, ${testimonial.color}88)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: '0.875rem', color: '#fff', flexShrink: 0,
                }}>
                    {testimonial.initials}
                </div>
                <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#f8fafc' }}>{testimonial.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{testimonial.role} · {testimonial.company}</div>
                </div>
            </div>
        </div>
    );
}

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="section" style={{ background: 'rgba(10,10,18,0.5)', overflow: 'hidden' }}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="badge">Testimonials</span>
                    <h2 className="display-lg" style={{ marginTop: '16px', marginBottom: '16px' }}>
                        Trusted by <span className="text-gradient">Industry Leaders</span>
                    </h2>
                    <p>Discover how we&apos;ve driven growth and innovation for our clients.</p>
                </motion.div>
            </div>

            {/* Row 1 — left to right */}
            <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)', marginBottom: '20px' }}>
                <div style={{ display: 'flex', gap: '20px', animation: 'marquee 30s linear infinite', width: 'max-content' }}>
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <TestimonialCard key={i} testimonial={t} />
                    ))}
                </div>
            </div>

            {/* Row 2 — right to left */}
            <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)' }}>
                <div style={{ display: 'flex', gap: '20px', animation: 'marquee-reverse 25s linear infinite', width: 'max-content' }}>
                    {[...testimonials.slice(3), ...testimonials.slice(3)].map((t, i) => (
                        <TestimonialCard key={i} testimonial={t} />
                    ))}
                </div>
            </div>
        </section>
    );
}
