import './globals.css';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import ClientBody from './ClientBody';

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
});

export const metadata: Metadata = {
  title: 'North - Architecture Template',
  description: 'North Architecture - Modern Architecture and Design Firm',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${urbanist.variable}`}>
      <body className="bg-white min-h-screen font-sans antialiased">
        <ClientBody>
          {children}
        </ClientBody>
      </body>
    </html>
  );
}
