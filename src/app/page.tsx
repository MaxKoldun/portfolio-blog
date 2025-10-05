import { Header } from '@/components';
import {
  GreetingSection,
  AboutMeSection,
  ConnectSection,
} from '@/features/home';
import { ListProjects } from '@/features/home/components';

export default function Home() {
  return (
    <div>
      <div className="flex flex-col xl:min-h-screen border-b-1 border-solid border-grey-600 lg:mb-20 mb-16">
        <Header className="lg:mb-0 mb-10" />
        <GreetingSection className="xl:mb-auto xl:mt-auto" />
      </div>
      <ListProjects className="lg:mb-20 mb-16" />
      <AboutMeSection className="lg:mb-20 mb-16" />
      <ConnectSection />
    </div>
  );
}
