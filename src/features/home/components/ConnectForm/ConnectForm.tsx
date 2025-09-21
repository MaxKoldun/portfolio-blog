'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useShowToast, TOAST_TYPES } from '@/features/toasts';
import {
  Field,
  Input,
  Textarea,
  PrimaryButton,
  Typography,
} from '@/components';

function ConnectForm({ className }: { className?: string }) {
  const t = useTranslations('HomePage');
  const [resetForm, setResetForm] = useState(0);
  const [loading, setLoading] = useState(false);
  const showToast = useShowToast();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    try {
      setLoading(true);
      const response = await fetch('/api/mail', {
        method: 'POST',
        next: { revalidate: false },
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      setResetForm((prev) => prev + 1);
      showToast(TOAST_TYPES.SUCCESS, { title: t('connect.messageSent') });
    } catch (err) {
      console.log(err);
      showToast(TOAST_TYPES.ERROR, { title: t('connect.errorSendMessage') });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form key={resetForm} onSubmit={handleSubmit} className={className}>
      <Field className="mb-6" label="Name">
        <Input name="name" required className="w-full" />
      </Field>
      <Field className="mb-6" label="Email">
        <Input name="email" type="email" required className="w-full" />
      </Field>
      <Field className="mb-6" label="Subject">
        <Input name="subject" required className="w-full" />
      </Field>
      <Field className="xl:mb-10 mb-8" label="Message">
        <Textarea name="message" required rows={4} className="w-full" />
      </Field>
      <PrimaryButton
        loading={loading}
        className="flex px-10 py-5 items-center uppercase"
      >
        <Typography variant="body2">{t('connect.submit')}</Typography>
      </PrimaryButton>
    </form>
  );
}

export { ConnectForm };
