import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Movie List',
  description: 'Site with your favourite movies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-7xl mx-auto bg-[#0F1117]">
          <Hero />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
