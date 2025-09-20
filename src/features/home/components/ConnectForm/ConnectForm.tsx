import { getTranslations } from 'next-intl/server';
import {
  Field,
  Input,
  Textarea,
  PrimaryButton,
  Typography,
} from '@/components';

async function ConnectForm({ className }: { className?: string }) {
  const t = await getTranslations('HomePage');

  return (
    <form className={className}>
      <Field className="mb-6" label="Name">
        <Input className="w-full" />
      </Field>
      <Field className="mb-6" label="Email">
        <Input className="w-full" />
      </Field>
      <Field className="mb-6" label="Subject">
        <Input className="w-full" />
      </Field>
      <Field className="xl:mb-10 mb-8" label="Message">
        <Textarea rows={4} className="w-full" />
      </Field>
      <PrimaryButton className="flex px-10 py-5 items-center uppercase">
        <Typography variant="body2">{t('connect.submit')}</Typography>
      </PrimaryButton>
    </form>
  );
}

export { ConnectForm };
