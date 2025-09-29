'use client';
import { getCookie } from 'cookies-next';
import { DEFAULT_LANGUAGE } from '@/constants';
import { NextIntlClientProvider as NextIntlClientProviderLibrary } from 'next-intl';
import messagesEN from '../../messages/en.json';
import messagesUA from '../../messages/ua.json';

export default function NextIntlClientProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie = getCookie('locale') || DEFAULT_LANGUAGE;
  const locale: string | undefined = typeof cookie === 'string' ? cookie : undefined;

  return (
    <NextIntlClientProviderLibrary
      locale={locale}
      messages={locale === 'en' ? messagesEN : messagesUA}
    >
      {children}
    </NextIntlClientProviderLibrary>
  );
}
