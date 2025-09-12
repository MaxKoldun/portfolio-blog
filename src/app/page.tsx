import { Header } from '@/components';
import { getDefaultLanguage } from '@/actions';
import { AboutMe } from '@/features/home';

export default async function Home() {
  const locale = await getDefaultLanguage();

  return (
    <div>
      <Header className="lg:mb-0 mb-10" locale={locale} />
      <AboutMe />
    </div>
  );
}
