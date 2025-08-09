import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import WorksSection from './components/WorksSecction';

export default function Home() {
  return (
    <>
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen">
      <main className="flex flex-col row-start-2 items-center sm:items-start min-w-[100vw]">
       <HeroSection/> 
       <AboutSection/>
       <SkillsSection/>
       <WorksSection/>
      </main>
    </div>
    </>
  );
}
