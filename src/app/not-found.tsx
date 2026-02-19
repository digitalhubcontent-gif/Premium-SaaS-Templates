import Link from 'next/link';

export default function NotFound() {
    return (
        <div style={{
            minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: '#050508', padding: '40px 24px', position: 'relative', overflow: 'hidden',
            textAlign: 'center',
        }}>
            <div aria-hidden="true" style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(6rem, 15vw, 10rem)',
                    fontWeight: 900, letterSpacing: '-0.04em',
                    background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    lineHeight: 1, marginBottom: '16px',
                }}>
                    404
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.125rem', marginBottom: '24px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #a855f7)', boxShadow: '0 0 12px rgba(124,58,237,0.8)', display: 'inline-block' }} />
                    PROTOCOL_ZERO
                </div>

                <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.75rem', fontWeight: 700, color: '#f8fafc', marginBottom: '12px' }}>
                    Page Not Found
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '400px', margin: '0 auto 40px', lineHeight: 1.7 }}>
                    The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
                </p>

                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/" className="btn btn-primary btn-lg">
                        Back to Home
                    </Link>
                    <Link href="#contact" className="btn btn-secondary btn-lg">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}
