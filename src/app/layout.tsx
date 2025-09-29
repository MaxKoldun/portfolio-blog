import type { Metadata } from 'next';
// import { NextIntlClientProvider } from 'next-intl';
import NextIntlClientProvider from './NextIntlClientProvider';
import { ToastContainer } from '@/features/toasts';
import { Inter, Oswald } from 'next/font/google';
import SpeedInsights from './SpeedInsights';
import './globals.css';

const oswald = Oswald({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-oswald',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Portfolio - Maksym Koldun',
  description: 'Maksym Koldun - Frontend Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${inter.variable} antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <ToastContainer />
        <SpeedInsights />
      </body>
    </html>
  );
}
