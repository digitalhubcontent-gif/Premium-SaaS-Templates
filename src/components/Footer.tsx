'use client';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const sections = [
        { label: 'Process', href: '#process' },
        { label: 'Services', href: '#services' },
        { label: 'Benefits', href: '#benefits' },
        { label: 'Plans', href: '#plans' },
        { label: 'Contact', href: '#contact' },
    ];

    const pages = [
        { label: 'Home', href: '/' },
        { label: 'Coming Soon', href: '/coming-soon' },
    ];

    return (
        <footer
            style={{
                borderTop: '1px solid rgba(255,255,255,0.06)',
                padding: '64px 24px 32px',
                background: 'rgba(5,5,8,0.9)',
            }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '48px',
                        marginBottom: '48px',
                    }}
                >
                    {/* Brand */}
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontFamily: 'Space Grotesk, sans-serif',
                                fontWeight: 700,
                                fontSize: '1.125rem',
                                letterSpacing: '-0.02em',
                                marginBottom: '16px',
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
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '260px' }}>
                            Your trusted partner in AI automation. Building smarter systems for smarter businesses.
                        </p>
                    </div>

                    {/* Sections */}
                    <div>
                        <h4 style={{ fontWeight: 600, marginBottom: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                            Sections
                        </h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {sections.map((s) => (
                                <li key={s.href}>
                                    <a
                                        href={s.href}
                                        style={{
                                            color: 'var(--text-secondary)',
                                            fontSize: '0.9375rem',
                                            transition: 'color 0.2s ease',
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = '#f8fafc')}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                                    >
                                        {s.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pages */}
                    <div>
                        <h4 style={{ fontWeight: 600, marginBottom: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                            Pages
                        </h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {pages.map((p) => (
                                <li key={p.href}>
                                    <a
                                        href={p.href}
                                        style={{
                                            color: 'var(--text-secondary)',
                                            fontSize: '0.9375rem',
                                            transition: 'color 0.2s ease',
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = '#f8fafc')}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                                    >
                                        {p.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontWeight: 600, marginBottom: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                            Contact
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {[
                                { icon: '✉', text: 'hello@protocolzero.ai' },
                                { icon: '📞', text: '+1 (555) 000-0000' },
                                { icon: '📍', text: 'San Francisco, CA' },
                            ].map((item) => (
                                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                    <span>{item.icon}</span>
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        borderTop: '1px solid rgba(255,255,255,0.06)',
                        paddingTop: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '12px',
                    }}
                >
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                        © {currentYear} PROTOCOL_ZERO. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        {['Privacy Policy', 'Terms of Service'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                style={{
                                    color: 'var(--text-muted)',
                                    fontSize: '0.875rem',
                                    transition: 'color 0.2s ease',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#f8fafc')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
