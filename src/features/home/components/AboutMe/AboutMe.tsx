import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { PrimaryButton, SecondaryButton } from '@/components';
import { AUTHOR } from '@/constants';
import { Typography } from '@/components';

function AboutMe() {
  const t = useTranslations('HomePage');

  return (
    <div className="flex lg:items-center justify-between lg:flex-row lg:px-27 lg:gap-20 pb-16 lg:pb-20 flex-col px-4 border-b-1 border-solid border-grey-600">
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
          <PrimaryButton className="flex lg:px-6 lg:py-5 lg:gap-6 gap-3 items-center uppercase">
            <Typography variant="body2">{t('contactme')}</Typography>
            <span className="w-[10px] h-[10px] bg-black rounded-full" />
          </PrimaryButton>
          <SecondaryButton className="lg:p-4 p-3 rounded-full">
            <Image src="/linkedin.svg" alt="linkedin" width={24} height={24} />
          </SecondaryButton>
          <SecondaryButton className="lg:p-4 p-3 rounded-full">
            <Image src="/github.svg" alt="github" width={24} height={24} />
          </SecondaryButton>
        </div>
      </div>
      <div className="mx-auto relative w-full max-w-[600px] aspect-square">
        <Image
          src={AUTHOR.image}
          alt="author"
          fill
          priority
          className="rounded-2xl object-cover"
        />
      </div>
    </div>
  );
}

export { AboutMe };
