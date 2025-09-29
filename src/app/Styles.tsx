'use client';
import './globals.css';
import { Inter, Oswald } from 'next/font/google';

const oswald = Oswald({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-oswald',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function Styles({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={`${oswald.variable} ${inter.variable} antialiased`}>
      {children}
    </body>
  );
}
