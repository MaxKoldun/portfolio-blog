import cx from 'clsx';
import { getTranslations } from 'next-intl/server';
import { Typography } from '@/components';
import { projects } from '@/constants/projects';
import { Project } from '../Project';

async function ListProjects({ className }: { className?: string }) {
  const t = await getTranslations('HomePage');

  return (
    <div
      className={cx(
        'flex justify-between lg:px-27 pb-16 lg:pb-20 flex-col px-4 border-b-1 border-solid border-grey-600',
        className
      )}
    >
      <div className="lg:mb-20 mb-16">
        <Typography
          className="font-oswald mb-3 lg:mb-2 uppercase"
          variant="heading2"
        >
          {t('featuredProjects.title')}
        </Typography>
        <Typography className="text-grey-400 mb-8 lg:mb-10" variant="body1">
          {t('featuredProjects.subtitle')}
        </Typography>
      </div>
      <div className="flex flex-col gap-24 lg:gap-30">
        {projects.map((item) => (
          <Project key={item.id} project={item} />
        ))}
      </div>
    </div>
  );
}

export { ListProjects };
