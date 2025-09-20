import cx from 'clsx';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Typography, SecondaryLink } from '@/components';
import { AUTHOR } from '@/constants';
import { ConnectForm } from '../ConnectForm';

export const ConnectSectionId = 'ConnectSectionId';

async function ConnectSection({ className }: { className?: string }) {
  const t = await getTranslations('HomePage');

  return (
    <div
      id={ConnectSectionId}
      className={cx(
        'grid xl:grid-cols-2 xl:px-27 pb-16 xl:pb-20 flex-col px-4',
        className
      )}
    >
      <div className="relative xl:col-span-1 xl:mb-0 mb-16">
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
          <SecondaryLink
            href={AUTHOR.links.linkedin}
            className="xl:p-4 p-3 rounded-full"
          >
            <Image src="/linkedin.svg" alt="linkedin" width={24} height={24} />
          </SecondaryLink>
          <SecondaryLink
            href={AUTHOR.links.github}
            className="xl:p-4 p-3 rounded-full"
          >
            <Image src="/github.svg" alt="github" width={24} height={24} />
          </SecondaryLink>
        </div>
        <Typography
          className="xl:block hidden absolute bottom-0 text-grey-400"
          variant="body1"
        >
          {t('connect.watermark')}
        </Typography>
      </div>
      <ConnectForm className="mb-20 xl:mb-0 xl:col-span-1" />
      <Typography className="xl:hidden block text-grey-400" variant="body1">
        {t('connect.watermark')}
      </Typography>
    </div>
  );
}

export { ConnectSection };
