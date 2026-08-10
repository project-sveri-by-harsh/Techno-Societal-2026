import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CallForPapers from './components/CallForPapers';
import ImportantDates from './components/ImportantDates';
import Registration from './components/Registration';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Downloads from './components/Downloads';
import Gallery from './components/Gallery';
import Venue from './components/Venue';
import Contact from './components/Contact';
import Committee from './components/Committee';
import Footer from './components/Footer';
import Editors from './components/Editors';
import ScrollReveal from './components/ScrollReveal';

export default function App() {
  return (
    <>
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

        <ScrollReveal>
          <Downloads />
        </ScrollReveal>

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
    </>
  );
}
