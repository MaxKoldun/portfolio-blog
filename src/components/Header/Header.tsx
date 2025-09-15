import { getTranslations } from 'next-intl/server';
import cx from 'clsx';
import { Typography } from '../Typography';
import { LanguageSwitcher } from '../LanguageSwitcher';

async function Header(props: { className?: string }) {
  const t = await getTranslations('common');

  return (
    <div
      className={cx(
        'lg:px-15 flex items-center justify-between px-4 lg:py-7.5 py-5',
        props.className
      )}
    >
      <Typography
        className={'font-oswald text-grey-400 uppercase'}
        variant="title3"
      >
        {t('author')}
      </Typography>
      <LanguageSwitcher />
    </div>
  );
}

export { Header };
