//my-app\src\app\layout.tsx
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'My Portfolio',
  description: 'Mystic jungle-themed software portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative text-white font-sans min-h-screen overflow-x-hidden">
        {/* Background Image */}
        <div className="fixed inset-0 z-0">
          <img
            src="/Jungle1.png"
            alt="Jungle Background"
            className="w-full h-full object-cover object-center"
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
