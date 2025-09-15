import cx from 'clsx';
import Image from 'next/image';
import { PrimaryButton, SecondaryButton } from '@/components';
import { Typography } from '@/components';
import { getTranslations } from 'next-intl/server';

async function AboutMeSection({ className }: { className?: string }) {
  const t = await getTranslations('HomePage');

  return (
    <div
      className={cx(
        'xl:grid xl:grid-cols-5 lg:px-27 lg:gap-20 pb-16 lg:pb-40 flex-col px-4 border-b-1 border-solid border-grey-600',
        className
      )}
    >
      <Typography
        className="xl:!leading-[1] xl:col-span-2 col-span-5 font-oswald mb-3 lg:mb-2 uppercase"
        variant="heading1"
      >
        {t('aboutme.title')}
      </Typography>
      <div className="xl:col-span-3 flex flex-col gap-4 lg:mb-0 mb-16">
        <Typography className="font-oswald mb-4" variant="heading3">
          {t.rich('aboutme.subtitle', {
            br: () => <br />,
          })}
        </Typography>
        <Typography className="text-grey-400 mb-8" variant="body1">
          {t('aboutme.description')}
        </Typography>
      </div>
    </div>
  );
}

export { AboutMeSection };
