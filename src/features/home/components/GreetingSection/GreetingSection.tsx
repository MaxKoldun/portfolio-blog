import cx from 'clsx';
import Image from 'next/image';
import { SecondaryLink } from '@/components';
import { breakpoints } from '@/constants/breakpoints';
import { AUTHOR } from '@/constants';
import { Typography } from '@/components';
import { getTranslations } from 'next-intl/server';
import { ContactMeButton } from '../ContactMeButton';

async function GreetingSection({ className }: { className?: string }) {
  const t = await getTranslations('HomePage');

  return (
    <div
      className={cx(
        'flex lg:items-center justify-between lg:flex-row lg:px-27 lg:gap-20 pb-16 lg:pb-20 flex-col px-4 border-b-1 border-solid border-grey-600',
        className
      )}
    >
      <div>
        <Typography
          className="font-oswald mb-3 lg:mb-2 uppercase"
          variant="heading1"
        >
          {t.rich('title', {
            br: () => <br />,
          })}
        </Typography>
        <Typography className="text-grey-400 mb-8 lg:mb-10" variant="body1">
          {t('subtitle')}
        </Typography>
        <div className="flex gap-4 items-center lg:mb-0 mb-16">
          <ContactMeButton />
          <SecondaryLink
            href={AUTHOR.links.linkedin}
            className="lg:p-4 p-3 rounded-full"
          >
            <Image src="/linkedin.svg" alt="linkedin" width={24} height={24} />
          </SecondaryLink>
          <SecondaryLink
            href={AUTHOR.links.github}
            className="lg:p-4 p-3 rounded-full"
          >
            <Image src="/github.svg" alt="github" width={24} height={24} />
          </SecondaryLink>
        </div>
      </div>
      <div className="mx-auto relative w-full max-w-[600px] aspect-square">
        <Image
          src={AUTHOR.image}
          alt="author"
          fill
          priority
          fetchPriority="high"
          className="rounded-2xl object-cover"
          sizes={`(max-width: ${breakpoints.sm}) 400px, (max-width: ${breakpoints.lg}) 600px, 600px`}
        />
      </div>
    </div>
  );
}

export { GreetingSection };
