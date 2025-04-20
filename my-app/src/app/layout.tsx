//my-app\src\app\layout.tsx
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import type { ReactNode } from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'My Portfolio',
  description: 'Mystic jungle-themed software portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative text-white font-sans min-h-screen overflow-x-hidden overflow-y-scroll">
        {/* Background Image */}
        <div className="fixed inset-0 z-0">
          <Image
            src="/Jungle1.png"
            alt="Jungle Background"
            fill
            priority
            className="object-cover object-center will-change-transform"
          />
        </div>

        {/* Overlay and Content */}
        <div className="relative z-10 bg-black/0 min-h-screen">
          <Navbar />
          <main className="pt-24 px-6">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
