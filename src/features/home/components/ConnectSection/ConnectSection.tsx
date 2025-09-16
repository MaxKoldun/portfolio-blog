import cx from 'clsx';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Typography, SecondaryButton, Field, Input } from '@/components';

async function ConnectSection({ className }: { className?: string }) {
  const t = await getTranslations('HomePage');

  return (
    <div
      className={cx(
        'grid xl:grid-cols-2 lg:px-27 pb-16 lg:pb-20 flex-col px-4',
        className
      )}
    >
      <div className="xl:col-span-1 xl:mb-0 mb-16">
        <Typography
          className="font-oswald ml-[-0.1rem] mb-4 uppercase"
          variant="heading2"
        >
          {t('connect.title')}
        </Typography>
        <Typography className="mb-2 text-grey-400" variant="body1">
          {t('connect.subtitle1')}
        </Typography>
        <Typography className="mb-10 text-grey-400" variant="body1">
          {t('connect.subtitle2')}
        </Typography>
        <div className="flex gap-4 items-center">
          <SecondaryButton className="lg:p-4 p-3 rounded-full">
            <Image src="/linkedin.svg" alt="linkedin" width={24} height={24} />
          </SecondaryButton>
          <SecondaryButton className="lg:p-4 p-3 rounded-full">
            <Image src="/github.svg" alt="github" width={24} height={24} />
          </SecondaryButton>
        </div>
      </div>
      <div className="xl:col-span-1">
        <Field label="Name">
          <Input />
        </Field>
      </div>
    </div>
  );
}

export { ConnectSection };
