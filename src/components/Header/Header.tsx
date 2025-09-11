import { Typography } from '../Typography';
import { useTranslations } from 'next-intl';

function Header() {
  const t = useTranslations('common');

  return (
    <div className="lg:px-15 px-4 lg:py-7.5 py-6">
      <Typography className="font-bebas-neue text-grey-400 uppercase" variant="title3">
        {t('author')}
      </Typography>
    </div>
  );
}

export { Header };
