import type { Metadata, Viewport } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'PROTOCOL_ZERO | AI Automation Agency',
  description: 'Transform your business with intelligent AI automation. PROTOCOL_ZERO helps founders automate workflows, generate leads, and scale operations with cutting-edge AI solutions.',
  keywords: 'AI automation, workflow automation, AI agency, business automation, artificial intelligence',
  authors: [{ name: 'PROTOCOL_ZERO' }],
  openGraph: {
    title: 'PROTOCOL_ZERO | AI Automation Agency',
    description: 'Transform your business with intelligent AI automation.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050508',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
