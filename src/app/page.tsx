import { Header } from '@/components';
import { GreetingSection, AboutMeSection } from '@/features/home';
import { ListProjects } from '@/features/home/components';

export default function Home() {
  return (
    <div>
      <Header className="lg:mb-0 mb-10" />
      <GreetingSection className="lg:mb-20 mb-16" />
      <ListProjects className="lg:mb-20 mb-16" />
      <AboutMeSection />
    </div>
  );
}
