'use client';
import { ChangeEvent } from 'react';
import { setLocaleCookie } from '@/actions';
import { Select } from '../Select';
import { LANGUAGES } from '@/constants';

function LanguageSwitcher(props: { locale: string }) {
  function handleUpdateLocale(e: ChangeEvent<HTMLSelectElement>) {
    setLocaleCookie(e.target.value);
  }

  return (
    <Select
      value={props.locale}
      onChange={handleUpdateLocale}
      list={LANGUAGES}
    />
  );
}

export { LanguageSwitcher };
