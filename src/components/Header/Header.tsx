import { useTranslations } from 'next-intl';
import cx from 'clsx';
import { Typography } from '../Typography';
import { LanguageSwitcher } from '../LanguageSwitcher';

function Header(props: { className?: string; locale: string }) {
  const t = useTranslations('common');

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
      <LanguageSwitcher locale={props.locale} />
    </div>
  );
}

export { Header };
