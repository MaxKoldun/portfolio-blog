'use server';

import { cookies } from 'next/headers';
import { DEFAULT_LANGUAGE } from '@/constants';

export async function setLocaleCookie(locale: string) {
  const store = await cookies();
  store.set('locale', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  });
}
export async function getDefaultLanguage() {
  const store = await cookies();
  const locale = store.get('locale')?.value || DEFAULT_LANGUAGE;

  return locale;
}
