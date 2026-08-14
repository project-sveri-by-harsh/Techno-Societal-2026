import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CallForPapers from './components/CallForPapers';
import ImportantDates from './components/ImportantDates';
import Registration from './components/Registration';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
// import Downloads from './components/Downloads';
import Gallery from './components/Gallery';
import Venue from './components/Venue';
import Contact from './components/Contact';
import Committee from './components/Committee';
import Footer from './components/Footer';
import Editors from './components/Editors';
import ScrollReveal from './components/ScrollReveal';
import AnnouncementBanner from './components/AnnouncementBanner';
import ScrollProgress from './components/ScrollProgress';
import Acknowledgement from './components/Acknowledgement';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (currentPath === '/acknowledgement') {
    return (
      <div className="min-h-screen">
        <ScrollProgress />
        <Navbar />
        <main className="pt-16">
          <Acknowledgement />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <AnnouncementBanner />
      <Navbar />

      <main>
        <Hero />

        <ScrollReveal>
          <About />
        </ScrollReveal>

        <ScrollReveal>
          <CallForPapers />
        </ScrollReveal>

        <ScrollReveal>
          <Registration />
        </ScrollReveal>

        <ScrollReveal>
          <ImportantDates />
        </ScrollReveal>

        <Schedule />

        <Speakers />

        {/* <ScrollReveal>
          <Downloads />
        </ScrollReveal> */}

        <ScrollReveal>
          <Committee />
        </ScrollReveal>

        <ScrollReveal>
          <Editors />
        </ScrollReveal>

        <ScrollReveal>
          <Gallery />
        </ScrollReveal>

        <ScrollReveal>
          <Venue />
        </ScrollReveal>

        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}

