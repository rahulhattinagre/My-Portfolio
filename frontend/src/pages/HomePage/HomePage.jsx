import { Hero } from '../../components/Hero/Hero.jsx';
import { About } from '../../components/About/About.jsx';
import { Skills } from '../../components/Skills/Skills.jsx';
import { Projects } from '../../components/Projects/Projects.jsx';
import { Experience } from '../../components/Experience/Experience.jsx';
import { Certificates } from '../../components/Certificates/Certificates.jsx';
import { Contact } from '../../components/Contact/Contact.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import { BackToTop } from '../../components/BackToTop/BackToTop.jsx';

import { LoadingScreen } from '../../components/LoadingScreen/LoadingScreen.jsx';

import { ScrollProgressBar } from '../../components/ScrollProgress/ScrollProgressBar.jsx';

import { Sidebar } from '../../components/Sidebar/Sidebar.jsx';
import { Education } from '../../components/Education/Education.jsx';

export function HomePage() {
  return (
    <div className="relative min-h-screen bg-bg text-white">
      <LoadingScreen />

      <ScrollProgressBar />

      <Sidebar />
      <main className="pl-0 md:pl-[260px]">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <Contact />

        {/* Resume anchor for sidebar */}
        <section id="resume" className="pt-24" aria-hidden="true" />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}










