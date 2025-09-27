'use client';
import { useLocale } from 'next-intl';
import { ChangeEvent } from 'react';
import { setLocaleCookie } from '@/actions';
import { Select } from '../Select';
import { LANGUAGES } from '@/constants';

function LanguageSwitcher() {
  const locale = useLocale();

  function handleUpdateLocale(e: ChangeEvent<HTMLSelectElement>) {
    setLocaleCookie(e.target.value);
  }

  return (
    <Select
      ariaLabel="language-switcher"
      value={locale}
      onChange={handleUpdateLocale}
      list={LANGUAGES}
    />
  );
}

export { LanguageSwitcher };
