import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { ToastContainer } from '@/features/toasts';
import SpeedInsights from './SpeedInsights';
import Styles from './Styles';

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
      <Styles>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <ToastContainer />
        <SpeedInsights />
      </Styles>
    </html>
  );
}
