'use client';

import { PrimaryButton } from '@/components';
import { Typography } from '@/components';
import { ConnectSectionId } from '../ConnectSection';
import { useTranslations } from 'next-intl';

function ContactMeButton() {
  const t = useTranslations('HomePage');

  function handleContactMe() {
    const connectSection = document.getElementById(ConnectSectionId);

    if (connectSection) {
      connectSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }

  return (
    <PrimaryButton
      onClick={handleContactMe}
      className="flex lg:px-6 lg:py-5 lg:gap-6 gap-3 items-center uppercase"
    >
      <Typography variant="body2">{t('contactme')}</Typography>
      <span className="w-[10px] h-[10px] bg-black rounded-full" />
    </PrimaryButton>
  );
}

export { ContactMeButton };
