import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';
import ArrowSVG from '@/assets/icons/arrow.svg';
import { Typography, PrimaryLink } from '@/components';
import { Project as ProjectType, Locale } from '../../types';

async function Project({ project }: { project: ProjectType }) {
  const t = await getTranslations('HomePage');
  const locale = (await getLocale()) as Locale;
  const translations = project.translations[locale];

  return (
    <div className="flex flex-col xl:flex-row xl:items-center xl:gap-12 gap-10">
      {project.image && (
        <div className="xl:mx-0 mx-auto xl:w-1/2 rounded-2xl relative w-full max-w-[600px] aspect-square bg-grey-600 rounded-2xl overflow-hidden">
          <Image
            src={project.image}
            alt={translations.name}
            fill
            priority
            className="object-contain"
          />
        </div>
      )}
      {project.video && (
        <div className="xl:mx-0 mx-auto xl:w-1/2 rounded-2xl relative bg-grey-600 w-full max-w-[600px] aspect-square">
          <iframe
            tabIndex={-1}
            src={project.video}
            className="absolute inset-0 w-full h-full rounded-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      <div className="xl:w-1/2">
        <Typography className="font-oswald mb-4" variant="heading3">
          {translations.name}
        </Typography>
        <Typography className="text-grey-400 mb-8" variant="body1">
          {translations.description}
        </Typography>
        <div className="flex gap-4 align-items pb-4 border-b-1 border-sold border-grey-800">
          <Typography className="font-oswald uppercase" variant="heading4">
            {t('featuredProjects.projectInfo')}
          </Typography>
          {project.liveLink && (
            <PrimaryLink target={'_blank'} href={project.liveLink}>
              <Typography className="font-oswald uppercase" variant="heading4">
                {t('featuredProjects.view')}
              </Typography>
              <ArrowSVG />
            </PrimaryLink>
          )}
        </div>
        <div className="grid xl:grid-cols-4 grid-cols-15 gap-4 py-4 border-b-1 border-sold border-grey-800">
          <Typography className="xl:col-span-1 col-span-5" variant="body3">
            {t('featuredProjects.technologies')}
          </Typography>
          <Typography
            className="xl:col-span-3 col-span-10 text-grey-400"
            variant="body3"
          >
            {translations.technologies}
          </Typography>
        </div>
        <div className="grid xl:grid-cols-4 grid-cols-15 gap-4 py-4 border-b-1 border-sold border-grey-800">
          <Typography className="xl:col-span-1 col-span-5" variant="body3">
            {t('featuredProjects.responsibilies')}
          </Typography>
          <Typography
            className="xl:col-span-3 col-span-10 text-grey-400"
            variant="body3"
          >
            {translations.responsibilies}
          </Typography>
        </div>
        <div className="grid xl:grid-cols-4 grid-cols-15 gap-4 py-4 border-b-1 border-sold border-grey-800">
          <Typography className="xl:col-span-1 col-span-5" variant="body3">
            {t('featuredProjects.keyFeatures')}
          </Typography>
          <Typography
            className="xl:col-span-3 col-span-10 text-grey-400"
            variant="body3"
          >
            {translations.keyFeatures}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export { Project };
