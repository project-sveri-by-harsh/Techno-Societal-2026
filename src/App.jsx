import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CallForPapers from './components/CallForPapers';
import ImportantDates from './components/ImportantDates';
import Registration from './components/Registration';
import Gallery from './components/Gallery';
import Venue from './components/Venue';
import Contact from './components/Contact';
import Committee from './components/Committee';
import Footer from './components/Footer';
import Editors from './components/Editors';

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <CallForPapers />

        <Registration />

        <ImportantDates />

        <section id="speakers" className="section-padding bg-surface-alt">
          <h2 className="section-title text-white">Speakers</h2>
          <p className="section-subtitle">Coming in Chunk 6</p>
        </section>

        <Committee />
        
        <Editors />

        <Gallery />

        <Venue />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
