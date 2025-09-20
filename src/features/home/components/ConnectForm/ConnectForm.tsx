'use client';

import { useTranslations } from 'next-intl';
import {
  Field,
  Input,
  Textarea,
  PrimaryButton,
  Typography,
} from '@/components';

function ConnectForm({ className }: { className?: string }) {
  const t = useTranslations('HomePage');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(e);
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <Field className="mb-6" label="Name">
        <Input required className="w-full" />
      </Field>
      <Field className="mb-6" label="Email">
        <Input type="email" required className="w-full" />
      </Field>
      <Field className="mb-6" label="Subject">
        <Input required className="w-full" />
      </Field>
      <Field className="xl:mb-10 mb-8" label="Message">
        <Textarea required rows={4} className="w-full" />
      </Field>
      <PrimaryButton className="flex px-10 py-5 items-center uppercase">
        <Typography variant="body2">{t('connect.submit')}</Typography>
      </PrimaryButton>
    </form>
  );
}

export { ConnectForm };
